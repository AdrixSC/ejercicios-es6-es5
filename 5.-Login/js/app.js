// En este ejercicio deberas crear tu solción en ES5, asegurarte que funcione 

// declara el prompt

/*var askPassword = prompt('¿Cuál es tu contraseña?');
var password = 'laboratoria';

function user() {
    if (askPassword === password) {
        console.log('true');
    } else if (askPassword !== password) {
        console.log('false');
    } else if (askPassword === "") {
        console.log('false');
    };
};
user();*/

// comenta todo lo anterior y escribelo en ES6

const askPassword = prompt('¿Cuál es tu contraseña?');
let password = 'laboratoria';


const user = password => {
    if (askPassword === password) {
        console.log('true');
    } else if (askPassword !== password) {
        console.log('false');
    } else if (askPassword === "") {
        console.log('false');
    }
}
user(password);