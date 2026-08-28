---
description: "Descubre dónde guarda Phi Browser tus datos, qué no recopila, cómo funcionan la Memoria y el procesamiento de IA en la nube, qué incluyen las estadísticas de uso anónimas y cómo controlar o eliminar los datos de IA."
---

# Privacidad y tus datos

Phi está construido en torno a una arquitectura de prioridad local. La idea es simple: Phi puede conocerte bien sin que tu contexto personal se convierta en un activo propiedad de la nube.

## Dónde viven tus datos

Lo que Phi recuerda de ti, tu [Memoria](/es/memory/), se guarda localmente en tu dispositivo. Se construye ahí mientras navegas y está pensada para quedarse contigo, bajo tu control.

## Qué no recopila Phi

Phi nunca recopilará:

- tus datos de memoria,
- tus interacciones con la IA,
- tu contexto de navegación.

Phi no vende los datos derivados de tu navegación, y no usa tu memoria, tu contexto de navegación ni tus interacciones con la IA para entrenar modelos.

Un matiz que conviene conocer: para procesar tareas pueden usarse grandes modelos de lenguaje de proveedores como Anthropic, OpenAI, Google o SpaceXAI. Cuando usas **Phi Cloud**, el contenido que una petición necesita para ser respondida se envía al proveedor del modelo que elegiste, porque esa es la única forma en que un modelo puede responderla. Pasa a través de nosotros sin almacenarse, llega bajo nuestra cuenta y no bajo la tuya, y nunca se usa para entrenamiento. Con la **IA privada** no sale de tu Mac en absoluto. Tu memoria personal se queda en local en cualquiera de los dos casos, y nunca se trata como un activo propiedad de la nube.

## Qué sí envía Phi {#what-phi-does-send}

Prioridad local no significa silencio, y es mejor que leas esto aquí a que lo descubras en un registro de red.

- **Un pequeño recuento anónimo, siempre activo.** Phi cuenta cuántas instalaciones lo establecen como navegador predeterminado, usan Espacios, usan Perfiles, y que ocurrió un fallo. Solo recuentos, sin nada adjunto que apunte de vuelta a ti.
- **Estadísticas detalladas e informes de fallos, solo si los activas.** El ajuste es **Ayudar a mejorar las funciones y el rendimiento de Phi**, en la Configuración. Actívalo y Phi envía estadísticas de uso detalladas e informes de fallos, que llevan tu identificador de cuenta. Desactívalo y no se envía ninguno de los dos; solo continúan los recuentos anónimos de arriba.

Los informes de fallos van a Sentry y se conservan durante 90 días. Un informe de fallo puede incluir una instantánea de la memoria del proceso que falló, que puede contener de forma incidental fragmentos del contenido de una página o de texto que habías escrito. Esa es una de las razones por las que el interruptor está desactivado hasta que tú lo actives.

No hay ningún ajuste que desactive el recuento anónimo de base. Si quieres un navegador que no envíe absolutamente nada, compila el cliente de código abierto desde el código fuente.

La [Política de privacidad](https://phibrowser.com/privacy/) es la versión completa y autorizada de todo esto.

También puedes reducir aún más lo que sale de tu Mac. Con la **IA privada**, que se ejecuta a través de [Phi Sentinel](/es/sentinel/), algunas de esas tareas se ejecutan por completo en tu propia máquina, así que no necesitan ningún modelo en la nube.

## Estadísticas de uso {#usage-statistics}

Phi tiene un interruptor de telemetría: **Ayudar a mejorar las funciones y el rendimiento de Phi**. Está activado de forma predeterminada y, mientras lo esté, Phi envía estadísticas de uso anónimas a Phinomenon.

Las estadísticas tratan sobre el propio navegador: qué funciones se usan y cómo rinde la app. Nunca incluyen las páginas que visitas, su contenido, tu Memoria ni tus conversaciones de IA.

Cada informe lleva un identificador aleatorio creado para tu instalación. No tiene nada que ver con tu cuenta de Phi, y pertenece al navegador en su conjunto, no a ningún Espacio ni Perfil. Desactivar el interruptor elimina el identificador; volver a activarlo más tarde crea uno nuevo, de modo que tus informes antiguos y los nuevos no pueden vincularse.

Para cambiar el ajuste, abre `phi://settings` y busca en la sección **Tú y Phi**, justo debajo de la fila de tu cuenta. Al cambiar el interruptor aparece a su lado un botón **Reiniciar**, y la nueva elección surte efecto cuando Phi se reinicia.

## Mantén el control

La Memoria no es una caja negra. Puedes **ver, administrar y eliminar** lo que Phi recuerda, directamente dentro de Phi.

### Eliminar tu cuenta y tus datos

Lo haces tú mismo, en la app: **Configuración → Configuración adicional del navegador → tu nombre, en Tú y Phi → Eliminar cuenta y datos**. Elimina la cuenta y los datos guardados con ella, en tu Mac y en nuestros servidores, y no se puede deshacer. No necesitas escribir a nadie para ser olvidado.

Si ya desinstalaste Phi, instálalo de nuevo e inicia sesión con la misma cuenta para llegar a ese botón. Desinstalar borra lo que había en tu Mac, pero no cierra la cuenta. Si nunca iniciaste sesión, no hay cuenta y no queda nada que eliminar de nuestro lado.

### Desactivar la IA {#turning-ai-off}

Si quieres un navegador sin más, puedes desactivar todas las funciones de IA en **Configuración → Phi AI**. Desactivar la IA cierra tus conversaciones de IA y desconecta cualquier Conector de datos externos.

Tu Memoria no se elimina con este interruptor, y permanece en tu dispositivo. Si además quieres borrar lo que Phi recuerda, usa la opción de borrado de la página de Memoria; esa eliminación es permanente y no se puede deshacer.

## Navegar en privado

Para las sesiones que tampoco deben dejar nada en tu Mac, abre un [Espacio de incógnito](/es/incognito/) desde el menú **Archivo**. Su historial, sus cookies y sus datos de sitios viven solo en memoria, las funciones de IA quedan totalmente al margen, y cerrarlo destruye la sesión.

## Código abierto

El cliente de Phi para macOS es de código abierto bajo la licencia Apache-2.0, así que su comportamiento puede inspeccionarse en lugar de aceptarse por pura confianza. Para ser exactos sobre lo que eso cubre: la parte abierta es el cliente que escribimos nosotros, y este integra un motor Chromium que se distribuye como un framework precompilado. Chromium es a su vez un proyecto de código abierto, pero leer nuestro cliente no es lo mismo que haber leído cada línea que se ejecuta en tu Mac.
