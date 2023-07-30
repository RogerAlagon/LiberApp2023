<?php 

namespace App; 

use Illuminate\Database\Eloquent\Model; 

class Plantilla extends Model 
{
    protected $table = 'plantilla'; 
    protected $primaryKey = 'idPlantilla';
    protected $fillable = ["Area_idArea","nombrePla","Cuenta_idDato","Entidad_idDato","multiplicadorPla"];
    public $timestamps = false;
}