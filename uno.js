

document.addEventListener("DOMContentLoaded", function(){
  fetch("http://taller-cardumen.herokuapp.com/peliculas")
  .then( res => {
    return res.json();
  })
  .then(function(resultado){
    var contenedor = document.getElementById('peliculas');

    resultado.data.forEach(element =>{
      var template = `
        <img src="${element.img}" class="movie-img">
        <h2 class="title">${element.title}</h2>
        <a href="dos.html?id=${element.id}" class="btn btn-primary">Ver pelicula</a>`;

      var caja = document.createElement("div");
      caja.classList.add("col-xs-12");
      caja.classList.add("col-sm-6");
      caja.classList.add("col-md-4");
      caja.classList.add("col-lg-3");
      caja.innerHTML = template;
      contenedor.appendChild(caja);
    });


  });
});
