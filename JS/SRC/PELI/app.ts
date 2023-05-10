//carga de modulos
import Add from "./MODULOS/add.js";
import List from "./MODULOS/list.js";
import Storage from "./MODULOS/storage.js";
import search from "./MODULOS/search.js";
export default class App {
  add: Add;
  list: List;
  storage: Storage;
  constructor() {
    //nicializar propieades
    this.add = new Add();
    this.list = new List();
    this.storage = new Storage();
  }
  load() {
    //añadir peliculas
    this.add.peliSave();
    //conseguir array de pbjeto del localstorage
    const pelis = this.storage.getData();
    //listar peliculas apenas se abra la aplicacion
    this.list.showList(pelis); //mostrar lista de pelis

    //buscar pelicula
    console.log("aplicacion lanzada correctamente....");
    search();
  }
}
