const email = document.querySelector('#email');
const submit = document.querySelector('#submit');
const form = document.querySelector('#contact-form')
const error = document.querySelector('#error');
const check = (value)=>console.log(value)

const checkName = ()=>{
    
       if(email.validity.patternMismatch){
           error.textContent = 'The content of the email field has to be in lower case'
       }else {
           error.textContent = ''
       }
       return email.validity.patternMismatch;
    
}


form.addEventListener('submit',(event)=>{
let isNameInValid = checkName();
if(isNameInValid) event.preventDefault()

})