import List from "./list.js";
import Storage from "./storage.js";
export default function () {
  //crear objetos
  const storage = new Storage();
  const list = new List();
  //conseguirdatos de las peliculas (elementos del dom)
  let content: any = document.querySelector("#content");
  let searchBtn: any = document.querySelector("#search");
  //aplicar evento al boton de busqueda
  searchBtn.onclick = (e: any) => {
    e.preventDefault();
    //conseguir el texto introducido en el campo de busqueda
    let wanted:any = document.querySelector("#search_field")!.value;
   
    //sonseguir dattos actualizados de peliculas
    let pelisStored = storage.getData();
    //aplicar filtro para encontrar pelicua
    const newPelis = pelisStored.filter((peli: any) => {
      return peli.title.toLowerCase().includes(wanted.toLowerCase()); //convierte la bsuqueda a minucula y la hace indifernte a Mayu O MINUS Y devuelve las pelis del titulo buscado
    });
    //mostrar listado de coincidencias
    if (newPelis.length <= 0)
      content.innerHTML = "<div><h2>No hay conicidencias</h2></div>";
    else list.showList(newPelis);

    return false;
  };
}
