<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(App\Voice::class, function (Faker $faker) {
    return [
        'id' => Str::random(12),
        'user_id' => $faker->numberBetween(1,3),
        'title' => $faker->realText($faker->numberBetween(10,20)),
        'filename' => Str::random(12) . '.mp3',
        'created_at' => $faker->dateTime(),
        'updated_at' => $faker->dateTime(),
    ];
});
