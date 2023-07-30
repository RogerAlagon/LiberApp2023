<?php 

namespace App; 

use Illuminate\Database\Eloquent\Model; 

class Ordenc extends Model 
{
    protected $table = 'ordenc'; 
    protected $primaryKey = 'idOrdenc'; 
    protected $fillable = ["femisionOrd","fcreacionOrd","faprobacionOrd","estadoOrd","Externo_idExterno","totalOrd","Usuario_idUsuario","tipoOrd", 
                           "observacionOrd","subtotalOrd","igvOrd","detraccionOrd","fpagoOrd","adelantoOrd","pagoOrd","Moneda_idDato","Inversion_idDato", 
                           "Area_idArea"];
    public $timestamps = false;
}