let lista = ["pasta", "guanciale", "pecorino", "pepe", "uova", "DajeRoma"];
const ulEl = document.querySelector("ul");

let i = 0;

while (i < lista.length) {


    let liEl = document.createElement("li");
    liEl.append(lista[i])

    ulEl.appendChild(liEl);

    i++;
}