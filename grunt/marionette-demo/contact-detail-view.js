
var ContactDetailView = Backbone.Marionette.ItemView.extend({
  template: "#contact-detail-template",
  events: {
    'click .btn': 'onClickBtn'
  },
  onClickBtn: function() {
    window.app.Router.navigate('list', {trigger: true})
  }
});

