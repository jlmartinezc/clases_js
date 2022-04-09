class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName() {
        if (typeof this.nombre !== 'string' || typeof this.apellido !== 'string') {
            console.log('Tipo de dato incorrecto');
            return;
        }

        if(this.nombre == null ||
            this.nombre.trim().length == 0 ||
            this.apellido == null ||
            this.apellido.trim().length == 0){
                console.log('El campo nombre y/o apellido esta vacio');
                return;
        }

        console.log(`El nombre completo del usuario es: ${this.nombre} ${this.apellido}`);
        return;
    }

    addMascota(mascota) {
        if (typeof mascota !== 'string') {
            console.log('Tipo de dato incorrecto');
            return
        }

        if(mascota == null || mascota.trim().length == 0) {
            console.log('El campo mascota esta vacio');
            return;
        }

        if(Array.isArray(this.mascotas)) {
            this.mascotas.push(mascota);
            console.log('Se agrego una nueva mascota');
            return;
        }
        else{
            console.log('Tipo de dato incorrecto');
            return
        }
    }

    countMacotas() {
        if(this.mascotas.length == 0){
            console.log('El campo de mascotas esta vacio');
            return;
        }

        console.log(`El total de mascotas es de: ${this.mascotas.length}`);
        return 
    }

    addBook(nombreLibro, autorLibro) {
        this.libros.push({
            nombre: nombreLibro,
            autor: autorLibro
        });

        console.log('Se agrego un nuevo libro');
        return;
    }

    getBookNames() {        
        let bookName = this.libros.map(book => (book.nombre));
        console.log(bookName)
        return ;
    }
}

let data = {
    nombre: 'Jorge',
    apellido: 'Martinez',
    libros: [{
        nombre: '1984',
        autor: 'George Orwell'
    },{
        nombre: 'Rebelion en la granja',
        autor: 'George Orwell'
    }, {
        nombre: 'Un mundo feliz',
        autor: 'Aldous Huxley'
    },{
        nombre: 'Fahrenheit 451',
        autor: 'Ray Bradbury'
    }],
    mascotas: []
}

let usuario = new Usuario(data.nombre, data.apellido, data.libros, data.mascotas);

usuario.getFullName();
usuario.addMascota('Perro');
usuario.countMacotas();
usuario.addBook('En las montañas de la locura', 'Howard Phillips Lovecraft ')
usuario.getBookNames();