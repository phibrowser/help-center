---
description: "Descubre cómo gestiona Phi Browser las acciones bajo demanda, las tareas en segundo plano (Shadow Tasks), las tareas programadas, las aprobaciones, el trabajo de fondo de Phi Sentinel y las notificaciones de Phi Link."
---

# Automatización y Phi Link

«Agéntico» significa que la IA de Phi puede hacer más que responder preguntas. Puede actuar dentro del navegador, realizar tareas por ti y, en algunos casos, seguir haciéndolo a lo largo del tiempo. Funciona de tres maneras: actuar **ahora** (acciones bajo demanda), trabajar **en segundo plano** (Shadow Tasks) y ejecutarse **de forma programada** (tareas programadas).

## Acciones bajo demanda

Las acciones bajo demanda son tareas que el asistente realiza cuando se lo pides. En lugar de describirte los pasos para que los sigas tú, Phi hace el trabajo por sí mismo: navega por páginas, interactúa con sitios web y completa procesos de varios pasos, en la pestaña actual o en una nueva, mientras tú lo ves trabajar.

Ante cualquier cosa con consecuencias, no sigue adelante sin más. Se detiene y te pide **confirmación** antes de actuar, con un aviso sencillo de Confirmar o Denegar que se marca según lo arriesgado del paso, para que no pierdas de vista las acciones que importan.

## Tareas en segundo plano

A veces no quieres quedarte mirando. El agente puede ejecutar una tarea **suelta en segundo plano**, lo que llamamos una **Shadow Task**, de modo que siga trabajando sin ocupar tu conversación ni tu atención.

Una tarea en segundo plano:

- solo arranca cuando pides **explícitamente** la ejecución en segundo plano,
- corre por su cuenta, así que puedes seguir navegando o cerrar la conversación,
- se detiene y te pide **confirmación** si se encuentra con un paso arriesgado,
- informa de su progreso, de sus resultados y de los archivos que produzca en la página de **Tareas** de Phi Sentinel, así que los resultados no vuelven al chat por sí solos,
- **te avisa cuando termina**, algo especialmente práctico con [Phi Link](#phi-link) en el teléfono,
- se puede **cancelar** mientras corre, o **volver a ejecutar** cuando ha terminado.

## Tareas programadas {#scheduled-tasks}

Las tareas programadas son automatizaciones recurrentes que se ejecutan según el horario que definas. Por ejemplo, Phi puede vigilar el precio de un producto cada pocas horas, observar si una página cambia o repetir automáticamente otra tarea de navegador. En realidad son tareas en segundo plano que se repiten, y [Phi Sentinel](/es/sentinel/) las mantiene en marcha incluso con la ventana del navegador cerrada. Aquí es donde Phi se parece menos a un navegador con funciones de IA y más a un sistema persistente que sigue trabajando cuando no lo miras.

## Mantener el control

El agente está hecho para actuar con tu conocimiento, no a tus espaldas. Te pide confirmación antes de las acciones con consecuencias, las tareas en segundo plano solo arrancan cuando las pides y se pausan para pedir confirmación en los pasos arriesgados, y puedes detener una tarea en marcha en cualquier momento. Para saber dónde viven tus datos y cómo se gestiona la IA, consulta [Privacidad y tus datos](/es/privacy/).

## Phi Sentinel

Las tareas programadas necesitan seguir ejecutándose aunque la ventana del navegador esté cerrada. **Phi Sentinel** es la app en segundo plano de la barra de menús de macOS que lo hace posible, y además aloja la IA privada, la opción de ejecutar parte de la IA en tu propio Mac. Consulta [Phi Sentinel](/es/sentinel/) para ver el panorama completo.

## Phi Link

**Phi Link** conecta Phi con Telegram para que uses tu asistente desde el teléfono y recibas novedades cuando estés lejos de tu Mac. Con él puedes:

- chatear con tu asistente desde el teléfono,
- recibir avisos cuando las tareas terminan bien o fallan,
- continuar flujos de trabajo lejos del navegador.

El bot oficial de Phi Link ya no está disponible. Para usar Phi desde Telegram, conecta tu propio bot de Telegram. Puedes elegir su nombre y su avatar.

### Configurar tu bot

1. Abre **@BotFather** en Telegram y sigue sus instrucciones para crear un bot. Copia el **Bot Token** que te proporciona.
2. Inicia sesión en Phi y abre **Configuración → Phi e IA → Phi Link**.
3. En **Bot de Telegram personalizado**, pega tu token, verifícalo y guárdalo.
4. Abre tu bot en Telegram y envía un mensaje para probar la conexión.

Tu bot es para tu uso personal. No lo compartas con otras personas ni las invites a usarlo. Mantén tu Bot Token en privado. Si la verificación falla, revisa el token y el error que aparece en la configuración. Un conflicto de webhook puede indicar que otra app ya está usando el bot.

### Si usabas el bot oficial

Crea y configura tu propio bot siguiendo los pasos anteriores. Una vez que lo hayas probado, puedes desvincular el antiguo bot oficial en la configuración. Desvincular el bot oficial no elimina tu bot personalizado.

### Comprobar la conexión

**Vinculado** significa que el servicio del bot está en ejecución. Envía un mensaje en Telegram para comprobar que recibes una respuesta. Si necesitas cambiar de bot, elimina el bot actual en la configuración y añade el nuevo.
