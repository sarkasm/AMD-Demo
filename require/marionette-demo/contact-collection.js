define(['backbone', 'contact-model'], function(Backbone, Contact){
  var ContactCollection = Backbone.Collection.extend({
    model: Contact
  });

  return ContactCollection;

});

