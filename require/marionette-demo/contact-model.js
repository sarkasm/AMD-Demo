"use strict";

define(['backbone'], function(Backbone){

  var Contact = Backbone.Model.extend({
    defaults: {country: "USA"},
    validate: function(attrs, options){
      if(attrs["firstName"] == "Steve"){
        return "Steve not allowed!";
      }
    }
  });
  return Contact;
});
