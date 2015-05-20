"use strict";

var Marionette = require("marionette");

var ContactDetailView = Marionette.ItemView.extend({
  template: "#contact-detail-template",
  events: {
    'click .btn': 'onClickBtn'
  },
  onClickBtn: function() {
    window.app.Router.navigate('list', {trigger: true})
  }
});

module.exports = ContactDetailView;
