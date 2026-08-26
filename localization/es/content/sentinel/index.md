---
description: "Conoce Phi Sentinel, el compañero de la barra de menús de macOS que mantiene la automatización en marcha y puede dirigir algunas tareas de IA a través de la IA privada en tu Mac."
---

# Phi Sentinel

Phi Sentinel es una pequeña app complementaria que vive en la **barra de menús** de macOS, separada del navegador. Mantenerla aparte es deliberado: el navegador se mantiene ligero mientras una capa silenciosa en segundo plano sigue trabajando incluso cuando no hay ninguna ventana abierta. Cumple dos funciones principales: mantiene tu automatización en marcha y aloja la **IA privada**.

## Mantener la automatización en marcha

Parte de lo que hace Phi está pensado para sobrevivir al momento en que lo pediste. Las [tareas programadas](/es/automation/#scheduled-tasks) tienen que seguir ejecutándose según su propio horario incluso después de que cierres la ventana del navegador, y para eso está Phi Sentinel. Ejecuta esas tareas, conserva tu historial de tareas de IA y permite que la automatización continúe en segundo plano, de modo que una comprobación de precios cada pocas horas, o una página que estás vigilando, sigue en marcha haya o no una ventana del navegador abierta.

## IA privada

Normalmente, las tareas de IA de Phi las gestiona **Phi Cloud**. La **IA privada** es la opción de pasar algunas de ellas a **tu propio Mac**, o a un proveedor de modelos que tú elijas, para que ese trabajo nunca salga de tu equipo.

Es **de activación voluntaria y viene desactivada de forma predeterminada**. Cuando la activas, obtienes algunas cosas a cambio:

- **Privacidad.** Para las tareas que se ejecutan localmente, los datos se quedan en tu Mac y no se envían a un modelo en la nube.
- **Sin conexión.** Esas tareas siguen funcionando sin conexión a internet.
- **Sin cargo por petición.** Ejecutar en tu propio hardware no conlleva cargos por uso.

### Funciona tarea por tarea

La IA privada no es todo o nada. Se aplica tarea por tarea, y Phi es honesto sobre cuáles puede asumir. Con el modelo que configura para ti, **Memoria** y **Búsqueda de datos** se ejecutan en tu Mac de forma predeterminada, mientras que **Chat** y **Tareas web** se quedan en **Phi Cloud**, porque necesitan un modelo más potente que el ligero incluido para el trabajo en segundo plano, y solo pasan al dispositivo si instalas uno más grande. La pantalla de IA privada muestra esto como cobertura, es decir, cuántas de tus tareas de IA se ejecutan de forma privada frente a las que siguen yendo a Phi Cloud, para que siempre sepas dónde se realiza cada tipo de trabajo.

### Usa tu propio proveedor

Los modelos en el dispositivo no son la única opción. También puedes apuntar una tarea a un proveedor de modelos que administres tú, por ejemplo **Ollama**, **LM Studio** o cualquier punto de conexión compatible con OpenAI, y Phi dirigirá esa tarea allí en lugar de a Phi Cloud.

### Qué necesitas

La IA privada funciona mejor en un Mac con **Apple Silicon** y al menos **16 GB de RAM**. Cuando la activas, la configuración comprueba tu hardware y el espacio libre en disco y descarga lo que necesita antes de encender los modelos locales.

### Cómo activarla

Abre Phi Sentinel desde la barra de menús, busca **IA privada** en su configuración y actívala. A partir de ahí te guía por la configuración y te muestra qué tareas han pasado al dispositivo cuando está lista.

## Mantener el control

La IA privada profundiza en el enfoque de Phi de dar prioridad a lo local: permite que la propia IA se ejecute en tu equipo, no solo tu memoria. Para saber dónde viven tus datos y qué recopila Phi y qué no, consulta [Privacidad y tus datos](/es/privacy/).

## Próximos pasos

- [Automatización y Phi Link](/es/automation/), acciones bajo demanda, tareas programadas y cómo usar Phi desde Telegram.
- [Privacidad y tus datos](/es/privacy/), dónde viven tus datos y cómo mantener el control.
- [Preguntas frecuentes](/es/faq/#phi-sentinel), respuestas rápidas sobre Phi Sentinel.
