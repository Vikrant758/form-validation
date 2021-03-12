


console.log('This is project 4 ');

let username = document.getElementById('name');
let email = document.getElementById('email');
let phoneNumber = document.getElementById('phoneNumber');
let submit = document.getElementById('submit');
let invalidUsername = false;
let invalidEmail = false;
let invalidNumber = false;
// console.log(name, email, phoneNumber);
$('#success').hide();

username.addEventListener('blur', () => {
    console.log('UserNAme is Blureed');
    let regex = /^[A-Z]([0-9a-zA-Z]){0,10}$/;
    let str = username.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('it matched');
        username.classList.remove("is-invalid");
        invalidUsername = true;
    } else {
        console.log("It doesn't match");
        username.classList.add("is-invalid");
        invalidUsername = false;

    }

})

email.addEventListener('blur', () => {
    console.log('UserNAme is Blureed');
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('it matched');
        email.classList.remove("is-invalid");
        invalidEmail = true;
    } else {
        console.log("It doesn't match");
        email.classList.add("is-invalid");
        invalidEmail = false;

    }

})

phoneNumber.addEventListener('blur', () => {
    console.log('UserNAme is Blureed');
    let regex = /^[0-9]{10}$/;
    let str = phoneNumber.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('it matched');
        phoneNumber.classList.remove("is-invalid");
        invalidNumber = true;
    } else {
        console.log("It doesn't match");
        phoneNumber.classList.add("is-invalid");
        invalidNumber = false;

    }

})

submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('you clicked on submit');
    let success = document.getElementById('success');

    console.log(invalidEmail, invalidNumber, invalidUsername);


    if (invalidEmail && invalidNumber && invalidUsername) {
        console.log('Your Data is successfully filled');
        success.classList.add('alert-success');
        success.classList.remove('alert-danger');

        success.classList.add('show');
        success.innerHTML = `<strong>Success!</strong> Your Travel request is Successfully Submitted.`
        $('#success').show();

    } else {
        console.log('There is some error occuring Please fill all forms!!!');
        //   let failure = document.getElementById('failure');
        success.classList.add('alert-danger');
        success.classList.remove('alert-success');

        success.classList.add('show');
        success.innerHTML = `<strong>Failure!</strong> Your Travel request is Successfully Submitted.`
        $('#success').show();




    }

})