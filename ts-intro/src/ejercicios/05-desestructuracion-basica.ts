 
 interface Reproductor{
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
 }

 interface Detalles{
     autor: string;
     anio: number;
 }

 const reproductor: Reproductor = {
     volumen: 90,
     segundo: 36,
     cancion: 'Mess',
     detalles: {
         autor: 'Ed Sheeran',
         anio: 2015
     }
 }

 const autor = 'Fulano';

 const{ volumen, segundo, cancion, detalles:{ autor: autorDetalle } } = reproductor; //Forma 1
 //const {autor} = detalles;                                                         //Forma 2

 /* console.log('Volumen: '+volumen);
 console.log('Segundo: '+segundo);
 console.log('Cancion: '+cancion);
 console.log('Autor: '+autorDetalle); */

 const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
 const [ , , p3 ] = dbz;

 console.log(dbz[0]);
 console.log(dbz[1]);
 console.log(p3);