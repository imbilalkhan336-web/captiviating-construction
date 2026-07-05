<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('content_blocks', function (Blueprint $table) {
            $table->id();
            $table->string('page')->default('heating')->index();
            $table->string('type')->default('section'); // section | faq | image
            $table->string('heading')->nullable();       // section title / faq question / image alt
            $table->text('body')->nullable();            // section paragraphs / faq answer
            $table->string('image_path')->nullable();    // image src for image blocks
            $table->unsignedInteger('position')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('content_blocks');
    }
};
