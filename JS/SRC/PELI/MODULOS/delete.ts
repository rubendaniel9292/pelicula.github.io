import Storage from "./storage.js";
import List from "./list.js";
export default function () {
  //crear objetos
  const storage = new Storage();
  const list = new List();
  //csoneguid datos de las peliculas disponibles
  let pelisStored = storage.getData(); //pelis almacenadas en el localstorage
  let pelisView = document.querySelectorAll("#content .peli-item"); //peliculas vistas en el dom
  //recorrer peliculas mostardas en el dom
  pelisView.forEach((peli: any) => {
    let deleteBtn = peli.querySelector(".delete"); //capturar el boton
    deleteBtn.onclick = function () {
      const peliId = this.getAttribute("data-id"); //conseguir el id de la pelicula que quiero borrar
      console.log(peliId);
      //filtrar el array para elmimar la selecionada
      const newPelisStored = pelisStored.filter(
        (peli: any) => peli.id !== parseInt(peliId)
      );
      console.log(pelisStored, newPelisStored);
      //actualiar datos del localstorage
      storage.save(newPelisStored);
      //volver a mostrar el listado actualizado
      list.showList(newPelisStored);
    };
  });
}
