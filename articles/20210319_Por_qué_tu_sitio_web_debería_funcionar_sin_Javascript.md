# ¿Por qué tu sitio web debería funcionar sin Javascript?

__19 de marzo del 2021__

__Por: *Christian Elías Cruz González*__

¿Por qué en 2021 te molestarías en hacer un sitio web sin JS? La respuesta obvia a por qué deberías crear un sitio web que no necesite JS es, en esencia, porque algunas personas no usan JS.

¡¿Pero cuántos?! ¿Cuántos visitantes no usan javascript? La respuesta a esta pregunta es aproximadamente el 1%.

- Un estudio de 2010 de yahoo sugiere 1.3% – web.archive
- Un estudio de 2013 de gov.uk sugiere 1,1% – gov.uk
- Para buzzfeed en 2018 fue del 1% – youtube
¡1% parece mucho! ¿Es realmente posible que 1 de cada 100 personas bloqueen javascript? bueno… No.

El 1% de estos estudios es el 1% de las visitas en las que javascript ha fallado por algún motivo. Según gov.uk, el número de personas que bloquean activamente js (o utilizan un navegador realmente antiguo) es del 0,2%, 1 de cada 500.

Ese 0.2% tiene sus razones, pero primero veamos el 0.8% de visitas donde falla el js.

## ¿Por qué falla Javascript?

Hay muchas razones por las que el javascript de su sitio puede fallar:

- ¡Tu javascript está roto! Sucede.
- Una función que estás usando no funciona en un navegador más antiguo. p.ej. ES6 en una versión antigua de Internet Explorer.
- Inteferencia de una extensión de navegador. Algunas extensiones web alteran el código de su sitio, con efectos negativos.
- Errores de red. A veces, las cosas simplemente se rompen.
- Los usuarios desde dispositivos móviles pierden la señal, por ejemplo, al estar en una zona rural, pasar por un túnel, caer por una alcantarilla, etc.
- Algunos navegadores bloquean javsacript en conexiones lentas. Android hace esto.
- Algún CDN no funciona. En 2017 AWS dejó de funcionar durante 3 horas
- A veces, las organizaciones bloquean javascript por razones de seguridad.
- Los ISP bloquearon accidentalmente un CDN. Sky Broadband una vez bloqueó jQuery
- Redes móviles que alteran el contenido y lo rompen. ¡T-mobile y Orange también rompieron jQuery!
- Probablemente también haya otras razones.

Eso representa aproximadamente el 0,8% de los visitantes que no utilizan Javascript. Pero, ¿qué pasa con el 0,2% que bloquea js?

## ¿Por qué la gente bloquea javascript?

Algunas personas bloquean javascript en su navegador. Algunas personas eligen un navegador que no es compatible con JavaScript. Hay varias razones por las que esto pasa:

- Accesibilidad
- Seguridad
- Privacidad
- Costo
- Banda ancha
- CPU
- Batería
- Prefieren un navegador muy antiguo o basado en texto
- Simplemente les gusta la web sin javascript.

## Accesibilidad

A algunas personas les resulta más fácil navegar por la web con JavaScript desactivado. Hay menos distracciones.

Otros eligen navegadores de texto a voz que no admiten js.

La conversión de texto a voz puede funcionar bien con javascript. Por ejemplo, voiceOver en MacOS funciona en cualquier navegador.

## Seguridad

Muchas personas desactivan js por razones de seguridad, tanto profesionales como personales. Sin javascript significa que no hay javascript malicioso también.

¿Quién hace esto?

- Personas que trabajan con datos sensibles o valiosos.
- Periodistas y denunciantes.
- Edward Snowden recomienda desactivar JS.
- Personas cautelosas que no quieren que les roben sus tarjetas de crédito.

## Privacidad

A mucha gente no le gusta que las corporaciones recopilen sus datos personales. Pueden bloquear anuncios y scripts de seguimiento. Algunas personas van un paso más allá y bloquean todo javascript. Luego, si confían en un sitio, permitirán que se ejecute.

## Costo y ancho de banda

Bloquear JavaScript puede ahorrar mucho dinero.

Descargar d3.js (una popular biblioteca de gráficos) cuesta 1 centavo en Canadá. En Mauritania cuesta el 0,06% de la renta media diaria. Puede que no parezca mucho. Pero d3.js tiene solo 90kB, y ese es solo uno de los muchos scripts que alguien puede tener que descargar para usar un sitio.

Entonces javascript puede solicitar todo tipo de datos, imágenes, videos y su tamaño aumenta rápidamente. Una vez que haya visitado algunos sitios, es posible que se encuentre por encima del presupuesto.

La misma lógica se aplica a las personas con ancho de banda limitado.

## CPU y batería

Algunas personas desactivan javascript para ahorrar CPU y batería.

Los usuarios de dispositivos de baja potencia, o que realizan tareas más importantes en segundo plano, pueden querer aliviar la presión de su CPU. Las personas que no tienen fácil acceso a una fuente de alimentación pueden querer ahorrar batería.

## Navegadores obsoletos y navegadores basados ​​en texto

Los navegadores muy antiguos como IE < 3, Netscape 1, Mosaic y otros no admiten javascript. Casi nadie usa estos navegadores, pero puedes apostar que alguien lo hace.

Algunos navegadores basados en texto como Lynx no son compatibles con JS. Lynx es un navegador que se ejecuta en aplicaciones de terminal. Por lo tanto, es posible que alguien que navega por la web en una computadora sin una GUI lo esté usando.

Lynx existe desde 1992 y todavía se actualiza hoy. Así que la gente definitivamente lo está usando.

## Algunas personas simplemente prefieren la web sin JS.

Algunas personas piensan que se navega mejor en la web sin Javascript. Es más rápido y reduce las distracciones. Apagar Javascript durante una semana es algo glorioso.

## ¿Debería atender al 0,2%?

Si y no. Personalmente, disfruto hacer que las cosas funcionen. Encuentro todas estas cosas fascinantes. Pero asegurarse de que un sitio funcione para el 0,2% de las personas que deshabilitan Javascript no es realmente el punto.

## El efecto de las rampas en la acera

Una analogía que surge a menudo cuando se habla de accesibilidad web son las rampas en la acera.

Se agregaron rampas en las aceras después de una larga campaña de activistas por los derechos de las personas con discapacidad. Su propósito era brindar a los usuarios de sillas de ruedas las mismas libertades que disfrutan las personas sin discapacidades.

Ahora que las rampas de aceras están en todas partes, todos se benefician de ellos. Personas con cochecitos, patinetas, personas que buscan paquetes y más.

¿El punto? Hacer que el mundo sea más accesible para un grupo de personas beneficia a todos. Ese es el efecto de las rampas en las aceras.

Crear sitios que funcionen bien sin javascript no solo beneficia al 0,2% de las personas que lo desactivan. También mejora el 0,8% de las visitas donde javascript falla.

Construir todo lo que puedas sin JS hará que tu sitio sea:

- más rápido
- más pequeño (la mayor parte del tiempo)
- más confiable
- más accesible
- tener animaciones más suaves
- más fácil de indexar por los motores de búsqueda
- menos vulnerable a ser hackeado
- más fácil de desarrollar (opinión personal)

Preferiría escribir JS todo el día, pero encontrar soluciones solo con HTML y CSS te convierte en un mejor desarrollador.

Te obliga a encontrar formas creativas de resolver problemas y a aprender nuevas funciones HTML y CSS.

Luego, cuando hay que agregar Javascript, termina siendo mucho más pequeño y más fácil de administrar.

## Cómo deshabilitar Javascript

Si vas a crear sitios sin JS tendrás que probarlos.

Probablemente, la forma más popular de deshabilitar JavaScript es con la extensión del navegador NoScript; está disponible en Google Chrome y Firefox y también en otros lugares.

De todas formas, prueba a navegar por la web sin JS, o tal vez incluso puedes intenar usar Lynx. Déjame saber lo que piensas a través de Twitter. Me encuentras como [@christianecg_](https://twitter.com/christianecg_).