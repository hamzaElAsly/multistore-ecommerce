<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::disableForeignKeyConstraints();
        Schema::create('catalogues', function (Blueprint $table) {
            $table->unsignedBigInteger('idArticle');
            $table->unsignedBigInteger('idFournis');
            $table->foreign('idArticle')->references('id_Article')->on('articles')->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreign('idFournis')->references('id_Fournis')->on('fournisseurs')->cascadeOnDelete()->cascadeOnUpdate();
            $table->decimal('prix_HTVA', 10, 2);
            $table->decimal('prix_TVAC', 10, 2);
            $table->timestamps();
        });
    }
    public function down(): void
    {
        Schema::dropIfExists('catalogues');
    }
};
