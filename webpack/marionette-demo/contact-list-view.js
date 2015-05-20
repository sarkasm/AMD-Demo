var ContactView = require("contact-view");

var ContactsListView = Backbone.Marionette.CollectionView.extend({
  itemView: ContactView
});
