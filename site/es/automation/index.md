---
description: "Descubre cómo gestiona Phi Browser las acciones bajo demanda, las tareas en segundo plano y programadas, la vigilancia de una página, los informes de tareas en tus conversaciones, las aprobaciones, Phi Sentinel y Phi Link."
---

# Automatización y Phi Link

«Agéntico» significa que la IA de Phi puede hacer más que responder preguntas. Puede actuar dentro del navegador, realizar tareas por ti y, en algunos casos, seguir haciéndolo a lo largo del tiempo. Funciona de tres maneras: actuar **ahora** (acciones bajo demanda), trabajar **en segundo plano** (tareas en segundo plano) y ejecutarse **de forma programada** (tareas programadas).

## Acciones bajo demanda

Las acciones bajo demanda son tareas que el asistente realiza cuando se lo pides. En lugar de describirte los pasos para que los sigas tú, Phi hace el trabajo por sí mismo: navega por páginas, interactúa con sitios web y completa procesos de varios pasos, en la pestaña actual o en una nueva, mientras tú lo ves trabajar.

Ante cualquier cosa con consecuencias, no sigue adelante sin más. Se detiene y te pide **confirmación** antes de actuar, con un aviso sencillo de Confirmar o Denegar que se marca según lo arriesgado del paso, para que no pierdas de vista las acciones que importan.

## Tareas en segundo plano

A veces no quieres quedarte mirando. El agente puede convertir una petición en una **tarea** que se ejecuta en segundo plano, de modo que siga trabajando sin ocupar tu conversación ni tu atención.

Una tarea:

- solo arranca cuando la pides **explícitamente**,
- corre por su cuenta, así que puedes seguir navegando o cerrar la conversación,
- se detiene y te pide **confirmación** si se encuentra con un paso arriesgado,
- **informa en la conversación** en la que la pediste, consulta [más abajo](#tasks-report-back-to-their-conversation),
- sigue escribiendo en el idioma de esa conversación. Pídeselo al asistente si la quieres en otro idioma.

## Tareas programadas {#scheduled-tasks}

Las tareas programadas son automatizaciones recurrentes que se ejecutan según el horario que definas. Por ejemplo, Phi puede vigilar el precio de un producto cada pocas horas, observar si una página cambia o repetir automáticamente otra tarea de navegador. En realidad son tareas en segundo plano que se repiten, y [Phi Sentinel](/es/sentinel/) las mantiene en marcha incluso con la ventana del navegador cerrada. Aquí es donde Phi se parece menos a un navegador con funciones de IA y más a un sistema persistente que sigue trabajando cuando no lo miras.

### Vigilar una página

La forma más rápida de crear una es hacer clic derecho en cualquier parte de una página web (no sobre un texto seleccionado ni sobre un enlace) y elegir **Pedirle a [tu asistente] que vigile esta página**. Se abre la barra lateral con una conversación nueva, y el asistente lee la página y te hace algunas preguntas, de una en una: por qué la vigilas, qué merece que te avise, cada cuánto comprobarla y, si quieres, cómo informarte y cuándo parar.

Después crea una tarea programada que informa **solo de los cambios**. La primera comprobación informa de la página tal como está ahora, como punto de partida, y las siguientes solo dicen algo cuando ha cambiado alguna cosa. Para cambiar, pausar o eliminar la vigilancia más adelante, pídelo en la misma conversación.

## Las tareas informan en su conversación {#tasks-report-back-to-their-conversation}

Una tarea creada en una conversación publica cada ejecución completada o fallida en esa conversación, como respuesta del asistente. La conversación se marca como no leída y sube al principio de tu lista, y [Phi Chat](/es/phi-chat/#tasks-and-unread-conversations) reúne todas estas conversaciones en su vista **Tareas**.

Encima de cada informe hay una franja con el nombre de la tarea, el número de ejecución y si quedó **Completada** o **Fallida**. Su menú **…** incluye:

- **Ejecutar ahora**, para volver a ejecutar la tarea de inmediato,
- **Dejar de informar aquí**, para que la tarea siga ejecutándose pero deje de publicar en esta conversación. Cambia a **Volver a informar aquí** una vez que lo has usado.

### Gestionar una tarea

Cuando una conversación tiene tareas, aparece en su barra superior un botón con un reloj y un número. Abre un panel que muestra, para cada tarea:

- su estado, como **En ejecución**, **Activa** (su programación sigue en marcha), **Pausada**, **Detenida** (se cumplió su condición de parada), **Finalizada** o **Manual** (no tiene programación),
- su programación, cuándo se ejecuta la próxima vez y cuándo se detiene, si tiene condición de parada,
- un interruptor **Informar en esta conversación**,
- **Qué informar**: **Cada ejecución**, o **Solo los cambios**, que no dice nada cuando no hay novedades. Los fallos se informan en ambos casos.

El menú **…** de la tarea incluye **Ejecutar ahora** y **Pausar programación** o **Reanudar programación**.

El panel no edita ni elimina tareas. Para cambiar lo que hace una tarea, o para eliminarla, pídeselo al asistente en la conversación de la tarea, o usa la página **Tareas** de Phi Sentinel.

### Cuando Phi no estaba en ejecución

Las tareas solo pueden ejecutarse mientras Phi está en ejecución. Si tu Mac estaba apagado o en reposo, o Phi estaba cerrado, una ejecución puede perderse o quedar interrumpida. Cuando Phi vuelve a iniciarse:

- una tarea que se ejecuta cada dos horas o con más frecuencia pasa a su siguiente ejecución, y esa ejecución menciona lo que quedó sin comprobar,
- para las demás tareas, Phi pregunta en la conversación de la tarea si quieres ejecutarla una vez ahora. El informe indica **No se ejecutó** o **Interrumpida**, con los botones **Ejecutar ahora** e **Ignorar** debajo, y también puedes responder con tus propias palabras.

La pregunta se retira cuando llega la siguiente ejecución programada de la tarea, o al cabo de un día si no tiene programación.

### Notificaciones {#notifications}

Cuando llega un informe a una conversación que no tienes abierta, Phi también puede mostrar una tarjeta de notificación con el nombre de la tarea y el comienzo del informe. La tarjeta es propia de Phi, no una notificación de macOS. Solo lo hace cuando el informe parece merecer la interrupción, así que una comprobación que no encontró nada nuevo no dice nada. **Ver detalles** abre la conversación en [Phi Chat](/es/phi-chat/).

## Mantener el control

El agente está hecho para actuar con tu conocimiento, no a tus espaldas. Te pide confirmación antes de las acciones con consecuencias, las tareas solo arrancan cuando las pides y se pausan para pedir confirmación en los pasos arriesgados, y en cualquier momento puedes pausar la programación de una tarea, hacer que deje de informar o pedirle al asistente que la cambie o la elimine. Para saber dónde viven tus datos y cómo se gestiona la IA, consulta [Privacidad y tus datos](/es/privacy/).

Lo que el agente hace siguiendo tus instrucciones lo hace como tú, desde tu navegador, con tus cuentas. Algunos sitios no aceptan bien la automatización. Reddit es el ejemplo conocido: las cuentas detectadas como automatizadas acaban restringidas o bloqueadas. Si una tarea trabaja dentro de un sitio así, ese riesgo lo asumes tú.

## Phi Sentinel

Las tareas programadas necesitan seguir ejecutándose aunque la ventana del navegador esté cerrada. **Phi Sentinel** es la app en segundo plano de la barra de menús de macOS que lo hace posible, y además aloja la IA privada, la opción de ejecutar parte de la IA en tu propio Mac. Consulta [Phi Sentinel](/es/sentinel/) para ver el panorama completo.

## Phi Link

**Phi Link** conecta Phi con Telegram para que uses tu asistente desde el teléfono y recibas novedades cuando estés lejos de tu Mac. Con él puedes:

- chatear con tu asistente desde el teléfono,
- recibir los resultados de las ejecuciones de tareas completadas,
- continuar flujos de trabajo lejos del navegador.

Puedes configurarlo de dos maneras:

- **Bot oficial de Phi Link**, el camino más directo: escanea un código QR, termina la configuración con un clic y listo.
- **Tu propio bot de Telegram**, para tener más control: crea un bot con el BotFather de Telegram, genera un token y pégalo en la configuración de Phi. Así puedes personalizar el nombre y el avatar del bot.

La misma identidad del asistente se mantiene, así que la experiencia es coherente entre el escritorio y el teléfono.
