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

