
function sumaNotas(notas) {
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    return suma;
}

function calculaPromedio(notas) {
    const suma = sumaNotas(notas);
    return suma / notas.length;
}

const notas = [6, 8, 9, 2, 5, 10];

const promedio = calculaPromedio(notas);

console.log("El promedio de notas ingresadas es:", promedio);