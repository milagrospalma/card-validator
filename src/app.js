window.addEventListener('load', () => {
  let inputCn = document.getElementById('cn');
  let inputName = document.getElementById('name');
  let inputCvv = document.getElementById('cvv');
  let inputExp = document.getElementById('exp');
  let formCn = document.getElementById('fg-cn');
  let pay = document.getElementById('pay');

  // Eventos para los inputs
  inputCn.addEventListener('input', () => {
    onlyNumbers(inputCn.value);
    console.log(inputCn.value);
  });

  inputName.addEventListener('input', () => {
    console.log(inputName.value);
  });

  inputCvv.addEventListener('input', () => {
    onlyNumbers(inputCvv.value);
    
    console.log(inputCvv.value);
  });

  inputExp.addEventListener('input', () => {
    onlyNumbers(inputCvv.value);
    console.log(inputExp.value);
  });

  // Función para validar número de tarjeta
  const isValidCard = inputValue => {
    let array = [], sum = 0;
    for (let i = 0; i < inputValue.length; i++) {
      array.push(parseInt(inputValue[i]));
    }
    for (let i = 0; i < array.length; i++) {
      if (i % 2 === 0) {
        let value = array[i] * 2;
        array.splice(i, 1, value);
        if (value >= 10) {
          let strValue = value.toString();
          let newNumber = parseInt(strValue[0]) + parseInt(strValue[1]);
          array.splice(i, 1, newNumber);
        }
      }
      sum += array[i];
    }
    if (sum % 10 === 0) {
      formCn.removeClass = 'has-error';
      formCn.className = 'has-success';
      console.log('válida');
    } else {
      formCn.removeName = 'has-success';
      formCn.className = 'has-error';
      console.log('inválida');
    }
  };

  // Función para validar cvv
  const isValidCvv = (event) => {
    let centinel = false;  
    // const lengthDigit = 3;
    if (event.target.value.length < 3) {
      centinel = true;
    } else {
      centinel = false;
    }
    console.log(centinel);
    return centinel;
  };

  // Función para validar longitud del número de tarjeta
  const cardNumberLength = inputValue => {
    if (inputValue.trim().length === 16) {
      return inputValue;
    }
  };
  // Función para ingresar solo letras
  const onlyLetters = (event) => {
    let patt = /^[a-zA-Z_áéíóúñ_ÁÉÍÓÚÑ\s]*$/;    
    let result = patt.test(event.key);
    let centinel = false;
    if (result) {
      return event;
    } else {
      centinel = false;
    }
    return centinel;
  };

  // Función para ingresar solo números
  const onlyNumbers = (event) => {
    let patt = /^[0-9]*$/;    
    let result = patt.test(event.key);
    let centinel = false;
    if (result) {
      return event;
    } else {
      centinel = false;
    }
    return centinel;
  };

  // const form = document.querySelector('form');

  // form.addEventListener('submit', (e) => {
  //   e.preventDefault();
  //   if (validateCardDetails(form)) {
  //     console.log('datos válido... enviar...');
  //   } else {
  //     console.log('datos inválidos');
  //   }
  // });
});
