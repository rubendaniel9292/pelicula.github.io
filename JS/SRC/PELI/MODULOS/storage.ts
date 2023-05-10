export default class Storage {
  id: number;
  constructor() {
    this.id = 1;
  }
  //inicializar lo que hay dentro del localstorage
  getData() {
    let pelis = JSON.parse(localStorage.getItem("pelis")!);
    if (!pelis || pelis.length < 1) {
      pelis = [
        {
          id: 0,
          title: "desarrollo web",
          description: "danielrivasweb.com",
        },
      ];
      this.id = 1;
    } else {
      this.id = pelis[pelis.length - 1].id + 1;
    }
    return pelis;
  }
  //sacar el ultimo identificador que hayamos guardado
  getLastId() {
    return this.id;
  }
  save(data: any) {
    localStorage.setItem("pelis", JSON.stringify(data));
  }
}
