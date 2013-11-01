/*global $fh, Backbone*/
LoginView = Backbone.View.extend({
    tagName: 'section', // HTML tag used to wrap this view
    id: 'loginView', // ID given to the above tag eg. <section id="loginView">

    // event bindings for this view
    events: {
        // event element : function
        'submit form' : 'login',
        'click strong': 'populateInputs'
    },

    initialize: function() {
        //any pre-render logic goes here
    },

    render: function(){
        // Use HandleBarsJS to compile template
        var template = Handlebars.compile( $("#loginTpl").html() );
        this.$el.html(template);
        return this;
    },

    login: function(e){
        e.preventDefault(); //prevent page refresh
        console.log(e);

        var form = e.currentTarget;
        var user = form[0].value;
        var pass = form[1].value;

        //TODO - auth call
        if(user && pass){
            Backbone.history.navigate('home',true);
        }
    },

    // If user doesnt have a Sales Force login, use FH developer
    // account to login
    populateInputs: function(){
        $('#email').val('eoin.crosbie@feedhenry.com');
        $('#pass').val('crosbie1');
    }
});