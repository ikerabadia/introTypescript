import { Producto, calculaISV } from "./06-desestructuracion-funcion";


const carritoCompra: Producto[] = [
    {
        desc: 'Telefono1',
        precio: 100
    },
    {
        desc: 'Telefono2',
        precio:150
    }
];

const [total, isv] = calculaISV(carritoCompra);

console.log( 'Total', total);
console.log( 'ISV', isv);