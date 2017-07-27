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

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
//search city from js/cityList.json file
$('#search').on('click',function(){
      $('.searchTable').children().remove();

    var searchField = $('#cityText').val();
    var expression = new RegExp(searchField, "i");
   $.getJSON('js/cityList.json',function(data){
    $.each(data,function(key,value){
       if (value.name.search(expression) != -1 )
        {
        $('.searchTable').append('<tr>'+'<td>'+value.name+' '+value.country+'</td>'+'<td>'+'<input id="checkBox" type="checkbox">'+'</td>'+'</tr>')     
        }
    });   
   })
   $('#citySaved').show();
});

//When the user clicks on <span> (x) remove result list from table 
$('.close').on('click',function(){
     $('.searchTable').children().remove();
    $('#cityText').val("");
     $('#save').children().remove();
    $('#citySaved').hide();
});

//save table item to select menu which are checked


