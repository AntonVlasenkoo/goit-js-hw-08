import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

const STORAGE_KEY = 'feedback-form-state'
const formData = {};

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onСheckЕheSubmiForm);
form.addEventListener('submit', onFormSubmit);
// ======================================================
function onFormInput(e) {
formData[e.target.name] = e.target.value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

};

// ======================================================
function populeteForm() {

const savedData = localStorage.getItem(STORAGE_KEY);
const parseSavedData = JSON.parse(savedData);

if (savedData) {
    input.value = parseSavedData.email;
    textarea.value = parseSavedData.message;
}
};
populeteForm();


// ======================================================
function onFormSubmit(e) {

    e.preventDefault();

    e.currentTarget.reset();
  console.log(formData);
    localStorage.removeItem(STORAGE_KEY)
  
};


function onСheckЕheSubmiForm(event) {
    event.preventDefault();
  
    const formElements = event.currentTarget.elements;

    
if (formElements.email.value === "" || formElements.message.value === "") {
    return alert("Bсі поля повинні бути заповнені!!!");
    };

};












