
var Contact = Backbone.Model.extend({
  defaults: {country: "USA"},
  validate: function(attrs, options){
    if(attrs["firstName"] == "Steve"){
      return "Steve not allowed!";
    }
  }
});

var ContactCollection = Backbone.Collection.extend({
  model: Contact
})

var ContactView = Backbone.Marionette.ItemView.extend({
  tagName: "tr",
  template: "#contact-template",
  events: {
    "click .btn": "deleteContact"
  },
  deleteContact: function(){
    this.model.collection.remove(this.model);
  }
});

var ContactsListView = Backbone.Marionette.CollectionView.extend({
  itemView: ContactView
});

var ContactsCompositeView = Backbone.Marionette.CompositeView.extend({
  template: "#contacts-table",
  itemView: ContactView,
  itemViewContainer: "tbody"
});

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

var app = new Backbone.Marionette.Application();
app.addRegions({
  form_region: "#form-region",
  contacts_list: "#contacts_list"
});

app.addInitializer(function(){
  app.contacts = new ContactCollection();
  app.form_region.show(new ContactForm({collection: app.contacts}));
  app.contacts_list.show(new ContactsCompositeView({collection: app.contacts}));
});

app.start();
