// 3 variables llamadas igual para hacer 3 pruebas (usa una variable y las otras 2 comentalas)

// ES5

// declara las variables ES5

/*var array = [2, 4, 6];
//var array = [-3, 2, -8, 12, 5];
//var array = [1, 2, 3, 4, 5];


// declaración de la funcion

function square(array) {
    var numDuplicate = array.map(function(array) {
        if (array > 0 || array & 2 == 0) {
            return array * array
        } else {
            return array
        }
    });
    console.log(numDuplicate);
};

square(array);*/


//  ES6

// Ahora comenta todo el codigo de arriba y escribelo en ES6


// declara variables (let-const)
let array = [2, 4, 6];
//let array = [-3, 2, -8, 12, 5];
//let array = [1, 2, 3, 4, 5];

// declara la funcion y ejecuta el código
let square = array => {
    let numDuplicate = array.map(array => {
        if (array > 0 || array % 2 == 0) {
            return array * array
        } else {
            return array
        }
    });
    console.log(numDuplicate);
};

// ejecuta la funcion
square(array);
