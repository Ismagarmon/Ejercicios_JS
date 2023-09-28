window.onload = () => {
    let head = document.getElementsByTagName('h1')[0]

    console.log(head)

    let a = 'Hola'

    alert (`${a}, buenos días`)

    persona = {
        "Nombre": "Pedro",
        "Edad": 21,
        saludar() {
            return "Hola, buenos dias fiera!"
        }
    }

    head.innerText = persona.Edad 
}

let grado = 'grado superior en DAW';

let usuario = {
    Nombre : "Ismael",
    Edad : 27,
    saludar(){
        console.log(`Buenos días. Tengo el ${grado}.` )
    },
    isMale : true,
    isFemale : false
}

usuario.saludar()
console.log(usuario.isFemale)