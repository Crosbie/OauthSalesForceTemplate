LoginView=Backbone.View.extend({tagName:"section",id:"loginView",events:{"submit form":"login","click strong":"populateInputs"},initialize:function(){},render:function(){var a=Handlebars.compile($("#loginTpl").html());return this.$el.html(a),this},login:function(a){a.preventDefault(),console.log(a);var b=a.currentTarget,c=b[0].value,d=b[1].value;c&&d&&Backbone.history.navigate("home",!0)},populateInputs:function(){$("#email").val("eoin.crosbie@feedhenry.com"),$("#pass").val("crosbie1")}}),HomeView=Backbone.View.extend({tagName:"section",id:"homeView",events:{},initialize:function(){this.user=localStorage.getItem("user")},render:function(){var a=Handlebars.compile($("#homeTpl").html());return this.$el.html(a({user:this.user})),this}}),App.Router=Backbone.Router.extend({routes:{"":"detectUser",login:"showLogin",home:"showHome"},$content:$("#content"),initialize:function(){$fh.data({})},showLogin:function(){App.views.login=new LoginView,this.$content.html(App.views.login.render().el)},showHome:function(){App.views.home=new HomeView,this.$content.html(App.views.home.render().el)},detectUser:function(){console.log("detect"),this.showLogin()}});var initialize=function(){$fh.init({appid:"9GoCR9SG0G_8Ur7jkEftFHeU",appkey:"131396d78aa510b9827fc19500404e97c5d2341e",host:"https://nguiapps.feedhenry.com",mode:"dev"},function(){App.router=new App.Router,Backbone.history.start()},function(){window.alert("FeedHenry init failed!")})};window.device&&window.device.cordova?document.addEventListener("deviceready",initialize,!1):$(initialize);