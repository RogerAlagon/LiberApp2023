<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Componente extends Model
{
    protected $table = 'componente';
    protected $primaryKey = 'idComponente';
    protected $fillable = ["codigoCom","nombreCom","Apartado_idApartado","versionCom","ordenCom"];
    public $timestamps = false;

    /*public function cargos()
    {
        return $this->hasMany('App\Producto');
    }*/
}