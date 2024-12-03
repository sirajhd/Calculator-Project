// Select the display input and form
const display = document.getElementById('display');
const calculatorForm = document.getElementById('calculator-form');
calculatorForm.addEventListener('click', (event) => {
    const target = event.target;
    const action = target.dataset.action;
    const value = target.dataset.value;
    if (target.tagName !== 'INPUT') return; // 
    if (action === 'clear') { 
        display.value = '';
    } else if (action === 'delete') {
        display.value = display.value.slice(0, -1);
    } else if (action === 'calculate') {
        try {  
            display.value = eval(display.value) || '';
        } catch {
            display.value = 'Error';
        }
    } else if (value) {
        display.value += value;
    }
});
