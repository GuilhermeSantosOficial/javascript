function carregar(){
    var agora = new Date()
    var hora = agora.getHours()
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("foto")

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12){
        window.document.body.style.backgroundColor = "#1e11e29a"
        img.src = "images/img-manha.jpg"
    }else if (hora >= 12 && hora <= 18){
        window.document.body.style.backgroundColor = "#b9846f"
        img.src = "images/img-tarde.jpg"
    }else if (hora < 24){
        window.document.body.style.backgroundColor = "#515154"
        img.src = "images/img-noite.jpg"
    }
}
