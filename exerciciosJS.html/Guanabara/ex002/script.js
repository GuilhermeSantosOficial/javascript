function verificar(){
    var data = new Date()
    var ano = data.getUTCFullYear()
    var fano = document.getElementById("txtidade")
    var res = document.querySelector("div#res")
    if (fano.value.length == 0 || fano.value > ano){
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    }else{
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var gênero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if (fsex[0].checked){
            gênero = "Homem"
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute("src", "images/homem-criança.jpg")
            }else if (idade < 21){
                //jovem
                img.setAttribute("src", "images/homem-adolescente.jpg")
            }else if (idade < 50){
                //adulto
                img.setAttribute("src", "images/homem-adulto.jpg")
            }else{
                //idoso
                img.setAttribute("src", "images/homem-idoso.jpg")
            }
        }else if (fsex[1].checked){
            gênero = "Mulher"
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute("src", "images/mulher-criança.jpg")
            }else if (idade < 21){
                //jovem
                img.setAttribute("src", "images/mulher-adolescente.jpg")
            }else if (idade < 50){
                //adulto
                img.setAttribute("src", "images/mulher-adulta.jpg")
            }else{
                //idoso
                img.setAttribute("src", "images/mulher-idosa.jpg")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}

// var msg = window.document.getElementById("msg")
// msg.innerHTML = "Preenchar os dados acima para ver o resultado!"
// var foto = window.document.getElementById("foto")

// function verificar(){
//     var agora = new Date()
//     var ano = agora.getUTCFullYear()
//     var txtidade = window.document.getElementById("txtidade")
//     var idade = Number(txtidade.value)
//     var nasc = ano - idade
    
//     if (window.document.getElementById("masculino").checked){
//         msg.innerHTML = `Detectamos homem com ${nasc} anos.`
//         if (nasc >= 0 && nasc <= 2){
//             foto.src = "images/homem-bebe.jpg"
//         }else if (nasc >= 3 && nasc <= 12){
//             foto.src = "images/homem-criança.jpg"
//         }else if (nasc >= 13 && nasc <= 17){
//             foto.src = "images/homem-adolescente.jpg"
//         }else if (nasc >= 18 && nasc <= 44){
//             foto.src = "images/homem-adulto.jpg"
//         }else if (nasc >= 45 && nasc <= 64){
//             foto.src = "images/homem-meioidade.jpg"
//         }else if (nasc >= 65 && nasc <= 122){
//             foto.src = "images/homem-idoso.jpg"
//         }else {
//             alert("[ERRO] Verifique os dados e tente novamente!")
//             msg.innerHTML = "Preenchar os dados acima para ver o resultado!"
//             foto.src = ""
//         }

//     }
            

//     if (window.document.getElementById("feminino").checked){
//         msg.innerHTML = `Detectamos mulher com ${nasc} anos.`
//         if (nasc >= 0 && nasc <= 2){
//             foto.src = "images/mulher-bebe.jpg"
//         }else if (nasc >= 3 && nasc <= 12){
//             foto.src = "images/mulher-criança.jpg"
//         }else if (nasc >= 13 && nasc <= 17){
//             foto.src = "images/mulher-adolescente.jpg"
//         }else if (nasc >= 18 && nasc <= 44){
//             foto.src = "images/mulher-adulta.jpg"
//         }else if (nasc >= 45 && nasc <= 64){
//             foto.src = "images/mulher-meiaidade.jpg"
//         }else if (nasc >= 65 && nasc <= 122){
//             foto.src = "images/mulher-idosa.jpg"
//         }else {
//             alert("[erro]")
//             msg.innerHTML = "Preenchar os dados acima para ver o resultado!"
//             foto.src = ""
//         }

// }

// }

