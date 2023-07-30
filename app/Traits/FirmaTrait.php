<?php
/*header ('Content-type: text/html; charset=utf-8'); 
require 'see/lib/xmlseclibs-master/xmlseclibs.php';*/

namespace App\Traits;

use Illuminate\Support\Facades\Storage;
use RobRichards\XMLSecLibs\XMLSecurityDSig;
use RobRichards\XMLSecLibs\XMLSecurityKey;

trait FirmaTrait
{
	/*public function firmar(DOMDocument $domDocument, $ruc="", $modo)
	{
		$ReferenceNodeName = 'ExtensionContent';
//              $privateKey = file_get_contents('prueba/server_key.pem');
//		$publicKey = file_get_contents('prueba/server.pem');
                
                $modo = ($modo == 1) ? 'produccion' : 'prueba';
                $privateKey = file_get_contents(APPPATH ."libraries/certificado_digital/$modo/server_key.pem");
		$publicKey = file_get_contents(APPPATH ."libraries/certificado_digital/$modo/server.pem");

		$objSign = new XMLSecurityDSig($ruc);
		$objSign->setCanonicalMethod(XMLSecurityDSig::C14N);
		$objSign->addReference(
			$domDocument, 
			XMLSecurityDSig::SHA1, 
			array('http://www.w3.org/2000/09/xmldsig#enveloped-signature'),
			$options = array('force_uri' => true)
		);
		
		$objKey = new XMLSecurityKey(XMLSecurityKey::RSA_SHA1, array('type'=>'private'));
		$objKey->loadKey($privateKey);
		
		// Sign the XML file
		$Node = $domDocument->getElementsByTagName($ReferenceNodeName)->item(1);
		if (!($Node)) $Node = $domDocument->getElementsByTagName($ReferenceNodeName)->item(0);
		$objSign->sign($objKey, $Node);
		// Add the associated public key to the signature
		$objSign->add509Cert($publicKey);
		
		return $domDocument;

	}*/

	public function Firmar($obj_xml, $password)
	{
		$ReferenceNodeName = 'ExtensionContent';

        //$privateKey = file_get_contents(APPPATH ."libraries/certificado_digital/$modo/server_key.pem");
		//$publicKey = file_get_contents(APPPATH ."libraries/certificado_digital/$modo/server.pem");

		//OBTIENE EL ARCHIVO XML
        $obj_dom = new \DOMDocument();
        $obj_dom->loadXML($obj_xml);

		//$privateKey = Storage::disk('local')->get('certificado_digital/produccion/server_key.pem');
		//$publicKey = Storage::disk('local')->get('certificado_digital/produccion/server.pem');
		$privateKey = Storage::disk('local')->get('certificado_digital/produccion/llave-privada2.pem');
		$publicKey = Storage::disk('local')->get('certificado_digital/produccion/llave-publica.pem');

		$obj_sign = new XMLSecurityDSig("LIBERTAD2016");
		$obj_sign->setCanonicalMethod(XMLSecurityDSig::C14N);

		$obj_sign->addReference(
			$obj_dom, 
			XMLSecurityDSig::SHA1,
			array('http://www.w3.org/2000/09/xmldsig#enveloped-signature'),
			$options = array('force_uri' => true)
		);

		$obj_key = new XMLSecurityKey(XMLSecurityKey::RSA_SHA1, array('type'=>'private'));

		$obj_key->loadKey($privateKey);
		
		// Sign the XML file
		$Node = $obj_dom->getElementsByTagName($ReferenceNodeName)->item(1);
		if (!($Node)) $Node = $obj_dom->getElementsByTagName($ReferenceNodeName)->item(0);
		$obj_sign->sign($obj_key, $Node);
		// Add the associated public key to the signature
		$obj_sign->add509Cert($publicKey);
		
		return $obj_dom;
		/********************************************************************/
		/*$xml = new \DOMDocument();
		$xml->load($obj_xml);

		$llavePrivada = Storage::disk('local')->get('certificado_digital/produccion/llave-privada2.pem');
		$llavePublica = Storage::disk('local')->get('certificado_digital/produccion/llave-publica.pem');

		$signature = new XMLSecurityDSig("LIBERTAD2016");
		$signature->setCanonicalMethod(XMLSecurityDSig::EXC_C14N);
		$signature->addReference($xml, XMLSecurityDSig::SHA1, ['http://www.w3.org/2000/09/xmldsig#enveloped-signature']);

		$privateKey = new XMLSecurityKey(XMLSecurityKey::RSA_SHA1, ['type' => 'private']);
		$privateKey->loadKey($llavePrivada);

		$signature->sign($privateKey);
		$signature->insertSignature($xml->documentElement);return;
		$signature->add509Cert($llavePublica);
		return $xml;*/
		//$xml->save('documento_firmado.xml');


		/********************************************************************/

	}

	/*public function Firmar(DOMDocument $domDocument, $ruc="", $modo)
	{

		//Load the XML to be signed
		$doc = new DOMDocument();
		$doc->load('./path/to/file/tobesigned.xml');

		// Create a new Security object 
		$objDSig = new XMLSecurityDSig();
		// Use the c14n exclusive canonicalization
		$objDSig->setCanonicalMethod(XMLSecurityDSig::EXC_C14N);
		// Sign using SHA-256
		$objDSig->addReference(
		    $doc, 
		    XMLSecurityDSig::SHA256, 
		    array('http://www.w3.org/2000/09/xmldsig#enveloped-signature')
		);

		// Create a new (private) Security key
		$objKey = new XMLSecurityKey(XMLSecurityKey::RSA_SHA256, array('type'=>'private'));
		/*
		If key has a passphrase, set it using
		$objKey->passphrase = '<passphrase>';
		*/
		// Load the private key
		/*$objKey->loadKey('./path/to/privatekey.pem', TRUE);

		// Sign the XML file
		$objDSig->sign($objKey);

		// Add the associated public key to the signature
		$objDSig->add509Cert(file_get_contents('./path/to/file/mycert.pem'));

		// Append the signature to the XML
		$objDSig->appendSignature($doc->documentElement);
		// Save the signed XML
		$doc->save('./path/to/signed.xml');




	}*/
}
?>