# Validador de datos de Tarjetas de Crédito
***

## 1. Objetivo
Implementar un validador de datos de tarjeta de crédito. La librería debería validar el número de tarjeta de crédito (usando algoritmo de Luhn), fecha de vencimiento, codigo de verificación (cvv) y nombre completo que aparece en la tarjeta.

## 2. Organización
Para la elaboración del presente proyecto se realizó la siguiente tabla donde definimos las actividades a realizar:

| N°  | Actividad |
| ---------- | ---------- |
| 1 | Elegir el reto                                             |
| 2 | Hacer fork del reto modelo                                 |
| 3 | Estructurar el proyecto e instalar la herramienta babel    |
| 4 | Investigar acerca de las librerías                         |
| 5 | Realizar el diseño del formulario en el index              |
| 6 | Programar la funcionalidad en la versión ES6 de javascript |


## 3. Descripción


El plugin debe recibir una referencia a un elemento del DOM que contenga
`<input>`s con los siguientes nombres (atributo `name`):

* `cn` (Card Number): El número de la tarjeta de crédito.
* `exp` (Expiry Date): Fecha de expiración.
* `cvv` (Card Verification Value): Código de validación de 3 dígitos.
* `name`: Nombre completo como aparece en la tarjeta.

## Ejemplo

```html
<form>
  <div class="form-group">
    <label for="cn">Número de tarjeta</label>
    <input id="cn" name="cn" />
  </div>
  <div class="form-group">
    <label for="exp">Fecha de vencimiento</label>
    <input id="exp" name="exp" />
  </div>
  <div class="form-group">
    <label for="cvv">CVV</label>
    <input id="cvv" name="cvv" />
  </div>
  <div class="form-group">
    <label for="name">Nombre completo</label>
    <input id="name" name="name" />
  </div>
  <input type="submit" value="Pagar" />
</form>
```

```js
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (validateCardDetails(form)) {
    console.log('datos válido... enviar...');
  } else {
    console.log('datos inválidos');
  }
});
```

A la hora de hacer las validaciones, la librería debería de añadir la clase
`.error` a los `<input>`s que no pasen la validación, o la clase `.success`
en caso de que sí pase.



## Vista demo
![Demo](src/assets/docs/demo.png)

## Herramientas
`HTML5` `CSS3` `JavaScript` `jQuery` `Bootstrap`
