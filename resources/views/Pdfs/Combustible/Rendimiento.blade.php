
<table id="cabecera" class="cabecera">
	<thead>
		<tr>
			<th class="logo">
				<img src="{{URL::asset('/images/minilogo.png')}}" height="40">
			</th>
			<th class="titulo">RENDIMIENTO DE CONSUMO COMBUSTIBLE</th>
			<th class="codificacion">
				Código:  TL-MU-F-001<br>
				Versión: 001<br>
				Fecha:   19/03/2019<br>
				Página:  1 de 1<br>
			</th>
		</tr>
	</thead>
</table>
<table id="trabajo" class="trabajo">
	<thead>
		<tr>
			<th class="titulo" colspan="10">DATOS PRINCIPALES</th>
		</tr>
	</thead>
	<tbody>
        <tr>
			<td class="subtitulo">SERIE</td>
			<td class="cdetalle">{{ $cabecera["serieCom"] }}</td>
			<td class="subtitulo">NUM. COMPROBANTE</td>
			<td class="cdetalle">{{ $cabecera["numeroCom"] }}</td>
			<td class="subtitulo">FECHA EMISION</td>
			<td class="cdetalle">{{ $cabecera["femisionCom"] }}</td>
			<td class="subtitulo">FECHA REGISTRO</td>
			<td class="cdetalle">{{ $cabecera["fingresoCom"] }}</td>
			<td class="subtitulo">PROVEEDOR</td>
			<td class="cdetalle">{{ $cabecera["clienteCom"] }}</td>
		</tr>
		<?php $totalCalculado = 0; ?>
		<!--@foreach ($cuerpo as $nro => $ucuerpo)
			@php 
     			$cantidad=$ucuerpo["precioGri"] * $ucuerpo["gal2"];
     			$totalCalculado+=$cantidad;
  			@endphp
		@endforeach-->
		<tr>
			<td class="subtitulo" colspan="2">TOTAL INGRESADO</td>
			<td class="cdetalle" >{{ 'S/. '.number_format($cabecera["totalCom"], 2, '.',' ')}}</td>
			<td class="subtitulo" colspan="2">MONTO AJUSTE</td>
			<td class="cdetalle" >{{ 'S/. '.$cabecera["encuadreCom"] }}</td>
			<!--<td class="cdetalle" >{{ 'S/. '.number_format($totalCalculado, 2, '.',' ') }}</td>-->
			<td class="subtitulo" >T.GALONES</td>
			<td class="cdetalle" >{{ $cabecera["totalGal"] }}</td>
			<td class="subtitulo" >REGISTROS</td>
			<td class="cdetalle" >{{ sizeof($cuerpo)}}</td>
			<!--@if( round($cabecera["totalCom"]) == round($totalCalculado))
				<td class="cdetalle" >CORRECTO</td>
			@else 
				<td class="cdetalleI" >INCORRECTO</td>
			@endif-->
		</tr>
		<tr>
			<td class="subtitulo" colspan="2">OBSERVACIONES</td>
			<td class="cdetalle" colspan="8">{{ $cabecera["observacionCom"] }}</td>
		</tr>
	</tbody> 
</table>
<table class="contenedor" id="fallas" width="100%">
	<tr class="ddtitulo">
		<th>ITEM</th>
		<th>PLACA</th>
		<th>MODELO</th>
		<th>ABASTECIMIENTO</th>
		<th>FECHA ABASTO</th>
		<th>KM.REC</th>
		<th>REND.</th>
		<th>CIUDAD</th>
		<th>C.A.</th>
		<!--<th>OPERADOR</th>
		<th>RETEN</th>-->
		<th>OPERACION</th>
		<th>PRECIO GAL.</th>
		<th>MONTO.</th>
	</tr>
	@foreach ($cuerpo as $nro => $ucuerpo)
	<tr class="ddetalle">
    	<td class="idetalle">{{ $nro+1 }}</td>
		<td class="pdetalle">{{ $ucuerpo["placaVeh"] }}</td>
		<td class="mdetalle">{{ $ucuerpo["modelo"] }}</td>
		<td class="gdetalle">{{ $ucuerpo["gal2"] }}</td>
		<td class="fdetalle">{{ date('Y-m-d', strtotime($ucuerpo["fecha2"])) }}</td>
		<td class="kdetalle">{{ $ucuerpo["diferencia"] }}</td>
		@if( $ucuerpo["rendimiento"] > 0 )
			<td class="rdetalle">{{ $ucuerpo["rendimiento"] }}</td>
		@else 
			<td class="rdetalle"></td>
		@endif
		<td class="cdetalle">{{ $ucuerpo["ciudad"] }}</td>
		<td class="c1detalle">{{ $ucuerpo["ciudad1"] }}</td>
		<!--<td class="tdetalle">{{ $ucuerpo["trabajadorPer"] }}</td>
		<td class="tdetalle">{{ $ucuerpo["reten"] }}</td>-->
		<td class="odetalle">{{ $ucuerpo["nombreCue"] }}</td>
		<td class="ppdetalle">{{ $ucuerpo["precioGri"] }}</td>
		<td class="ppdetalle">{{ $ucuerpo["precioGri"] * $ucuerpo["gal2"] }}</td>
    </tr>
	@endforeach
</table>
<style>
		@page
		{
            margin: 0.6cm;
        }
        @font-face
        {
  			font-family: 'Helvetica';
  			/*font-style: normal;
  			font-weight: normal;
  			src: url(http://themes.googleusercontent.com/static/fonts/opensans/v8/cJZKeOuBrn4kERxqtaUH3aCWcynf_cDxXwCLxiixG1c.ttf) format('truetype');*/
		}
		body
		{
			font-family: 'Helvetica';
		}
        /*CABECERA*/
		#cabecera
		{
			width: 100%;
		}
		#cabecera, #cabecera tr, #cabecera th
		{
			border:  0.005cm solid rgb(64,64,64);
			border-collapse: collapse;
		}
		#cabecera .logo
		{
			width: 4cm;
		}
		#cabecera .titulo
		{
			text-align: center;
		}
		#cabecera .codificacion
		{
			font-size: 0.2cm;
			width: 4cm;
		}
		/*CABECERA DEL REPORTE*/
		#trabajo
		{
			width: 100%;
		}
		#trabajo, #trabajo tr, #trabajo th, #trabajo td
		{
			border:  0.005cm solid rgb(64,64,64);
			border-collapse: collapse;
			text-align: center;
		}
		#trabajo .titulo
		{
			background-color: rgb(64,64,64);
			color: white;
			font-weight: bold;
			text-align: center;
			font-size: 0.3cm;
		}
		#trabajo .subtitulo
		{
			background-color: rgb(64,64,64);
			color: white;
			font-weight: bold;
			font-size: 0.2cm;
			width: 8% !important;
		}
		#trabajo .cdetalle
		{
			font-size: 0.23cm;
			font-weight: bold;
		}
		#trabajo .cdetalleI
		{
			font-size: 0.23cm;
			font-weight: bold;
			background-color: red;
		}
		/*DETALLE DEL REPORTE*/
		.contenedor
		{
			width: 100%;
			margin: 0;
			padding: 0;
			font-size: 0.23cm !important;
			vertical-align: top;
		}

		.contenedor, .contenedor tr, .contenedor th, .contenedor td
		{
			border-collapse: collapse;
			border:  0.005cm solid black;
		}
		
		.contenedor .dtitulo th
		{
			font-size: 0.15cm !important;
			height: 0.35cm !important;
			margin: 0.0cm !important;
		}
		.contenedor .ddetalle td
		{
			height: 0.5cm !important;
			text-align: center;
		}

		.contenedor .ddtitulo th 
		{
			background-color: rgb(64,64,64);
			color: white;
			font-size: 0.15cm !important;
			text-align: center;
		}
		/* Item */
		.contenedor .idetalle
		{
			height: 0.1cm !important;
			width: 0.5cm !important;
			font-size: 0.20cm !important;
		}
		/* Placa */
		.contenedor .pdetalle
		{
			height: 0.1cm !important;
			width: 1.5cm !important;
			font-size: 0.20cm !important;
		}
		/* Modelo */
		.contenedor .pdetalle
		{
			height: 0.1cm !important;
			width: 1.2cm !important;
			font-size: 0.20cm !important;
		}
		/* Abastecimiento */
		.contenedor .gdetalle
		{
			height: 0.1cm !important;
			width: 1.5cm !important;
			font-size: 0.20cm !important;
		}
		/* Fecha Abasto */
		.contenedor .fdetalle
		{
			height: 0.1cm !important;
			width: 1.5cm !important;
			font-size: 0.20cm !important;
		}
		/* Km Recorrido */
		.contenedor .kdetalle
		{
			height: 0.1cm !important;
			width: 1.2cm !important;
			font-size: 0.20cm !important;
		}
		/* Rendimiento */
		.contenedor .rdetalle
		{
			height: 0.1cm !important;
			width: 1.2cm !important;
			font-size: 0.20cm !important;
		}
		/* Ciudad */
		.contenedor .cdetalle
		{
			height: 0.1cm !important;
			width: 1.0cm !important;
			font-size: 0.15cm !important;
		}
		/* Ciudad Anterior */
		.contenedor .c1detalle
		{
			height: 0.1cm !important;
			width: 1.8cm !important;
			font-size: 0.15cm !important;
		}
		/* Operador  */
		.contenedor .tdetalle
		{
			height: 0.1cm !important;
			width: 1.9cm !important;
			font-size: 0.20cm !important;
		}
		/* Operacion */
		.contenedor .odetalle
		{
			height: 0.1cm !important;
			width: 2.0cm !important;
			font-size: 0.20cm !important;
		}
		/*  Precio */
		.contenedor .ppdetalle
		{
			height: 0.1cm !important;
			width: 1.0cm !important;
			font-size: 0.20cm !important;
		}

		.contenedor .ddetalle2 td
		{
			height: 0.3cm !important;
			text-align: center;
		}

		#fallas tr th:nth-child(1)
		{
			width: 3% !important;
		}
		#fallas tr th:nth-child(2)
		{
			width: 20% !important;
		}
		#fallas tr th:nth-child(3)
		{
			width: 27% !important;
		}
		#fallas tr th:nth-child(4)
		{
			width: 20% !important;
		}
		#fallas tr th:nth-child(5)
		{
			width: 10% !important;
		}
		#fallas tr th:nth-child(6)
		{
			width: 10% !important;
		}
		#fallas tr th:nth-child(7)
		{
			width: 10% !important;
		}
		#actividades tr th:nth-child(1)
		{
			width: 3% !important;
		}
		#actividades tr th:nth-child(2)
		{
			width: 67% !important;
		}
		#actividades tr th:nth-child(3)
		{
			width: 8% !important;
		}
		#actividades tr th:nth-child(4)
		{
			width: 7% !important;
		}
		#actividades tr th:nth-child(5)
		{
			width: 5% !important;
		}
		#actividades tr th:nth-child(6)
		{
			width: 5% !important;
		}
		#actividades tr th:nth-child(7)
		{
			width: 5% !important;
		}




		/*.reported tr td:nth-child(1)
		{
			width: 10% !important;
			text-align: center;
		}
		.reported tr td:nth-child(3), .reported tr td:nth-child(4)
		{
			width: 5% !important;
			text-align: center;
		}
		.reported tr td:nth-child(2)
		{
			width: 40% !important;
		}
		.reported tr td:nth-child(5)
		{
			width: 40% !important;
			font-size: 0.2cm !important;
		}*/

		.firma
		{
			width: 9.85cm;
			position: absolute;
			left: 0.05cm;
			top: 26.5cm;
		}
		.firma, .firma tr, .firma th, .firma td
		{
			border:  0.005cm solid rgb(64,64,64);
			border-collapse: collapse;
			font-size: 0.25cm !important
		}
		.firma th
		{
			background-color: rgb(64,64,64);
			color: white;
			text-align: center;
			height: 0.4cm !important;
		}
		.fespacio
		{
			width: 6.4833cm;
			height: 1.5cm;
			text-align: center;
		}
		.fespacio img
		{
			margin: 0 auto;
		}
		/*.evidencia, .evidencia tr, .evidencia tr td
		{
			border: 1px solid black;
			border-collapse: collapse;
		}
		.evidencia .tobservacion
		{
			background-color: rgb(64,64,64);
			color: white;
			font-weight: bold;
			text-align: center;
		}
		.evidencia .dobservacion
		{
			text-align: center;
		}*/
	</style>