// Variables


// Arrays
const market = ["huevos", "galletitas", "harina"];
const fruits = ["bananas", "paltas", "kiwis"];
const library = ["lapiceras", "lápices", "cuadernos"];


// Funciones
const capitalize = (word) => {
  let newWord = word.charAt(0).toUpperCase() + word.slice(1);
  return newWord;
};

const lists = () => {
  const marketList = document.querySelector('.market ul');
  market.forEach(item => {
    marketList.innerHTML += `<li>- ${capitalize(item)}</li>`;
  });

  const fruitsList= document.querySelector('.fruits ul');
  fruits.forEach(item => {
    fruitsList.innerHTML += `<li>- ${capitalize(item)}</li>`;
  });

  const libraryList= document.querySelector('.library ul');
  library.forEach(item => {
    libraryList.innerHTML += `<li>- ${capitalize(item)}</li>`;
  });
};

// Calls
lists();

// let option = (arrName) => {
//   do {
//     opt = parseInt(prompt(
//       "La lista seleccionada contiene:  " + arrName.join(", ") + "\n\n"
//       + "1. Agregar elementos \n"
//       + "2. Quitar elementos"
//     ));

//     if ((opt < 1 ) || (opt > 2)) {
//       alert("Ingrese un número válido");
//     };}
//   while ((opt < 1) || (opt > 2));

//   switch (opt) {
//     case 1 :
//       add(arrName);
//       break;
//     case 2 :
//       sus(arrName);
//       break;
//     default:
//       alert("Opción incorrecta");
//   };
// };

// let add = (arrName) => {
//   addInput = prompt(
//     "Ingrese los elementos que desee agregar, separados por comas: "
//   );

//   let replaceArr = addInput.replace(/\s+/g, "");
//   let splitArr = replaceArr.split(",");
//   splitArr.forEach(items);
//   function items(item) {
//     arrName.push(item);
//   };

//   alert(
//     "Lista actualizada: \n"
//     + arrName.join(", "));
//   start();
// }

// let sus = (arrName) => {
//   susInput = prompt(
//     "Ingrese los elementos que desee eliminar, separados por comas: "
//   );

//   let replaceArr = susInput.replace(/\s+/g, "");
//   const splitArr = replaceArr.split(",");
//   splitArr.forEach(items);
//   function items(item) {
//     let index = arrName.indexOf(item);
//     if (index > -1) {
//       arrName.splice(index, 1);
//     } else {
//       alert("No se encontró un elemento. No se hicieron modificaciones");
//     }
//   };

//   alert(
//     "Lista actualizada: \n"
//     + arrName.join(", "));
//   start();
// }

// // Call
// start();