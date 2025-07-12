<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model {
    use HasFactory;
    protected $table = 'articles';
    protected $primaryKey = 'id_Article';
    protected $fillable = ['marque','nom','couleur','description','image','prix_HTVA','prix_TVAC','TVA','code_Barre'];

    public function fournisseurs() {
        return $this->belongsToMany(Fournisseur::class, 'catalogues', 'id_Article', 'id_Fournis')
                    ->withPivot('prix_HTVA', 'prix_TVAC')
                    ->withTimestamps();
    }
    
    public function categories(){
        return $this->belongsTo(Categorie::class, 'categories', 'numCat');
    }
}
