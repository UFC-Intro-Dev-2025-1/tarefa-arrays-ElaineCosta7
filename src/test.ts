const frutas = ["uva", "maçã", "banana", "caqui", "melancia"];

console.log(frutas.slice(2)); // [ 'banana', 'caqui', 'melancia' ]

console.log(frutas.slice(2, 4)); // [ 'banana', 'caqui' ]

console.log(frutas.slice(1, 5)); // [ 'maçã', 'banana', 'caqui', 'melancia' ]

console.log(frutas.slice(-3)); // [ 'caqui', 'melancia' ]

console.log(frutas) // frutas não foi alterado! 