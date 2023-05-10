import Storage from "./storage.js";
import List from "./list.js";
export default class Add {
  title: any;
  description: any;
  save_btn: any;
  storage: Storage;
  list: List;

  constructor() {
    //crear objetos
    this.storage = new Storage();
    //conseguir elmentos del dom, o campos del formulario
    this.title = document.querySelector("#title");
    this.description = document.querySelector("#description");
    this.save_btn = document.querySelector("#save");
    this.list = new List();
  }

  //guardar peliculas
  peliSave() {
    //vincular evento al boton
    this.save_btn.onclick = (e: any) => {
      e.preventDefault(); //evitar que se envie el formlario y no se recargue la pantalla
      //**conseguir datos actualizados del localstorage
      let pelis = this.storage.getData();
      let lasId = this.storage.getLastId();
      console.log(pelis, lasId);
      //**datos a guardar
      let title = this.title.value;
      let description = this.description.value;

      //alert("enviar el formulario de add " + title + " " + description);
      //validar que no valla vacio el formulario
      if (title != "" || description != "") {
        //**crear objeto a guardar
        let peli = { id: lasId++, title, description };
        //**añadir pelis al array de objetos
        pelis.push(peli);
        //**guardar en el localstorage
        this.storage.save(pelis);
        //alert("datos del formulario guarados correctanebte");
        //**actualizar listado en el dom
        this.list.addToList(peli, pelis);//pelicula a agregar y el listado de destino en el dom
      } else {
        alert("introduce bien los datos en el formulario");
      }
      return false;
    };
  }
}
