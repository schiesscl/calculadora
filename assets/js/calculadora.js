window.addEventListener('load', () => {
    /* queryselector busca un solo boton */
    const display = document.querySelector('.calculadora-display');
    const keypadBotones = document.getElementsByClassName('keypad-botones');

    /* Array crea un arreglo con los botones y lo guarda en la constante*/
    const keypadBotonesArray = Array.from(keypadBotones);

    /* Recorrer el arreglo de botones y le agrega el evento click */
    keypadBotonesArray.forEach((botones) => {
        botones.addEventListener('click', () => {
            calculadora(botones, display)
        })
    })

    function calcularPorcentaje(value, percent) {
        return (value * percent) / 100;
    }

    function calculadora(botones, display) {
        switch (botones.innerHTML) {
            case 'C':
                borrar(display);
                break;

            case '=':
                calcular(display);
                break;

            default:
                actualizar(display, botones);
                break;
        }
    }

    function calcular(display) {
        if (display.innerHTML.includes("%")) { // revisa si el texto que contiene el display tiene %
            const textoSeparado = display.textContent.split("%"); // si el display contiene % separamos el texto con % 
            const resultado = calcularPorcentaje(textoSeparado[0], textoSeparado[1]); // llamamos a la funcion calcular porcentaje con los dos numeros separados
            display.innerHTML = resultado; // la funcion devuelve el resultado y lo mostramos por el display
        } else {
            display.innerHTML = eval(display.innerHTML);/* toma el string, lo resuelve y lo guarda en el innerHTML del display */
        }
    }

    function actualizar(display, botones) {
        if (display.innerHTML == 0) {
            display.innerHTML = '';
        }
        display.innerHTML += botones.innerHTML; /* Es lo mismo que escribir display.innerHTML = display.innerHTML + boton.innerHTML */
    }

    function borrar(display) {
        display.innerHTML = 0;
    }

});