interface Alumno{
    nombre:string;
    edad:number;
    email:string;
    calificacion?:number;
}

const alumno:Alumno={
    nombre:'mario',
    edad:23,
    email:'mario@gmail.com',
}

console.table(alumno);

let mascotas=['perro','gato','perico']
mascotas[1]='Nuevo Gato';
mascotas.push('leon');
console.log(mascotas);

let tem:(string|number)[]=[];
tem.push(11);
tem.push('hola');
console.log(tem);

