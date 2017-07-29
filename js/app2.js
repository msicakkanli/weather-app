var weatherAPI = "http://api.openweathermap.org/data/2.5/weather?q=Istanbul,TR&units=metric&APPID=31573ef1a574d3c2f1150c5d3ef9d2e5";

var weatherAPIAnt = "http://api.openweathermap.org/data/2.5/weather?q=Antalya,TR&units=metric&APPID=31573ef1a574d3c2f1150c5d3ef9d2e5";

var weatherAPIAnk = "http://api.openweathermap.org/data/2.5/weather?q=Ankara,TR&units=metric&APPID=31573ef1a574d3c2f1150c5d3ef9d2e5";

var weatherAPIIzm = "http://api.openweathermap.org/data/2.5/weather?q=Izmir,TR&units=metric&APPID=31573ef1a574d3c2f1150c5d3ef9d2e5";
    
var forecastAPI="http://api.openweathermap.org/data/2.5/forecast/daily?id=745044&cnt=5&units=metric&APPID=31573ef1a574d3c2f1150c5d3ef9d2e5";  

var forecastAPIAnk="http://api.openweathermap.org/data/2.5/forecast/daily?id=323786&cnt=5&units=metric&APPID=31573ef1a574d3c2f1150c5d3ef9d2e5"; 

var forecastAPIIzm="http://api.openweathermap.org/data/2.5/forecast/daily?id=311046&cnt=5&units=metric&APPID=31573ef1a574d3c2f1150c5d3ef9d2e5"; 

var forecastAPIAnt="http://api.openweathermap.org/data/2.5/forecast/daily?id=323776&cnt=5&units=metric&APPID=31573ef1a574d3c2f1150c5d3ef9d2e5"; 

//onload header info
$( document ).ready(function(){  
    $.getJSON(weatherAPI, function(data){
    
    var icon = data.weather[0].icon; 
    var dir = "img/"
    var fileex = ".svg"
   var selectCity= data.name;
    var citySicaklik= Math.round(data.main.temp)+'&#8451' ;
    $('#sehirIsi').html(citySicaklik);    
   $('#cityName').html(selectCity);
     $('#ikonList').append('<li id="sicakIcon">'+'<img '+'src='+dir+icon+fileex+' >'+'</li>');
    
    });
});

//onload table forecast
$(document).ready(function(){
    $.getJSON(forecastAPI, function(forecast){
        var durum1=forecast.list[0].weather[0].main;
        var cityGece=forecast.list[0].temp.night;
        var cityGeceFinal= Math.round(cityGece);
         var cityGunduz=forecast.list[0].temp.day;
        var cityGunduzFinal= Math.round(cityGunduz);
     
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

      
        $('#cityDurum').html(durum1);
       $('#gece').html(cityGeceFinal);
     $('#gunduz').html(cityGunduzFinal);    
   
     var d=new Date();
      var bugun =d.getDay(); 
         var haftanin3Gunu = bugun+2;
        if (haftanin3Gunu>=7){
             var final = haftanin3Gunu - 7
             var finalgun= days[final];
             $('#hafta3').append('<td>'+days[final]+'</td>');
        } else{
        $('#hafta3').append('<td>'+days[haftanin3Gunu]+'</td>');}
        
        var haftanin4Gunu = bugun+3;
        if (haftanin4Gunu>=7){
            var final1=haftanin4Gunu - 7
          $('#hafta4').append('<td>'+days[final1]+'</td>');   
        } else
        {$('#hafta4').append('<td>'+days[haftanin4Gunu]+'</td>'); } 
        var haftanin5Gunu = bugun+4;
       if (haftanin5Gunu>=7){
            var final2=haftanin5Gunu - 7
          $('#hafta5').append('<td>'+days[final2]+'</td>');   
        } else
        {$('#hafta5').append('<td>'+days[haftanin5Gunu]+'</td>'); } 
         var dir = "img/"
         var fileex = ".svg" 
        var iconTomorrow = forecast.list[1].weather[0].icon;
        $('#tomorrow').append('<td>'+'<img '+'src='+dir+iconTomorrow+fileex+' >'+'</td>');
        var tomorrowNight = Math.round(forecast.list[1].temp.night);
        $('#tomorrow').append('<td>'+tomorrowNight+'</td>');
          var tomorrowDay = Math.round(forecast.list[1].temp.day);
        $('#tomorrow').append('<td>'+tomorrowDay+'</td>');
        var iconDay3 = forecast.list[2].weather[0].icon;
        $('#hafta3').append('<td>'+'<img '+'src='+dir+iconDay3+fileex+' >'+'</td>');
        var day3Night = Math.round(forecast.list[2].temp.night);
        $('#hafta3').append('<td>'+day3Night+'</td>');
          var day3Day = Math.round(forecast.list[2].temp.day);
        $('#hafta3').append('<td>'+day3Day+'</td>');
        
          var iconDay4 = forecast.list[3].weather[0].icon;
        $('#hafta4').append('<td>'+'<img '+'src='+dir+iconDay4+fileex+' >'+'</td>');
        var day4Night = Math.round(forecast.list[3].temp.night);
        $('#hafta4').append('<td>'+day4Night+'</td>');
          var day4Day = Math.round(forecast.list[3].temp.day);
        $('#hafta4').append('<td>'+day4Day+'</td>');
        
                var iconDay5 = forecast.list[4].weather[0].icon;
        $('#hafta5').append('<td>'+'<img '+'src='+dir+iconDay5+fileex+' >'+'</td>');
        var day5Night = Math.round(forecast.list[4].temp.night);
        $('#hafta5').append('<td>'+day5Night+'</td>');
          var day5Day = Math.round(forecast.list[4].temp.day);
        $('#hafta5').append('<td>'+day5Day+'</td>');
        
    });
})
//select city and change header weather info
$('.citySelect').on('change',function(){
 var citySelected =  $("#citySelect option:selected").text();
    if (citySelected==="Izmir") {
          $.getJSON(weatherAPIIzm, function(data){
              $('#sicakIcon').remove();
    var icon = data.weather[0].icon; 
    var dir = "img/"
    var fileex = ".svg"
   var selectCity= data.name;
    var citySicaklik= Math.round(data.main.temp)+'&#8451' ;
    $('#sehirIsi').html(citySicaklik);    
   $('#cityName').html(selectCity);
     $('#ikonList').append('<li id="sicakIcon">'+'<img '+'src='+dir+icon+fileex+' >'+'</li>');
    
    });  
    } if (citySelected==="Ankara") {$.getJSON(weatherAPIAnk, function(data){
        $('#sicakIcon').remove();
    var icon = data.weather[0].icon; 
    var dir = "img/"
    var fileex = ".svg"
   var selectCity= data.name;
    var citySicaklik= Math.round(data.main.temp)+'&#8451' ;
    $('#sehirIsi').html(citySicaklik);    
   $('#cityName').html(selectCity);
     $('#ikonList').append('<li id="sicakIcon">'+'<img '+'src='+dir+icon+fileex+' >'+'</li>');
    
    }); }
   if (citySelected==="Antalya") {$.getJSON(weatherAPIAnt, function(data){
        $('#sicakIcon').remove();
    var icon = data.weather[0].icon; 
    var dir = "img/"
    var fileex = ".svg"
   var selectCity= data.name;
    var citySicaklik= Math.round(data.main.temp)+'&#8451' ;
    $('#sehirIsi').html(citySicaklik);    
   $('#cityName').html(selectCity);
     $('#ikonList').append('<li id="sicakIcon">'+'<img '+'src='+dir+icon+fileex+' >'+'</li>');
    
    }); } 
    
})

//selected city forecast table 
$('.citySelect').on('change',function(){
    $('#tomorrow').children().remove();
    $('#tomorrow').append('<td>'+'Tomorrow'+'</td>');
    $('#hafta3').children().remove();
    $('#hafta4').children().remove();
    $('#hafta5').children().remove();
     var citySelected =  $("#citySelect option:selected").text();
   if (citySelected==="Izmir"){
      $.getJSON(forecastAPIIzm,function(forecast){
        var durum1=forecast.list[0].weather[0].main;
        var cityGece=forecast.list[0].temp.night;
        var cityGeceFinal= Math.round(cityGece);
         var cityGunduz=forecast.list[0].temp.day;
        var cityGunduzFinal= Math.round(cityGunduz); 
          var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
              $('#cityDurum').html(durum1);
       $('#gece').html(cityGeceFinal);
     $('#gunduz').html(cityGunduzFinal);   
          
     var d=new Date();
      var bugun =d.getDay(); 
         var haftanin3Gunu = bugun+2;
        if (haftanin3Gunu>=7){
             var final = haftanin3Gunu - 7
             var finalgun= days[final];
             $('#hafta3').append('<td>'+days[final]+'</td>');
        } else{
        $('#hafta3').append('<td>'+days[haftanin3Gunu]+'</td>');}
        
        var haftanin4Gunu = bugun+3;
        if (haftanin4Gunu>=7){
            var final1=haftanin4Gunu - 7
          $('#hafta4').append('<td>'+days[final1]+'</td>');   
        } else
        {$('#hafta4').append('<td>'+days[haftanin4Gunu]+'</td>'); } 
        var haftanin5Gunu = bugun+4;
       if (haftanin5Gunu>=7){
            var final2=haftanin5Gunu - 7
          $('#hafta5').append('<td>'+days[final2]+'</td>');   
        } else
        {$('#hafta5').append('<td>'+days[haftanin5Gunu]+'</td>'); } 
         var dir = "img/"
         var fileex = ".svg" 
        var iconTomorrow = forecast.list[1].weather[0].icon;
        $('#tomorrow').append('<td>'+'<img '+'src='+dir+iconTomorrow+fileex+' >'+'</td>');
        var tomorrowNight = Math.round(forecast.list[1].temp.night);
        $('#tomorrow').append('<td>'+tomorrowNight+'</td>');
          var tomorrowDay = Math.round(forecast.list[1].temp.day);
        $('#tomorrow').append('<td>'+tomorrowDay+'</td>');
        var iconDay3 = forecast.list[2].weather[0].icon;
        $('#hafta3').append('<td>'+'<img '+'src='+dir+iconDay3+fileex+' >'+'</td>');
        var day3Night = Math.round(forecast.list[2].temp.night);
        $('#hafta3').append('<td>'+day3Night+'</td>');
          var day3Day = Math.round(forecast.list[2].temp.day);
        $('#hafta3').append('<td>'+day3Day+'</td>');
        
          var iconDay4 = forecast.list[3].weather[0].icon;
        $('#hafta4').append('<td>'+'<img '+'src='+dir+iconDay4+fileex+' >'+'</td>');
        var day4Night = Math.round(forecast.list[3].temp.night);
        $('#hafta4').append('<td>'+day4Night+'</td>');
          var day4Day = Math.round(forecast.list[3].temp.day);
        $('#hafta4').append('<td>'+day4Day+'</td>');
        
                var iconDay5 = forecast.list[4].weather[0].icon;
        $('#hafta5').append('<td>'+'<img '+'src='+dir+iconDay5+fileex+' >'+'</td>');
        var day5Night = Math.round(forecast.list[4].temp.night);
        $('#hafta5').append('<td>'+day5Night+'</td>');
          var day5Day = Math.round(forecast.list[4].temp.day);
        $('#hafta5').append('<td>'+day5Day+'</td>'); 
          
          
      }); 
   };
     if (citySelected==="Antalya"){
      $.getJSON(forecastAPIAnt,function(forecast){
        var durum1=forecast.list[0].weather[0].main;
        var cityGece=forecast.list[0].temp.night;
        var cityGeceFinal= Math.round(cityGece);
         var cityGunduz=forecast.list[0].temp.day;
        var cityGunduzFinal= Math.round(cityGunduz); 
          var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
              $('#cityDurum').html(durum1);
       $('#gece').html(cityGeceFinal);
     $('#gunduz').html(cityGunduzFinal);   
          
     var d=new Date();
      var bugun =d.getDay(); 
         var haftanin3Gunu = bugun+2;
        if (haftanin3Gunu>=7){
             var final = haftanin3Gunu - 7
             var finalgun= days[final];
             $('#hafta3').append('<td>'+days[final]+'</td>');
        } else{
        $('#hafta3').append('<td>'+days[haftanin3Gunu]+'</td>');}
        
        var haftanin4Gunu = bugun+3;
        if (haftanin4Gunu>=7){
            var final1=haftanin4Gunu - 7
          $('#hafta4').append('<td>'+days[final1]+'</td>');   
        } else
        {$('#hafta4').append('<td>'+days[haftanin4Gunu]+'</td>'); } 
        var haftanin5Gunu = bugun+4;
       if (haftanin5Gunu>=7){
            var final2=haftanin5Gunu - 7
          $('#hafta5').append('<td>'+days[final2]+'</td>');   
        } else
        {$('#hafta5').append('<td>'+days[haftanin5Gunu]+'</td>'); } 
         var dir = "img/"
         var fileex = ".svg" 
        var iconTomorrow = forecast.list[1].weather[0].icon;
        $('#tomorrow').append('<td>'+'<img '+'src='+dir+iconTomorrow+fileex+' >'+'</td>');
        var tomorrowNight = Math.round(forecast.list[1].temp.night);
        $('#tomorrow').append('<td>'+tomorrowNight+'</td>');
          var tomorrowDay = Math.round(forecast.list[1].temp.day);
        $('#tomorrow').append('<td>'+tomorrowDay+'</td>');
        var iconDay3 = forecast.list[2].weather[0].icon;
        $('#hafta3').append('<td>'+'<img '+'src='+dir+iconDay3+fileex+' >'+'</td>');
        var day3Night = Math.round(forecast.list[2].temp.night);
        $('#hafta3').append('<td>'+day3Night+'</td>');
          var day3Day = Math.round(forecast.list[2].temp.day);
        $('#hafta3').append('<td>'+day3Day+'</td>');
        
          var iconDay4 = forecast.list[3].weather[0].icon;
        $('#hafta4').append('<td>'+'<img '+'src='+dir+iconDay4+fileex+' >'+'</td>');
        var day4Night = Math.round(forecast.list[3].temp.night);
        $('#hafta4').append('<td>'+day4Night+'</td>');
          var day4Day = Math.round(forecast.list[3].temp.day);
        $('#hafta4').append('<td>'+day4Day+'</td>');
        
                var iconDay5 = forecast.list[4].weather[0].icon;
        $('#hafta5').append('<td>'+'<img '+'src='+dir+iconDay5+fileex+' >'+'</td>');
        var day5Night = Math.round(forecast.list[4].temp.night);
        $('#hafta5').append('<td>'+day5Night+'</td>');
          var day5Day = Math.round(forecast.list[4].temp.day);
        $('#hafta5').append('<td>'+day5Day+'</td>'); 
          
          
      }); 
   };
     if (citySelected==="Ankara"){
      $.getJSON(forecastAPIAnk,function(forecast){
        var durum1=forecast.list[0].weather[0].main;
        var cityGece=forecast.list[0].temp.night;
        var cityGeceFinal= Math.round(cityGece);
         var cityGunduz=forecast.list[0].temp.day;
        var cityGunduzFinal= Math.round(cityGunduz); 
          var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
              $('#cityDurum').html(durum1);
       $('#gece').html(cityGeceFinal);
     $('#gunduz').html(cityGunduzFinal);   
          
     var d=new Date();
      var bugun =d.getDay(); 
         var haftanin3Gunu = bugun+2;
        if (haftanin3Gunu>=7){
             var final = haftanin3Gunu - 7
             var finalgun= days[final];
             $('#hafta3').append('<td>'+days[final]+'</td>');
        } else{
        $('#hafta3').append('<td>'+days[haftanin3Gunu]+'</td>');}
        
        var haftanin4Gunu = bugun+3;
        if (haftanin4Gunu>=7){
            var final1=haftanin4Gunu - 7
          $('#hafta4').append('<td>'+days[final1]+'</td>');   
        } else
        {$('#hafta4').append('<td>'+days[haftanin4Gunu]+'</td>'); } 
        var haftanin5Gunu = bugun+4;
       if (haftanin5Gunu>=7){
            var final2=haftanin5Gunu - 7
          $('#hafta5').append('<td>'+days[final2]+'</td>');   
        } else
        {$('#hafta5').append('<td>'+days[haftanin5Gunu]+'</td>'); } 
         var dir = "img/"
         var fileex = ".svg" 
        var iconTomorrow = forecast.list[1].weather[0].icon;
        $('#tomorrow').append('<td>'+'<img '+'src='+dir+iconTomorrow+fileex+' >'+'</td>');
        var tomorrowNight = Math.round(forecast.list[1].temp.night);
        $('#tomorrow').append('<td>'+tomorrowNight+'</td>');
          var tomorrowDay = Math.round(forecast.list[1].temp.day);
        $('#tomorrow').append('<td>'+tomorrowDay+'</td>');
        var iconDay3 = forecast.list[2].weather[0].icon;
        $('#hafta3').append('<td>'+'<img '+'src='+dir+iconDay3+fileex+' >'+'</td>');
        var day3Night = Math.round(forecast.list[2].temp.night);
        $('#hafta3').append('<td>'+day3Night+'</td>');
          var day3Day = Math.round(forecast.list[2].temp.day);
        $('#hafta3').append('<td>'+day3Day+'</td>');
        
          var iconDay4 = forecast.list[3].weather[0].icon;
        $('#hafta4').append('<td>'+'<img '+'src='+dir+iconDay4+fileex+' >'+'</td>');
        var day4Night = Math.round(forecast.list[3].temp.night);
        $('#hafta4').append('<td>'+day4Night+'</td>');
          var day4Day = Math.round(forecast.list[3].temp.day);
        $('#hafta4').append('<td>'+day4Day+'</td>');
        
                var iconDay5 = forecast.list[4].weather[0].icon;
        $('#hafta5').append('<td>'+'<img '+'src='+dir+iconDay5+fileex+' >'+'</td>');
        var day5Night = Math.round(forecast.list[4].temp.night);
        $('#hafta5').append('<td>'+day5Night+'</td>');
          var day5Day = Math.round(forecast.list[4].temp.day);
        $('#hafta5').append('<td>'+day5Day+'</td>'); 
          
          
      }); 
   };
      if (citySelected==="Istanbul"){
      $.getJSON(forecastAPI,function(forecast){
        var durum1=forecast.list[0].weather[0].main;
        var cityGece=forecast.list[0].temp.night;
        var cityGeceFinal= Math.round(cityGece);
         var cityGunduz=forecast.list[0].temp.day;
        var cityGunduzFinal= Math.round(cityGunduz); 
          var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
              $('#cityDurum').html(durum1);
       $('#gece').html(cityGeceFinal);
     $('#gunduz').html(cityGunduzFinal);   
          
     var d=new Date();
      var bugun =d.getDay(); 
         var haftanin3Gunu = bugun+2;
        if (haftanin3Gunu>=7){
             var final = haftanin3Gunu - 7
             var finalgun= days[final];
             $('#hafta3').append('<td>'+days[final]+'</td>');
        } else{
        $('#hafta3').append('<td>'+days[haftanin3Gunu]+'</td>');}
        
        var haftanin4Gunu = bugun+3;
        if (haftanin4Gunu>=7){
            var final1=haftanin4Gunu - 7
          $('#hafta4').append('<td>'+days[final1]+'</td>');   
        } else
        {$('#hafta4').append('<td>'+days[haftanin4Gunu]+'</td>'); } 
        var haftanin5Gunu = bugun+4;
       if (haftanin5Gunu>=7){
            var final2=haftanin5Gunu - 7
          $('#hafta5').append('<td>'+days[final2]+'</td>');   
        } else
        {$('#hafta5').append('<td>'+days[haftanin5Gunu]+'</td>'); } 
         var dir = "img/"
         var fileex = ".svg" 
        var iconTomorrow = forecast.list[1].weather[0].icon;
        $('#tomorrow').append('<td>'+'<img '+'src='+dir+iconTomorrow+fileex+' >'+'</td>');
        var tomorrowNight = Math.round(forecast.list[1].temp.night);
        $('#tomorrow').append('<td>'+tomorrowNight+'</td>');
          var tomorrowDay = Math.round(forecast.list[1].temp.day);
        $('#tomorrow').append('<td>'+tomorrowDay+'</td>');
        var iconDay3 = forecast.list[2].weather[0].icon;
        $('#hafta3').append('<td>'+'<img '+'src='+dir+iconDay3+fileex+' >'+'</td>');
        var day3Night = Math.round(forecast.list[2].temp.night);
        $('#hafta3').append('<td>'+day3Night+'</td>');
          var day3Day = Math.round(forecast.list[2].temp.day);
        $('#hafta3').append('<td>'+day3Day+'</td>');
        
          var iconDay4 = forecast.list[3].weather[0].icon;
        $('#hafta4').append('<td>'+'<img '+'src='+dir+iconDay4+fileex+' >'+'</td>');
        var day4Night = Math.round(forecast.list[3].temp.night);
        $('#hafta4').append('<td>'+day4Night+'</td>');
          var day4Day = Math.round(forecast.list[3].temp.day);
        $('#hafta4').append('<td>'+day4Day+'</td>');
        
                var iconDay5 = forecast.list[4].weather[0].icon;
        $('#hafta5').append('<td>'+'<img '+'src='+dir+iconDay5+fileex+' >'+'</td>');
        var day5Night = Math.round(forecast.list[4].temp.night);
        $('#hafta5').append('<td>'+day5Night+'</td>');
          var day5Day = Math.round(forecast.list[4].temp.day);
        $('#hafta5').append('<td>'+day5Day+'</td>'); 
          
          
      }); 
   };
    
});



//today info
var todayDate= Date();
var todayDateFirst =todayDate.substring(0, 10);
$('#today').html(todayDateFirst);

//add city from localstorage to select menü
$('#citySelect').on('click',function(){
    var lL = localStorage.length;
    if (lL >0){
    var storedCitys=JSON.parse(localStorage.getItem("citys"));
     $('#citySelect').append('<option value="'+storedCitys+'">'+storedCitys+'</option>');
    localStorage.removeItem("citys");
    }
})



 