class PersonaNormal {
    constructor(
        public nombre: string,
        public direccion: string
    ){}
}

class Heroe extends PersonaNormal{
    
    constructor(
        public alterEgo: string,
        public edad?: number,
        nombre?: string,
        direccion?: string,
    ){
        super(nombre, direccion);
    }
}

const ironman = new Heroe("Ironman", 45, 'Tony', 'New York, USA');

console.log(ironman);