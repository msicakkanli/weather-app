var weatherAPI = "http://api.openweathermap.org/data/2.5/weather?q=Istanbul,TR&units=metric&APPID=31573ef1a574d3c2f1150c5d3ef9d2e5";

var weatherAPIAnt = "http://api.openweathermap.org/data/2.5/weather?q=Antalya,TR&units=metric&APPID=31573ef1a574d3c2f1150c5d3ef9d2e5";

var weatherAPIAnk = "http://api.openweathermap.org/data/2.5/weather?q=Ankara,TR&units=metric&APPID=31573ef1a574d3c2f1150c5d3ef9d2e5";

var weatherAPIIzm = "http://api.openweathermap.org/data/2.5/weather?q=Izmir,TR&units=metric&APPID=31573ef1a574d3c2f1150c5d3ef9d2e5";
    
var forecastAPI="http://api.openweathermap.org/data/2.5/forecast/daily?id=745044&cnt=5&units=metric&APPID=31573ef1a574d3c2f1150c5d3ef9d2e5";  

var forecastAPIAnk="http://api.openweathermap.org/data/2.5/forecast/daily?id=323786&cnt=5&units=metric&APPID=31573ef1a574d3c2f1150c5d3ef9d2e5"; 

var forecastAPIIzm="http://api.openweathermap.org/data/2.5/forecast/daily?id=311046&cnt=5&units=metric&APPID=31573ef1a574d3c2f1150c5d3ef9d2e5"; 

var forecastAPIAnt="http://api.openweathermap.org/data/2.5/forecast/daily?id=323776&cnt=5&units=metric&APPID=31573ef1a574d3c2f1150c5d3ef9d2e5"; 

//daily weather   

$( document ).ready(function(){  
    $.getJSON(weatherAPI, function(data){
     $('#myChart').hide();    
    var icon = data.weather[0].icon; 
    var dir = "img/"
    var fileex = ".png"
   var selectCity= data.name;
   
   $('#sehir').append('<li>'+"Sıcaklık "+data.main.temp+'&#8451'+'</li>');
     $('#sehir').append('<li>'+"Nem Oranı "+data.main.humidity+'%'+'</li>');  
      $('#sehir').append('<li>'+"Rüzgar Hızı "+data.wind.speed+'km/h'+'</li>');      
   $('#sehir').append('<li>'+'<img '+'src='+dir+icon+fileex+' >'+'</li>');
        $("#city").text(selectCity);
    });
});

$( '#antalya' ).on('click',function(){  
    $.getJSON(weatherAPIAnt, function(data){
     $('#myChart').hide();
    $('#table').hide();    
     $('button').removeClass('btn-success');
    $('button').removeClass('btn-danger');    
    $('button').addClass('btn-primary');
    $('#antalya').addClass('btn-success');    
    var icon = data.weather[0].icon; 
    var dir = "img/"
    var fileex = ".png"
   var selectCity= data.name;
   $('#sehir li').remove();
   $('#sehir').append('<li>'+"Sıcaklık "+data.main.temp+'&#8451'+'</li>');
     $('#sehir').append('<li>'+"Nem Oranı "+data.main.humidity+'%'+'</li>');  
      $('#sehir').append('<li>'+"Rüzgar Hızı "+data.wind.speed+'km/h'+'</li>');      
   $('#sehir').append('<li>'+'<img '+'src='+dir+icon+fileex+' >'+'</li>');
        $("#city").text(selectCity);
    });
});

$( '#istanbul' ).on('click',function(){
    $.getJSON(weatherAPI, function(data){
    $('#myChart').hide();
    $('#table').hide();    
    $('button').removeClass('btn-success');
    $('button').removeClass('btn-danger');    
    $('button').addClass('btn-primary');
    $('#istanbul').addClass('btn-success');     
    var icon = data.weather[0].icon; 
    var dir = "img/"
    var fileex = ".png"
   var selectCity= data.name;
   $('#sehir li').remove();
   $('#sehir').append('<li>'+"Sıcaklık "+data.main.temp+'&#8451'+'</li>');
     $('#sehir').append('<li>'+"Nem Oranı "+data.main.humidity+'%'+'</li>');  
      $('#sehir').append('<li>'+"Rüzgar Hızı "+data.wind.speed+'km/h'+'</li>');      
   $('#sehir').append('<li>'+'<img '+'src='+dir+icon+fileex+' >'+'</li>');
        $("#city").text(selectCity);
    });
});

$( '#ankara' ).on('click',function(){  
    $.getJSON(weatherAPIAnk, function(data){
     $('#myChart').hide(); 
    $('#table').hide();    
     $('button').removeClass('btn-success');
    $('button').removeClass('btn-danger');
    $('button').addClass('btn-primary');
    $('#ankara').addClass('btn-success');    
    var icon = data.weather[0].icon; 
    var dir = "img/"
    var fileex = ".png"
   var selectCity= data.name;
   $('#sehir li').remove();
   $('#sehir').append('<li>'+"Sıcaklık "+data.main.temp+'&#8451'+'</li>');
     $('#sehir').append('<li>'+"Nem Oranı "+data.main.humidity+'%'+'</li>');  
      $('#sehir').append('<li>'+"Rüzgar Hızı "+data.wind.speed+'km/h'+'</li>');      
   $('#sehir').append('<li>'+'<img '+'src='+dir+icon+fileex+' >'+'</li>');
        $("#city").text(selectCity);
    });
});

$( '#izmir' ).on('click',function(){
     $('#myChart').hide();
    $('#table').hide();
    $('button').removeClass('btn-success');
    $('button').removeClass('btn-danger');
    $('button').addClass('btn-primary');
    $('#izmir').addClass('btn-success');
    
    $.getJSON(weatherAPIIzm, function(data){
    var icon = data.weather[0].icon; 
    var dir = "img/"
    var fileex = ".png"
   var selectCity= data.name;
   $('#sehir li').remove();
   $('#sehir').append('<li>'+"Sıcaklık "+data.main.temp+'&#8451'+'</li>');
     $('#sehir').append('<li>'+"Nem Oranı "+data.main.humidity+'%'+'</li>');  
      $('#sehir').append('<li>'+"Rüzgar Hızı "+data.wind.speed+'km/h'+'</li>');      
   $('#sehir').append('<li>'+'<img '+'src='+dir+icon+fileex+' >'+'</li>');
        $("#city").text(selectCity);
    });
});
//5 days forecast 

$('#detay').on('click',function(){
   $('#gunler').children().remove();
     $('#sicaklik').children().remove();
      $('#iconlar').children().remove();
    $('#table').show();
    $(this).addClass('btn-danger')
   var sehirIsmi = $('#city').text();
   if (sehirIsmi==="Istanbul") {
       var url = forecastAPI;
       $('#myChart').show();
   } if (sehirIsmi === "Ankara") {
       var url = forecastAPIAnk;
        $('#myChart').show();
       
   } if (sehirIsmi === "Izmir") {
       var url = forecastAPIIzm;
        $('#myChart').show();
       
   } if (sehirIsmi === "Antalya") {
       var url = forecastAPIAnt;
        $('#myChart').show();
        
   } 
    
    $.getJSON (url, function(forecast){
        console.log(forecast);  
      var ctx = document.getElementById('myChart').getContext('2d');
       var chart = new Chart(ctx, {  
    type: 'line',   
    data: {
        labels: [],
        datasets: [{
            label: "5 Günlük Hava Tahmini",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [],
        }]       
    },   
    // Configuration options go here
    options: {}  
});        

// insert tempature data to graph array
        
         var day1=forecast.list[0].temp.day;
         var day2=forecast.list[1].temp.day;
         var day3=forecast.list[2].temp.day;
         var day4=forecast.list[3].temp.day;
         var day5=forecast.list[4].temp.day;
        
        var durum1=forecast.list[0].weather[0].main;
         var durum2=forecast.list[1].weather[0].main;
         var durum3=forecast.list[2].weather[0].main;
         var durum4=forecast.list[3].weather[0].main;
         var durum5=forecast.list[4].weather[0].main;
       
        var d = new Date();
    var n = d.getDate();
    var n1 = n+1;
     var n2 = n+2; 
     var n3 = n+3;    
     var n4 = n+4;    
        
    var m = d.getMonth();
    var rm=m+1
    var today = (n+'/'+rm);
    var today1 =(n1+'/'+rm) 
    var today2 =(n2+'/'+rm) 
    var today3 =(n3+'/'+rm) 
    var today4 =(n4+'/'+rm) 
        chart.data.labels.push(today,today1,today2,today3,today4);
       chart.data.datasets.forEach((dataset) => {
        dataset.data.push(day1,day2,day3,day4,day5);
    $()    
    });
    chart.update();
     $('#gunler').append('<td>'+"Tarih"+'</td>');   
     $('#gunler').append('<td>'+today+'</td>'); 
      $('#gunler').append('<td>'+today1+'</td>'); 
      $('#gunler').append('<td>'+today2+'</td>'); 
      $('#gunler').append('<td>'+today3+'</td>'); 
      $('#gunler').append('<td>'+today4+'</td>'); 
     $('#sicaklik').append('<td>'+"Sıcaklık"+'</td>');    
    $('#sicaklik').append('<td>'+day1+'</td>');
    $('#sicaklik').append('<td>'+day2+'</td>'); 
     $('#sicaklik').append('<td>'+day3+'</td>');
     $('#sicaklik').append('<td>'+day4+'</td>'); 
     $('#sicaklik').append('<td>'+day5+'</td>');
     $('#iconlar').append('<td>'+"Durum"+'</td>');    
     $('#iconlar').append('<td>'+durum1+'</td>'); 
     $('#iconlar').append('<td>'+durum2+'</td>'); 
     $('#iconlar').append('<td>'+durum3+'</td>'); 
     $('#iconlar').append('<td>'+durum4+'</td>');
     $('#iconlar').append('<td>'+durum5+'</td>'); 
    }); 
     
   
})   







