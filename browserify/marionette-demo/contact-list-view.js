"use strict";

var Marionette = require("marionette");
var ContactView = require("contact-view");

var ContactsListView = Marionette.CollectionView.extend({
  itemView: ContactView
});
