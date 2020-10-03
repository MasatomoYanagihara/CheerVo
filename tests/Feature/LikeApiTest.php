<?php

namespace Tests\Feature;

use App\Voice;
use App\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class LikeApiTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();

        $this->user = factory(User::class)->create();

        factory(Voice::class)->create();
        $this->voice = Voice::first();
    }

    /**
     * @test
     */
    public function should_いいねを追加できる()
    {
        $response = $this->actingAs($this->user)
            ->json('PUT', route('voice.like', [
                'id' => $this->voice->id,
            ]));

        $response->assertStatus(200)
            ->assertJsonFragment([
                'voice_id' => $this->voice->id,
            ]);

        $this->assertEquals(1, $this->voice->likes()->count());
    }

    /**
     * @test
     */
    public function should_2回同じ写真にいいねしても1個しかいいねがつかない()
    {
        $param = ['id' => $this->voice->id];
        $this->actingAs($this->user)->json('PUT', route('voice.like', $param));
        $this->actingAs($this->user)->json('PUT', route('voice.like', $param));

        $this->assertEquals(1, $this->voice->likes()->count());
    }

    /**
     * @test
     */
    public function should_いいねを解除できる()
    {
        $this->voice->likes()->attach($this->user->id);

        $response = $this->actingAs($this->user)
            ->json('DELETE', route('voice.like', [
                'id' => $this->voice->id,
            ]));

        $response->assertStatus(200)
            ->assertJsonFragment([
                'voice_id' => $this->voice->id,
            ]);

        $this->assertEquals(0, $this->voice->likes()->count());
    }
}
