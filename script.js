// TODO: Implement the password generation logic based on user input

const generatePassword = (length, options) => {
    // Character sets for password generation
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()";

    // TODO: Create a variable for the character set based on selected options
    let charSet = ""; //variabel

    // menambahakan
    if (options.includeUppercase) {
        charSet += uppercase;
    }
    if (options.includeLowercase) {
        charSet += lowercase;
    }
    if (options.includeNumbers) {
        charSet += numbers;
    }
    if (options.includeSpecialChars) {
        charSet += specialChars;
    }
    if (charSet===""){
        return null;
    }


    // TODO: Generate the password based on the selected criteria
    let password="";
    for (let i =0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charSet.length);
        password += charSet[randomIndex];
    }
    return password;
};

// TODO: Add event listener to the button to call generatePassword and display the output
document.getElementById('generateBtn').addEventListener('click', () => {
    const length = parseInt(document.getElementById('length').value, 10);
    const options = {
        includeUppercase: document.getElementById('includeUppercase').checked,
        includeLowercase: document.getElementById('includeLowercase').checked,
        includeNumbers: document.getElementById('includeNumbers').checked,
        includeSpecialChars: document.getElementById('includeSpecialChars').checked,
    };

    const password = generatePassword(length, options);
    if (password == null) {
        document.getElementById('passwordOutput').textContent = "Please select at least one criterial!";
        document.getElementById('passwordOutput').style.color = "red";
    } else {
        document.getElementById('passwordOutput').textContent = password;
        document.getElementById('passwordOutput').style.color = "black";
    }
} )
// BONUS: Implement the copy to clipboard functionality
document.getElementById('copybtn').addEventListener('clik', () =>{
    const passwordOutput = document.getElementById('passwordOutput').textContent;
    if (passwordOutput && passwordOutput !== "Pleasae select at lesat one croteria!") {
        navigator.clipboard.writeText(passwordOutput).them(() => {
            alert('Password Copied to Clipboard');
        }).cath(err => {
            console.error('clould not copy text', err);
        })
    } else{
        alert('No Password to copy');
    }
})