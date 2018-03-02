

document.addEventListener("DOMContentLoaded",function(){

  //https://www.youtube.com/watch?v=fsT5SyBLlIg COMO LO TRAE EL JSON
  //https://www.youtube.com/embed/fsT5SyBLlIg COMO DEBERIA VERSE

  //////

  var url = window.location.href;
  url = url.split("?")[1].split("=")[1];
  console.log(url);

  fetch("http://taller-cardumen.herokuapp.com/peliculas/" + url)
  .then(res =>{
    return res.json();
  })
  .then(resultado =>{
    console.log(resultado);

    var detallePelicula = document.getElementById('detalle');

    var templateDetalle = `
      <div class="col-lg-8 trailer-holder">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/${resultado.data.trailer.split('=')[1]}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
      <div class="col-lg-4">
        <div class="col-lg-12 top-col">
          <img src="${resultado.data.img}" class="movie-img" alt=""/>
          <h2 class="title">${resultado.data.title}</h2>
        </div>
        <div class="col-lg-12 bottom-col">
          <span>${resultado.data.year}</span>
          <span>${resultado.data.pais}</span>
          <span>${resultado.data.director}</span>
          <span>${resultado.data.productora}</span>
          <p>${resultado.data.description}</p>
        </div>
      </div>`;

    var cajaDetalle = document.createElement("div");
    cajaDetalle.classList.add('row');
    cajaDetalle.innerHTML = templateDetalle;
    detallePelicula.appendChild(cajaDetalle);

  })

});
