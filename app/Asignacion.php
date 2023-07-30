<?php 

namespace App; 

use Illuminate\Database\Eloquent\Model; 

class Asignacion extends Model 
{
    protected $table = 'asignacion'; 
    protected $primaryKey = 'idAsignacion';
    protected $fillable = ["nroAsi","femisionAsi","fvencimientoAsi","tipoAsi","escaneoAsi","Entidad_idEntidad","montoAsi","situacionAsi","fsituacionAsi","observacionAsi","Medida_idDato","estadoAsi","Distribucion_idDistribucion","Implemento_idImplemento","vencimientoAsi","fcreacionAsi"];
    public $timestamps = false;
}

