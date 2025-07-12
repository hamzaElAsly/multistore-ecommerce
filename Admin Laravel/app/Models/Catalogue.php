<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Catalogue extends Model
{
    use HasFactory;
    protected $table = 'catalogues';
    protected $primaryKey = 'id_Categorie';
    protected $fillable = ['id_Article', 'id_Fournis', 'prix_HTVA', 'prix_TVAC'];

}
