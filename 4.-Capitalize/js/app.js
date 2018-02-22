// En este ejercicio te daremos el código en ES6 ya solucionado, tu tendrás que transformarlo en ES5

/*const word = "este ejercicio pasa a mayusculas la primer letra de cada palabra";

const capitalize = str => {
    let newStr = str.split(" ");
    let result = [];
    newStr.forEach(palabra => {
        let primerLetra = palabra.charAt(0).toUpperCase();
        let mediaPalabra = palabra.slice(1, palabra.length);
        result.push(primerLetra + mediaPalabra);
    });
    console.log(result.join(" "));
};

capitalize(word);*/

// Comenta el código anterior y ahora traducelo a ES5

var word = "este ejercicio pasa a mayusculas la primer letra de cada palabra";

var capitalize = function(str) {
    var newStr = str.split(" ");
    //console.log(newStr);
    var result = [];
    for (var i = 0; i < newStr.length; i++) {
        var primerLetra = newStr[i].charAt(0).toUpperCase();
        var mediaPalabra = newStr[i].slice(1, newStr[i].length);
        result.push(primerLetra + mediaPalabra);
    }
    console.log(result.join(" "));
}

capitalize(word);