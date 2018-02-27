

document.addEventListener("DOMContentLoaded", function(){
  fetch("http://taller-cardumen.herokuapp.com/peliculas")
  .then( res => {
    return res.json();
  })
  .then(function(resultado){
    var contenedor = document.getElementById('peliculas');
    for ( i = 0 ; i <= resultado.data.length ; i++ ){
      var pelicula = resultado.data[i];
      var div = document.createElement("div");
      var img = document.createElement("img");
      var title = document.createElement("h2");
      var year = document.createElement("span");
      var link = document.createElement("a");

      img.src = pelicula.img;
      title.innerText = pelicula.title;
      year.innerText = pelicula.year;
      link.innerText = "Ver película";
      link.href = "/dos.html?id=" + pelicula.id;

      div.appendChild(title);
      div.appendChild(img);
      div.appendChild(year);
      div.appendChild(link);
      contenedor.appendChild(div);

      title.classList.add('');
    }


  })
})
