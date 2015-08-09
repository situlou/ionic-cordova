angular.module('starter.controllers',['ngCordova'])

.controller('BarCodeCtrl', function($scope, $cordovaBarcodeScanner) {
    $scope.readQR = function(){
      $cordovaBarcodeScanner
      .scan()
      .then(function(barcodeData) {
        console.log(barcodeData);
        alert(barcodeData.text);
        // Success! Barcode data is here
      }, function(error) {
        console.log(error);
        alert(error);
        // An error occurred
      });
    }
})
