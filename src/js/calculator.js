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
          if (num2 !== 0) {
            result = num1 / num2;
          } else {
            alert('Ділення на нуль неможливе.');
            return;
          }
          return;
      }
  
      resultDisplay.textContent = ` Результат: ${result} `;
    }

  
    operationButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        inputFields[0].focus();
        inputFields[0].value += button.textContent;
      });
    });
  
    resultButton.addEventListener('click', function () {
      performOperation(inputFields[0].value.slice(-1));
    });
  
    resultDisplay.addEventListener('click', function () {
      performOperation(inputFields[0].value.slice(-1));
    });
  });