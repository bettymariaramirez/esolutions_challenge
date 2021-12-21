// input dado por esolutions
let input = [
    {
        nombre: "Pedro",
        edad: 20,
        ciudad: "Córdoba"
    },
    {
        nombre: "Patricia",
        edad: 22,
        ciudad: "Córdoba"
    },
    {
        nombre: "José",
        edad: 23,
        ciudad: "Mendoza"
    },
    {
        nombre: "María",
        edad: 20,
        ciudad: "Córdoba"
    },
    {
        nombre: "Juan",
        edad: 20,
        ciudad: "Córdoba"
    },
    {
        nombre: "Ana",
        edad: 22,
        ciudad: "Córdoba"
    },
];
// Se crea la variable de salida
let output = [];

// Se filtra solo los de la ciudad "Córdoba"
const input_filtered_by_city = input.filter(function(element){
    return element.ciudad === "Córdoba";
  });

// Se ordena por edad de menor a mayor y por nombre de A-Z
const input_sorted = input_filtered_by_city.sort(
    function(a, b) {          
       if (a.edad === b.edad) {
          return a.nombre > b.nombre ? 1 : -1;
       }
       return a.edad > b.edad ? 1 : -1;
    });

// Nos quedamos solo con el nombre de cada persona.
for (let value of input_sorted){
    output.push(value["nombre"])
}
console.log(output)