<table id="cabecera" class="cabecera">
	<thead>
		<tr>
			<th class="logo">
				<img src="{{URL::asset('/images/minilogo.png')}}" height="50">
			</th>
			<th class="titulo"></th>
			<th class="codificacion guia">
				RUC Nº {{$empresa->rucEmp}}<br>
				GUÍA DE REMISIÓN TRANSPORTISTA<br>
				Nº {{$guia->serieGui}} - {{$guia->nroGui}}<br>
			</th>
		</tr>
		<tr>
			<th class="codificacion descripcion">
				Servicio de Carga a Nivel Nacional<br>
				Logística y Transporte de todo tipo de Carga: Materiales Peligrosos, Asfalto, Combustible, Maquinarias y Carga Seca<br>
			</th>
			<th class="titulo"></th>
			<th class="codificacion">
				<span class="empresa">{{$empresa->nombreEmp}}</span><br>
				Nº REGISTRO MTC {{$empresa->mtcEmp}}<br>
			</th>
		</tr>
	</thead>
</table>
<br>
<table id="trabajo" class="trabajo">
	<tbody>
		<tr>
			<td class="titulo" colspan="8">DATOS GENERALES</td>
		</tr>
		<tr>
			<td class="subtitulo" colspan="2">Fecha Emisión</td>
			<td class="cdetalle" colspan="2">{{$guia->femisionGui}}</td>
			<td class="subtitulo" colspan="2">Fecha Inicio de Traslado</td>
			<td class="cdetalle" colspan="2">{{$guia->ftrasladoGui}}</td>
		</tr>
		<tr>
			<td class="subtitulo" colspan="2">Dirección Punto de Partida</td>
			<td class="cdetalle" colspan="6">{{$servicio->partidaCon}} - {{$servicio->ubigeopCon}}</td>
		</tr>
		<tr>
			<td class="subtitulo" colspan="2">Dirección Punto de Llegada</td>
			<td class="cdetalle" colspan="6">{{$servicio->llegadaCon}} - {{$servicio->ubigeolCon}}</td>
		</tr>
		<tr>
			<td class="subtitulo" colspan="2">Tipo de Documento Relacionado</td>
			<td class="cdetalle" colspan="6">GUÍA DE REMISIÓN REMITENTE</td>
		</tr>
		<tr>
			<td class="subtitulo" colspan="2">Nº Documento Relacionado</td>
			<td class="cdetalle" colspan="6">{{$guia->serieGrr}} - {{$guia->nroGrr}}</td>
		</tr>
	</tbody>
</table>
<br>
<table id="trabajo" class="trabajo">
	<tbody>
		<tr>
			<td class="titulo" colspan="8">REMITENTE</td>
			<td class="titulo" colspan="8">DESTINATARIO</td>
		</tr>
		<tr>
			<td class="subtitulo" colspan="3">Razón Social</td>
			<td class="cdetalle" colspan="5">{{$servicio->nombreRem}}</td>
			<td class="subtitulo" colspan="3">Razón Social</td>
			<td class="cdetalle" colspan="5">{{$servicio->nombreDes}}</td>
		</tr>
		<tr>
			<td class="subtitulo" colspan="3">RUC</td>
			<td class="cdetalle" colspan="5">{{$servicio->rucRem}}</td>
			<td class="subtitulo" colspan="3">RUC</td>
			<td class="cdetalle" colspan="5">{{$servicio->rucDes}}</td>
		</tr>
	</tbody> 
</table>
<br>
<table id="trabajo" class="trabajo">
	<tbody>
		<tr>
			<td class="titulo" colspan="8">DATOS DE LA CARGA</td>
		</tr>
		<tr>
			<td class="subtitulo2" colspan="2">Cantidad</td>
			<td class="subtitulo2" colspan="2">Unidad</td>
			<td class="subtitulo2" colspan="4">Carga</td>
		</tr>
		<tr>
			<td class="cdetalle2" colspan="2">{{$servicio->cargaSer}}</td>
			<td class="cdetalle2" colspan="2">{{$servicio->unidadSunatCon}}</td>
			<td class="cdetalle2" colspan="4">{{$servicio->cargaCon}}</td>
		</tr>
	</tbody> 
</table>
<br>
<table id="trabajo" class="trabajo">
	<tbody>
		<tr>
			<td class="titulo" colspan="8">DATOS DEL TRANSPORTE</td>
		</tr>
		<tr>
			<td class="subtitulo2" colspan="2" rowspan="2">VEHÍCULO</td>
			<td class="subtitulo" colspan="2">Placa</td>
			<td class="cdetalle" colspan="4">{{$servicio->placaVeh}}</td>
		</tr>
		<tr>
			<td class="subtitulo" colspan="2">Certificado de Habilitación Vehicular</td>
			<td class="cdetalle" colspan="4">204485123S21S-12S8218</td>
		</tr>
		<tr>
			<td class="subtitulo2" colspan="2" rowspan="1">ACOPLE</td>
			<td class="subtitulo" colspan="2">Placa</td>
			<td class="cdetalle" colspan="4">{{$servicio->acopleVeh}}</td>
		</tr>
		<!--<tr>
			<td class="subtitulo" colspan="2"></td>
			<td class="cdetalle" colspan="4"></td>
		</tr>-->
		<tr>
			<td class="subtitulo2" colspan="2" rowspan="3">OPERADOR</td>
			<td class="subtitulo" colspan="2">Nombres y Apellidos</td>
			<td class="cdetalle" colspan="4">{{$servicio->trabajadorPer}}</td>
		</tr>
		<tr>
			<td class="subtitulo" colspan="2">DNI</td>
			<td class="cdetalle" colspan="4">{{$servicio->dniPer}}</td>
		</tr>
		<tr>
			<td class="subtitulo" colspan="2">Nº Licencia Conducir</td>
			<td class="cdetalle" colspan="4">{{$servicio->licenciaPer}}</td>
		</tr>
		@if($servicio->trabajadorRet != null)
			<tr>
				<td class="subtitulo2" colspan="2" rowspan="3">OPERADOR 2</td>
				<td class="subtitulo" colspan="2">Nombres y Apellidos</td>
				<td class="cdetalle" colspan="4">{{$servicio->trabajadorRet}}</td>
			</tr>
			<tr>
				<td class="subtitulo" colspan="2">DNI</td>
				<td class="cdetalle" colspan="4">{{$servicio->dniRet}}</td>
			</tr>
			<tr>
				<td class="subtitulo" colspan="2">Nº Licencia Conducir</td>
				<td class="cdetalle" colspan="4">{{$servicio->licenciaRet}}</td>
			</tr>
		@endif
		<tr>
			<td class="subtitulo2" colspan="2">OBSERVACIONES</td>
			<td class="cdetalle" colspan="6">{{$guia->observacionGui}}</td>
		</tr>
	</tbody> 
</table>
<br>
<table id="trabajo" class="trabajo">
	<tbody>
		<tr>
			<td class="titulo" colspan="3">CONFORMIDAD</td>
		</tr>
		<tr>
			<td class="subtitulo2">Conformidad Remitente</td>
			<td class="subtitulo2">Conformidad Transportista</td>
			<td class="subtitulo2">Conformidad Destinatario</td>
		</tr>
		<tr>
			<td class="cdetalle2"><br><br><br><br><br></td>
			<td class="cdetalle2"><br><br><br><br><br></td>
			<td class="cdetalle2"><br><br><br><br><br></td>
		</tr>
	</tbody> 
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
			border-collapse: collapse;
		}
		#cabecera .logo
		{
			width: 8cm;
		}
		#cabecera .titulo
		{
			text-align: center;
		}
		#cabecera .codificacion
		{
			font-size: 0.3cm;
			font-weight: bold;
			width: 8cm;
		}

		#cabecera .guia
		{
			border:  0.005cm solid rgb(48,48,48);
		}
		#cabecera .descripcion
		{
			color: rgb(73,73,73);
		}
		#cabecera .empresa
		{
			font-size: 0.4cm;
		}
		/*CABECERA DEL REPORTE*/
		#trabajo
		{
			width: 100%;
		}
		#trabajo, #trabajo tr, #trabajo th, #trabajo td
		{
			border:  0.005cm solid rgb(48,48,48);
			border-collapse: collapse;
			text-align: center;
		}
		#trabajo .titulo
		{
			background-color: rgb(80,80,80);
			color: white;
			font-weight: bold;
			text-align: center;
			padding: 0.15cm;
			font-size: 0.35cm;
			border-color: rgb(224,224,224);
		}
		#trabajo .subtitulo
		{
			background-color: rgb(96,96,96);
			color: white;
			font-weight: bold;
			font-size: 0.25cm;
			padding: 0.1cm;
			text-align: right;
			border-color: rgb(224,224,224);
			/*width: 8% !important;*/
		}
		#trabajo .cdetalle
		{
			font-size: 0.25cm;
			font-weight: bold;
			padding: 0.2cm;
			text-align: left;
		}
		#trabajo .subtitulo2
		{
			background-color: rgb(96,96,96);
			color: white;
			font-weight: bold;
			font-size: 0.25cm;
			padding: 0.1cm;
			border-color: rgb(224,224,224);
			/*width: 8% !important;*/
		}
		#trabajo .cdetalle2
		{
			font-size: 0.25cm;
			font-weight: bold;
			padding: 0.2cm;
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
			font-size: 0.20cm !important;
			text-align: center;
		}
		/* Item */
		.contenedor .idetalle
		{
			height: 0.1cm !important;
			width: 0.5cm !important;
			font-size: 0.20cm !important;
		}
		/* Grupo */
		.contenedor .nodetalle
		{
			height: 0.1cm !important;
			width: 2.5cm !important;
			font-size: 0.20cm !important;
		}
		/* Implemento */
		.contenedor .nidetalle
		{
			height: 0.1cm !important;
			width: 5.5cm !important;
			font-size: 0.20cm !important;
		}
		/* Fecha*/
		.contenedor .fedetalle
		{
			height: 0.1cm !important;
			width: 2.5cm !important;
			font-size: 0.20cm !important;
		}
		/* Motivo*/
		.contenedor .modetalle
		{
			height: 0.1cm !important;
			width: 2.5cm !important;
			font-size: 0.20cm !important;
		}
		/* Leyenda */
		.contenedor .ltitulo
		{
			height: 0.1cm !important;
			width: 3.06cm !important;
			font-size: 0.20cm !important;
		}
		.contenedor .ptitulo 
		{
			height: 0.1cm !important;
			width: 2.72cm !important;
			font-size: 0.20cm !important;
		}
		.contenedor .dtitulo 
		{
			height: 0.1cm !important;
			width: 2.72cm !important;
			font-size: 0.20cm !important;
		}
		.contenedor .etitulo 
		{
			height: 0.1cm !important;
			width: 2.50cm !important;
			font-size: 0.20cm !important;
		}
		.contenedor .rtitulo 
		{
			height: 0.1cm !important;
			width: 2.50cm !important;
			font-size: 0.20cm !important;
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

		.firma
		{
			width: 9.85cm;
			position: absolute;
			left: 0.05cm;
			top: 23.5cm;
		}
		.firma, .firma tr, .firma th, .firma td
		{
			border:  0.005cm solid rgb(64,64,64);
			border-collapse: collapse;
			/*font-size: 0.45cm !important*/
		}
		.firma th
		{
			background-color: rgb(64,64,64);
			color: white;
			text-align: center;
			height: 0.4cm !important;
			font-size: 0.25cm !important
		}
		.fespacio
		{
			width: 9.7cm;
			height: 1.5cm !important;
			text-align: center;
			font-size: 0.25cm !important
		}
		.farea
		{
			width: 9.5cm;
			height: 1.5cm !important;
			text-align: center;
			font-size: 0.25cm !important
		}

		#marca-agua 
		{
            position: fixed;
            /** 
                Establece una posición en la página para tu imagen
                Esto debería centrarlo verticalmente
            **/
            bottom:   10cm;
            left:     3.5cm;
            /** Cambiar las dimensiones de la imagen **/
            width:    13cm;
            height:   13cm;
            /** Tu marca de agua debe estar detrás de cada contenido **/
            z-index:  -1000;
		}
</style>
