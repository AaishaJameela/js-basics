const nameE1 = document.querySelector('#name');
const phoneE1 = document.querySelector('#phone');
const emailE1 = document.querySelector('#email');
const ageE1 = document.querySelector('#age');
const genderE1 = document.querySelector('#gender');
const form = document.querySelector('#signup');

//validate Name
const checkName = () => {
    let valid = false;
    const min = 3, max = 25;
    const name = nameE1.value.trim();
    if (!isRequired(name)) {
        showError(nameE1, 'Name Is Mandatory');
    }else {
        showSuccess(nameE1);
        valid = true;
    }
    return valid;
};

//validate Phone
const checkPhone = () => {
    let valid = false;
    const phone = phoneE1.value.trim();
    if (!isRequired(phone)) {
        showError(phoneE1, 'Phone Number Mandatory');
    }else {
        showSuccess(phoneE1);
        valid = true;
    }
    return valid;
};

//validate Email
const checkEmail = () => {
    let valid = false;
    const email = emailE1.value.trim();
    if (!isRequired(email)) {
        showError(emailE1, 'Email Is Mandatory');
    } else if (!isEmailValid(email)) {
        showError(emailE1, 'Email is not valid.')
    } else {
        showSuccess(emailE1);
        valid = true;
    }
    return valid;
};


//validate Age
const checkAge = () => {
    let valid = false;
    const age = ageE1.value.trim();
    if (!isRequired(age)) {
        showError(ageE1, 'Age Is Mandatory');
    }else {
        showSuccess(ageE1);
        valid = true;
    }
    return valid;
};

//validate Gender
const checkGender = () => {
    let valid = false;
    const gender = genderE1.value.trim();
    console.log("Gender is:"+gender);
    if (!isRequired(gender)) {
        showError(genderE1, 'Gender Is Mandatory. Select Your Gender');
    }else {
        showSuccess(genderE1);
        valid = true;
    }
    return valid;
};

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;

const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}


form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();


    // validate forms
    let isNameValid = checkName(),
        isPhoneValid = checkPhone(),
        isEmailValid = checkEmail(),
        isAgeValid = checkAge();
        isGenderValid = checkGender();

    let isFormValid = isNameValid &&
        isPhoneValid &&
        isEmailValid &&
        isAgeValid &&
        isGenderValid;

    // submit to the server if the form is valid
    if (isFormValid) {

    }
});


const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};
// 
form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'name':
            checkName();
            break;
        case 'phone':
            checkPhone();
            break;
        case 'email':
            checkEmail();
            break;
        case 'age':
            checkAge();
            break;
    }
}));