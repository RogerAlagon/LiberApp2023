<?php 

namespace App; 

use Illuminate\Database\Eloquent\Model; 

class Implemento extends Model 
{
    protected $table = 'implemento'; 
    protected $primaryKey = 'idImplemento';
    protected $fillable = ["nombreImp","vigenciaImp","renovableImp","graveImp","medioImp","leveImp","Entidad_idDato","costoImp","cantidadImp","Grupo_idGrupo","tipoImp","propiedadImp","Proveedor_idExterno","validacionImp","Medida_idDato","alertaImp","activoImp","renovacionImp"];
    public $timestamps = false;
}