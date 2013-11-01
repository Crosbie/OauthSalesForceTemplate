/*global $fh, App, Backbone*/
App.Router = Backbone.Router.extend({


    routes: {
        "": "detectUser", // Default route
        "login": "showLogin",
        "home": "showHome"
    },

    $content: $("#content"),

    initialize: function() {
        // _.bindAll(this);
        $fh.data({});
    },

    showLogin: function() {
        App.views.login = new LoginView();
        this.$content.html(App.views.login.render().el);
    },

    showHome: function() {
        App.views.home = new HomeView();
        this.$content.html(App.views.home.render().el);
    },

    detectUser: function(){
        console.log('detect');
        if(true){
            this.showLogin();
        } else {
            this.showHome();
        }
    }

});