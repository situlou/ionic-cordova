# ionic-cordova

ionic-cordovar is a repository with simple examples of each of the cordova plugins on the ionic framework. 

<br />
<br />
<br />


### Version

* [ionic] - ~1.6.3
* [angularjs] - ~0.1.19-alpha
* [bower] - ~1.4.1
* [ngCordova] - ~0.1.18-alpha
* [Cordova] - ~5.0.0

<br />
<br />
<br />


### Installation

You need ngCordova installed globally:

```sh
$ npm install -g bower 
$ bower install -g ngCordova
```

then add ngCordova script **<script src="lib/ngCordova/dist/ng-cordova.js"></script>**, 
inject it as a angular dependency **angular.module('myApp', ['ngCordova'])**.

Look for the plugin that you want to  [implement](http://ngcordova.com/docs/plugins/), for example 
[barcodescannner](http://ngcordova.com/docs/plugins/barcodeScanner/) and install it:

```sh
$ cordova plugin add https://github.com/wildabeast/BarcodeScanner.git
```

<br />
<br />
<br />


### Plugins

#### BarcodeScanner

Install:

```sh
$ cordova plugin add https://github.com/wildabeast/BarcodeScanner.git
```

AngularDependecy:

**Module Name**: $cordovaBarcodeScanner

**Module references**:

```sh
$cordovaBarcodeScanner  	//Module		
.scan()						//Start Scaning
.then( 					    //Promise (success event, error event)
    function(barcodeData){} , 
    function(error){} 
)
```


<br />
<br />



#### SocialSharing

Install:

```sh
cordova plugin add https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin.git
```

AngularDependecy:

**Module Name**: $cordovaSocialSharing

**Module references**:

```sh
$cordovaSocialSharing  	//Module
.share(message, subject, file, link)..	//Share via native share sheet
.canShareVia(socialType, message, image, link).. //Check if you can share through a socialtype (twitter, facebook)
.canShareViaEmail()..	//Check if you can share through email
.shareViaTwitter(message, image, link)..	//if you have checking then you directly share by twitter..
.shareViaWhatsApp(message, image, link)..						
.shareViaFacebook(message, image, link)..						
.shareViaSMS(message, number)..					
.shareViaEmail(message, subject, toArr, ccArr, bccArr, file)..

.then( 	 //Promise (success event, error event)
    function(result){} , 
    function(error){} 
)
```

**Note**: This feature can check on an android virtual device or a real device


<br />
<br />


#### Geolocation	

Install:

```sh
$ cordova plugin add cordova-plugin-geolocation
```

AngularDependecy:

**Module Name**: $cordovaGeolocation

**Module references**:

```sh
 var posOptions = {timeout: 10000, enableHighAccuracy: false}; //enableHighAccuracy: Provides a hint that the application needs the best 																 possible results

$cordovaGeolocation  						//Module		
.getCurrentPosition(posOptions)				//Set the options and start getting current location
.then( 					    				//Promise (success event, error event)
    function(position){ position.coords.latitude, position.coords.longitude} , 
    function(error){} 
)
```

<br />
<br />


#### Toast	

Install:

```sh
$ cordova plugin add https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin.git
```

AngularDependecy:

**Module Name**: $cordovaToast

**Module references**:

```sh
 $cordovaToast  								//Module		
.show(message, duration, position)...			//Method for showing the toast
.showShortTop(message)...
.showShortCenter(message)...
.showShortBottom(message)...
.showLongTop(message)...
.showLongCenter(message)...
.showLongBottom(message)...

.then( 					    					//Promise (success event, error event)
    function(success){ } , 
    function(error){} 
)
```

<br />
<br />


#### SQlite	

Install:

```sh
$ cordova plugin add https://github.com/litehelpers/Cordova-sqlite-storage.git
```

AngularDependecy:

**Module Name**: $cordovaSQLite

**Module references**:

```sh

var db = $cordovaSQLite.openDB("databasename");	//Create Or Open a Database

$cordovaSQLite
.execute(db, query, parametersArray); 			//Execute a query script
.deleteDB("databasename"); 						//Delete Database


```