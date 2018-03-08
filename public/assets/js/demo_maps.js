$(document).ready(function(){

/* Google maps */
if($("#google_ptm_map").length > 0){
    var gPTMCords = new google.maps.LatLng(50.43, 30.60);
    var gPTMOptions = {zoom: 8,center: gPTMCords, mapTypeId: google.maps.MapTypeId.ROADMAP}    
    var gPTM = new google.maps.Map(document.getElementById("google_ptm_map"), gPTMOptions);        
    
    var cords = new google.maps.LatLng(50.37, 30.65);
    var marker = new google.maps.Marker({position: cords, map: gPTM, title: "Marker 1"});    
    cords = new google.maps.LatLng(50.5, 30.55);
    marker = new google.maps.Marker({position: cords, map: gPTM, title: "Marker 2"});
    cords = new google.maps.LatLng(50.8, 30.55);
    marker = new google.maps.Marker({position: cords, map: gPTM, title: "Marker 3"});    
}

});
