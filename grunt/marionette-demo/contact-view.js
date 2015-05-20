
var ContactView = Backbone.Marionette.ItemView.extend({
  tagName: "tr",
  template: "#contact-template",
  events: {
    "click .btn": "deleteContact"
  },
  deleteContact: function(){
    this.model.collection.remove(this.model);
  }
});

