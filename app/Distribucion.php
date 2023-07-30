<?php 

namespace App; 

use Illuminate\Database\Eloquent\Model; 

class Distribucion extends Model 
{
    protected $table = 'distribucion'; 
    protected $primaryKey = 'idDistribucion';
    protected $fillable = ["Plantilla_idPlantilla","Implemento_idImplemento","validacionDis","alertaDis","estadoDis","renovacionDis"];
    public $timestamps = false;
}