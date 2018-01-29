window.addEventListener('load', function() {
  var cn = document.getElementById('cn');
  var pay = document.getElementById('pay');
  var formCn = document.getElementById('fg-cn');

  cn.addEventListener('input', function() {
    console.log(cn.value);
    isValidCard(cn.value);
  });

  cvv.addEventListener('input', function() {
    console.log(cvv.value);
    isValidCvv(cvv.value);
  });

  // Función para validar tarjeta
  var isValidCard = function(string) {
    var array = [], sum = 0;
    for (var i = 0; i < string.length; i++) {
      array.push(parseInt(string[i]));
    }
    for (var i = 0; i < array.length; i++) {
      if (i % 2 === 0) {
        var value = array[i] * 2;
        // Reemplaza los nuevos valores en la misma posición
        array.splice(i, 1, value);
        if (value >= 10) {
          var strValue = value.toString();
          var newNumber = parseInt(strValue[0]) + parseInt(strValue[1]);
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
  var isValidCvv = function(cvv) {
    if (cvv.length === 3) {
      console.log('longitud válida');
    };
  };
});
