<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert(
            [
            'name' => '柳原政知',
            'email' => 'yanagihara@hoge.jp',
            'img_url' => 'https://laravel-voice.s3-ap-northeast-1.amazonaws.com/faceimg.png',
            'password' => Hash::make('hogehoge'),
        ]);
        DB::table('users')->insert(
            [
                'name' => '原口菜々',
                'email' => 'haraguchi@hoge.jp',
                'img_url' => 'https://images.unsplash.com/photo-1596797882870-8c33deeac224?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                'password' => Hash::make('hogehoge'),
        ]);
        DB::table('users')->insert(
            [
                'name' => '沼田竜平',
                'email' => 'numata@hoge.jp',
                'img_url' => 'https://images.unsplash.com/photo-1593626986521-f24d25d60103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                'password' => Hash::make('hogehoge'),
            ]);
    }
    
}
