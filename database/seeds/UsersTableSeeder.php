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
            'name' => 'Yanagihara',
            'email' => 'yanagihara@test.jp',
            'img_url' => 'https://images.unsplash.com/photo-1528105862282-e4333365c1d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            'password' => Hash::make('password'),
        ]);
        DB::table('users')->insert(
            [
                'name' => 'Nana',
                'email' => 'nana@test.jp',
                'img_url' => 'https://images.unsplash.com/photo-1532723136756-147542750512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                'password' => Hash::make('password'),
        ]);
        DB::table('users')->insert(
            [
                'name' => 'Numata',
                'email' => 'numata@test.jp',
                'img_url' => 'https://images.unsplash.com/photo-1517281749396-564b95a206c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                'password' => Hash::make('password'),
            ]);
        DB::table('users')->insert(
            [
                'name' => 'Jason',
                'email' => 'jason@test.jp',
                'img_url' => 'https://images.unsplash.com/photo-1521913626209-0fbf68f4c4b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                'password' => Hash::make('password'),
            ]);
        DB::table('users')->insert(
            [
                'name' => 'Mike',
                'email' => 'mike@test.jp',
                'img_url' => 'https://images.unsplash.com/photo-1548504769-900b70ed122e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                'password' => Hash::make('password'),
            ]);
        DB::table('users')->insert(
            [
                'name' => 'Lisa',
                'email' => 'lisa@test.jp',
                'img_url' => 'https://images.unsplash.com/flagged/photo-1593005510329-8a4035a7238f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                'password' => Hash::make('password'),
            ]);
        DB::table('users')->insert(
            [
                'name' => 'Pawel',
                'email' => 'pawel@test.jp',
                'img_url' => 'https://images.unsplash.com/photo-1593827436316-f25fa93a1af1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                'password' => Hash::make('password'),
            ]);
        DB::table('users')->insert(
            [
                'name' => 'Levis',
                'email' => 'levis@test.jp',
                'img_url' => 'https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjI5MzI0fQ&auto=format&fit=crop&w=500&q=60',
                'password' => Hash::make('password'),
            ]);
        DB::table('users')->insert(
            [
                'name' => 'Markus',
                'email' => 'markus@test.jp',
                'img_url' => 'https://images.unsplash.com/photo-1536228891610-d27ef66f7110?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                'password' => Hash::make('password'),
            ]);
        DB::table('users')->insert(
            [
                'name' => 'Steve',
                'email' => 'steve@test.jp',
                'img_url' => 'https://images.unsplash.com/photo-1572635148818-ef6fd45eb394?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                'password' => Hash::make('password'),
            ]);
        DB::table('users')->insert(
            [
                'name' => 'John',
                'email' => 'john@test.jp',
                'img_url' => 'https://images.unsplash.com/photo-1530982011887-3cc11cc85693?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                'password' => Hash::make('password'),
            ]);
        DB::table('users')->insert(
            [
                'name' => 'testuser',
                'email' => 'test@test.jp',
                'img_url' => 'https://images.unsplash.com/photo-1565267172527-5cad7255d962?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                'password' => Hash::make('testuser'),
            ]);
    }
    
}
