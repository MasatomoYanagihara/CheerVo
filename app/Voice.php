<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;

class Voice extends Model
{
    /** プライマリキーの型 */
    protected $keyType = 'string';

    /** JSONに含める属性 */
    protected $visible = [
        'id', 'owner', 'url', 'comments', 'title', 'created_at',
        'likes_count', 'liked_by_user', 'unlikes_count', 'unliked_by_user', 'comments_count'
    ];

    /** JSONに含める属性（アクセサ） */
    protected $appends = [
        'url', 'likes_count', 'liked_by_user', 'unlikes_count', 'unliked_by_user', 'comments_count'
    ];

    /** IDの桁数 */
    const ID_LENGTH = 12;

    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);

        if (! Arr::get($this->attributes, 'id')) {
            $this->setId();
        }
    }

    /**
     * ランダムなID値をid属性に代入する
     */
    private function setId()
    {
        $this->attributes['id'] = $this->getRandomId();
    }

    /**
     * ランダムなID値を生成する
     * @return string
     */
    private function getRandomId()
    {
        $characters = array_merge(
            range(0, 9),
            range('a', 'z'),
            range('A', 'Z'),
            ['-', '_']
        );

        $length = count($characters);

        $id = "";

        for ($i = 0; $i < self::ID_LENGTH; $i++) {
            $id .= $characters[random_int(0, $length - 1)];
        }

        return $id;
    }

    /**
     * アクセサ - url
     * @return string
     */
    public function getUrlAttribute()
    {
        return Storage::cloud()->url($this->attributes['filename']);
    }

    /**
     * アクセサ - likes_count
     * @return int
     */
    public function getLikesCountAttribute()
    {
        return $this->likes->count();
    }

    /**
     * アクセサ - liked_by_user
     * @return boolean
     */
    public function getLikedByUserAttribute()
    {
        if (Auth::guest()) {
            return false;
        }

        // contains()でログインユーザーのIDと一致するいいねが含まれるか調べる
        return $this->likes->contains(function ($user) {
            return $user->id === Auth::user()->id;
        });
    }

    /**
     * アクセサ - unlikes_count
     * @return int
     */
    public function getunLikesCountAttribute()
    {
        return $this->unlikes->count();
    }

    /**
     * アクセサ - unliked_by_user
     * @return boolean
     */
    public function getunLikedByUserAttribute()
    {
        if (Auth::guest()) {
            return false;
        }

        return $this->unlikes->contains(function ($user) {
            return $user->id === Auth::user()->id;
        });
    }

    /**
     * アクセサ - comments_count
     * @return int
     */
     public function getCommentsCountAttribute()
     {
         return $this->comments->count();
     }

    /**
     * リレーションシップ - usersテーブル
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function owner()
    {
        return $this->belongsTo('App\User', 'user_id', 'id', 'users');
    }

    /**
     * リレーションシップ - commentsテーブル
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function comments()
    {
        return $this->hasMany('App\Comment')->orderBy('id', 'desc');
    }

    /**
     * リレーションシップ - usersテーブル
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function likes()
    {
        return $this->belongsToMany('App\User', 'likes')->withTimestamps();
    }

    /**
     * リレーションシップ - usersテーブル
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function unlikes()
    {
        return $this->belongsToMany('App\User', 'unlikes')->withTimestamps();
    }
}
