"use strict";

var Marionette = require("marionette");

var ContactDetailView = Marionette.ItemView.extend({
  template: "#contact-detail-template"
});

module.exports = ContactDetailView;
