<?php

use Illuminate\Http\Request;

// 会員登録
Route::post('/register', 'Auth\RegisterController@register')->name('register');

// ログイン
Route::post('/login', 'Auth\LoginController@login')->name('login');

// ログアウト
Route::post('/logout', 'Auth\LoginController@logout')->name('logout');

// ボイス投稿
Route::post('/voices', 'VoiceController@create')->name('voice.create');

// ログインユーザー
Route::get('/user', function () {
    return Auth::user();
})->name('user');

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
