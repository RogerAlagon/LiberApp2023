<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Dato extends Model
{
    protected $table = 'dato';
    protected $primaryKey = 'idDato';
    protected $fillable = ["valorDat","tipoDat","grupoDat"];
    public $timestamps = false;

    /*public function cargos()
    {
        return $this->hasMany('App\Producto');
    }*/
}