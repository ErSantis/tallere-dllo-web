//Punto 1
const convertidorTemp = (grados) => {
    let fahrenheit = (grados * 9 / 5) + 32;
    return fahrenheit;
}

//Puunto 2
const resolvedor = (a, b, c, flag) => {
    let x1, x2;
    let raiz = Math.pow(b, 2) - 4 * a * c;

    x1 = (-b + Math.sqrt(raiz)) / (2 * a);
    x2 = (-b - Math.sqrt(raiz)) / (2 * a);

    if (flag) {
        return x1;
    } else {
        return x2;
    }

}

//Punto 3
const mejorParidad = (num1) => {
    let paridad = num1 % 2 == 0 ? true : false;
    return paridad;
}

//Punto 4
const peorParidad = (num) => {

    let resultado = false;
    let contador = 0;
    if (num === 0) {
        resultado = true;
        return resultado;
    }
    while (contador < num) {
        contador += 2;
        if (contador === num) {
            resultado = true;
        }
    }

    return resultado;
}

console.log(convertidorTemp(30));
console.log(resolvedor(1, 5, 4, false));
console.log(mejorParidad(0));
console.log(peorParidad(0));