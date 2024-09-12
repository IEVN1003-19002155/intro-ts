class FormulaGeneral { /*Representamos los coeficientescon las letras a,b,c*/
    private a: number;
    private b: number;
    private c: number;

    constructor(a: number, b: number, c: number) { 
        this.a = a;
        this.b = b;
        this.c = c;
    }

    public calRaices(): { raiz1: number | null, raiz2: number | null } {
        const discriminante = this.b * this.b - 4 * this.a * this.c;

        if (discriminante < 0) {
            console.log("Solucion compleja viejo.");
            return { raiz1: null, raiz2: null };
        }
        const raiz1 = (-this.b + Math.sqrt(discriminante)) / (2 * this.a);
        const raiz2 = (-this.b - Math.sqrt(discriminante)) / (2 * this.a);

        return { raiz1, raiz2 };
    }
}

/*Ejemplo con datos seleccionados*/
const formula = new FormulaGeneral(1, -3, 2); //ax^2 + bx + c = 0
const raices = formula.calRaices();

if (raices.raiz1 !== null && raices.raiz2 !== null) {
    console.log(`Las raíces de la ecuación son: ${raices.raiz1} y ${raices.raiz2}`);
} else {
    console.log("No hay raíces reales.");
}
