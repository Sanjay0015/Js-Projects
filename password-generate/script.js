const passwordBox = document.getElementById("password")
const length= 24;

const upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase= "abcdefghijklmnopqrstuvwxyz"
const number= "0123456789"
const symbol = "!@#$%^&*()-_=+{}|;:,./?\`" 

const allChars= upperCase + lowerCase + number + symbol;

function create(){
    let password="";
    password+=upperCase[Math.floor(Math.random()* upperCase.length)]
    password+=lowerCase[Math.floor(Math.random()* lowerCase.length)]
    password+=number[Math.floor(Math.random()* number.length)]
    password+=symbol[Math.floor(Math.random()* symbol.length)]

    while(length> password.length){
        password+= allChars[Math.floor(Math.random() * allChars.length)]
    }
    passwordBox.value = password
}

function copy(){
    if (passwordBox.value.length===0) {
        alert("No password to copy!");
        return;
    }

    passwordBox.select();                
    passwordBox.setSelectionRange(0, 9999); 

    navigator.clipboard.writeText(passwordBox.value)
        .then(() => {
            alert("Password copied to clipboard!");
        })
        .catch(() => {
            alert("Failed to copy. Try again.");
        });
}