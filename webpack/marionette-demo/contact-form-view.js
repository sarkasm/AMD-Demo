var Contact = require("./contact-model.js");

var ContactForm = Backbone.Marionette.ItemView.extend({
  template : "#contacts-form",

  events: {
    "click #add" : "addContact"
  },

  ui: {
    firstname: "#contact_first_name",
    lastname: "#contact_last_name",
    country: "#contact_country"
  },

  addContact: function(){
    var input = {}, contact;

    if(this.ui.firstname.val().length){
      input['firstName'] = this.ui.firstname.val();
    }

    if(this.ui.lastname.val().length){
      input['lastName'] = this.ui.lastname.val();
    }

    if(this.ui.country.val().length){
      input['country'] = this.ui.country.val();
    }

    contact = new Contact(input);

    if(contact.isValid()){
      this.collection.add(contact);
    } else {
      alert("INVALID: " + contact.validationError);
    }
  }
});

module.exports = ContactForm;