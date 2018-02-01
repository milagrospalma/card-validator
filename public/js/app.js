'use strict';

window.addEventListener('load', function () {
  var cn = document.getElementById('cn'); //
  var cvvInput = document.getElementById('cvv');
  var nameInput = document.getElementById('name');
  var pay = document.getElementById('pay'); //
  var formCn = document.getElementById('fg-cn'); // Número de tarjeta
  var cvv = document.getElementById('fg-cvv'); // Código de verificación
  var fgName = document.getElementById('fg-name'); // Nombre completo
  var fgExp = document.getElementById('fg-exp'); // Fecha Vencimiento
  var expInput = document.getElementById('exp');
  var arr = [];

  var getSumElementArray = function getSumElementArray(array) {
    var suma = array.reduce(function (a, b) {
      return parseInt(a) + parseInt(b);
    });
    return suma;
  };

  var getSumDigitNumber = function getSumDigitNumber(num) {
    var doubleNumber = num * 2;
    var sumDigit = void 0;
    if (doubleNumber > 9) {
      sumDigit = getSumElementArray(doubleNumber.toString().split(''));
    } else {
      sumDigit = doubleNumber;
    }
    return sumDigit;
  };

  var setElementArray = function setElementArray(element, index) {
    if ((index + 1) % 2 !== 0) {
      arr.push(getSumDigitNumber(parseInt(element)));
    } else {
      arr.push(parseInt(element));
    }
  };

  var isValidCard = function isValidCard(string) {
    arr = [];
    var centinel = false;
    var array = string.split('');
    array.forEach(setElementArray);
    console.log(getSumElementArray(arr));
    if (getSumElementArray(arr) % 10 === 0) {
      centinel = true;
    } else {
      centinel = false;
    }
    return centinel;
  };

  var isValidLength = function isValidLength(text, lengthText) {
    var centinel = false;
    if (text === lengthText) {
      centinel = true;
    } else {
      centinel = false;
    }
    return centinel;
  };

  var isValidOnlyLetter = function isValidOnlyLetter(event) {
    var patt = /^[a-zA-Z_áéíóúñ_ÁÉÍÓÚÑ\s]*$/;
    var result = patt.test(event.key);
    var centinel = false;
    if (result) {
      centinel = true;
    } else {
      centinel = false;
    }
    return centinel;
  };

  var isValidOnlyNumber = function isValidOnlyNumber(event) {
    var patt = /^[0-9]*$/;
    var result = patt.test(event.key);
    var centinel = false;
    if (result) {
      centinel = true;
    } else {
      centinel = false;
    }
    return centinel;
  };

  var addClassInputCheck = function addClassInputCheck(text) {
    text.className = 'form-group has-success has-feedback';
    text.lastChild.previousElementSibling.className = 'glyphicon glyphicon-ok form-control-feedback';
  };

  var addClassInputWarning = function addClassInputWarning(text) {
    text.className = 'form-group has-warning has-feedback';
    text.lastChild.previousElementSibling.className = 'glyphicon glyphicon-remove form-control-feedback';
  };

  cn.addEventListener('input', function () {
    if (isValidCard(cn.value) && isValidLength(cn.value.length, 16)) {
      console.log('valida');
      addClassInputCheck(formCn);
    } else {
      console.log('invalida');
      addClassInputWarning(formCn);
    }
  });

  cvvInput.addEventListener('input', function () {
    if (isValidLength(cvvInput.value.length, 3)) {
      addClassInputCheck(cvv);
    } else {
      addClassInputWarning(cvv);
    }
  });

  nameInput.addEventListener('input', function () {
    if (!isValidLength(nameInput.value.length, 0)) {
      addClassInputCheck(fgName);
    } else {
      addClassInputWarning(fgName);
    }
  });

  expInput.addEventListener('input', function () {
    if (isValidLength(expInput.value.length, 5)) {
      addClassInputCheck(fgExp);
    } else {
      addClassInputWarning(fgExp);
    };
  });

  formCn.onkeypress = isValidOnlyNumber;
  cvv.onkeypress = isValidOnlyNumber;
  fgName.onkeypress = isValidOnlyLetter;
});