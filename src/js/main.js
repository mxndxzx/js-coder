// Variables
let input;
let opt;
let addInput;

// Arrays
let market = ["huevos", "carne", "pollo", "galletitas", "harina"];
let fruits = ["bananas", "paltas", "kiwis", "manzanas", "naranjas"];
let library = ["lapiceras", "lápices", "cuadernos", "marcadores", "hojas"];

// Funciones
let start = () => {
  do {
    input = parseInt(prompt
      ("Las listas son: \n\n"
      + "1. Supermercado:  " + market.join(", ") + "\n\n"
      + "2. Frutas:  " + fruits.join(", ") + "\n\n"
      + "3. Librería:  " + library.join(", ") + "\n\n"
      + "Para agregar o quitar un elemento, seleccione una lista (1, 2, 3)"
      ));

      if (isNaN(input) || (input < 1) || (input > 3)) {
        alert("Ingrese un número válido");
      };}
  while (isNaN(input) || (input < 1) || (input > 3));

  switch (input) {
    case 1 :
      option(market);
      break;
    case 2 :
      option(fruits);
      break;
    case 3 :
      option(library);
      break;
    default:
      alert("Opción incorrecta");
      start();
  };
};

let option = (arrName) => {
  do {
    opt = parseInt(prompt(
      "La lista seleccionada contiene:  " + arrName.join(", ") + "\n\n"
      + "1. Agregar elementos \n"
      + "2. Quitar elementos"
    ));

    if ((opt < 1 ) || (opt > 2)) {
      alert("Ingrese un número válido");
    };}
  while ((opt < 1) || (opt > 2));

  switch (opt) {
    case 1 :
      add(arrName);
      break;
    case 2 :
      sus(arrName);
      break;
    default:
      alert("Opción incorrecta");
  };
};

let add = (arrName) => {
  addInput = prompt(
    "Ingrese los elementos que desee agregar, separados por comas: "
  );

  let replaceArr = addInput.replace(/\s+/g, "");
  let splitArr = replaceArr.split(",");
  splitArr.forEach(items);
  function items(item) {
    arrName.push(item);
  };

  alert(
    "Lista actualizada: \n"
    + arrName.join(", "));
  start();
}

let sus = (arrName) => {
  susInput = prompt(
    "Ingrese los elementos que desee eliminar, separados por comas: "
  );

  let replaceArr = susInput.replace(/\s+/g, "");
  const splitArr = replaceArr.split(",");
  splitArr.forEach(items);
  function items(item) {
    let index = arrName.indexOf(item);
    if (index > -1) {
      arrName.splice(index, 1);
    } else {
      alert("No se encontró un elemento. No se hicieron modificaciones");
    }
  };

  alert(
    "Lista actualizada: \n"
    + arrName.join(", "));
  start();
}

// Call
start();