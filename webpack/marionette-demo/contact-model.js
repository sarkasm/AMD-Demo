
var Contact = Backbone.Model.extend({
  defaults: {country: "USA"},
  validate: function(attrs, options){
    if(attrs["firstName"] == "Steve"){
      return "Steve not allowed!";
    }
  }
});

module.exports = Contact;
