<?php 

namespace App; 

use Illuminate\Database\Eloquent\Model; 

class Entidad extends Model 
{
    protected $table = 'entidad'; 
    protected $primaryKey = 'idEntidad';
    protected $fillable = ["nombreEnt","activoEnt","Entidad_idExterno","Entidad_idDato"];
    public $timestamps = false;
}
