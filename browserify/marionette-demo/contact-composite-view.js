"use strict";

var ContactView = require("./contact-view.js");
var Marionette = require("marionette");

var ContactsCompositeView = Marionette.CompositeView.extend({
  template: "#contacts-table",
  itemView: ContactView,
  itemViewContainer: "tbody"
});

module.exports = ContactsCompositeView;
