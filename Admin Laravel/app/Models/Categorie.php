<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Article;
class Categorie extends Model
{
    use HasFactory;
    protected $table = 'categories';
    protected $primaryKey = 'numCat';
    protected $fillable = ['nomCat'];

    public function article()
    {
        return $this->hasMany(Article::class, 'articles', 'id_Article');
    }
}
