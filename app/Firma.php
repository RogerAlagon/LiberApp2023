<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Firma extends Model
{
    protected $table = 'firma';
    protected $primaryKey = 'idFirma';
    protected $fillable = ["firmaFir","Usuario_idUsuario"];
    public $timestamps = false;

    /*public function cargos()
    {
        return $this->hasMany('App\Producto');
    }*/
}