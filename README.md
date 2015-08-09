/******************************************************************\
	CONTENT

	$Installation
	$BarcodeScanner
	$SocialSharing

\******************************************************************/






/******************************************************************\
	$Installation
********************************************************************

	1 - install bower (npm install bower)
	
	2 - install ngCordova through bower (bower install ngCordova)

	3 - add ngCordova script (<script src="lib/ngCordova/dist/ng-cordova.js"></script>)

	4 - inject as a angular dependency (angular.module('myApp', ['ngCordova']))

	5 - look for the plugin that you want to implement (http://ngcordova.com/docs/plugins/)

	6 - install the plugin (example (barcode):  cordova plugin add https://github.com/wildabeast/BarcodeScanner.git),
		it is going to install "root/plugins/"


\******************************************************************/






/******************************************************************\
	$BarCode
********************************************************************

	Install

		cordova plugin add https://github.com/wildabeast/BarcodeScanner.git

	
	AngularDependecy
	
		Module Name: $cordovaBarcodeScanner

		Module references:

			$cordovaBarcodeScanner  				--Module
				.scan()								--Start Scaning
				.then( 								--Promise (success event, error event)
						function(barcodeData){} , 
						function(error){} 
					  )
	

\******************************************************************/








/******************************************************************\
	$SocialSharing
********************************************************************

	Install

		cordova plugin add https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin.git

	
	AngularDependecy
	
		Module Name: $cordovaSocialSharing

		Module references:

			$cordovaSocialSharing  												--Module

				.share(message, subject, file, link)..							--Share via native share sheet
				
				.canShareVia(socialType, message, image, link)..				--Check if you can share through a socialtype (twitter, facebook)
				.canShareViaEmail()..											--Check if you can share through email

				.shareViaTwitter(message, image, link)..						--if you have checking then you directly share by twitter..
				.shareViaWhatsApp(message, image, link)..						
				.shareViaFacebook(message, image, link)..						
				.shareViaSMS(message, number)..					
				.shareViaEmail(message, subject, toArr, ccArr, bccArr, file)..


				.then( 															--Promise (success event, error event)
						function(result){} , 
						function(error){} 
					  )
	
	Note

		This feature can check on an android virtual device or a real device

\******************************************************************/