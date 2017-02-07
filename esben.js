function esben() {
  $('.svar').html('<img src="img/esben2.jpg"/>');
}

$(".input-group").keyup(function(event){
    if(event.keyCode == 13){
        esben();
    }
});
