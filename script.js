function pedirDatos() { // pide datos al usuario y los devuelve en un array

let usuario = prompt("Ingrese su usuario:")
let contraseña = prompt("Ingrese su contraseña:")

console.log("Usuario:", usuario)
console.log("Contraseña:", contraseña)

return [usuario, contraseña]

}

function verificarDatos(usuario, contraseña) {   // verifica si los datos ingresados son correctos

let usuarioCorrecto = "admin"
let contraseñaCorrecta = "1234"

if(usuario === usuarioCorrecto && contraseña === contraseñaCorrecta){

return true

}else{

return false

}

}
function login(){

let intentos = 0;

while(intentos < 3){

let datos = pedirDatos();

let usuario = datos[0];
let contraseña = datos[1];

let acceso = verificarDatos(usuario, contraseña);

if(acceso){

alert("Acceso permitido");
return;

}else{

alert("Datos incorrectos");
intentos++;

}

}

alert("Usuario bloqueado");

}
