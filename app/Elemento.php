<?php 

namespace App;

use Illuminate\Database\Eloquent\Model;

class Elemento extends Model 
{
    protected $table = 'elemento'; 
    protected $primaryKey = 'idElemento';
    protected $fillable = ["codigoEle","Tipo_idDato","activoEle","Grupo_idGrupo","Actual_idEntidad","Ultimo_idMovimiento","Entidad_idDato","fcompraEle","Marca_idDato","Modelo_idDato","costoEle"];
    public $timestamps = false;
}
