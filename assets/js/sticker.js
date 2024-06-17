// DESAFIO - STICKERS

const button = document.querySelector('.button_sticker');

button.addEventListener('click', () => {

    const input_1 = parseInt(document.querySelector('.input-1').value);
    const input_2 = parseInt(document.querySelector('.input-2').value);
    const input_3 = parseInt(document.querySelector('.input-3').value);
    const confirmacion = document.querySelector('.confirmacion');
    const suma = input_1 + input_2 + input_3;

    console.log(suma);

    if(suma <= 10){
        confirmacion.innerHTML = 'Llevas: ' + suma + ' stickers';
    }else{
        confirmacion.innerHTML = 'Llevas demasiados Stickers';
    };
});

