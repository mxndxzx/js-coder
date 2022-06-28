do {
  let input = parseFloat(prompt('Ingrese un número para conocer su tabla multiplicadora'));

  if (isNaN(input)) {
    alert('Ingrese un número válido');
  };

  for (let i = 0; i <= 10; i++) {
    let mult = input * i;
    console.log(`${input} x ${i} = ${mult}`);
  };
} while (isNaN(input));