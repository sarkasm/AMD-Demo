"use strict";

var ContactView = require("./contact-view.js");
var Marionette = require("marionette");

var ContactsCompositeView = Marionette.CompositeView.extend({
  template: "#contacts-table",
  itemView: ContactView,
  itemViewContainer: "tbody",
  events: {
    'click .btn': 'onClickBtn'
  },
  onClickBtn: function() {
    window.app.Router.navigate('view', {trigger: true})
  }
});

module.exports = ContactsCompositeView;
