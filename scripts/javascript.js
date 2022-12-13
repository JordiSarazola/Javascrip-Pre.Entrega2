function saludo() {
    console.log("Bienvenido al multiverso");
    alert("Bienvenido al multiverso")
};

function inversor() {
    let monto = prompt ("Ingrese la cantidad de capital que desea invertir en $");
    if (monto !== "") {
        console.log("Usted desea invertir $ " + monto);
        alert("Usted desea invertir $ " + monto);
    } else { console.log("Ingrese el monto que desea invertir");
    monto = prompt ("Ingrese monto");
    }
 console.log ("Nuestro equipo lo contactara a la brevedad");
 alert("Nuestro equipo lo contactara a la brevedad");

 menu();
}










function maestrias() {

    let maestrias = prompt("Diganos cuales son sus maestrias");
    if (maestrias != "") {
        console.log("Es un honor tenerte aqui, " + usuario + ", encontraremos el puesto perfecto para ti.")
        alert("Es un honor tenerte aqui, " + usuario + ", encontraremos el puesto perfecto para ti.")
    } else {
        alert("Ingrese por favor sus estudios");

        maestrias = prompt("Diganos cuales son sus formaciones");
        if (maestrias != "") {
            console.log("Es un honor tenerte aqui, " + usuario + ", encontraremos el puesto perfecto para ti.")
            alert("Es un honor tenerte aqui, " + usuario + ", encontraremos el puesto perfecto para ti.")
        }
        else {
            alert("No ingreso los datos solicitados.");
            console.log("No ingreso los datos solicitados.")
            return false
        }



    }
}

function puesto() {
    console.log("Cual es el rol que te gustaria desempeñar en nuestra red?");
    alert("Cual es el rol que te gustaria desempeñar en nuestra red?");

    let cargo = prompt("Ingrese unicamente como valor, el numero indicado aqui, para el puesto que desea ocupar."
        + "\n" + "1) Estudiante" + "\n" + "2) Maestro" + "\n" + "3)Inversor");

    switch (cargo) {
        case "1":
            console.log("Gracias por tu interes en ser un estudiante de nuestra red");
            alert("Gracias por tu interes en ser un estudiante de nuestra red");

            break;

        case "2":
            console.log("Gracias por compartir tu conocimiento en nuestra red");
            alert("Gracias por compartir tu conocimiento en nuestra red");

            maestrias();

            break;
        case "3":
            console.log("Gracias por contribuir al desarrollo de la red");
            alert("Gracias por contribuir al desarrollo de la red");
            inversor();



    }





    ;
}


function permiso() {
    let objetivo = prompt("Eres mayor de 18 años?");
    if (objetivo.toLowerCase() == "si") {
        console.log("Es un placer conocerte," + usuario);
        alert("Es un placer conocerte, " + usuario);
        estudios();
        intereses();


    }
    else {
        console.log("Vuelve cuando lo seas");
        alert("Vuelve cuando lo seas");
        return false

    };
}

function intereses() {
    let intereses = prompt("Cuales son tus intereses? :" + "\n" + "1) Tarot" + "\n" + "2) Reiki" + "\n" + "3) Registros" + "\n" + "4) Terapia Floral evolutiva" + "\n" + "5) Otro");
    if (intereses == "1" || intereses.toLowerCase() == "tarot") {
        console.log("Excelente");
        alert("Excelente");

        puesto();
    } else if (intereses == "2" || intereses.toLowerCase() == "reiki") {
        console.log("Estamos juntos en este camino"); alert("Estamos juntos en este camino");
        puesto();
    }
    else if (intereses == "3" || intereses.toLowerCase() == "registros") {
        console.log("Te fascinara esta herramienta");
        alert("Te fascinara esta herramienta");

        puesto();
    } else if (intereses == "4" || intereses.toLowerCase() == "terapia floral evolutiva" || intereses.toLowerCase() == " terapia floral" || intereses.toLowerCase() == "terapia") {
        console.log("De las mejores herramientas para el autoconocimiento"); alert("De las mejores herramientas de autoconocimiento");

        puesto();

    } else if (intereses == "5" || intereses.toLowerCase() == "otro") {
        console.log("Este sitio no es para ti");
        alert("Este sitio no es para ti")
        return false
    }
}

saludo();



let usuario = prompt("Ingrese su nombre y apellido");
if (usuario != "") {
    console.log("Hola, " + usuario + ", bienvenido a tu nuevo hogar");
    alert("Hola, " + usuario + ", bienvenido a tu nuevo hogar")
}
else {
    alert("Ingrese sus datos");
    usuario = prompt("Ingrese su nombre y apellido")
};

function estudios() {
    let estudios = prompt("Conoces la definicion de Esoterismo y Espiritualidad")
    if (estudios.toLowerCase() == "si") {
        console.log("Que bueno tenerte aqui, " + usuario);
        alert("Que bueno tenerte aqui, " + usuario)
    }
    else {
        console.log("No importa, aqui comenzara nuestro camino.");
        alert("No importa, aqui comenzara nuestro camino.");
    }

}


permiso();







function menu() {

    let opcion = parseInt(prompt("Ingrese una opción: \n 1) Alta de Inversor \n 2) Baja de Inversor \n 3) Modificación de Inversion \n 4) Consulta de Inversores \n 5) Salir"));
    return opcion;
}

let opcion = menu();
switch (opcion) {
    case 1:
        altaInversor();
        break;
    case 2:
        bajaInversor();
        break;
    case 3:
        modificacionInversor();
        break;
    case 4:
        consultaInversor();
        break;
    case 5:
        salir();
        break;
    default:
        alert("Vuelva pronto");
        break;
}


function altaInversor() {
    let nombre = prompt("Ingrese el nombre del Inversor: ");
    let apellido = prompt("Ingrese el apellido del Inversor: ");
    let dni = parseInt(prompt("Ingrese el DNI del Inversor: "));
    let saldo = parseInt(prompt("Ingrese el saldo del Inversor: "));
    let inversor = new Inversor(nombre, apellido, dni, saldo);
    arrayInversores.push(inversor);
    console.log(arrayInversores);
}


function bajaInversor() {
    let dni = parseInt(prompt("Ingrese el DNI del inversor: "));
    let inversor = arrayInversores.find(Inversor => Inversor.dni === dni);
    let indice = arrayInversores.indexOf(inversor);
    arrayInversores.splice(indice, 1);
    console.log(arrayInversores);
}

function modificacionInversor() {
    let dni = parseInt(prompt("Ingrese el DNI del Inversor: "));
    let Inversor = arrayInversores.find(Inversor => Inversor.dni === dni);
    let indice = arrayInversores.indexOf(Inversor);
    let nombre = prompt("Ingrese el nombre del Inversor: ");
    let apellido = prompt("Ingrese el apellido del Inversor: ");
    let saldo = parseInt(prompt("Ingrese el saldo del Inversor: "));
    let inversorModificado = new Inversor(nombre, apellido, dni, saldo);
    arrayInversores.splice(indice, 1, inversorModificado);
    console.log(arrayInversores);
}



function consultaInversor() {
    let dni = parseInt(prompt("Ingrese el DNI del inversor: "));
    let inversor = arrayInversores.find(Inversor => Inversor.dni === dni);
    console.log(inversor);
}




function salir() {
    alert("Gracias por participar del multiverso");
}


class Inversor {
    constructor(nombre, apellido, dni, saldo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.saldo = saldo;
    }
}

const InversorSamuel = new Inversor ("Samuel", "Tocaimaza", 12333678, 1000);
const InversorJuan = new Inversor ("Esteban", "Perez", 87655521, 2000);
const InversorMaria = new Inversor ("Jose", "Gomez", 12344678, 3000);
const InversorPedro = new Inversor ("Manuel", "Gonzalez", 12344478, 4000);

const arrayInversores = [];

arrayInversores.push(InversorSamuel);
arrayInversores.push(InversorJuan);
arrayInversores.push(InversorMaria);
arrayInversores.push(InversorPedro);

console.log(arrayInversores);

