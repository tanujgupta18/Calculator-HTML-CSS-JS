document.addEventListener("DOMContentLoaded", function () {
    let current_display = '';
    const display = document.querySelector('#display');

    function updateDisplay(value) {
        current_display += value;
        display.value = current_display;
    }

    function clearDisplay() {
        current_display = '';
        display.value = current_display;
    }

    function deleteLastChar() {
        current_display = current_display.slice(0, -1);
        display.value = current_display;
    }
    
    document.getElementById('clear').addEventListener('click', clearDisplay);
    document.getElementById('delete').addEventListener('click', deleteLastChar);
    document.getElementById('modulo').addEventListener('click', () => updateDisplay('%'));
    document.getElementById('divide').addEventListener('click', () => updateDisplay('/'));
    document.getElementById('seven').addEventListener('click', () => updateDisplay('7'));
    document.getElementById('eight').addEventListener('click', () => updateDisplay('8'));
    document.getElementById('nine').addEventListener('click', () => updateDisplay('9'));
    document.getElementById('multiply').addEventListener('click', () => updateDisplay('*'));
    document.getElementById('four').addEventListener('click', () => updateDisplay('4'));
    document.getElementById('five').addEventListener('click', () => updateDisplay('5'));
    document.getElementById('six').addEventListener('click', () => updateDisplay('6'));
    document.getElementById('subtract').addEventListener('click', () => updateDisplay('-'));
    document.getElementById('one').addEventListener('click', () => updateDisplay('1'));
    document.getElementById('two').addEventListener('click', () => updateDisplay('2'));
    document.getElementById('three').addEventListener('click', () => updateDisplay('3'));
    document.getElementById('add').addEventListener('click', () => updateDisplay('+'));
    document.getElementById('doublezero').addEventListener('click', () => updateDisplay('00'));
    document.getElementById('zero').addEventListener('click', () => updateDisplay('0'));
    document.getElementById('decimal').addEventListener('click', () => updateDisplay('.'));
    document.getElementById('equals').addEventListener('click', function () {
        try {
            current_display = eval(current_display);
            display.value = current_display;
        } catch (error) {
            display.value = 'Error';
        }
    });

});
