# Sass 7-1 pattern

El siguiente proyecto hace uso del patrón `7-1` propuesto como metodología de trabajo SASS

```bash
assets/sass/
├── abstracts
│   ├── _mixins.scss
│   └── _variables.scss
├── base
│   ├── _reset.scss
│   └── _typography.scss
├── components
│   ├── _button.scss
│   ├── _card.scss
│   ├── _input.scss
│   └── _logo.scss
├── layout
│   ├── _form.scss
│   └── _header.scss
├── pages
├── shame
│   └── _shame.scss
├── themes
│   └── _base.scss
├── vendors
└── main.scss

```

## Carpetas

El proyecto se divide en carpetas con responsabilidades bien definidas:

### abstracts

Esta carpeta sirve para almacenar variables, mixins y/o funciones que serán utilizadas en niveles "superiores".

### base 🌱

En esta carpeta va estilado básico de elementos. Por ejemplo: `resets`, `tipografías` o estilado de elementos.

### components 🚀

En esta carpeta, el estilado se basa en elementos que "pueden vivir por si solos" en cualquier parte del documento, y no están atados a una estructura específica. Por ejemplo: Botones, Dropdowns.

### layout 📏📐

En esta carpeta se definen los "planos" de algunos elementos con estructura. Un ejemplo de esto pueden ser `Forms`, `Footer`, `Asides`, `Headers`

### pages 📖

Algunas páginas específicas necesitarán de estilos que sólo aplicarás en esa página.

### themes 🎨

En esta carpeta irán las reglas de estilo asociadas a temas, por ejemplo tema claro, tema oscuro.

### shame 😬

En esta carpeta, dejaremos estilos que no sabemos donde organizar, en este caso debemos tratar de limpiar el archivo lo antes posible.

## Aportes

Si quieren aportar en el desarrollo de estos ejemplos pueden hacer un `fork`, y desde su copia hacer cambios y luego hacer un `pull request`.
