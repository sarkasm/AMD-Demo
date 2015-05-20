
// var ContactView = require("./contact-view.js");

var ContactsCompositeView = Backbone.Marionette.CompositeView.extend({
  template: "#contacts-table",
  itemView: ContactView,
  itemViewContainer: "tbody"
});

// module.exports = ContactsCompositeView;
