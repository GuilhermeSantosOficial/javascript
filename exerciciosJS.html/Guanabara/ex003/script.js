function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let pas = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        res.innerHTML = `Impossível contar!`
        //alert("[Erro] Ausência de dados.")
    }else{
        res.innerHTML = "Contando: <br>"
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)

        if(p <= 0){
            alert("Passo inválido! Considerando PASSO 1.")
            p = 1
        }

        if (i < f){
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} &#x1F449; `
            }
        }else if (i > f){
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} &#x1F449;` 
            }
        }
        res.innerHTML += ` &#x1F3C1;`
    }
}

//&#x1F449; &#x1F3C1;