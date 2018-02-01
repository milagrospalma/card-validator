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

  let getSumElementArray = (array)=> {
    let suma = array.reduce((a, b) => parseInt(a) + parseInt(b));
    return suma;
  };

  let getSumDigitNumber = (num)=> {
    let doubleNumber = num * 2;
    let sumDigit;
    if (doubleNumber > 9) 
      sumDigit = getSumElementArray(doubleNumber.toString().split(''));
    else 
      sumDigit = doubleNumber;
    return sumDigit;
  };

  let setElementArray = (element, index) => {
    if ((index + 1) % 2 !== 0) 
      arr.push(getSumDigitNumber(parseInt(element)));
    else
      arr.push(parseInt(element));
  };

  let isValidCard = function(string) {
    arr = [];
    let centinel = false;
    let array = string.split('');
    array.forEach(setElementArray);
    console.log(getSumElementArray(arr));
    if (getSumElementArray(arr) % 10 === 0) 
      centinel = true;
    else 
      centinel = false;
    return centinel;
  };

  let isValidLength = (text, lengthText) => {
    let centinel = false;
    if (text === lengthText)
      centinel = true;
    else
      centinel = false;
    return centinel;
  };

  let isValidOnlyLetter = function(event) {
    const patt = /^[a-zA-Z_áéíóúñ_ÁÉÍÓÚÑ\s]*$/;
    let result = patt.test(event.key);
    let centinel = false;
    if (result)
      centinel = true;
    else
      centinel = false;
    return centinel;
  };

  let isValidOnlyNumber = function(event) {
    const patt = /^[0-9]*$/;
    let result = patt.test(event.key);
    let centinel = false;
    if (result)
      centinel = true;
    else
      centinel = false;
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
    if (isValidCard(cn.value) && isValidLength(cn.value.length, 16))
      addClassInputCheck(formCn);
    else 
      addClassInputWarning(formCn);
  });

  cvvInput.addEventListener('input', ()=> {
    if (isValidLength(cvvInput.value.length, 3))
      addClassInputCheck(cvv);
    else
      addClassInputWarning(cvv);
  });

  nameInput.addEventListener('input', ()=> {
    if (!isValidLength(nameInput.value.length, 0)) 
      addClassInputCheck(fgName);
    else
      addClassInputWarning(fgName);
  });

  expInput.addEventListener('input', ()=> {
    if (isValidLength(expInput.value.length, 5)) 
      addClassInputCheck(fgExp);
    else
      addClassInputWarning(fgExp);
  });

  formCn.onkeypress = isValidOnlyNumber;
  cvv.onkeypress = isValidOnlyNumber;
  fgName.onkeypress = isValidOnlyLetter;
});
