<?php

use Illuminate\Database\Seeder;

class VoicesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Voice::class, 100)->create();
    }
}
