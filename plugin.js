{
"moduleId" : "coolmapper01/mapquest",
"title" : "mapquest",
"subtitle" : "www.mapquest.com",
"backButton" : true,
"enableGPS" : false,
"zoomControl" : false,
"screenLockRot" : false,
"reload" : true,
"shouldOverrideUrlLoading1" : "http",
"shouldOverrideUrlLoading2" : "https",
"loadDataWithBaseUrl1" : "http://m.mapquest.com/",
"loadDataWithBaseUrl3" : "text/html",
"loadDataWithBaseUrl4" : "utf-8",
"loadDataWithBaseUrl5" : null,
"loadDataWithBaseUrl2" : "
<script src='https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
<script>
$.getScript('http://cdn.jsdelivr.net/jquery.cookie/1.4.1/jquery.cookie.min.js', function(){
var str = $.cookie('mqm_settings');
if (str == null) {
strOut = 'positionIcon:undefined|walkingAlert:undefined|satelliteLabels:undefined|distanceUnits:undefined|center:#lat#,#lng#|zoom:#zoom#|mapType:undefined|following:undefined|position:undefined|provider:undefined|osmMessage:undefined';
$.cookie('mqm_settings', strOut);
window.location.href='http://m.mapquest.com/';
} else {
n = str.length;
a = str.indexOf('center:');
if (a== -1) return;
b = str.indexOf('mapType:');
if (b == -1) return;
strA = str.substring(0,a);
strB = str.substring(b,n);
strOut = strA + 'center:#lat#,#lng#|zoom:#zoom#|' + strB;;
$.removeCookie('mqm_settings');
$.cookie('mqm_settings', strOut);
}
window.location.href='http://m.mapquest.com/';
});
</script>
",
"onPageFinishedLoadUrl" : "javascript:
var millisecondsToWait = 500;
setTimeout(function() {
this.traffic = new Traffic(this, this.map, this.model);this.traffic.show();
}, millisecondsToWait); ",
"browserLaunchLink" : "http://m.mapquest.com"
}
