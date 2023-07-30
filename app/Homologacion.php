<?php 

namespace App; 

use Illuminate\Database\Eloquent\Model; 

class Homologacion extends Model 
{
    protected $table = 'homologacion'; 
    protected $primaryKey = 'idHomologacion';
    protected $fillable = ["Entidad_idEntidad","Plantilla_idPlantilla","multiplicadorHom","tipoPla","tipoHom","estadoHom"];
    public $timestamps = false;
}