"use strict";

var Marionette = require("marionette");

var router = Marionette.Controller.extend({
    initialize: function(options){
      this.app = options.app;
    },
    list: function list() {
      var ContactCollection = require("./contact-collection.js");
      var ContactForm = require("./contact-form-view.js");
      var ContactsCompositeView = require("./contact-composite-view.js");
      var contacts = new ContactCollection();
      this.app.form_region.show(new ContactForm({collection: contacts}));
      this.app.contacts_list.show(new ContactsCompositeView({collection: contacts}));
    },
    view: function view(){
      var _this = this;
      var Contact = require("./contact-model.js");
      var ContactDetailView = require("./contact-detail-view.js");
      var contact = new Contact({firstName: "Homer", lastName: "Simpson", country: "USA"});
      this.app.form_region.show(new ContactDetailView({model: contact}));
      this.app.contacts_list.reset();
    }
});

module.exports = router