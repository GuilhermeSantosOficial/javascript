var res = window.document.getElementById("res")
res.innerHTML = "Preparando a contagem"

function contar(){
    var txtini = window.document.getElementById("txtini")
    var txtfim = window.document.getElementById("txtfim")
    var txtpas = window.document.getElementById("txtpas")
    var ini = Number(txtini.value)
    var fim = Number(txtfim.value)
    var pas = Number(txtpas.value)
    res.innerHTML = `Contando: <br>`

    if (window.document.getElementById("txtpas").value.length == 0){
        res.innerHTML = "Impossível contar!"
        document.getElementById("txtpas").focus();
        return false
    }
  
    if (ini === 0){
        for (var c = ini;c <= fim; c = c + pas){
            res.innerHTML += c
            res.innerHTML += " &#x1F449; "
            
        }
        res.innerHTML += " &#x1F3C1;"
        for (var c = ini;c >= fim; c = c - pas){
            res.innerHTML += c
            res.innerHTML += " &#x1F449; "
            
        }
        
    }

    if (pas <= 0){
        alert("Passo inválido! Considerando PASSO 1.")
        pas = 1
    }

    if (ini != ""){
        for (var c = ini;c <= fim; c = c + pas){
            res.innerHTML += c
            res.innerHTML += " &#x1F449; "
            
        }
        
        for (var c = ini;c >= fim; c = c - pas){
            res.innerHTML += c
            res.innerHTML += " &#x1F449; "
            
        }
        res.innerHTML += " &#x1F3C1;"
    
    }else if (window.document.getElementById("txtini").value == ""){
        res.innerHTML = "Impossível contar!"
        document.getElementById("txtini").focus();
        return false
    }
    
    if (window.document.getElementById("txtfim").value == ""){
        res.innerHTML = "Impossível contar!"
        document.getElementById("txtfim").focus();
        return false
    }

    

}