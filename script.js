function pedirDatos() { // pide datos al usuario y los devuelve en un array

let usuario = prompt("Ingrese su usuario:");
let contraseña = prompt("Ingrese su contraseña:");

console.log("Usuario:", usuario);
console.log("Contraseña:", contraseña);

return [usuario, contraseña];

}

function verificarDatos(usuario, contraseña) {   // verifica si los datos ingresados son correctos
    
let usuarioCorrecto = "admin";
let contraseñaCorrecta = "1234";

if(usuario === usuarioCorrecto && contraseña === contraseñaCorrecta){

return true;

}else{

return false;

}

}