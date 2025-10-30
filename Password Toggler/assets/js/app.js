const eyeBtn = document.querySelector('.passwordForm .inputWraper .eyeBtn');
const passwordInput = document.querySelector('.passwordForm .inputWraper input');
const error = document.querySelector('.passwordForm .error');

function eyeBtnToggle(){
    if(passwordInput.type == 'password'){
            passwordInput.type = 'text'
            eyeBtn.innerHTML = '<i class="bi bi-eye"></i>'
        } else{
            passwordInput.type = 'password'
            eyeBtn.innerHTML = '<i class="bi bi-eye-slash"></i>'
    }
}

function checkPassword(){
        // if(passwordInput.value.length < 8){
        //     error.innerText = 'Enter a strong password'
        // } else{
        //     error.innerText = ''
        // }

        // condition ? 'true' : 'false'

        passwordInput.value.length < 8 ?  error.innerText = 'Enter a strong password' : error.innerText = '' ;
}

eyeBtn.addEventListener('click', eyeBtnToggle)
passwordInput.addEventListener('keyup', checkPassword)