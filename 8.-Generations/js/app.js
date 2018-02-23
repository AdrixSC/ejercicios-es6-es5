const showNumOfGenerations = (generaciones) => {
    let totalGenerations = generaciones.length;
    // console.log(totalGenerations);
    console.log(`El numero de generaciones es ${totalGenerations}`)
}


// 1.2- Mostrar en la consola un mensaje que diga ... "La (numero de generacion) tuvo (numero de alumnas en esa generacion) alumnas" [Un mensaje por cada generacion]

const numOfAlumnasByGenerations = (generations, totalNumAlumnsGenerations) => {
    console.log(`La ${generations} generacion tuvo ${totalNumAlumnsGenerations} alumnas`);
}

// 1.3- Mostrar en la consola un mensaje que diga "El promedio de edad de la (numero de generacion) generacion es de (promedio de numero de alumas en la generacion)" [un mensaje por generacion]


const averageAge = (generations, average) => {
    console.log(`El promedio de edad de la ${generations} generacion es de ${average}`);


}







// 1.4- Mostrar en la consola un mensaje que diga "El nombre mas comun de la (numero de generacion) generacion es: (nombre mas comun de esa generacion)"



let getTheData = () => {
    let generaciones = Object.keys(laboratoria.generaciones);
    console.log(generaciones);

    for (let index in laboratoria.generaciones) {
        let generations = index;
        let totalNumAlumnsGenerations = laboratoria.generaciones[index].alumnas;
        let average = laboratoria.generaciones[index]["edad-promedio"];


        showNumOfGenerations(generaciones);
        numOfAlumnasByGenerations(generations, totalNumAlumnsGenerations);
        averageAge(generations, average)
    }
}

getTheData();



// Alcance 2... 


// 2.1- Mostrar en la consola un mensaje que diga... ""El numero total de alumnas en todas las generaciones es: (total de alumnas de todas las generaciones) y en promedio (el promedio de alumnas por generacion) mujeres  cursan Laboratoria cada generacion"








// 2.2- Mostrar en consola un mensaje que diga "La edad promedio de las mujeres que cursan laboratoria es:  (promedio de la edad promedio de todas las generaciones)"






// 2.3- Mostrar en consola un mensaje que diga "En las (numero de generaciones) los nombres mas comunes fueron (los nombres mas comunes de todas las generaciones separados por una (,)).






// Alcance 3....

// Crear botones para disparar cada uno de los puntos y pintarlos por medio del DOM 





// Alcance 4....

// Agregar la siguiente generacion a la data desde una funcion obteniendo los datos por medio de prompts:

//  "sexta", "alumnas": 120, "edad-promedio": 28, "nombre-mas-comun" : "Silvana"




// ----------------------------Ahora comenta todo el código anterior y escribelo en ES6----------------v