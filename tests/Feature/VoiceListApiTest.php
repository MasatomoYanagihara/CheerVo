<?php

namespace Tests\Feature;

use App\Voice;
use App\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class VoiceListApiTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     */
    public function should_正しい構造のJSONを返却する()
    {
        // 5つの写真データを生成する
        factory(Voice::class, 5)->create();

        $response = $this->json('GET', route('voice.index'));

        // 生成したボイスデータを作成日降順で取得
        $photos = Voice::with(['owner'])->orderBy('created_at', 'desc')->get();

        // data項目の期待値
        $expected_data = $photos->map(function ($voice) {
            return [
                'id' => $voice->id,
                'url' => $voice->url,
                'owner' => [
                    'name' => $voice->owner->name,
                ],
            ];
        })
        ->all();

        $response->assertStatus(200)
            // レスポンスJSONのdata項目に含まれる要素が5つであること
            ->assertJsonCount(5, 'data')
            // レスポンスJSONのdata項目が期待値と合致すること
            ->assertJsonFragment([
                'data' => $expected_data,
                'liked_by_user' => false,
                'likes_count' => 0,
            ]);
    }
}
