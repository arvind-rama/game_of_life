'use strict';
require.config({
   shim: {
    underscore: { exports: '_' 
    }, 
    backbone: {
     deps: [
      'underscore',
      'jquery'
     ],
     exports: 'Backbone'
    },
    backboneLocalstorage: {
     deps: ['backbone'],
     exports: 'Store'
    },
    bootstrap: {
     deps: ['jquery'],
     exports: 'Bootstrap'
    }
  },
  paths: {
   jquery: '../vendor/jquery/dist/jquery',
   underscore: '../vendor/underscore/underscore',
   backbone: '../vendor/backbone/backbone',
   backboneLocalstorage: '../vendor/backbone.localstorage/backbone.localStorage',
   bootstrap: '../vendor/bootstrap/bootstrap'
   }
});

require(
	['backbone',
	'views/app',
	], function (Backbone, AppView) {
		Backbone.history.start();
		new AppView();
	}
);
