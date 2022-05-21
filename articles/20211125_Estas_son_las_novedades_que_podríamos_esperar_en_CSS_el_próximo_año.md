# Estas son las novedades que podríamos esperar en CSS el próximo año

__25 de noviembre del 2021__

__Por: *Christian Elías Cruz González*__

_Al momento de la redacción de este artículo, las reglas que aquí se mencionan, han sido enviadas al CSSWG para su revisión, y es altamente probable que sean consideradas para su adición al estándar._

Cuando los desarrolladores web creamos nuestras hojas de estilo, en la gran mayoría de ocasiones, hacemos uso de algunas condicionales realmente útiles, que nos permiten crear soluciones elegantes en el diseño de nuestro sitio. Estas condicionales impactan directamente en el procesador de la computadora del usuario final, para renderizar el diseño final del sitio.

Algunas de las condicionales de CSS que solemos encontrar son `@media`, que permite al desarrollador definir la forma en que el sitio se verá dependiendo de los medios para los que deba presentarse (como un teléfono, una computadora, una impresora, etc.), o bien, `@supports`, que permite al desarrollador validar si el navegador del usuario soporta alguna de las nuevas funcionalidades de CSS.

Esas condicionales, de manera individual son muy útiles. Sin embargo, en no pocas ocasiones, es necesario hacer uso de una combinación de las mismas, lo que ocasiona la necesidad de crear diferentes variantes de un mismo estilo, y que, por tanto, impacta negativamente en el proceso de renderizado del sitio.

Y es en ese contexto, que se presentan oficialmente dos reglas que podrían ser aceptadas por el CSSWG en 2022: `@when` y `@else`, la solución a todos tus problemas.

Puedes acceder al borrador de la propuesta haciendo clic [aquí](https://tabatkins.github.io/specs/css-when-else/).

Pero, ¿Cómo podremos utilizar estas alternativas en nuestro código?

## Creando reglas generalizadas con @when

La regla `@when` propuesta generaliza condicionales, por lo que en lugar de usar una regla condicional específica para una tarea específica, puedes generalizar tu bloque de reglas para usar dos o más tipos de consultas.

Supongamos que queremos definir una condicional, en la que queremos aplicar un diseño en específico para pantallas con resolución de máximo 768px, y verificar que el navegador del usuario soporta grid. Sin la existencia de `@when`, el código que necesitaríamos sería algo así:

```
@media (max-width: 768px) {
    @supports (display: grid) {
        /* Estilos propios con las condiciones */
    }
}
```

En el código anterior, estamos haciendo uso de dos reglas: `@media` y `@supports`. Sin embargo, implementando @when, es posible generalizar las dos reglas en una sola:

```
@when media(max-width: 768px) and supports(display: grid) {
    /* Estilos propios con las condiciones */
}
```

Esto es genial, pero, ¿qué pasará si las condiciones en la declaración `@when` resultan ser falsas? Un segundo borrador presentado al CSSWG nos presenta esta solución.

## Creando cadenas de condiciones con el uso de @else

La condicional `@else`, así como sucede con muchos lenguajes de programación, nos permitiría crear una cadena de condiciones que avalen el funcionamiento y las capacidades del dispositivo de lectura del sitio web, para, de esta manera, asegurar una mejor experiencia al usuario.

```
@when media(max-width: 768px) and supports(display: grid) {
    /* Estos estilos se implementarán solo si la pantalla tiene un tamaño máximo de 768px y el navegador soporta grid */
}
@else media(max-width:768px) and supports(display: flex) {
    /* Estos estilos se implementarán solo si la condición anterior no se cumplió, además, la pantalla tiene un tamaño máximo de 768px y el navegador soporta flex*/
}
@else {
   /* Estos estilos se implementarán siempre que ninguna de las dos condiciones anteriores se cumplan. */
}
```

Si quisiéramos aplicar las reglas antes mencionadas, de la manera actual, el código se volvería ilegible, mucho más grande, y, por tanto, más complejo.

Junto con estas características, el CSSWG tiene muchas otras propuestas en revisión, que podrán ser implementadas en ediciones futuras de CSS. Si deseas que escribamos sobre esto en Azul School, cuéntanos al respecto en los comentarios de este post.