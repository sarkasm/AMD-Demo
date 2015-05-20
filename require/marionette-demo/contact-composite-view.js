"use strict";

define(['marionette', 'contact-view'], function(Marionette, ContactView){

  var ContactsCompositeView = Marionette.CompositeView.extend({
    template: "#contacts-table",
    itemView: ContactView,
    itemViewContainer: "tbody",
    events: {
      'click .btn': 'onClickBtn'
    },
    onClickBtn: function() {
      window.app.Router.navigate('view', {trigger: true})
    }
  });

  return ContactsCompositeView;
});