// DESAFIO - PASSWORD
const button = document.querySelector('.button_password');

button.addEventListener('click', () => {
    
    const password1 = document.querySelector('.select_password-1').value;
    const password2 = document.querySelector('.select_password-2').value;
    const password3 = document.querySelector('.select_password-3').value;
    const resultado = document.querySelector('.resultado_password');
    const pass = password1 + password2 + password3; 


    if(pass === '911'){
        resultado.innerHTML = 'Password 1 correcto';

    }else if(pass === '714'){
        resultado.innerHTML = 'Password 2 correcto';

    }else{
        resultado.innerHTML = 'Password Incorrecto';
    }

});


