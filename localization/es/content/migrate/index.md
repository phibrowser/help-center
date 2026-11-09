---
description: "Cómo Migrar desde otro navegador recrea tus Perfiles y Espacios de Arc o Zen en Phi Browser, qué trae cada navegador, qué esperar de las solicitudes de permiso y en qué se diferencia de Importar."
---

# Migrar desde Arc o Zen

**Migrar desde otro navegador…** reconstruye la estructura de tu configuración de Arc o Zen en Phi. Crea un Perfil de Phi por cada perfil de origen y un Espacio de Phi por cada Espacio de origen, y después llena cada Espacio con sus marcadores y cada Perfil con sus pestañas fijadas y sus datos de navegación. Cuando termina, tu antigua barra lateral queda recreada en Phi.

La migración solo crea. Nunca cambia, fusiona ni elimina un Perfil o un Espacio que ya tengas en Phi.

## Migrar o importar {#migrate-or-import}

Phi tiene dos comandos para traer datos, uno junto al otro en el menú **Phi** (el menú de la app en negrita, junto al menú Apple):

|                                | **Importar desde otro navegador...**                     | **Migrar desde otro navegador…**                     |
| ------------------------------ | -------------------------------------------------------- | ---------------------------------------------------- |
| Qué hace                       | Añade datos al Espacio en el que estás                   | Crea Perfiles y Espacios nuevos que copian el origen |
| Navegadores                    | Chrome, Safari, Arc, Dia o un archivo                    | Arc y Zen                                            |
| Dónde acaban los datos         | Tu Espacio actual y su Perfil                            | Los Perfiles y Espacios nuevos que crea              |
| Tú eliges                      | Qué tipos de datos traer                                 | Qué Espacios recrear                                 |
| Tus datos de Phi ya existentes | Los marcadores y el historial se suman a lo que ya había | No se tocan                                          |

Elige **Importar** cuando ya tienes una configuración de Phi que te gusta y quieres añadirle marcadores o historial. Elige **Migrar** cuando te mudas desde Arc o Zen y quieres recuperar tus Espacios tal como estaban, sin reconstruirlos a mano. La importación se explica en [Importar y exportar](/es/import-export/).

## Antes de empezar {#before-you-start}

- **Ten el navegador instalado en este Mac.** Migrar lee los datos de Arc o de Zen desde donde ese navegador los guarda. Si no está instalado ninguno de los dos, **Migrar desde otro navegador…** aparece atenuado.
- **Inicia sesión en Phi o continúa como invitado.** Los Perfiles y Espacios migrados pertenecen a tu cuenta de Phi, así que la ventana de migración te pide que termines el primer arranque antes de empezar.
- **Cierra Zen primero.** Phi lee copias de los archivos de Zen, y lo que Zen aún no haya guardado en disco quedaría fuera. La ventana de migración te lo recuerda mientras Zen está abierto.
- **Espera solicitudes del llavero con Arc.** Arc cifra sus cookies, así que macOS pregunta si Phi puede usar la clave de cifrado de Arc. Elige **Permitir siempre**. Si no, macOS vuelve a preguntar con cada Perfil. Si lo deniegas, las cookies de ese Perfil se quedan atrás mientras todo lo demás se transfiere, y el informe no avisa de que faltan esas cookies.
- **No ejecutes una importación al mismo tiempo.** Mientras hay una migración en curso, **Importar desde otro navegador...** aparece atenuado, y al revés.

## Ejecutar una migración {#running-a-migration}

1. Abre el menú **Phi** y elige **Migrar desde otro navegador…**. Se abre la ventana **Migrar a Phi**.
2. Elige **Arc** o **Zen** y haz clic en **Continuar**. Solo aparecen los navegadores instalados en este Mac.
3. Revisa la vista previa en **Revisa lo que se creará**. Muestra cada perfil de origen con sus Espacios y un resumen como _Se crearán 2 Perfiles y 5 Espacios._ Desmarca los Espacios que no quieras. Un Perfil solo se crea si al menos uno de sus Espacios está marcado.
4. Haz clic en **Iniciar migración**. Phi crea los Perfiles y Espacios de uno en uno y muestra su progreso. Puede tardar unos minutos. Mientras tanto puedes seguir navegando; los Espacios nuevos no se abren encima del que estás usando.
5. Lee el informe en **Migración finalizada**. Haz clic en **Ir a** seguido del nombre de un Espacio para cambiar al primer Espacio nuevo, o en **Listo** para cerrar la ventana.

## Qué se transfiere {#what-comes-across}

La estructura es la misma con los dos navegadores. Cada perfil de origen pasa a ser un Perfil de Phi, y cada Espacio de origen pasa a ser un Espacio de Phi vinculado a ese Perfil, con su nombre y, cuando Phi tiene uno equivalente, su color y su icono.

| Elemento de origen                                                                                                | En Phi                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Perfil de Arc, o Contenedor de Zen (los Espacios de Zen sin Contenedor comparten un Perfil)                       | Un Perfil nuevo                                                                                                  |
| Espacio de Arc o de Zen                                                                                           | Un Espacio nuevo en ese Perfil                                                                                   |
| Los elementos fijados de la barra lateral de Arc, o las pestañas fijadas de cada Espacio de Zen, con sus carpetas | Los marcadores de ese Espacio                                                                                    |
| Favorites de Arc, o esenciales (Essentials) de Zen                                                                | Pestañas fijadas, colocadas según tu [alcance de las pestañas fijadas](/es/bookmarks/#choose-a-pinned-tab-scope) |

Los datos de navegación de cada Perfil dependen del navegador:

| Datos              | Arc                            | Zen |
| ------------------ | ------------------------------ | --- |
| Historial reciente | Sí                             | Sí  |
| Cookies            | Sí, tras dar acceso al llavero | No  |
| Extensiones        | Las de Chrome Web Store        | No  |

Algunos límites que conviene conocer:

- **Las pestañas abiertas no se transfieren.** Solo se transfieren los elementos fijados y los Favorites o esenciales. Las pestañas que tenías abiertas sin fijar se quedan en el navegador de origen.
- **El historial es reciente, no completo.** La migración conserva las entradas de historial más recientes, no todas las visitas que hayas hecho.
- **Las extensiones se instalan en segundo plano.** Con Arc, el informe muestra cuántas extensiones de Chrome Web Store empezaron a instalarse. Las extensiones de cualquier otra procedencia no se transfieren, y las extensiones de Firefox de Zen no pueden funcionar en Phi.
- **Las contraseñas y las tarjetas de pago no se migran.**
- **Los Espacios de ventana privada de Zen se omiten.**
- **Las pestañas fijadas necesitan un Espacio.** Phi solo crea un Perfil cuando tiene al menos un Espacio que crear. Un perfil de origen sin Espacios, como un Contenedor de Zen que ningún Espacio de Zen usa, se omite, y el informe indica cuántas de sus pestañas fijadas se quedaron atrás.

Tu navegador de origen no se modifica. Arc y Zen conservan todo lo que tenían, así que puedes migrar, comparar y seguir usando cualquiera de los dos.

## Leer el informe {#reading-the-report}

El informe enumera cada Perfil y cada Espacio con lo que le ha pasado: cuántos marcadores recibió cada Espacio, cuántas pestañas fijadas se añadieron y si el historial, las cookies y las extensiones se transfirieron. Si algo falló, el resumen indica cuántas cosas necesitan tu atención, y la fila afectada explica qué salió mal, por ejemplo **Espacio no creado** o **No se pudieron guardar los marcadores**. Todo lo demás de esa ejecución se conserva, así que un fallo no deshace el resto.

## Migrar de nuevo {#migrating-again}

Phi recuerda que migraste desde un navegador a tu cuenta. Si empiezas otra migración desde el mismo navegador, primero te avisa: migrar de nuevo crea un segundo conjunto de Perfiles y Espacios y no actualiza el primero. Elige **Migrar de nuevo** solo si eso es lo que quieres. Para empezar de cero, elimina los Espacios de la primera ejecución antes de volver a migrar (consulta [Espacios y Perfiles](/es/spaces/)), para no acabar con dos copias una al lado de la otra.

No hay sincronización continua con Arc ni con Zen. Una migración es una copia única de lo que tenía el origen en ese momento.

## Qué leer a continuación {#what-to-read-next}

- [Importar y exportar](/es/import-export/), añadir marcadores e historial al Espacio en el que estás.
- [Cambiar a Phi](/es/switching-to-phi/), en qué se diferencian los Espacios, los Perfiles y las pestañas fijadas de Arc y Zen.
- [Espacios y Perfiles](/es/spaces/), administrar los Perfiles y Espacios que crea una migración.
- [Marcadores y pestañas fijadas](/es/bookmarks/), cómo se comportan los marcadores y las pestañas fijadas una vez en Phi.
