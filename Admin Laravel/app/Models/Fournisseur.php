<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Fournisseur extends Model
{
    use HasFactory;
    protected $table = 'fournisseurs';
    protected $primaryKey = 'id_Fournis';
    protected $fillable = ['nom','adresse','ville','code_Postal','email','image','telephone','TVA' ];

    public function articles(){
        return $this->belongsToMany(Article::class, 'catalogues', 'id_Fournis', 'id_Article')
                    ->withPivot('prix_HTVA', 'prix_TVAC')
                    ->withTimestamps();
    }
}
