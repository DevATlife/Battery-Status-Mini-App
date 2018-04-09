window.onload = function(){
document.addEventListener("deviceready", batterySatusAPI, false);
}


function batterySatusAPI(){
 
window.addEventListener("batterystatus", j_batterychange, false);
function j_batterychange(status){
  $("#ButteryEvent").html("Battery Satus");
  $("#BatteryLevel").html(status.level + "%");
  $("#BatteryPlugged").html(status.isPlugged);
    var x = status.level + "%";
  $("#bat-level").css("width", x);
   $("#bat-cont").show("slow"); 
}  
   
  window.addEventListener("batterylow", j_batteryLow, false);
function j_batteryLow(status){
  $("#ButteryEvent").html("Battery Low");
  $("#BatteryLevel").html(status.level + "%");
  $("#BatteryPlugged").html(status.isPlugged);
    
}
    
    
    window.addEventListener("batterycritical", j_batterycrit, false);
function j_batterycrit(status){
  $("#ButteryEvent").html("Battery Critical");
  $("#BatteryLevel").html(status.level + "%");
  $("#BatteryPlugged").html(status.isPlugged);
  
}

}