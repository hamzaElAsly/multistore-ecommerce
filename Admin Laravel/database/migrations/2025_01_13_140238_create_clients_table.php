<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::disableForeignKeyConstraints();
        Schema::create('clients', function (Blueprint $table) {
            $table->unsignedBigInteger('id_Client')->primary()->autoIncrement();
            $table->string('prenom', 50); 
            $table->string('nom', 50);    
            $table->date('dateN');       
            $table->string('civilite', 10);
            $table->string('adresse', 100);
            $table->integer('codePostal');
            $table->string('ville', 50);
            $table->string('telephone', 15);
            $table->string('pass', 50);
            $table->string('email', 50); 
            $table->decimal('montant', 10, 2);
            $table->string('image'); 
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('clients');
    }
};
