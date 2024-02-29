const submitForm = document.getElementById('submitForm');
const formValidationMsg = document.getElementById('formValidationMsg');

function handleFormSubmit(event){
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    if (name.value === '' || email.value === '' || message.value === ''){
        formValidationMsg.textContent = 'Please fill in all required fields.';
        event.preventDefault();
    }else{
        formValidationMsg.textContent = 'Thank You, I have received your message';
    }
    name.value = '';
    email.value = '';
    message.value = '';
}
submitForm.addEventListener('submit',handleFormSubmit )