// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','ngCordova', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.constant('debug', true)

.config(function($stateProvider, $urlRouterProvider,$provide) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html'
  })

  .state('app.barcode', {
    url: '/barcode',
    views: {
      'menuContent': {
        templateUrl: 'templates/barcode.html',
        controller: 'barcodeCtrl'
      }
    }
  })

  .state('app.socialsharing', {
    url: '/socialsharing',
    views: {
      'menuContent': {
        templateUrl: 'templates/socialsharing.html',
        controller: 'socialsharingCtrl'
      }
    }
  })

  .state('app.geolocation', {
    url: '/geolocation',
    views: {
      'menuContent': {
        templateUrl: 'templates/geolocation.html',
        controller: 'geolocationCtrl'
      }
    }
  })

  .state('app.toast', {
    url: '/toast',
    views: {
      'menuContent': {
        templateUrl: 'templates/toast.html',
        controller: 'toastCtrl'
      }
    }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/barcode');




  /*****************************************************************************\
    $Angular and Window handle excepcions

      Source:

        http://forum.ionicframework.com/t/error-tracking-in-angular/8641
        
  \*****************************************************************************/

  // catch exceptions in angular
  $provide.decorator('$exceptionHandler', ['$delegate', function($delegate){
    return function(exception, cause){
      $delegate(exception, cause);

      var data = {
        type: 'angular',
        url: window.location.hash,
        localtime: Date.now()
      };
      if(cause)               { data.cause    = cause;              }
      if(exception){
        if(exception.message) { data.message  = exception.message;  }
        if(exception.name)    { data.name     = exception.name;     }
        if(exception.stack)   { data.stack    = exception.stack;    }
      }

      if(debug){
        console.log('exception', data);
        window.alert('Error: '+data.message);
      } 
    };
  }]);


  // catch exceptions out of angular
  window.onerror = function(message, url, line, col, error){
    var stopPropagation = debug ? false : true;
    var data = {
      type: 'javascript',
      url: window.location.hash,
      localtime: Date.now()
    };
    if(message)       { data.message      = message;      }
    if(url)           { data.fileName     = url;          }
    if(line)          { data.lineNumber   = line;         }
    if(col)           { data.columnNumber = col;          }
    if(error){
      if(error.name)  { data.name         = error.name;   }
      if(error.stack) { data.stack        = error.stack;  }
    }

    if(debug){
      console.log('exception', data);
      window.alert('Error: '+data.message);
    } 
    return stopPropagation;
  };


});






