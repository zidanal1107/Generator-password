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
    saveButton.setAttribute(
        'href',
        'data:text/plain;charset=utf-8,' + encodeURIComponent(password.value)
    );
    saveButton.setAttribute('download', 'myPassword.txt');
}
