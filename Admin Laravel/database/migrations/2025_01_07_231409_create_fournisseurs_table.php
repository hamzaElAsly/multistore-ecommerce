<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::disableForeignKeyConstraints();
        Schema::create('fournisseurs', function (Blueprint $table) {
            $table->unsignedBigInteger('id_Fournis')->primary()->autoIncrement();
            $table->string('nom', 50);
            $table->string('prenom', 50);
            $table->string('adresse', 100);
            $table->string('ville', 50);
            $table->integer('code_Postal');
            $table->string('email', 50);
            $table->text('image');
            $table->string('telephone', 20);
            $table->decimal('TVA', 4, 2);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('fournisseurs');
    }
};
