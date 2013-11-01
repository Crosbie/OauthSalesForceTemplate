/*global $fh, App, Backbone*/
var initialize = function() {
    //app init function here

    $fh.init({
        "appid": "9GoCR9SG0G_8Ur7jkEftFHeU",
        "appkey": "131396d78aa510b9827fc19500404e97c5d2341e",
        "host": "https://nguiapps.feedhenry.com",
        "mode": "dev"
    }, function() {
        App.router = new App.Router();
        Backbone.history.start();
    }, function() {
        window.alert("FeedHenry init failed!");
    });

};

//check if cordova is available
//initialize the app when page is load
if (window.device && window.device.cordova) {
    document.addEventListener("deviceready", initialize, false);
} else {
    $(initialize);
}