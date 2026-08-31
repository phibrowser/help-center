---
description: "Descubre cómo los Espacios de incógnito llevan la navegación privada a la barra lateral de Phi Browser, cómo funcionan las Reglas de URL y las extensiones con las sesiones privadas, y qué ocurre cuando el Espacio se cierra."
---

# Espacios de incógnito

Un **Espacio de incógnito** lleva la navegación privada a la barra lateral. Aparece en la franja de Espacios y funciona como cualquier otro Espacio mientras dura, con su propia ventana y sus propias pestañas, pero nada suyo se escribe en disco. La sesión vive solo en memoria, y cerrar el Espacio la destruye.

## Abrir un Espacio de incógnito

Elige **Archivo → Nuevo Espacio de incógnito**. El Espacio se une a la franja de la barra lateral con un icono de ninja (🥷) y el nombre **Incógnito**. Abre varios a la vez y pasan a numerarse, **Incógnito 1**, **Incógnito 2**, etcétera, y cada uno conserva su número hasta que se cierra. No hay un atajo de teclado integrado para crear uno.

Dos cosas sobre la sesión subyacente que conviene saber:

- **Todos los Espacios de incógnito comparten una sola sesión privada.** Son entradas separadas en la barra lateral, pero un único perfil en memoria los respalda a todos, construido siempre sobre tu Perfil predeterminado sin importar desde dónde lo abriste. Inicia sesión en un sitio en un Espacio de incógnito y tendrás la sesión iniciada también en los demás. Para mantener dos sesiones separadas de verdad, usa Espacios en [Perfiles](/es/spaces/) distintos.
- **Las ventanas de incógnito son una sesión aparte.** La clásica **Archivo → Nueva ventana de incógnito** sigue existiendo, y su sesión nunca se mezcla con la sesión compartida de los Espacios de incógnito.

## Cómo se ve

Un Espacio de incógnito usa siempre el tema oscuro de Incógnito propio de Phi, así que los temas por Espacio no se aplican. Puedes cambiar su icono como el de cualquier otro Espacio, aunque la elección dura solo lo que dure el Espacio. Y como no hay nada persistente que configurar, los Espacios de incógnito no aparecen en la sección Espacios de la Configuración.

## Qué queda fuera de una sesión privada

- **El historial, las cookies y los datos de sitios** viven solo en memoria y mueren con la sesión.
- **Los marcadores no están disponibles.** Un Espacio de incógnito no muestra marcadores y no te deja crearlos.
- **Las pestañas fijadas no se muestran.** Los Espacios de incógnito nunca muestran ni permiten pestañas fijadas, sea cual sea el alcance de pestañas fijadas elegido para la navegación normal.
- **Las funciones de IA quedan al margen.** El chat del asistente no está disponible y el botón de Memoria de la barra lateral está oculto.
- **Las extensiones quedan fuera salvo que las invites.** Solo las extensiones a las que has permitido ejecutarse en incógnito están activas en una sesión privada. Consulta [más abajo](#extensions-in-an-incognito-space).
- **Importar datos del navegador está bloqueado.** Phi se niega con _"Los datos del navegador no se pueden importar en Incógnito. Cambia a un Espacio o una ventana normal y vuelve a intentarlo."_
- **Time Machine no lo toca.** Las [Copias de seguridad de Time Machine](/es/time-machine/) excluyen por completo los Espacios de incógnito, así que restaurar una instantánea nunca hace reaparecer uno.

Una cosa sí sobrevive a propósito: los archivos que descargas se guardan en tu Mac como de costumbre. Elimínalos tú mismo si no quieres conservarlos.

## Enviar sitios a Incógnito con Reglas de URL

Las [Reglas de URL](/es/spaces/#url-rules-route-matching-sites-automatically) pueden dirigir los sitios que coincidan hacia la navegación privada automáticamente. En el editor de reglas, el selector de destino ofrece una opción genérica **Incógnito** junto a tus Espacios normales y Kiosk, nunca un Espacio de incógnito concreto, porque estos existen solo mientras están abiertos. Cuando una regla se activa, Phi dirige la página al Espacio de incógnito en el que ya estás o al primero que siga vivo, y abre un Espacio de incógnito nuevo bajo demanda cuando no hay ninguno abierto.

Dirigir hacia Incógnito es una válvula de un solo sentido. Una regla puede enviar una navegación a una sesión privada, pero nada se dirige nunca de vuelta: mientras navegas en un Espacio de incógnito o en una ventana de incógnito, las Reglas de URL no se aplican, así que un enlace abierto ahí no puede sacarse a un Espacio normal.

También puedes enviar un solo enlace a mano: haz clic derecho en él desde una ventana normal y elige un Espacio de incógnito en el submenú **Abrir enlace en Espacio**, que muestra los Espacios de incógnito vivos junto a los normales.

## Extensiones en un Espacio de incógnito {#extensions-in-an-incognito-space}

Como la sesión privada de un Espacio de incógnito se construye sobre tu **Perfil predeterminado**, aquel con el que Phi arranca, las únicas extensiones que pueden ejecutarse en ella son las extensiones del Perfil predeterminado, y cada una necesita tu permiso explícito, la misma regla que en cualquier navegador basado en Chromium. Para dejar que una se ejecute en Incógnito:

1. En una ventana del Perfil predeterminado, elige **Administrar extensiones** en el menú de Extensiones, o escribe `phi://extensions` en la barra de direcciones.
2. Abre los **Detalles** de la extensión.
3. Activa **Permitir en incógnito**.

El interruptor es por extensión y cubre por igual los Espacios de incógnito y las ventanas de incógnito. Una extensión instalada en otro Perfil nunca aparece en un Espacio de incógnito, así que para usarla ahí, instálala primero en el Perfil predeterminado. Ten en cuenta que una extensión permitida puede observar los sitios que visitas en privado, así que concede este permiso solo a extensiones en las que confíes. No se pueden instalar extensiones nuevas desde dentro de una sesión privada.

## Cerrar un Espacio de incógnito

Elige **Cerrar Espacio de incógnito** en el menú **Espacios**, o cierra la última pestaña del Espacio. En ambos casos Phi pregunta primero **"Esto también cerrará este Espacio de incógnito. ¿Seguro?"**, y cerrar el Espacio también lo quita de la franja. Marca **No volver a preguntar** para omitir la confirmación de ahí en adelante.

La sesión privada compartida sobrevive mientras siga abierto algún Espacio de incógnito. Cuando la última ventana de Espacio de incógnito se cierra, o Phi se cierra del todo, la sesión en memoria se destruye junto con todo lo que contiene. No hay ningún paso de limpieza posterior, porque nada de esto estuvo nunca en disco.

## Cómo se conecta esto con el resto de Phi

Los Espacios de incógnito se apoyan en el modelo de áreas de trabajo descrito en [Espacios y Perfiles](/es/spaces/). Piensa en ellos como Espacios cuya capa de aislamiento es desechable. Para saber qué guarda Phi y qué no sobre tu navegación normal, consulta [Privacidad y tus datos](/es/privacy/), y para saber por qué una reversión nunca trae de vuelta una sesión privada, consulta [Copias de seguridad de Time Machine](/es/time-machine/).
