"use strict";

define(['marionette'], function(Marionette){

  var ContactDetailView = Marionette.ItemView.extend({
    template: "#contact-detail-template"
  });

  return ContactDetailView;
});
