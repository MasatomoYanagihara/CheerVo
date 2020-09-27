<?php

use Illuminate\Http\Request;

// 会員登録
Route::post('/register', 'Auth\RegisterController@register')->name('register');

// ログイン
Route::post('/login', 'Auth\LoginController@login')->name('login');

// ログアウト
Route::post('/logout', 'Auth\LoginController@logout')->name('logout');

// ボイス一覧取得
Route::get('/voices', 'VoiceController@index')->name('voice.index');

// ボイス投稿
Route::post('/voices', 'VoiceController@create')->name('voice.create');

// ボイス詳細
Route::get('/voices/{id}', 'VoiceController@show')->name('voice.show');

// コメント
Route::post('/voices/{voice}/comments', 'VoiceController@addComment')->name('voice.comment');

// ログインユーザー
Route::get('/user', function () {
    return Auth::user();
})->name('user');

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
