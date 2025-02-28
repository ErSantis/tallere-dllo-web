//Punto 1
function findMax(lista) {
    let max = lista[0];
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] > max) {
            max = lista[i];
        }
    }
    return max;
}

//Punto 2
function includes(lista, numero) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === numero) {
            return true;
        }
    }
    return false;
}

//Punto 3
function sum(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
    }
    return suma;
}

//Punto 4
function missingNumbers(lista) {
    let missing = [];
    

    //Hallar el max con la función findMax
    let max = findMax(lista);
    
    //Hallar el min
    let min = lista[0];
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] < max) {
            min = lista[i];
        }
    }

    for (let i = min; i <= max; i++) {
        if (!includes(lista, i)) {
            missing.push(i);
        }
    }
    return missing;
}
