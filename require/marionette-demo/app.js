"use strict";

requirejs.config({
  paths: {
    "underscore": "//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.1/underscore",
    "jquery": "//cdnjs.cloudflare.com/ajax/libs/jquery/1.10.2/jquery",
    "backbone" : "//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone",
    "marionette" : "//cdnjs.cloudflare.com/ajax/libs/backbone.marionette/1.8.0/backbone.marionette"
  },
  shim: {
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: ["jquery", "underscore"],
      exports: "Backbone"
    },
    marionette: {
      deps: ["backbone"],
      exports: "Marionette"
    }
  }
});

define(["backbone", "marionette", "router"], function (Backbone, Marionette, Router) {

  var app = new Marionette.Application();

  app.addRegions({
    form_region: "#form-region",
    contacts_list: "#contacts_list"
  });

  app.on('start', function() {
    Backbone.history.start();
  });

  app.addInitializer(function() {
    app.Router = new Marionette.AppRouter({
      controller: new Router({app: app}),
      appRoutes: {
        "": "list",
        "list": "list",
        "view": "view"
      }
    });
  });

  app.start();
});

