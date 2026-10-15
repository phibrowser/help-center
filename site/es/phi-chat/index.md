---
description: "Usa Phi Chat, tu asistente en su propia ventana, para abrir conversaciones desde la barra lateral, ver las conversaciones de todos tus Perfiles, organizarlas en categorías y seguir tus tareas."
---

# Phi Chat

Phi Chat es tu asistente en una ventana propia, con su propio icono en el Dock, separada de las ventanas del navegador. Es el mismo asistente y son las mismas conversaciones que tienes en la barra lateral, dispuestas para un trabajo más largo: un chat a tamaño completo a la derecha y la lista de tus conversaciones a la izquierda.

La barra lateral sigue siendo el lugar para preguntar sobre la página que tienes delante. Phi Chat es adonde vas para encontrar una conversación antigua, verlo todo en un mismo sitio y seguir lo que han informado tus tareas.

## Abrir Phi Chat {#opening-phi-chat}

Hay varias formas de entrar:

- **Desde la barra lateral.** Haz clic en **Abrir en Phi Chat** en la barra superior de la barra lateral para llevarte la conversación actual. Consulta [Pasar una conversación a Phi Chat](#moving-a-conversation-over).
- **Desde la barra de menús.** Haz clic en el icono de [Phi Sentinel](/es/sentinel/) y elige **Abrir Phi Chat**. Si vuelves a elegirlo mientras Phi Chat está en primer plano, la ventana se oculta. Un pequeño punto rojo en ese elemento indica que el asistente ha publicado algo que aún no has leído.
- **Con un atajo.** El atajo viene desactivado de forma predeterminada. Activa **Invocar Phi Chat con Mayús Mayús Mayús** en **Configuración → Phi e IA → Phi Sentinel** y luego presiona Mayúsculas (⇧) tres veces desde cualquier aplicación. Funciona como el elemento de la barra de menús, así que las mismas teclas vuelven a ocultar la ventana. El atajo funciona a través de Phi Sentinel, que necesita el permiso de Accesibilidad de macOS para detectar las pulsaciones y lo solicita cuando activas el atajo.
- **Desde una notificación de tarea.** Cuando una tarea informa de algo que merece tu atención, Phi puede mostrar una tarjeta de notificación propia, distinta de las notificaciones de macOS. Su botón **Ver detalles** abre esa conversación en Phi Chat. Consulta [Automatización y Phi Link](/es/automation/#notifications).
- **Desde el Dock o el Finder.** Una vez que has abierto Phi Chat, también aparece como app en la carpeta **Phi Apps**, dentro de la carpeta Aplicaciones de tu carpeta de inicio, así que puedes dejarla en el Dock.

Phi Chat no necesita que haya una ventana del navegador abierta. Si Phi no está en ejecución, abrir Phi Chat lo inicia en segundo plano sin abrir ninguna ventana del navegador.

## Pasar una conversación a Phi Chat {#moving-a-conversation-over}

En la barra lateral, **Abrir en Phi Chat** está disponible cuando la conversación ya se ha guardado y el asistente no está a mitad de una respuesta. Al hacer clic, esa conversación se abre en Phi Chat, la barra lateral se contrae y queda lista para una conversación nueva.

Dos cosas que conviene saber antes de hacer clic:

- **El texto sin enviar se queda atrás.** Si has escrito algo o añadido adjuntos en la barra lateral sin enviarlos, Phi te pregunta antes de descartarlos. No se trasladan a Phi Chat.
- **Se reutiliza la ventana de Phi Chat abierta.** Si Phi Chat ya está abierto, cambia a esta conversación en lugar de abrir una segunda ventana. Lo que no hubieras enviado en esa ventana, y cualquier respuesta que todavía estuviera escribiendo, se pierde.

Para ir en sentido contrario, haz clic en **Abrir en la barra lateral** en la barra superior de Phi Chat. Phi vuelve a abrir la página web con la que se usó la conversación por última vez, en su Espacio y Perfil originales, y continúa la conversación en la barra lateral de esa página. La conversación también sigue abierta en Phi Chat. El botón no está disponible si la conversación nunca se ha usado con una página web o si su Espacio o Perfil original ya no existe, y al pasar el puntero por encima te indica cuál es el caso.

## Conversaciones de todos los Perfiles {#conversations-from-every-profile}

Las conversaciones pertenecen al [Perfil](/es/spaces/) en el que se iniciaron. La barra lateral las mantiene separadas: en un Perfil dado muestra las conversaciones de ese Perfil, más las que no pertenecen a ningún Perfil, y nada de tus otros Perfiles.

Phi Chat es el único lugar que las muestra todas. Abre el menú que hay encima de la lista de conversaciones para elegir qué ves:

- **Todas**, todas las conversaciones.
- **Tareas**, las conversaciones en las que el asistente creó una tarea. Consulta [Tareas y conversaciones no leídas](#tasks-and-unread-conversations).
- **Por Perfil**, ya sea **Sin Perfil** o uno de tus Perfiles, que aparece como **Perfil "Trabajo"** para no confundirlo con una categoría del mismo nombre.
- **Categorías**, las categorías que has creado, más **Sin categoría**.

Elegir un Perfil aquí solo filtra la lista. Nunca mueve una conversación a otro Perfil, y abrir una conversación en Phi Chat no cambia el Perfil al que pertenece. A una conversación sin Perfil se le puede asignar uno con **Mover a un Perfil** en su menú, pero no hay forma de volver a sacarla de él.

Si eliminas un Perfil, sus conversaciones se conservan. Pierden sus categorías y aparecen en **Sin categoría** en Phi Chat. Si las funciones de IA están desactivadas en ese momento, eso ocurre cuando vuelvan a activarse.

## Encontrar y organizar conversaciones

La lista muestra primero las conversaciones con actividad más reciente, de 50 en 50. Haz clic en **Cargar más** al final para ver las más antiguas.

- **Busca** con la lupa de la parte superior de la lista, o presiona Comando (⌘) + K. La búsqueda compara los títulos de las conversaciones, no los mensajes que contienen.
- **Inicia una conversación nueva** con **Nuevo chat**. Se añade a la lista en cuanto envías su primer mensaje.
- **Cambia el nombre, clasifica o elimina** una conversación desde el menú **…** de su fila. **Eliminar** no se puede deshacer.
- **Vuelve a una página** con **Volver a la última página** en ese mismo menú, que funciona como [la versión de la barra lateral](/es/ai/#going-back-to-a-page).

### Categorías

Las categorías son tus propias etiquetas para las conversaciones, compartidas entre todos tus Perfiles. Una conversación puede estar en varias a la vez.

- Crea una con el botón **+** del menú que hay encima de la lista, o con **Nueva categoría** al final de cualquier submenú **Categorías**, que además añade a ella la conversación en la que estás.
- Marca o desmarca categorías desde **Categorías** en el menú **…** de una conversación, o en el menú de la barra superior del propio chat. Los cambios se aplican a medida que haces clic.
- Para cambiar el nombre de una categoría o eliminarla, selecciónala en el menú y abre su propio menú. Eliminar una categoría no elimina sus conversaciones. Cualquier conversación que se quede sin categoría pasa a **Sin categoría**.

**Sin categoría** viene integrada. Reúne todas las conversaciones que no tienen categoría, y no se puede cambiar de nombre ni eliminar.

### Trabajar con varias a la vez

Para actuar sobre varias conversaciones juntas, elige **Seleccionar** en el menú **…** de una conversación, o haz clic con Comando (⌘) en una fila. El clic con Mayúsculas (⇧) selecciona un intervalo. Una barra sustituye al encabezado de la lista, y en ella puedes usar **Seleccionar todo**, cambiar las **Categorías** de toda la selección, **Eliminar** las conversaciones o hacer clic en **Listo** (o presionar Esc) para terminar.

**Seleccionar todo** selecciona las conversaciones cargadas en ese momento en la lista. Las que siguen detrás de **Cargar más** no se incluyen, así que el recuento que ves es exactamente lo que se verá afectado.

## Tareas y conversaciones no leídas {#tasks-and-unread-conversations}

Cuando le pides al asistente que haga algo en segundo plano o de forma programada, la tarea informa en la conversación donde lo pediste. Phi Chat te ayuda a estar al día con esos informes:

- **Un punto azul y el título en negrita** indican que una tarea ha informado en esa conversación desde la última vez que la abriste.
- **Un icono de reloj** después del título indica que la conversación tiene tareas que siguen activas.
- **La vista Tareas** reúne todas las conversaciones en las que el asistente creó una tarea. Las conversaciones de antes de que las tareas se vincularan a su conversación no aparecen ahí.

Cómo es un informe, y cómo gestionar la tarea que hay detrás, se explica en [Automatización y Phi Link](/es/automation/#tasks-report-back-to-their-conversation).

## Conviene saber

- **Phi Chat forma parte de Phi Browser.** Salir de Phi Chat, con Comando (⌘) + Q o desde su menú, cierra solo Phi Chat, y las ventanas del navegador siguen abiertas. Salir de Phi desde una ventana del navegador también cierra Phi Chat.
- **Los enlaces se abren en el navegador.** Un enlace en el que haces clic en Phi Chat se abre en una ventana del navegador, en el Perfil que usaste por última vez, siguiendo tus [Reglas de URL](/es/spaces/#url-rules-route-matching-sites-automatically).
- **Desactivar la IA lo cierra.** Con las funciones de IA desactivadas en **Configuración → Phi e IA**, Phi Chat se cierra, su app se quita de la carpeta **Phi Apps** y no se puede abrir. Tus conversaciones no se eliminan, y puedes volver a abrir Phi Chat cuando las funciones de IA vuelvan a estar activadas.
- **Tus preguntas siguen yendo a un modelo.** Phi Chat es el mismo asistente que la barra lateral, así que lo que preguntas se trata de la misma manera. Consulta [A dónde van tus preguntas](/es/ai/#where-your-questions-go).

## Próximos pasos

- [Conoce a tu asistente](/es/ai/), hablar con él en la barra lateral y llevar pestañas a una conversación.
- [Automatización y Phi Link](/es/automation/), tareas que se ejecutan en segundo plano e informan de vuelta.
- [Espacios y Perfiles](/es/spaces/), cómo los Perfiles mantienen las cosas separadas.
