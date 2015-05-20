"use strict";

define(['marionette'], function (Marionette) {
  var router = Marionette.Controller.extend({
      initialize: function(options){
        this.app = options.app;
      },
      list: function list() {
        var _this = this;
        require(['contact-collection', 'contact-form-view', 'contact-composite-view'], 
          function(ContactCollection, ContactForm, ContactsCompositeView){
            var contacts = new ContactCollection();
            _this.app.form_region.show(new ContactForm({collection: contacts}));
            _this.app.contacts_list.show(new ContactsCompositeView({collection: contacts}));
          }
        );
      },
      view: function view(){
        var _this = this;
        require(['contact-model', 'contact-detail-view.js'], 
          function(Contact, ContactDetailView){
            var contact = new Contact({firstName: "Hard", lastName: "Coded", country: "Australia"});
            _this.app.form_region.show(new ContactDetailView({model: contact}));
            _this.app.contacts_list.reset();
          }
        ); 
      }
  });
  return router;
});