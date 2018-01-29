window.addEventListener('load', () => {
  let inputCn = document.getElementById('cn');
  var inputExp = document.getElementById('exp');
  let formCn = document.getElementById('fg-cn');

  inputCn.addEventListener('input', () => {
    console.log(cn.value);
    isValidCard(cn.value);
  });

  cvv.addEventListener('input', () => {
    console.log(cvv.value);
    isValidCvv(cvv.value);
  });

  // Función para validar tarjeta
  let isValidCard = (string) => {
    let array = [], sum = 0;
    for (let i = 0; i < string.length; i++) {
      array.push(parseInt(string[i]));
    }
    for (let i = 0; i < array.length; i++) {
      if (i % 2 === 0) {
        let value = array[i] * 2;
        // Reemplaza los nuevos valores en la misma posición
        array.splice(i, 1, value);
        if (value >= 10) {
          let strValue = value.toString();
          let newNumber = parseInt(strValue[0]) + parseInt(strValue[1]);
          // Reemplaza los nuevos valores en la misma posición
          array.splice(i, 1, newNumber);
        }
      }
      // Suma los elementos de la posición i
      sum += array[i];
    }
    if (sum % 10 === 0 && string.trim() !== '' && string.length === 16) {
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
  let isValidCvv = (cvv) => {
    if (cvv.length === 3) {
      console.log('longitud válida');
    };
  };
});
