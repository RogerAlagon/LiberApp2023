<?php 

namespace App; 

use Illuminate\Database\Eloquent\Model; 

class Estructura extends Model 
{
    protected $table = 'estructura'; 
    protected $primaryKey = 'idEstructura'; 
    protected $fillable = ["graficoEst","estructuraEst","cantidadEst","Tipo_idDato","nombreEst"]; 
    public $timestamps = false;
}
