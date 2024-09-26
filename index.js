// Número de entrada
let input = 34;

function fibonacci(input) {
  if (typeof input === "number") {
    let prev = 0;
    let next = 1;
    let temp;

    while (next < input) {
      temp = next;
      next = prev + temp;
      prev = temp;

    }

    if (next === input) {
      console.log(`O número ${input} faz parte da sequência fibonacci`);
    } else {
      console.log(`O número ${input} não faz parte da sequência fibonacci`);
    }

  } else {
    console.log("Informe apenas valores que sejam números");
  }
}

fibonacci(input);