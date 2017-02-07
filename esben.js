function esben() {
  const esbener = ['img/esben1.jpg', 'img/esben2.jpg'];
  const esben = esbener[Math.floor(Math.random()*esbener.length)];
  $('.svar').html(`<img src="${esben}"/>`);
}

$(".input-group").keyup(function(event){
    if(event.keyCode == 13){
        esben();
    }
});
