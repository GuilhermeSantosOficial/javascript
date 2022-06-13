var agora = new Date()
var hora = agora.getHours()
console.log(`São ${hora}h`)

if (hora >= 0 && hora < 5){
    console.log("Boa Madrugada!")
}else if (hora < 12){
    console.log("Bom dia!")
}else if (hora < 19){
    console.log("Boa tarde!")
}else if(hora < 24){
    console.log("Boa noite")
}