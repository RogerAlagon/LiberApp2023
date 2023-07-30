<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApplicationController;

//Personal
use App\Http\Controllers\AreaController;
use App\Http\Controllers\CargoController;
use App\Http\Controllers\PermisoController;
use App\Http\Controllers\DescuentoController;
//Planilla
use App\Http\Controllers\PersonaController;
use App\Http\Controllers\MontoController;
//Combustible
use App\Http\Controllers\CuentaController;
use App\Http\Controllers\GrifoController;
use App\Http\Controllers\AbastecimientoController;
use App\Http\Controllers\ConsumoController;
use App\Http\Controllers\IntervaloController;
use App\Http\Controllers\CombustibleController;
//Transporte
use App\Http\Controllers\GeneralController;
use App\Http\Controllers\VehiculoController;
use App\Http\Controllers\TramoController;
use App\Http\Controllers\RutaController;
use App\Http\Controllers\ConvoyController;
use App\Http\Controllers\SeguimientoController;
use App\Http\Controllers\ServicioController;
use App\Http\Controllers\EventoController;
use App\Http\Controllers\GuiaController;
//Mantenimiento
use App\Http\Controllers\ReporteController;
use App\Http\Controllers\ReportefController;
use App\Http\Controllers\KilometrajeController;
use App\Http\Controllers\FallaController;
use App\Http\Controllers\OrdentController;
use App\Http\Controllers\BacklogController;
use App\Http\Controllers\TrabajoController;
use App\Http\Controllers\MonitoreoController;
//Logistica
use App\Http\Controllers\OrdencController;
use App\Http\Controllers\MaterialController;
use App\Http\Controllers\AlmacenController;
use App\Http\Controllers\KardexController;

//Finanza
use App\Http\Controllers\ComprobanteController;
//Generales
use App\Http\Controllers\DatoController;
use App\Http\Controllers\ImplementoController;
use App\Http\Controllers\ExternoController;
use App\Http\Controllers\AsignacionController;
use App\Http\Controllers\DistribucionController;
use App\Http\Controllers\PlantillaController;
use App\Http\Controllers\EntidadController;
use App\Http\Controllers\GrupoController;
use App\Http\Controllers\HomologacionController;
use App\Http\Controllers\ArchivoController;
//Proyecto
use App\Http\Controllers\ProyectoController;
//Temporales
//use App\Http\Controllers\CuentaController;
use App\Http\Controllers\PGrupoController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
	/**************************************************
	************* PERSONA *************
	**************************************************/

	//Area
	Route::get('LiberAPP/Area/Select',[AreaController::class, 'ListarSelect']);
	//Cargo 
	Route::get('LiberAPP/Cargo/Select', [CargoController::class, 'ListarSelect']);
	//Grupo
	Route::get('LiberAPP/Grupo/Select', [PGrupoController::class, 'ListarSelect']);
	//Persona
	Route::get('LiberAPP/Persona',[PersonaController::class, 'Listar']);
	Route::get('LiberAPP/Persona/Select',[PersonaController::class, 'ListarSelect']);
	Route::get('LiberAPP/Persona/SelectCesado',[PersonaController::class, 'ListarCesado']);
	Route::get('LiberAPP/Persona/SelectPersona',[PersonaController::class, 'ListarSelectPersona']);
	Route::get('LiberAPP/Persona/SelectConductor',[PersonaController::class, 'SelectConductor']);
	Route::post('LiberAPP/Persona/Guardar',[PersonaController::class, 'Guardar']);
	Route::post('LiberAPP/Persona/Actualizar',[PersonaController::class, 'Actualizar']);
	Route::get('LiberAPP/Persona/Directorio',[PersonaController::class, 'Directorio']);
	//Monto
	Route::get('LiberAPP/Monto/Historial/{estado}/{finicio}/{ffin}/{persona}/{viatico}', [MontoController::class, 'ListarHistorial']);
	Route::get('LiberAPP/Monto/ExportarHistorial/{estado}/{finicio}/{ffin}/{persona}/{viatico}', [MontoController::class, 'ExportarHistorial']);
	Route::get('LiberAPP/Monto/Usuario/{estado}/{usuario}', [MontoController::class, 'ListarUsuario']);
	//Route::get('LiberAPP/Monto/ExportarDeposito/{fecha}', [MontoController::class, 'ExportarDeposito']);
	Route::get('LiberAPP/Monto/ExportarDeposito/{tipo}/{grupos}', [MontoController::class, 'ExportarDeposito']);
	Route::get('LiberAPP/Monto', [MontoController::class, 'ListarTodo']);
	Route::post('LiberAPP/Monto/Procesar', [MontoController::class, 'Procesar']);
	Route::post('LiberAPP/Monto/ProcesarUnidad', [MontoController::class, 'ProcesarUnidad']);
	Route::post('LiberAPP/Monto/Guardar/{usuario}', [MontoController::class, 'Guardar']);
	Route::post('LiberAPP/Monto/GuardarAdicional/{usuario}', [MontoController::class, 'GuardarAdicional']);
	Route::post('LiberAPP/Monto/GuardarControl/{usuario}/{tipo}', [MontoController::class, 'GuardarControl']);
	Route::post('LiberAPP/Monto/GuardarControlLibre/{usuario}/{tipo}', [MontoController::class, 'GuardarControlLibre']);
	Route::put('LiberAPP/Monto/Desactivar', [MontoController::class, 'Desactivar']);
	Route::post('LiberAPP/Monto/ProcesarAplicado', [MontoController::class, 'ProcesarAplicado']);
	Route::post('LiberAPP/Monto/GuardarRendicion/{usuario}', [MontoController::class, 'GuardarRendicion']);
	Route::post('LiberAPP/Monto/GuardarParcial', [MontoController::class, 'GuardarParcial']);
	Route::get('LiberAPP/Monto/ListarHistorialConvoy/{convoy}', [MontoController::class, 'ListarHistorialConvoy']);//Ricardo
	Route::post('LiberAPP/Monto/Anular', [MontoController::class, 'Anular']);//Ricardo
	Route::get('LiberAPP/Monto/ListarControlConvoy/{tipo}/{convoy}', [MontoController::class, 'ListarControlConvoy']);//Ricardo
	Route::get('LiberAPP/Monto/ListarControlLibre/{tipo}/{convoy}', [MontoController::class, 'ListarControlLibre']);//Ricardo

	Route::get('LiberAPP/Monto/{estado}', [MontoController::class, 'Listar']);
	Route::get('LiberAPP/Monto/Disposicion/{dispisicion}', [MontoController::class, 'ListarDisposicion']);
	Route::get('LiberAPP/Monto/Rendicion/{estado}/{persona}/{agrupar}', [MontoController::class, 'ListarRendicion']);
	Route::get('LiberAPP/Monto/Reporte/Descuento/{idrendicion}/{idpersona}', [MontoController::class, 'Pdf']);

	//Permiso 
	Route::get('LiberAPP/Persona/Papeleta/{id}/{estado}', [PermisoController::class, 'ListarPermiso']);
	Route::get('LiberAPP/Persona/Motivo/{estado}', [PermisoController::class, 'ListarDato']);
	Route::post('LiberAPP/Persona/Papeleta/Jefe/Procesar', [PermisoController::class, 'ProcesarJefearea']);
	Route::post('LiberAPP/Persona/Papeleta/Rrhh/Recurso', [PermisoController::class, 'ProcesarRecursoH']);
	Route::post('LiberAPP/Persona/Guardar', [PermisoController::class, 'Guardar']);
	Route::post('LiberAPP/Persona/Actualizar', [PermisoController::class, 'Actualizar']);
	Route::post('LiberAPP/Persona/Anular', [PermisoController::class, 'Anular']);
	Route::get('LiberAPP/Persona/Papeleta/Listar/{id}/{estado}/{estadoPer}/{inicio}/{fin}', [PermisoController::class, 'ListarPermisoReporte']);

	//Descuento 
	Route::get('LiberAPP/Descuento/ExportarDescuento/{tipo}/{desde}/{hasta}', [DescuentoController::class, 'ExportarDescuento']);

	/**************************************************
	************* GESTIÓN DE FINANZA *************
	**************************************************/
	//Comprobante 
	Route::get('LiberAPP/Comprobante/Listar/{externo}/{finicio}/{ffin}/{tipo}/{condicion}', [ComprobanteController::class, 'ListarComprobante']);
	Route::get('LiberAPP/Comprobante/Listar/{externo}/{finicio}/{ffin}', [ComprobanteController::class, 'ListarComprobante']);

	/**************************************************
	************* GESTIÓN DE COMBUSTIBLE *************
	**************************************************/
	//Cuenta
	/*Route::get('LiberAPP/Cuenta', [CuentaController::class, 'Listar']);
	Route::get('LiberAPP/Cuenta/Select', [CuentaController::class, 'ListarSelect']);
	Route::post('LiberAPP/Cuenta/Guardar',[CuentaController::class, 'Guardar']);
	Route::post('LiberAPP/Cuenta/Actualizar',[CuentaController::class, 'Actualizar']);*/

	//Grifo
	Route::get('LiberAPP/Grifo', [GrifoController::class, 'Listar']);
	Route::get('LiberAPP/Grifo/Select', [GrifoController::class, 'ListarSelect']);
	Route::get('LiberAPP/Grifo/GrifoSelect', [GrifoController::class, 'GrifoSelect']);
	Route::get('LiberAPP/Grifo/Empresa/Select', [GrifoController::class, 'ListarEmpresa']);
	Route::post('LiberAPP/Grifo/Guardar', [GrifoController::class, 'Guardar']);
	Route::post('LiberAPP/Grifo/Actualizar', [GrifoController::class, 'Actualizar']);

	//Precio Combustible 
	Route::post('LiberAPP/Grifo/Precio/Guardar', [CombustibleController::class, 'Guardar']);
	Route::get('LiberAPP/Grifo/Precio/Select', [CombustibleController::class, 'ListarSelect']);
	Route::get('LiberAPP/Grifo/Precio/Select/grifo/{grifo}/{tcombustible}/{empresa}/{finicio}/{ffin}/{ciudad}', [CombustibleController::class, 'ListarSelectGrifo']);
	Route::get('LiberAPP/Grifo/Precio/Dato/Select', [CombustibleController::class, 'ListarDato']);
	Route::post('LiberAPP/Grifo/Precio/Actualizar', [CombustibleController::class, 'Actualizar']); //Roger

	//Abastecimientoc
	Route::post('LiberAPP/Abastecimiento/Desactivar', [AbastecimientoController::class , 'Desactivar']);//Ricardo
	Route::get('LiberAPP/Abastecimiento/Listar/{desde}/{hasta}/{consumos}', [AbastecimientoController::class, 'Listar']);//Ricardo
	Route::get('LiberAPP/Abastecimiento/Detalle/{id}', [AbastecimientoController::class, 'ListarDetalle']);//Ricardo
	
	Route::post('LiberAPP/Abastecimiento/Procesar', [AbastecimientoController::class, 'Procesar']);//Ricardo
	Route::post('LiberAPP/Abastecimiento/Analizar', [AbastecimientoController::class, 'Analizar']);//Ricardo
	
	Route::get('LiberAPP/Cuenta/Select', [CuentaController::class, 'ListarSelect']);

	Route::get('LiberAPP/Abastecimiento/Aprobar/Select', [AbastecimientoController::class, 'ListarAbastecimiento']);//temporal para aprobar solicitudes
	Route::post('LiberAPP/Abastecimiento/Procesar', [AbastecimientoController::class, 'ProcesarAbastecimiento']);
		
	Route::post('LiberAPP/Abastecimiento/Guardar', [AbastecimientoController::class, 'Guardar']);
	Route::post('LiberAPP/Abastecimiento/Actualizar', [AbastecimientoController::class, 'Actualizar']);
	//Route::get('LiberAPP/Abastecimiento/Buscar/Select/{externo}/{cuenta}/{orden}', [AbastecimientoController::class, 'ordenarAbastecimiento']);//depreciado

	Route::get('LiberAPP/Abastecimiento/Select/Reporte/detalle/', [AbastecimientoController::class, 'ListarSelectDetR']);
	Route::get('LiberAPP/Abastecimiento/Reporte/Detalle/{persona}/{grifo}/{operacion}/{vehiculo}/{estado}/{fechai}/{fechaf}/{externo}/', [AbastecimientoController::class, 'ListarSelectDetRF']);
	Route::get('LiberAPP/Abastecimiento/Reporte/ExportarAbastecimiento/{persona}/{grifo}/{operacion}/{vehiculo}/{estado}/{fechai}/{fechaf}/{externo}/', [AbastecimientoController::class, 'ExportarAbastecimiento']);
	Route::get('LiberAPP/Abastecimiento/Reporte/FechaIni', [AbastecimientoController::class, 'ListarFecha']);
	Route::get('LiberAPP/Abastecimiento/Reporte/Imagen/{id}', [AbastecimientoController::class, 'ListarImagen']);

	//Consumo 
	Route::get('LiberAPP/Consumo/Select', [ConsumoController::class, 'ListarSelect']);//Roger
	Route::get('LiberAPP/Consumo/Detalle/{idConsumo}', [ConsumoController::class, 'ListarSelectIntervalo']); //Roger
	Route::post('LiberAPP/Consumo/Guardar', [ConsumoController::class, 'Guardar']);//Roger
	Route::post('LiberAPP/Consumo/Actualizar', [ConsumoController::class, 'Actualizar']);//Roger
	Route::post('LiberAPP/Consumo/Desactivar', [ConsumoController::class , 'Desactivar']);//Roger
	
	Route::get('LiberAPP/Consumo/Calcular/{desde}/{hasta}/{calculado}/{situacion}', [ConsumoController::class, 'CalcularConsumo']);//Ricardo
	Route::post('LiberAPP/Consumo/ActualizarConsumos', [ConsumoController::class, 'ActualizarConsumos']);//Ricardo
	
	Route::get('LiberAPP/Consumo/Validar/{cliente}/{estado}', [ConsumoController::class, 'ValidarConsumo']); //Roger
	Route::post('LiberAPP/Consumo/GuardarComprobante', [ConsumoController::class, 'GuardarComprobanteCombustible']); // Roger
	Route::post('LiberAPP/Consumo/ActualizarComprobante', [ConsumoController::class, 'ActualizarComprobanteCombustible']); // Roger 
	Route::get('LiberAPP/Consumo/ListarDetalleComprobante/{idComprobante}', [ConsumoController::class, 'ListarDetalle']);//Roger
	Route::get('LiberAPP/Consumo/ListarFacturas/{cliente}/{estado}', [Consumocontroller::class, 'ListarFacturas']);//Roger
	Route::get('LiberAPP/Consumo/ComprobantePdf/{idComprobante}', [ConsumoController::class, 'PDFConsumo']);//Roger	

	Route::get('LiberAPP/Consumo/ListarDescuentos/{desde}/{hasta}/{descontado}', [ConsumoController::class, 'ListarDescuentos']);//Ricardo
	Route::post('LiberAPP/Consumo/GuardarDescuentos', [ConsumoController::class, 'GuardarDescuentos']);//Ricardo

	//Intervalo 
	Route::get('LiberAPP/Intervalo/Select', [IntervaloController::class, 'ListarSelect']);

	/**************************************************
	************* TRANSPORTE *************
	**************************************************/
	//General
	Route::get('LiberAPP/General',[GeneralController::class, 'Listar']);
	Route::get('LiberAPP/General/Select',[GeneralController::class, 'ListarSelect']);
	Route::get('LiberAPP/General/SelectTipo',[GeneralController::class, 'SelectTipo']);
	Route::get('LiberAPP/General/SelectGrupo',[GeneralController::class, 'SelectGrupo']);
	Route::post('LiberAPP/General/Guardar',[GeneralController::class, 'Guardar']);
	Route::post('LiberAPP/General/Actualizar',[GeneralController::class, 'Actualizar']);
	
	//Vehiculo
	Route::get('LiberAPP/Vehiculo', [VehiculoController::class, 'Listar']);
	Route::get('LiberAPP/Vehiculo/Select', [VehiculoController::class, 'ListarSelect']);
	Route::get('LiberAPP/Vehiculo/ListarVehiculo', [VehiculoController::class, 'ListarVehiculo']);
	Route::post('LiberAPP/Vehiculo/Guardar', [VehiculoController::class, 'Guardar']);
	Route::post('LiberAPP/Vehiculo/Actualizar', [VehiculoController::class, 'Actualizar']);
	Route::post('LiberAPP/Vehiculo/GuardarPromedioKm', [VehiculoController::class, 'GurdarPromedioKm']); //Roger
	Route::get('LiberAPP/Vehiculo/Pdf/{idVehiculo}', [VehiculoController::class, 'PdfFichaTecnica']);//Temporal (solo para Operaciones)
	Route::get('LiberAPP/Archivo/Pdf/{idVehiculo}/{detalle}', [ArchivoController::class, 'FichaTecnica']);//Temporal (solo para Operaciones)
	Route::post('LiberAPP/Vehiculo/Desactivar', [VehiculoController::class, 'Desactivar']);
	
	//Route::get('LiberAPP/Vehiculo/Select/Carreta', [VehiculoController::class, 'ListarCarreta']);
	
	//Tramo
	Route::get('LiberAPP/Tramo',[TramoController::class, 'Listar']);
	Route::get('LiberAPP/Tramo/Select',[TramoController::class, 'ListarSelect']);
	Route::get('LiberAPP/Tramo/SelectViatico',[TramoController::class, 'ListarSelectViatico']);
	Route::post('LiberAPP/Tramo/Guardar',[TramoController::class, 'Guardar']);
	Route::post('LiberAPP/Tramo/Actualizar',[TramoController::class, 'Actualizar']);
	//Ruta
	Route::get('LiberAPP/Ruta', [RutaController::class, 'Listar']);
	Route::get('LiberAPP/Ruta/Select', [RutaController::class, 'ListarSelect']);
	Route::post('LiberAPP/Ruta/Guardar', [RutaController::class, 'Guardar']);
	Route::post('LiberAPP/Ruta/Actualizar', [RutaController::class, 'Actualizar']);
	Route::get('LiberAPP/Ruta/Select/Abreviacion', [RutaController::class, 'ListarAbreviacion']);
	//Convoy
	Route::get('LiberAPP/Convoy', [ConvoyController::class, 'Listar']);
	Route::get('LiberAPP/Convoy/Select', [ConvoyController::class, 'ListarSelect']);
	//Route::get('LiberAPP/Convoy/ListarDetalle/{servicio}', [ConvoyController::class, 'ListarDetalle']);
	Route::post('LiberAPP/Convoy/Guardar', [ConvoyController::class, 'Guardar']);
	Route::post('LiberAPP/Convoy/Actualizar', [ConvoyController::class, 'Actualizar']);
	Route::post('LiberAPP/Convoy/Iniciar', [ConvoyController::class, 'Iniciar']);
	Route::post('LiberAPP/Convoy/Procesar', [ConvoyController::class, 'Procesar']);
	Route::post('LiberAPP/Convoy/Aplazar', [ConvoyController::class, 'Aplazar']);
	Route::post('LiberAPP/Convoy/Terminar', [ConvoyController::class, 'Terminar']);
	Route::post('LiberAPP/Convoy/Ruta', [ConvoyController::class, 'Ruta']);
	Route::post('LiberAPP/Convoy/Anular', [ConvoyController::class, 'Anular']);
	Route::post('LiberAPP/Convoy/Omitir', [ConvoyController::class, 'Omitir']);
	Route::post('LiberAPP/Convoy/AgregarServicio', [ConvoyController::class, 'AgregarServicio']);
	//Route::get('LiberAPP/Convoy/Guias/Pdf/{id}', [ConvoyController::class, 'PdfGuia']);
	//Seguimiento
	Route::get('LiberAPP/Seguimiento', [SeguimientoController::class, 'Listar']);
	Route::get('LiberAPP/Seguimiento/Periodo/{fecha}/{tipo}/{cuenta}', [SeguimientoController::class, 'Periodo']);
	//Servicio
	Route::get('LiberAPP/Servicio/Listar/{cliente}/{finicio}/{ffin}/{estado}', [ServicioController::class, 'Listar']);
	Route::get('LiberAPP/Servicio/ListarConvoy/{convoy}', [ServicioController::class, 'ListarConvoy']);
	Route::post('LiberAPP/Servicio/Reemplazar', [ServicioController::class, 'Reemplazar']);
	Route::post('LiberAPP/Servicio/Anular', [ServicioController::class, 'Anular']);
	//Evento
	Route::get('LiberAPP/Evento/Select', [EventoController::class, 'ListarSelect']);
	//Guia
	Route::post('LiberAPP/Guia/GenerarGRE', [GuiaController::class, 'GenerarGRE']);
	Route::get('LiberAPP/Guia/Pdf/{guia}', [GuiaController::class, 'Pdf']);
	Route::post('LiberAPP/Guia/Prueba/', [GuiaController::class, 'GenerarGuia']);
	Route::get('LiberAPP/Guia/VerificarGuia/{guia}', [GuiaController::class, 'VerificarGuia']);

	/**************************************************
	************* MANTENIMIENTO *************
	**************************************************/
	//Reportef
	Route::get('LiberAPP/Reportef/Listar/{finicio}/{ffin}', [ReportefController::class, 'Listar']);
	Route::get('LiberAPP/Reportef/Pdf/{reporte}', [ReportefController::class, 'Pdf']);
	Route::get('LiberAPP/Reportef/Verificar/{reporte}', [ReportefController::class, 'Verificar']);
	Route::post('LiberAPP/Reportef/Validar', [ReportefController::class, 'Validar']);

	Route::post('LiberAPP/Reportef/Guardar/', [ReportefController::class, 'Guardar']);
	/*Route::get('LiberAPP/Reportef/Select', [ReportefController::class, 'ListarSelect']);
	Route::post('LiberAPP/Reportef/Guardar', [ReportefController::class, 'Guardar']);
	Route::post('LiberAPP/Reportef/Actualizar', [ReportefController::class, 'Actualizar']);*/

	//Falla
	Route::get('LiberAPP/Falla/Historial/{vehiculo}/{estado}/{finicio}/{ffin}', [FallaController::class, 'Historial']);
	Route::get('LiberAPP/Falla/Trabajo/{tipo}', [FallaController::class, 'Listar']);
	//Route::get('LiberAPP/Falla/Trabajo/{tipo}/{id}', [FallaController::class, 'Listar']);
	Route::get('LiberAPP/Falla/Exportar/{vehiculo}/{estado}/{finicio}/{ffin}/{cuenta}/{tipo}', [FallaController::class, 'ExportarHistorial']);
	//Route::post('LiberAPP/Falla/Desactivar', [FallaController::class, 'Desactivar']);

	//Backlog
	Route::get('LiberAPP/Backlog/Listar/{vehiculo}/{tipo}', [BacklogController::class, 'Listar']);
	Route::get('LiberAPP/Backlog/ListarReporte/{vehiculo}/{tipo}/{estado}/{cuenta}/{finicio}/{ffin}', [BacklogController::class, 'ListarReporte']);
	Route::post('LiberAPP/Backlog/Desactivar', [BacklogController::class, 'Desactivar']);
	Route::post('LiberAPP/Backlog/AgregarAot', [BacklogController::class, 'AgregarAot']); //Roger

	//Trabajo
	Route::get('LiberAPP/Trabajo/Listar/{ordent}', [TrabajoController::class, 'Listar']);

	//Monitoreo
	Route::get('LiberAPP/Monitoreo/Listar', [MonitoreoController::class, 'Listar']);
	Route::post('LiberAPP/Monitoreo/Guardar', [MonitoreoController::class, 'Guardar']);
	Route::post('LiberAPP/Monitoreo/Actualizar', [MonitoreoController::class, 'Actualizar']);

	//Ordent
	Route::get('LiberAPP/Ordent/ListarAbierto/{vehiculo}', [OrdentController::class, 'ListarAbierto']);//Ricardo
	Route::post('LiberAPP/Ordent/Guardar', [OrdentController::class, 'Guardar']);//Ricardo
	Route::get('LiberAPP/Ordent/Pdf/{ordent}', [OrdentController::class, 'Pdf']);//Ricardo
	Route::post('LiberAPP/Ordent/CerrarOT', [OrdentController::class, 'CerrarOT']);

	Route::get('LiberAPP/Ordent/Listar/{cuenta}/{vehiculo}/{finicio}/{ffin}/{estado}/{mantt}', [OrdentController::class, 'ListarOT']);
	//Route::post('LiberAPP/Ordent/Actualizar', [OrdentController::class, 'Actualizar']);
	Route::get('LiberAPP/Ordent/Exportar/{cuenta}/{vehiculo}/{finicio}/{ffin}/{estado}/{mantt}', [OrdentController::class, 'ExportarOT']);
	
	//Kilometraje
	Route::get('LiberAPP/Kilometraje/Historial/{vehiculo}', [KilometrajeController::class, 'Historial']);
	Route::post('LiberAPP/Kilometraje/Desactivar', [KilometrajeController::class, 'Desactivar']);
	Route::get('LiberAPP/Abastecimiento/Kilometraje/{id}', [KilometrajeController::class, 'ListarUltimoKm']);
	Route::post('LiberAPP/Kilometraje/GuardarUnidad', [KilometrajeController::class, 'GuardarUnidad']);
	Route::get('LiberAPP/Abastecimiento/Kilometraje/Rendimiento/{id}/{km}', [KilometrajeController::class, 'CalcularRendimiento']);
	Route::get('LiberAPP/Kilometraje/Kilometrajes/{cuenta}/{vehiculo}/{tipo}/{finicio}/{ffin}', [KilometrajeController::class, 'ListarKilometrajes']);
	Route::get('LiberAPP/Kilometraje/Exportar/{cuenta}/{vehiculo}/{tipo}/{finicio}/{ffin}', [KilometrajeController::class, 'ExportarKilometrajes']);
	Route::get('LiberAPP/Kilometraje/UltimoKilometraje/{id}', [KilometrajeController::class, 'ListarUltimoKm']);//Ricardo
	Route::get('LiberAPP/Kilometraje/KilometrajePromedio/{dia}', [KilometrajeController::class, 'ListarKilometrajePromedio']);//Roger

	
	//Reporte
	Route::get('LiberAPP/Reporte/ListarUnidad/{reporte}', [ReporteController::class, 'ListarUnidad']);

	/**************************************************
	************* LOGISTICA *************
	**************************************************/
	//Material
	Route::get('LiberAPP/Material/Listar', [MaterialController::class, 'Listar']);
	Route::post('LiberAPP/Material/Guardar', [MaterialController::class, 'Guardar']);
	Route::post('LiberAPP/Material/Actualizar', [MaterialController::class, 'Actualizar']);
	
	//Almacen
	Route::get('LiberAPP/Almacen/Listar', [AlmacenController::class, 'ListarSelect']); //Roger
	//Kardex 
	Route::post('LiberAPP/Kardex/Guardar', [KardexController::class, 'Guardar']); //Roger

	//Orden de Compra
	Route::post('LiberAPP/Ordenc/Guardar', [OrdencController::class, 'Guardar']);
	Route::post('LiberAPP/Ordenc/GuardarOrden', [OrdencController::class, 'GuardarOrden']);
	Route::get('LiberAPP/Ordenc/Listar/{proveedor}/{finicio}/{ffin}/{estado}/{tipo}', [OrdencController::class, 'Listar']);
	Route::get('LiberAPP/Ordenc/Pdf/{id}', [OrdencController::class, 'PdfOrdenc']);


	/**************************************************
	************* GESTION *************
	**************************************************/
	//Grupo
	Route::post('LiberAPP/grupo/Guardar', [GrupoController::class, 'Guardar']);
	Route::get('LiberAPP/grupo/Listar', [GrupoController::class, 'Listar']);
	//Entidad 
	Route::get('LiberAPP/Entidad/Listar', [EntidadController::class, 'Listar']);
	Route::get('LiberAPP/Entidad/Listar/{tipo}', [EntidadController::class, 'ListarSelect']);
	Route::get('LiberAPP/Entidad/ListarElementos/{tipo}/{entidad}', [EntidadController::class, 'ListarElementos']);
	//Implemento
	Route::get('LiberAPP/Implemento/Listar/{entidad}/{area}',[ImplementoController::class, 'Listar']);
	Route::post('LiberAPP/Implemento/Guardar',[ImplementoController::class, 'Guardar']);
	Route::post('LiberAPP/Implemento/Actualizar',[ImplementoController::class, 'Actualizar']);//Roger
	//Asignacion
	Route::get('LiberAPP/Asignacion/Listar/{entidad}/{area}',[AsignacionController::class, 'Listar']);
	Route::get('LiberAPP/Asignacion/ListarPlantilla/{entidad}/{area}/{plantilla}',[AsignacionController::class, 'ListarPlantilla']);
	Route::post('LiberAPP/Asignacion/Actualizar', [AsignacionController::class, 'Actualizar']);
	Route::post('LiberAPP/Asignacion/ActualizarEscaneo', [AsignacionController::class, 'ActualizarEscaneo']);
	Route::post('LiberAPP/Asignacion/Reemplazar', [AsignacionController::class, 'Reemplazar']);//Ricardo
	//Route::post('LiberAPP/Asignacion/Situacion', [AsignacionController::class, 'Situacion']);//Ricardo
	Route::post('LiberAPP/Asignacion/Situacion/{situacion}', [AsignacionController::class, 'Situacion']);//Ricardo
	Route::get('LiberAPP/Asignacion/Vencimiento/{entidad}/{area}/{plantilla}',[AsignacionController::class, 'Vencimiento']);//Ricardo
	Route::get('LiberAPP/Asignacion/Proyeccion/{entidad}/{area}/{plantilla}/{ejex}/{ejey}/{valores}',[AsignacionController::class, 'Proyeccion']);//Ricardo
	Route::get('LiberAPP/Asignacion/Historial/{entidad}/{area}/{plantilla}/{ejex}/{valorz}',[AsignacionController::class, 'PdfHistorial']);//Ricardo
	Route::get('LiberAPP/Asignacion/ExportarProyeccion/{entidad}/{area}/{plantilla}/{ejex}/{ejey}/{valores}',[AsignacionController::class, 'ExportarProyeccion']);//Roger
	Route::get('LiberAPP/Asignacion/ExportarVencimiento/{entidad}/{area}',[AsignacionController::class, 'ExportarVencimiento']);
	Route::get('LiberAPP/Asignacion/PdfActaEntrega/{hora}', [AsignacionController::class, 'PdfActaEntrega']);//Ricardo
	Route::post('LiberAPP/Asignacion/CargaMasivo',[AsignacionController::class, 'CargaMasivo']);




	//Plantilla
	Route::get('LiberAPP/Plantilla/Listar/{entidad}/{area}', [PlantillaController::class, 'Listar']);//Roger
	Route::get('LiberAPP/Plantilla/Listar/Implemento/{entidad}/{area}/{plantilla}', [PlantillaController::class, 'ListarImplementos']);//Roger
	Route::get('LiberAPP/Plantilla/ListarSelect/{entidad}/{area}', [PlantillaController::class, 'ListarSelect']);//Ricardo
	Route::post('LiberAPP/Plantilla/Guardar',[PlantillaController::class, 'GuardarPlantilla']);//Roger
	//Homologacion
	Route::get('LiberAPP/Homologacion/Listar/{entidad}/{area}/{plantilla}', [HomologacionController::class, 'Listar']);//Roger
	Route::post('LiberAPP/Homologacion/Guardar', [HomologacionController::class, 'Guardar']);//Roger
	Route::post('LiberAPP/Homologacion/Desactivar', [HomologacionController::class, 'Desactivar']);//Roger
	//Distribucion
	Route::post('LiberAPP/Distribucion/Guardar',[DistribucionController::class, 'Guardar']);//Roger
	Route::post('LiberAPP/Distribucion/Desactivar',[DistribucionController::class, 'Desactivar']);//Roger
	Route::post('LiberAPP/Distribucion/Actualizar',[DistribucionController::class, 'Actualizar']);//Roger
	Route::post('LiberAPP/Distribucion/ActualizarMaterial',[DistribucionController::class, 'ActualizarM']);//Roger
	
	/**************************************************
	************* OTROS *************
	**************************************************/
	//Proyecto
	Route::get('LiberAPP/Gestion/Proyecto', [ProyectoController::class, 'Listar']);
	Route::get('LiberAPP/Gestion/Proyecto/{estado}', [ProyectoController::class, 'ListarSelect']);
	Route::post('LiberAPP/Gestion/Proyecto/Guardar', [ProyectoController::class, 'Guardar']);
	Route::post('LiberAPP/Gestion/Proyecto/Actualizar', [ProyectoController::class, 'Actualizar']);
	//Externo
	Route::get('LiberAPP/Externo',[ExternoController::class, 'Listar']);
	Route::get('LiberAPP/Externo/Select',[ExternoController::class, 'ListarSelect']);
	Route::post('LiberAPP/Externo/Guardar',[ExternoController::class, 'GuardarExterno']);
	Route::post('LiberAPP/Externo/Actualizar',[ExternoController::class, 'ActualizarExterno']);

	//Datos Generales
	Route::get('LiberAPP/Dato/Select/{tipo}/{grupo}',[DatoController::class, 'ListarSelect']);
	Route::post('LiberAPP/Archivo/Guardar',[ArchivoController::class, 'Guardar']);
	Route::post('LiberAPP/Archivo/Fusionar',[ArchivoController::class, 'FusionarPdf']);
	Route::get('LiberAPP/Archivo/Pdf/{nombre}', [ArchivoController::class, 'VisualizarPdf']);


Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/{any}', [ApplicationController::class, 'index'])->where('any', '.*');
