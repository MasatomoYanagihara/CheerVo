<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(App\Voice::class, function (Faker $faker) {
    return [
        'id' => Str::random(12),
        'user_id' => fn () => factory(App\User::class)->create()->id,
        'title' => Str::random(12),
        'filename' => Str::random(12) . '.mp3',
        'created_at' => $faker->dateTime(),
        'updated_at' => $faker->dateTime(),
    ];
});