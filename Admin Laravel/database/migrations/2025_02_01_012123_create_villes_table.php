<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::disableForeignKeyConstraints();
        Schema::create('villes', function (Blueprint $table) {
            $table->unsignedBigInteger('idVille')->primary();
            $table->string('nomVille');
            $table->foreignId('id_Region')->references('idRegion')->on('regions')->cascadeOnDelete()->cascadeOnUpdate();

        });
    }
    public function down(): void
    { Schema::dropIfExists('villes'); }
};
