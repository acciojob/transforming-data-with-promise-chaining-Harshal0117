//your JS code here. If required.
document.getElementById("btn").addEventListener("click", function () {
    const inputVal = document.getElementById("ip").value;
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "";

    if (isNaN(inputVal) || inputVal === "") {
        outputDiv.innerHTML = "Please enter a valid number.";
        return;
    }

    let num = parseFloat(inputVal);

    new Promise((resolve) => {
        setTimeout(() => {
            outputDiv.innerHTML = `Result: ${num}`;
            resolve(num);
        }, 2000);
    })
    .then((num) => new Promise((resolve) => {
        setTimeout(() => {
            num *= 2;
            outputDiv.innerHTML = `Result: ${num}`;
            resolve(num);
        }, 2000);
    }))
    .then((num) => new Promise((resolve) => {
        setTimeout(() => {
            num -= 3;
            outputDiv.innerHTML = `Result: ${num}`;
            resolve(num);
        }, 1000);
    }))
    .then((num) => new Promise((resolve) => {
        setTimeout(() => {
            num /= 2;
            outputDiv.innerHTML = `Result: ${num}`;
            resolve(num);
        }, 1000);
    }))
    .then((num) => new Promise((resolve) => {
        setTimeout(() => {
            num += 10;
            outputDiv.innerHTML = `Final Result: ${num}`;
            resolve(num);
        }, 1000);
    }))
    .catch((error) => {
        outputDiv.innerHTML = `Error: ${error}`;
    });
});
