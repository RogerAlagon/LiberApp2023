<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Convoy extends Model
{
    protected $table = 'convoy';
    protected $primaryKey = 'idConvoy';
    protected $fillable = ["codigoCon","cargaCon","finicioCon","fterminoCon","Ruta_idRuta","cambioCon","Cliente_idExterno","Remitente_idExterno","Destinatario_idExterno","Partida_idDato","Llegada_idDato","tvehiculoCon","origenCon","destinoCon","roundtripCon","pasoCon","tipoCon","Cuenta_idCuenta","estadoCon","ubicacionCon"];
    public $timestamps = false;
    /*public function cargos()
    {
        return $this->hasMany('App\Producto');
    }*/
}