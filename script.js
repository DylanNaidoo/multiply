function multiply() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    if (num1 === "" || num2 === "") {
        document.getElementById("result").innerText = "Please enter both numbers.";
        return;
    }

    let product = parseFloat(num1) * parseFloat(num2);
    document.getElementById("result").innerText = "Product: " + product;
}

