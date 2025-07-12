<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::disableForeignKeyConstraints();
        Schema::create('commandes', function (Blueprint $table) {
            $table->unsignedBigInteger('id_Commande')->primary()->autoIncrement();
            $table->unsignedBigInteger('idClient');
            $table->foreign('idClient')->references('id_Client')->on('clients')->cascadeOnDelete()->cascadeOnUpdate();
            $table->integer('numero_Cmd');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('commandes');
    }
};
