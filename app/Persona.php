<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Persona extends Model
{
    protected $table = 'persona';
    protected $primaryKey = 'idPersona';
    protected $fillable = ["nombrePer","paternoPer","maternoPer","codigoPer","Cargo_idCargo","fnacimientoPer","activoPer","Area_idArea","fingresoPer","fcesePer","planillaPer","pensionPer","comisionPer","celularPer","ecelularPer","correoPer","Grupo_idGrupo","departamentoPer","provinciaPer","distritoPer","residenciaPer","dniPer","direccionPer","cusppPer","mcesePer",'bancoPer','nbancoPer',"licenciaPer"];

	public $timestamps = false;

    /*public function cargos()
    {
        return $this->hasMany('App\Producto');
    }*/
}
