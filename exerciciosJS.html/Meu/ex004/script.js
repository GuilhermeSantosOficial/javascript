function tabuada(){
    var tab = window.document.getElementById("seltab")
    var txtnum = window.document.getElementById("txtnum")
    var num = Number(txtnum.value)
    if (txtnum.value.length == 0){
        window.alert("Por favor, coloque um número.")
    }else{
        tab.innerHTML = ""
        for (var c = 1; c <= 10; c++){ 
            var item = window.document.createElement("option")
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }    
    }
    

    
}