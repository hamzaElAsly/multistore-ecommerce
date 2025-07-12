<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::disableForeignKeyConstraints();
        Schema::create('articles', function (Blueprint $table) {
            $table->unsignedBigInteger('id_Article')->primary()->autoIncrement();
            $table->string('marque', 50);
            $table->string('nom', 50);
            $table->string('couleur', 20) ;
            $table->unsignedBigInteger('numCat');
            $table->foreign('numCat')->references('numCat')->on('categories')->cascadeOnDelete()->cascadeOnUpdate();
            $table->text('description') ;
            $table->decimal('prix_HTVA', 10,2);
            $table->decimal('prix_TVAC', 10,2);
            $table->decimal('TVA', 3,2) ;
            $table->text('image') ;
            $table->string('code_Barre', 20)->unique() ;
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('articles');
    }
};
