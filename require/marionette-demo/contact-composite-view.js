"use strict";

define(['marionette', 'contact-view'], function(Marionette, ContactView){

  var ContactsCompositeView = Marionette.CompositeView.extend({
    template: "#contacts-table",
    itemView: ContactView,
    itemViewContainer: "tbody"
  });

  return ContactsCompositeView;
});