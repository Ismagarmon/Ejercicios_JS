window.addEventListener('DOMContentLoaded', () => {
    let head = document.getElementsByTagName('h1')[0]

    console.log(head)

    persona = {
        "Nombre": "Pedro",
        "Edad": 21,
        saludar() {
            return "Hola, buenos dias fiera!"
        }
    }

    head.innerText = persona.saludar()
}
)
