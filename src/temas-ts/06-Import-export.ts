import{calcularIVA2, Producto} from "./05-desestructura-funciones"

const carrito:Producto[]=[
    {
        desc:'Telefono1',
        precio:100
    },
    {
        desc:'Telefono3',
        precio:300
    }
]
const [total,iva]=calcularIVA2(carrito);
console.log(`Total: ${total}`)
console.log(`IVA: ${iva}`)