"use strict";

var Contact = require("./contact-model.js");
var Backbone = require("backbone");

var ContactCollection = Backbone.Collection.extend({
  model: Contact
})

module.exports = ContactCollection;

