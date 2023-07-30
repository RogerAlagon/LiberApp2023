<?php 
namespace App\Traits; 
use DB;
use App\Kilometraje;
use App\Vehiculo;
use Illuminate\Http\Request; 

trait KilometrajeTrait { 

    public function ValidarUltimoKm( $idVehiculo ) 
    {
        $obj_vehiculo = Vehiculo::select('idVehiculo','KmValido_idKilometraje')
                ->where('idVehiculo', $idVehiculo)
                ->get();
            
        if ( $obj_vehiculo[0]->KmValido_idKilometraje == 0 ) 
        {
            $obj_kilometraje = Kilometraje::select('kilometraje.*')
                ->where('Vehiculo_idVehiculo', $idVehiculo)
                ->orderBy('fechaKil','DESC')
                ->first();
            //Actualizo km valido unidad 
            if ( isset( $obj_kilometraje->idKilometraje )) 
            {
                $obj_vehiculo = Vehiculo::select('idVehiculo','KmValido_idKilometraje')
                    ->where('idVehiculo', $idVehiculo)
                    ->update(['KmValido_idKilometraje' => $obj_kilometraje->idKilometraje]);
            }
        }

        $obj_vehiculo = Vehiculo::select('idVehiculo','KmValido_idKilometraje','idKilometraje','kilometrajeKil','horometrajeKil',
                                        'fechaKil','Vehiculo_idVehiculo','galonKil','tipoKil','Persona_idPersona','usuarioKil')
            ->join('kilometraje','kilometraje.idKilometraje','=','vehiculo.KmValido_idKilometraje')
            ->where('idVehiculo', $idVehiculo)
            ->get(); 

        $fecha_actual = date("Y-m-d"); 
        $ultimoRegistro = date("Y-m-d", strtotime( $obj_vehiculo[0]->fechaKil )); 
        $f_inicio = date_create( $fecha_actual ); 
        $f_fin = date_create( $ultimoRegistro ); 
        $diferencia = date_diff( $f_inicio, $f_fin )->format('%a'); 
    
        $fechas = []; 
        $fecha_actual= $ultimoRegistro; 
        $fechas[] = $fecha_actual;
        for( $i = 0; $i < $diferencia; $i++)
        {
            $fecha_actual = date("Y-m-d", strtotime($fecha_actual."+ 1 days"));
            $fechas[] = $fecha_actual;
        }
        $arr_kilometrajes = Kilometraje::whereIn(DB::raw("DATE(fechaKil)"), $fechas)
            ->select('kilometrajeKil','fechaKil','tipoKil','idKilometraje','Vehiculo_idVehiculo','horometrajeKil')
            ->where('Vehiculo_idVehiculo',$idVehiculo)
            ->where('idKilometraje','>=',$obj_vehiculo[0]->idKilometraje)
            ->whereNull('invalidoKil')
            //->whereRaw('(tipoKil = "MOVIL" or tipoKil is null or tipoKil = "COMBUSTIBLE")')
            ->orderBy('fechaKil','desc')
            ->get();
        $kilometrajes = [];
        $fechaRegistro = [];
        $contador = 1;

        foreach( $arr_kilometrajes as $ukilometraje ) 
        {
            $fecha_sel = date("Y-m-d",strtotime($ukilometraje->fechaKil));
            $kilometrajes[$fecha_sel] = $ukilometraje;
            $fechaRegistro[] = $fecha_sel;
        }
        $arr_kilometrajes = [];
        $km_validado = [];
        $fechaAtras = array_reverse( $fechaRegistro );
        $cont = 0;
        foreach ( $kilometrajes as $ukil ) 
        {
            if ( isset( $fechaRegistro[$contador] ))
            {
                $km_actual = intval( $kilometrajes[$fechaAtras[$contador]]->kilometrajeKil ) - intval( $kilometrajes[$fechaAtras[$cont]]->kilometrajeKil );
                if ($km_actual >= 1 && $km_actual <= 1000 ) 
                {
                    $km_validado[] = $kilometrajes[$fechaAtras[$contador]];
                }
                $contador++;  
                $cont++;
            }
        }
        $km_ordenado_fecha = array_reverse( $km_validado );
        foreach ( $km_ordenado_fecha as $ukilometraje ) 
        {
            $obj_vehiculo = Vehiculo::select('idVehiculo','KmValido_idKilometraje')
                ->where('idVehiculo', $ukilometraje->Vehiculo_idVehiculo)
                ->update(['KmValido_idKilometraje' => $ukilometraje->idKilometraje]);
            break;
        }
        return $km_ordenado_fecha;
    }
}