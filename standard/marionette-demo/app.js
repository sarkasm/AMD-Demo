
var app = window.app = new Backbone.Marionette.Application();
app.addRegions({
  form_region: "#form-region",
  contacts_list: "#contacts_list"
});

app.on('start', function() {
  Backbone.history.start();
});

app.addInitializer(function() {
  app.Router = new Marionette.AppRouter({
    controller: new Router({app: app}),
    appRoutes: {
      "": "list",
      "list": "list",
      "view": "view"
    }
  });
});

app.start();
