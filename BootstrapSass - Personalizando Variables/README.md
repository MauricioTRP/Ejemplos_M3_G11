# Bootstrap Sass

Para hacer uso de este proyecto con Bootstrap es necesario que ejecuten el comando que instala las dependencias de software

```bash
npm install
```

Una vez ejecutado el comando encontrarán una carpeta `node_modules` que tendrá `Bootstrap 5.3.3` y `@popper` como dependencias del proyecto.

Hasta el momento en este commit, sólo está importado bootstrap a nuestra estructura `sass 7-1`
dentro de la carpeta `vendors`

## Importación Bootstrap "way"

Cuando importamos bootstrap podemos hacerlo por partes o completo sin modificaciones.

Si bien en las diapos se propone importar bootstrap por completo, y luego sobreescribir variables dentro de `node_modules` no es la mejor opción

Si actualizamos los paquetes con `npm` perderemos las modificaciones.

En este caso, lo mejor es ajustarse a una importación por partes. Donde en la carpeta Vendors, hagamos la importación, pero trayendo sólo los módulos que necesitamos:

En nuestro caso el archivo `vendors/_bootstrap.scss`

```sass
// Required
@import "../../../node_modules/bootstrap/scss/functions";

// Default variable overrides

// Required
@import "../../../node_modules/bootstrap/scss/variables";
@import "../../../node_modules/bootstrap/scss/variables-dark";
@import "../../../node_modules/bootstrap/scss/maps";
@import "../../../node_modules/bootstrap/scss/mixins";
@import "../../../node_modules/bootstrap/scss/root";

// Optional Bootstrap components here
@import "../../../node_modules/bootstrap/scss/reboot";
@import "../../../node_modules/bootstrap/scss/type";

@import 
'../../../node_modules/bootstrap/scss/grid',
'../../../node_modules/bootstrap/scss/images',
  '../../../node_modules/bootstrap/scss/card',
  '../../../node_modules/bootstrap/scss/utilities',
  '../../../node_modules/bootstrap/scss/buttons',
  '../../../node_modules/bootstrap/scss/containers';
// etc
```

Para más información, revisar la documentación oficial:

[Importando `Sass`](https://getbootstrap.com/docs/5.3/customize/sass/#importing) Opción B adaptada a `Sass 7-1`
