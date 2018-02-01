window.addEventListener('load', () => {
  const cn = document.getElementById('cn'); //
  const cvvInput = document.getElementById('cvv');
  const nameInput = document.getElementById('name');
  const pay = document.getElementById('pay'); //
  const formCn = document.getElementById('fg-cn');// Número de tarjeta
  const cvv = document.getElementById('fg-cvv'); // Código de verificación
  const fgName = document.getElementById('fg-name'); // Nombre completo
  const fgExp = document.getElementById('fg-exp'); // Fecha Vencimiento
  const expInput = document.getElementById('exp');
  let arr = [];

  let getSumElementArray = (array)=>{
    let suma = array.reduce((a, b) => parseInt(a) + parseInt(b));
    return suma;
  };

  let getSumDigitNumber = (num)=>{
    let doubleNumber = num * 2;
    let sumDigit;
    if (doubleNumber > 9) {
      sumDigit = getSumElementArray(doubleNumber.toString().split(''));
    } else {
      sumDigit = doubleNumber;
    }
    return sumDigit;
  };

  let setElementArray = (element, index) => {
    if ((index + 1) % 2 !== 0) {
      arr.push(getSumDigitNumber(parseInt(element)));
    } else {
      arr.push(parseInt(element));
    }
  };

  let isValidCard = function(string) {
    arr = [];
    let centinel = false;
    let array = string.split('');
    array.forEach(setElementArray);
    console.log(getSumElementArray(arr));
    if (getSumElementArray(arr) % 10 === 0) {
      centinel = true;
    } else {
      centinel = false;
    }
    return centinel;
  };

  let isValidLength = (text, lengthText) => {
    let centinel = false;
    if (text === lengthText) {
      centinel = true;
    } else {
      centinel = false;
    }
    return centinel;
  };

  let isValidOnlyLetter = function(event) {
    const patt = /^[a-zA-Z_áéíóúñ_ÁÉÍÓÚÑ\s]*$/;
    let result = patt.test(event.key);
    let centinel = false;
    if (result) {
      centinel = true;
    } else {
      centinel = false;
    }
    return centinel;
  };

  let isValidOnlyNumber = function(event) {
    const patt = /^[0-9]*$/;
    let result = patt.test(event.key);
    let centinel = false;
    if (result) {
      centinel = true;
    } else {
      centinel = false;
    }
    return centinel;
  };

  let addClassInputCheck = (text) => {
    text.className = 'form-group has-success has-feedback';
    text.lastChild.previousElementSibling.className = 'glyphicon glyphicon-ok form-control-feedback';
  };

  let addClassInputWarning = (text) => {
    text.className = 'form-group has-warning has-feedback';
    text.lastChild.previousElementSibling.className = 'glyphicon glyphicon-remove form-control-feedback';
  };

  cn.addEventListener('input', () => {
    if (isValidCard(cn.value) && isValidLength(cn.value.length, 16)) {
      console.log('valida');
      addClassInputCheck(formCn);
    } else {
      console.log('invalida');
      addClassInputWarning(formCn);
    }
  });

  cvvInput.addEventListener('input', ()=> {
    if (isValidLength(cvvInput.value.length, 3)) {
      addClassInputCheck(cvv);
    } else {
      addClassInputWarning(cvv);
    }
  });

  nameInput.addEventListener('input', ()=> {
    if (!isValidLength(nameInput.value.length, 0)) {
      addClassInputCheck(fgName);
    } else {
      addClassInputWarning(fgName);
    }
  });

  expInput.addEventListener('input', ()=> {
    if (isValidLength(expInput.value.length, 5)) {
      addClassInputCheck(fgExp);
    } else {
      addClassInputWarning(fgExp);
    };
  });

  formCn.onkeypress = isValidOnlyNumber;
  cvv.onkeypress = isValidOnlyNumber;
  fgName.onkeypress = isValidOnlyLetter;
=======
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
