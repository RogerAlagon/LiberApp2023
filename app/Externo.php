<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Externo extends Model
{
    protected $table = 'externo';
    protected $primaryKey = 'idExterno';
    protected $fillable = ["nombreExt","abreviaturaExt","servicioExt","direccionExt","rucExt","Moneda_idDato","Igv_idDato"];
    public $timestamps = false;

    /*public function cargos()
    {
        return $this->hasMany('App\Producto');
    }*/
}
