<?php 

namespace App; 

use Illuminate\Database\Eloquent\Model; 

class Monitoreo extends Model 
{
    protected $table = 'monitoreo'; 
    protected $primaryKey = 'idMonitoreo';
    protected $fillable = ["Vehiculo_idVehiculo","Acople_idVehiculo","Persona_idPersona","detalleMon","finicioMon","hinicioMon","fterminoMon","hterminoMon","bahiaMon","idealMon","estadoMon","observacionMon"];
    public $timestamps = false;
}
