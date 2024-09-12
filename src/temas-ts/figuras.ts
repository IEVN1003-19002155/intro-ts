// Clase formas geométricas bidimensionales (área)
abstract class Figura {
    abstract calcularArea(): number;
}

class Cuadrado extends Figura { // Cuadrado
    protected lado: number;

    constructor(lado: number) {
        super();
        this.lado = lado;
    }

    calcularArea(): number {
        return this.lado * this.lado;
    }
}

class Pentagono extends Figura { // Pentágono
    protected lado: number;
    protected apotema: number;

    constructor(lado: number, apotema: number) {
        super();
        this.lado = lado;
        this.apotema = apotema;
    }

    calcularArea(): number {
        const perimetro = this.lado * 5;
        return (perimetro * this.apotema) / 2;
    }
}

class Circulo extends Figura { // Círculo
    protected radio: number;

    constructor(radio: number) {
        super();
        this.radio = radio;
    }

    calcularArea(): number {
        return Math.PI * this.radio * this.radio;
    }
}

// Cubo que hereda de Cuadrado // Volumen = lado^3
class Cubo extends Cuadrado {
    constructor(lado: number) {
        super(lado);
    }

    calcularVolumen(): number {
        return Math.pow(this.lado, 3); 
    }
}

// Pirámide que hereda de Pentágono // Volumen de una pirámide = (Área de la base * altura) / 3
class PiramidePentagonal extends Pentagono {
    private altura: number;

    constructor(lado: number, apotema: number, altura: number) {
        super(lado, apotema);
        this.altura = altura;
    }

    calcularVolumen(): number {
        const areaBase = this.calcularArea();
        return (areaBase * this.altura) / 3; 
    }
}

// Esfera que hereda de Círculo  // Volumen = 4/3 * pi * radio^3
class Esfera extends Circulo {
    constructor(radio: number) {
        super(radio);
    }

    calcularVolumen(): number {
        return (4 / 3) * Math.PI * Math.pow(this.radio, 3);
    }
}

// Ejemplo de uso
const cuadrado = new Cuadrado(4);
console.log(`Área del cuadrado: ${cuadrado.calcularArea()} unidades cuadradas`);

const pentagono = new Pentagono(3, 4);
console.log(`Área del pentágono: ${pentagono.calcularArea()} unidades cuadradas`);

const circulo = new Circulo(5);
console.log(`Área del círculo: ${circulo.calcularArea()} unidades cuadradas`);

const cubo = new Cubo(4);
console.log(`Volumen del cubo: ${cubo.calcularVolumen()} unidades cúbicas`);

const piramide = new PiramidePentagonal(3, 4, 5);
console.log(`Volumen de la pirámide pentagonal: ${piramide.calcularVolumen()} unidades cúbicas`);

const esfera = new Esfera(5);
console.log(`Volumen de la esfera: ${esfera.calcularVolumen()} unidades cúbicas`);
