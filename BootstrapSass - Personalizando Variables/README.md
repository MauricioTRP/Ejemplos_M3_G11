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
// Custom.scss
// Option B: Include parts of Bootstrap

// 1. Include functions first (so you can manipulate colors, SVGs, calc, etc)
@import "../../../node_modules/bootstrap/scss/functions";

// 2. Include any default variable overrides here
$green: rgb(29, 240, 29);
$red: rgb(255, 94, 0);
$yellow: rgb(230, 230, 15);

// 3. Include remainder of required Bootstrap stylesheets (including any separate color mode stylesheets)
@import "../../../node_modules/bootstrap/scss/variables";
@import "../../../node_modules/bootstrap/scss/variables-dark";

// 4. Include any default map overrides here

// 5. Include remainder of required parts
@import "../../../node_modules/bootstrap/scss/maps";
@import "../../../node_modules/bootstrap/scss/mixins";
@import "../../../node_modules/bootstrap/scss/root";

// 6. Optionally include any other parts as needed
@import "../../../node_modules/bootstrap/scss/utilities";
@import "../../../node_modules/bootstrap/scss/reboot";
@import "../../../node_modules/bootstrap/scss/type";
@import "../../../node_modules/bootstrap/scss/images";
@import "../../../node_modules/bootstrap/scss/containers";
@import "../../../node_modules/bootstrap/scss/grid";
@import "../../../node_modules/bootstrap/scss/helpers";
@import "../../../node_modules/bootstrap/scss/nav";
@import "../../../node_modules/bootstrap/scss/navbar";
@import "../../../node_modules/bootstrap/scss/buttons";
@import "../../../node_modules/bootstrap/scss/button-group";
@import "../../../node_modules/bootstrap/scss/tables";

// 7. Optionally include utilities API last to generate classes based on the Sass map in `_utilities.scss`
@import "../../../node_modules/bootstrap/scss/utilities/api";

// 8. Add additional custom code here
```

Para más información, revisar la documentación oficial:

[Importando `Sass`](https://getbootstrap.com/docs/5.3/customize/sass/#importing) Opción B adaptada a `Sass 7-1`
