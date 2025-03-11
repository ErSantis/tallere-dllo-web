//Punto 1
function desglosarString(string, tipo) {
    let vocales = ['a', 'e', 'i', 'o', 'u'];

    let numvocales = 0;
    let numConsonantes = 0;

    for (let char of string.toLowerCase()) {
        if (vocales.includes(char)) {
            numvocales++;
        } else {
            numConsonantes++;
        }
    }

    if (tipo === 'vocales') {
        return numvocales;
    } else if (tipo === 'consonantes') {
        return numConsonantes;
    }

}

//Punto 2
function twoSum(lista, entero) {
    let indices = new Map();

    for (let i = 0; i < lista.length; i++) {
        let complemento = entero - lista[i];

        if (indices.has(complemento)) {
            return [indices.get(complemento), i];
        }

        indices.set(lista[i], i);
    }

    return null; // Si no se encuentra ninguna pareja que sume el entero dado
}

//PJunto 3
function conversionRomana(romano) {
    const valoresRomanos = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

    return romano.split('').reduce((total, actual, i, arr) => {
        let valorActual = valoresRomanos[actual];
        let valorSiguiente = valoresRomanos[arr[i + 1]] || 0;

        return valorActual < valorSiguiente ? total - valorActual : total + valorActual;
    }, 0);
}

// Ejemplo de uso
console.log(desglosarString("murcielagos", "vocales"));
console.log(desglosarString("murcielagos", "consonantes"));

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3, 2, 4], 6))

console.log(conversionRomana("III"));
console.log(conversionRomana("XIV"))
console.log(conversionRomana("MMXXIV"));
console.log(conversionRomana("MXMVII"));