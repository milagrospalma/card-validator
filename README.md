# Card Validator
Valida datos como el número de tarjeta de crédito (usando algoritmo de Luhn), fecha de vencimiento, código de verificación (CVV) y nombre completo que aparece en la tarjeta.

![Vista Desktop](https://fotos.subefotos.com/613395f86faf32031c75f77e3e3eb7eeo.png)

## Desarrollado para [Laboratoria](http://laboratoria.la)

## ¿Cómo nos organizamos?
Definimos las actividades a realizar:

| N°  | Actividad |
| ---------- | ---------- |
| 1 | Elección del reto                                          |
| 2 | Fork del repositorio creado por Laboratoria                |
| 3 | Estructuración el proyecto y uso de la herramienta Babel   |
| 4 | Investigación sobre _librerías_                            |
| 5 | Diseño y creación del formulario en `index.html`           |
| 6 | Agregar funcionalidad en ECMAScript 6 (ES6)                |

## ¿Cómo funciona la librería?
La librería debe recibir una referencia a un elemento del DOM que contenga `<input>`s con los siguientes nombres (atributo `name`):

* `cn` (Card Number): El número de la tarjeta de crédito
* `name`: Nombre completo como aparece en la tarjeta
* `cvv` (Card Verification Value): Código de validación de 3 dígitos
* `exp` (Expiry Date): Fecha de expiración

Durante el proceso de validación, la librería añadirá la clase `.has-error` a los `<input>`s que no pasen la validación, o la clase `.has-success` en caso de que sí pase.

## ¿Cómo trabajar con la librería?
Para fines prácticos de la implementación, indicamos las sguientes instrucciones:
1. Fork al [repositorio](https://github.com/milagrospalma/card-validator)
2. A cada input le corresponde una validación distinta al resto. Las validaciones se presentan en funciones para que solo sean invocadas cuando ocurre cierto evento. Un ejemplo sería este bloque de código que corresponde a una función:
```js
  // La función cardNumberLength tiene un parámetro de entrada inputValue
  
  const cardNumberLength = inputValue => {
    if (inputValue.trim().length === 16) {
      return inputValue;
    }
  };
```
3. Tener en cuenta el Framework CSS que se usará. En este ejemplo, usamos Bootstrap porque cuenta con las clases `.has-error` y `.has-success`.

## Vista Formulario
![Demo](http://g.recordit.co/ijAwxua7y7.gif)

## Herramientas
`HTML5` `CSS3` `JavaScript` `ECMAScript 6` `babel` `node.js` `Bootstrap`

### Desarrollado por Melyna Pernia y Milagros Palma