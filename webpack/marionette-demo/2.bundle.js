webpackJsonp([2],{

/***/ 5:
/***/ function(module, exports, __webpack_require__) {

	
	var Contact = Backbone.Model.extend({
	  defaults: {country: "USA"},
	  validate: function(attrs, options){
	    if(attrs["firstName"] == "Steve"){
	      return "Steve not allowed!";
	    }
	  }
	});

	module.exports = Contact;


/***/ },

/***/ 6:
/***/ function(module, exports, __webpack_require__) {

	
	var ContactDetailView = Backbone.Marionette.ItemView.extend({
	  template: "#contact-detail-template"
	});

	module.exports = ContactDetailView;


/***/ }

});