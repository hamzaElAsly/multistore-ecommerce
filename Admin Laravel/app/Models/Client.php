<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;
    protected $table = 'clients';
    protected $primaryKey = 'id_Client';
    protected $fillable = [
        'prenom',
        'nom',
        'dateN',
        'civilite',
        'adresse',
        'codePostal',
        'ville',
        'telephone',
        'email',
    ];
}
