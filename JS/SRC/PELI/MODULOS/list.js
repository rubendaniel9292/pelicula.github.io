import deleteOfflist from "./delete.js";
import editLista from "./edit.js";
export default class List {
    constructor() {
        //selecionar elemtnos del dom a usar
        this.content = document.querySelector("#content");
    }
    peliTemplate(peli) {
        //template de pelicula a agregar
        return `<article class="peli-item" id="peli-${peli.id}">
          <h3 class="title">${peli.title}</h3>
          <p class="description">${peli.description}</p>
          <button class="edit" data-id="${peli.id}">Editar</button>
          <button class="delete" data-id="${peli.id}">Eliminar</button>
      </article>`;
    }
    addToList(peli, listPelis) {
        let peliHtml = this.peliTemplate(peli);
        //añadir pelicula al contenido del dom
        this.content.innerHTML += peliHtml;
        this.showList(listPelis);
    }
    //mostrar listado de pelicula
    showList(pelis) {
        this.content.innerHTML = ""; //vaciar dom del contenedor principal
        //recorrer y mostrar todos los objetos/peliculas del localstorage
        pelis.forEach((peli) => {
            this.content.innerHTML += this.peliTemplate(peli);
        });
        //Funcion del boton de borrar
        deleteOfflist();
        //Funcion del boton de editar
        editLista();
    }
}
