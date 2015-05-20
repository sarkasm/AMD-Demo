var ContactsCompositeView = Backbone.Marionette.CompositeView.extend({
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

