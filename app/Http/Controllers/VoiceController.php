<?php

namespace App\Http\Controllers;

use App\Voice;
use App\Comment;
use App\Http\Requests\StoreVoice;
use App\Http\Requests\StoreComment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class VoiceController extends Controller
{
    public function __construct()
    {
        // 認証が必要
        // indexメソッド（ボイス一覧）、showメソッド（ボイス詳細）は認証せずに閲覧させたいので除外
        $this->middleware('auth')->except(['index','show']);
    }

    /**
     * ボイス一覧
     */
    public function index()
    {
        $voices = Voice::with(['owner', 'likes', 'unlikes'])
        ->orderBy(Voice::CREATED_AT, 'desc')
        ->paginate(10);

        return $voices;
    }

    /**
     * ボイス検索
     * @param string $request
     * @return Voice
     */
    public function search(Request $request)
    {
        $keyword = $request->keyword;
 
        if (!empty($keyword)) {
            $voices = Voice::with(['owner'])
            ->where('title', 'LIKE', "%{$keyword}%")
            ->orderBy(Voice::CREATED_AT, 'desc')
            ->paginate(10);
        };
 
        return $voices;
    }

    /**
     * マイボイス
     * @param string $id
     * @return Voice
     */
    public function myVoice(string $id)
    {
        $voices = Voice::with(['owner'])
         ->where('user_id', $id)
         ->orderBy(Voice::CREATED_AT, 'desc')
         ->get();
 
        return $voices;
    }

    /**
     * ボイス投稿
     * @param StoreVoice $request
     * @return \Illuminate\Http\Response
     */
    public function create(StoreVoice $request)
    {
        $voice = new Voice();

        $voice->filename = $voice->id . '.mp3';

        // タイトル
        $voice->title = $request->get('title');

        // S3にファイルを保存する
        // 第三引数の'public'はファイルを公開状態で保存するため
        Storage::cloud()
            ->putFileAs('', $request->voice, $voice->filename, 'public');

        // データベースエラー時にファイル削除を行うため
        // トランザクションを利用する
        DB::beginTransaction();

        try {
            Auth::user()->voices()->save($voice);
            DB::commit();
        } catch (\Exception $exception) {
            DB::rollBack();
            // DBとの不整合を避けるためアップロードしたファイルを削除
            Storage::cloud()->delete($voice->filename);
            throw $exception;
        }

        // リソースの新規作成なので
        // レスポンスコードは201(CREATED)を返却する
        return response($voice, 201);
    }

    /**
     * ボイス詳細
     * @param string $id
     * @return Voice
     */
    public function show(string $id)
    {
        $voice = Voice::where('id', $id)
        ->with(['owner', 'comments.author', 'likes', 'unlikes'])->first();

        return $voice ?? abort(404);
    }

    
    /**
     * コメント投稿
     * @param Voice $voice
     * @param StoreComment $request
     * @return \Illuminate\Http\Response
     */
    public function addComment(Voice $voice, StoreComment $request)
    {
        $comment = new Comment();
        $comment->content = $request->get('content');
        $comment->user_id = Auth::user()->id;
        $voice->comments()->save($comment);

        // authorリレーションをロードするためにコメントを取得しなおす
        $new_comment = Comment::where('id', $comment->id)->with('author')->first();

        return response($new_comment, 201);
    }

    /**
     * いいね
     * @param string $id
     * @return array
     */
    public function like(string $id)
    {
        $voice = Voice::where('id', $id)->with('likes')->first();

        if (! $voice) {
            abort(404);
        }

        $voice->likes()->detach(Auth::user()->id);
        $voice->likes()->attach(Auth::user()->id);

        return ["voice_id" => $id];
    }

    /**
     * いいね解除
     * @param string $id
     * @return array
     */
    public function notlike(string $id)
    {
        $voice = Voice::where('id', $id)->with('likes')->first();

        if (! $voice) {
            abort(404);
        }

        $voice->likes()->detach(Auth::user()->id);

        return ["voice_id" => $id];
    }

    /**
     * unlike
     * @param string $id
     * @return array
     */
    public function unlike(string $id)
    {
        $voice = Voice::where('id', $id)->with('unlikes')->first();

        if (! $voice) {
            abort(404);
        }

        $voice->unlikes()->detach(Auth::user()->id);
        $voice->unlikes()->attach(Auth::user()->id);

        return ["voice_id" => $id];
    }

    /**
     * unlike解除
     * @param string $id
     * @return array
     */
    public function notunlike(string $id)
    {
        $voice = Voice::where('id', $id)->with('unlikes')->first();

        if (! $voice) {
            abort(404);
        }

        $voice->unlikes()->detach(Auth::user()->id);

        return ["voice_id" => $id];
    }
}
