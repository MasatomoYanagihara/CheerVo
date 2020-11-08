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
            'img_url' => 'https://images.unsplash.com/photo-1490650034439-fd184c3c86a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            'password' => Hash::make('hogehoge'),
        ]);
        DB::table('users')->insert(
            [
                'name' => 'NANA',
                'email' => 'nana@hoge.jp',
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
        DB::table('users')->insert(
            [
                'name' => 'ハリー',
                'email' => 'hari@hoge.jp',
                'img_url' => 'https://images.unsplash.com/photo-1569079349972-cbf332db1153?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                'password' => Hash::make('hogehoge'),
            ]);
        DB::table('users')->insert(
            [
                'name' => 'Mike',
                'email' => 'mike@hoge.jp',
                'img_url' => 'https://images.unsplash.com/photo-1603072007571-7295a309e45f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                'password' => Hash::make('hogehoge'),
            ]);
        DB::table('users')->insert(
            [
                'name' => 'Lisa',
                'email' => 'lisa@hoge.jp',
                'img_url' => 'https://images.unsplash.com/photo-1603471567917-74fa6b3f7fe4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                'password' => Hash::make('hogehoge'),
            ]);
        DB::table('users')->insert(
            [
                'name' => 'testuser',
                'email' => 'test@test.jp',
                'img_url' => 'https://images.unsplash.com/photo-1587354004405-bbce24c893c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                'password' => Hash::make('testuser'),
            ]);
    }
    
}
