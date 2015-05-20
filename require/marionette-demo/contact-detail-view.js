"use strict";

define(['marionette'], function(Marionette){

  var ContactDetailView = Marionette.ItemView.extend({
    template: "#contact-detail-template",
    events: {
      'click .btn': 'onClickBtn'
    },
    onClickBtn: function() {
      window.app.Router.navigate('list', {trigger: true})
    }
  });

  return ContactDetailView;
});
