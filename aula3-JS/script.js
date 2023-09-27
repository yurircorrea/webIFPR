function validateFields(number1, number2, operator){
    if (isNaN(number1) || isNaN(number2)){
        console.error("ERROR: number1 or number2 is NaN");
        alert("Verifique os valores informados! Eles são obrigatórios e devem ser números.")
        return false;
    }

    if (operator === ""){
        console.error("ERROR: operator is equals ''");
        alert('Uma operação deve ser selecionada!');
        return false;
    }

    return true;
}

function validateDivisionByZero(number2, operator){
    if (operator === "div" && number2 === 0){
        console.error("ERROR: operator equals 'div' and number2 equals 0");
        alert("Uma divisão por zero não pode ser realizada. Verifique o operador!");
        return false;
    }
    return true;
}

function processOperation(number1, number2, operator){
    switch (operator){
        case "sum":
            return number1 + number2;
        case "sub":
            return number1 - number2;
        case "mult":
            return number1 * number2;
        case "div":
            return number1 / number2;
        default:
            return null;
    }
}

function showResult(result){
    document.getElementById("result-box").style.display = '';
    document.querySelector("#result").value = parseFloat(result);
}

function clearResult(){
    document.getElementById("number1").value = '';
    document.getElementById("number2").value = '';
    document.getElementById("operator").value = '';
    document.getElementById("result-box").style.display = 'none';
    document.querySelector("#result").value = '';
}

document.getElementById("btnReset").addEventListener("click", function (event){
    clearResult();
    event.preventDefault();
})

document.getElementById("formCalc").addEventListener("submit", function (event){
    const number1 = parseFloat(document.getElementById("number1").value);
    const number2 = parseFloat(document.getElementById("number2").value);
    const operator = document.getElementById("operator").value;

    if (!validateFields(number1, number2, operator)){
        return false;
    }

    if (!validateDivisionByZero(number2, operator)){
        return false;
    }

    const result = processOperation(number1, number2, operator);

    if (result === null){
        console.error("ERROR: error on operation");
        return false;
    }

    showResult(result);

    event.preventDefault();
});