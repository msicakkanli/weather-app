// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var modalButton = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
modalButton.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
/*
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
*/
//search city from js/cityList.json file
$('#search').on('click',function(e){
    e.preventDefault();
      $('#result').children().remove();

    var searchField = $('#cityText').val();
    var expression = new RegExp(searchField, "i");
   $.getJSON('js/cityList.json',function(data){
    $.each(data,function(key,value){
       if (value.name.search(expression) != -1 )
     {
       
    $('#result').append('<li>'+value.name+'-'+value.country+' '+'<input type="checkbox" id="check">'+'</li>')
     }
    });   
   })
   $('#citySaved').show();
});

//When the user clicks on <span> (x) remove result list from table 
$('.close').on('click',function(){
     $('#result').children().remove();
    $('#cityText').val("");
     $('#save').children().remove();
    $('#citySaved').hide();
});

//save table item to select menu which are checked
var savedCitys = [];

$('#result').on('change','#check',function(evt){
    evt.preventDefault;
    var isChecked =false;
    
    if($(this).is(":checked")){
    $(this).parent().addClass('selected');
    savedCitys.push($(this).parent().text());
       
    } else {
    $(this).parent().removeClass('selected');
      var removeCity =($(this).parent().text());  

        var i = savedCitys.indexOf(removeCity);
        if(i != -1) {
	savedCitys.splice(i, 1);
}   

    }
})


//click save item, close modal saved local storage array
$('#citySaved').on('click',function(){
    var finalCitys =[]; 
     $('#result').children().remove();
    $('#cityText').val("");
      modal.style.display = "none";
    savedCitys.forEach(function(item, index, array) {
  var city = item;
     
var finalCity= city.substr(0, city.indexOf('-')); 
        finalCitys.push(finalCity); 

localStorage.setItem("citys", JSON.stringify(finalCitys));
       /*
        var getCity = localStorage.getItem("citys");
        var storedCitys=JSON.parse(getCity);
        alert(storedCitys.length);
*/
});

   
});
    
     


 
