
var Router = Marionette.Controller.extend({
    initialize: function(options){
      this.app = options.app;
    },
    list: function list() {
      var contacts = new ContactCollection();
      this.app.form_region.show(new ContactForm({collection: contacts}));
      this.app.contacts_list.show(new ContactsCompositeView({collection: contacts}));
    },
    view: function view(){
      var contact = new Contact({firstName: "Homer", lastName: "Simpson", country: "USA"});
      this.app.form_region.show(new ContactDetailView({model: contact}));
      this.app.contacts_list.reset();
    }
});

