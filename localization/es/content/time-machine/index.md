---
description: "Descubre cómo funcionan las instantáneas de reversión de Time Machine de Phi Browser, cuándo se crean, en qué se diferencia restaurar respecto del Time Machine de Apple y cuándo exportar tus datos de usuario."
---

# Copias de seguridad de Time Machine

Time Machine es la red de seguridad de Phi para las actualizaciones. Antes de ciertas actualizaciones importantes, Phi guarda automáticamente una instantánea de la versión actual y de tus datos, de modo que si una versión nueva no funciona como esperabas, puedas volver a la versión en la que estabas. Existe para esa actualización poco frecuente que cambia muchas cosas a la vez.

## Qué es y qué no es

El Time Machine de Phi es una función de **reversión de versión**, no una herramienta de copias de seguridad de propósito general. Un par de cosas con las que es fácil confundirlo:

- **No** es el Time Machine de Apple. No hace copias de seguridad de tu Mac y no tiene nada que ver con la función del sistema que lleva el mismo nombre.
- **No** es una copia de seguridad continua y programada de tu navegación. Phi no crea una instantánea cada día ni te deja elegir un momento cualquiera del pasado. Una instantánea se crea automáticamente, de vez en cuando, justo antes de una actualización que conlleva más riesgo de lo habitual.

Si lo que quieres es una copia de seguridad que tú controles, para mudarte a un Mac nuevo o guardar una copia antes de experimentar, usa **Exportar datos de usuario** en su lugar (consulta [Exportar tus propios datos](#exporting-your-own-data) más abajo).

## Cuándo se crea una instantánea

Una instantánea de Time Machine no la inicias tú. Phi crea una automáticamente, justo antes de lanzarse a una actualización que reúne las condiciones, y solo una vez por cada actualización de ese tipo. La mayoría de las actualizaciones no generan ninguna. Cuando una instantánea existe, captura los datos de Phi que pertenecen a la versión anterior, es decir, tus marcadores, tus Espacios, tus pestañas fijadas, tu configuración, tu Memoria y tu estado de navegación, junto con un registro de la versión de la app con la que se corresponde, de modo que una reversión restaura una configuración coherente y no una mezcla dispareja. La propia app no se guarda en la instantánea; se descarga durante la restauración.

Las instantáneas se guardan **localmente en tu Mac**. No se suben a la nube, no están vinculadas a tu cuenta y no pueden moverse a otro Mac.

## Volver a una versión anterior

1. Abre el menú **Ayuda** y busca **Copias de seguridad de Time Machine**.
2. Cada instantánea disponible aparece con su versión, compilación y fecha, por ejemplo _Phi 1.6 (590) del 2026.6.11_. Si no hay ninguna, el menú muestra **No hay copias de seguridad disponibles**.
3. Elige la instantánea que quieras. Phi pide confirmación con **"¿Restaurar la copia de seguridad de Time Machine?"** y avisa de que _Phi se cerrará y la restaurará, y la app actual y los datos de usuario seleccionados serán reemplazados._
4. Elige **Restaurar**. Phi descarga la versión anterior, reemplaza la app actual y los datos que le corresponden, y se reinicia en la versión restaurada.

Como la reversión descarga la versión anterior, necesitas conexión a internet mientras restauras. La restauración está diseñada para terminar o recuperarse de forma segura si se interrumpe, así que un cierre o un fallo a mitad de la restauración no dejará a Phi en un estado roto.

## Exportar tus propios datos {#exporting-your-own-data}

Time Machine se ocupa de las reversiones tras una actualización. Para una copia de seguridad que tú creas y conservas en tus propios términos, usa **Administrar datos de usuario** en el menú **Ayuda**:

- **Exportar datos de usuario…** guarda tus datos de Phi como un solo archivo que puedes almacenar donde quieras.
- **Importar datos de usuario…** reemplaza tus datos actuales de Phi con los de un archivo que exportaste antes, y luego reinicia la app.

Esta es la herramienta adecuada para mudarte a un Mac nuevo o guardar una copia personal, la parte que Time Machine deja fuera a propósito.

## Cómo se conecta esto con el resto de Phi

Una instantánea de Time Machine incluye los datos que hay detrás de [Espacios y Perfiles](/es/spaces/) y de la [Memoria](/es/memory/), así que revertir los devuelve a como estaban en el momento de la instantánea. Todo permanece en tu Mac, en línea con el enfoque de prioridad local de Phi descrito en [Privacidad y tus datos](/es/privacy/).
