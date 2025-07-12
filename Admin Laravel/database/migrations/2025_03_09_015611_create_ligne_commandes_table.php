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
        Schema::disableForeignKeyConstraints();
        Schema::create('ligne_commandes', function (Blueprint $table) {
            $table->unsignedBigInteger('idCommande');
            $table->unsignedBigInteger('idArticle');
            $table->foreign('idCommande')->references('id_Commande')->on('commandes')->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreign('idArticle')->references('id_Article')->on('articles')->cascadeOnDelete()->cascadeOnUpdate();
            $table->integer('qte_Ligne_Cmd');
            $table->decimal('prixTotal', 10, 2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ligne__commandes');
    }
};
