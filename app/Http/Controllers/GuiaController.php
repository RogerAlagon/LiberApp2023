<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\App;
/*use App\Dato;
use DB;*/
use DB;
use App\Guia;
use ZipArchive;

use App\Http\Controllers\Controller;
use PDF;
use Dompdf\Dompdf;
use Dompdf\Options;
use App\Traits\FirmaTrait;

use App\Empresa;
use App\Persona;
use App\Vehiculo;
use App\Externo;
use App\Servicio;

class GuiaController extends Controller
{
    use FirmaTrait;
    /*public function __construct()
    {
        $this->middleware('auth');
    }*/

    //Catalogo D-37 - Entidad que autoriza el traslado del gobierno a la empresa - Entidad que emite el certificado vehicular
    private $autorizaTraslado = ["01" => "Superintendencia Nacional de Control de Servicios de Seguridad, Armas, Municiones y Explosivos de Uso Civil    SUCAMEC","02" => "Dirección General de Medicamentos Insumos y Drogas DIGEMID","03" => "Dirección General de Salud Ambiental   DIGESA","04" => "Servicio Nacional de Sanidad Agraria   SENASA","05" => "Servicio Nacional Forestal y de Fauna Silvestre    SERFOR","06" => "Ministerio de Transportes y Comunicaciones MTC","07" => "Ministerio de la Producción    PRODUCE","08" => "Ministerio del Ambiente    MIN. AMBIENTE","09" => "Organismo Nacional de Sanidad Pesquera SANIPES","10" => "Municipalidad Metropolitana de Lima    MML","11" => "Ministerio de Salud    MINSA","12" => "Gobierno Regional  GR"];

    //Catalogo 61 - Documentos relacionados a la GRT
    private $relacionadoGre = ["01" => "Factura    remitente, transportista","03" => "Boleta de Venta    remitente, transportista","04" => "Liquidación de Compra  remitente, transportista","09" => "Guía de Remisión Remitente remitente, transportista","12" => "Ticket o cinta emitido por máquina registradora    remitente, transportista","31" => "Guía de Remisión Transportista solo transportista","48" => "Comprobante de Operaciones – Ley N° 29972  remitente, transportista","49" => "Constancia de Depósito - IVAP (Ley 28211)  solo remitente","50" => "Declaración Aduanera de Mercancías remitente, transportista","52" => "Declaración Simplificada (DS)  remitente, transportista","65" => "Autorización de Circulación para transportar MATPEL – Callao   solo transportista","66" => "Autorización de Circulación para transporte de carga y mercancías en Lima Metropolitana    solo transportista","67" => "Permiso de Operación Especial para el servicio de transporte de MATPEL - MTC   solo transportista","68" => "Habilitación Sanitaria de Transporte Terrestre de Productos Pesqueros y Acuícolas  solo transportista","69" => "Permiso / Autorización de operación de transporte de mercancías    solo transportista","71" => "Resolución de Adjudicación de bienes – SUNAT   solo remitente","72" => "Resolución de Comiso de bienes – SUNAT solo remitente","73" => "Guía de Transporte Forestal o de Fauna - SERFOR    solo remitente","74" => "Guía de Tránsito – SUCAMEC solo remitente","75" => "Autorización para operar como empresa de Saneamiento Ambiental – MINSA -   solo remitente","76" => "Autorización para manejo y recojo de residuos sólidos peligrosos y no peligrosos   solo remitente","77" => "Certificado fitosanitario la movilización de plantas, productos vegetales, y otros artículos reglamentados     solo remitente","78" => "Registro Único de Usuarios y Transportistas de Alcohol Etílico solo remitente","80" => "Constancia de Depósito – Detracción    remitente, transportista","81" => "Código de autorización emitida por el SCOP solo remitente","82" => "Declaración jurada de mudanza  solo transportista"];

    //Catalogo 6 - Tipo de Documentos de Identidad en Perú  //remitente,destinatario y empresa que transporta tambien conductor
    private $tipoDocumento = ["0" => "DOC.TRIB.NO.DOM.SIN.RUC","1" => "Documento Nacional de Identidad","4" => "Carnet de extranjería","6" => "Registro Unico de Contributentes","7" => "Pasaporte","A" => "Cédula Diplomática de identidad","B" => "DOC.IDENT.PAIS.RESIDENCIA-NO.D","C" => "Tax Identification Number - TIN – Doc Trib PP.NN","D" => "Identification Number - IN – Doc Trib PP. JJ","E" => "TAM- Tarjeta Andina de Migración ","F" => "Permiso Temporal de Permanencia - PTP","G" => "Salvoconducto"];

    //Catalogo 35 - Codigo de Unidades de Medida //bienes a transportar
    private $unidadMedida = ["126" => "DOCENA POR 10**6","12U" => "DOCENA","2U" => "PAR","2U6" => "PAR POR 10**6","AM" => "AMPOLLA","BAL" => "BALDE","BID" => "BIDONES","BLS" => "BOLSA","BOB" => "BOBINAS","BOT" => "BOTELLAS","BRR" => "BARRILES","CAJ" => "CAJA","CIL" => "CILINDRO","CM" => "CENTIMETRO LINEAL","CM2" => "CENTIMETRO CUADRADO","CM3" => "CENTIMETRO CUBICO","CON" => "CONOS","CRT" => "CARTONES","FDO" => "FARDO","FRC" => "FRASCOS","GAL" => "US GALON (3,7843 L)","GLE" => "GALON INGLES (4,545956L)","GR" => "GRAMO","GRU" => "GRUESA","HL" => "HECTOLITRO","HOJ" => "HOJA","JGS" => "JUEGO","KG" => "KILOGRAMO","KG3" => "KILOGRAMO POR 10**3 (TM)","KG6" => "KILOGRAMO POR 10**6","KGA" => "KILOGRAMO INGREDIENTE ACTIVO","KI" => "QUILATE","KI6" => "QUILATE 10**6","KIT" => "KIT","KL6" => "KILOS X 10 EXP - 6 (MG)","KL9" => "KILOS X 10 EXP -9","KM" => "KILOMETRO","KW3" => "KILOVATIO HORA POR 10**3 (1000KWH)","KW6" => "KILOVATIO HORA POR 10**6","KWH" => "KILOVATIO HORA","L" => "LITRO","L 6" => "LITRO POR 10**6","LAT" => "LATAS","LB" => "LIBRAS","M" => "METRO","M 6" => "METRO POR 10**6","M2" => "METRO CUADRADO","M26" => "METRO CUADRADO POR 10**6","M3" => "METRO CUBICO","M36" => "METRO CUBICO POR 10**6","MGA" => "MILIGRAMO ACTIVO","MGR" => "MILIGRAMOS","ML" => "MILILITRO","MLL" => "MILLARES","MM" => "MILIMETRO","MM2" => "MILIMETRO CUADRADO","MM3" => "MILIMETRO CUBICO","MU" => "MUESTRAS","MWH" => "MEGAWATT HORA","OZ" => "ONZAS","PAI" => "PAILAS","PAL" => "PALETAS","PAQ" => "PAQUETE","PL" => "PLACAS","PLC" => "PLANCHAS","PLG" => "PLIEGO","PS" => "PIES","PS2" => "PIES CUADRADOS","PS3" => "PIES CUBICOS","PST" => "PIES TABLARES(MADERA)","PUL" => "PULGADAS","PZA" => "PIEZAS","QQ" => "QUINTAL METRICO (100 KG)","QUT" => "QUINTAL USA (100 LB)","RAM" => "RAMOS","RES" => "RESMA","ROL" => "ROLLOS","SAC" => "SACO","SET" => "SET","TAM" => "TAMBOR","TC" => "TONELADA CORTA","TCS" => "TONELADA CORTA SECA","TIR" => "TIRAS","TL" => "TONELADA LARGA","TLS" => "TONELADA LARGA SECA","TM" => "TONELADAS","TM3" => "TONELADA CUBICA","TMS" => "TONELADA METRICA SECA","TUB" => "TUBOS","U" => "UNIDAD","U 3" => "UNIDAD POR 10**3","U 6" => "UNIDAD PO 10**6","U2" => "CIENTO DE UNIDADES","U3" => "MILES DE UNIDADES","U6" => "MILLON DE UNIDADES","YD" => "YARDA","YD2" => "YARDA CUADRADA"];

    //Catalogo 55 - Codigo de Identificacion de Concepto Tributario // Para bienes normalizados 
    private $conceptoNormalizado = ["3001" => "Detracciones: Recursos Hidrobiológicos-Matrícula de la embarcación","3002" => "Detracciones: Recursos Hidrobiológicos-Nombre de la embarcación","3003" => "Detracciones: Recursos Hidrobiológicos-Tipo de especie vendida","3004" => "Detracciones: Recursos Hidrobiológicos-Lugar de descarga","3005" => "Detracciones: Recursos Hidrobiológicos-Fecha de descarga","3006" => "Detracciones: Recursos Hidrobiológicos-Cantidad de especie vendida","3050" => "Transportre Terreste - Número de asiento","3051" => "Transporte Terrestre - Información de manifiesto de pasajeros","3052" => "Transporte Terrestre - Número de documento de identidad del pasajero","3053" => "Transporte Terrestre - Tipo de documento de identidad del pasajero","3054" => "Transporte Terrestre - Nombres y apellidos del pasajero","3055" => "Transporte Terrestre - Ciudad o lugar de destino - Ubigeo","3056" => "Transporte Terrestre - Ciudad o lugar de destino - Dirección detallada","3057" => "Transporte Terrestre - Ciudad o lugar de origen - Ubigeo","3058" => "Transporte Terrestre - Ciudad o lugar de origen - Dirección detallada","3059" => "Transporte Terrestre - Fecha de inicio programado","3060" => "Transporte Terrestre - Hora de inicio programado","4000" => "Beneficio Hospedajes-Paquete turístico: Código de país de emisión del pasaporte","4001" => "Beneficio Hospedajes: Código de país de residencia del sujeto no domiciliado","4002" => "Beneficio Hospedajes: Fecha de ingreso al país","4003" => "Beneficio Hospedajes: Fecha de Ingreso al Establecimiento","4004" => "Beneficio Hospedajes: Fecha de Salida del Establecimiento","4005" => "Beneficio Hospedajes: Número de Días de Permanencia","4006" => "Beneficio Hospedajes: Fecha de Consumo ","4007" => "Beneficio Hospedajes-Paquete turístico: Nombres y apellidos del huesped ","4008" => "Beneficio Hospedajes-Paquete turístico: Tipo de documento de identidad del huesped ","4009" => "Beneficio Hospedajes-Paquete turístico: Número de documento de identidad del huesped ","4030" => "Carta Porte Aéreo:  Lugar de origen - Código de ubigeo","4031" => "Carta Porte Aéreo:  Lugar de origen - Dirección detallada","4032" => "Carta Porte Aéreo:  Lugar de destino - Código de ubigeo","4033" => "Carta Porte Aéreo:  Lugar de destino - Dirección detallada","4040" => "BVME transporte ferroviario: Pasajero - Apellidos y Nombres","4041" => "BVME transporte ferroviario: Pasajero - Tipo de documento de identidad","4042" => "BVME transporte ferroviario: Servicio transporte: Ciudad o lugar de origen - Código de ubigeo","4043" => "BVME transporte ferroviario: Servicio transporte: Ciudad o lugar de origen - Dirección detallada","4044" => "BVME transporte ferroviario: Servicio transporte: Ciudad o lugar de destino - Código de ubigeo","4045" => "BVME transporte ferroviario: Servicio transporte: Ciudad o lugar de destino - Dirección detallada","4046" => "BVME transporte ferroviario: Servicio transporte:Número de asiento","4047" => "BVME transporte ferroviario: Servicio transporte: Hora programada de inicio de viaje","4048" => "BVME transporte ferroviario: Servicio transporte: Fecha programada de inicio de viaje","4049" => "BVME transporte ferroviario: Pasajero - Número de documento de identidad","4060" => "Regalía Petrolera: Decreto Supremo de aprobación del contrato","4061" => "Regalía Petrolera: Area de contrato (Lote)","4062" => "Regalía Petrolera: Periodo de pago - Fecha de inicio","4063" => "Regalía Petrolera: Periodo de pago - Fecha de fin","4064" => "Regalía Petrolera: Fecha de Pago","5000" => "Proveedores Estado: Número de Expediente","5001" => "Proveedores Estado: Código de Unidad Ejecutora","5002" => "Proveedores Estado: N° de Proceso de Selección","5003" => "Proveedores Estado: N° de Contrato","5010" => "Numero de Placa","5011" => "Categoria","5012" => "Marca","5013" => "Modelo","5014" => "Color","5015" => "Motor","5016" => "Combustible","5017" => "Form. Rodante","5018" => "VIN","5019" => "Serie/Chasis","5020" => "Año fabricacion","5021" => "Año modelo","5022" => "Version","5023" => "Ejes","5024" => "Asientos","5025" => "Pasajeros","5026" => "Ruedas","5027" => "Carroceria","5028" => "Potencia","5029" => "Cilindros","5030" => "Ciliindrada","5031" => "Peso Bruto","5032" => "Peso Neto","5033" => "Carga Util","5034" => "Longitud","5035" => "Altura","5036" => "Ancho","5060" => "Gas Natural - Lectura Anterior","5061" => "Gas Natural - Lectura Actual","5062" => "Gas Natural - Volumen consumido a Condiciones de lectura","5063" => "Gas Natural - Factor de correccion del volumen","5064" => "Gas Natural - Volumen a condiciones Estandares","5065" => "Gas Natural - Volumen facturado","5066" => "Gas Natural - Poder Calorifico Superior Promedio del Gas","6000" => "Comercialización de Oro:  Código Unico Concesión Minera","6001" => "Comercialización de Oro:  N° declaración compromiso","6002" => "Comercialización de Oro:  N° Reg. Especial .Comerci. Oro","6003" => "Comercialización de Oro:  N° Resolución que autoriza Planta de Beneficio","6004" => "Comercialización de Oro: Ley Mineral (% concent. oro)","6005" => "Comercialización de Oro : Naturaleza del mineral","6006" => "Comercialización de Oro : Nombre del derecho minero","7000" => "Gastos Art. 37 Renta:  Número de Placa","7001" => "Empresas del sistema financiero y cooperativas de ahorro y crédito no autorizadas a captar recursos del público: Tipo de préstamo","7002" => "Empresas del sistema financiero y cooperativas de ahorro y crédito no autorizadas a captar recursos del público: Indicador de Primera Vivienda","7003" => "Empresas del sistema financiero y cooperativas de ahorro y crédito no autorizadas a captar recursos del público: Partida Registral","7004" => "Empresas del sistema financiero y cooperativas de ahorro y crédito no autorizadas a captar recursos del público: Número de contrato","7005" => "Empresas del sistema financiero y cooperativas de ahorro y crédito no autorizadas a captar recursos del público: Fecha de otorgamiento del crédito","7006" => "Empresas del sistema financiero y cooperativas de ahorro y crédito no autorizadas a captar recursos del público: Dirección del predio - Código de ubigeo","7007" => "Empresas del sistema financiero y cooperativas de ahorro y crédito no autorizadas a captar recursos del público: Dirección del predio - Dirección completa","7008" => "Empresas del sistema financiero y cooperativas de ahorro y crédito no autorizadas a captar recursos del público: Dirección del predio - Urbanización","7009" => "Empresas del sistema financiero y cooperativas de ahorro y crédito no autorizadas a captar recursos del público: Dirección del predio - Provincia","7010" => "Empresas del sistema financiero y cooperativas de ahorro y crédito no autorizadas a captar recursos del público: Dirección del predio - Distrito","7011" => "Empresas del sistema financiero y cooperativas de ahorro y crédito no autorizadas a captar recursos del público: Dirección del predio - Departamento","7012" => "Empresas del sistema financiero y cooperativas de ahorro y crédito no autorizadas a captar recursos del público: Monto del crédito otorgado (capital)","7013" => "Empresas del sistema de seguro: Número de póliza","7014" => "Empresas del sistema de seguro: Fecha de inicio/término de vigencia de cobertura","7015" => "Empresas del sistema de seguro: Tipo de seguro","7016" => "Empresas del sistema de seguro: Suma asegurada / alcance de cobertura o monto","7017" => "AFP: CUSPP","7018" => "AFP: Periodo","7019" => "AFP: Monto del interes moratorio","7020" => "Partida arancelaria","7021" => "Numero de declaracion aduanera (DAM)","7022" => "Indicador de bien normalizado","7023" => "Numero de serie en la DAM o DS"];

    //Catalogo 13 - Ubigeos // remitente destinatario
    private $departamentos = ["01" => "AMAZONAS","02" => "ANCASH","03" => "APURIMAC","04" => "AREQUIPA","05" => "AYACUCHO","06" => "CAJAMARCA","07" => "CALLAO","08" => "CUSCO","09" => "HUANCAVELICA","10" => "HUANUCO","11" => "ICA","12" => "JUNIN","13" => "LA LIBERTAD","14" => "LAMBAYEQUE","15" => "LIMA","16" => "LORETO","17" => "MADRE DE DIOS","18" => "MOQUEGUA","19" => "PASCO","20" => "PIURA","21" => "PUNO","22" => "SAN MARTIN","23" => "TACNA","24" => "TUMBES","25" => "UCAYALI"];

    private $provincia = [
        "01" => ["0101" => "CHACHAPOYAS","0102" => "BAGUA","0103" => "BONGARA","0104" => "CONDORCANQUI","0105" => "LUYA","0106" => "RODRIGUEZ DE MENDOZA","0107" => "UTCUBAMBA"],
        "02" => ["0201" => "HUARAZ","0202" => "AIJA","0203" => "ANTONIO RAYMONDI","0204" => "ASUNCION","0205" => "BOLOGNESI","0206" => "CARHUAZ","0207" => "CARLOS FERMIN FITZCARRALD","0208" => "CASMA","0209" => "CORONGO","0210" => "HUARI","0211" => "HUARMEY","0212" => "HUAYLAS","0213" => "MARISCAL LUZURIAGA","0214" => "OCROS","0215" => "PALLASCA","0216" => "POMABAMBA","0217" => "RECUAY","0218" => "SANTA","0219" => "SIHUAS","0220" => "YUNGAY"],
        "03" => ["0301" => "ABANCAY","0302" => "ANDAHUAYLAS","0303" => "ANTABAMBA","0304" => "AYMARAES","0305" => "COTABAMBAS","0306" => "CHINCHEROS","0307" => "GRAU"],
        "04" => ["0401" => "AREQUIPA","0402" => "CAMANA","0403" => "CARAVELI","0404" => "CASTILLA","0405" => "CAYLLOMA","0406" => "CONDESUYOS","0407" => "ISLAY","0408" => "LA UNION"],
        "05" => ["0501" => "HUAMANGA","0502" => "CANGALLO","0503" => "HUANCA SANCOS","0504" => "HUANTA","0505" => "LA MAR","0506" => "LUCANAS","0507" => "PARINACOCHAS","0508" => "PAUCAR DEL SARA SARA","0509" => "SUCRE","0510" => "VICTOR FAJARDO","0511" => "VILCAS HUAMAN"],
        "06" => ["0601" => "CAJAMARCA","0602" => "CAJABAMBA","0603" => "CELENDIN","0604" => "CHOTA","0605" => "CONTUMAZA","0606" => "CUTERVO","0607" => "HUALGAYOC","0608" => "JAEN","0609" => "SAN IGNACIO","0610" => "SAN MARCOS","0611" => "SAN MIGUEL","0612" => "SAN PABLO","0613" => "SANTA CRUZ"],
        "07" => ["0701" => "CALLAO"],
        "08" => ["0801" => "CUSCO","0802" => "ACOMAYO","0803" => "ANTA","0804" => "CALCA","0805" => "CANAS","0806" => "CANCHIS","0807" => "CHUMBIVILCAS","0808" => "ESPINAR","0809" => "LA CONVENCION","0810" => "PARURO","0811" => "PAUCARTAMBO","0812" => "QUISPICANCHI","0813" => "URUBAMBA"],
        "09" => ["0901" => "HUANCAVELICA","0902" => "ACOBAMBA","0903" => "ANGARAES","0904" => "CASTROVIRREYNA","0905" => "CHURCAMPA","0906" => "HUAYTARA","0907" => "TAYACAJA"],
        "10" => ["1001" => "HUANUCO","1002" => "AMBO","1003" => "DOS DE MAYO","1004" => "HUACAYBAMBA","1005" => "HUAMALIES","1006" => "LEONCIO PRADO","1007" => "MARAÑON","1008" => "PACHITEA","1009" => "PUERTO INCA","1010" => "LAURICOCHA","1011" => "YAROWILCA"],
        "11" => ["1101" => "ICA","1102" => "CHINCHA","1103" => "NASCA","1104" => "PALPA","1105" => "PISCO"],
        "12" => ["1201" => "HUANCAYO","1202" => "CONCEPCION","1203" => "CHANCHAMAYO","1204" => "JAUJA","1205" => "JUNIN","1206" => "SATIPO","1207" => "TARMA","1208" => "YAULI","1209" => "CHUPACA"],
        "13" => ["1301" => "TRUJILLO","1302" => "ASCOPE","1303" => "BOLIVAR","1304" => "CHEPEN","1305" => "JULCAN","1306" => "OTUZCO","1307" => "PACASMAYO","1308" => "PATAZ","1309" => "SANCHEZ CARRION","1310" => "SANTIAGO DE CHUCO","1311" => "GRAN CHIMU","1312" => "VIRU"],
        "14" => ["1401" => "CHICLAYO","1402" => "FERREÑAFE","1403" => "LAMBAYEQUE"],
        "15" => ["1501" => "LIMA","1502" => "BARRANCA","1503" => "CAJATAMBO","1504" => "CANTA","1505" => "CAÑETE","1506" => "HUARAL","1507" => "HUAROCHIRI","1508" => "HUAURA","1509" => "OYON","1510" => "YAUYOS"],
        "16" => ["1601" => "MAYNAS","1602" => "ALTO AMAZONAS","1603" => "LORETO","1604" => "MARISCAL RAMON CASTILLA","1605" => "REQUENA","1606" => "UCAYALI","1607" => "DATEM DEL MARAÑON","1608" => "PUTUMAYO"],
        "17" => ["1701" => "TAMBOPATA","1702" => "MANU","1703" => "TAHUAMANU"],
        "18" => ["1801" => "MARISCAL NIETO","1802" => "GENERAL SANCHEZ CERRO","1803" => "ILO"],
        "19" => ["1901" => "PASCO","1902" => "DANIEL ALCIDES CARRION","1903" => "OXAPAMPA"],
        "20" => ["2001" => "PIURA","2002" => "AYABACA","2003" => "HUANCABAMBA","2004" => "MORROPON","2005" => "PAITA","2006" => "SULLANA","2007" => "TALARA","2008" => "SECHURA"],
        "21" => ["2101" => "PUNO","2102" => "AZANGARO","2103" => "CARABAYA","2104" => "CHUCUITO","2105" => "EL COLLAO","2106" => "HUANCANE","2107" => "LAMPA","2108" => "MELGAR","2109" => "MOHO","2110" => "SAN ANTONIO DE PUTINA","2111" => "SAN ROMAN","2112" => "SANDIA","2113" => "YUNGUYO"],
        "22" => ["2201" => "MOYOBAMBA","2202" => "BELLAVISTA","2203" => "EL DORADO","2204" => "HUALLAGA","2205" => "LAMAS","2206" => "MARISCAL CACERES","2207" => "PICOTA","2208" => "RIOJA","2209" => "SAN MARTIN","2210" => "TOCACHE"],
        "23" => ["2301" => "TACNA","2302" => "CANDARAVE","2303" => "JORGE BASADRE","2304" => "TARATA"],
        "24" => ["2401" => "TUMBES","2402" => "CONTRALMIRANTE VILLAR","2403" => "ZARUMILLA"],
        "25" => ["2501" => "CORONEL PORTILLO","2502" => "ATALAYA","2503" => "PADRE ABAD","2504" => "PURUS"],
    ];

    private $distritos = [
        "0101" => ["010101" => "CHACHAPOYAS","010102" => "ASUNCION","010103" => "BALSAS","010104" => "CHETO","010105" => "CHILIQUIN","010106" => "CHUQUIBAMBA","010107" => "GRANADA","010108" => "HUANCAS","010109" => "LA JALCA","010110" => "LEIMEBAMBA","010111" => "LEVANTO","010112" => "MAGDALENA","010113" => "MARISCAL CASTILLA","010114" => "MOLINOPAMPA","010115" => "MONTEVIDEO","010116" => "OLLEROS","010117" => "QUINJALCA","010118" => "SAN FRANCISCO DE DAGUAS","010119" => "SAN ISIDRO DE MAINO","010120" => "SOLOCO","010121" => "SONCHE"],
        "0102" => ["010201" => "BAGUA","010202" => "ARAMANGO","010203" => "COPALLIN","010204" => "EL PARCO","010205" => "IMAZA","010206" => "LA PECA"],
        "0103" => ["010301" => "JUMBILLA","010302" => "CHISQUILLA","010303" => "CHURUJA","010304" => "COROSHA","010305" => "CUISPES","010306" => "FLORIDA","010307" => "JAZAN","010308" => "RECTA","010309" => "SAN CARLOS","010310" => "SHIPASBAMBA","010311" => "VALERA","010312" => "YAMBRASBAMBA"],
        "0104" => ["010401" => "NIEVA","010402" => "EL CENEPA","010403" => "RIO SANTIAGO"],
        "0105" => ["010501" => "LAMUD","010502" => "CAMPORREDONDO","010503" => "COCABAMBA","010504" => "COLCAMAR","010505" => "CONILA","010506" => "INGUILPATA","010507" => "LONGUITA","010508" => "LONYA CHICO","010509" => "LUYA","010510" => "LUYA VIEJO","010511" => "MARIA","010512" => "OCALLI","010513" => "OCUMAL","010514" => "PISUQUIA","010515" => "PROVIDENCIA","010516" => "SAN CRISTOBAL","010517" => "SAN FRANCISCO DEL YESO","010518" => "SAN JERONIMO","010519" => "SAN JUAN DE LOPECANCHA","010520" => "SANTA CATALINA","010521" => "SANTO TOMAS","010522" => "TINGO","010523" => "TRITA"],
        "0106" => ["010601" => "SAN NICOLAS","010602" => "CHIRIMOTO","010603" => "COCHAMAL","010604" => "HUAMBO","010605" => "LIMABAMBA","010606" => "LONGAR","010607" => "MARISCAL BENAVIDES","010608" => "MILPUC","010609" => "OMIA","010610" => "SANTA ROSA","010611" => "TOTORA","010612" => "VISTA ALEGRE"],
        "0107" => ["010701" => "BAGUA GRANDE","010702" => "CAJARURO","010703" => "CUMBA","010704" => "EL MILAGRO","010705" => "JAMALCA","010706" => "LONYA GRANDE","010707" => "YAMON"],
        "0201" => ["020101" => "HUARAZ","020102" => "COCHABAMBA","020103" => "COLCABAMBA","020104" => "HUANCHAY","020105" => "INDEPENDENCIA","020106" => "JANGAS","020107" => "LA LIBERTAD","020108" => "OLLEROS","020109" => "PAMPAS GRANDE","020110" => "PARIACOTO","020111" => "PIRA","020112" => "TARICA"],
        "0202" => ["020201" => "AIJA","020202" => "CORIS","020203" => "HUACLLAN","020204" => "LA MERCED","020205" => "SUCCHA"],
        "0203" => ["020301" => "LLAMELLIN","020302" => "ACZO","020303" => "CHACCHO","020304" => "CHINGAS","020305" => "MIRGAS","020306" => "SAN JUAN DE RONTOY"],
        "0204" => ["020401" => "CHACAS","020402" => "ACOCHACA"],
        "0205" => ["020501" => "CHIQUIAN","020502" => "ABELARDO PARDO LEZAMETA","020503" => "ANTONIO RAYMONDI","020504" => "AQUIA","020505" => "CAJACAY","020506" => "CANIS","020507" => "COLQUIOC","020508" => "HUALLANCA","020509" => "HUASTA","020510" => "HUAYLLACAYAN","020511" => "LA PRIMAVERA","020512" => "MANGAS","020513" => "PACLLON","020514" => "SAN MIGUEL DE CORPANQUI","020515" => "TICLLOS"],
        "0206" => ["020601" => "CARHUAZ","020602" => "ACOPAMPA","020603" => "AMASHCA","020604" => "ANTA","020605" => "ATAQUERO","020606" => "MARCARA","020607" => "PARIAHUANCA","020608" => "SAN MIGUEL DE ACO","020609" => "SHILLA","020610" => "TINCO","020611" => "YUNGAR"],
        "0207" => ["020701" => "SAN LUIS","020702" => "SAN NICOLAS","020703" => "YAUYA"],
        "0208" => ["020801" => "CASMA","020802" => "BUENA VISTA ALTA","020803" => "COMANDANTE NOEL","020804" => "YAUTAN"],
        "0209" => ["020901" => "CORONGO","020902" => "ACO","020903" => "BAMBAS","020904" => "CUSCA","020905" => "LA PAMPA","020906" => "YANAC","020907" => "YUPAN"],
        "0210" => ["021001" => "HUARI","021002" => "ANRA","021003" => "CAJAY","021004" => "CHAVIN DE HUANTAR","021005" => "HUACACHI","021006" => "HUACCHIS","021007" => "HUACHIS","021008" => "HUANTAR","021009" => "MASIN","021010" => "PAUCAS","021011" => "PONTO","021012" => "RAHUAPAMPA","021013" => "RAPAYAN","021014" => "SAN MARCOS","021015" => "SAN PEDRO DE CHANA","021016" => "UCO"],
        "0211" => ["021101" => "HUARMEY","021102" => "COCHAPETI","021103" => "CULEBRAS","021104" => "HUAYAN","021105" => "MALVAS"],
        "0212" => ["021201" => "CARAZ","021202" => "HUALLANCA","021203" => "HUATA","021204" => "HUAYLAS","021205" => "MATO","021206" => "PAMPAROMAS","021207" => "PUEBLO LIBRE","021208" => "SANTA CRUZ","021209" => "SANTO TORIBIO","021210" => "YURACMARCA"],
        "0213" => ["021301" => "PISCOBAMBA","021302" => "CASCA","021303" => "ELEAZAR GUZMAN BARRON","021304" => "FIDEL OLIVAS ESCUDERO","021305" => "LLAMA","021306" => "LLUMPA","021307" => "LUCMA","021308" => "MUSGA"],
        "0214" => ["021401" => "OCROS","021402" => "ACAS","021403" => "CAJAMARQUILLA","021404" => "CARHUAPAMPA","021405" => "COCHAS","021406" => "CONGAS","021407" => "LLIPA","021408" => "SAN CRISTOBAL DE RAJAN","021409" => "SAN PEDRO","021410" => "SANTIAGO DE CHILCAS"],
        "0215" => ["021501" => "CABANA","021502" => "BOLOGNESI","021503" => "CONCHUCOS","021504" => "HUACASCHUQUE","021505" => "HUANDOVAL","021506" => "LACABAMBA","021507" => "LLAPO","021508" => "PALLASCA","021509" => "PAMPAS","021510" => "SANTA ROSA","021511" => "TAUCA"],
        "0216" => ["021601" => "POMABAMBA","021602" => "HUAYLLAN","021603" => "PAROBAMBA","021604" => "QUINUABAMBA"],
        "0217" => ["021701" => "RECUAY","021702" => "CATAC","021703" => "COTAPARACO","021704" => "HUAYLLAPAMPA","021705" => "LLACLLIN","021706" => "MARCA","021707" => "PAMPAS CHICO","021708" => "PARARIN","021709" => "TAPACOCHA","021710" => "TICAPAMPA"],
        "0218" => ["021801" => "CHIMBOTE","021802" => "CACERES DEL PERU","021803" => "COISHCO","021804" => "MACATE","021805" => "MORO","021806" => "NEPEÑA","021807" => "SAMANCO","021808" => "SANTA","021809" => "NUEVO CHIMBOTE"],
        "0219" => ["021901" => "SIHUAS","021902" => "ACOBAMBA","021903" => "ALFONSO UGARTE","021904" => "CASHAPAMPA","021905" => "CHINGALPO","021906" => "HUAYLLABAMBA","021907" => "QUICHES","021908" => "RAGASH","021909" => "SAN JUAN","021910" => "SICSIBAMBA"],
        "0220" => ["022001" => "YUNGAY","022002" => "CASCAPARA","022003" => "MANCOS","022004" => "MATACOTO","022005" => "QUILLO","022006" => "RANRAHIRCA","022007" => "SHUPLUY","022008" => "YANAMA"],
        "0301" => ["030101" => "ABANCAY","030102" => "CHACOCHE","030103" => "CIRCA","030104" => "CURAHUASI","030105" => "HUANIPACA","030106" => "LAMBRAMA","030107" => "PICHIRHUA","030108" => "SAN PEDRO DE CACHORA","030109" => "TAMBURCO"],
        "0302" => ["030201" => "ANDAHUAYLAS","030202" => "ANDARAPA","030203" => "CHIARA","030204" => "HUANCARAMA","030205" => "HUANCARAY","030206" => "HUAYANA","030207" => "KISHUARA","030208" => "PACOBAMBA","030209" => "PACUCHA","030210" => "PAMPACHIRI","030211" => "POMACOCHA","030212" => "SAN ANTONIO DE CACHI","030213" => "SAN JERONIMO","030214" => "SAN MIGUEL DE CHACCRAMPA","030215" => "SANTA MARIA DE CHICMO","030216" => "TALAVERA","030217" => "TUMAY HUARACA","030218" => "TURPO","030219" => "KAQUIABAMBA","030220" => "JOSE MARIA ARGUEDAS"],
        "0303" => ["030301" => "ANTABAMBA","030302" => "EL ORO","030303" => "HUAQUIRCA","030304" => "JUAN ESPINOZA MEDRANO","030305" => "OROPESA","030306" => "PACHACONAS","030307" => "SABAINO"],
        "0304" => ["030401" => "CHALHUANCA","030402" => "CAPAYA","030403" => "CARAYBAMBA","030404" => "CHAPIMARCA","030405" => "COLCABAMBA","030406" => "COTARUSE","030407" => "IHUAYLLO","030408" => "JUSTO APU SAHUARAURA","030409" => "LUCRE","030410" => "POCOHUANCA","030411" => "SAN JUAN DE CHACÑA","030412" => "SAÑAYCA","030413" => "SORAYA","030414" => "TAPAIRIHUA","030415" => "TINTAY","030416" => "TORAYA","030417" => "YANACA"],
        "0305" => ["030501" => "TAMBOBAMBA","030502" => "COTABAMBAS","030503" => "COYLLURQUI","030504" => "HAQUIRA","030505" => "MARA","030506" => "CHALLHUAHUACHO"],
        "0306" => ["030601" => "CHINCHEROS","030602" => "ANCO_HUALLO","030603" => "COCHARCAS","030604" => "HUACCANA","030605" => "OCOBAMBA","030606" => "ONGOY","030607" => "URANMARCA","030608" => "RANRACANCHA","030609" => "ROCCHACC","030610" => "EL PORVENIR","030611" => "LOS CHANKAS"],
        "0307" => ["030701" => "CHUQUIBAMBILLA","030702" => "CURPAHUASI","030703" => "GAMARRA","030704" => "HUAYLLATI","030705" => "MAMARA","030706" => "MICAELA BASTIDAS","030707" => "PATAYPAMPA","030708" => "PROGRESO","030709" => "SAN ANTONIO","030710" => "SANTA ROSA","030711" => "TURPAY","030712" => "VILCABAMBA","030713" => "VIRUNDO","030714" => "CURASCO"],
        "0401" => ["040101" => "AREQUIPA","040102" => "ALTO SELVA ALEGRE","040103" => "CAYMA","040104" => "CERRO COLORADO","040105" => "CHARACATO","040106" => "CHIGUATA","040107" => "JACOBO HUNTER","040108" => "LA JOYA","040109" => "MARIANO MELGAR","040110" => "MIRAFLORES","040111" => "MOLLEBAYA","040112" => "PAUCARPATA","040113" => "POCSI","040114" => "POLOBAYA","040115" => "QUEQUEÑA","040116" => "SABANDIA","040117" => "SACHACA","040118" => "SAN JUAN DE SIGUAS","040119" => "SAN JUAN DE TARUCANI","040120" => "SANTA ISABEL DE SIGUAS","040121" => "SANTA RITA DE SIGUAS","040122" => "SOCABAYA","040123" => "TIABAYA","040124" => "UCHUMAYO","040125" => "VITOR","040126" => "YANAHUARA","040127" => "YARABAMBA","040128" => "YURA","040129" => "JOSE LUIS BUSTAMANTE Y RIVERO"],
        "0402" => ["040201" => "CAMANA","040202" => "JOSE MARIA QUIMPER","040203" => "MARIANO NICOLAS VALCARCEL","040204" => "MARISCAL CACERES","040205" => "NICOLAS DE PIEROLA","040206" => "OCOÑA","040207" => "QUILCA","040208" => "SAMUEL PASTOR"],
        "0403" => ["040301" => "CARAVELI","040302" => "ACARI","040303" => "ATICO","040304" => "ATIQUIPA","040305" => "BELLA UNION","040306" => "CAHUACHO","040307" => "CHALA","040308" => "CHAPARRA","040309" => "HUANUHUANU","040310" => "JAQUI","040311" => "LOMAS","040312" => "QUICACHA","040313" => "YAUCA"],
        "0404" => ["040401" => "APLAO","040402" => "ANDAGUA","040403" => "AYO","040404" => "CHACHAS","040405" => "CHILCAYMARCA","040406" => "CHOCO","040407" => "HUANCARQUI","040408" => "MACHAGUAY","040409" => "ORCOPAMPA","040410" => "PAMPACOLCA","040411" => "TIPAN","040412" => "UÑON","040413" => "URACA","040414" => "VIRACO"],
        "0405" => ["040501" => "CHIVAY","040502" => "ACHOMA","040503" => "CABANACONDE","040504" => "CALLALLI","040505" => "CAYLLOMA","040506" => "COPORAQUE","040507" => "HUAMBO","040508" => "HUANCA","040509" => "ICHUPAMPA","040510" => "LARI","040511" => "LLUTA","040512" => "MACA","040513" => "MADRIGAL","040514" => "SAN ANTONIO DE CHUCA","040515" => "SIBAYO","040516" => "TAPAY","040517" => "TISCO","040518" => "TUTI","040519" => "YANQUE","040520" => "MAJES"],
        "0406" => ["040601" => "CHUQUIBAMBA","040602" => "ANDARAY","040603" => "CAYARANI","040604" => "CHICHAS","040605" => "IRAY","040606" => "RIO GRANDE","040607" => "SALAMANCA","040608" => "YANAQUIHUA"],
        "0407" => ["040701" => "MOLLENDO","040702" => "COCACHACRA","040703" => "DEAN VALDIVIA","040704" => "ISLAY","040705" => "MEJIA","040706" => "PUNTA DE BOMBON"],
        "0408" => ["040801" => "COTAHUASI","040802" => "ALCA","040803" => "CHARCANA","040804" => "HUAYNACOTAS","040805" => "PAMPAMARCA","040806" => "PUYCA","040807" => "QUECHUALLA","040808" => "SAYLA","040809" => "TAURIA","040810" => "TOMEPAMPA","040811" => "TORO"],
        "0501" => ["050101" => "AYACUCHO","050102" => "ACOCRO","050103" => "ACOS VINCHOS","050104" => "CARMEN ALTO","050105" => "CHIARA","050106" => "OCROS","050107" => "PACAYCASA","050108" => "QUINUA","050109" => "SAN JOSE DE TICLLAS","050110" => "SAN JUAN BAUTISTA","050111" => "SANTIAGO DE PISCHA","050112" => "SOCOS","050113" => "TAMBILLO","050114" => "VINCHOS","050115" => "JESUS NAZARENO","050116" => "ANDRES AVELINO CACERES DORREGARAY"],
        "0502" => ["050201" => "CANGALLO","050202" => "CHUSCHI","050203" => "LOS MOROCHUCOS","050204" => "MARIA PARADO DE BELLIDO","050205" => "PARAS","050206" => "TOTOS"],
        "0503" => ["050301" => "SANCOS","050302" => "CARAPO","050303" => "SACSAMARCA","050304" => "SANTIAGO DE LUCANAMARCA"],
        "0504" => ["050401" => "HUANTA","050402" => "AYAHUANCO","050403" => "HUAMANGUILLA","050404" => "IGUAIN","050405" => "LURICOCHA","050406" => "SANTILLANA","050407" => "SIVIA","050408" => "LLOCHEGUA","050409" => "CANAYRE","050410" => "UCHURACCAY","050411" => "PUCACOLPA","050412" => "CHACA"],
        "0505" => ["050501" => "SAN MIGUEL","050502" => "ANCO","050503" => "AYNA","050504" => "CHILCAS","050505" => "CHUNGUI","050506" => "LUIS CARRANZA","050507" => "SANTA ROSA","050508" => "TAMBO","050509" => "SAMUGARI","050510" => "ANCHIHUAY","050511" => "ORONCCOY"],
        "0506" => ["050601" => "PUQUIO","050602" => "AUCARA","050603" => "CABANA","050604" => "CARMEN SALCEDO","050605" => "CHAVIÑA","050606" => "CHIPAO","050607" => "HUAC-HUAS","050608" => "LARAMATE","050609" => "LEONCIO PRADO","050610" => "LLAUTA","050611" => "LUCANAS","050612" => "OCAÑA","050613" => "OTOCA","050614" => "SAISA","050615" => "SAN CRISTOBAL","050616" => "SAN JUAN","050617" => "SAN PEDRO","050618" => "SAN PEDRO DE PALCO","050619" => "SANCOS","050620" => "SANTA ANA DE HUAYCAHUACHO","050621" => "SANTA LUCIA"],
        "0507" => ["050701" => "CORACORA","050702" => "CHUMPI","050703" => "CORONEL CASTAÑEDA","050704" => "PACAPAUSA","050705" => "PULLO","050706" => "PUYUSCA","050707" => "SAN FRANCISCO DE RAVACAYCO","050708" => "UPAHUACHO"],
        "0508" => ["050801" => "PAUSA","050802" => "COLTA","050803" => "CORCULLA","050804" => "LAMPA","050805" => "MARCABAMBA","050806" => "OYOLO","050807" => "PARARCA","050808" => "SAN JAVIER DE ALPABAMBA","050809" => "SAN JOSE DE USHUA","050810" => "SARA SARA"],
        "0509" => ["050901" => "QUEROBAMBA","050902" => "BELEN","050903" => "CHALCOS","050904" => "CHILCAYOC","050905" => "HUACAÑA","050906" => "MORCOLLA","050907" => "PAICO","050908" => "SAN PEDRO DE LARCAY","050909" => "SAN SALVADOR DE QUIJE","050910" => "SANTIAGO DE PAUCARAY","050911" => "SORAS"],
        "0510" => ["051001" => "HUANCAPI","051002" => "ALCAMENCA","051003" => "APONGO","051004" => "ASQUIPATA","051005" => "CANARIA","051006" => "CAYARA","051007" => "COLCA","051008" => "HUAMANQUIQUIA","051009" => "HUANCARAYLLA","051010" => "HUALLA","051011" => "SARHUA","051012" => "VILCANCHOS"],
        "0511" => ["051101" => "VILCAS HUAMAN","051102" => "ACCOMARCA","051103" => "CARHUANCA","051104" => "CONCEPCION","051105" => "HUAMBALPA","051106" => "INDEPENDENCIA","051107" => "SAURAMA","051108" => "VISCHONGO"],
        "0601" => ["060101" => "CAJAMARCA","060102" => "ASUNCION","060103" => "CHETILLA","060104" => "COSPAN","060105" => "ENCAÑADA","060106" => "JESUS","060107" => "LLACANORA","060108" => "LOS BAÑOS DEL INCA","060109" => "MAGDALENA","060110" => "MATARA","060111" => "NAMORA","060112" => "SAN JUAN"],
        "0602" => ["060201" => "CAJABAMBA","060202" => "CACHACHI","060203" => "CONDEBAMBA","060204" => "SITACOCHA"],
        "0603" => ["060301" => "CELENDIN","060302" => "CHUMUCH","060303" => "CORTEGANA","060304" => "HUASMIN","060305" => "JORGE CHAVEZ","060306" => "JOSE GALVEZ","060307" => "MIGUEL IGLESIAS","060308" => "OXAMARCA","060309" => "SOROCHUCO","060310" => "SUCRE","060311" => "UTCO","060312" => "LA LIBERTAD DE PALLAN"],
        "0604" => ["060401" => "CHOTA","060402" => "ANGUIA","060403" => "CHADIN","060404" => "CHIGUIRIP","060405" => "CHIMBAN","060406" => "CHOROPAMPA","060407" => "COCHABAMBA","060408" => "CONCHAN","060409" => "HUAMBOS","060410" => "LAJAS","060411" => "LLAMA","060412" => "MIRACOSTA","060413" => "PACCHA","060414" => "PION","060415" => "QUEROCOTO","060416" => "SAN JUAN DE LICUPIS","060417" => "TACABAMBA","060418" => "TOCMOCHE","060419" => "CHALAMARCA"],
        "0605" => ["060501" => "CONTUMAZA","060502" => "CHILETE","060503" => "CUPISNIQUE","060504" => "GUZMANGO","060505" => "SAN BENITO","060506" => "SANTA CRUZ DE TOLED","060507" => "TANTARICA","060508" => "YONAN"],
        "0606" => ["060601" => "CUTERVO","060602" => "CALLAYUC","060603" => "CHOROS","060604" => "CUJILLO","060605" => "LA RAMADA","060606" => "PIMPINGOS","060607" => "QUEROCOTILLO","060608" => "SAN ANDRES DE CUTERVO","060609" => "SAN JUAN DE CUTERVO","060610" => "SAN LUIS DE LUCMA","060611" => "SANTA CRUZ","060612" => "SANTO DOMINGO DE LA CAPILLA","060613" => "SANTO TOMAS","060614" => "SOCOTA","060615" => "TORIBIO CASANOVA"],
        "0607" => ["060701" => "BAMBAMARCA","060702" => "CHUGUR","060703" => "HUALGAYOC"],
        "0608" => ["060801" => "JAEN","060802" => "BELLAVISTA","060803" => "CHONTALI","060804" => "COLASAY","060805" => "HUABAL","060806" => "LAS PIRIAS","060807" => "POMAHUACA","060808" => "PUCARA","060809" => "SALLIQUE","060810" => "SAN FELIPE","060811" => "SAN JOSE DEL ALTO","060812" => "SANTA ROSA"],
        "0609" => ["060901" => "SAN IGNACIO","060902" => "CHIRINOS","060903" => "HUARANGO","060904" => "LA COIPA","060905" => "NAMBALLE","060906" => "SAN JOSE DE LOURDES","060907" => "TABACONAS"],
        "0610" => ["061001" => "PEDRO GALVEZ","061002" => "CHANCAY","061003" => "EDUARDO VILLANUEVA","061004" => "GREGORIO PITA","061005" => "ICHOCAN","061006" => "JOSE MANUEL QUIROZ","061007" => "JOSE SABOGAL"],
        "0611" => ["061101" => "SAN MIGUEL","061102" => "BOLIVAR","061103" => "CALQUIS","061104" => "CATILLUC","061105" => "EL PRADO","061106" => "LA FLORIDA","061107" => "LLAPA","061108" => "NANCHOC","061109" => "NIEPOS","061110" => "SAN GREGORIO","061111" => "SAN SILVESTRE DE COCHAN","061112" => "TONGOD","061113" => "UNION AGUA BLANCA"],
        "0612" => ["061201" => "SAN PABLO","061202" => "SAN BERNARDINO","061203" => "SAN LUIS","061204" => "TUMBADEN"],
        "0613" => ["061301" => "SANTA CRUZ","061302" => "ANDABAMBA","061303" => "CATACHE","061304" => "CHANCAYBAÑOS","061305" => "LA ESPERANZA","061306" => "NINABAMBA","061307" => "PULAN","061308" => "SAUCEPAMPA","061309" => "SEXI","061310" => "UTICYACU","061311" => "YAUYUCAN"],
        "0701" => ["070101" => "CALLAO","070102" => "BELLAVISTA","070103" => "CARMEN DE LA LEGUA REYNOSO","070104" => "LA PERLA","070105" => "LA PUNTA","070106" => "VENTANILLA","070107" => "MI PERU"],
        "0801" => ["080101" => "CUSCO","080102" => "CCORCA","080103" => "POROY","080104" => "SAN JERONIMO","080105" => "SAN SEBASTIAN","080106" => "SANTIAGO","080107" => "SAYLLA","080108" => "WANCHAQ"],
        "0802" => ["080201" => "ACOMAYO","080202" => "ACOPIA","080203" => "ACOS","080204" => "MOSOC LLACTA","080205" => "POMACANCHI","080206" => "RONDOCAN","080207" => "SANGARARA"],
        "0803" => ["080301" => "ANTA","080302" => "ANCAHUASI","080303" => "CACHIMAYO","080304" => "CHINCHAYPUJIO","080305" => "HUAROCONDO","080306" => "LIMATAMBO","080307" => "MOLLEPATA","080308" => "PUCYURA","080309" => "ZURITE"],
        "0804" => ["080401" => "CALCA","080402" => "COYA","080403" => "LAMAY","080404" => "LARES","080405" => "PISAC","080406" => "SAN SALVADOR","080407" => "TARAY","080408" => "YANATILE"],
        "0805" => ["080501" => "YANAOCA","080502" => "CHECCA","080503" => "KUNTURKANKI","080504" => "LANGUI","080505" => "LAYO","080506" => "PAMPAMARCA","080507" => "QUEHUE","080508" => "TUPAC AMARU"],
        "0806" => ["080601" => "SICUANI","080602" => "CHECACUPE","080603" => "COMBAPATA","080604" => "MARANGANI","080605" => "PITUMARCA","080606" => "SAN PABLO","080607" => "SAN PEDRO","080608" => "TINTA"],
        "0807" => ["080701" => "SANTO TOMAS","080702" => "CAPACMARCA","080703" => "CHAMACA","080704" => "COLQUEMARCA","080705" => "LIVITACA","080706" => "LLUSCO","080707" => "QUIÑOTA","080708" => "VELILLE"],
        "0808" => ["080801" => "ESPINAR","080802" => "CONDOROMA","080803" => "COPORAQUE","080804" => "OCORURO","080805" => "PALLPATA","080806" => "PICHIGUA","080807" => "SUYCKUTAMBO","080808" => "ALTO PICHIGUA"],
        "0809" => ["080901" => "SANTA ANA","080902" => "ECHARATE","080903" => "HUAYOPATA","080904" => "MARANURA","080905" => "OCOBAMBA","080906" => "QUELLOUNO","080907" => "KIMBIRI","080908" => "SANTA TERESA","080909" => "VILCABAMBA","080910" => "PICHARI","080911" => "INKAWASI","080912" => "VILLA VIRGEN","080913" => "VILLA KINTIARINA","080914" => "MEGANTONI"],
        "0810" => ["081001" => "PARURO","081002" => "ACCHA","081003" => "CCAPI","081004" => "COLCHA","081005" => "HUANOQUITE","081006" => "OMACHA","081007" => "PACCARITAMBO","081008" => "PILLPINTO","081009" => "YAURISQUE"],
        "0811" => ["081101" => "PAUCARTAMBO","081102" => "CAICAY","081103" => "CHALLABAMBA","081104" => "COLQUEPATA","081105" => "HUANCARANI","081106" => "KOSÑIPATA"],
        "0812" => ["081201" => "URCOS","081202" => "ANDAHUAYLILLAS","081203" => "CAMANTI","081204" => "CCARHUAYO","081205" => "CCATCA","081206" => "CUSIPATA","081207" => "HUARO","081208" => "LUCRE","081209" => "MARCAPATA","081210" => "OCONGATE","081211" => "OROPESA","081212" => "QUIQUIJANA"],
        "0813" => ["081301" => "URUBAMBA","081302" => "CHINCHERO","081303" => "HUAYLLABAMBA","081304" => "MACHUPICCHU","081305" => "MARAS","081306" => "OLLANTAYTAMBO","081307" => "YUCAY"],
        "0901" => ["090101" => "HUANCAVELICA","090102" => "ACOBAMBILLA","090103" => "ACORIA","090104" => "CONAYCA","090105" => "CUENCA","090106" => "HUACHOCOLPA","090107" => "HUAYLLAHUARA","090108" => "IZCUCHACA","090109" => "LARIA","090110" => "MANTA","090111" => "MARISCAL CACERES","090112" => "MOYA","090113" => "NUEVO OCCORO","090114" => "PALCA","090115" => "PILCHACA","090116" => "VILCA","090117" => "YAULI","090118" => "ASCENSION","090119" => "HUANDO"],
        "0902" => ["090201" => "ACOBAMBA","090202" => "ANDABAMBA","090203" => "ANTA","090204" => "CAJA","090205" => "MARCAS","090206" => "PAUCARA","090207" => "POMACOCHA","090208" => "ROSARIO"],
        "0903" => ["090301" => "LIRCAY","090302" => "ANCHONGA","090303" => "CALLANMARCA","090304" => "CCOCHACCASA","090305" => "CHINCHO","090306" => "CONGALLA","090307" => "HUANCA-HUANCA","090308" => "HUAYLLAY GRANDE","090309" => "JULCAMARCA","090310" => "SAN ANTONIO DE ANTAPARCO","090311" => "SANTO TOMAS DE PATA","090312" => "SECCLLA"],
        "0904" => ["090401" => "CASTROVIRREYNA","090402" => "ARMA","090403" => "AURAHUA","090404" => "CAPILLAS","090405" => "CHUPAMARCA","090406" => "COCAS","090407" => "HUACHOS","090408" => "HUAMATAMBO","090409" => "MOLLEPAMPA","090410" => "SAN JUAN","090411" => "SANTA ANA","090412" => "TANTARA","090413" => "TICRAPO"],
        "0905" => ["090501" => "CHURCAMPA","090502" => "ANCO","090503" => "CHINCHIHUASI","090504" => "EL CARMEN","090505" => "LA MERCED","090506" => "LOCROJA","090507" => "PAUCARBAMBA","090508" => "SAN MIGUEL DE MAYOCC","090509" => "SAN PEDRO DE CORIS","090510" => "PACHAMARCA","090511" => "COSME"],
        "0906" => ["090601" => "HUAYTARA","090602" => "AYAVI","090603" => "CORDOVA","090604" => "HUAYACUNDO ARMA","090605" => "LARAMARCA","090606" => "OCOYO","090607" => "PILPICHACA","090608" => "QUERCO","090609" => "QUITO-ARMA","090610" => "SAN ANTONIO DE CUSICANCHA","090611" => "SAN FRANCISCO DE SANGAYAICO","090612" => "SAN ISIDRO","090613" => "SANTIAGO DE CHOCORVOS","090614" => "SANTIAGO DE QUIRAHUARA","090615" => "SANTO DOMINGO DE CAPILLAS","090616" => "TAMBO"],
        "0907" => ["090701" => "PAMPAS","090702" => "ACOSTAMBO","090703" => "ACRAQUIA","090704" => "AHUAYCHA","090705" => "COLCABAMBA","090706" => "DANIEL HERNANDEZ","090707" => "HUACHOCOLPA","090709" => "HUARIBAMBA","090710" => "ÑAHUIMPUQUIO","090711" => "PAZOS","090713" => "QUISHUAR","090714" => "SALCABAMBA","090715" => "SALCAHUASI","090716" => "SAN MARCOS DE ROCCHAC","090717" => "SURCUBAMBA","090718" => "TINTAY PUNCU","090719" => "QUICHUAS","090720" => "ANDAYMARCA","090721" => "ROBLE","090722" => "PICHOS","090723" => "SANTIAGO DE TUCUMA"],
        "1001" => ["100101" => "HUANUCO","100102" => "AMARILIS","100103" => "CHINCHAO","100104" => "CHURUBAMBA","100105" => "MARGOS","100106" => "QUISQUI (KICHKI)","100107" => "SAN FRANCISCO DE CAYRAN","100108" => "SAN PEDRO DE CHAULAN","100109" => "SANTA MARIA DEL VALLE","100110" => "YARUMAYO","100111" => "PILLCO MARCA","100112" => "YACUS","100113" => "SAN PABLO DE PILLAO"],
        "1002" => ["100201" => "AMBO","100202" => "CAYNA","100203" => "COLPAS","100204" => "CONCHAMARCA","100205" => "HUACAR","100206" => "SAN FRANCISCO","100207" => "SAN RAFAEL","100208" => "TOMAY KICHWA"],
        "1003" => ["100301" => "LA UNION","100307" => "CHUQUIS","100311" => "MARIAS","100313" => "PACHAS","100316" => "QUIVILLA","100317" => "RIPAN","100321" => "SHUNQUI","100322" => "SILLAPATA","100323" => "YANAS"],
        "1004" => ["100401" => "HUACAYBAMBA","100402" => "CANCHABAMBA","100403" => "COCHABAMBA","100404" => "PINRA"],
        "1005" => ["100501" => "LLATA","100502" => "ARANCAY","100503" => "CHAVIN DE PARIARCA","100504" => "JACAS GRANDE","100505" => "JIRCAN","100506" => "MIRAFLORES","100507" => "MONZON","100508" => "PUNCHAO","100509" => "PUÑOS","100510" => "SINGA","100511" => "TANTAMAYO"],
        "1006" => ["100601" => "RUPA-RUPA","100602" => "DANIEL ALOMIA ROBLES","100603" => "HERMILIO VALDIZAN","100604" => "JOSE CRESPO Y CASTILLO","100605" => "LUYANDO","100606" => "MARIANO DAMASO BERAUN","100607" => "PUCAYACU","100608" => "CASTILLO GRANDE","100609" => "PUEBLO NUEVO","100610" => "SANTO DOMINGO DE ANDIA"],
        "1007" => ["100701" => "HUACRACHUCO","100702" => "CHOLON","100703" => "SAN BUENAVENTURA","100704" => "LA MORADA","100705" => "SANTA ROSA DE ALTO YANAJANCA"],
        "1008" => ["100801" => "PANAO","100802" => "CHAGLLA","100803" => "MOLINO","100804" => "UMARI"],
        "1009" => ["100901" => "PUERTO INCA","100902" => "CODO DEL POZUZO","100903" => "HONORIA","100904" => "TOURNAVISTA","100905" => "YUYAPICHIS"],
        "1010" => ["101001" => "JESUS","101002" => "BAÑOS","101003" => "JIVIA","101004" => "QUEROPALCA","101005" => "RONDOS","101006" => "SAN FRANCISCO DE ASIS","101007" => "SAN MIGUEL DE CAURI"],
        "1011" => ["101101" => "CHAVINILLO","101102" => "CAHUAC","101103" => "CHACABAMBA","101104" => "APARICIO POMARES","101105" => "JACAS CHICO","101106" => "OBAS","101107" => "PAMPAMARCA","101108" => "CHORAS"],
        "1101" => ["110101" => "ICA","110102" => "LA TINGUIÑA","110103" => "LOS AQUIJES","110104" => "OCUCAJE","110105" => "PACHACUTEC","110106" => "PARCONA","110107" => "PUEBLO NUEVO","110108" => "SALAS","110109" => "SAN JOSE DE LOS MOLINOS","110110" => "SAN JUAN BAUTISTA","110111" => "SANTIAGO","110112" => "SUBTANJALLA","110113" => "TATE","110114" => "YAUCA DEL ROSARIO"],
        "1102" => ["110201" => "CHINCHA ALTA","110202" => "ALTO LARAN","110203" => "CHAVIN","110204" => "CHINCHA BAJA","110205" => "EL CARMEN","110206" => "GROCIO PRADO","110207" => "PUEBLO NUEVO","110208" => "SAN JUAN DE YANAC","110209" => "SAN PEDRO DE HUACARPANA","110210" => "SUNAMPE","110211" => "TAMBO DE MORA"],
        "1103" => ["110301" => "NASCA","110302" => "CHANGUILLO","110303" => "EL INGENIO","110304" => "MARCONA","110305" => "VISTA ALEGRE"],
        "1104" => ["110401" => "PALPA","110402" => "LLIPATA","110403" => "RIO GRANDE","110404" => "SANTA CRUZ","110405" => "TIBILLO"],
        "1105" => ["110501" => "PISCO","110502" => "HUANCANO","110503" => "HUMAY","110504" => "INDEPENDENCIA","110505" => "PARACAS","110506" => "SAN ANDRES","110507" => "SAN CLEMENTE","110508" => "TUPAC AMARU INCA"],
        "1201" => ["120101" => "HUANCAYO","120104" => "CARHUACALLANGA","120105" => "CHACAPAMPA","120106" => "CHICCHE","120107" => "CHILCA","120108" => "CHONGOS ALTO","120111" => "CHUPURO","120112" => "COLCA","120113" => "CULLHUAS","120114" => "EL TAMBO","120116" => "HUACRAPUQUIO","120117" => "HUALHUAS","120119" => "HUANCAN","120120" => "HUASICANCHA","120121" => "HUAYUCACHI","120122" => "INGENIO","120124" => "PARIAHUANCA","120125" => "PILCOMAYO","120126" => "PUCARA","120127" => "QUICHUAY","120128" => "QUILCAS","120129" => "SAN AGUSTIN","120130" => "SAN JERONIMO DE TUNAN","120132" => "SAÑO","120133" => "SAPALLANGA","120134" => "SICAYA","120135" => "SANTO DOMINGO DE ACOBAMBA","120136" => "VIQUES"],
        "1202" => ["120201" => "CONCEPCION","120202" => "ACO","120203" => "ANDAMARCA","120204" => "CHAMBARA","120205" => "COCHAS","120206" => "COMAS","120207" => "HEROINAS TOLEDO","120208" => "MANZANARES","120209" => "MARISCAL CASTILLA","120210" => "MATAHUASI","120211" => "MITO","120212" => "NUEVE DE JULIO","120213" => "ORCOTUNA","120214" => "SAN JOSE DE QUERO","120215" => "SANTA ROSA DE OCOPA"],
        "1203" => ["120301" => "CHANCHAMAYO","120302" => "PERENE","120303" => "PICHANAQUI","120304" => "SAN LUIS DE SHUARO","120305" => "SAN RAMON","120306" => "VITOC"],
        "1204" => ["120401" => "JAUJA","120402" => "ACOLLA","120403" => "APATA","120404" => "ATAURA","120405" => "CANCHAYLLO","120406" => "CURICACA","120407" => "EL MANTARO","120408" => "HUAMALI","120409" => "HUARIPAMPA","120410" => "HUERTAS","120411" => "JANJAILLO","120412" => "JULCAN","120413" => "LEONOR ORDOÑEZ","120414" => "LLOCLLAPAMPA","120415" => "MARCO","120416" => "MASMA","120417" => "MASMA CHICCHE","120418" => "MOLINOS","120419" => "MONOBAMBA","120420" => "MUQUI","120421" => "MUQUIYAUYO","120422" => "PACA","120423" => "PACCHA","120424" => "PANCAN","120425" => "PARCO","120426" => "POMACANCHA","120427" => "RICRAN","120428" => "SAN LORENZO","120429" => "SAN PEDRO DE CHUNAN","120430" => "SAUSA","120431" => "SINCOS","120432" => "TUNAN MARCA","120433" => "YAULI","120434" => "YAUYOS"],
        "1205" => ["120501" => "JUNIN","120502" => "CARHUAMAYO","120503" => "ONDORES","120504" => "ULCUMAYO"],
        "1206" => ["120601" => "SATIPO","120602" => "COVIRIALI","120603" => "LLAYLLA","120604" => "MAZAMARI","120605" => "PAMPA HERMOSA","120606" => "PANGOA","120607" => "RIO NEGRO","120608" => "RIO TAMBO","120609" => "VIZCATAN DEL ENE"],
        "1207" => ["120701" => "TARMA","120702" => "ACOBAMBA","120703" => "HUARICOLCA","120704" => "HUASAHUASI","120705" => "LA UNION","120706" => "PALCA","120707" => "PALCAMAYO","120708" => "SAN PEDRO DE CAJAS","120709" => "TAPO"],
        "1208" => ["120801" => "LA OROYA","120802" => "CHACAPALPA","120803" => "HUAY-HUAY","120804" => "MARCAPOMACOCHA","120805" => "MOROCOCHA","120806" => "PACCHA","120807" => "SANTA BARBARA DE CARHUACAYAN","120808" => "SANTA ROSA DE SACCO","120809" => "SUITUCANCHA","120810" => "YAULI"],
        "1209" => ["120901" => "CHUPACA","120902" => "AHUAC","120903" => "CHONGOS BAJO","120904" => "HUACHAC","120905" => "HUAMANCACA CHICO","120906" => "SAN JUAN DE ISCOS","120907" => "SAN JUAN DE JARPA","120908" => "TRES DE DICIEMBRE","120909" => "YANACANCHA"],
        "1301" => ["130101" => "TRUJILLO","130102" => "EL PORVENIR","130103" => "FLORENCIA DE MORA","130104" => "HUANCHACO","130105" => "LA ESPERANZA","130106" => "LAREDO","130107" => "MOCHE","130108" => "POROTO","130109" => "SALAVERRY","130110" => "SIMBAL","130111" => "VICTOR LARCO HERRERA"],
        "1302" => ["130201" => "ASCOPE","130202" => "CHICAMA","130203" => "CHOCOPE","130204" => "MAGDALENA DE CAO","130205" => "PAIJAN","130206" => "RAZURI","130207" => "SANTIAGO DE CAO","130208" => "CASA GRANDE"],
        "1303" => ["130301" => "BOLIVAR","130302" => "BAMBAMARCA","130303" => "CONDORMARCA","130304" => "LONGOTEA","130305" => "UCHUMARCA","130306" => "UCUNCHA"],
        "1304" => ["130401" => "CHEPEN","130402" => "PACANGA","130403" => "PUEBLO NUEVO"],
        "1305" => ["130501" => "JULCAN","130502" => "CALAMARCA","130503" => "CARABAMBA","130504" => "HUASO"],
        "1306" => ["130601" => "OTUZCO","130602" => "AGALLPAMPA","130604" => "CHARAT","130605" => "HUARANCHAL","130606" => "LA CUESTA","130608" => "MACHE","130610" => "PARANDAY","130611" => "SALPO","130613" => "SINSICAP","130614" => "USQUIL"],
        "1307" => ["130701" => "SAN PEDRO DE LLOC","130702" => "GUADALUPE","130703" => "JEQUETEPEQUE","130704" => "PACASMAYO","130705" => "SAN JOSE"],
        "1308" => ["130801" => "TAYABAMBA","130802" => "BULDIBUYO","130803" => "CHILLIA","130804" => "HUANCASPATA","130805" => "HUAYLILLAS","130806" => "HUAYO","130807" => "ONGON","130808" => "PARCOY","130809" => "PATAZ","130810" => "PIAS","130811" => "SANTIAGO DE CHALLAS","130812" => "TAURIJA","130813" => "URPAY"],
        "1309" => ["130901" => "HUAMACHUCO","130902" => "CHUGAY","130903" => "COCHORCO","130904" => "CURGOS","130905" => "MARCABAL","130906" => "SANAGORAN","130907" => "SARIN","130908" => "SARTIMBAMBA"],
        "1310" => ["131001" => "SANTIAGO DE CHUCO","131002" => "ANGASMARCA","131003" => "CACHICADAN","131004" => "MOLLEBAMBA","131005" => "MOLLEPATA","131006" => "QUIRUVILCA","131007" => "SANTA CRUZ DE CHUCA","131008" => "SITABAMBA"],
        "1311" => ["131101" => "CASCAS","131102" => "LUCMA","131103" => "MARMOT","131104" => "SAYAPULLO"],
        "1312" => ["131201" => "VIRU","131202" => "CHAO","131203" => "GUADALUPITO"],
        "1401" => ["140101" => "CHICLAYO","140102" => "CHONGOYAPE","140103" => "ETEN","140104" => "ETEN PUERTO","140105" => "JOSE LEONARDO ORTIZ","140106" => "LA VICTORIA","140107" => "LAGUNAS","140108" => "MONSEFU","140109" => "NUEVA ARICA","140110" => "OYOTUN","140111" => "PICSI","140112" => "PIMENTEL","140113" => "REQUE","140114" => "SANTA ROSA","140115" => "SAÑA","140116" => "CAYALTI","140117" => "PATAPO","140118" => "POMALCA","140119" => "PUCALA","140120" => "TUMAN"],
        "1402" => ["140201" => "FERREÑAFE","140202" => "CAÑARIS","140203" => "INCAHUASI","140204" => "MANUEL ANTONIO MESONES MURO","140205" => "PITIPO","140206" => "PUEBLO NUEVO"],
        "1403" => ["140301" => "LAMBAYEQUE","140302" => "CHOCHOPE","140303" => "ILLIMO","140304" => "JAYANCA","140305" => "MOCHUMI","140306" => "MORROPE","140307" => "MOTUPE","140308" => "OLMOS","140309" => "PACORA","140310" => "SALAS","140311" => "SAN JOSE","140312" => "TUCUME"],
        "1501" => ["150101" => "LIMA","150102" => "ANCON","150103" => "ATE","150104" => "BARRANCO","150105" => "BREÑA","150106" => "CARABAYLLO","150107" => "CHACLACAYO","150108" => "CHORRILLOS","150109" => "CIENEGUILLA","150110" => "COMAS","150111" => "EL AGUSTINO","150112" => "INDEPENDENCIA","150113" => "JESUS MARIA","150114" => "LA MOLINA","150115" => "LA VICTORIA","150116" => "LINCE","150117" => "LOS OLIVOS","150118" => "LURIGANCHO","150119" => "LURIN","150120" => "MAGDALENA DEL MAR","150121" => "PUEBLO LIBRE","150122" => "MIRAFLORES","150123" => "PACHACAMAC","150124" => "PUCUSANA","150125" => "PUENTE PIEDRA","150126" => "PUNTA HERMOSA","150127" => "PUNTA NEGRA","150128" => "RIMAC","150129" => "SAN BARTOLO","150130" => "SAN BORJA","150131" => "SAN ISIDRO","150132" => "SAN JUAN DE LURIGANCHO","150133" => "SAN JUAN DE MIRAFLORES","150134" => "SAN LUIS","150135" => "SAN MARTIN DE PORRES","150136" => "SAN MIGUEL","150137" => "SANTA ANITA","150138" => "SANTA MARIA DEL MAR","150139" => "SANTA ROSA","150140" => "SANTIAGO DE SURCO","150141" => "SURQUILLO","150142" => "VILLA EL SALVADOR","150143" => "VILLA MARIA DEL TRIUNFO"],
        "1502" => ["150201" => "BARRANCA","150202" => "PARAMONGA","150203" => "PATIVILCA","150204" => "SUPE","150205" => "SUPE PUERTO"],
        "1503" => ["150301" => "CAJATAMBO","150302" => "COPA","150303" => "GORGOR","150304" => "HUANCAPON","150305" => "MANAS"],
        "1504" => ["150401" => "CANTA","150402" => "ARAHUAY","150403" => "HUAMANTANGA","150404" => "HUAROS","150405" => "LACHAQUI","150406" => "SAN BUENAVENTURA","150407" => "SANTA ROSA DE QUIVES"],
        "1505" => ["150501" => "SAN VICENTE DE CAÑETE","150502" => "ASIA","150503" => "CALANGO","150504" => "CERRO AZUL","150505" => "CHILCA","150506" => "COAYLLO","150507" => "IMPERIAL","150508" => "LUNAHUANA","150509" => "MALA","150510" => "NUEVO IMPERIAL","150511" => "PACARAN","150512" => "QUILMANA","150513" => "SAN ANTONIO","150514" => "SAN LUIS","150515" => "SANTA CRUZ DE FLORES","150516" => "ZUÑIGA"],
        "1506" => ["150601" => "HUARAL","150602" => "ATAVILLOS ALTO","150603" => "ATAVILLOS BAJO","150604" => "AUCALLAMA","150605" => "CHANCAY","150606" => "IHUARI","150607" => "LAMPIAN","150608" => "PACARAOS","150609" => "SAN MIGUEL DE ACOS","150610" => "SANTA CRUZ DE ANDAMARCA","150611" => "SUMBILCA","150612" => "VEINTISIETE DE NOVIEMBRE"],
        "1507" => ["150701" => "MATUCANA","150702" => "ANTIOQUIA","150703" => "CALLAHUANCA","150704" => "CARAMPOMA","150705" => "CHICLA","150706" => "CUENCA","150707" => "HUACHUPAMPA","150708" => "HUANZA","150709" => "HUAROCHIRI","150710" => "LAHUAYTAMBO","150711" => "LANGA","150712" => "SAN PEDRO DE LARAOS","150713" => "MARIATANA","150714" => "RICARDO PALMA","150715" => "SAN ANDRES DE TUPICOCHA","150716" => "SAN ANTONIO","150717" => "SAN BARTOLOME","150718" => "SAN DAMIAN","150719" => "SAN JUAN DE IRIS","150720" => "SAN JUAN DE TANTARANCHE","150721" => "SAN LORENZO DE QUINTI","150722" => "SAN MATEO","150723" => "SAN MATEO DE OTAO","150724" => "SAN PEDRO DE CASTA","150725" => "SAN PEDRO DE HUANCAYRE","150726" => "SANGALLAYA","150727" => "SANTA CRUZ DE COCACHACRA","150728" => "SANTA EULALIA","150729" => "SANTIAGO DE ANCHUCAYA","150730" => "SANTIAGO DE TUNA","150731" => "SANTO DOMINGO DE LOS OLLEROS","150732" => "SURCO"],
        "1508" => ["150801" => "HUACHO","150802" => "AMBAR","150803" => "CALETA DE CARQUIN","150804" => "CHECRAS","150805" => "HUALMAY","150806" => "HUAURA","150807" => "LEONCIO PRADO","150808" => "PACCHO","150809" => "SANTA LEONOR","150810" => "SANTA MARIA","150811" => "SAYAN","150812" => "VEGUETA"],
        "1509" => ["150901" => "OYON","150902" => "ANDAJES","150903" => "CAUJUL","150904" => "COCHAMARCA","150905" => "NAVAN","150906" => "PACHANGARA"],
        "1510" => ["151001" => "YAUYOS","151002" => "ALIS","151003" => "ALLAUCA","151004" => "AYAVIRI","151005" => "AZANGARO","151006" => "CACRA","151007" => "CARANIA","151008" => "CATAHUASI","151009" => "CHOCOS","151010" => "COCHAS","151011" => "COLONIA","151012" => "HONGOS","151013" => "HUAMPARA","151014" => "HUANCAYA","151015" => "HUANGASCAR","151016" => "HUANTAN","151017" => "HUAÑEC","151018" => "LARAOS","151019" => "LINCHA","151020" => "MADEAN","151021" => "MIRAFLORES","151022" => "OMAS","151023" => "PUTINZA","151024" => "QUINCHES","151025" => "QUINOCAY","151026" => "SAN JOAQUIN","151027" => "SAN PEDRO DE PILAS","151028" => "TANTA","151029" => "TAURIPAMPA","151030" => "TOMAS","151031" => "TUPE","151032" => "VIÑAC","151033" => "VITIS"],
        "1601" => ["160101" => "IQUITOS","160102" => "ALTO NANAY","160103" => "FERNANDO LORES","160104" => "INDIANA","160105" => "LAS AMAZONAS","160106" => "MAZAN","160107" => "NAPO","160108" => "PUNCHANA","160110" => "TORRES CAUSANA","160112" => "BELEN","160113" => "SAN JUAN BAUTISTA"],
        "1602" => ["160201" => "YURIMAGUAS","160202" => "BALSAPUERTO","160205" => "JEBEROS","160206" => "LAGUNAS","160210" => "SANTA CRUZ","160211" => "TENIENTE CESAR LOPEZ ROJAS"],
        "1603" => ["160301" => "NAUTA","160302" => "PARINARI","160303" => "TIGRE","160304" => "TROMPETEROS","160305" => "URARINAS"],
        "1604" => ["160401" => "RAMON CASTILLA","160402" => "PEBAS","160403" => "YAVARI","160404" => "SAN PABLO"],
        "1605" => ["160501" => "REQUENA","160502" => "ALTO TAPICHE","160503" => "CAPELO","160504" => "EMILIO SAN MARTIN","160505" => "MAQUIA","160506" => "PUINAHUA","160507" => "SAQUENA","160508" => "SOPLIN","160509" => "TAPICHE","160510" => "JENARO HERRERA","160511" => "YAQUERANA"],
        "1606" => ["160601" => "CONTAMANA","160602" => "INAHUAYA","160603" => "PADRE MARQUEZ","160604" => "PAMPA HERMOSA","160605" => "SARAYACU","160606" => "VARGAS GUERRA"],
        "1607" => ["160701" => "BARRANCA","160702" => "CAHUAPANAS","160703" => "MANSERICHE","160704" => "MORONA","160705" => "PASTAZA","160706" => "ANDOAS"],
        "1608" => ["160801" => "PUTUMAYO","160802" => "ROSA PANDURO","160803" => "TENIENTE MANUEL CLAVERO","160804" => "YAGUAS"],
        "1701" => ["170101" => "TAMBOPATA","170102" => "INAMBARI","170103" => "LAS PIEDRAS","170104" => "LABERINTO"],
        "1702" => ["170201" => "MANU","170202" => "FITZCARRALD","170203" => "MADRE DE DIOS","170204" => "HUEPETUHE"],
        "1703" => ["170301" => "IÑAPARI","170302" => "IBERIA","170303" => "TAHUAMANU"],
        "1801" => ["180101" => "MOQUEGUA","180102" => "CARUMAS","180103" => "CUCHUMBAYA","180104" => "SAMEGUA","180105" => "SAN CRISTOBAL","180106" => "TORATA"],
        "1802" => ["180201" => "OMATE","180202" => "CHOJATA","180203" => "COALAQUE","180204" => "ICHUÑA","180205" => "LA CAPILLA","180206" => "LLOQUE","180207" => "MATALAQUE","180208" => "PUQUINA","180209" => "QUINISTAQUILLAS","180210" => "UBINAS","180211" => "YUNGA"],
        "1803" => ["180301" => "ILO","180302" => "EL ALGARROBAL","180303" => "PACOCHA"],
        "1901" => ["190101" => "CHAUPIMARCA","190102" => "HUACHON","190103" => "HUARIACA","190104" => "HUAYLLAY","190105" => "NINACACA","190106" => "PALLANCHACRA","190107" => "PAUCARTAMBO","190108" => "SAN FRANCISCO DE ASIS DE YARUSYACAN","190109" => "SIMON BOLIVAR","190110" => "TICLACAYAN","190111" => "TINYAHUARCO","190112" => "VICCO","190113" => "YANACANCHA"],
        "1902" => ["190201" => "YANAHUANCA","190202" => "CHACAYAN","190203" => "GOYLLARISQUIZGA","190204" => "PAUCAR","190205" => "SAN PEDRO DE PILLAO","190206" => "SANTA ANA DE TUSI","190207" => "TAPUC","190208" => "VILCABAMBA"],
        "1903" => ["190301" => "OXAPAMPA","190302" => "CHONTABAMBA","190303" => "HUANCABAMBA","190304" => "PALCAZU","190305" => "POZUZO","190306" => "PUERTO BERMUDEZ","190307" => "VILLA RICA","190308" => "CONSTITUCION"],
        "2001" => ["200101" => "PIURA","200104" => "CASTILLA","200105" => "CATACAOS","200107" => "CURA MORI","200108" => "EL TALLAN","200109" => "LA ARENA","200110" => "LA UNION","200111" => "LAS LOMAS","200114" => "TAMBO GRANDE","200115" => "VEINTISEIS DE OCTUBRE"],
        "2002" => ["200201" => "AYABACA","200202" => "FRIAS","200203" => "JILILI","200204" => "LAGUNAS","200205" => "MONTERO","200206" => "PACAIPAMPA","200207" => "PAIMAS","200208" => "SAPILLICA","200209" => "SICCHEZ","200210" => "SUYO"],
        "2003" => ["200301" => "HUANCABAMBA","200302" => "CANCHAQUE","200303" => "EL CARMEN DE LA FRONTERA","200304" => "HUARMACA","200305" => "LALAQUIZ","200306" => "SAN MIGUEL DE EL FAIQUE","200307" => "SONDOR","200308" => "SONDORILLO"],
        "2004" => ["200401" => "CHULUCANAS","200402" => "BUENOS AIRES","200403" => "CHALACO","200404" => "LA MATANZA","200405" => "MORROPON","200406" => "SALITRAL","200407" => "SAN JUAN DE BIGOTE","200408" => "SANTA CATALINA DE MOSSA","200409" => "SANTO DOMINGO","200410" => "YAMANGO"],
        "2005" => ["200501" => "PAITA","200502" => "AMOTAPE","200503" => "ARENAL","200504" => "COLAN","200505" => "LA HUACA","200506" => "TAMARINDO","200507" => "VICHAYAL"],
        "2006" => ["200601" => "SULLANA","200602" => "BELLAVISTA","200603" => "IGNACIO ESCUDERO","200604" => "LANCONES","200605" => "MARCAVELICA","200606" => "MIGUEL CHECA","200607" => "QUERECOTILLO","200608" => "SALITRAL"],
        "2007" => ["200701" => "PARIÑAS","200702" => "EL ALTO","200703" => "LA BREA","200704" => "LOBITOS","200705" => "LOS ORGANOS","200706" => "MANCORA"],
        "2008" => ["200801" => "SECHURA","200802" => "BELLAVISTA DE LA UNION","200803" => "BERNAL","200804" => "CRISTO NOS VALGA","200805" => "VICE","200806" => "RINCONADA LLICUAR"],
        "2101" => ["210101" => "PUNO","210102" => "ACORA","210103" => "AMANTANI","210104" => "ATUNCOLLA","210105" => "CAPACHICA","210106" => "CHUCUITO","210107" => "COATA","210108" => "HUATA","210109" => "MAÑAZO","210110" => "PAUCARCOLLA","210111" => "PICHACANI","210112" => "PLATERIA","210113" => "SAN ANTONIO","210114" => "TIQUILLACA","210115" => "VILQUE"],
        "2102" => ["210201" => "AZANGARO","210202" => "ACHAYA","210203" => "ARAPA","210204" => "ASILLO","210205" => "CAMINACA","210206" => "CHUPA","210207" => "JOSE DOMINGO CHOQUEHUANCA","210208" => "MUÑANI","210209" => "POTONI","210210" => "SAMAN","210211" => "SAN ANTON","210212" => "SAN JOSE","210213" => "SAN JUAN DE SALINAS","210214" => "SANTIAGO DE PUPUJA","210215" => "TIRAPATA"],
        "2103" => ["210301" => "MACUSANI","210302" => "AJOYANI","210303" => "AYAPATA","210304" => "COASA","210305" => "CORANI","210306" => "CRUCERO","210307" => "ITUATA","210308" => "OLLACHEA","210309" => "SAN GABAN","210310" => "USICAYOS"],
        "2104" => ["210401" => "JULI","210402" => "DESAGUADERO","210403" => "HUACULLANI","210404" => "KELLUYO","210405" => "PISACOMA","210406" => "POMATA","210407" => "ZEPITA"],
        "2105" => ["210501" => "ILAVE","210502" => "CAPAZO","210503" => "PILCUYO","210504" => "SANTA ROSA","210505" => "CONDURIRI"],
        "2106" => ["210601" => "HUANCANE","210602" => "COJATA","210603" => "HUATASANI","210604" => "INCHUPALLA","210605" => "PUSI","210606" => "ROSASPATA","210607" => "TARACO","210608" => "VILQUE CHICO"],
        "2107" => ["210701" => "LAMPA","210702" => "CABANILLA","210703" => "CALAPUJA","210704" => "NICASIO","210705" => "OCUVIRI","210706" => "PALCA","210707" => "PARATIA","210708" => "PUCARA","210709" => "SANTA LUCIA","210710" => "VILAVILA"],
        "2108" => ["210801" => "AYAVIRI","210802" => "ANTAUTA","210803" => "CUPI","210804" => "LLALLI","210805" => "MACARI","210806" => "NUÑOA","210807" => "ORURILLO","210808" => "SANTA ROSA","210809" => "UMACHIRI"],
        "2109" => ["210901" => "MOHO","210902" => "CONIMA","210903" => "HUAYRAPATA","210904" => "TILALI"],
        "2110" => ["211001" => "PUTINA","211002" => "ANANEA","211003" => "PEDRO VILCA APAZA","211004" => "QUILCAPUNCU","211005" => "SINA"],
        "2111" => ["211101" => "JULIACA","211102" => "CABANA","211103" => "CABANILLAS","211104" => "CARACOTO","211105" => "SAN MIGUEL"],
        "2112" => ["211201" => "SANDIA","211202" => "CUYOCUYO","211203" => "LIMBANI","211204" => "PATAMBUCO","211205" => "PHARA","211206" => "QUIACA","211207" => "SAN JUAN DEL ORO","211208" => "YANAHUAYA","211209" => "ALTO INAMBARI","211210" => "SAN PEDRO DE PUTINA PUNCO"],
        "2113" => ["211301" => "YUNGUYO","211302" => "ANAPIA","211303" => "COPANI","211304" => "CUTURAPI","211305" => "OLLARAYA","211306" => "TINICACHI","211307" => "UNICACHI"],
        "2201" => ["220101" => "MOYOBAMBA","220102" => "CALZADA","220103" => "HABANA","220104" => "JEPELACIO","220105" => "SORITOR","220106" => "YANTALO"],
        "2202" => ["220201" => "BELLAVISTA","220202" => "ALTO BIAVO","220203" => "BAJO BIAVO","220204" => "HUALLAGA","220205" => "SAN PABLO","220206" => "SAN RAFAEL"],
        "2203" => ["220301" => "SAN JOSE DE SISA","220302" => "AGUA BLANCA","220303" => "SAN MARTIN","220304" => "SANTA ROSA","220305" => "SHATOJA"],
        "2204" => ["220401" => "SAPOSOA","220402" => "ALTO SAPOSOA","220403" => "EL ESLABON","220404" => "PISCOYACU","220405" => "SACANCHE","220406" => "TINGO DE SAPOSOA"],
        "2205" => ["220501" => "LAMAS","220502" => "ALONSO DE ALVARADO","220503" => "BARRANQUITA","220504" => "CAYNARACHI","220505" => "CUÑUMBUQUI","220506" => "PINTO RECODO","220507" => "RUMISAPA","220508" => "SAN ROQUE DE CUMBAZA","220509" => "SHANAO","220510" => "TABALOSOS","220511" => "ZAPATERO"],
        "2206" => ["220601" => "JUANJUI","220602" => "CAMPANILLA","220603" => "HUICUNGO","220604" => "PACHIZA","220605" => "PAJARILLO"],
        "2207" => ["220701" => "PICOTA","220702" => "BUENOS AIRES","220703" => "CASPISAPA","220704" => "PILLUANA","220705" => "PUCACACA","220706" => "SAN CRISTOBAL","220707" => "SAN HILARION","220708" => "SHAMBOYACU","220709" => "TINGO DE PONASA","220710" => "TRES UNIDOS"],
        "2208" => ["220801" => "RIOJA","220802" => "AWAJUN","220803" => "ELIAS SOPLIN VARGAS","220804" => "NUEVA CAJAMARCA","220805" => "PARDO MIGUEL","220806" => "POSIC","220807" => "SAN FERNANDO","220808" => "YORONGOS","220809" => "YURACYACU"],
        "2209" => ["220901" => "TARAPOTO","220902" => "ALBERTO LEVEAU","220903" => "CACATACHI","220904" => "CHAZUTA","220905" => "CHIPURANA","220906" => "EL PORVENIR","220907" => "HUIMBAYOC","220908" => "JUAN GUERRA","220909" => "LA BANDA DE SHILCAYO","220910" => "MORALES","220911" => "PAPAPLAYA","220912" => "SAN ANTONIO","220913" => "SAUCE","220914" => "SHAPAJA"],
        "2210" => ["221001" => "TOCACHE","221002" => "NUEVO PROGRESO","221003" => "POLVORA","221004" => "SHUNTE","221005" => "UCHIZA"],
        "2301" => ["230101" => "TACNA","230102" => "ALTO DE LA ALIANZA","230103" => "CALANA","230104" => "CIUDAD NUEVA","230105" => "INCLAN","230106" => "PACHIA","230107" => "PALCA","230108" => "POCOLLAY","230109" => "SAMA","230110" => "CORONEL GREGORIO ALBARRACIN LANCHIPA","230111" => "LA YARADA LOS PALOS"],
        "2302" => ["230201" => "CANDARAVE","230202" => "CAIRANI","230203" => "CAMILACA","230204" => "CURIBAYA","230205" => "HUANUARA","230206" => "QUILAHUANI"],
        "2303" => ["230301" => "LOCUMBA","230302" => "ILABAYA","230303" => "ITE"],
        "2304" => ["230401" => "TARATA","230402" => "HEROES ALBARRACIN","230403" => "ESTIQUE","230404" => "ESTIQUE-PAMPA","230405" => "SITAJARA","230406" => "SUSAPAYA","230407" => "TARUCACHI","230408" => "TICACO"],
        "2401" => ["240101" => "TUMBES","240102" => "CORRALES","240103" => "LA CRUZ","240104" => "PAMPAS DE HOSPITAL","240105" => "SAN JACINTO","240106" => "SAN JUAN DE LA VIRGEN"],
        "2402" => ["240201" => "ZORRITOS","240202" => "CASITAS","240203" => "CANOAS DE PUNTA SAL"],
        "2403" => ["240301" => "ZARUMILLA","240302" => "AGUAS VERDES","240303" => "MATAPALO","240304" => "PAPAYAL"],
        "2501" => ["250101" => "CALLERIA","250102" => "CAMPOVERDE","250103" => "IPARIA","250104" => "MASISEA","250105" => "YARINACOCHA","250106" => "NUEVA REQUENA","250107" => "MANANTAY"],
        "2502" => ["250201" => "RAYMONDI","250202" => "SEPAHUA","250203" => "TAHUANIA","250204" => "YURUA"],
        "2503" => ["250301" => "PADRE ABAD","250302" => "IRAZOLA","250303" => "CURIMANA","250304" => "NESHUYA","250305" => "ALEXANDER VON HUMBOLDT"],
        "2504" => ["250401" => "PURUS"],
        ];

    private $ubigeos = ["010101" => "AMAZONAS - CHACHAPOYAS - CHACHAPOYAS","010102" => "AMAZONAS - CHACHAPOYAS - ASUNCION","010103" => "AMAZONAS - CHACHAPOYAS - BALSAS","010104" => "AMAZONAS - CHACHAPOYAS - CHETO","010105" => "AMAZONAS - CHACHAPOYAS - CHILIQUIN","010106" => "AMAZONAS - CHACHAPOYAS - CHUQUIBAMBA","010107" => "AMAZONAS - CHACHAPOYAS - GRANADA","010108" => "AMAZONAS - CHACHAPOYAS - HUANCAS","010109" => "AMAZONAS - CHACHAPOYAS - LA JALCA","010110" => "AMAZONAS - CHACHAPOYAS - LEIMEBAMBA","010111" => "AMAZONAS - CHACHAPOYAS - LEVANTO","010112" => "AMAZONAS - CHACHAPOYAS - MAGDALENA","010113" => "AMAZONAS - CHACHAPOYAS - MARISCAL CASTILLA","010114" => "AMAZONAS - CHACHAPOYAS - MOLINOPAMPA","010115" => "AMAZONAS - CHACHAPOYAS - MONTEVIDEO","010116" => "AMAZONAS - CHACHAPOYAS - OLLEROS","010117" => "AMAZONAS - CHACHAPOYAS - QUINJALCA","010118" => "AMAZONAS - CHACHAPOYAS - SAN FRANCISCO DE DAGUAS","010119" => "AMAZONAS - CHACHAPOYAS - SAN ISIDRO DE MAINO","010120" => "AMAZONAS - CHACHAPOYAS - SOLOCO","010121" => "AMAZONAS - CHACHAPOYAS - SONCHE","010201" => "AMAZONAS - BAGUA - BAGUA","010202" => "AMAZONAS - BAGUA - ARAMANGO","010203" => "AMAZONAS - BAGUA - COPALLIN","010204" => "AMAZONAS - BAGUA - EL PARCO","010205" => "AMAZONAS - BAGUA - IMAZA","010206" => "AMAZONAS - BAGUA - LA PECA","010301" => "AMAZONAS - BONGARA - JUMBILLA","010302" => "AMAZONAS - BONGARA - CHISQUILLA","010303" => "AMAZONAS - BONGARA - CHURUJA","010304" => "AMAZONAS - BONGARA - COROSHA","010305" => "AMAZONAS - BONGARA - CUISPES","010306" => "AMAZONAS - BONGARA - FLORIDA","010307" => "AMAZONAS - BONGARA - JAZAN","010308" => "AMAZONAS - BONGARA - RECTA","010309" => "AMAZONAS - BONGARA - SAN CARLOS","010310" => "AMAZONAS - BONGARA - SHIPASBAMBA","010311" => "AMAZONAS - BONGARA - VALERA","010312" => "AMAZONAS - BONGARA - YAMBRASBAMBA","010401" => "AMAZONAS - CONDORCANQUI - NIEVA","010402" => "AMAZONAS - CONDORCANQUI - EL CENEPA","010403" => "AMAZONAS - CONDORCANQUI - RIO SANTIAGO","010501" => "AMAZONAS - LUYA - LAMUD","010502" => "AMAZONAS - LUYA - CAMPORREDONDO","010503" => "AMAZONAS - LUYA - COCABAMBA","010504" => "AMAZONAS - LUYA - COLCAMAR","010505" => "AMAZONAS - LUYA - CONILA","010506" => "AMAZONAS - LUYA - INGUILPATA","010507" => "AMAZONAS - LUYA - LONGUITA","010508" => "AMAZONAS - LUYA - LONYA CHICO","010509" => "AMAZONAS - LUYA - LUYA","010510" => "AMAZONAS - LUYA - LUYA VIEJO","010511" => "AMAZONAS - LUYA - MARIA","010512" => "AMAZONAS - LUYA - OCALLI","010513" => "AMAZONAS - LUYA - OCUMAL","010514" => "AMAZONAS - LUYA - PISUQUIA","010515" => "AMAZONAS - LUYA - PROVIDENCIA","010516" => "AMAZONAS - LUYA - SAN CRISTOBAL","010517" => "AMAZONAS - LUYA - SAN FRANCISCO DEL YESO","010518" => "AMAZONAS - LUYA - SAN JERONIMO","010519" => "AMAZONAS - LUYA - SAN JUAN DE LOPECANCHA","010520" => "AMAZONAS - LUYA - SANTA CATALINA","010521" => "AMAZONAS - LUYA - SANTO TOMAS","010522" => "AMAZONAS - LUYA - TINGO","010523" => "AMAZONAS - LUYA - TRITA","010601" => "AMAZONAS - RODRIGUEZ DE MENDOZA - SAN NICOLAS","010602" => "AMAZONAS - RODRIGUEZ DE MENDOZA - CHIRIMOTO","010603" => "AMAZONAS - RODRIGUEZ DE MENDOZA - COCHAMAL","010604" => "AMAZONAS - RODRIGUEZ DE MENDOZA - HUAMBO","010605" => "AMAZONAS - RODRIGUEZ DE MENDOZA - LIMABAMBA","010606" => "AMAZONAS - RODRIGUEZ DE MENDOZA - LONGAR","010607" => "AMAZONAS - RODRIGUEZ DE MENDOZA - MARISCAL BENAVIDES","010608" => "AMAZONAS - RODRIGUEZ DE MENDOZA - MILPUC","010609" => "AMAZONAS - RODRIGUEZ DE MENDOZA - OMIA","010610" => "AMAZONAS - RODRIGUEZ DE MENDOZA - SANTA ROSA","010611" => "AMAZONAS - RODRIGUEZ DE MENDOZA - TOTORA","010612" => "AMAZONAS - RODRIGUEZ DE MENDOZA - VISTA ALEGRE","010701" => "AMAZONAS - UTCUBAMBA - BAGUA GRANDE","010702" => "AMAZONAS - UTCUBAMBA - CAJARURO","010703" => "AMAZONAS - UTCUBAMBA - CUMBA","010704" => "AMAZONAS - UTCUBAMBA - EL MILAGRO","010705" => "AMAZONAS - UTCUBAMBA - JAMALCA","010706" => "AMAZONAS - UTCUBAMBA - LONYA GRANDE","010707" => "AMAZONAS - UTCUBAMBA - YAMON",
        "020101" => "ANCASH - HUARAZ - HUARAZ","020102" => "ANCASH - HUARAZ - COCHABAMBA","020103" => "ANCASH - HUARAZ - COLCABAMBA","020104" => "ANCASH - HUARAZ - HUANCHAY","020105" => "ANCASH - HUARAZ - INDEPENDENCIA","020106" => "ANCASH - HUARAZ - JANGAS","020107" => "ANCASH - HUARAZ - LA LIBERTAD","020108" => "ANCASH - HUARAZ - OLLEROS","020109" => "ANCASH - HUARAZ - PAMPAS GRANDE","020110" => "ANCASH - HUARAZ - PARIACOTO","020111" => "ANCASH - HUARAZ - PIRA","020112" => "ANCASH - HUARAZ - TARICA","020201" => "ANCASH - AIJA - AIJA","020202" => "ANCASH - AIJA - CORIS","020203" => "ANCASH - AIJA - HUACLLAN","020204" => "ANCASH - AIJA - LA MERCED","020205" => "ANCASH - AIJA - SUCCHA","020301" => "ANCASH - ANTONIO RAYMONDI - LLAMELLIN","020302" => "ANCASH - ANTONIO RAYMONDI - ACZO","020303" => "ANCASH - ANTONIO RAYMONDI - CHACCHO","020304" => "ANCASH - ANTONIO RAYMONDI - CHINGAS","020305" => "ANCASH - ANTONIO RAYMONDI - MIRGAS","020306" => "ANCASH - ANTONIO RAYMONDI - SAN JUAN DE RONTOY","020401" => "ANCASH - ASUNCION - CHACAS","020402" => "ANCASH - ASUNCION - ACOCHACA","020501" => "ANCASH - BOLOGNESI - CHIQUIAN","020502" => "ANCASH - BOLOGNESI - ABELARDO PARDO LEZAMETA","020503" => "ANCASH - BOLOGNESI - ANTONIO RAYMONDI","020504" => "ANCASH - BOLOGNESI - AQUIA","020505" => "ANCASH - BOLOGNESI - CAJACAY","020506" => "ANCASH - BOLOGNESI - CANIS","020507" => "ANCASH - BOLOGNESI - COLQUIOC","020508" => "ANCASH - BOLOGNESI - HUALLANCA","020509" => "ANCASH - BOLOGNESI - HUASTA","020510" => "ANCASH - BOLOGNESI - HUAYLLACAYAN","020511" => "ANCASH - BOLOGNESI - LA PRIMAVERA","020512" => "ANCASH - BOLOGNESI - MANGAS","020513" => "ANCASH - BOLOGNESI - PACLLON","020514" => "ANCASH - BOLOGNESI - SAN MIGUEL DE CORPANQUI","020515" => "ANCASH - BOLOGNESI - TICLLOS","020601" => "ANCASH - CARHUAZ - CARHUAZ","020602" => "ANCASH - CARHUAZ - ACOPAMPA","020603" => "ANCASH - CARHUAZ - AMASHCA","020604" => "ANCASH - CARHUAZ - ANTA","020605" => "ANCASH - CARHUAZ - ATAQUERO","020606" => "ANCASH - CARHUAZ - MARCARA","020607" => "ANCASH - CARHUAZ - PARIAHUANCA","020608" => "ANCASH - CARHUAZ - SAN MIGUEL DE ACO","020609" => "ANCASH - CARHUAZ - SHILLA","020610" => "ANCASH - CARHUAZ - TINCO","020611" => "ANCASH - CARHUAZ - YUNGAR","020701" => "ANCASH - CARLOS FERMIN FITZCARRALD - SAN LUIS","020702" => "ANCASH - CARLOS FERMIN FITZCARRALD - SAN NICOLAS","020703" => "ANCASH - CARLOS FERMIN FITZCARRALD - YAUYA","020801" => "ANCASH - CASMA - CASMA","020802" => "ANCASH - CASMA - BUENA VISTA ALTA","020803" => "ANCASH - CASMA - COMANDANTE NOEL","020804" => "ANCASH - CASMA - YAUTAN","020901" => "ANCASH - CORONGO - CORONGO","020902" => "ANCASH - CORONGO - ACO","020903" => "ANCASH - CORONGO - BAMBAS","020904" => "ANCASH - CORONGO - CUSCA","020905" => "ANCASH - CORONGO - LA PAMPA","020906" => "ANCASH - CORONGO - YANAC","020907" => "ANCASH - CORONGO - YUPAN","021001" => "ANCASH - HUARI - HUARI","021002" => "ANCASH - HUARI - ANRA","021003" => "ANCASH - HUARI - CAJAY","021004" => "ANCASH - HUARI - CHAVIN DE HUANTAR","021005" => "ANCASH - HUARI - HUACACHI","021006" => "ANCASH - HUARI - HUACCHIS","021007" => "ANCASH - HUARI - HUACHIS","021008" => "ANCASH - HUARI - HUANTAR","021009" => "ANCASH - HUARI - MASIN","021010" => "ANCASH - HUARI - PAUCAS","021011" => "ANCASH - HUARI - PONTO","021012" => "ANCASH - HUARI - RAHUAPAMPA","021013" => "ANCASH - HUARI - RAPAYAN","021014" => "ANCASH - HUARI - SAN MARCOS","021015" => "ANCASH - HUARI - SAN PEDRO DE CHANA","021016" => "ANCASH - HUARI - UCO","021101" => "ANCASH - HUARMEY - HUARMEY","021102" => "ANCASH - HUARMEY - COCHAPETI","021103" => "ANCASH - HUARMEY - CULEBRAS","021104" => "ANCASH - HUARMEY - HUAYAN","021105" => "ANCASH - HUARMEY - MALVAS","021201" => "ANCASH - HUAYLAS - CARAZ","021202" => "ANCASH - HUAYLAS - HUALLANCA","021203" => "ANCASH - HUAYLAS - HUATA","021204" => "ANCASH - HUAYLAS - HUAYLAS","021205" => "ANCASH - HUAYLAS - MATO","021206" => "ANCASH - HUAYLAS - PAMPAROMAS","021207" => "ANCASH - HUAYLAS - PUEBLO LIBRE","021208" => "ANCASH - HUAYLAS - SANTA CRUZ","021209" => "ANCASH - HUAYLAS - SANTO TORIBIO","021210" => "ANCASH - HUAYLAS - YURACMARCA","021301" => "ANCASH - MARISCAL LUZURIAGA - PISCOBAMBA","021302" => "ANCASH - MARISCAL LUZURIAGA - CASCA","021303" => "ANCASH - MARISCAL LUZURIAGA - ELEAZAR GUZMAN BARRON","021304" => "ANCASH - MARISCAL LUZURIAGA - FIDEL OLIVAS ESCUDERO","021305" => "ANCASH - MARISCAL LUZURIAGA - LLAMA","021306" => "ANCASH - MARISCAL LUZURIAGA - LLUMPA","021307" => "ANCASH - MARISCAL LUZURIAGA - LUCMA","021308" => "ANCASH - MARISCAL LUZURIAGA - MUSGA","021401" => "ANCASH - OCROS - OCROS","021402" => "ANCASH - OCROS - ACAS","021403" => "ANCASH - OCROS - CAJAMARQUILLA","021404" => "ANCASH - OCROS - CARHUAPAMPA","021405" => "ANCASH - OCROS - COCHAS","021406" => "ANCASH - OCROS - CONGAS","021407" => "ANCASH - OCROS - LLIPA","021408" => "ANCASH - OCROS - SAN CRISTOBAL DE RAJAN","021409" => "ANCASH - OCROS - SAN PEDRO","021410" => "ANCASH - OCROS - SANTIAGO DE CHILCAS","021501" => "ANCASH - PALLASCA - CABANA","021502" => "ANCASH - PALLASCA - BOLOGNESI","021503" => "ANCASH - PALLASCA - CONCHUCOS","021504" => "ANCASH - PALLASCA - HUACASCHUQUE","021505" => "ANCASH - PALLASCA - HUANDOVAL","021506" => "ANCASH - PALLASCA - LACABAMBA","021507" => "ANCASH - PALLASCA - LLAPO","021508" => "ANCASH - PALLASCA - PALLASCA","021509" => "ANCASH - PALLASCA - PAMPAS","021510" => "ANCASH - PALLASCA - SANTA ROSA","021511" => "ANCASH - PALLASCA - TAUCA","021601" => "ANCASH - POMABAMBA - POMABAMBA","021602" => "ANCASH - POMABAMBA - HUAYLLAN","021603" => "ANCASH - POMABAMBA - PAROBAMBA","021604" => "ANCASH - POMABAMBA - QUINUABAMBA","021701" => "ANCASH - RECUAY - RECUAY","021702" => "ANCASH - RECUAY - CATAC","021703" => "ANCASH - RECUAY - COTAPARACO","021704" => "ANCASH - RECUAY - HUAYLLAPAMPA","021705" => "ANCASH - RECUAY - LLACLLIN","021706" => "ANCASH - RECUAY - MARCA","021707" => "ANCASH - RECUAY - PAMPAS CHICO","021708" => "ANCASH - RECUAY - PARARIN","021709" => "ANCASH - RECUAY - TAPACOCHA","021710" => "ANCASH - RECUAY - TICAPAMPA","021801" => "ANCASH - SANTA - CHIMBOTE","021802" => "ANCASH - SANTA - CACERES DEL PERU","021803" => "ANCASH - SANTA - COISHCO","021804" => "ANCASH - SANTA - MACATE","021805" => "ANCASH - SANTA - MORO","021806" => "ANCASH - SANTA - NEPEÑA","021807" => "ANCASH - SANTA - SAMANCO","021808" => "ANCASH - SANTA - SANTA","021809" => "ANCASH - SANTA - NUEVO CHIMBOTE","021901" => "ANCASH - SIHUAS - SIHUAS","021902" => "ANCASH - SIHUAS - ACOBAMBA","021903" => "ANCASH - SIHUAS - ALFONSO UGARTE","021904" => "ANCASH - SIHUAS - CASHAPAMPA","021905" => "ANCASH - SIHUAS - CHINGALPO","021906" => "ANCASH - SIHUAS - HUAYLLABAMBA","021907" => "ANCASH - SIHUAS - QUICHES","021908" => "ANCASH - SIHUAS - RAGASH","021909" => "ANCASH - SIHUAS - SAN JUAN","021910" => "ANCASH - SIHUAS - SICSIBAMBA","022001" => "ANCASH - YUNGAY - YUNGAY","022002" => "ANCASH - YUNGAY - CASCAPARA","022003" => "ANCASH - YUNGAY - MANCOS","022004" => "ANCASH - YUNGAY - MATACOTO","022005" => "ANCASH - YUNGAY - QUILLO","022006" => "ANCASH - YUNGAY - RANRAHIRCA","022007" => "ANCASH - YUNGAY - SHUPLUY","022008" => "ANCASH - YUNGAY - YANAMA",
        "030101" => "APURIMAC - ABANCAY - ABANCAY","030102" => "APURIMAC - ABANCAY - CHACOCHE","030103" => "APURIMAC - ABANCAY - CIRCA","030104" => "APURIMAC - ABANCAY - CURAHUASI","030105" => "APURIMAC - ABANCAY - HUANIPACA","030106" => "APURIMAC - ABANCAY - LAMBRAMA","030107" => "APURIMAC - ABANCAY - PICHIRHUA","030108" => "APURIMAC - ABANCAY - SAN PEDRO DE CACHORA","030109" => "APURIMAC - ABANCAY - TAMBURCO","030201" => "APURIMAC - ANDAHUAYLAS - ANDAHUAYLAS","030202" => "APURIMAC - ANDAHUAYLAS - ANDARAPA","030203" => "APURIMAC - ANDAHUAYLAS - CHIARA","030204" => "APURIMAC - ANDAHUAYLAS - HUANCARAMA","030205" => "APURIMAC - ANDAHUAYLAS - HUANCARAY","030206" => "APURIMAC - ANDAHUAYLAS - HUAYANA","030207" => "APURIMAC - ANDAHUAYLAS - KISHUARA","030208" => "APURIMAC - ANDAHUAYLAS - PACOBAMBA","030209" => "APURIMAC - ANDAHUAYLAS - PACUCHA","030210" => "APURIMAC - ANDAHUAYLAS - PAMPACHIRI","030211" => "APURIMAC - ANDAHUAYLAS - POMACOCHA","030212" => "APURIMAC - ANDAHUAYLAS - SAN ANTONIO DE CACHI","030213" => "APURIMAC - ANDAHUAYLAS - SAN JERONIMO","030214" => "APURIMAC - ANDAHUAYLAS - SAN MIGUEL DE CHACCRAMPA","030215" => "APURIMAC - ANDAHUAYLAS - SANTA MARIA DE CHICMO","030216" => "APURIMAC - ANDAHUAYLAS - TALAVERA","030217" => "APURIMAC - ANDAHUAYLAS - TUMAY HUARACA","030218" => "APURIMAC - ANDAHUAYLAS - TURPO","030219" => "APURIMAC - ANDAHUAYLAS - KAQUIABAMBA","030220" => "APURIMAC - ANDAHUAYLAS - JOSE MARIA ARGUEDAS","030301" => "APURIMAC - ANTABAMBA - ANTABAMBA","030302" => "APURIMAC - ANTABAMBA - EL ORO","030303" => "APURIMAC - ANTABAMBA - HUAQUIRCA","030304" => "APURIMAC - ANTABAMBA - JUAN ESPINOZA MEDRANO","030305" => "APURIMAC - ANTABAMBA - OROPESA","030306" => "APURIMAC - ANTABAMBA - PACHACONAS","030307" => "APURIMAC - ANTABAMBA - SABAINO","030401" => "APURIMAC - AYMARAES - CHALHUANCA","030402" => "APURIMAC - AYMARAES - CAPAYA","030403" => "APURIMAC - AYMARAES - CARAYBAMBA","030404" => "APURIMAC - AYMARAES - CHAPIMARCA","030405" => "APURIMAC - AYMARAES - COLCABAMBA","030406" => "APURIMAC - AYMARAES - COTARUSE","030407" => "APURIMAC - AYMARAES - IHUAYLLO","030408" => "APURIMAC - AYMARAES - JUSTO APU SAHUARAURA","030409" => "APURIMAC - AYMARAES - LUCRE","030410" => "APURIMAC - AYMARAES - POCOHUANCA","030411" => "APURIMAC - AYMARAES - SAN JUAN DE CHACÑA","030412" => "APURIMAC - AYMARAES - SAÑAYCA","030413" => "APURIMAC - AYMARAES - SORAYA","030414" => "APURIMAC - AYMARAES - TAPAIRIHUA","030415" => "APURIMAC - AYMARAES - TINTAY","030416" => "APURIMAC - AYMARAES - TORAYA","030417" => "APURIMAC - AYMARAES - YANACA","030501" => "APURIMAC - COTABAMBAS - TAMBOBAMBA","030502" => "APURIMAC - COTABAMBAS - COTABAMBAS","030503" => "APURIMAC - COTABAMBAS - COYLLURQUI","030504" => "APURIMAC - COTABAMBAS - HAQUIRA","030505" => "APURIMAC - COTABAMBAS - MARA","030506" => "APURIMAC - COTABAMBAS - CHALLHUAHUACHO","030601" => "APURIMAC - CHINCHEROS - CHINCHEROS","030602" => "APURIMAC - CHINCHEROS - ANCO_HUALLO","030603" => "APURIMAC - CHINCHEROS - COCHARCAS","030604" => "APURIMAC - CHINCHEROS - HUACCANA","030605" => "APURIMAC - CHINCHEROS - OCOBAMBA","030606" => "APURIMAC - CHINCHEROS - ONGOY","030607" => "APURIMAC - CHINCHEROS - URANMARCA","030608" => "APURIMAC - CHINCHEROS - RANRACANCHA","030609" => "APURIMAC - CHINCHEROS - ROCCHACC","030610" => "APURIMAC - CHINCHEROS - EL PORVENIR","030611" => "APURIMAC - CHINCHEROS - LOS CHANKAS","030701" => "APURIMAC - GRAU - CHUQUIBAMBILLA","030702" => "APURIMAC - GRAU - CURPAHUASI","030703" => "APURIMAC - GRAU - GAMARRA","030704" => "APURIMAC - GRAU - HUAYLLATI","030705" => "APURIMAC - GRAU - MAMARA","030706" => "APURIMAC - GRAU - MICAELA BASTIDAS","030707" => "APURIMAC - GRAU - PATAYPAMPA","030708" => "APURIMAC - GRAU - PROGRESO","030709" => "APURIMAC - GRAU - SAN ANTONIO","030710" => "APURIMAC - GRAU - SANTA ROSA","030711" => "APURIMAC - GRAU - TURPAY","030712" => "APURIMAC - GRAU - VILCABAMBA","030713" => "APURIMAC - GRAU - VIRUNDO","030714" => "APURIMAC - GRAU - CURASCO","040101" => "AREQUIPA - AREQUIPA - AREQUIPA","040102" => "AREQUIPA - AREQUIPA - ALTO SELVA ALEGRE","040103" => "AREQUIPA - AREQUIPA - CAYMA","040104" => "AREQUIPA - AREQUIPA - CERRO COLORADO","040105" => "AREQUIPA - AREQUIPA - CHARACATO","040106" => "AREQUIPA - AREQUIPA - CHIGUATA","040107" => "AREQUIPA - AREQUIPA - JACOBO HUNTER","040108" => "AREQUIPA - AREQUIPA - LA JOYA","040109" => "AREQUIPA - AREQUIPA - MARIANO MELGAR","040110" => "AREQUIPA - AREQUIPA - MIRAFLORES","040111" => "AREQUIPA - AREQUIPA - MOLLEBAYA","040112" => "AREQUIPA - AREQUIPA - PAUCARPATA","040113" => "AREQUIPA - AREQUIPA - POCSI","040114" => "AREQUIPA - AREQUIPA - POLOBAYA","040115" => "AREQUIPA - AREQUIPA - QUEQUEÑA","040116" => "AREQUIPA - AREQUIPA - SABANDIA","040117" => "AREQUIPA - AREQUIPA - SACHACA","040118" => "AREQUIPA - AREQUIPA - SAN JUAN DE SIGUAS","040119" => "AREQUIPA - AREQUIPA - SAN JUAN DE TARUCANI","040120" => "AREQUIPA - AREQUIPA - SANTA ISABEL DE SIGUAS","040121" => "AREQUIPA - AREQUIPA - SANTA RITA DE SIGUAS","040122" => "AREQUIPA - AREQUIPA - SOCABAYA","040123" => "AREQUIPA - AREQUIPA - TIABAYA","040124" => "AREQUIPA - AREQUIPA - UCHUMAYO","040125" => "AREQUIPA - AREQUIPA - VITOR","040126" => "AREQUIPA - AREQUIPA - YANAHUARA","040127" => "AREQUIPA - AREQUIPA - YARABAMBA","040128" => "AREQUIPA - AREQUIPA - YURA","040129" => "AREQUIPA - AREQUIPA - JOSE LUIS BUSTAMANTE Y RIVERO","040201" => "AREQUIPA - CAMANA - CAMANA","040202" => "AREQUIPA - CAMANA - JOSE MARIA QUIMPER","040203" => "AREQUIPA - CAMANA - MARIANO NICOLAS VALCARCEL","040204" => "AREQUIPA - CAMANA - MARISCAL CACERES","040205" => "AREQUIPA - CAMANA - NICOLAS DE PIEROLA","040206" => "AREQUIPA - CAMANA - OCOÑA","040207" => "AREQUIPA - CAMANA - QUILCA","040208" => "AREQUIPA - CAMANA - SAMUEL PASTOR","040301" => "AREQUIPA - CARAVELI - CARAVELI","040302" => "AREQUIPA - CARAVELI - ACARI","040303" => "AREQUIPA - CARAVELI - ATICO","040304" => "AREQUIPA - CARAVELI - ATIQUIPA","040305" => "AREQUIPA - CARAVELI - BELLA UNION","040306" => "AREQUIPA - CARAVELI - CAHUACHO","040307" => "AREQUIPA - CARAVELI - CHALA","040308" => "AREQUIPA - CARAVELI - CHAPARRA","040309" => "AREQUIPA - CARAVELI - HUANUHUANU","040310" => "AREQUIPA - CARAVELI - JAQUI","040311" => "AREQUIPA - CARAVELI - LOMAS","040312" => "AREQUIPA - CARAVELI - QUICACHA","040313" => "AREQUIPA - CARAVELI - YAUCA","040401" => "AREQUIPA - CASTILLA - APLAO","040402" => "AREQUIPA - CASTILLA - ANDAGUA","040403" => "AREQUIPA - CASTILLA - AYO","040404" => "AREQUIPA - CASTILLA - CHACHAS","040405" => "AREQUIPA - CASTILLA - CHILCAYMARCA","040406" => "AREQUIPA - CASTILLA - CHOCO","040407" => "AREQUIPA - CASTILLA - HUANCARQUI","040408" => "AREQUIPA - CASTILLA - MACHAGUAY","040409" => "AREQUIPA - CASTILLA - ORCOPAMPA","040410" => "AREQUIPA - CASTILLA - PAMPACOLCA","040411" => "AREQUIPA - CASTILLA - TIPAN","040412" => "AREQUIPA - CASTILLA - UÑON","040413" => "AREQUIPA - CASTILLA - URACA","040414" => "AREQUIPA - CASTILLA - VIRACO","040501" => "AREQUIPA - CAYLLOMA - CHIVAY","040502" => "AREQUIPA - CAYLLOMA - ACHOMA","040503" => "AREQUIPA - CAYLLOMA - CABANACONDE","040504" => "AREQUIPA - CAYLLOMA - CALLALLI","040505" => "AREQUIPA - CAYLLOMA - CAYLLOMA","040506" => "AREQUIPA - CAYLLOMA - COPORAQUE","040507" => "AREQUIPA - CAYLLOMA - HUAMBO","040508" => "AREQUIPA - CAYLLOMA - HUANCA","040509" => "AREQUIPA - CAYLLOMA - ICHUPAMPA","040510" => "AREQUIPA - CAYLLOMA - LARI","040511" => "AREQUIPA - CAYLLOMA - LLUTA","040512" => "AREQUIPA - CAYLLOMA - MACA","040513" => "AREQUIPA - CAYLLOMA - MADRIGAL","040514" => "AREQUIPA - CAYLLOMA - SAN ANTONIO DE CHUCA","040515" => "AREQUIPA - CAYLLOMA - SIBAYO","040516" => "AREQUIPA - CAYLLOMA - TAPAY","040517" => "AREQUIPA - CAYLLOMA - TISCO","040518" => "AREQUIPA - CAYLLOMA - TUTI","040519" => "AREQUIPA - CAYLLOMA - YANQUE","040520" => "AREQUIPA - CAYLLOMA - MAJES","040601" => "AREQUIPA - CONDESUYOS - CHUQUIBAMBA","040602" => "AREQUIPA - CONDESUYOS - ANDARAY","040603" => "AREQUIPA - CONDESUYOS - CAYARANI","040604" => "AREQUIPA - CONDESUYOS - CHICHAS","040605" => "AREQUIPA - CONDESUYOS - IRAY","040606" => "AREQUIPA - CONDESUYOS - RIO GRANDE","040607" => "AREQUIPA - CONDESUYOS - SALAMANCA","040608" => "AREQUIPA - CONDESUYOS - YANAQUIHUA","040701" => "AREQUIPA - ISLAY - MOLLENDO","040702" => "AREQUIPA - ISLAY - COCACHACRA","040703" => "AREQUIPA - ISLAY - DEAN VALDIVIA","040704" => "AREQUIPA - ISLAY - ISLAY","040705" => "AREQUIPA - ISLAY - MEJIA","040706" => "AREQUIPA - ISLAY - PUNTA DE BOMBON","040801" => "AREQUIPA - LA UNION - COTAHUASI","040802" => "AREQUIPA - LA UNION - ALCA","040803" => "AREQUIPA - LA UNION - CHARCANA","040804" => "AREQUIPA - LA UNION - HUAYNACOTAS","040805" => "AREQUIPA - LA UNION - PAMPAMARCA","040806" => "AREQUIPA - LA UNION - PUYCA","040807" => "AREQUIPA - LA UNION - QUECHUALLA","040808" => "AREQUIPA - LA UNION - SAYLA","040809" => "AREQUIPA - LA UNION - TAURIA","040810" => "AREQUIPA - LA UNION - TOMEPAMPA","040811" => "AREQUIPA - LA UNION - TORO",
        "050101" => "AYACUCHO - HUAMANGA - AYACUCHO","050102" => "AYACUCHO - HUAMANGA - ACOCRO","050103" => "AYACUCHO - HUAMANGA - ACOS VINCHOS","050104" => "AYACUCHO - HUAMANGA - CARMEN ALTO","050105" => "AYACUCHO - HUAMANGA - CHIARA","050106" => "AYACUCHO - HUAMANGA - OCROS","050107" => "AYACUCHO - HUAMANGA - PACAYCASA","050108" => "AYACUCHO - HUAMANGA - QUINUA","050109" => "AYACUCHO - HUAMANGA - SAN JOSE DE TICLLAS","050110" => "AYACUCHO - HUAMANGA - SAN JUAN BAUTISTA","050111" => "AYACUCHO - HUAMANGA - SANTIAGO DE PISCHA","050112" => "AYACUCHO - HUAMANGA - SOCOS","050113" => "AYACUCHO - HUAMANGA - TAMBILLO","050114" => "AYACUCHO - HUAMANGA - VINCHOS","050115" => "AYACUCHO - HUAMANGA - JESUS NAZARENO","050116" => "AYACUCHO - HUAMANGA - ANDRES AVELINO CACERES DORREGARAY","050201" => "AYACUCHO - CANGALLO - CANGALLO","050202" => "AYACUCHO - CANGALLO - CHUSCHI","050203" => "AYACUCHO - CANGALLO - LOS MOROCHUCOS","050204" => "AYACUCHO - CANGALLO - MARIA PARADO DE BELLIDO","050205" => "AYACUCHO - CANGALLO - PARAS","050206" => "AYACUCHO - CANGALLO - TOTOS","050301" => "AYACUCHO - HUANCA SANCOS - SANCOS","050302" => "AYACUCHO - HUANCA SANCOS - CARAPO","050303" => "AYACUCHO - HUANCA SANCOS - SACSAMARCA","050304" => "AYACUCHO - HUANCA SANCOS - SANTIAGO DE LUCANAMARCA","050401" => "AYACUCHO - HUANTA - HUANTA","050402" => "AYACUCHO - HUANTA - AYAHUANCO","050403" => "AYACUCHO - HUANTA - HUAMANGUILLA","050404" => "AYACUCHO - HUANTA - IGUAIN","050405" => "AYACUCHO - HUANTA - LURICOCHA","050406" => "AYACUCHO - HUANTA - SANTILLANA","050407" => "AYACUCHO - HUANTA - SIVIA","050408" => "AYACUCHO - HUANTA - LLOCHEGUA","050409" => "AYACUCHO - HUANTA - CANAYRE","050410" => "AYACUCHO - HUANTA - UCHURACCAY","050411" => "AYACUCHO - HUANTA - PUCACOLPA","050412" => "AYACUCHO - HUANTA - CHACA","050501" => "AYACUCHO - LA MAR - SAN MIGUEL","050502" => "AYACUCHO - LA MAR - ANCO","050503" => "AYACUCHO - LA MAR - AYNA","050504" => "AYACUCHO - LA MAR - CHILCAS","050505" => "AYACUCHO - LA MAR - CHUNGUI","050506" => "AYACUCHO - LA MAR - LUIS CARRANZA","050507" => "AYACUCHO - LA MAR - SANTA ROSA","050508" => "AYACUCHO - LA MAR - TAMBO","050509" => "AYACUCHO - LA MAR - SAMUGARI","050510" => "AYACUCHO - LA MAR - ANCHIHUAY","050511" => "AYACUCHO - LA MAR - ORONCCOY","050601" => "AYACUCHO - LUCANAS - PUQUIO","050602" => "AYACUCHO - LUCANAS - AUCARA","050603" => "AYACUCHO - LUCANAS - CABANA","050604" => "AYACUCHO - LUCANAS - CARMEN SALCEDO","050605" => "AYACUCHO - LUCANAS - CHAVIÑA","050606" => "AYACUCHO - LUCANAS - CHIPAO","050607" => "AYACUCHO - LUCANAS - HUAC-HUAS","050608" => "AYACUCHO - LUCANAS - LARAMATE","050609" => "AYACUCHO - LUCANAS - LEONCIO PRADO","050610" => "AYACUCHO - LUCANAS - LLAUTA","050611" => "AYACUCHO - LUCANAS - LUCANAS","050612" => "AYACUCHO - LUCANAS - OCAÑA","050613" => "AYACUCHO - LUCANAS - OTOCA","050614" => "AYACUCHO - LUCANAS - SAISA","050615" => "AYACUCHO - LUCANAS - SAN CRISTOBAL","050616" => "AYACUCHO - LUCANAS - SAN JUAN","050617" => "AYACUCHO - LUCANAS - SAN PEDRO","050618" => "AYACUCHO - LUCANAS - SAN PEDRO DE PALCO","050619" => "AYACUCHO - LUCANAS - SANCOS","050620" => "AYACUCHO - LUCANAS - SANTA ANA DE HUAYCAHUACHO","050621" => "AYACUCHO - LUCANAS - SANTA LUCIA","050701" => "AYACUCHO - PARINACOCHAS - CORACORA","050702" => "AYACUCHO - PARINACOCHAS - CHUMPI","050703" => "AYACUCHO - PARINACOCHAS - CORONEL CASTAÑEDA","050704" => "AYACUCHO - PARINACOCHAS - PACAPAUSA","050705" => "AYACUCHO - PARINACOCHAS - PULLO","050706" => "AYACUCHO - PARINACOCHAS - PUYUSCA","050707" => "AYACUCHO - PARINACOCHAS - SAN FRANCISCO DE RAVACAYCO","050708" => "AYACUCHO - PARINACOCHAS - UPAHUACHO","050801" => "AYACUCHO - PAUCAR DEL SARA SARA - PAUSA","050802" => "AYACUCHO - PAUCAR DEL SARA SARA - COLTA","050803" => "AYACUCHO - PAUCAR DEL SARA SARA - CORCULLA","050804" => "AYACUCHO - PAUCAR DEL SARA SARA - LAMPA","050805" => "AYACUCHO - PAUCAR DEL SARA SARA - MARCABAMBA","050806" => "AYACUCHO - PAUCAR DEL SARA SARA - OYOLO","050807" => "AYACUCHO - PAUCAR DEL SARA SARA - PARARCA","050808" => "AYACUCHO - PAUCAR DEL SARA SARA - SAN JAVIER DE ALPABAMBA","050809" => "AYACUCHO - PAUCAR DEL SARA SARA - SAN JOSE DE USHUA","050810" => "AYACUCHO - PAUCAR DEL SARA SARA - SARA SARA","050901" => "AYACUCHO - SUCRE - QUEROBAMBA","050902" => "AYACUCHO - SUCRE - BELEN","050903" => "AYACUCHO - SUCRE - CHALCOS","050904" => "AYACUCHO - SUCRE - CHILCAYOC","050905" => "AYACUCHO - SUCRE - HUACAÑA","050906" => "AYACUCHO - SUCRE - MORCOLLA","050907" => "AYACUCHO - SUCRE - PAICO","050908" => "AYACUCHO - SUCRE - SAN PEDRO DE LARCAY","050909" => "AYACUCHO - SUCRE - SAN SALVADOR DE QUIJE","050910" => "AYACUCHO - SUCRE - SANTIAGO DE PAUCARAY","050911" => "AYACUCHO - SUCRE - SORAS","051001" => "AYACUCHO - VICTOR FAJARDO - HUANCAPI","051002" => "AYACUCHO - VICTOR FAJARDO - ALCAMENCA","051003" => "AYACUCHO - VICTOR FAJARDO - APONGO","051004" => "AYACUCHO - VICTOR FAJARDO - ASQUIPATA","051005" => "AYACUCHO - VICTOR FAJARDO - CANARIA","051006" => "AYACUCHO - VICTOR FAJARDO - CAYARA","051007" => "AYACUCHO - VICTOR FAJARDO - COLCA","051008" => "AYACUCHO - VICTOR FAJARDO - HUAMANQUIQUIA","051009" => "AYACUCHO - VICTOR FAJARDO - HUANCARAYLLA","051010" => "AYACUCHO - VICTOR FAJARDO - HUALLA","051011" => "AYACUCHO - VICTOR FAJARDO - SARHUA","051012" => "AYACUCHO - VICTOR FAJARDO - VILCANCHOS","051101" => "AYACUCHO - VILCAS HUAMAN - VILCAS HUAMAN","051102" => "AYACUCHO - VILCAS HUAMAN - ACCOMARCA","051103" => "AYACUCHO - VILCAS HUAMAN - CARHUANCA","051104" => "AYACUCHO - VILCAS HUAMAN - CONCEPCION","051105" => "AYACUCHO - VILCAS HUAMAN - HUAMBALPA","051106" => "AYACUCHO - VILCAS HUAMAN - INDEPENDENCIA","051107" => "AYACUCHO - VILCAS HUAMAN - SAURAMA","051108" => "AYACUCHO - VILCAS HUAMAN - VISCHONGO",
        "060101" => "CAJAMARCA - CAJAMARCA - CAJAMARCA","060102" => "CAJAMARCA - CAJAMARCA - ASUNCION","060103" => "CAJAMARCA - CAJAMARCA - CHETILLA","060104" => "CAJAMARCA - CAJAMARCA - COSPAN","060105" => "CAJAMARCA - CAJAMARCA - ENCAÑADA","060106" => "CAJAMARCA - CAJAMARCA - JESUS","060107" => "CAJAMARCA - CAJAMARCA - LLACANORA","060108" => "CAJAMARCA - CAJAMARCA - LOS BAÑOS DEL INCA","060109" => "CAJAMARCA - CAJAMARCA - MAGDALENA","060110" => "CAJAMARCA - CAJAMARCA - MATARA","060111" => "CAJAMARCA - CAJAMARCA - NAMORA","060112" => "CAJAMARCA - CAJAMARCA - SAN JUAN","060201" => "CAJAMARCA - CAJABAMBA - CAJABAMBA","060202" => "CAJAMARCA - CAJABAMBA - CACHACHI","060203" => "CAJAMARCA - CAJABAMBA - CONDEBAMBA","060204" => "CAJAMARCA - CAJABAMBA - SITACOCHA","060301" => "CAJAMARCA - CELENDIN - CELENDIN","060302" => "CAJAMARCA - CELENDIN - CHUMUCH","060303" => "CAJAMARCA - CELENDIN - CORTEGANA","060304" => "CAJAMARCA - CELENDIN - HUASMIN","060305" => "CAJAMARCA - CELENDIN - JORGE CHAVEZ","060306" => "CAJAMARCA - CELENDIN - JOSE GALVEZ","060307" => "CAJAMARCA - CELENDIN - MIGUEL IGLESIAS","060308" => "CAJAMARCA - CELENDIN - OXAMARCA","060309" => "CAJAMARCA - CELENDIN - SOROCHUCO","060310" => "CAJAMARCA - CELENDIN - SUCRE","060311" => "CAJAMARCA - CELENDIN - UTCO","060312" => "CAJAMARCA - CELENDIN - LA LIBERTAD DE PALLAN","060401" => "CAJAMARCA - CHOTA - CHOTA","060402" => "CAJAMARCA - CHOTA - ANGUIA","060403" => "CAJAMARCA - CHOTA - CHADIN","060404" => "CAJAMARCA - CHOTA - CHIGUIRIP","060405" => "CAJAMARCA - CHOTA - CHIMBAN","060406" => "CAJAMARCA - CHOTA - CHOROPAMPA","060407" => "CAJAMARCA - CHOTA - COCHABAMBA","060408" => "CAJAMARCA - CHOTA - CONCHAN","060409" => "CAJAMARCA - CHOTA - HUAMBOS","060410" => "CAJAMARCA - CHOTA - LAJAS","060411" => "CAJAMARCA - CHOTA - LLAMA","060412" => "CAJAMARCA - CHOTA - MIRACOSTA","060413" => "CAJAMARCA - CHOTA - PACCHA","060414" => "CAJAMARCA - CHOTA - PION","060415" => "CAJAMARCA - CHOTA - QUEROCOTO","060416" => "CAJAMARCA - CHOTA - SAN JUAN DE LICUPIS","060417" => "CAJAMARCA - CHOTA - TACABAMBA","060418" => "CAJAMARCA - CHOTA - TOCMOCHE","060419" => "CAJAMARCA - CHOTA - CHALAMARCA","060501" => "CAJAMARCA - CONTUMAZA - CONTUMAZA","060502" => "CAJAMARCA - CONTUMAZA - CHILETE","060503" => "CAJAMARCA - CONTUMAZA - CUPISNIQUE","060504" => "CAJAMARCA - CONTUMAZA - GUZMANGO","060505" => "CAJAMARCA - CONTUMAZA - SAN BENITO","060506" => "CAJAMARCA - CONTUMAZA - SANTA CRUZ DE TOLED","060507" => "CAJAMARCA - CONTUMAZA - TANTARICA","060508" => "CAJAMARCA - CONTUMAZA - YONAN","060601" => "CAJAMARCA - CUTERVO - CUTERVO","060602" => "CAJAMARCA - CUTERVO - CALLAYUC","060603" => "CAJAMARCA - CUTERVO - CHOROS","060604" => "CAJAMARCA - CUTERVO - CUJILLO","060605" => "CAJAMARCA - CUTERVO - LA RAMADA","060606" => "CAJAMARCA - CUTERVO - PIMPINGOS","060607" => "CAJAMARCA - CUTERVO - QUEROCOTILLO","060608" => "CAJAMARCA - CUTERVO - SAN ANDRES DE CUTERVO","060609" => "CAJAMARCA - CUTERVO - SAN JUAN DE CUTERVO","060610" => "CAJAMARCA - CUTERVO - SAN LUIS DE LUCMA","060611" => "CAJAMARCA - CUTERVO - SANTA CRUZ","060612" => "CAJAMARCA - CUTERVO - SANTO DOMINGO DE LA CAPILLA","060613" => "CAJAMARCA - CUTERVO - SANTO TOMAS","060614" => "CAJAMARCA - CUTERVO - SOCOTA","060615" => "CAJAMARCA - CUTERVO - TORIBIO CASANOVA","060701" => "CAJAMARCA - HUALGAYOC - BAMBAMARCA","060702" => "CAJAMARCA - HUALGAYOC - CHUGUR","060703" => "CAJAMARCA - HUALGAYOC - HUALGAYOC","060801" => "CAJAMARCA - JAEN - JAEN","060802" => "CAJAMARCA - JAEN - BELLAVISTA","060803" => "CAJAMARCA - JAEN - CHONTALI","060804" => "CAJAMARCA - JAEN - COLASAY","060805" => "CAJAMARCA - JAEN - HUABAL","060806" => "CAJAMARCA - JAEN - LAS PIRIAS","060807" => "CAJAMARCA - JAEN - POMAHUACA","060808" => "CAJAMARCA - JAEN - PUCARA","060809" => "CAJAMARCA - JAEN - SALLIQUE","060810" => "CAJAMARCA - JAEN - SAN FELIPE","060811" => "CAJAMARCA - JAEN - SAN JOSE DEL ALTO","060812" => "CAJAMARCA - JAEN - SANTA ROSA","060901" => "CAJAMARCA - SAN IGNACIO - SAN IGNACIO","060902" => "CAJAMARCA - SAN IGNACIO - CHIRINOS","060903" => "CAJAMARCA - SAN IGNACIO - HUARANGO","060904" => "CAJAMARCA - SAN IGNACIO - LA COIPA","060905" => "CAJAMARCA - SAN IGNACIO - NAMBALLE","060906" => "CAJAMARCA - SAN IGNACIO - SAN JOSE DE LOURDES","060907" => "CAJAMARCA - SAN IGNACIO - TABACONAS","061001" => "CAJAMARCA - SAN MARCOS - PEDRO GALVEZ","061002" => "CAJAMARCA - SAN MARCOS - CHANCAY","061003" => "CAJAMARCA - SAN MARCOS - EDUARDO VILLANUEVA","061004" => "CAJAMARCA - SAN MARCOS - GREGORIO PITA","061005" => "CAJAMARCA - SAN MARCOS - ICHOCAN","061006" => "CAJAMARCA - SAN MARCOS - JOSE MANUEL QUIROZ","061007" => "CAJAMARCA - SAN MARCOS - JOSE SABOGAL","061101" => "CAJAMARCA - SAN MIGUEL - SAN MIGUEL","061102" => "CAJAMARCA - SAN MIGUEL - BOLIVAR","061103" => "CAJAMARCA - SAN MIGUEL - CALQUIS","061104" => "CAJAMARCA - SAN MIGUEL - CATILLUC","061105" => "CAJAMARCA - SAN MIGUEL - EL PRADO","061106" => "CAJAMARCA - SAN MIGUEL - LA FLORIDA","061107" => "CAJAMARCA - SAN MIGUEL - LLAPA","061108" => "CAJAMARCA - SAN MIGUEL - NANCHOC","061109" => "CAJAMARCA - SAN MIGUEL - NIEPOS","061110" => "CAJAMARCA - SAN MIGUEL - SAN GREGORIO","061111" => "CAJAMARCA - SAN MIGUEL - SAN SILVESTRE DE COCHAN","061112" => "CAJAMARCA - SAN MIGUEL - TONGOD","061113" => "CAJAMARCA - SAN MIGUEL - UNION AGUA BLANCA","061201" => "CAJAMARCA - SAN PABLO - SAN PABLO","061202" => "CAJAMARCA - SAN PABLO - SAN BERNARDINO","061203" => "CAJAMARCA - SAN PABLO - SAN LUIS","061204" => "CAJAMARCA - SAN PABLO - TUMBADEN","061301" => "CAJAMARCA - SANTA CRUZ - SANTA CRUZ","061302" => "CAJAMARCA - SANTA CRUZ - ANDABAMBA","061303" => "CAJAMARCA - SANTA CRUZ - CATACHE","061304" => "CAJAMARCA - SANTA CRUZ - CHANCAYBAÑOS","061305" => "CAJAMARCA - SANTA CRUZ - LA ESPERANZA","061306" => "CAJAMARCA - SANTA CRUZ - NINABAMBA","061307" => "CAJAMARCA - SANTA CRUZ - PULAN","061308" => "CAJAMARCA - SANTA CRUZ - SAUCEPAMPA","061309" => "CAJAMARCA - SANTA CRUZ - SEXI","061310" => "CAJAMARCA - SANTA CRUZ - UTICYACU","061311" => "CAJAMARCA - SANTA CRUZ - YAUYUCAN",
        "070101" => "CALLAO - CALLAO - CALLAO","070102" => "CALLAO - CALLAO - BELLAVISTA","070103" => "CALLAO - CALLAO - CARMEN DE LA LEGUA REYNOSO","070104" => "CALLAO - CALLAO - LA PERLA","070105" => "CALLAO - CALLAO - LA PUNTA","070106" => "CALLAO - CALLAO - VENTANILLA","070107" => "CALLAO - CALLAO - MI PERU",
        "080101" => "CUSCO - CUSCO - CUSCO","080102" => "CUSCO - CUSCO - CCORCA","080103" => "CUSCO - CUSCO - POROY","080104" => "CUSCO - CUSCO - SAN JERONIMO","080105" => "CUSCO - CUSCO - SAN SEBASTIAN","080106" => "CUSCO - CUSCO - SANTIAGO","080107" => "CUSCO - CUSCO - SAYLLA","080108" => "CUSCO - CUSCO - WANCHAQ","080201" => "CUSCO - ACOMAYO - ACOMAYO","080202" => "CUSCO - ACOMAYO - ACOPIA","080203" => "CUSCO - ACOMAYO - ACOS","080204" => "CUSCO - ACOMAYO - MOSOC LLACTA","080205" => "CUSCO - ACOMAYO - POMACANCHI","080206" => "CUSCO - ACOMAYO - RONDOCAN","080207" => "CUSCO - ACOMAYO - SANGARARA","080301" => "CUSCO - ANTA - ANTA","080302" => "CUSCO - ANTA - ANCAHUASI","080303" => "CUSCO - ANTA - CACHIMAYO","080304" => "CUSCO - ANTA - CHINCHAYPUJIO","080305" => "CUSCO - ANTA - HUAROCONDO","080306" => "CUSCO - ANTA - LIMATAMBO","080307" => "CUSCO - ANTA - MOLLEPATA","080308" => "CUSCO - ANTA - PUCYURA","080309" => "CUSCO - ANTA - ZURITE","080401" => "CUSCO - CALCA - CALCA","080402" => "CUSCO - CALCA - COYA","080403" => "CUSCO - CALCA - LAMAY","080404" => "CUSCO - CALCA - LARES","080405" => "CUSCO - CALCA - PISAC","080406" => "CUSCO - CALCA - SAN SALVADOR","080407" => "CUSCO - CALCA - TARAY","080408" => "CUSCO - CALCA - YANATILE","080501" => "CUSCO - CANAS - YANAOCA","080502" => "CUSCO - CANAS - CHECCA","080503" => "CUSCO - CANAS - KUNTURKANKI","080504" => "CUSCO - CANAS - LANGUI","080505" => "CUSCO - CANAS - LAYO","080506" => "CUSCO - CANAS - PAMPAMARCA","080507" => "CUSCO - CANAS - QUEHUE","080508" => "CUSCO - CANAS - TUPAC AMARU","080601" => "CUSCO - CANCHIS - SICUANI","080602" => "CUSCO - CANCHIS - CHECACUPE","080603" => "CUSCO - CANCHIS - COMBAPATA","080604" => "CUSCO - CANCHIS - MARANGANI","080605" => "CUSCO - CANCHIS - PITUMARCA","080606" => "CUSCO - CANCHIS - SAN PABLO","080607" => "CUSCO - CANCHIS - SAN PEDRO","080608" => "CUSCO - CANCHIS - TINTA","080701" => "CUSCO - CHUMBIVILCAS - SANTO TOMAS","080702" => "CUSCO - CHUMBIVILCAS - CAPACMARCA","080703" => "CUSCO - CHUMBIVILCAS - CHAMACA","080704" => "CUSCO - CHUMBIVILCAS - COLQUEMARCA","080705" => "CUSCO - CHUMBIVILCAS - LIVITACA","080706" => "CUSCO - CHUMBIVILCAS - LLUSCO","080707" => "CUSCO - CHUMBIVILCAS - QUIÑOTA","080708" => "CUSCO - CHUMBIVILCAS - VELILLE","080801" => "CUSCO - ESPINAR - ESPINAR","080802" => "CUSCO - ESPINAR - CONDOROMA","080803" => "CUSCO - ESPINAR - COPORAQUE","080804" => "CUSCO - ESPINAR - OCORURO","080805" => "CUSCO - ESPINAR - PALLPATA","080806" => "CUSCO - ESPINAR - PICHIGUA","080807" => "CUSCO - ESPINAR - SUYCKUTAMBO","080808" => "CUSCO - ESPINAR - ALTO PICHIGUA","080901" => "CUSCO - LA CONVENCION - SANTA ANA","080902" => "CUSCO - LA CONVENCION - ECHARATE","080903" => "CUSCO - LA CONVENCION - HUAYOPATA","080904" => "CUSCO - LA CONVENCION - MARANURA","080905" => "CUSCO - LA CONVENCION - OCOBAMBA","080906" => "CUSCO - LA CONVENCION - QUELLOUNO","080907" => "CUSCO - LA CONVENCION - KIMBIRI","080908" => "CUSCO - LA CONVENCION - SANTA TERESA","080909" => "CUSCO - LA CONVENCION - VILCABAMBA","080910" => "CUSCO - LA CONVENCION - PICHARI","080911" => "CUSCO - LA CONVENCION - INKAWASI","080912" => "CUSCO - LA CONVENCION - VILLA VIRGEN","080913" => "CUSCO - LA CONVENCION - VILLA KINTIARINA","080914" => "CUSCO - LA CONVENCION - MEGANTONI","081001" => "CUSCO - PARURO - PARURO","081002" => "CUSCO - PARURO - ACCHA","081003" => "CUSCO - PARURO - CCAPI","081004" => "CUSCO - PARURO - COLCHA","081005" => "CUSCO - PARURO - HUANOQUITE","081006" => "CUSCO - PARURO - OMACHA","081007" => "CUSCO - PARURO - PACCARITAMBO","081008" => "CUSCO - PARURO - PILLPINTO","081009" => "CUSCO - PARURO - YAURISQUE","081101" => "CUSCO - PAUCARTAMBO - PAUCARTAMBO","081102" => "CUSCO - PAUCARTAMBO - CAICAY","081103" => "CUSCO - PAUCARTAMBO - CHALLABAMBA","081104" => "CUSCO - PAUCARTAMBO - COLQUEPATA","081105" => "CUSCO - PAUCARTAMBO - HUANCARANI","081106" => "CUSCO - PAUCARTAMBO - KOSÑIPATA","081201" => "CUSCO - QUISPICANCHI - URCOS","081202" => "CUSCO - QUISPICANCHI - ANDAHUAYLILLAS","081203" => "CUSCO - QUISPICANCHI - CAMANTI","081204" => "CUSCO - QUISPICANCHI - CCARHUAYO","081205" => "CUSCO - QUISPICANCHI - CCATCA","081206" => "CUSCO - QUISPICANCHI - CUSIPATA","081207" => "CUSCO - QUISPICANCHI - HUARO","081208" => "CUSCO - QUISPICANCHI - LUCRE","081209" => "CUSCO - QUISPICANCHI - MARCAPATA","081210" => "CUSCO - QUISPICANCHI - OCONGATE","081211" => "CUSCO - QUISPICANCHI - OROPESA","081212" => "CUSCO - QUISPICANCHI - QUIQUIJANA","081301" => "CUSCO - URUBAMBA - URUBAMBA","081302" => "CUSCO - URUBAMBA - CHINCHERO","081303" => "CUSCO - URUBAMBA - HUAYLLABAMBA","081304" => "CUSCO - URUBAMBA - MACHUPICCHU","081305" => "CUSCO - URUBAMBA - MARAS","081306" => "CUSCO - URUBAMBA - OLLANTAYTAMBO","081307" => "CUSCO - URUBAMBA - YUCAY",
        "090101" => "HUANCAVELICA - HUANCAVELICA - HUANCAVELICA","090102" => "HUANCAVELICA - HUANCAVELICA - ACOBAMBILLA","090103" => "HUANCAVELICA - HUANCAVELICA - ACORIA","090104" => "HUANCAVELICA - HUANCAVELICA - CONAYCA","090105" => "HUANCAVELICA - HUANCAVELICA - CUENCA","090106" => "HUANCAVELICA - HUANCAVELICA - HUACHOCOLPA","090107" => "HUANCAVELICA - HUANCAVELICA - HUAYLLAHUARA","090108" => "HUANCAVELICA - HUANCAVELICA - IZCUCHACA","090109" => "HUANCAVELICA - HUANCAVELICA - LARIA","090110" => "HUANCAVELICA - HUANCAVELICA - MANTA","090111" => "HUANCAVELICA - HUANCAVELICA - MARISCAL CACERES","090112" => "HUANCAVELICA - HUANCAVELICA - MOYA","090113" => "HUANCAVELICA - HUANCAVELICA - NUEVO OCCORO","090114" => "HUANCAVELICA - HUANCAVELICA - PALCA","090115" => "HUANCAVELICA - HUANCAVELICA - PILCHACA","090116" => "HUANCAVELICA - HUANCAVELICA - VILCA","090117" => "HUANCAVELICA - HUANCAVELICA - YAULI","090118" => "HUANCAVELICA - HUANCAVELICA - ASCENSION","090119" => "HUANCAVELICA - HUANCAVELICA - HUANDO","090201" => "HUANCAVELICA - ACOBAMBA - ACOBAMBA","090202" => "HUANCAVELICA - ACOBAMBA - ANDABAMBA","090203" => "HUANCAVELICA - ACOBAMBA - ANTA","090204" => "HUANCAVELICA - ACOBAMBA - CAJA","090205" => "HUANCAVELICA - ACOBAMBA - MARCAS","090206" => "HUANCAVELICA - ACOBAMBA - PAUCARA","090207" => "HUANCAVELICA - ACOBAMBA - POMACOCHA","090208" => "HUANCAVELICA - ACOBAMBA - ROSARIO","090301" => "HUANCAVELICA - ANGARAES - LIRCAY","090302" => "HUANCAVELICA - ANGARAES - ANCHONGA","090303" => "HUANCAVELICA - ANGARAES - CALLANMARCA","090304" => "HUANCAVELICA - ANGARAES - CCOCHACCASA","090305" => "HUANCAVELICA - ANGARAES - CHINCHO","090306" => "HUANCAVELICA - ANGARAES - CONGALLA","090307" => "HUANCAVELICA - ANGARAES - HUANCA-HUANCA","090308" => "HUANCAVELICA - ANGARAES - HUAYLLAY GRANDE","090309" => "HUANCAVELICA - ANGARAES - JULCAMARCA","090310" => "HUANCAVELICA - ANGARAES - SAN ANTONIO DE ANTAPARCO","090311" => "HUANCAVELICA - ANGARAES - SANTO TOMAS DE PATA","090312" => "HUANCAVELICA - ANGARAES - SECCLLA","090401" => "HUANCAVELICA - CASTROVIRREYNA - CASTROVIRREYNA","090402" => "HUANCAVELICA - CASTROVIRREYNA - ARMA","090403" => "HUANCAVELICA - CASTROVIRREYNA - AURAHUA","090404" => "HUANCAVELICA - CASTROVIRREYNA - CAPILLAS","090405" => "HUANCAVELICA - CASTROVIRREYNA - CHUPAMARCA","090406" => "HUANCAVELICA - CASTROVIRREYNA - COCAS","090407" => "HUANCAVELICA - CASTROVIRREYNA - HUACHOS","090408" => "HUANCAVELICA - CASTROVIRREYNA - HUAMATAMBO","090409" => "HUANCAVELICA - CASTROVIRREYNA - MOLLEPAMPA","090410" => "HUANCAVELICA - CASTROVIRREYNA - SAN JUAN","090411" => "HUANCAVELICA - CASTROVIRREYNA - SANTA ANA","090412" => "HUANCAVELICA - CASTROVIRREYNA - TANTARA","090413" => "HUANCAVELICA - CASTROVIRREYNA - TICRAPO","090501" => "HUANCAVELICA - CHURCAMPA - CHURCAMPA","090502" => "HUANCAVELICA - CHURCAMPA - ANCO","090503" => "HUANCAVELICA - CHURCAMPA - CHINCHIHUASI","090504" => "HUANCAVELICA - CHURCAMPA - EL CARMEN","090505" => "HUANCAVELICA - CHURCAMPA - LA MERCED","090506" => "HUANCAVELICA - CHURCAMPA - LOCROJA","090507" => "HUANCAVELICA - CHURCAMPA - PAUCARBAMBA","090508" => "HUANCAVELICA - CHURCAMPA - SAN MIGUEL DE MAYOCC","090509" => "HUANCAVELICA - CHURCAMPA - SAN PEDRO DE CORIS","090510" => "HUANCAVELICA - CHURCAMPA - PACHAMARCA","090511" => "HUANCAVELICA - CHURCAMPA - COSME","090601" => "HUANCAVELICA - HUAYTARA - HUAYTARA","090602" => "HUANCAVELICA - HUAYTARA - AYAVI","090603" => "HUANCAVELICA - HUAYTARA - CORDOVA","090604" => "HUANCAVELICA - HUAYTARA - HUAYACUNDO ARMA","090605" => "HUANCAVELICA - HUAYTARA - LARAMARCA","090606" => "HUANCAVELICA - HUAYTARA - OCOYO","090607" => "HUANCAVELICA - HUAYTARA - PILPICHACA","090608" => "HUANCAVELICA - HUAYTARA - QUERCO","090609" => "HUANCAVELICA - HUAYTARA - QUITO-ARMA","090610" => "HUANCAVELICA - HUAYTARA - SAN ANTONIO DE CUSICANCHA","090611" => "HUANCAVELICA - HUAYTARA - SAN FRANCISCO DE SANGAYAICO","090612" => "HUANCAVELICA - HUAYTARA - SAN ISIDRO","090613" => "HUANCAVELICA - HUAYTARA - SANTIAGO DE CHOCORVOS","090614" => "HUANCAVELICA - HUAYTARA - SANTIAGO DE QUIRAHUARA","090615" => "HUANCAVELICA - HUAYTARA - SANTO DOMINGO DE CAPILLAS","090616" => "HUANCAVELICA - HUAYTARA - TAMBO","090701" => "HUANCAVELICA - TAYACAJA - PAMPAS","090702" => "HUANCAVELICA - TAYACAJA - ACOSTAMBO","090703" => "HUANCAVELICA - TAYACAJA - ACRAQUIA","090704" => "HUANCAVELICA - TAYACAJA - AHUAYCHA","090705" => "HUANCAVELICA - TAYACAJA - COLCABAMBA","090706" => "HUANCAVELICA - TAYACAJA - DANIEL HERNANDEZ","090707" => "HUANCAVELICA - TAYACAJA - HUACHOCOLPA","090709" => "HUANCAVELICA - TAYACAJA - HUARIBAMBA","090710" => "HUANCAVELICA - TAYACAJA - ÑAHUIMPUQUIO","090711" => "HUANCAVELICA - TAYACAJA - PAZOS","090713" => "HUANCAVELICA - TAYACAJA - QUISHUAR","090714" => "HUANCAVELICA - TAYACAJA - SALCABAMBA","090715" => "HUANCAVELICA - TAYACAJA - SALCAHUASI","090716" => "HUANCAVELICA - TAYACAJA - SAN MARCOS DE ROCCHAC","090717" => "HUANCAVELICA - TAYACAJA - SURCUBAMBA","090718" => "HUANCAVELICA - TAYACAJA - TINTAY PUNCU","090719" => "HUANCAVELICA - TAYACAJA - QUICHUAS","090720" => "HUANCAVELICA - TAYACAJA - ANDAYMARCA","090721" => "HUANCAVELICA - TAYACAJA - ROBLE","090722" => "HUANCAVELICA - TAYACAJA - PICHOS","090723" => "HUANCAVELICA - TAYACAJA - SANTIAGO DE TUCUMA",
        "100101" => "HUANUCO - HUANUCO - HUANUCO","100102" => "HUANUCO - HUANUCO - AMARILIS","100103" => "HUANUCO - HUANUCO - CHINCHAO","100104" => "HUANUCO - HUANUCO - CHURUBAMBA","100105" => "HUANUCO - HUANUCO - MARGOS","100106" => "HUANUCO - HUANUCO - QUISQUI (KICHKI)","100107" => "HUANUCO - HUANUCO - SAN FRANCISCO DE CAYRAN","100108" => "HUANUCO - HUANUCO - SAN PEDRO DE CHAULAN","100109" => "HUANUCO - HUANUCO - SANTA MARIA DEL VALLE","100110" => "HUANUCO - HUANUCO - YARUMAYO","100111" => "HUANUCO - HUANUCO - PILLCO MARCA","100112" => "HUANUCO - HUANUCO - YACUS","100113" => "HUANUCO - HUANUCO - SAN PABLO DE PILLAO","100201" => "HUANUCO - AMBO - AMBO","100202" => "HUANUCO - AMBO - CAYNA","100203" => "HUANUCO - AMBO - COLPAS","100204" => "HUANUCO - AMBO - CONCHAMARCA","100205" => "HUANUCO - AMBO - HUACAR","100206" => "HUANUCO - AMBO - SAN FRANCISCO","100207" => "HUANUCO - AMBO - SAN RAFAEL","100208" => "HUANUCO - AMBO - TOMAY KICHWA","100301" => "HUANUCO - DOS DE MAYO - LA UNION","100307" => "HUANUCO - DOS DE MAYO - CHUQUIS","100311" => "HUANUCO - DOS DE MAYO - MARIAS","100313" => "HUANUCO - DOS DE MAYO - PACHAS","100316" => "HUANUCO - DOS DE MAYO - QUIVILLA","100317" => "HUANUCO - DOS DE MAYO - RIPAN","100321" => "HUANUCO - DOS DE MAYO - SHUNQUI","100322" => "HUANUCO - DOS DE MAYO - SILLAPATA","100323" => "HUANUCO - DOS DE MAYO - YANAS","100401" => "HUANUCO - HUACAYBAMBA - HUACAYBAMBA","100402" => "HUANUCO - HUACAYBAMBA - CANCHABAMBA","100403" => "HUANUCO - HUACAYBAMBA - COCHABAMBA","100404" => "HUANUCO - HUACAYBAMBA - PINRA","100501" => "HUANUCO - HUAMALIES - LLATA","100502" => "HUANUCO - HUAMALIES - ARANCAY","100503" => "HUANUCO - HUAMALIES - CHAVIN DE PARIARCA","100504" => "HUANUCO - HUAMALIES - JACAS GRANDE","100505" => "HUANUCO - HUAMALIES - JIRCAN","100506" => "HUANUCO - HUAMALIES - MIRAFLORES","100507" => "HUANUCO - HUAMALIES - MONZON","100508" => "HUANUCO - HUAMALIES - PUNCHAO","100509" => "HUANUCO - HUAMALIES - PUÑOS","100510" => "HUANUCO - HUAMALIES - SINGA","100511" => "HUANUCO - HUAMALIES - TANTAMAYO","100601" => "HUANUCO - LEONCIO PRADO - RUPA-RUPA","100602" => "HUANUCO - LEONCIO PRADO - DANIEL ALOMIA ROBLES","100603" => "HUANUCO - LEONCIO PRADO - HERMILIO VALDIZAN","100604" => "HUANUCO - LEONCIO PRADO - JOSE CRESPO Y CASTILLO","100605" => "HUANUCO - LEONCIO PRADO - LUYANDO","100606" => "HUANUCO - LEONCIO PRADO - MARIANO DAMASO BERAUN","100607" => "HUANUCO - LEONCIO PRADO - PUCAYACU","100608" => "HUANUCO - LEONCIO PRADO - CASTILLO GRANDE","100609" => "HUANUCO - LEONCIO PRADO - PUEBLO NUEVO","100610" => "HUANUCO - LEONCIO PRADO - SANTO DOMINGO DE ANDIA","100701" => "HUANUCO - MARAÑON - HUACRACHUCO","100702" => "HUANUCO - MARAÑON - CHOLON","100703" => "HUANUCO - MARAÑON - SAN BUENAVENTURA","100704" => "HUANUCO - MARAÑON - LA MORADA","100705" => "HUANUCO - MARAÑON - SANTA ROSA DE ALTO YANAJANCA","100801" => "HUANUCO - PACHITEA - PANAO","100802" => "HUANUCO - PACHITEA - CHAGLLA","100803" => "HUANUCO - PACHITEA - MOLINO","100804" => "HUANUCO - PACHITEA - UMARI","100901" => "HUANUCO - PUERTO INCA - PUERTO INCA","100902" => "HUANUCO - PUERTO INCA - CODO DEL POZUZO","100903" => "HUANUCO - PUERTO INCA - HONORIA","100904" => "HUANUCO - PUERTO INCA - TOURNAVISTA","100905" => "HUANUCO - PUERTO INCA - YUYAPICHIS","101001" => "HUANUCO - LAURICOCHA - JESUS","101002" => "HUANUCO - LAURICOCHA - BAÑOS","101003" => "HUANUCO - LAURICOCHA - JIVIA","101004" => "HUANUCO - LAURICOCHA - QUEROPALCA","101005" => "HUANUCO - LAURICOCHA - RONDOS","101006" => "HUANUCO - LAURICOCHA - SAN FRANCISCO DE ASIS","101007" => "HUANUCO - LAURICOCHA - SAN MIGUEL DE CAURI","101101" => "HUANUCO - YAROWILCA - CHAVINILLO","101102" => "HUANUCO - YAROWILCA - CAHUAC","101103" => "HUANUCO - YAROWILCA - CHACABAMBA","101104" => "HUANUCO - YAROWILCA - APARICIO POMARES","101105" => "HUANUCO - YAROWILCA - JACAS CHICO","101106" => "HUANUCO - YAROWILCA - OBAS","101107" => "HUANUCO - YAROWILCA - PAMPAMARCA","101108" => "HUANUCO - YAROWILCA - CHORAS",
        "110101" => "ICA - ICA - ICA","110102" => "ICA - ICA - LA TINGUIÑA","110103" => "ICA - ICA - LOS AQUIJES","110104" => "ICA - ICA - OCUCAJE","110105" => "ICA - ICA - PACHACUTEC","110106" => "ICA - ICA - PARCONA","110107" => "ICA - ICA - PUEBLO NUEVO","110108" => "ICA - ICA - SALAS","110109" => "ICA - ICA - SAN JOSE DE LOS MOLINOS","110110" => "ICA - ICA - SAN JUAN BAUTISTA","110111" => "ICA - ICA - SANTIAGO","110112" => "ICA - ICA - SUBTANJALLA","110113" => "ICA - ICA - TATE","110114" => "ICA - ICA - YAUCA DEL ROSARIO","110201" => "ICA - CHINCHA - CHINCHA ALTA","110202" => "ICA - CHINCHA - ALTO LARAN","110203" => "ICA - CHINCHA - CHAVIN","110204" => "ICA - CHINCHA - CHINCHA BAJA","110205" => "ICA - CHINCHA - EL CARMEN","110206" => "ICA - CHINCHA - GROCIO PRADO","110207" => "ICA - CHINCHA - PUEBLO NUEVO","110208" => "ICA - CHINCHA - SAN JUAN DE YANAC","110209" => "ICA - CHINCHA - SAN PEDRO DE HUACARPANA","110210" => "ICA - CHINCHA - SUNAMPE","110211" => "ICA - CHINCHA - TAMBO DE MORA","110301" => "ICA - NASCA - NASCA","110302" => "ICA - NASCA - CHANGUILLO","110303" => "ICA - NASCA - EL INGENIO","110304" => "ICA - NASCA - MARCONA","110305" => "ICA - NASCA - VISTA ALEGRE","110401" => "ICA - PALPA - PALPA","110402" => "ICA - PALPA - LLIPATA","110403" => "ICA - PALPA - RIO GRANDE","110404" => "ICA - PALPA - SANTA CRUZ","110405" => "ICA - PALPA - TIBILLO","110501" => "ICA - PISCO - PISCO","110502" => "ICA - PISCO - HUANCANO","110503" => "ICA - PISCO - HUMAY","110504" => "ICA - PISCO - INDEPENDENCIA","110505" => "ICA - PISCO - PARACAS","110506" => "ICA - PISCO - SAN ANDRES","110507" => "ICA - PISCO - SAN CLEMENTE","110508" => "ICA - PISCO - TUPAC AMARU INCA",
        "120101" => "JUNIN - HUANCAYO - HUANCAYO","120104" => "JUNIN - HUANCAYO - CARHUACALLANGA","120105" => "JUNIN - HUANCAYO - CHACAPAMPA","120106" => "JUNIN - HUANCAYO - CHICCHE","120107" => "JUNIN - HUANCAYO - CHILCA","120108" => "JUNIN - HUANCAYO - CHONGOS ALTO","120111" => "JUNIN - HUANCAYO - CHUPURO","120112" => "JUNIN - HUANCAYO - COLCA","120113" => "JUNIN - HUANCAYO - CULLHUAS","120114" => "JUNIN - HUANCAYO - EL TAMBO","120116" => "JUNIN - HUANCAYO - HUACRAPUQUIO","120117" => "JUNIN - HUANCAYO - HUALHUAS","120119" => "JUNIN - HUANCAYO - HUANCAN","120120" => "JUNIN - HUANCAYO - HUASICANCHA","120121" => "JUNIN - HUANCAYO - HUAYUCACHI","120122" => "JUNIN - HUANCAYO - INGENIO","120124" => "JUNIN - HUANCAYO - PARIAHUANCA","120125" => "JUNIN - HUANCAYO - PILCOMAYO","120126" => "JUNIN - HUANCAYO - PUCARA","120127" => "JUNIN - HUANCAYO - QUICHUAY","120128" => "JUNIN - HUANCAYO - QUILCAS","120129" => "JUNIN - HUANCAYO - SAN AGUSTIN","120130" => "JUNIN - HUANCAYO - SAN JERONIMO DE TUNAN","120132" => "JUNIN - HUANCAYO - SAÑO","120133" => "JUNIN - HUANCAYO - SAPALLANGA","120134" => "JUNIN - HUANCAYO - SICAYA","120135" => "JUNIN - HUANCAYO - SANTO DOMINGO DE ACOBAMBA","120136" => "JUNIN - HUANCAYO - VIQUES","120201" => "JUNIN - CONCEPCION - CONCEPCION","120202" => "JUNIN - CONCEPCION - ACO","120203" => "JUNIN - CONCEPCION - ANDAMARCA","120204" => "JUNIN - CONCEPCION - CHAMBARA","120205" => "JUNIN - CONCEPCION - COCHAS","120206" => "JUNIN - CONCEPCION - COMAS","120207" => "JUNIN - CONCEPCION - HEROINAS TOLEDO","120208" => "JUNIN - CONCEPCION - MANZANARES","120209" => "JUNIN - CONCEPCION - MARISCAL CASTILLA","120210" => "JUNIN - CONCEPCION - MATAHUASI","120211" => "JUNIN - CONCEPCION - MITO","120212" => "JUNIN - CONCEPCION - NUEVE DE JULIO","120213" => "JUNIN - CONCEPCION - ORCOTUNA","120214" => "JUNIN - CONCEPCION - SAN JOSE DE QUERO","120215" => "JUNIN - CONCEPCION - SANTA ROSA DE OCOPA","120301" => "JUNIN - CHANCHAMAYO - CHANCHAMAYO","120302" => "JUNIN - CHANCHAMAYO - PERENE","120303" => "JUNIN - CHANCHAMAYO - PICHANAQUI","120304" => "JUNIN - CHANCHAMAYO - SAN LUIS DE SHUARO","120305" => "JUNIN - CHANCHAMAYO - SAN RAMON","120306" => "JUNIN - CHANCHAMAYO - VITOC","120401" => "JUNIN - JAUJA - JAUJA","120402" => "JUNIN - JAUJA - ACOLLA","120403" => "JUNIN - JAUJA - APATA","120404" => "JUNIN - JAUJA - ATAURA","120405" => "JUNIN - JAUJA - CANCHAYLLO","120406" => "JUNIN - JAUJA - CURICACA","120407" => "JUNIN - JAUJA - EL MANTARO","120408" => "JUNIN - JAUJA - HUAMALI","120409" => "JUNIN - JAUJA - HUARIPAMPA","120410" => "JUNIN - JAUJA - HUERTAS","120411" => "JUNIN - JAUJA - JANJAILLO","120412" => "JUNIN - JAUJA - JULCAN","120413" => "JUNIN - JAUJA - LEONOR ORDOÑEZ","120414" => "JUNIN - JAUJA - LLOCLLAPAMPA","120415" => "JUNIN - JAUJA - MARCO","120416" => "JUNIN - JAUJA - MASMA","120417" => "JUNIN - JAUJA - MASMA CHICCHE","120418" => "JUNIN - JAUJA - MOLINOS","120419" => "JUNIN - JAUJA - MONOBAMBA","120420" => "JUNIN - JAUJA - MUQUI","120421" => "JUNIN - JAUJA - MUQUIYAUYO","120422" => "JUNIN - JAUJA - PACA","120423" => "JUNIN - JAUJA - PACCHA","120424" => "JUNIN - JAUJA - PANCAN","120425" => "JUNIN - JAUJA - PARCO","120426" => "JUNIN - JAUJA - POMACANCHA","120427" => "JUNIN - JAUJA - RICRAN","120428" => "JUNIN - JAUJA - SAN LORENZO","120429" => "JUNIN - JAUJA - SAN PEDRO DE CHUNAN","120430" => "JUNIN - JAUJA - SAUSA","120431" => "JUNIN - JAUJA - SINCOS","120432" => "JUNIN - JAUJA - TUNAN MARCA","120433" => "JUNIN - JAUJA - YAULI","120434" => "JUNIN - JAUJA - YAUYOS","120501" => "JUNIN - JUNIN - JUNIN","120502" => "JUNIN - JUNIN - CARHUAMAYO","120503" => "JUNIN - JUNIN - ONDORES","120504" => "JUNIN - JUNIN - ULCUMAYO","120601" => "JUNIN - SATIPO - SATIPO","120602" => "JUNIN - SATIPO - COVIRIALI","120603" => "JUNIN - SATIPO - LLAYLLA","120604" => "JUNIN - SATIPO - MAZAMARI","120605" => "JUNIN - SATIPO - PAMPA HERMOSA","120606" => "JUNIN - SATIPO - PANGOA","120607" => "JUNIN - SATIPO - RIO NEGRO","120608" => "JUNIN - SATIPO - RIO TAMBO","120609" => "JUNIN - SATIPO - VIZCATAN DEL ENE","120701" => "JUNIN - TARMA - TARMA","120702" => "JUNIN - TARMA - ACOBAMBA","120703" => "JUNIN - TARMA - HUARICOLCA","120704" => "JUNIN - TARMA - HUASAHUASI","120705" => "JUNIN - TARMA - LA UNION","120706" => "JUNIN - TARMA - PALCA","120707" => "JUNIN - TARMA - PALCAMAYO","120708" => "JUNIN - TARMA - SAN PEDRO DE CAJAS","120709" => "JUNIN - TARMA - TAPO","120801" => "JUNIN - YAULI - LA OROYA","120802" => "JUNIN - YAULI - CHACAPALPA","120803" => "JUNIN - YAULI - HUAY-HUAY","120804" => "JUNIN - YAULI - MARCAPOMACOCHA","120805" => "JUNIN - YAULI - MOROCOCHA","120806" => "JUNIN - YAULI - PACCHA","120807" => "JUNIN - YAULI - SANTA BARBARA DE CARHUACAYAN","120808" => "JUNIN - YAULI - SANTA ROSA DE SACCO","120809" => "JUNIN - YAULI - SUITUCANCHA","120810" => "JUNIN - YAULI - YAULI","120901" => "JUNIN - CHUPACA - CHUPACA","120902" => "JUNIN - CHUPACA - AHUAC","120903" => "JUNIN - CHUPACA - CHONGOS BAJO","120904" => "JUNIN - CHUPACA - HUACHAC","120905" => "JUNIN - CHUPACA - HUAMANCACA CHICO","120906" => "JUNIN - CHUPACA - SAN JUAN DE ISCOS","120907" => "JUNIN - CHUPACA - SAN JUAN DE JARPA","120908" => "JUNIN - CHUPACA - TRES DE DICIEMBRE","120909" => "JUNIN - CHUPACA - YANACANCHA",
        "130101" => "LA LIBERTAD - TRUJILLO - TRUJILLO","130102" => "LA LIBERTAD - TRUJILLO - EL PORVENIR","130103" => "LA LIBERTAD - TRUJILLO - FLORENCIA DE MORA","130104" => "LA LIBERTAD - TRUJILLO - HUANCHACO","130105" => "LA LIBERTAD - TRUJILLO - LA ESPERANZA","130106" => "LA LIBERTAD - TRUJILLO - LAREDO","130107" => "LA LIBERTAD - TRUJILLO - MOCHE","130108" => "LA LIBERTAD - TRUJILLO - POROTO","130109" => "LA LIBERTAD - TRUJILLO - SALAVERRY","130110" => "LA LIBERTAD - TRUJILLO - SIMBAL","130111" => "LA LIBERTAD - TRUJILLO - VICTOR LARCO HERRERA","130201" => "LA LIBERTAD - ASCOPE - ASCOPE","130202" => "LA LIBERTAD - ASCOPE - CHICAMA","130203" => "LA LIBERTAD - ASCOPE - CHOCOPE","130204" => "LA LIBERTAD - ASCOPE - MAGDALENA DE CAO","130205" => "LA LIBERTAD - ASCOPE - PAIJAN","130206" => "LA LIBERTAD - ASCOPE - RAZURI","130207" => "LA LIBERTAD - ASCOPE - SANTIAGO DE CAO","130208" => "LA LIBERTAD - ASCOPE - CASA GRANDE","130301" => "LA LIBERTAD - BOLIVAR - BOLIVAR","130302" => "LA LIBERTAD - BOLIVAR - BAMBAMARCA","130303" => "LA LIBERTAD - BOLIVAR - CONDORMARCA","130304" => "LA LIBERTAD - BOLIVAR - LONGOTEA","130305" => "LA LIBERTAD - BOLIVAR - UCHUMARCA","130306" => "LA LIBERTAD - BOLIVAR - UCUNCHA","130401" => "LA LIBERTAD - CHEPEN - CHEPEN","130402" => "LA LIBERTAD - CHEPEN - PACANGA","130403" => "LA LIBERTAD - CHEPEN - PUEBLO NUEVO","130501" => "LA LIBERTAD - JULCAN - JULCAN","130502" => "LA LIBERTAD - JULCAN - CALAMARCA","130503" => "LA LIBERTAD - JULCAN - CARABAMBA","130504" => "LA LIBERTAD - JULCAN - HUASO","130601" => "LA LIBERTAD - OTUZCO - OTUZCO","130602" => "LA LIBERTAD - OTUZCO - AGALLPAMPA","130604" => "LA LIBERTAD - OTUZCO - CHARAT","130605" => "LA LIBERTAD - OTUZCO - HUARANCHAL","130606" => "LA LIBERTAD - OTUZCO - LA CUESTA","130608" => "LA LIBERTAD - OTUZCO - MACHE","130610" => "LA LIBERTAD - OTUZCO - PARANDAY","130611" => "LA LIBERTAD - OTUZCO - SALPO","130613" => "LA LIBERTAD - OTUZCO - SINSICAP","130614" => "LA LIBERTAD - OTUZCO - USQUIL","130701" => "LA LIBERTAD - PACASMAYO - SAN PEDRO DE LLOC","130702" => "LA LIBERTAD - PACASMAYO - GUADALUPE","130703" => "LA LIBERTAD - PACASMAYO - JEQUETEPEQUE","130704" => "LA LIBERTAD - PACASMAYO - PACASMAYO","130705" => "LA LIBERTAD - PACASMAYO - SAN JOSE","130801" => "LA LIBERTAD - PATAZ - TAYABAMBA","130802" => "LA LIBERTAD - PATAZ - BULDIBUYO","130803" => "LA LIBERTAD - PATAZ - CHILLIA","130804" => "LA LIBERTAD - PATAZ - HUANCASPATA","130805" => "LA LIBERTAD - PATAZ - HUAYLILLAS","130806" => "LA LIBERTAD - PATAZ - HUAYO","130807" => "LA LIBERTAD - PATAZ - ONGON","130808" => "LA LIBERTAD - PATAZ - PARCOY","130809" => "LA LIBERTAD - PATAZ - PATAZ","130810" => "LA LIBERTAD - PATAZ - PIAS","130811" => "LA LIBERTAD - PATAZ - SANTIAGO DE CHALLAS","130812" => "LA LIBERTAD - PATAZ - TAURIJA","130813" => "LA LIBERTAD - PATAZ - URPAY","130901" => "LA LIBERTAD - SANCHEZ CARRION - HUAMACHUCO","130902" => "LA LIBERTAD - SANCHEZ CARRION - CHUGAY","130903" => "LA LIBERTAD - SANCHEZ CARRION - COCHORCO","130904" => "LA LIBERTAD - SANCHEZ CARRION - CURGOS","130905" => "LA LIBERTAD - SANCHEZ CARRION - MARCABAL","130906" => "LA LIBERTAD - SANCHEZ CARRION - SANAGORAN","130907" => "LA LIBERTAD - SANCHEZ CARRION - SARIN","130908" => "LA LIBERTAD - SANCHEZ CARRION - SARTIMBAMBA","131001" => "LA LIBERTAD - SANTIAGO DE CHUCO - SANTIAGO DE CHUCO","131002" => "LA LIBERTAD - SANTIAGO DE CHUCO - ANGASMARCA","131003" => "LA LIBERTAD - SANTIAGO DE CHUCO - CACHICADAN","131004" => "LA LIBERTAD - SANTIAGO DE CHUCO - MOLLEBAMBA","131005" => "LA LIBERTAD - SANTIAGO DE CHUCO - MOLLEPATA","131006" => "LA LIBERTAD - SANTIAGO DE CHUCO - QUIRUVILCA","131007" => "LA LIBERTAD - SANTIAGO DE CHUCO - SANTA CRUZ DE CHUCA","131008" => "LA LIBERTAD - SANTIAGO DE CHUCO - SITABAMBA","131101" => "LA LIBERTAD - GRAN CHIMU - CASCAS","131102" => "LA LIBERTAD - GRAN CHIMU - LUCMA","131103" => "LA LIBERTAD - GRAN CHIMU - MARMOT","131104" => "LA LIBERTAD - GRAN CHIMU - SAYAPULLO","131201" => "LA LIBERTAD - VIRU - VIRU","131202" => "LA LIBERTAD - VIRU - CHAO","131203" => "LA LIBERTAD - VIRU - GUADALUPITO",
        "140101" => "LAMBAYEQUE - CHICLAYO - CHICLAYO","140102" => "LAMBAYEQUE - CHICLAYO - CHONGOYAPE","140103" => "LAMBAYEQUE - CHICLAYO - ETEN","140104" => "LAMBAYEQUE - CHICLAYO - ETEN PUERTO","140105" => "LAMBAYEQUE - CHICLAYO - JOSE LEONARDO ORTIZ","140106" => "LAMBAYEQUE - CHICLAYO - LA VICTORIA","140107" => "LAMBAYEQUE - CHICLAYO - LAGUNAS","140108" => "LAMBAYEQUE - CHICLAYO - MONSEFU","140109" => "LAMBAYEQUE - CHICLAYO - NUEVA ARICA","140110" => "LAMBAYEQUE - CHICLAYO - OYOTUN","140111" => "LAMBAYEQUE - CHICLAYO - PICSI","140112" => "LAMBAYEQUE - CHICLAYO - PIMENTEL","140113" => "LAMBAYEQUE - CHICLAYO - REQUE","140114" => "LAMBAYEQUE - CHICLAYO - SANTA ROSA","140115" => "LAMBAYEQUE - CHICLAYO - SAÑA","140116" => "LAMBAYEQUE - CHICLAYO - CAYALTI","140117" => "LAMBAYEQUE - CHICLAYO - PATAPO","140118" => "LAMBAYEQUE - CHICLAYO - POMALCA","140119" => "LAMBAYEQUE - CHICLAYO - PUCALA","140120" => "LAMBAYEQUE - CHICLAYO - TUMAN","140201" => "LAMBAYEQUE - FERREÑAFE - FERREÑAFE","140202" => "LAMBAYEQUE - FERREÑAFE - CAÑARIS","140203" => "LAMBAYEQUE - FERREÑAFE - INCAHUASI","140204" => "LAMBAYEQUE - FERREÑAFE - MANUEL ANTONIO MESONES MURO","140205" => "LAMBAYEQUE - FERREÑAFE - PITIPO","140206" => "LAMBAYEQUE - FERREÑAFE - PUEBLO NUEVO","140301" => "LAMBAYEQUE - LAMBAYEQUE - LAMBAYEQUE","140302" => "LAMBAYEQUE - LAMBAYEQUE - CHOCHOPE","140303" => "LAMBAYEQUE - LAMBAYEQUE - ILLIMO","140304" => "LAMBAYEQUE - LAMBAYEQUE - JAYANCA","140305" => "LAMBAYEQUE - LAMBAYEQUE - MOCHUMI","140306" => "LAMBAYEQUE - LAMBAYEQUE - MORROPE","140307" => "LAMBAYEQUE - LAMBAYEQUE - MOTUPE","140308" => "LAMBAYEQUE - LAMBAYEQUE - OLMOS","140309" => "LAMBAYEQUE - LAMBAYEQUE - PACORA","140310" => "LAMBAYEQUE - LAMBAYEQUE - SALAS","140311" => "LAMBAYEQUE - LAMBAYEQUE - SAN JOSE","140312" => "LAMBAYEQUE - LAMBAYEQUE - TUCUME",
        "150101" => "LIMA - LIMA - LIMA","150102" => "LIMA - LIMA - ANCON","150103" => "LIMA - LIMA - ATE","150104" => "LIMA - LIMA - BARRANCO","150105" => "LIMA - LIMA - BREÑA","150106" => "LIMA - LIMA - CARABAYLLO","150107" => "LIMA - LIMA - CHACLACAYO","150108" => "LIMA - LIMA - CHORRILLOS","150109" => "LIMA - LIMA - CIENEGUILLA","150110" => "LIMA - LIMA - COMAS","150111" => "LIMA - LIMA - EL AGUSTINO","150112" => "LIMA - LIMA - INDEPENDENCIA","150113" => "LIMA - LIMA - JESUS MARIA","150114" => "LIMA - LIMA - LA MOLINA","150115" => "LIMA - LIMA - LA VICTORIA","150116" => "LIMA - LIMA - LINCE","150117" => "LIMA - LIMA - LOS OLIVOS","150118" => "LIMA - LIMA - LURIGANCHO","150119" => "LIMA - LIMA - LURIN","150120" => "LIMA - LIMA - MAGDALENA DEL MAR","150121" => "LIMA - LIMA - PUEBLO LIBRE","150122" => "LIMA - LIMA - MIRAFLORES","150123" => "LIMA - LIMA - PACHACAMAC","150124" => "LIMA - LIMA - PUCUSANA","150125" => "LIMA - LIMA - PUENTE PIEDRA","150126" => "LIMA - LIMA - PUNTA HERMOSA","150127" => "LIMA - LIMA - PUNTA NEGRA","150128" => "LIMA - LIMA - RIMAC","150129" => "LIMA - LIMA - SAN BARTOLO","150130" => "LIMA - LIMA - SAN BORJA","150131" => "LIMA - LIMA - SAN ISIDRO","150132" => "LIMA - LIMA - SAN JUAN DE LURIGANCHO","150133" => "LIMA - LIMA - SAN JUAN DE MIRAFLORES","150134" => "LIMA - LIMA - SAN LUIS","150135" => "LIMA - LIMA - SAN MARTIN DE PORRES","150136" => "LIMA - LIMA - SAN MIGUEL","150137" => "LIMA - LIMA - SANTA ANITA","150138" => "LIMA - LIMA - SANTA MARIA DEL MAR","150139" => "LIMA - LIMA - SANTA ROSA","150140" => "LIMA - LIMA - SANTIAGO DE SURCO","150141" => "LIMA - LIMA - SURQUILLO","150142" => "LIMA - LIMA - VILLA EL SALVADOR","150143" => "LIMA - LIMA - VILLA MARIA DEL TRIUNFO","150201" => "LIMA - BARRANCA - BARRANCA","150202" => "LIMA - BARRANCA - PARAMONGA","150203" => "LIMA - BARRANCA - PATIVILCA","150204" => "LIMA - BARRANCA - SUPE","150205" => "LIMA - BARRANCA - SUPE PUERTO","150301" => "LIMA - CAJATAMBO - CAJATAMBO","150302" => "LIMA - CAJATAMBO - COPA","150303" => "LIMA - CAJATAMBO - GORGOR","150304" => "LIMA - CAJATAMBO - HUANCAPON","150305" => "LIMA - CAJATAMBO - MANAS","150401" => "LIMA - CANTA - CANTA","150402" => "LIMA - CANTA - ARAHUAY","150403" => "LIMA - CANTA - HUAMANTANGA","150404" => "LIMA - CANTA - HUAROS","150405" => "LIMA - CANTA - LACHAQUI","150406" => "LIMA - CANTA - SAN BUENAVENTURA","150407" => "LIMA - CANTA - SANTA ROSA DE QUIVES","150501" => "LIMA - CAÑETE - SAN VICENTE DE CAÑETE","150502" => "LIMA - CAÑETE - ASIA","150503" => "LIMA - CAÑETE - CALANGO","150504" => "LIMA - CAÑETE - CERRO AZUL","150505" => "LIMA - CAÑETE - CHILCA","150506" => "LIMA - CAÑETE - COAYLLO","150507" => "LIMA - CAÑETE - IMPERIAL","150508" => "LIMA - CAÑETE - LUNAHUANA","150509" => "LIMA - CAÑETE - MALA","150510" => "LIMA - CAÑETE - NUEVO IMPERIAL","150511" => "LIMA - CAÑETE - PACARAN","150512" => "LIMA - CAÑETE - QUILMANA","150513" => "LIMA - CAÑETE - SAN ANTONIO","150514" => "LIMA - CAÑETE - SAN LUIS","150515" => "LIMA - CAÑETE - SANTA CRUZ DE FLORES","150516" => "LIMA - CAÑETE - ZUÑIGA","150601" => "LIMA - HUARAL - HUARAL","150602" => "LIMA - HUARAL - ATAVILLOS ALTO","150603" => "LIMA - HUARAL - ATAVILLOS BAJO","150604" => "LIMA - HUARAL - AUCALLAMA","150605" => "LIMA - HUARAL - CHANCAY","150606" => "LIMA - HUARAL - IHUARI","150607" => "LIMA - HUARAL - LAMPIAN","150608" => "LIMA - HUARAL - PACARAOS","150609" => "LIMA - HUARAL - SAN MIGUEL DE ACOS","150610" => "LIMA - HUARAL - SANTA CRUZ DE ANDAMARCA","150611" => "LIMA - HUARAL - SUMBILCA","150612" => "LIMA - HUARAL - VEINTISIETE DE NOVIEMBRE","150701" => "LIMA - HUAROCHIRI - MATUCANA","150702" => "LIMA - HUAROCHIRI - ANTIOQUIA","150703" => "LIMA - HUAROCHIRI - CALLAHUANCA","150704" => "LIMA - HUAROCHIRI - CARAMPOMA","150705" => "LIMA - HUAROCHIRI - CHICLA","150706" => "LIMA - HUAROCHIRI - CUENCA","150707" => "LIMA - HUAROCHIRI - HUACHUPAMPA","150708" => "LIMA - HUAROCHIRI - HUANZA","150709" => "LIMA - HUAROCHIRI - HUAROCHIRI","150710" => "LIMA - HUAROCHIRI - LAHUAYTAMBO","150711" => "LIMA - HUAROCHIRI - LANGA","150712" => "LIMA - HUAROCHIRI - SAN PEDRO DE LARAOS","150713" => "LIMA - HUAROCHIRI - MARIATANA","150714" => "LIMA - HUAROCHIRI - RICARDO PALMA","150715" => "LIMA - HUAROCHIRI - SAN ANDRES DE TUPICOCHA","150716" => "LIMA - HUAROCHIRI - SAN ANTONIO","150717" => "LIMA - HUAROCHIRI - SAN BARTOLOME","150718" => "LIMA - HUAROCHIRI - SAN DAMIAN","150719" => "LIMA - HUAROCHIRI - SAN JUAN DE IRIS","150720" => "LIMA - HUAROCHIRI - SAN JUAN DE TANTARANCHE","150721" => "LIMA - HUAROCHIRI - SAN LORENZO DE QUINTI","150722" => "LIMA - HUAROCHIRI - SAN MATEO","150723" => "LIMA - HUAROCHIRI - SAN MATEO DE OTAO","150724" => "LIMA - HUAROCHIRI - SAN PEDRO DE CASTA","150725" => "LIMA - HUAROCHIRI - SAN PEDRO DE HUANCAYRE","150726" => "LIMA - HUAROCHIRI - SANGALLAYA","150727" => "LIMA - HUAROCHIRI - SANTA CRUZ DE COCACHACRA","150728" => "LIMA - HUAROCHIRI - SANTA EULALIA","150729" => "LIMA - HUAROCHIRI - SANTIAGO DE ANCHUCAYA","150730" => "LIMA - HUAROCHIRI - SANTIAGO DE TUNA","150731" => "LIMA - HUAROCHIRI - SANTO DOMINGO DE LOS OLLEROS","150732" => "LIMA - HUAROCHIRI - SURCO","150801" => "LIMA - HUAURA - HUACHO","150802" => "LIMA - HUAURA - AMBAR","150803" => "LIMA - HUAURA - CALETA DE CARQUIN","150804" => "LIMA - HUAURA - CHECRAS","150805" => "LIMA - HUAURA - HUALMAY","150806" => "LIMA - HUAURA - HUAURA","150807" => "LIMA - HUAURA - LEONCIO PRADO","150808" => "LIMA - HUAURA - PACCHO","150809" => "LIMA - HUAURA - SANTA LEONOR","150810" => "LIMA - HUAURA - SANTA MARIA","150811" => "LIMA - HUAURA - SAYAN","150812" => "LIMA - HUAURA - VEGUETA","150901" => "LIMA - OYON - OYON","150902" => "LIMA - OYON - ANDAJES","150903" => "LIMA - OYON - CAUJUL","150904" => "LIMA - OYON - COCHAMARCA","150905" => "LIMA - OYON - NAVAN","150906" => "LIMA - OYON - PACHANGARA","151001" => "LIMA - YAUYOS - YAUYOS","151002" => "LIMA - YAUYOS - ALIS","151003" => "LIMA - YAUYOS - ALLAUCA","151004" => "LIMA - YAUYOS - AYAVIRI","151005" => "LIMA - YAUYOS - AZANGARO","151006" => "LIMA - YAUYOS - CACRA","151007" => "LIMA - YAUYOS - CARANIA","151008" => "LIMA - YAUYOS - CATAHUASI","151009" => "LIMA - YAUYOS - CHOCOS","151010" => "LIMA - YAUYOS - COCHAS","151011" => "LIMA - YAUYOS - COLONIA","151012" => "LIMA - YAUYOS - HONGOS","151013" => "LIMA - YAUYOS - HUAMPARA","151014" => "LIMA - YAUYOS - HUANCAYA","151015" => "LIMA - YAUYOS - HUANGASCAR","151016" => "LIMA - YAUYOS - HUANTAN","151017" => "LIMA - YAUYOS - HUAÑEC","151018" => "LIMA - YAUYOS - LARAOS","151019" => "LIMA - YAUYOS - LINCHA","151020" => "LIMA - YAUYOS - MADEAN","151021" => "LIMA - YAUYOS - MIRAFLORES","151022" => "LIMA - YAUYOS - OMAS","151023" => "LIMA - YAUYOS - PUTINZA","151024" => "LIMA - YAUYOS - QUINCHES","151025" => "LIMA - YAUYOS - QUINOCAY","151026" => "LIMA - YAUYOS - SAN JOAQUIN","151027" => "LIMA - YAUYOS - SAN PEDRO DE PILAS","151028" => "LIMA - YAUYOS - TANTA","151029" => "LIMA - YAUYOS - TAURIPAMPA","151030" => "LIMA - YAUYOS - TOMAS","151031" => "LIMA - YAUYOS - TUPE","151032" => "LIMA - YAUYOS - VIÑAC","151033" => "LIMA - YAUYOS - VITIS",
        "160101" => "LORETO - MAYNAS - IQUITOS","160102" => "LORETO - MAYNAS - ALTO NANAY","160103" => "LORETO - MAYNAS - FERNANDO LORES","160104" => "LORETO - MAYNAS - INDIANA","160105" => "LORETO - MAYNAS - LAS AMAZONAS","160106" => "LORETO - MAYNAS - MAZAN","160107" => "LORETO - MAYNAS - NAPO","160108" => "LORETO - MAYNAS - PUNCHANA","160110" => "LORETO - MAYNAS - TORRES CAUSANA","160112" => "LORETO - MAYNAS - BELEN","160113" => "LORETO - MAYNAS - SAN JUAN BAUTISTA","160201" => "LORETO - ALTO AMAZONAS - YURIMAGUAS","160202" => "LORETO - ALTO AMAZONAS - BALSAPUERTO","160205" => "LORETO - ALTO AMAZONAS - JEBEROS","160206" => "LORETO - ALTO AMAZONAS - LAGUNAS","160210" => "LORETO - ALTO AMAZONAS - SANTA CRUZ","160211" => "LORETO - ALTO AMAZONAS - TENIENTE CESAR LOPEZ ROJAS","160301" => "LORETO - LORETO - NAUTA","160302" => "LORETO - LORETO - PARINARI","160303" => "LORETO - LORETO - TIGRE","160304" => "LORETO - LORETO - TROMPETEROS","160305" => "LORETO - LORETO - URARINAS","160401" => "LORETO - MARISCAL RAMON CASTILLA - RAMON CASTILLA","160402" => "LORETO - MARISCAL RAMON CASTILLA - PEBAS","160403" => "LORETO - MARISCAL RAMON CASTILLA - YAVARI","160404" => "LORETO - MARISCAL RAMON CASTILLA - SAN PABLO","160501" => "LORETO - REQUENA - REQUENA","160502" => "LORETO - REQUENA - ALTO TAPICHE","160503" => "LORETO - REQUENA - CAPELO","160504" => "LORETO - REQUENA - EMILIO SAN MARTIN","160505" => "LORETO - REQUENA - MAQUIA","160506" => "LORETO - REQUENA - PUINAHUA","160507" => "LORETO - REQUENA - SAQUENA","160508" => "LORETO - REQUENA - SOPLIN","160509" => "LORETO - REQUENA - TAPICHE","160510" => "LORETO - REQUENA - JENARO HERRERA","160511" => "LORETO - REQUENA - YAQUERANA","160601" => "LORETO - UCAYALI - CONTAMANA","160602" => "LORETO - UCAYALI - INAHUAYA","160603" => "LORETO - UCAYALI - PADRE MARQUEZ","160604" => "LORETO - UCAYALI - PAMPA HERMOSA","160605" => "LORETO - UCAYALI - SARAYACU","160606" => "LORETO - UCAYALI - VARGAS GUERRA","160701" => "LORETO - DATEM DEL MARAÑON - BARRANCA","160702" => "LORETO - DATEM DEL MARAÑON - CAHUAPANAS","160703" => "LORETO - DATEM DEL MARAÑON - MANSERICHE","160704" => "LORETO - DATEM DEL MARAÑON - MORONA","160705" => "LORETO - DATEM DEL MARAÑON - PASTAZA","160706" => "LORETO - DATEM DEL MARAÑON - ANDOAS","160801" => "LORETO - PUTUMAYO - PUTUMAYO","160802" => "LORETO - PUTUMAYO - ROSA PANDURO","160803" => "LORETO - PUTUMAYO - TENIENTE MANUEL CLAVERO","160804" => "LORETO - PUTUMAYO - YAGUAS",
        "170101" => "MADRE DE DIOS - TAMBOPATA - TAMBOPATA","170102" => "MADRE DE DIOS - TAMBOPATA - INAMBARI","170103" => "MADRE DE DIOS - TAMBOPATA - LAS PIEDRAS","170104" => "MADRE DE DIOS - TAMBOPATA - LABERINTO","170201" => "MADRE DE DIOS - MANU - MANU","170202" => "MADRE DE DIOS - MANU - FITZCARRALD","170203" => "MADRE DE DIOS - MANU - MADRE DE DIOS","170204" => "MADRE DE DIOS - MANU - HUEPETUHE","170301" => "MADRE DE DIOS - TAHUAMANU - IÑAPARI","170302" => "MADRE DE DIOS - TAHUAMANU - IBERIA","170303" => "MADRE DE DIOS - TAHUAMANU - TAHUAMANU",
        "180101" => "MOQUEGUA - MARISCAL NIETO - MOQUEGUA","180102" => "MOQUEGUA - MARISCAL NIETO - CARUMAS","180103" => "MOQUEGUA - MARISCAL NIETO - CUCHUMBAYA","180104" => "MOQUEGUA - MARISCAL NIETO - SAMEGUA","180105" => "MOQUEGUA - MARISCAL NIETO - SAN CRISTOBAL","180106" => "MOQUEGUA - MARISCAL NIETO - TORATA","180201" => "MOQUEGUA - GENERAL SANCHEZ CERRO - OMATE","180202" => "MOQUEGUA - GENERAL SANCHEZ CERRO - CHOJATA","180203" => "MOQUEGUA - GENERAL SANCHEZ CERRO - COALAQUE","180204" => "MOQUEGUA - GENERAL SANCHEZ CERRO - ICHUÑA","180205" => "MOQUEGUA - GENERAL SANCHEZ CERRO - LA CAPILLA","180206" => "MOQUEGUA - GENERAL SANCHEZ CERRO - LLOQUE","180207" => "MOQUEGUA - GENERAL SANCHEZ CERRO - MATALAQUE","180208" => "MOQUEGUA - GENERAL SANCHEZ CERRO - PUQUINA","180209" => "MOQUEGUA - GENERAL SANCHEZ CERRO - QUINISTAQUILLAS","180210" => "MOQUEGUA - GENERAL SANCHEZ CERRO - UBINAS","180211" => "MOQUEGUA - GENERAL SANCHEZ CERRO - YUNGA","180301" => "MOQUEGUA - ILO - ILO","180302" => "MOQUEGUA - ILO - EL ALGARROBAL","180303" => "MOQUEGUA - ILO - PACOCHA",
        "190101" => "PASCO - PASCO - CHAUPIMARCA","190102" => "PASCO - PASCO - HUACHON","190103" => "PASCO - PASCO - HUARIACA","190104" => "PASCO - PASCO - HUAYLLAY","190105" => "PASCO - PASCO - NINACACA","190106" => "PASCO - PASCO - PALLANCHACRA","190107" => "PASCO - PASCO - PAUCARTAMBO","190108" => "PASCO - PASCO - SAN FRANCISCO DE ASIS DE YARUSYACAN","190109" => "PASCO - PASCO - SIMON BOLIVAR","190110" => "PASCO - PASCO - TICLACAYAN","190111" => "PASCO - PASCO - TINYAHUARCO","190112" => "PASCO - PASCO - VICCO","190113" => "PASCO - PASCO - YANACANCHA","190201" => "PASCO - DANIEL ALCIDES CARRION - YANAHUANCA","190202" => "PASCO - DANIEL ALCIDES CARRION - CHACAYAN","190203" => "PASCO - DANIEL ALCIDES CARRION - GOYLLARISQUIZGA","190204" => "PASCO - DANIEL ALCIDES CARRION - PAUCAR","190205" => "PASCO - DANIEL ALCIDES CARRION - SAN PEDRO DE PILLAO","190206" => "PASCO - DANIEL ALCIDES CARRION - SANTA ANA DE TUSI","190207" => "PASCO - DANIEL ALCIDES CARRION - TAPUC","190208" => "PASCO - DANIEL ALCIDES CARRION - VILCABAMBA","190301" => "PASCO - OXAPAMPA - OXAPAMPA","190302" => "PASCO - OXAPAMPA - CHONTABAMBA","190303" => "PASCO - OXAPAMPA - HUANCABAMBA","190304" => "PASCO - OXAPAMPA - PALCAZU","190305" => "PASCO - OXAPAMPA - POZUZO","190306" => "PASCO - OXAPAMPA - PUERTO BERMUDEZ","190307" => "PASCO - OXAPAMPA - VILLA RICA","190308" => "PASCO - OXAPAMPA - CONSTITUCION",
        "200101" => "PIURA - PIURA - PIURA","200104" => "PIURA - PIURA - CASTILLA","200105" => "PIURA - PIURA - CATACAOS","200107" => "PIURA - PIURA - CURA MORI","200108" => "PIURA - PIURA - EL TALLAN","200109" => "PIURA - PIURA - LA ARENA","200110" => "PIURA - PIURA - LA UNION","200111" => "PIURA - PIURA - LAS LOMAS","200114" => "PIURA - PIURA - TAMBO GRANDE","200115" => "PIURA - PIURA - VEINTISEIS DE OCTUBRE","200201" => "PIURA - AYABACA - AYABACA","200202" => "PIURA - AYABACA - FRIAS","200203" => "PIURA - AYABACA - JILILI","200204" => "PIURA - AYABACA - LAGUNAS","200205" => "PIURA - AYABACA - MONTERO","200206" => "PIURA - AYABACA - PACAIPAMPA","200207" => "PIURA - AYABACA - PAIMAS","200208" => "PIURA - AYABACA - SAPILLICA","200209" => "PIURA - AYABACA - SICCHEZ","200210" => "PIURA - AYABACA - SUYO","200301" => "PIURA - HUANCABAMBA - HUANCABAMBA","200302" => "PIURA - HUANCABAMBA - CANCHAQUE","200303" => "PIURA - HUANCABAMBA - EL CARMEN DE LA FRONTERA","200304" => "PIURA - HUANCABAMBA - HUARMACA","200305" => "PIURA - HUANCABAMBA - LALAQUIZ","200306" => "PIURA - HUANCABAMBA - SAN MIGUEL DE EL FAIQUE","200307" => "PIURA - HUANCABAMBA - SONDOR","200308" => "PIURA - HUANCABAMBA - SONDORILLO","200401" => "PIURA - MORROPON - CHULUCANAS","200402" => "PIURA - MORROPON - BUENOS AIRES","200403" => "PIURA - MORROPON - CHALACO","200404" => "PIURA - MORROPON - LA MATANZA","200405" => "PIURA - MORROPON - MORROPON","200406" => "PIURA - MORROPON - SALITRAL","200407" => "PIURA - MORROPON - SAN JUAN DE BIGOTE","200408" => "PIURA - MORROPON - SANTA CATALINA DE MOSSA","200409" => "PIURA - MORROPON - SANTO DOMINGO","200410" => "PIURA - MORROPON - YAMANGO","200501" => "PIURA - PAITA - PAITA","200502" => "PIURA - PAITA - AMOTAPE","200503" => "PIURA - PAITA - ARENAL","200504" => "PIURA - PAITA - COLAN","200505" => "PIURA - PAITA - LA HUACA","200506" => "PIURA - PAITA - TAMARINDO","200507" => "PIURA - PAITA - VICHAYAL","200601" => "PIURA - SULLANA - SULLANA","200602" => "PIURA - SULLANA - BELLAVISTA","200603" => "PIURA - SULLANA - IGNACIO ESCUDERO","200604" => "PIURA - SULLANA - LANCONES","200605" => "PIURA - SULLANA - MARCAVELICA","200606" => "PIURA - SULLANA - MIGUEL CHECA","200607" => "PIURA - SULLANA - QUERECOTILLO","200608" => "PIURA - SULLANA - SALITRAL","200701" => "PIURA - TALARA - PARIÑAS","200702" => "PIURA - TALARA - EL ALTO","200703" => "PIURA - TALARA - LA BREA","200704" => "PIURA - TALARA - LOBITOS","200705" => "PIURA - TALARA - LOS ORGANOS","200706" => "PIURA - TALARA - MANCORA","200801" => "PIURA - SECHURA - SECHURA","200802" => "PIURA - SECHURA - BELLAVISTA DE LA UNION","200803" => "PIURA - SECHURA - BERNAL","200804" => "PIURA - SECHURA - CRISTO NOS VALGA","200805" => "PIURA - SECHURA - VICE","200806" => "PIURA - SECHURA - RINCONADA LLICUAR",
        "210101" => "PUNO - PUNO - PUNO","210102" => "PUNO - PUNO - ACORA","210103" => "PUNO - PUNO - AMANTANI","210104" => "PUNO - PUNO - ATUNCOLLA","210105" => "PUNO - PUNO - CAPACHICA","210106" => "PUNO - PUNO - CHUCUITO","210107" => "PUNO - PUNO - COATA","210108" => "PUNO - PUNO - HUATA","210109" => "PUNO - PUNO - MAÑAZO","210110" => "PUNO - PUNO - PAUCARCOLLA","210111" => "PUNO - PUNO - PICHACANI","210112" => "PUNO - PUNO - PLATERIA","210113" => "PUNO - PUNO - SAN ANTONIO","210114" => "PUNO - PUNO - TIQUILLACA","210115" => "PUNO - PUNO - VILQUE","210201" => "PUNO - AZANGARO - AZANGARO","210202" => "PUNO - AZANGARO - ACHAYA","210203" => "PUNO - AZANGARO - ARAPA","210204" => "PUNO - AZANGARO - ASILLO","210205" => "PUNO - AZANGARO - CAMINACA","210206" => "PUNO - AZANGARO - CHUPA","210207" => "PUNO - AZANGARO - JOSE DOMINGO CHOQUEHUANCA","210208" => "PUNO - AZANGARO - MUÑANI","210209" => "PUNO - AZANGARO - POTONI","210210" => "PUNO - AZANGARO - SAMAN","210211" => "PUNO - AZANGARO - SAN ANTON","210212" => "PUNO - AZANGARO - SAN JOSE","210213" => "PUNO - AZANGARO - SAN JUAN DE SALINAS","210214" => "PUNO - AZANGARO - SANTIAGO DE PUPUJA","210215" => "PUNO - AZANGARO - TIRAPATA","210301" => "PUNO - CARABAYA - MACUSANI","210302" => "PUNO - CARABAYA - AJOYANI","210303" => "PUNO - CARABAYA - AYAPATA","210304" => "PUNO - CARABAYA - COASA","210305" => "PUNO - CARABAYA - CORANI","210306" => "PUNO - CARABAYA - CRUCERO","210307" => "PUNO - CARABAYA - ITUATA","210308" => "PUNO - CARABAYA - OLLACHEA","210309" => "PUNO - CARABAYA - SAN GABAN","210310" => "PUNO - CARABAYA - USICAYOS","210401" => "PUNO - CHUCUITO - JULI","210402" => "PUNO - CHUCUITO - DESAGUADERO","210403" => "PUNO - CHUCUITO - HUACULLANI","210404" => "PUNO - CHUCUITO - KELLUYO","210405" => "PUNO - CHUCUITO - PISACOMA","210406" => "PUNO - CHUCUITO - POMATA","210407" => "PUNO - CHUCUITO - ZEPITA","210501" => "PUNO - EL COLLAO - ILAVE","210502" => "PUNO - EL COLLAO - CAPAZO","210503" => "PUNO - EL COLLAO - PILCUYO","210504" => "PUNO - EL COLLAO - SANTA ROSA","210505" => "PUNO - EL COLLAO - CONDURIRI","210601" => "PUNO - HUANCANE - HUANCANE","210602" => "PUNO - HUANCANE - COJATA","210603" => "PUNO - HUANCANE - HUATASANI","210604" => "PUNO - HUANCANE - INCHUPALLA","210605" => "PUNO - HUANCANE - PUSI","210606" => "PUNO - HUANCANE - ROSASPATA","210607" => "PUNO - HUANCANE - TARACO","210608" => "PUNO - HUANCANE - VILQUE CHICO","210701" => "PUNO - LAMPA - LAMPA","210702" => "PUNO - LAMPA - CABANILLA","210703" => "PUNO - LAMPA - CALAPUJA","210704" => "PUNO - LAMPA - NICASIO","210705" => "PUNO - LAMPA - OCUVIRI","210706" => "PUNO - LAMPA - PALCA","210707" => "PUNO - LAMPA - PARATIA","210708" => "PUNO - LAMPA - PUCARA","210709" => "PUNO - LAMPA - SANTA LUCIA","210710" => "PUNO - LAMPA - VILAVILA","210801" => "PUNO - MELGAR - AYAVIRI","210802" => "PUNO - MELGAR - ANTAUTA","210803" => "PUNO - MELGAR - CUPI","210804" => "PUNO - MELGAR - LLALLI","210805" => "PUNO - MELGAR - MACARI","210806" => "PUNO - MELGAR - NUÑOA","210807" => "PUNO - MELGAR - ORURILLO","210808" => "PUNO - MELGAR - SANTA ROSA","210809" => "PUNO - MELGAR - UMACHIRI","210901" => "PUNO - MOHO - MOHO","210902" => "PUNO - MOHO - CONIMA","210903" => "PUNO - MOHO - HUAYRAPATA","210904" => "PUNO - MOHO - TILALI","211001" => "PUNO - SAN ANTONIO DE PUTINA - PUTINA","211002" => "PUNO - SAN ANTONIO DE PUTINA - ANANEA","211003" => "PUNO - SAN ANTONIO DE PUTINA - PEDRO VILCA APAZA","211004" => "PUNO - SAN ANTONIO DE PUTINA - QUILCAPUNCU","211005" => "PUNO - SAN ANTONIO DE PUTINA - SINA","211101" => "PUNO - SAN ROMAN - JULIACA","211102" => "PUNO - SAN ROMAN - CABANA","211103" => "PUNO - SAN ROMAN - CABANILLAS","211104" => "PUNO - SAN ROMAN - CARACOTO","211105" => "PUNO - SAN ROMAN - SAN MIGUEL","211201" => "PUNO - SANDIA - SANDIA","211202" => "PUNO - SANDIA - CUYOCUYO","211203" => "PUNO - SANDIA - LIMBANI","211204" => "PUNO - SANDIA - PATAMBUCO","211205" => "PUNO - SANDIA - PHARA","211206" => "PUNO - SANDIA - QUIACA","211207" => "PUNO - SANDIA - SAN JUAN DEL ORO","211208" => "PUNO - SANDIA - YANAHUAYA","211209" => "PUNO - SANDIA - ALTO INAMBARI","211210" => "PUNO - SANDIA - SAN PEDRO DE PUTINA PUNCO","211301" => "PUNO - YUNGUYO - YUNGUYO","211302" => "PUNO - YUNGUYO - ANAPIA","211303" => "PUNO - YUNGUYO - COPANI","211304" => "PUNO - YUNGUYO - CUTURAPI","211305" => "PUNO - YUNGUYO - OLLARAYA","211306" => "PUNO - YUNGUYO - TINICACHI","211307" => "PUNO - YUNGUYO - UNICACHI",
        "220101" => "SAN MARTIN - MOYOBAMBA - MOYOBAMBA","220102" => "SAN MARTIN - MOYOBAMBA - CALZADA","220103" => "SAN MARTIN - MOYOBAMBA - HABANA","220104" => "SAN MARTIN - MOYOBAMBA - JEPELACIO","220105" => "SAN MARTIN - MOYOBAMBA - SORITOR","220106" => "SAN MARTIN - MOYOBAMBA - YANTALO","220201" => "SAN MARTIN - BELLAVISTA - BELLAVISTA","220202" => "SAN MARTIN - BELLAVISTA - ALTO BIAVO","220203" => "SAN MARTIN - BELLAVISTA - BAJO BIAVO","220204" => "SAN MARTIN - BELLAVISTA - HUALLAGA","220205" => "SAN MARTIN - BELLAVISTA - SAN PABLO","220206" => "SAN MARTIN - BELLAVISTA - SAN RAFAEL","220301" => "SAN MARTIN - EL DORADO - SAN JOSE DE SISA","220302" => "SAN MARTIN - EL DORADO - AGUA BLANCA","220303" => "SAN MARTIN - EL DORADO - SAN MARTIN","220304" => "SAN MARTIN - EL DORADO - SANTA ROSA","220305" => "SAN MARTIN - EL DORADO - SHATOJA","220401" => "SAN MARTIN - HUALLAGA - SAPOSOA","220402" => "SAN MARTIN - HUALLAGA - ALTO SAPOSOA","220403" => "SAN MARTIN - HUALLAGA - EL ESLABON","220404" => "SAN MARTIN - HUALLAGA - PISCOYACU","220405" => "SAN MARTIN - HUALLAGA - SACANCHE","220406" => "SAN MARTIN - HUALLAGA - TINGO DE SAPOSOA","220501" => "SAN MARTIN - LAMAS - LAMAS","220502" => "SAN MARTIN - LAMAS - ALONSO DE ALVARADO","220503" => "SAN MARTIN - LAMAS - BARRANQUITA","220504" => "SAN MARTIN - LAMAS - CAYNARACHI","220505" => "SAN MARTIN - LAMAS - CUÑUMBUQUI","220506" => "SAN MARTIN - LAMAS - PINTO RECODO","220507" => "SAN MARTIN - LAMAS - RUMISAPA","220508" => "SAN MARTIN - LAMAS - SAN ROQUE DE CUMBAZA","220509" => "SAN MARTIN - LAMAS - SHANAO","220510" => "SAN MARTIN - LAMAS - TABALOSOS","220511" => "SAN MARTIN - LAMAS - ZAPATERO","220601" => "SAN MARTIN - MARISCAL CACERES - JUANJUI","220602" => "SAN MARTIN - MARISCAL CACERES - CAMPANILLA","220603" => "SAN MARTIN - MARISCAL CACERES - HUICUNGO","220604" => "SAN MARTIN - MARISCAL CACERES - PACHIZA","220605" => "SAN MARTIN - MARISCAL CACERES - PAJARILLO","220701" => "SAN MARTIN - PICOTA - PICOTA","220702" => "SAN MARTIN - PICOTA - BUENOS AIRES","220703" => "SAN MARTIN - PICOTA - CASPISAPA","220704" => "SAN MARTIN - PICOTA - PILLUANA","220705" => "SAN MARTIN - PICOTA - PUCACACA","220706" => "SAN MARTIN - PICOTA - SAN CRISTOBAL","220707" => "SAN MARTIN - PICOTA - SAN HILARION","220708" => "SAN MARTIN - PICOTA - SHAMBOYACU","220709" => "SAN MARTIN - PICOTA - TINGO DE PONASA","220710" => "SAN MARTIN - PICOTA - TRES UNIDOS","220801" => "SAN MARTIN - RIOJA - RIOJA","220802" => "SAN MARTIN - RIOJA - AWAJUN","220803" => "SAN MARTIN - RIOJA - ELIAS SOPLIN VARGAS","220804" => "SAN MARTIN - RIOJA - NUEVA CAJAMARCA","220805" => "SAN MARTIN - RIOJA - PARDO MIGUEL","220806" => "SAN MARTIN - RIOJA - POSIC","220807" => "SAN MARTIN - RIOJA - SAN FERNANDO","220808" => "SAN MARTIN - RIOJA - YORONGOS","220809" => "SAN MARTIN - RIOJA - YURACYACU","220901" => "SAN MARTIN - SAN MARTIN - TARAPOTO","220902" => "SAN MARTIN - SAN MARTIN - ALBERTO LEVEAU","220903" => "SAN MARTIN - SAN MARTIN - CACATACHI","220904" => "SAN MARTIN - SAN MARTIN - CHAZUTA","220905" => "SAN MARTIN - SAN MARTIN - CHIPURANA","220906" => "SAN MARTIN - SAN MARTIN - EL PORVENIR","220907" => "SAN MARTIN - SAN MARTIN - HUIMBAYOC","220908" => "SAN MARTIN - SAN MARTIN - JUAN GUERRA","220909" => "SAN MARTIN - SAN MARTIN - LA BANDA DE SHILCAYO","220910" => "SAN MARTIN - SAN MARTIN - MORALES","220911" => "SAN MARTIN - SAN MARTIN - PAPAPLAYA","220912" => "SAN MARTIN - SAN MARTIN - SAN ANTONIO","220913" => "SAN MARTIN - SAN MARTIN - SAUCE","220914" => "SAN MARTIN - SAN MARTIN - SHAPAJA","221001" => "SAN MARTIN - TOCACHE - TOCACHE","221002" => "SAN MARTIN - TOCACHE - NUEVO PROGRESO","221003" => "SAN MARTIN - TOCACHE - POLVORA","221004" => "SAN MARTIN - TOCACHE - SHUNTE","221005" => "SAN MARTIN - TOCACHE - UCHIZA",
        "230101" => "TACNA - TACNA - TACNA","230102" => "TACNA - TACNA - ALTO DE LA ALIANZA","230103" => "TACNA - TACNA - CALANA","230104" => "TACNA - TACNA - CIUDAD NUEVA","230105" => "TACNA - TACNA - INCLAN","230106" => "TACNA - TACNA - PACHIA","230107" => "TACNA - TACNA - PALCA","230108" => "TACNA - TACNA - POCOLLAY","230109" => "TACNA - TACNA - SAMA","230110" => "TACNA - TACNA - CORONEL GREGORIO ALBARRACIN LANCHIPA","230111" => "TACNA - TACNA - LA YARADA LOS PALOS","230201" => "TACNA - CANDARAVE - CANDARAVE","230202" => "TACNA - CANDARAVE - CAIRANI","230203" => "TACNA - CANDARAVE - CAMILACA","230204" => "TACNA - CANDARAVE - CURIBAYA","230205" => "TACNA - CANDARAVE - HUANUARA","230206" => "TACNA - CANDARAVE - QUILAHUANI","230301" => "TACNA - JORGE BASADRE - LOCUMBA","230302" => "TACNA - JORGE BASADRE - ILABAYA","230303" => "TACNA - JORGE BASADRE - ITE","230401" => "TACNA - TARATA - TARATA","230402" => "TACNA - TARATA - HEROES ALBARRACIN","230403" => "TACNA - TARATA - ESTIQUE","230404" => "TACNA - TARATA - ESTIQUE-PAMPA","230405" => "TACNA - TARATA - SITAJARA","230406" => "TACNA - TARATA - SUSAPAYA","230407" => "TACNA - TARATA - TARUCACHI","230408" => "TACNA - TARATA - TICACO",
        "240101" => "TUMBES - TUMBES - TUMBES","240102" => "TUMBES - TUMBES - CORRALES","240103" => "TUMBES - TUMBES - LA CRUZ","240104" => "TUMBES - TUMBES - PAMPAS DE HOSPITAL","240105" => "TUMBES - TUMBES - SAN JACINTO","240106" => "TUMBES - TUMBES - SAN JUAN DE LA VIRGEN","240201" => "TUMBES - CONTRALMIRANTE VILLAR - ZORRITOS","240202" => "TUMBES - CONTRALMIRANTE VILLAR - CASITAS","240203" => "TUMBES - CONTRALMIRANTE VILLAR - CANOAS DE PUNTA SAL","240301" => "TUMBES - ZARUMILLA - ZARUMILLA","240302" => "TUMBES - ZARUMILLA - AGUAS VERDES","240303" => "TUMBES - ZARUMILLA - MATAPALO","240304" => "TUMBES - ZARUMILLA - PAPAYAL",
        "250101" => "UCAYALI - CORONEL PORTILLO - CALLERIA","250102" => "UCAYALI - CORONEL PORTILLO - CAMPOVERDE","250103" => "UCAYALI - CORONEL PORTILLO - IPARIA","250104" => "UCAYALI - CORONEL PORTILLO - MASISEA","250105" => "UCAYALI - CORONEL PORTILLO - YARINACOCHA","250106" => "UCAYALI - CORONEL PORTILLO - NUEVA REQUENA","250107" => "UCAYALI - CORONEL PORTILLO - MANANTAY","250201" => "UCAYALI - ATALAYA - RAYMONDI","250202" => "UCAYALI - ATALAYA - SEPAHUA","250203" => "UCAYALI - ATALAYA - TAHUANIA","250204" => "UCAYALI - ATALAYA - YURUA","250301" => "UCAYALI - PADRE ABAD - PADRE ABAD","250302" => "UCAYALI - PADRE ABAD - IRAZOLA","250303" => "UCAYALI - PADRE ABAD - CURIMANA","250304" => "UCAYALI - PADRE ABAD - NESHUYA","250305" => "UCAYALI - PADRE ABAD - ALEXANDER VON HUMBOLDT","250401" => "UCAYALI - PURUS - PURUS"];

    public function TokenSunat()
    {
        set_time_limit(360);

        $empresa = "20442847071";
        $idSunat = "eed62afa-a9c1-4456-aed9-c38f370f2bd4";
        $claveSunat = "4AIzlOQul66sNUXd3PlCEw==";

        //The url you wish to send the POST request to
        $url = 'https://api-seguridad.sunat.gob.pe/v1/clientessol/'.$idSunat.'/oauth2/token/';

        //The data you want to send via POST
        $fields = [
            "grant_type" => "password",
            "scope" => "https://api-cpe.sunat.gob.pe/",
            "client_id" => $idSunat,
            "client_secret" => $claveSunat,
            "username" => $empresa."TSIG2023",
            "password" => "2023GREtisig",
        ];

        //url-ify the data for the POST
        $fields_string = http_build_query($fields);

        //open connection
        $ch = curl_init();

        //set the url, number of POST vars, POST data
        curl_setopt($ch,CURLOPT_URL, $url);
        curl_setopt($ch,CURLOPT_POST, true);
        curl_setopt($ch,CURLOPT_POSTFIELDS, $fields_string);
        //curl_setopt($ch, "Content-type: application/x-www-form-urlencoded\r\n");

        //So that curl_exec returns the contents of the cURL; rather than echoing it
        curl_setopt($ch,CURLOPT_RETURNTRANSFER, true); 

        //execute post
        $result = curl_exec($ch);
        $resultado = json_decode($result);

        return $resultado;
    }

    function GuiaSunat($nombreArchivo, $token, $archive)
    {
        $path = App::publicPath();
        $path .= "/archivos/GRT/FIRMA/";
        $curl = curl_init();
        $data = array(
                    'nomArchivo' =>  $nombreArchivo.".zip",
                    'arcGreZip'  =>  base64_encode($archive),
                    'hashZip'    =>  hash_file("sha256", $path.$nombreArchivo.'.zip')
                );
        curl_setopt_array($curl, array(
            CURLOPT_URL => "https://api-cpe.sunat.gob.pe/v1/contribuyente/gem/comprobantes/".$nombreArchivo,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'POST',
            CURLOPT_POSTFIELDS =>json_encode(array('archivo' => $data)),
            CURLOPT_HTTPHEADER => array(
                'Authorization: Bearer '. $token,
                'Content-Type: application/json'
            ),
        ));

        $response = curl_exec($curl);
        curl_close($curl);
        return json_decode($response);

    }
    function TicketSunat($ticket, $token, $ruc, $nombreArchivo)
    {
        $path = App::publicPath();
        $path .= "/archivos/CDR/";
        $response3 = "";

        if(($ticket == "") || ($ticket == null))
        {
            $mensaje['cdr_hash'] = '';
            $mensaje['cdr_msj_sunat'] = 'Ticket vacio';
            $mensaje['cdr_ResponseCode'] = null;
            $mensaje['numerror'] = null;
        }
        else
        {
            $mensaje['ticket'] = $ticket;
            $curl = curl_init();
    
            curl_setopt_array($curl, array(
                CURLOPT_URL => 'https://api-cpe.sunat.gob.pe/v1/contribuyente/gem/comprobantes/envios/'.$ticket,
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_ENCODING => '',
                CURLOPT_MAXREDIRS => 10,
                CURLOPT_TIMEOUT => 0,
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => 'GET',
                CURLOPT_HTTPHEADER => array(
                    'numRucEnvia: '.$ruc,
                    'numTicket: '.$ticket,
                    'Authorization: Bearer '. $token,
                ),
            ));
    
            $response_1 = curl_exec($curl);
            $response3 = json_decode($response_1);
            $codRespuesta = $response3->codRespuesta;
            curl_close($curl);    
            //var_dump($response3);exit;
            
            $mensaje['ticket_rpta'] = $codRespuesta;
            if($codRespuesta == '99')
            {
                $error = $response3->error;
                $mensaje['cdr_hash'] = '';
                $mensaje['cdr_msj_sunat'] = $error->desError;
                $mensaje['cdr_ResponseCode'] = '99';
                $mensaje['numerror'] = $error->numError;                            
            }
            else if($codRespuesta == '98')
            {
                $mensaje['cdr_hash'] = '';
                $mensaje['cdr_msj_sunat'] = 'Envío en proceso';
                $mensaje['cdr_ResponseCode'] = '98';
                $mensaje['numerror'] = '98';                        
            }
            else if($codRespuesta == '0')
            {
                $mensaje['arcCdr'] = $response3->arcCdr;
                $mensaje['indCdrGenerado'] = $response3->indCdrGenerado;
                file_put_contents($path . 'R-' . $nombreArchivo . '.ZIP', base64_decode($response3->arcCdr));
    
                //extraemos archivo zip a xml
                $zip = new ZipArchive;
                if ($zip->open($path . 'R-' . $nombreArchivo . '.ZIP') === TRUE) {
                    $zip->extractTo($path);
                    $zip->close();
                }
                //unlink($ruta_archivo_cdr . 'R-' . $nombre_file . '.ZIP');
    
             //=============hash CDR=================
                $doc_cdr = new \DOMDocument();
                $doc_cdr->load($path . 'R-' . $nombreArchivo . '.xml');
                
                $mensaje['cdr_hash']           = $doc_cdr->getElementsByTagName('DigestValue')->item(0)->nodeValue;
                $mensaje['cdr_msj_sunat']      = $doc_cdr->getElementsByTagName('Description')->item(0)->nodeValue;
                $mensaje['cdr_ResponseCode']   = $doc_cdr->getElementsByTagName('ResponseCode')->item(0)->nodeValue;        
                $mensaje['numerror']           = '';
            }
            else
            {
                $mensaje['cdr_hash']           = '';
                $mensaje['cdr_msj_sunat']      = 'SUNAT FUERA DE SERVICIO';
                $mensaje['cdr_ResponseCode']   = '88';            
                $mensaje['numerror']           = '88';
            }
        }
        //return $mensaje;
        return $response3;
    }

    public function GenerarGuia()
    {
        /************************************DATOS INICIALES ******************************************/
        $grt = new \stdClass();
        $grt->ruc = "20442847071";
        $grt->empresa = "TRANSPORTES LIBERTAD S.A.C.";
        $grt->mtc = "080564CNG";
        $grt->entidad = "6";//tipo de entidad hay que conseguir de base de datos

        $grt->emision = date("Y-m-d");/////////////verificar la hora
        $grt->traslado = "2023-06-27"; //////////////// verificar el formato de fecha

        $grt->serie = "VG01";
        $grt->nro = "3";

        $grt->partida = "LA GRANJA DE MI ABUELA1, REPART AL KM48 - LA JOYA - AREQUIPA - AREQUIPA";
        $grt->ubigeopartida = "040105";
        $grt->llegada = "TUMILACAPOCATA NRO SN. VAL. TOCATA (QUEBRADA SARALLENQUE - QUELLAVECO) - TORATA - MARISCAL NIETO - MOQUEGUA";
        $grt->ubigeollegada = "230402";
        $grt->remitente = "MOLY-COP ADESUR S.A.";
        $grt->rucremitente = "20100192064";
        $grt->tiporemitente = "6";
        $grt->destinatario = "MOLY-COP ADESUR S.A.";
        $grt->rucdestinatario = "20100192064";
        $grt->tipodestinatario = "6";

        $grt->observaciones = "-";
        $grt->peso = "120";//ES EN KILOGRAMOS

        $grr = new \stdClass();
        $grr->codigo = "09";
        $grr->tipo = "GUÍA DE REMISIÓN REMITENTE";
        $grr->serie = "0026";
        $grr->nro = "00010210";
        $grr->ruc = "20100192064";
        $grr->entidad = "6";//tipo de entidad 6 es RUC

        $transporte = new \stdClass();
        $transporte->peso = "KGM";
        $transporte->carga = "17970";
        $transporte->detalle = "DOWFROTH 250";

        $vehiculo = new \stdClass();
        $vehiculo->placa = "BRK948";
        $vehiculo->chv = "15MRP22009574E";
        $vehiculo->autorizacionv = "08M22000612E";
        $vehiculo->entidadv = "06";//MTC

        $vehiculo->carreta = "AXL976";
        $vehiculo->chvc = "15MRP22006974E";
        //$vehiculo->autorizacionc = "15MRP22006974E";
        //$vehiculo->entidadc = "08M22000612E";

        $conductor = new \stdClass();
        $conductor->nombres = "LUDWING LEODAN";
        $conductor->apellidos = "NINA TORRES";
        $conductor->dni = "42117257";
        $conductor->licencia = "J42117257";

        $carga = new \stdClass();
        $carga->unidad = "GAL";
        $carga->cantidad = "17970";
        $carga->detalle = "DOWFROTH 250";


        $gre = new \stdClass();
        $gre->grt = $grt;
        $gre->grr = $grr;
        $gre->transporte = $transporte;
        $gre->vehiculo = $vehiculo;
        $gre->conductor = $conductor;
        $gre->carga = $carga;


        $token = $this->TokenSunat();

        $token = $token->access_token;

        //GENERA EL ARCHIVO XML
        $nombreArchivo = $gre->grt->ruc.'-31-'.$gre->grt->serie.'-'.$gre->grt->nro.".xml";
        $nombreArchivo2 = $gre->grt->ruc.'-31-'.$gre->grt->serie.'-'.$gre->grt->nro;
        
        $xml = $this->Xml($gre);
        Storage::put('GRT/'.$nombreArchivo, $xml);

        //FIRMA EL ARCHIVO XML
        $xmlArchivo = Storage::get('GRT/'.$nombreArchivo);

        $xml = $this->Firmar($xmlArchivo,'');
    
        $firmaArchivo = $xml->saveXML();

        Storage::put('GRT/FIRMA/'.$nombreArchivo, $firmaArchivo);
        
        //GENERANDO EL ARCHIVO ZIP
        $zip = new ZipArchive();

        $publicPath = App::publicPath();
        
        if($zip->open($publicPath."/archivos/GRT/FIRMA/".$nombreArchivo2.".zip", ZipArchive::CREATE) === true)
        {
            $zip->addFile($publicPath."/archivos/GRT/FIRMA/".$nombreArchivo2.".xml", $nombreArchivo2.".xml");
        }

        //ENVIA LA INFORMACIÓN FIRMADA Y ZIPEADA A LA SUNAT
        $respuestaSunat = $this->GuiaSunat($nombreArchivo2, $token);
        
        //////////////FALTA ENVIAR LA RESPUESTA

        $ticket = "2a423ae5-2bab-46e1-a924-9fc8ce181348";

        //VERIFICA LA CONFIRMACIÓN DEL TICKET GENERADO
        $respuestaTicket = $this->TicketSunat($ticket, $token, $gre->grt->ruc, $nombreArchivo2);

        //return "ok";
        return $respuestaTicket;
    }

    public function GenerarGRE(Request $request)
    {
        $jsonConvoy = json_decode($request->convoy);
        $jsonServicio = json_decode($request->servicio);
        $jsonGuia = json_decode($request->guia);

        /************************************DATOS INICIALES ******************************************/
        $obj_empresa = Empresa::select('empresa.*')
            ->where('principalEmp','=',"PRINCIPAL")
            ->first();
        
        $arr_personas = [];
        if(isset($jsonGuia->reten->idPersona))
        {
            $arr_personas = Persona::select('idPersona','paternoPer','maternoPer','nombrePer','dniPer','licenciaPer')
            ->whereIn('idPersona',[$jsonServicio->Persona_idPersona,$jsonGuia->reten->idPersona])
            ->get();    
        }
        else
        {
            $arr_personas = Persona::select('idPersona','paternoPer','maternoPer','nombrePer','dniPer','licenciaPer')
            ->whereIn('idPersona',[$jsonServicio->Persona_idPersona])
            ->get();
        }
        

        $arr_vehiculos = Vehiculo::select('idVehiculo','placaVeh','chvVeh')
            ->whereIn('idVehiculo',[$jsonServicio->Vehiculo_idVehiculo,$jsonServicio->Acople_idVehiculo])
            ->get();

        $arr_externos = Externo::select('idExterno','rucExt')
            ->whereIn('idExterno',[$jsonConvoy->Remitente_idExterno,$jsonConvoy->Destinatario_idExterno,$jsonConvoy->Cliente_idExterno])
            ->get();
        $externos = [];
        foreach($arr_externos as $uexterno)
        {
            $externos["e".$uexterno->idExterno] = $uexterno->rucExt;
        }

        $obj_ultimo = DB::table('guia')
                        ->where('serieGui',"V".$jsonConvoy->serieCon)
                        ->where('tipoGui',"GRT")
                        ->whereNotIn('estadoGui',["EXTERNA","DESAPROBADA"])
                        ->max('nroGui');

        if($obj_ultimo == null)
            $obj_ultimo = 1;
        else
            $obj_ultimo++;

        //DATOS DEL LIBERTAD
        $grt = new \stdClass();
        $grt->ruc = $obj_empresa->rucEmp;
        $grt->empresa = $obj_empresa->nombreEmp;
        $grt->mtc = $obj_empresa->mtcEmp;
        $grt->entidad = $obj_empresa->entidadSunatEmp;//tipo de entidad hay que conseguir de base de datos

        //DATOS DE EMISION
        $grt->emision = date("Y-m-d");
        $grt->hemision = date("H:i:s");
        $grt->traslado = $jsonGuia->grttraslado;
        $grt->serie = "V".$jsonConvoy->serieCon;
        $grt->nro = $obj_ultimo;
        $grt->observaciones = $jsonGuia->grtobservacion;
        $grt->peso = $jsonGuia->pesoSer;//ES EN KILOGRAMOS

        if($grt->emision > $grt->traslado)
            return;
        
        //REMITENTE - DESTINATARIO Y DIRECCIONES
        $grt->partida = $jsonConvoy->partidaCon;
        $grt->ubigeopartida = $jsonConvoy->ubigeopSunatCon;
        $grt->llegada = $jsonConvoy->llegadaCon;
        $grt->ubigeollegada = $jsonConvoy->ubigeolSunatCon;
        $grt->remitente = $jsonConvoy->remitenteExt;
        $grt->rucremitente = $externos["e".$jsonConvoy->Remitente_idExterno];
        $grt->tiporemitente = "6";//tipo de entidad 6 es RUC
        $grt->destinatario = $jsonConvoy->destinatarioExt;
        $grt->rucdestinatario = $externos["e".$jsonConvoy->Destinatario_idExterno];
        $grt->tipodestinatario = "6";//tipo de entidad 6 es RUC

        //GUIA REMITENTE O DE REFERENCIA
        $grr = new \stdClass();
        $grr->codigo = "09";//CODIGO DE GUIA REMITENTE
        $grr->tipo = "GUÍA DE REMISIÓN REMITENTE";
        $grr->serie = $jsonGuia->grrserie;
        $grr->nro = $jsonGuia->grrnro;
        $grr->ruc = $externos["e".$jsonConvoy->Cliente_idExterno];
        $grr->entidad = "6";//tipo de entidad 6 es RUC

        //DETALLE DE CARGA
        $carga = new \stdClass();
        $carga->unidad = $jsonConvoy->unidadSunatCon;
        $carga->cantidad = $jsonServicio->cargaSer;
        $carga->detalle = $jsonConvoy->cargaCon;

        //VEHICULO
        $vehiculo = new \stdClass();
        foreach($arr_vehiculos as $uvehiculo)
        {
            if($uvehiculo->idVehiculo == $jsonServicio->Vehiculo_idVehiculo)
            {                
                $vehiculo->placa = str_replace("-","",$uvehiculo->placaVeh);
                $vehiculo->chv = $uvehiculo->chvVeh;
                /*$vehiculo->autorizacionv = "08M22000612E";
                $vehiculo->entidadv = "06";//MTC*/
            }
            elseif($uvehiculo->idVehiculo == $jsonServicio->Acople_idVehiculo)
            {
                $vehiculo->carreta = str_replace("-","",$uvehiculo->placaVeh);
                $vehiculo->chvc = $uvehiculo->chvVeh;
                //$vehiculo->autorizacionc = "15MRP22006974E";
                //$vehiculo->entidadc = "08M22000612E";
            }
        }

        //OPERADOR
        $conductor = new \stdClass();
        $reten = new \stdClass();
        $reten->id = 0;
        foreach($arr_personas as $upersona)
        {
            if($upersona->idPersona == $jsonServicio->Persona_idPersona)
            {
                $conductor->nombres = $upersona->nombrePer;
                $conductor->apellidos = $upersona->paternoPer." ".$upersona->maternoPer;
                $conductor->dni = $upersona->dniPer;
                $conductor->licencia = $upersona->licenciaPer;
            }
            elseif($upersona->idPersona == $jsonGuia->reten->idPersona)
            {
                $reten->id = $upersona->idPersona;
                $reten->nombres = $upersona->nombrePer;
                $reten->apellidos = $upersona->paternoPer." ".$upersona->maternoPer;
                $reten->dni = $upersona->dniPer;
                $reten->licencia = $upersona->licenciaPer;
            }
        }

        $gre = new \stdClass();
        $gre->grt = $grt;
        $gre->grr = $grr;
        $gre->vehiculo = $vehiculo;
        $gre->conductor = $conductor;
        $gre->reten = $reten;
        $gre->carga = $carga;

        
        $obj_grr = new Guia();
        $obj_grr->tipoGui = "GRR";
        $obj_grr->serieGui = $grr->serie;
        $obj_grr->nroGui = $grr->nro;
        //$obj_grr->femisionGui = null;
        $obj_grr->ftrasladoGui = $grt->traslado;
        $obj_grr->modalidadGui = "REGULAR";
        //$obj_grr->Origen_idGuia = null;
        $obj_grr->estadoGui = "EXTERNA";
        //$obj_grr->observacionGui = null;
        $obj_grr->Servicio_idServicio = $jsonServicio->idServicio;
        $obj_grr->save();

        $obj_grt = new Guia();
        $obj_grt->tipoGui = "GRT";
        $obj_grt->serieGui = $grt->serie;
        $obj_grt->nroGui = $obj_ultimo;
        $obj_grt->femisionGui = $grt->emision;
        $obj_grt->ftrasladoGui = $grt->traslado;
        $obj_grt->modalidadGui = "REGULAR";
        $obj_grt->Origen_idGuia = $obj_grr->idGuia;
        $obj_grt->estadoGui = "GENERADA";
        $obj_grt->observacionGui = $grt->observaciones;
        $obj_grt->Servicio_idServicio = $jsonServicio->idServicio;
        $obj_grt->save();

        if($reten->id != 0)
        {
            $obj_servicio = (object)[];
            $obj_servicio->Reten_idPersona = $jsonGuia->reten->idPersona;    
            Servicio::where('idServicio', $jsonServicio->idServicio)->update((array)$obj_servicio);
        }
        

        //////////////////////////// 1 //////////////////////////////
        //OBTENIENDO LOS ARCHIVOS PARA EL SERVIDOR
        $nombreArchivo = $gre->grt->ruc.'-31-'.$gre->grt->serie.'-'.$gre->grt->nro.".xml";
        $nombreArchivo2 = $gre->grt->ruc.'-31-'.$gre->grt->serie.'-'.$gre->grt->nro;
        
        $xml = $this->Xml($gre);
        Storage::put('GRT/'.$nombreArchivo, $xml);
        
        //FIRMA EL ARCHIVO XML
        $xmlArchivo = Storage::get('GRT/'.$nombreArchivo);

        $xml = $this->Firmar($xmlArchivo,'LIBERTAD2016');
    
        $firmaArchivo = $xml->saveXML();

        Storage::put('GRT/FIRMA/'.$nombreArchivo, $firmaArchivo);
        
        //GENERANDO EL ARCHIVO ZIP
        $zip = new ZipArchive();

        $publicPath = App::publicPath();
        
        if($zip->open($publicPath."/archivos/GRT/FIRMA/".$nombreArchivo2.".zip", ZipArchive::CREATE) === true)
        {
            $zip->addFile($publicPath."/archivos/GRT/FIRMA/".$nombreArchivo2.".xml", $nombreArchivo2.".xml");
            $zip->close();
        }

        $archive = Storage::get('GRT/FIRMA/'.$nombreArchivo2.".zip");
        
        //////////////////////////// 2 //////////////////////////////
        //OBTENIENDO TOCKEN SUNAT
        $token = $this->TokenSunat();

        $token = $token->access_token;
        //////////////////////////// 3 //////////////////////////////
        //ENVIA LA INFORMACIÓN FIRMADA Y ZIPEADA A LA SUNAT
        $respuestaSunat = $this->GuiaSunat($nombreArchivo2, $token, $archive);

        //ACTUALIZA LA GUIA
        $obj_gre = (object)[];
        $obj_gre->ticketGui = $respuestaSunat->numTicket;
        $obj_gre->estadoGui = "ENVIADA";
        
        Guia::where('idGuia', $obj_grt->idGuia)->update((array)$obj_gre);
        
        //////////////FALTA ENVIAR LA RESPUESTA
        //$ticket = "a05e9342-abc4-41f0-af0c-469b0d2c7aec";
        sleep(5);
        $ticket = $respuestaSunat->numTicket;

        //VERIFICA LA CONFIRMACIÓN DEL TICKET GENERADO
        $respuestaTicket = $this->TicketSunat($ticket, $token, $gre->grt->ruc, $nombreArchivo2);


        $respuesta = [];
        $respuesta["idGuia"] = $obj_grt->idGuia;
        //ACTUALIZA LA GUIA
        if($respuestaTicket->codRespuesta == "98")
        {
            $respuesta = [];
            $respuesta["status"] = "ENVIADA";
        }
        elseif($respuestaTicket->codRespuesta == "99")
        {
            $obj_gre = (object)[];
            $obj_gre->mensajeGui = $respuestaTicket->error->numError." : ".$respuestaTicket->error->desError;
            $obj_gre->estadoGui = "DESAPROBADA";
            
            Guia::where('idGuia', $obj_grt->idGuia)->update((array)$obj_gre);

            $respuesta["status"] = "DESAPROBADA";
        }
        elseif($respuestaTicket->codRespuesta == "0")
        {
            //OBTENIENDO EL LINK DE LA GUIA
            $xmlContent = Storage::get("CDR/R-"."20442847071-31-".$obj_grt->serieGui."-".$obj_grt->nroGui.".xml");

            $xmlContent = strval($xmlContent);
            $posicion = strpos($xmlContent, "https://e-factura.sunat.gob.pe");

            $archivoEnlace = substr($xmlContent, $posicion);
            
            $posicion = strpos($archivoEnlace, "</");

            $archivoEnlace = substr($archivoEnlace, 0,$posicion);
            //GUARDANDO

            $obj_gre = (object)[];
            $obj_gre->estadoGui = "EMITIDA";
            $obj_gre->cdrGui = $respuestaTicket->arcCdr;
            $obj_gre->enlaceGui = $archivoEnlace;
            Guia::where('idGuia', $obj_grt->idGuia)->update((array)$obj_gre);

            $respuesta["status"] = "EMITIDA";
            $respuesta["enlace"] = $archivoEnlace;
        }
        else
        {
            $respuesta["status"] = "GENERADA";   
        }
    
        //return "ok";
        //$respuesta = ["idGuia"=> $id]
        return $respuesta;
    }

    private function Xml($gre)
    {
        //CABECERA
        $xml =  '<?xml version="1.0" encoding="UTF-8"?>
            <DespatchAdvice xmlns="urn:oasis:names:specification:ubl:schema:xsd:DespatchAdvice-2" xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns:cac="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2" xmlns:cbc="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2" xmlns:ext="urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2"> 
                    <ext:UBLExtensions>
                        <ext:UBLExtension>
                            <ext:ExtensionContent></ext:ExtensionContent>
                        </ext:UBLExtension>
                    </ext:UBLExtensions>
                    ';
            
        //DATOS GENERALESDE LA GUIA
        $xml .= '   <cbc:UBLVersionID>2.1</cbc:UBLVersionID>
                    <cbc:CustomizationID>2.0</cbc:CustomizationID>
                    <cbc:ID>'.$gre->grt->serie.'-'.$gre->grt->nro.'</cbc:ID>
                    <cbc:IssueDate>'.$gre->grt->emision.'</cbc:IssueDate>
                    <cbc:IssueTime>'.date("H:i:s").'</cbc:IssueTime>
                    <cbc:DespatchAdviceTypeCode>31</cbc:DespatchAdviceTypeCode>
                    <cbc:Note><![CDATA['.$gre->grt->observaciones.']]></cbc:Note>
                    ';
        //DATOS DE DOCUMENTOS RELACIONADOS COMO GRT,GRR, ETC
        $xml .= '<!--  DOCUMENTOS ADICIONALES (Catalogo D41) -->
                    <cac:AdditionalDocumentReference>
                        <cbc:ID>'.$gre->grr->serie.'-'.$gre->grr->nro.'</cbc:ID>
                        <cbc:DocumentTypeCode listAgencyName="PE:SUNAT" listName="Documento relacionado al transporte" listURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo61">'.$gre->grr->codigo.'</cbc:DocumentTypeCode>
                        <cbc:DocumentType>'.$gre->grr->tipo.'</cbc:DocumentType>
                        <cac:IssuerParty>
                            <cac:PartyIdentification>
                                <cbc:ID schemeID="'.$gre->grr->entidad.'" schemeAgencyName="PE:SUNAT" schemeURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo06">'.$gre->grr->ruc.'</cbc:ID>
                            </cac:PartyIdentification>
                        </cac:IssuerParty>
                    </cac:AdditionalDocumentReference>
                    ';

        //DATOS PARA LA FIRMA DEL DOCUMENTO
        $xml .= '<cac:Signature>
                    <cbc:ID>'.$gre->grt->ruc.'</cbc:ID>
                    <cac:SignatoryParty>
                        <cac:PartyIdentification>
                            <cbc:ID>'.$gre->grt->ruc.'</cbc:ID>
                        </cac:PartyIdentification>
                    </cac:SignatoryParty>
                    <cac:DigitalSignatureAttachment>
                        <cac:ExternalReference>
                            <cbc:URI>'.$gre->grt->ruc.'</cbc:URI>
                        </cac:ExternalReference>
                    </cac:DigitalSignatureAttachment>
                </cac:Signature>
                ';

        //DATOS DE LA EMPRESA TRANSPORTISTA  
        $xml .= '<cac:DespatchSupplierParty>
                    <cac:Party>
                        <cac:PartyIdentification>
                            <cbc:ID schemeID="6" schemeName="Documento de Identidad" schemeAgencyName="PE:SUNAT" schemeURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo06">'.$gre->grt->ruc.'</cbc:ID>
                        </cac:PartyIdentification>
                        <cac:PartyLegalEntity>
                            <cbc:RegistrationName><![CDATA['.$gre->grt->empresa.']]></cbc:RegistrationName>
                        </cac:PartyLegalEntity>
                    </cac:Party>
                </cac:DespatchSupplierParty>
                ';

        //DATOS DEL DESTINATARIO
        $xml .= '<cac:DeliveryCustomerParty>
                    <cac:Party>
                        <cac:PartyIdentification>
                            <cbc:ID schemeID="'.$gre->grt->tipodestinatario.'" schemeName="Documento de Identidad" schemeAgencyName="PE:SUNAT" schemeURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo06">'.$gre->grt->rucdestinatario.'</cbc:ID>
                        </cac:PartyIdentification>
                        <cac:PartyLegalEntity>
                            <cbc:RegistrationName><![CDATA['.$gre->grt->destinatario.']]></cbc:RegistrationName>
                        </cac:PartyLegalEntity>
                    </cac:Party>
                </cac:DeliveryCustomerParty>
                ';

        //DATOS DEL TRASLADO Y OTROS DISPERSOS
        $xml .= '<cac:Shipment>
                    <!--DATOS DEL TRASLADO -->
                    <cbc:ID>SUNAT_Envio</cbc:ID>
                    <cbc:GrossWeightMeasure unitCode="KGM">'.$gre->grt->peso.'</cbc:GrossWeightMeasure>
                    <cac:ShipmentStage>
                        <cac:TransitPeriod>
                            <cbc:StartDate>'.$gre->grt->traslado.'</cbc:StartDate>
                        </cac:TransitPeriod>
                        <!--<cac:TransportEvent>
                                <cbc:TransportEventTypeCode>1</cbc:TransportEventTypeCode>
                            </cac:TransportEvent>-->
                        <!--DATOS DEL TRANSPORTISTA-->
                        <cac:CarrierParty>
                            <cac:PartyLegalEntity>
                                <cbc:CompanyID>'.$gre->grt->mtc.'</cbc:CompanyID>
                            </cac:PartyLegalEntity>
                            <!--<cac:AgentParty>
                                    <cac:PartyLegalEntity>
                                        <cbc:CompanyID schemeID="" schemeName="Entidad Autorizadora" schemeAgencyName="PE:SUNAT">
                                        </cbc:CompanyID>
                                    </cac:PartyLegalEntity>
                                </cac:AgentParty>-->
                        </cac:CarrierParty>
                        <!--DATOS DEL CONDUCTOR PRINCIPAL-->
                        <cac:DriverPerson>
                            <cbc:ID schemeID="1" schemeName="Documento de Identidad" schemeAgencyName="PE:SUNAT" schemeURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo06">'.$gre->conductor->dni.'</cbc:ID>
                            <cbc:FirstName>'.$gre->conductor->nombres.'</cbc:FirstName>
                            <cbc:FamilyName>'.$gre->conductor->apellidos.'</cbc:FamilyName>        
                            <cbc:JobTitle>Principal</cbc:JobTitle>
                            <cac:IdentityDocumentReference>
                                <cbc:ID>'.$gre->conductor->licencia.'</cbc:ID>
                            </cac:IdentityDocumentReference>
                        </cac:DriverPerson>';
                    if($gre->reten->id != 0)
                    {
                        $xml .= '<cac:DriverPerson>
                            <cbc:ID schemeID="1" schemeName="Documento de Identidad" schemeAgencyName="PE:SUNAT" schemeURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo06">'.$gre->reten->dni.'</cbc:ID>
                            <cbc:FirstName>'.$gre->reten->nombres.'</cbc:FirstName>
                            <cbc:FamilyName>'.$gre->reten->apellidos.'</cbc:FamilyName>        
                            <cbc:JobTitle>Secundario</cbc:JobTitle>
                            <cac:IdentityDocumentReference>
                                <cbc:ID>'.$gre->reten->licencia.'</cbc:ID>
                            </cac:IdentityDocumentReference>
                        </cac:DriverPerson>';
                    }
                        
                $xml .=  '</cac:ShipmentStage>
                    <cac:Delivery>
                        <!--DATOS DEL PUNTO DE LLEGADA-->
                        <cac:DeliveryAddress>
                            <cbc:ID schemeName="Ubigeos" schemeAgencyName="PE:INEI">'.$gre->grt->ubigeollegada.'</cbc:ID>
                            <cac:AddressLine>
                                <cbc:Line>'.$gre->grt->llegada.'</cbc:Line>
                            </cac:AddressLine>
                        </cac:DeliveryAddress>
                        <cac:Despatch>
                            <!--DATOS DEL PUNTO DE PARTIDA-->
                            <cac:DespatchAddress>
                                <cbc:ID schemeName="Ubigeos" schemeAgencyName="PE:INEI">'.$gre->grt->ubigeopartida.'</cbc:ID>
                                <cac:AddressLine>
                                    <cbc:Line>'.$gre->grt->partida.'</cbc:Line>
                                </cac:AddressLine>
                            </cac:DespatchAddress>  
                            <!--DATOS DEL REMITENTE-->
                            <cac:DespatchParty>
                                <cac:PartyIdentification>
                                    <cbc:ID schemeID="'.$gre->grt->tiporemitente.'" schemeName="Documento de Identidad" schemeAgencyName="PE:SUNAT" schemeURI="urn:pe:gob:sunat:cpe:see:gem:catalogos:catalogo06">'.$gre->grt->rucremitente.'</cbc:ID>
                                </cac:PartyIdentification>
                                <cac:PartyLegalEntity>
                                    <cbc:RegistrationName><![CDATA['.$gre->grt->remitente.']]></cbc:RegistrationName>
                                </cac:PartyLegalEntity>
                            </cac:DespatchParty>
                        </cac:Despatch>
                    </cac:Delivery>
                    <!--DATOS DEL VEHICULO PRINCIPAL-->
                    <cac:TransportHandlingUnit>
                        <cac:TransportEquipment>
                            <cbc:ID>'.$gre->vehiculo->placa.'</cbc:ID>
                            <cac:ApplicableTransportMeans>
                                <cbc:RegistrationNationalityID>'.$gre->vehiculo->chv.'</cbc:RegistrationNationalityID>
                            </cac:ApplicableTransportMeans>
                            <!--DATOS DEL VEHICULO CARRETA-->
                            <cac:AttachedTransportEquipment>
                                <cbc:ID>'.$gre->vehiculo->carreta.'</cbc:ID>
                            </cac:AttachedTransportEquipment>
                        </cac:TransportEquipment>
                    </cac:TransportHandlingUnit>
                </cac:Shipment>
                ';

            /*
                            <!--<cac:ShipmentDocumentReference>
                                <cbc:ID schemeID="'.$gre->vehiculo->entidadv.'"  schemeName="Entidad Autorizadora" schemeAgencyName="PE:SUNAT">'.$gre->vehiculo->autorizacionv.'</cbc:ID>
                            </cac:ShipmentDocumentReference>-->
            */
                            /*<cac:ApplicableTransportMeans>
                                    <cbc:RegistrationNationalityID>'.$gre->vehiculo->chv.'</cbc:RegistrationNationalityID>
                                </cac:ApplicableTransportMeans>*/
        //DATOS DE LA CARGA
        $i = 1;                        
        $xml .= '<cac:DespatchLine>
                        <cbc:ID>'.$i.'</cbc:ID>
                        <cbc:DeliveredQuantity unitCode="'.$gre->carga->unidad.'" unitCodeListID="UN/ECE rec 20" unitCodeListAgencyName="United Nations Economic Commission for Europe">'.$gre->carga->cantidad.'</cbc:DeliveredQuantity>
                        <cac:OrderLineReference>
                            <cbc:LineID>'.$i.'</cbc:LineID>
                        </cac:OrderLineReference>
                        <cac:Item>
                            <cbc:Description>'.$gre->carga->detalle.'</cbc:Description>
                            <cac:SellersItemIdentification>
                                <cbc:ID>C000-1</cbc:ID>
                            </cac:SellersItemIdentification>
                        </cac:Item>
                    </cac:DespatchLine>
                    ';

        $xml.=  '</DespatchAdvice>';
        return $xml;
    }

    public function VerificarGuia($nro)
    {
        $obj_guia = Guia::select('*')
            ->where('idGuia','=',$nro)
            ->first();

        $token = $this->TokenSunat();
        $token = $token->access_token;

        $respuestaTicket = $this->TicketSunat($obj_guia->ticketGui, $token, "20442847071","20442847071-31-".$obj_guia->serieGui."-".$obj_guia->nroGui);

        $xmlContent = Storage::get("CDR/R-"."20442847071-31-".$obj_guia->serieGui."-".$obj_guia->nroGui.".xml");

        $xmlContent = strval($xmlContent);
        $posicion = strpos($xmlContent, "https://e-factura.sunat.gob.pe");

        $archivoEnlace = substr($xmlContent, $posicion);
        
        $posicion = strpos($archivoEnlace, "</");

        $archivoEnlace = substr($archivoEnlace, 0,$posicion);


        echo $archivoEnlace;
    }
    public function Pdf($guia)
    {
        $obj_empresa = Empresa::select('empresa.*')
            ->where('principalEmp','=',"PRINCIPAL")
            ->first();

        $obj_guia = DB::table('guia as grt')
            ->select('grt.*','grr.serieGui as serieGrr','grr.nroGui as nroGrr')
            ->join('guia as grr','grr.idGuia','grt.Origen_idGuia')
            ->where('grt.idGuia','=',$guia)
            ->first();

        $obj_servicio = Servicio::select(DB::raw('CONCAT(operador.paternoPer, " ",operador.maternoPer, " ", operador.nombrePer) AS trabajadorPer'),'operador.dniPer','operador.licenciaPer',
            DB::raw('CONCAT(reten.paternoPer, " ",reten.maternoPer, " ", reten.nombrePer) AS trabajadorRet'),'operador.dniPer as dniRet','operador.licenciaPer as licenciaRet',
            'vehiculo.placaVeh','vehiculo.chvVeh','acople.placaVeh as acopleVeh',
            'remitente.rucExt as rucRem','remitente.nombreExt as nombreRem','destinatario.rucExt as rucDes','destinatario.nombreExt as nombreDes',
            'partida.valorDat as partidaCon','llegada.valorDat as llegadaCon','ubigeopSunatCon','ubigeolSunatCon',
            'cargaCon','cargaSer','unidadSunatCon')
            ->join('persona as operador','operador.idPersona','servicio.Persona_idPersona')
            ->leftJoin('persona as reten','reten.idPersona','servicio.Reten_idPersona')

            ->join('vehiculo','vehiculo.idVehiculo','servicio.Vehiculo_idVehiculo')
            ->leftJoin('vehiculo as acople','acople.idVehiculo','servicio.Acople_idVehiculo')
            
            ->join('convoy','convoy.idConvoy','servicio.Convoy_idConvoy')

            ->join('externo as remitente','remitente.idExterno','convoy.Remitente_idExterno')
            ->join('externo as destinatario','destinatario.idExterno','convoy.Destinatario_idExterno')
            
            ->join('dato as partida','partida.idDato','convoy.Partida_idDato')
            ->join('dato as llegada','llegada.idDato','convoy.Llegada_idDato')

            ->join('dato as ','llegada.idDato','convoy.Llegada_idDato')

            ->where('idServicio','=',$obj_guia->Servicio_idServicio)
            ->first();            
            
        $obj_servicio->ubigeopCon = $this->ubigeos[$obj_servicio->ubigeopSunatCon];
        $obj_servicio->ubigeolCon = $this->ubigeos[$obj_servicio->ubigeolSunatCon];

        $data = [];
        $data["empresa"] = $obj_empresa;
        $data["guia"] = $obj_guia;
        $data["servicio"] = $obj_servicio;


        $pdf=PDF::loadView('Pdfs.Operaciones.Guia', $data);

        $pdf->setPaper('A4', 'portrait');

        return $pdf->stream();

    }

}
