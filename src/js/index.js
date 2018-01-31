window.addEventListener('load', function () {
  var cn = document.getElementById('cn');
  var pay = document.getElementById('pay');
  var formCn = document.getElementById('fg-cn'); 
  var cvv = document.getElementById('cvv'); //Código de verificación
  var fgName = document.getElementById('fg-name'); //Nombre completo

  cn.addEventListener('input', function () {
    //console.log(event.keyCode);
    isValidCard(cn.value);
  });
/*
  cvv.addEventListener('input', function (event) {
    //console.log(event);
    
    //console.log(event);
    isValidCvv(cvv.value);
  });
  */
  
  // Función para validar tarjeta
  var isValidCard = function (string) {
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
  
  var isValidCvv = function (event) {
    var centinel = false;  
    //const lengthDigit = 3;
    if (event.target.value.length < 3) {
      centinel = true;
      
    }else {
      centinel = false;
    }
    console.log(centinel)
    return centinel;
  };

  //Función para ingresar solo letras
  var isValidOnlyLetter = function(event) {
    var patt = /^[a-zA-Z_áéíóúñ_ÁÉÍÓÚÑ\s]*$/;    
    var result = patt.test(event.key);
    var centinel = false;
    if(result){
      return event
    } else {
      centinel = false
    }
    return centinel
  }

  // Función para ingresar solo numeros
  var isValidOnlyNumber = function(event) {
    var patt = /^[0-9]*$/;    
    var result = patt.test(event.key);
    var centinel = false;
   // console.log(result);
    if(result){
      return event
    } else {
      centinel = false
    }
    return centinel
  }
  cvv.onkeypress = isValidOnlyNumber;
  fgName.onkeypress = isValidOnlyLetter;
  //cvv.onkeypress = isValidCvv;

  cvv.addEventListener('input', isValidCvv);



});
