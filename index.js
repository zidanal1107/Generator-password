let passwordLenght = document.getElementById("passwordLenght");
let password = document.getElementById("password");
let saveButton = document.getElementById("saveButton");

function generatorPassword(len) {
    const lowAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeric = "1234567890";
    const symbol = "~!@#$%^&*()_-+=[{]};:'<>,.?/`";

    const data = lowAlphabet + upperAlphabet + numeric + symbol;
    let generator = '';
    for (let index = 0; index < len; index++) {
        generator += data[~~(Math.random() * data.length)];
    }
    return generator;
}

function getPassword() {
    if (passwordLenght.value == "") {
        alert("Masukkan Panjang password!");
        return;
    } else {
        const newPassword = generatorPassword(passwordLenght.value);
        password.value = newPassword;
        alert('password berhasil dibuat!')
    }
}

function savePassword() {
    if (password.value === "") {
        alert("Password invalid!");
        return;
    }

    const a = document.createElement("a");
    a.href =
        "data:text/plain;charset=utf-8," +
        encodeURIComponent(password.value);
    a.download = "myPassword.txt";
    a.click();
}

