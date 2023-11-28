document.addEventListener('DOMContentLoaded', function () {

    const inputFields = document.querySelectorAll('.calculator__input');
    const operationButtons = document.querySelectorAll('.calculator__button');
    const resultButton = document.querySelector('.calculator__result');
    const resultDisplay = document.querySelector('.calculator-result__button');


    function performOperation(operator) {
      const num1 = parseFloat(inputFields[0].value);
      const num2 = parseFloat(inputFields[1].value);
    
      let result;
      switch (operator) {
        case '+':
          result = num1 + num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '/':
          console.log(1234)
          if (num2 !== 0) {
            result = num1 / num2;
          } else {
            alert('Ділення на нуль неможливе.');
            return;
          }
          break;
      }
  
      resultDisplay.textContent = ` Результат: ${result} `;
    }

     let operator = ''
    operationButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        inputFields[0].focus();
      operator = button.getAttribute('data-operation')
        operationButtons.forEach(function (btn) {
          btn.classList.remove('color-light');
        });
  
        button.classList.add('color-light');
      });
    });
  
    resultButton.addEventListener('click', function () {
      performOperation(operator);
    });
  
    resultDisplay.addEventListener('click', function () {
      performOperation(operator);
    });
  });