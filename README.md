# Valida datos de tarjetas de crédito

* **Track:** _Common Core_
* **Curso:** _JS Deep Dive: Crea tu propia librería usando JavaScript_
* **Unidad:** _Producto final_

***

El plugin debe recibir una referencia a un elemento del DOM que contenga
`<input>`s con los siguientes nombres (atributo `name`):

* `cn` (Card Number): El número de la tarjeta de crédito
* `exp` (Expiry Date): Fecha de expiración
* `cvv` (Card Verification Value): Código de validación de 3 dígitos
* `name`: Nombre completo como aparece en la tarjeta

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

## Implementación de libreria

#### Sketch

Se realizó un primer sketch de la librería en vista desktop.

![](public/assets/img/sketch.png)

## Descripción

CardValidator es una librería Javascript que permite validar datos importantes de las tarjetas de crédito, como el número, código de verificación, fecha de vencimiento y nombre completo. Cuando todos los `<input>` del formulario son válidos, activa el botón de Pagar.

Además añade la clase `.error` a los `<input>`s que no pasen la validación, o la clase `.success` en caso de que sí pase.

#### Validar número de tarjeta de crédito.

+ Valida el número de la tarjeta mediante el algoritmo de Luhn.
+ Longitud de dígitos igual a 16.
+ Valida sólo el ingreso de números.

#### Validar fecha de vencimiento de la tarjeta.

+ Valida fechas futuras.
+ Valida sólo el ingreso de números.

#### Validar código de verificación.

+ Longitud del cvv igual a tres dígitos.
+ Valida sólo el ingreso de números.

#### Validar el nombre completo.

+ Longitud mínima del nombre 5 caracteres.
+ Valida sólo el ingreso de letras.

### Especificaciones

CardValidator permite validar tarjetas de crédito con las siguientes características:

+ Número de tarjeta de crédito: longitud de 16 dígitos.
+ Mes de expiración de la tarjeta: longitud de dos dígitos, se debe ingresar un número del 01 al 12 según los meses calendarios Enero a Diciembre.  
+ Año de expiración de la tarjeta: longitud de cuatro dígitos, se debe ingresar el año en números.
+ Código de verificación: longitud de 3 dígitos, en números.
+ Nombre completo: longitud mínima de 5 caracteres.

### Instalación

1. Descargar o clonar este repositorio.
2. Esta librería está disponible en javascript 5 y ES6, así que si se elige la primera opción, agregar el archivo `cardValidator.js` que se encuentra dentro de `public/js`. En caso que se desee utilizar código escrito en ES6, agregar el archivo `cardValidator.js` que se encuentra dentro de `src`.
3. Dentro del formulario para validar la tarjeta de crédito, incluír en cada etiqueta `input` los siguientes `id`:

```html
  <input id="cn" /> <!-- Para el número de tarjeta -->
  <input id="month" /> <!-- Para el mes de expiración -->
  <input id="year" /> <!-- Para el año de expiración -->
  <input id="cvv" /> <!-- Para el código de verificación -->
  <input id="name" /><!-- Para el nombre completo -->
```

## Herramientas

`babel` `ecmascript 6` `html5` `bootstrap 3`

## Créditos

+ Lidia Ramirez.
+ Patricia Urco.
