<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tramo extends Model
{
    protected $table = 'tramo';
    protected $primaryKey = 'idTramo';
    protected $fillable = ["inicioTra","terminoTra","kmTra","peajeTra","camionetaTra","puntoTra"];
    public $timestamps = false;

    /*public function cargos()
    {
        return $this->hasMany('App\Producto');
    }*/
}