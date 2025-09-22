let estado = document.getElementById("estado");
estado.value = 11;

let fecha = document.getElementById("fecha");
let hoy = new Date();
console.log(hoy);
fechaCadena = hoy.getFullYear();
console.log(fechaCadena);
fechaCadena += "-";
console.log(fechaCadena);
fechaCadena += ("0" + (hoy.getMonth() + 1)).slice(-2);
console.log(fechaCadena);
fechaCadena += "-";
console.log(fechaCadena);
fechaCadena += ("0" + hoy.getDate()).slice(-2);
console.log(fechaCadena);


























    /*
    Reto: Hacer un formulario que oculte y muestre la contraseña
    usar input group de bootstrap
    Tip: cambiar el type al input ya sea text o password

    No usar alert, utilizar https://getbootstrap.com/docs/5.3/components/alerts/#examples
    de BS
    */