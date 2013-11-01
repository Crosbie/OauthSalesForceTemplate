/*global $fh, Backbone*/
HomeView = Backbone.View.extend({
    tagName: 'section', // HTML tag used to wrap this view
    id: 'homeView', // ID given to the above tag eg. <section id="homeView">

    // event bindings for this view
    events: {
        // event element : function
    },

    //any pre-render logic goes here
    initialize: function() {
        this.user = localStorage.getItem('user');
    },

    render: function(){
        // Use HandleBarsJS to compile template
        var template = Handlebars.compile( $("#homeTpl").html());
        this.$el.html(template({user:this.user}));
        return this;
    }
});