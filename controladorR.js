const NOMBRE_CLIENTE="Alma Marcela"
let direccion="cll 64 105a 63"
let telefono="3216523698"
let metodoPago="efectivo"

const NOMBRE_REPARTIDOR="Josue Esteban"
let identificacionRepartidor="1000236459"
let ubicacionRepartidor="unicentro cr 65 #85-20"

const NOMBRE_TIENDA="los postres de doña silvia SAS"
let nombreProducto="postres crisma"
let precioUnitario=40000
let cantidadProducto=3

const IVA=0.19

let valorNeto= precioUnitario*cantidadProducto
let valorIva=valorNeto * IVA
let valorImpueto=valorNeto+valorIva
let valorTotal=valorImpueto-10000

console.log(`......................................`)
console.log(`................Rappi.................`)
console.log(`......................................`)
console.log(`El nombre del producto es: ${nombreProducto}`)
console.log(`Precio del producto: ${precioUnitario}`)
console.log(`La cantidad de productos son: ${cantidadProducto}`)
console.log(`El IVA es de: ${IVA}`)
console.log(`Total: ${valorTotal}`)



