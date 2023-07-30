<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Recorrido extends Model
{
    protected $table = 'recorrido';
    protected $primaryKey = 'idRecorrido';
    protected $fillable = ["Convoy_idConvoy","tipoRec","Recorrido_idDato","vcambioRec","pcambioRec","finicioRec","fterminoRec","tramosRec","etramosRec","ctramosRec","roundtripRec","ecocherasRec","dviaticosRec","ecocheraRec","dviaticoRec","idealRec","detallesRec","totalesRec","aplicablesRec"];
    public $timestamps = false;

    /*public function cargos()
    {
        return $this->hasMany('App\Producto');
    }*/
}