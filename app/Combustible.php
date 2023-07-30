<?php 

namespace App; 

use Illuminate\Database\Eloquent\Model; 

class Combustible extends Model 
{ 
    protected $table = 'combustible'; 
    protected $primaryKey = 'idCombustible'; 
    protected $fillable = ["Tipo_idDato","precioCom","fechaCom","Grifo_idGrifo","estadoCom"];
    public $timestamps = false;
}