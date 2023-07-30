<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Monto extends Model
{
    protected $table = 'monto';
    protected $primaryKey = 'idMonto';
   	protected $fillable = [ "detalleMon","conceptoMon","tipoMon","totalMon","Persona_idPersona","activoMon","estadoMon","fechaMon","cuotaMon","ncuotaMon","fsolicitudMon","faprobaciónMon","faplicacionMon","frendicionMon","Servicio_idServicio","disposicionMon","observacionMon","fanulacionMon","Rendicion_idRendicion","saldoMon","adicionalMon"];

    public $timestamps = false;

    /*public function cargos()
    {
        return $this->hasMany('App\Producto');
    }*/
}