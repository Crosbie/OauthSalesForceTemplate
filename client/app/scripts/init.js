/*global $fh*/
var initialize = function(){
  //app init function here
  
  $fh.init({
    "appid": "<your app id here>",
    "appkey": "<your app key here>",
    "host": "<your app host here>",
    "mode": "<dev || live>"
  });
  
};

//check if cordova is available
//initialize the app when page is load
if(window.device && window.device.cordova){
  document.addEventListener("deviceready", initialize, false);
} else {
  $(initialize);
}