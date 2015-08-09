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


