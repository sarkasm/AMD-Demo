webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var Contact = __webpack_require__(5);

	var ContactCollection = Backbone.Collection.extend({
	  model: Contact
	})

	module.exports = ContactCollection;



/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var Contact = __webpack_require__(5);

	var ContactForm = Backbone.Marionette.ItemView.extend({
	  template : "#contacts-form",

	  events: {
	    "click #add" : "addContact"
	  },

	  ui: {
	    firstname: "#contact_first_name",
	    lastname: "#contact_last_name",
	    country: "#contact_country"
	  },

	  addContact: function(){
	    var input = {}, contact;

	    if(this.ui.firstname.val().length){
	      input['firstName'] = this.ui.firstname.val();
	    }

	    if(this.ui.lastname.val().length){
	      input['lastName'] = this.ui.lastname.val();
	    }

	    if(this.ui.country.val().length){
	      input['country'] = this.ui.country.val();
	    }

	    contact = new Contact(input);

	    if(contact.isValid()){
	      this.collection.add(contact);
	    } else {
	      alert("INVALID: " + contact.validationError);
	    }
	  }
	});

	module.exports = ContactForm;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	
	var ContactView = __webpack_require__(7);

	var ContactsCompositeView = Backbone.Marionette.CompositeView.extend({
	  template: "#contacts-table",
	  itemView: ContactView,
	  itemViewContainer: "tbody"
	});

	module.exports = ContactsCompositeView;


/***/ },
/* 5 */
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
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	
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

	module.exports = ContactView;


/***/ }
]);