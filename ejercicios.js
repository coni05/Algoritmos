let animales = {
    acuatico : "Pez luna",
    ave : "Águila", 
};

animales.terestre = "Leon";

delete animales.ave;

animales ["losanimalesmásslindos"] = "Pandas";

let tipoAnimal = "reptil";
animales [tipoAnimal] = "cocodrilo"; 
console.log(animales);
//16/05/2025
//programación orientada a objetos 

class Persona{
    edad;
    nombre;
    direccion;
    correo;
    celular;
    constructor(edad,nombre,direccion,correo,celular){
        this.edad=edad;
        this.nombre=nombre;
        this.direccion=direccion;
        this.correo=correo;
        this.celular=celular;
    }
};

const persona = new Persona(15,"coni","b/ la patria mz 15 # 8","conir289@gmail.com",3235354656);
console.log(persona);

// 22/05/2025