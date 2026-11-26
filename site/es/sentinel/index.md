---
description: "Conoce Phi Sentinel, el gestor de los servicios en segundo plano de Phi en tu Mac, que ejecuta los servicios en los que se apoya el asistente, conserva sus datos y permite que las tareas programadas sigan ejecutándose después de cerrar el navegador."
---

# Phi Sentinel

Phi Sentinel gestiona los servicios en segundo plano de Phi en tu Mac. Gran parte de lo que hace el asistente ocurre fuera de la ventana del navegador: ejecutar las tareas programadas, construir tu Memoria, buscar en los datos que has conectado y enviar las peticiones de IA a donde tienen que ir. De ese trabajo se encarga un conjunto de servicios que se ejecutan en segundo plano, y Phi Sentinel hace que sigan funcionando correctamente.

Se instala con Phi Browser y, en el día a día, no tienes que hacer nada con él. En la configuración de Phi Chat, estos servicios se llaman simplemente **Servicios en segundo plano**.

## Qué hace {#what-it-does}

### Ejecutar los servicios en segundo plano {#running-background-services}

Dentro de Phi Sentinel hay un proceso llamado **Runner**, cuya única función es gestionar los servicios en segundo plano. Se ocupa de:

- **Iniciarlos y vigilarlos.** Inicia cada servicio cuando hace falta, comprueba con regularidad que funciona bien y lo reinicia cuando algo va mal.
- **Las actualizaciones.** Descarga e instala en segundo plano las nuevas versiones de los servicios. Antes comprueba la firma de cada actualización, y vuelve a la versión anterior si una nueva no funciona correctamente.
- **Transmitir tus ajustes.** Hace llegar las elecciones que haces en la configuración, como las fuentes de cada tarea en la [IA privada](/es/private-ai/), a los servicios que las necesitan.

El Runner solo mantiene los servicios en funcionamiento. No maneja tu contenido: tus conversaciones, páginas y datos los procesan los propios servicios y nunca pasan por el Runner.

Entre los servicios que gestiona están:

- **El servicio del asistente**, que conserva tus conversaciones y tareas, y ejecuta las tareas programadas y en segundo plano.
- **El servicio de Memoria**, que construye tu Memoria a partir de tu navegación.
- **El servicio de indexación de datos**, que indexa los datos que conectas para que Búsqueda de datos pueda encontrarlos.
- **El AI Gateway**, que envía cada petición de IA a la fuente que elegiste para ella. De forma predeterminada es Phi Cloud y, con la IA privada activada, puede ser un modelo local o un proveedor propio.
- **AI Guardrail**, que comprueba en este Mac si un texto contiene información sensible. Consulta más abajo.
- **Los modelos locales**, que solo se instalan y ejecutan después de configurar la IA privada.

### Mantener los secretos fuera de la Memoria {#ai-guardrail}

**AI Guardrail** es un servicio de detección que se ejecuta en tu Mac. Antes de que el servicio de Memoria guarde algo nuevo, le pide a AI Guardrail que lo compruebe. Si encuentra un secreto, como una contraseña, una clave de API, una clave privada, una frase de recuperación o un código de recuperación, el elemento entero se deja fuera de tu Memoria.

- La comprobación se hace por completo en este Mac. Lo que comprueba no se envía a ningún sitio.
- Solo deja fuera los secretos y nunca reescribe nada. Los datos personales corrientes, como nombres y números de teléfono, se guardan como siempre, y puedes revisarlos y eliminarlos en [Memoria](/es/memory/).

### Conservar tus datos {#keeping-your-data}

Los servicios guardan sus datos en tu Mac, en bases de datos locales: tus conversaciones, tus tareas y sus ejecuciones, tu Memoria y el índice de tus datos conectados.

En Phi Chat, en **Configuración → Copia de seguridad y actualizaciones**, puedes:

- **Exportar datos**, guardar una copia de tu configuración y tus datos para llevarla a otro Mac. Las claves de API de los proveedores no se incluyen.
- **Instantánea local**, guardar en este Mac una copia a la que puedes volver. Las instantáneas nunca salen de este Mac.

### Mantener las tareas en marcha tras cerrar el navegador {#keeping-tasks-running}

Las [tareas programadas](/es/automation/#scheduled-tasks) tienen que ejecutarse según su propio horario, haya o no una ventana del navegador abierta. Como Phi Sentinel se ejecuta por separado del navegador, una comprobación de precios cada pocas horas o una página que estás vigilando siguen en marcha después de que cierres la ventana del navegador.

## Comprobar los servicios en segundo plano {#checking-status}

Abre la configuración en Phi Chat:

- **General** muestra si los servicios en segundo plano funcionan correctamente y qué versión tienes, con **Reiniciar los servicios en segundo plano**.
- **Servicios** muestra el estado de cada servicio. Cuando indica **Todo funciona correctamente**, no tienes que hacer nada.
- **Registros** es para cuando algo va mal y quieres informar de ello. Haz clic en **Guardar** junto a **Registros de diagnóstico**, y Phi guarda un archivo ZIP en tu carpeta Descargas que puedes enviar al soporte de Phi.

En el navegador, en **Configuración → Phi e IA → Phi Sentinel**, puedes elegir si quieres **Abrir Phi Sentinel al iniciar sesión en tu Mac** y si quieres **Invocar Phi Chat con Mayús Mayús Mayús** (consulta [Phi Chat](/es/phi-chat/#opening-phi-chat)).

## Próximos pasos

- [IA privada](/es/private-ai/), ejecutar tareas de IA en tu Mac o con tu propio proveedor de IA.
- [Automatización y Phi Link](/es/automation/), acciones bajo demanda, tareas programadas y cómo usar Phi desde Telegram.
- [Privacidad y tus datos](/es/privacy/), dónde viven tus datos y cómo mantener el control.
- [Preguntas frecuentes](/es/faq/#phi-sentinel), respuestas rápidas sobre Phi Sentinel.
