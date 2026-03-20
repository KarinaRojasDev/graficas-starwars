/*Pediremos las películas de Star Wars y pintaremos una gráfica de líneas en la que podamos ver cada una de las películas.
Documentación API Star Wars

En el eje X el nombre de la película
En el eje Y año de publicación */

let options = {
  fullWidth: true,
  chartPadding: {
    right: 100,
    bottom: 20,
  },
  low: 1970,
  high: 2010,
};

async function getMovies() {
  let response = await fetch("https://swapi.info/api/films");
  let data = await response.json();
  console.log(data);

  const peliculas = data.map((pelicula) => pelicula.title);
  const listaFechas = data.map((pelicula) => pelicula.release_date.slice(0, 4));

  console.log(peliculas, listaFechas);

  let data1 = {
    //Este es el tratamiento de datos
    labels: peliculas, //Aquí crea el array (X)
    series: [listaFechas], //Aquí crea el array de arrays (Y)
  };
  new Chartist.Line(".ct-chart", data1, options);
}
getMovies();

/* Pediremos los personajes de Star Wars y pintaremos una gráfica de barras en la que podamos ver
En el eje X el nombre del personaje
En el eje Y el número de películas en las que ha participado. */

//data.name   https://swapi.info/api/people/
//data.films (array) length

const options2 = {
  axisY: {
    offset: 20,
  },
};
async function getMovies2(){

let response = await fetch("https://swapi.info/api/people/");
  let data = await response.json();
  

  //personaje
  const nombres = data.map((nombre) => nombre.name).slice(0, 10);
  //num episodios
  const numPeliculas = data.map((personaje) => personaje.films.length).slice(0, 10);

  console.log(nombres, numPeliculas);
    
    
  const data2 = {
    labels: nombres,
    series: [numPeliculas],
  };
    new Chartist.Bar(".ct-chart2", data2, options2);
} 
  
getMovies2();
  

  


