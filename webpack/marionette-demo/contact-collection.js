var Contact = require("./contact-model.js");

var ContactCollection = Backbone.Collection.extend({
  model: Contact
})

module.exports = ContactCollection;

