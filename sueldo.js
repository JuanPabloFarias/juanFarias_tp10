let nombre = "Gonzalo";
let apellido = "Ayala";
let sueldoActual = 20000;
let porcentajeAumento = 25;

calculoAumento = (sueldoActual * porcentajeAumento)/100

nuevoSueldo = sueldoActual + calculoAumento;

console.log( `Hola, estimad@ ${nombre} ${apellido}
En base a su sueldo actual: $${sueldoActual}
Ha recibido un aumento del ${porcentajeAumento}%: $${calculoAumento}
y su nuevo sueldo es de: $${nuevoSueldo}`)

