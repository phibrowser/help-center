---
description: "Cómo importar marcadores e historial en Phi Browser desde otro navegador o desde un archivo (HTML de marcadores, JSON de historial de Safari, ZIP de exportación de Safari), qué importa cada tipo de archivo y cómo exportar tus marcadores a un archivo HTML."
---

# Importar y exportar

Phi puede traer marcadores e historial de navegación desde otros navegadores, ya sea directamente desde un navegador instalado o desde un archivo que ya tengas. También puede exportar los marcadores de un Espacio a un archivo HTML estándar. Esta página cubre ambas direcciones y detalla exactamente qué trae cada tipo de archivo.

Si acabas de llegar a Phi y solo quieres el panorama general de la migración, empieza por [Cambiarse a Phi](/es/switching-to-phi/) y vuelve aquí para los detalles.

## Dos formas de importar

Hay dos puntos de entrada, y ambos abren la misma pantalla de importación **Datos del navegador**:

- **Durante la primera ejecución.** La configuración inicial ofrece importar mientras pones Phi en marcha.
- **En cualquier momento después.** Abre el menú **Phi** (el menú de la app en negrita, junto al menú Apple) y elige **Importar desde otro navegador…**.

La pantalla de importación ofrece cuatro orígenes: **Desde Chrome**, **Desde Safari**, **Desde Arc** y **Desde un archivo**. Chrome, Safari y Arc leen directamente los datos del navegador instalado y te dejan elegir qué tipos de datos traer. Las secciones siguientes explican **Desde un archivo** con más detalle.

Las importaciones llegan al [Espacio](/es/spaces/) desde el que ejecutas la importación. Los marcadores se unen al árbol de marcadores de ese Espacio, y el historial se une a tu historial de navegación. Importar no está disponible en [Incógnito](/es/incognito/); cambia primero a un Espacio o una ventana normal.

::: tip Sal de Safari antes de importar desde él
Si usas **Desde Safari**, sal de Safari primero. Safari mantiene parte de la actividad reciente en memoria y solo la escribe por completo en disco al cerrarse, así que importar mientras sigue abierto puede omitir tus marcadores e historial más recientes. Esto no se aplica a **Desde un archivo**, que lee una instantánea que ya exportaste.
:::

## Importar desde un archivo

Elige **Desde un archivo**, haz clic en **Seleccionar archivo…** y elige el archivo. Phi acepta tres tipos de archivo y decide qué hacer según el propio archivo. Esta opción no tiene casillas de tipos de datos; importa lo que el archivo contenga. Mientras trabaja verás **Importando datos del archivo…**.

### Qué importa cada tipo de archivo

| Archivo                              | Extensión       | Qué se importa                    |
| ------------------------------------ | --------------- | --------------------------------- |
| **HTML de marcadores**               | `.html`, `.htm` | Solo marcadores                   |
| **JSON de historial de Safari**      | `.json`         | Solo historial de navegación      |
| **Archivo de exportación de Safari** | `.zip`          | Marcadores **e** historial juntos |

El **HTML de marcadores** es el formato estándar de "marcadores Netscape" que todos los navegadores principales pueden exportar, incluidos Chrome, Safari, Firefox, Edge y el propio Phi. Importar uno añade sus marcadores al Espacio actual dentro de una carpeta **Importados**, de modo que se mantienen juntos y es fácil encontrarlos o eliminarlos después.

El **JSON de historial de Safari** y el **Archivo de exportación de Safari** provienen ambos de la función **Archivo → Exportar → Exportar datos de navegación…** de Safari. Safari genera un archivo `.zip`; si ya lo has descomprimido, también puedes elegir directamente el archivo `History.json` de su interior.

- Un **Archivo de exportación de Safari** (`.zip`) es la opción más sencilla: elígelo y Phi importa tus marcadores y tu historial en un solo paso.
- Un **JSON de historial de Safari** suelto importa solo el historial.

### Qué se importa y qué no

- **Solo marcadores e historial.** Las contraseñas, las tarjetas de pago y otros elementos que Safari también puede exportar nunca se importan por esta vía. Traer datos sensibles de ese tipo sin preguntar sería un error, así que Phi omite esos archivos incluso cuando un archivo de exportación de Safari los contiene.
- **Un archivo en mal estado nunca bloquea al resto.** Dentro de un `.zip`, Phi lee todos los archivos de marcadores e historial que puede y omite los que no, como un archivo sin relación o una entrada dañada.
- **El historial dividido en varias partes se importa completo.** Safari a veces divide una exportación de historial grande en varios archivos (`History.json`, `History-0001.json`, etcétera), y Phi los importa todos.
- **Reimportar no acumula duplicados.** El historial importado se fusiona con tu historial existente igual que en cualquier importación entre navegadores, así que importar el mismo archivo dos veces no multiplica tus visitas.
- **Los archivos enormes o dañados se manejan de forma segura.** Phi limita cuánto lee de un solo archivo o comprimido, de modo que un archivo inusualmente grande o con formato incorrecto no puede colgar el navegador. Phi lo omite.
- **Una importación sin nada que traer termina igualmente sin problemas.** Si un archivo no contiene nada que Phi pueda usar, la importación termina sin error en lugar de quedarse atascada.

## Exportar tus marcadores

Phi puede exportar los marcadores del **Espacio actual** a un archivo HTML. Abre el menú **Marcadores** y elige **Exportar marcadores…**, luego elige dónde guardarlo. Phi sugiere un nombre de archivo como `Phi-Bookmarks-<Space>-<date>.html`.

- El archivo usa el mismo formato estándar de **marcadores Netscape** descrito arriba, así que se importa sin problemas en Chrome, Safari, Firefox, Edge, o de vuelta en Phi mediante **Desde un archivo**.
- La exportación cubre el Espacio en el que estás. Como los marcadores son [por Espacio](/es/bookmarks/), cambia de Espacio y exporta de nuevo para guardar el conjunto de otro Espacio.
- **Exportar marcadores…** aparece atenuado cuando el Espacio actual no tiene marcadores, y no está disponible en los Espacios de incógnito (que nunca tienen árbol de marcadores).
- Un marcador de [Vista dividida](/es/layouts/), que reúne dos páginas en una sola entrada, se escribe como dos entradas normales para que el formato estándar pueda representarlo.

### El viaje de ida y vuelta

Exporta los marcadores de un Espacio a HTML y luego usa **Desde un archivo** para traerlos de vuelta, ya sea a otro Espacio, a otro Perfil o a Phi en otro Mac. Suele ser la forma más rápida de copiar un conjunto de marcadores entre Perfiles o entre dos Mac.

## Exportarlo todo (no solo los marcadores)

**Exportar marcadores…** solo exporta marcadores. Para hacer una copia de seguridad de todos tus datos de Phi (Espacios, Perfiles, historial y más) en un solo archivo, usa **Administrar datos de usuario → Exportar datos de usuario…** en el menú **Ayuda**. Esa es la herramienta para mudarte a un Mac nuevo o guardar una copia personal completa; consulta [Copias de seguridad de Time Machine](/es/time-machine/#exporting-your-own-data) para ver cómo encaja con las instantáneas de reversión automáticas de Phi.

## Qué leer a continuación

- [Marcadores y pestañas fijadas](/es/bookmarks/): cómo se comportan los marcadores una vez que están en Phi.
- [Espacios y Perfiles](/es/spaces/): por qué las importaciones llegan a un Espacio y cómo los Perfiles separan tus datos.
- [Cambiarse a Phi](/es/switching-to-phi/): el mapa completo de migración desde Chrome, Safari, Arc y Dia.
- [Copias de seguridad de Time Machine](/es/time-machine/): instantáneas de reversión automáticas y exportación completa de los datos de usuario.
