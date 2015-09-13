var db;

angular.module('starter.controllers',['ngCordova'])


/****************************************************************\
  $BarCode Implementations
\****************************************************************/
.controller('barcodeCtrl', function($scope, $cordovaBarcodeScanner) {
    $scope.readQR = function(){

      $cordovaBarcodeScanner
      .scan()
      .then(
          function(barcodeData) // Success! Barcode data is here
          {
                console.log(barcodeData);
                alert(barcodeData.text);
          }, 
          function(error) // An error occurred
          {    
                console.log(error);
                alert(error);
          }
      );

    }
})

/****************************************************************\
  $SocialSharing Implementations
\****************************************************************/
.controller('socialsharingCtrl', function($scope, $cordovaSocialSharing) {
    $scope.shareAnywhere = function() {
        var message = "This is your message",
            subject = "This is your subject",
            file = "www/imagefile.png",
            link = "http://blog.nraboy.com"
       
        $cordovaSocialSharing
        .share(message, subject, file, link) // Share via native share sheet
        .then(
            function(result)  // Success!
            { 
                  alert(result);
            }, 
            function(err)  // An error occured. Show a message to the user
            {
                  alert(result);
            }
        );
    }
 
    $scope.shareViaTwitter = function(message, image, link) {
        $cordovaSocialSharing
        .canShareVia("twitter", message, image, link) //Check if twitter is installed
        .then(
            function(result) //Success!
            {
                $cordovaSocialSharing.shareViaTwitter(message, image, link); //Share via twitter
            }, 
            function(error) //Error Or twitter not found
            {
                alert("Cannot share on Twitter");
            }
        );
    }
})

/****************************************************************\
  $GeolocationSource Implementations
\****************************************************************/
.controller('geolocationCtrl', function($scope,$cordovaGeolocation) {
    $scope.getLocation = function(){

        var posOptions = {timeout: 10000, enableHighAccuracy: false};
        $cordovaGeolocation
        .getCurrentPosition(posOptions)
        .then(
            function (position)  // Success! Barcode data is here
            { 
                var lat  = position.coords.latitude
                var long = position.coords.longitude
                alert("position lat: " +lat+ " long: "+ long );
            }, 
            function(err)  // An error occurred
            {
                 console.log(error);
                 alert(error);
            }
        );
    }
})

/****************************************************************\
  $Toast Implementations
\****************************************************************/
.controller('toastCtrl', function($scope,$cordovaToast) {
    $scope.show = function(){

       $cordovaToast
       .show('Here is a custom toast with a long duration and center position', 'long', 'center')
       .then(
          function(success) 
          {
          // success
          }, 
          function (error) 
          {
          // error
          }
        );

    }

    $scope.showShortTop = function(){

       $cordovaToast
       .showShortTop('Here is a toast with a short duration and top position')
       .then(
          function(success) 
          {
          // success
          }, 
          function (error) 
          {
          // error
          }
        );

    }

    $scope.showShortCenter = function(){

       $cordovaToast
       .showShortCenter('Here is a toast with a short duration and center position')
       .then(
          function(success) 
          {
          // success
          }, 
          function (error) 
          {
          // error
          }
        );

    }

    $scope.showShortBottom = function(){

       $cordovaToast
       .showShortBottom('Here is a toast with a short duration and bottom position')
       .then(
          function(success) 
          {
          // success
          }, 
          function (error) 
          {
          // error
          }
        );

    }

    $scope.showLongTop = function(){

       $cordovaToast
       .showLongTop('Here is a toast with a long duration and top position')
       .then(
          function(success) 
          {
          // success
          }, 
          function (error) 
          {
          // error
          }
        );

    }

    $scope.showLongCenter = function(){

       $cordovaToast
       .showLongCenter('Here is a toast with a long duration and center position')
       .then(
          function(success) 
          {
          // success
          }, 
          function (error) 
          {
          // error
          }
        );

    }

    $scope.showLongBottom = function(){

       $cordovaToast
       .showLongBottom('Here is a toast with a long duration and bottom position')
       .then(
          function(success) 
          {
          // success
          }, 
          function (error) 
          {
          // error
          }
        );

    }
})

/****************************************************************\
  $SQlite Implementations
\****************************************************************/
.run(function($ionicPlatform, $cordovaSQLite) {
        $ionicPlatform.ready(function() {
            db = $cordovaSQLite.openDB("my.db");
            //$cordovaSQLite.execute(db, "DROP TABLE people");
            $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS people (id integer primary key AUTOINCREMENT, firstname text, lastname text)");
        });
})
.controller('sqliteCtrl', function($scope,$cordovaSQLite) {
    $scope.person = {
      firstname: "",
      lastname: ""
    } 
    $scope.people = [];

    $scope.insert = function() {

        var firstname = $scope.person.firstname;
        var lastname = $scope.person.lastname;

        var query = "INSERT INTO people (firstname, lastname) VALUES (?,?)";
        $cordovaSQLite.execute(db, query, [firstname, lastname]).then(function(res) {
           alert("INSERT ID -> " + res.insertId);
        }, function (err) {
           alert(err);
        });
    }
 
    $scope.select = function() {
        var query = "SELECT id, firstname, lastname FROM people";
        $cordovaSQLite.execute(db, query, []).then(function(res) {
            $scope.people = [];
            
            if(res.rows.length > 0) {
                for (var i = 0; i < res.rows.length ; i++) {
                   $scope.people.push(
                            { 
                              id: res.rows.item(i).id , 
                              firstname:res.rows.item(i).firstname ,
                              lastname :res.rows.item(i).lastname  
                            }
                        );
                };
            } else {
                alert("No results found");
            }
        }, function (err) {
           alert(err);
        });
    }

    $scope.delete = function(id) {
        var query = "DELETE FROM people WHERE id = ?";
        $cordovaSQLite.execute(db, query, [id]).then(function(res) {
              $scope.select();
        }, function (err) {
           alert(err);
        });
    }
})