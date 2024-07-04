# Ejemplos M3 G11

Para ejecutar el `watcher` de sass se debe tener en consideración la estructura de carpetas del proyecto, y donde se "compilará" el archivo `.css` resultante

```bash
.
├── assets
│   └── styles
│       ├── styles.css
│       ├── styles.css.map
│       └── styles.scss
└── index.html
```

Considerando esta estructura, el comando adecuado para ejecutar el compilador sass es:

```bash
# comando windows
sass .\assets\styles\styles.scss .\assets\styles\styles.css

# comando linux
sass assets/styles/styles.scss assets/styles/styles.css
```

## importante

Debes poner atención a que la estructura es `sass <archivo_entrada_SASS> <salida_archivo_CSS>`
