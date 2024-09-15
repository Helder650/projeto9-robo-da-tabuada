let number = parseFloat(prompt("Digite um numero"))
let results = ""
let mult = 1

for (mult = 1; mult <= 20; mult++) {
   results += `${number} x ${mult} = ${number * mult}\n`
}

alert(`O resultado das multiplicações é:
${results}`)