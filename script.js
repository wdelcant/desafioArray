/* 
* Este algoritmo se encarga de mostrar el menu y de solicitar el número de cabañas que desea arrendar.
* Si el usuario ingresa un número que no está entre 1 y 2, se le mostrará un mensaje de error.
* Si el usuario ingresa un número que es igual a ESC, se le mostrará un mensaje de salida.
* Luego pedirá la cantidad de adultos con un máximo de la cantidad de personas que puede arrendar.
* Luego pedirá la cantidad de niños con un máximo de la cantidad de personas que puede arrendar.
* Si el usuario ingresa un número que no está entre 0 y la cantidad de personas que puede arrendar, se le mostrará un mensaje de error.
*/

//inicio del código
// declaramos las variables de los precios
let priceOne = 60000;
let priceTwo = 120000;

let userName = prompt('Ingrese su nombre de usuario: '); // El usuario ingresa su nombre
alert(`Hola ${userName.toUpperCase()} bienvenido/a a nuestro sistema de arrendamiento de cabañas y menú con piscina`); // mensaje de bienvenida

// Listas
class User {
    constructor(name, lastName, age) {
        this.name = name.toUpperCase();
        this.lastName = lastName.toUpperCase();
        this.age = age;
    }
}

function registerUsers() {
    let numberUsers = parseInt(prompt('Ingrese el número de usuarios que desea registrar'));
    let users = [];
    for (let i = 0; i < numberUsers; i++) {
        let name = prompt('Ingrese su nombre');
        let lastName = prompt('Ingrese su apellido');
        let age = parseInt(prompt('Ingrese su edad'));
        let user = new User(name, lastName, age);
        users.push(user);
    }
    return users;
}

function registeredUsers(users) {
    for (const user of users) {
        console.log(user);
        alert(`Nombre: ${user.name} \n Apellido: ${user.lastName} \n Edad: ${user.age}`);
    }
}

function main() {
    let users = registerUsers();
    registeredUsers(users);
}

// funciones

function oneCabin(adults, kids){ // cotizamos una cabaña
    let total = adults + kids;
        if (adults <= 0 && kids !== 0){
            alert('No se puede arrendar una cabañas sin adultos');
        }
        else if (total > 6){
            /* Una alerta que se activa cuando el número de personas supera las 6. */
            alert('Sobrepasa el limite de personas por cabaña (6 personas), contrate dos si desea mas capacidad');
        }
        else if (total <= 6){ // si el usuario ingresa un número que está entre 1 y 6
            alert(`El total a pagar es: $${priceOne}`);
        }
        else (total <= 6)
            {main();} 
        
    return total;
}

function twoCabin(adults, kids){ // cotizamos dos cabañas
    let total = adults + kids;
        if (adults <= 0 && kids !== 0){
            alert('No se puede arrendar una cabañas sin adultos');
        }
        else if (total > 12){
            /* Una alerta que se activa cuando el número de personas supera las 12. */
            alert('Sobrepasa el limite de personas máximo por cabaña, si son mas personas favor contactar a nuestro personal');
        }
        else if (total <= 12){ // si el usuario ingresa un número que está entre 1 y 6 independientemente de la cantidad de personas que puede arrendar
            alert(`El total a pagar es: $${priceTwo}`);
        }
        else (total <= 12)
            {main();} 
    return total;
}

function showTotal(total){ //muestra el total de personas
    if (total <= 7 || total <= 13){
        alert(`El total de personas ingresadas es : ${total}`);
    }
}

function showMenu(menu){ // muestra el menú principal del programa
    let options = prompt(`Estimado/a ${userName.toUpperCase()}, elija la opción que desea.\n \n 1. Una cabaña (hasta 6 personas) \n 2. Dos cabañas (hasta 12 personas) \n \n Escriba (EXIT) para salir`);
    return options;
}

function quotation(){ //cotizamos las cabañas y el menú
    let selectedOption = showMenu(); 
    while(selectedOption !== 'EXIT'){
        if(!isNaN(selectedOption !== '')){
            let adults = parseInt(prompt('Ingrese el número de adultos'));
            let kids = parseInt(prompt('Ingrese el número de niños'));
                selectedOption = parseInt(selectedOption);
                 //Switch seleccionar la opción
                
                switch(selectedOption){
                    case 1: // una cabaña
                        let totalOne = oneCabin(adults, kids); // solicitamos el número de adultos y niños
                        showTotal(totalOne); // mostramos el total de personas
                        break;
                    case 2: // dos cabañas
                        let totalTwo = twoCabin(adults, kids); // solicitamos el número de adultos y niños
                        showTotal(totalTwo); // mostramos el total de personas
                        break;
                    default:
                        alert('Ingrese la opción 1, 2 o 3 para continuar');
                        break;
                }
        }else{ // si el usuario ingresa un número que no está entre 1,2 o 3
            alert('Opción no válida');
        }
        selectedOption = showMenu();   
    }
}
/* Llamando a la función principal. */
quotation();