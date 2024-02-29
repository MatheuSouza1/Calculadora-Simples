console.log("funcionando")

function Calculate(){
    const num1 = Number(document.getElementById("numone").value)
    const num2 = Number(document.getElementById("numtwo").value)

    let result;

    if(document.getElementById("chkSum").checked){
        result = num1 + num2
    }
    else if(document.getElementById("chkMinus").checked){
        result = num1 - num2
    }
    else if(document.getElementById("chkMulti").checked){
        result = num1 * num2
    }
    else{
        result = num1 / num2
    }

    document.getElementById("txtResult").innerHTML = result
}