import List from "./list.js";
import Storage from "./storage.js";
export default function () {
  //crear objetos
  const storage = new Storage();
  const list = new List();
  //conseguir datos de peliculas
  let pelisStored = storage.getData(); //pelis almacenadas en el localstorage
  let pelisView = document.querySelectorAll(".peli-item"); //peliculas vistas en el dom
  //recorrer peliculas listadas
  pelisView.forEach((peli: any) => {
    //selecionar boton editar
    let editBtn = peli.querySelector(".edit"); //capturar el boton
    //asignar evento click
    editBtn.onclick = function () {
      //cosnseguir id de la pelicula a editar
      const peliId = parseInt(this.getAttribute("data-id"));
      //quitar bonotes antiguos
      editBtn.remove();
      peli.querySelector(".delete").remove();
      //añadir template html debajo de los botones
      let peliEditHtml = `
              <div class="edit_form">
                  <h3 class="title">Editar Pelicula</h3>                  
                  <form >
                      <input type="text" class="edited_title" value="${
                        peli.querySelector(".title").innerHTML
                      }"/><br>
                      <textarea class="edited_description">
                      ${peli.querySelector(".description").innerHTML}
                      </textarea>
                      <input type="submit" class="update" value="Actualizar"/>
                  </form>
              </div>`;
      peli.innerHTML += peliEditHtml;

      //seleccionar boton de editar
      let updateBtn = peli.querySelector(".update");
      //aplicar evento click
      updateBtn.onclick = function (e: any) {
        e.preventDefault(); //para que no envie el formulario
        //buscar indice de la pelicula que quiero actualziar
        let index = pelisStored.findIndex((peli: any) => peli.id === peliId);
        //alert(index);
        //guardad objeto dentro de ese indice
        pelisStored[index] = {
          id: peliId,
          title: peli.querySelector(".edited_title").value,
          description: peli.querySelector(".edited_description").value
        };
        console.log(pelisStored);
        //actualizar local storage
        storage.save(pelisStored);
        //volver a mostrar el listado
        list.showList(pelisStored);
      };

      return false;
    };
  });
}
