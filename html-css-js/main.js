let nameInput = document.form.username;
let emailInput = document.form.email;
let passwordInput = document.form.password;
let repasswordInput = document.form.repassword;

let usernameIsValid = false;
let emailIsValid = false;
let passwordIsValid = false;
let passwordsAreSame = false;

// (function logInputs() {
//     console.log(nameInput);
//     console.log(emailInput);
//     console.log(passwordInput);
//     console.log(repasswordInput);
// })() IIFE módszer;

function allInputsAreInvalid() {
    let allInvalid = true;
    if(usernameIsValid && emailIsValid && passwordIsValid && passwordsAreSame){
        allInvalid = false;
    }

    return allInvalid;
}


nameInput.onchange = () => {
    let nameValue = nameInput.value;

    usernameIsValid = nameValue.length > 5 ? true : false;
    document.querySelector('.error-username').style.display = usernameIsValid ? 'none' : 'block';
    document.querySelector('button').disabled = allInputsAreInvalid();

}


emailInput.onchange = () => {
    let emailValue = emailInput.value;

    emailIsValid = emailValue.length > 5 && emailValue.includes('@') ? true: false;
    document.querySelector('.error-email').style.display = emailIsValid ? 'none' : 'block';
    document.querySelector('button').disabled = allInputsAreInvalid();
}


passwordInput.onchange = () => {
    let passwordValue = passwordInput.value;

    passwordIsValid = passwordValue.length > 5 ? true: false;
    document.querySelector('.error-password').style.display = passwordIsValid ? 'none' : 'block';
    document.querySelector('button').disabled = allInputsAreInvalid();
}


repasswordInput.onchange = () => {
    let repasswordValue = repasswordInput.value;

    repasswordIsValid = repasswordValue.length > 5 ? true: false;
    document.querySelector('.error-repassword').style.display = repasswordIsValid ? 'none' : 'block';
    document.querySelector('button').disabled = allInputsAreInvalid();
}


repasswordInput.onchange = () => {
    let repasswordValue = repasswordInput.value;
    let originPassword = passwordInput.value;

    passwordsAreSame = repasswordValue === originPassword ? true : false;
    document.querySelector('.error-repassword').style.display = passwordsAreSame ? 'none' : 'block';
    document.querySelector('button').disabled = allInputsAreInvalid();

}

document.querySelector('.submit-btn').addEventListener('click', () => {
    const user = {
        username: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
    }

    //console.log(user);
    postData(user)
    .then(user => console.log(user))
    .catch(err => console.log(err))
}) 


async function postData(user) {
    const url = 'http://localhost:3000/user';

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user) //object to string
    })
    
    return response.json(); //string to object

}


async function getData() {
    const response = await fetch('http://localhost:3000/user', {
        method:'GET',
        headers: {
            'Content-type': 'application/json'
        }
    })

    return response.json();
}

function renderUserData(userList){
    const ul = document.querySelector('.user-list');
    ul.innerHTML = '';

    userList.forEach(user => {
        ul.innerHTML +=
        `
           <li>${user.username}</li>
        `
    })
}

document.querySelector('#get-users').addEventListener('click', () => {
    getData()
        .then(users => renderUserData(users))
        .catch(err => console.log(err))
})


