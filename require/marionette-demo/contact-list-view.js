"use strict";

define(['marionette', 'contact-view'], function(Marionette, ContactView){
  var ContactsListView = Marionette.CollectionView.extend({
    itemView: ContactView
  });

  return ContactView;
});
