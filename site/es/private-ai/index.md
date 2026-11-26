---
description: "Entiende la IA privada: qué es Phi Cloud, cómo se relaciona con tus propios proveedores de IA y cómo ejecutar tareas de IA en tu Mac o con un servicio que tú elijas, como Ollama o LM Studio."
---

# IA privada

Las funciones de IA de Phi usan **Phi Cloud** de forma predeterminada. La **IA privada** te permite decidir, tarea por tarea, quién se encarga de cada tipo de trabajo de IA: Phi Cloud, un modelo descargado en este Mac o un proveedor de IA que conectes tú mismo, como Ollama, LM Studio, OpenAI u OpenRouter.

La IA privada viene desactivada de forma predeterminada. Si nunca la activas, todas las funciones de IA funcionan como siempre y usan Phi Cloud.

## El asistente, Phi Cloud y los proveedores de IA {#assistant-phi-cloud-and-providers}

Es fácil confundir estas tres cosas, así que conviene separarlas primero:

- **El asistente** es al que le pusiste nombre. Es el agente de Phi: averigua lo que le pides y decide qué hacer, ya sea leer una página, ejecutar una Habilidad del navegador, actuar en el navegador o crear una tarea. Es el mismo asistente sea cual sea el modelo que use, y tus conversaciones, tu Memoria y tus tareas no cambian con el modelo.
- **Un modelo** es el "cerebro" que el asistente toma prestado para pensar. En cada paso, el asistente envía a un modelo lo que necesita, y el modelo responde.
- **Una fuente de IA** decide dónde se ejecuta ese modelo. Hay tres tipos:
  - **Phi Cloud**, el servicio de IA integrado en Phi. No es un agente ni un modelo concreto. Es un conjunto de modelos en la nube a los que Phi se conecta y que administra por ti. Usa tu inicio de sesión de Phi, no necesita clave de API y no te pide que elijas un modelo.
  - **Modelos locales**, modelos descargados en este Mac que se ejecutan en este Mac.
  - **Tus proveedores**, servicios de IA que conectas tú mismo, con tu propia dirección, cuenta o clave de API.

Así que Phi Cloud ocupa el mismo lugar que Ollama u OpenAI: es una respuesta a "¿dónde se ejecuta el modelo del asistente?". La diferencia es que Phi Cloud viene integrado y funciona desde el primer momento, mientras que los demás los configuras tú.

### Cómo se comparan las fuentes {#comparing-sources}

|                              | Phi Cloud                                                            | Modelos locales                                                              | Tus proveedores locales (Ollama, LM Studio)                  | Tus proveedores en la nube (OpenAI, OpenRouter, Codex y otros) |
| ---------------------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------ | -------------------------------------------------------------- |
| Qué necesitas                | Nada más que iniciar sesión en Phi                                   | Un paso de configuración, que los descarga                                   | Ollama o LM Studio instalado y en ejecución                  | Una cuenta o una clave de API de ese servicio                  |
| A dónde va tu contenido      | A través de Phi, al proveedor de modelos que usa Phi                 | A ningún sitio. Se queda en este Mac                                         | A la dirección que configures, normalmente este Mac o tu red | Directamente desde tu Mac a ese servicio                       |
| Con qué cuenta llega         | Con la de Phi. Al proveedor de modelos no se le dice quién eres      | No aplica                                                                    | No aplica                                                    | Con la tuya, a través de tu propia cuenta o clave              |
| Precio                       | Incluido con Phi, dentro de tu [límite de uso](/es/ai/#usage-limits) | Gratis, usando la memoria y la capacidad de proceso de este Mac              | Gratis, usando el equipo en el que se ejecuta                | Los precios propios de ese servicio                            |
| Cuenta para el límite de Phi | Sí                                                                   | No                                                                           | No                                                           | No                                                             |
| Funciona sin conexión        | No                                                                   | Sí                                                                           | Sí, cuando se ejecuta en este Mac                            | No                                                             |
| Calidad                      | Constante, adecuada para todas las tareas                            | Depende del tamaño del modelo, normalmente inferior a los modelos en la nube | Depende del modelo que elijas                                | Depende del modelo que elijas                                  |

Para saber cómo trata Phi Cloud tu contenido, consulta [Privacidad y tus datos](/es/privacy/). Cuando usas un proveedor en la nube propio, se aplica la política de privacidad de ese proveedor.

## Cuándo usa Phi tu proveedor {#when-phi-uses-your-provider}

Añadir un proveedor no cambia nada por sí solo. Phi solo lo usa cuando se cumplen estas dos condiciones:

1. En **IA privada → Tareas de IA**, has elegido uno de los modelos de ese proveedor como fuente de una tarea.
2. El interruptor de **IA privada** está activado.

Cualquier tarea que no hayas cambiado sigue usando Phi Cloud. Desactivar la IA privada devuelve todas las tareas a Phi Cloud de inmediato, pero tus elecciones se conservan, así que al volver a activarla se restauran sin repetir la configuración.

## Elegir una fuente para cada tarea {#choosing-a-source-for-each-task}

La IA privada no es todo o nada. La ajustas tarea por tarea, y la parte superior de la página muestra cuántas tareas no están en Phi Cloud, por ejemplo **Se ejecutan en privado: 2 de 4 tareas de IA**.

| Tarea de IA           | Qué abarca                                                                 | Fuentes que puedes elegir                                      |
| --------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------- |
| **Chat**              | Las respuestas en la barra lateral y en Phi Chat                           | Phi Cloud, modelos locales, tus proveedores, Codex             |
| **Memoria**           | El trabajo en segundo plano, como la Memoria de navegación y los resúmenes | Phi Cloud, modelos locales, tus proveedores, Codex             |
| **Tareas web**        | El asistente actuando en el navegador, y la automatización                 | Phi Cloud, modelos locales, tus proveedores, Codex             |
| **Búsqueda de datos** | La búsqueda en los datos que has conectado                                 | Solo Phi Cloud, o el modelo de búsqueda local que descarga Phi |

Junto a ellas hay algunas filas más:

- **Alternativa para visión.** Cuando el modelo que elegiste para una tarea no puede leer imágenes, las imágenes van al modelo configurado aquí. Empieza como **Sin configurar**.
- **Organización de pestañas con IA** la gestiona Apple Intelligence en macOS y no se puede cambiar. No aparece en los Mac sin Apple Intelligence.
- **La generación de imágenes** siempre usa Phi Cloud.

Cuando cambias una tarea a otra fuente, Phi prueba primero ese modelo. Si la prueba falla, la tarea vuelve a su fuente anterior y se te indica por qué.

En cuanto Chat usa una fuente distinta de Phi Cloud, el chat muestra **Estás usando IA privada**, porque la calidad de las respuestas puede diferir de la de los modelos en línea.

## Activar la IA privada {#turning-on-private-ai}

Hay dos formas de llegar a la configuración de la IA privada:

- En [Phi Chat](/es/phi-chat/), haz clic en el botón de configuración (el engranaje) de la barra superior y elige **IA privada**.
- En el navegador, ve a **Configuración → Phi e IA → Phi Sentinel → IA privada**, que abre la misma página en Phi Chat.

La primera vez que activas el interruptor, Phi comprueba si este Mac puede ejecutar modelos locales:

- **Si puede**, la ventana de configuración indica el tamaño de la descarga, cuánta memoria usan aproximadamente los modelos mientras se ejecutan y qué tareas pasarán a este Mac. Haz clic en **Iniciar configuración** y Phi instala el entorno de ejecución local, descarga los modelos, los inicia y los verifica. Puedes usar **Minimizar** para ocultar la ventana y dejar que la configuración continúe en segundo plano. Hasta que termine, todas las funciones de IA siguen usando Phi Cloud.
- **Si no puede**, la ventana te dice por qué. Aun así puedes hacer clic en **Usar tu propio servicio de IA** para conectar tus propios proveedores sin modelos locales.

### Requisitos {#requirements}

| Elemento               | Requisito                                                           |
| ---------------------- | ------------------------------------------------------------------- |
| Chip                   | Apple Silicon. Los Mac con Intel no pueden ejecutar modelos locales |
| Memoria                | Al menos 16 GB                                                      |
| Espacio libre en disco | Al menos 10 GB, y al menos 2 GB más que la propia descarga          |

Nada de esto se aplica si solo conectas tus propios proveedores, como Ollama en otro equipo de tu red, u OpenAI.

### Qué instala la configuración {#what-setup-installs}

Actualmente la configuración descarga dos modelos, que juntos usan unos 7 GB de memoria mientras se ejecutan:

- **Gemma 4 E4B (4 bits)**, para **Memoria**.
- **BGE-M3**, para **Búsqueda de datos**.

**Chat** y **Tareas web** se quedan en Phi Cloud. Esas dos necesitan un modelo que maneje de forma fiable contextos largos y llamadas a herramientas, y Phi solo las pasa automáticamente a este Mac cuando hay disponible un modelo local de 20 000 millones de parámetros o más. El modelo Gemma que descarga la configuración tiene unos 4000 millones: bueno para el trabajo en segundo plano, no para llevar una conversación. Aun así puedes cambiar Chat a ese modelo a mano en **Tareas de IA**, siempre que supere la prueba. Cuando la configuración termina, te dice exactamente qué tareas se ejecutan ahora en este Mac.

Después de la configuración, el índice que usa la Memoria para encontrar elementos relacionados se sigue creando en Phi Cloud. Si quieres que eso también se haga en este Mac, elige a mano una vez el modelo local para **Búsqueda de datos**, y ambos pasan a este Mac.

## Conectar Ollama o LM Studio {#connecting-ollama-or-lm-studio}

Ollama y LM Studio son apps gratuitas para ejecutar modelos abiertos en tu propio equipo. Las dos vienen integradas en Phi como proveedores, de forma predeterminada en `http://127.0.0.1:11434` para Ollama y en `http://127.0.0.1:1234/v1` para LM Studio.

1. Instala y abre Ollama o LM Studio, y descarga un modelo (consulta [Modelos recomendados](#recommended-models)).
   - Ollama: ejecuta `ollama pull <model>` en Terminal, por ejemplo `ollama pull gpt-oss:20b`.
   - LM Studio: busca un modelo en la app, descárgalo e inicia el servidor local en la página **Developer**.
2. En Phi Chat, abre **Configuración → Proveedores de IA** y elige **Ollama** o **LM Studio**.
3. Activa **Usar este proveedor**. Si el servicio se ejecuta en otro equipo de tu red, cambia **URL base** por la dirección de ese equipo.
4. Haz clic en **Cargar** para obtener sus modelos. En **Acceso a los modelos**, elige **Permitir todos los modelos**, o **Solo modelos seleccionados** y marca los que quieras.
5. Elige un modelo, haz clic en **Prueba** y, cuando indique que la conexión se ha realizado correctamente, haz clic en **Guardar cambios**.
6. Vuelve a **IA privada** y, en **Tareas de IA**, elige ese modelo para la tarea que quieras mover, como **Chat**.
7. Activa el interruptor de **IA privada**.

Para cualquier otro servicio con una API compatible con OpenAI, usa **Agregar proveedor personalizado** e introduce un nombre, la URL base y una clave de API si el servicio la necesita.

Conviene saber:

- La URL base puede ser `http` o `https`, y la clave de API es opcional, porque los servicios locales normalmente no la necesitan. Una clave enviada a una dirección `http` viaja sin cifrar, así que usa `https` para todo lo que no esté en tu propio Mac o en tu red.
- Ollama o LM Studio tiene que seguir abierto. Si el equipo entra en reposo o la app se cierra, las tareas afectadas siguen el [ajuste para cuando una fuente local no está disponible](#when-a-local-source-is-unavailable).
- Las tareas web y las conversaciones largas manejan mucho texto. Si las respuestas llegan incompletas, o el asistente no consigue terminar una acción, aumenta la longitud de contexto, por ejemplo a 32K: en los ajustes de Ollama con **Context length**, o en LM Studio con **Context Length** al cargar el modelo. Un contexto más largo usa más memoria.
- Para que otros equipos de tu red puedan llegar a Ollama, Ollama tiene que escuchar en la dirección de red de ese equipo (`OLLAMA_HOST=0.0.0.0`).

## Modelos recomendados {#recommended-models}

Los modelos abiertos avanzan deprisa, así que toma los nombres de abajo como ejemplos. Un modelo más reciente del mismo tamaño funciona igual de bien. Hay dos cosas que importan más: el modelo tiene que ser lo bastante grande y tiene que caber en la memoria. Un modelo usa aproximadamente su tamaño de descarga en memoria mientras se ejecuta, más unos pocos GB, y macOS y tus otras apps también necesitan espacio.

| Memoria de tu Mac | Sugerencia                                                                                                                                                                      |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 16 GB             | Usa la configuración para que Memoria y Búsqueda de datos se ejecuten en este Mac, y deja Chat y Tareas web en Phi Cloud. Con esta memoria no cabe un modelo adecuado para Chat |
| 32 GB             | Puedes ejecutar un modelo de la clase de 20 000 millones de parámetros para Chat, por ejemplo **gpt-oss-20b** (Ollama: `gpt-oss:20b`) o **Qwen3 30B** (Ollama: `qwen3:30b`)     |
| 64 GB             | Puedes elegir un modelo más estable de la clase de 30 000 millones de parámetros, por ejemplo **Qwen3 32B** (Ollama: `qwen3:32b`), con margen para un contexto más largo        |
| 128 GB o más      | Puedes ejecutar un modelo de la clase de 100 000 millones de parámetros, por ejemplo **gpt-oss-120b** (Ollama: `gpt-oss:120b`), que se acerca más a los modelos en la nube      |

Por tarea:

- **Chat y Tareas web:** elige un modelo de 20 000 millones de parámetros o más que admita llamadas a herramientas (llamadas a funciones). Las tareas web son las que más dependen de las llamadas a herramientas, y los modelos pequeños a menudo fallan con ellas.
- **Alternativa para visión:** elige un modelo que pueda leer imágenes, por ejemplo Gemma 3 12B (Ollama: `gemma3:12b`) o Qwen2.5-VL 7B (Ollama: `qwen2.5vl:7b`).
- **Memoria:** el modelo Gemma de la configuración es suficiente, y normalmente no hay motivo para cambiarlo.
- **Búsqueda de datos:** solo el modelo de búsqueda local que descarga Phi, o Phi Cloud.

Por grande que sea, un modelo local normalmente se queda por debajo de los modelos de vanguardia que hay detrás de Phi Cloud. Si la calidad de las respuestas te importa más que mantener el contenido en tu Mac, dejar Chat y Tareas web en Phi Cloud es una opción sensata.

## Cuando una fuente local no está disponible {#when-a-local-source-is-unavailable}

Cuando un modelo local, Ollama o LM Studio deja de responder, Phi sigue el ajuste **Cuando una fuente local o autoalojada no está disponible**:

- **Recurrir automáticamente a Phi Cloud (predeterminado)**. Las tareas afectadas usan Phi Cloud de forma temporal, así que las funciones de IA siguen funcionando. También significa que, durante ese tiempo, su contenido va a la nube.
- **Pausar las funciones de IA afectadas (nunca enviar datos a la nube)**. Las funciones afectadas se pausan hasta que la fuente local vuelva a responder.

Si activaste la IA privada para mantener el contenido en este Mac, elige la segunda opción.

Este ajuste solo abarca las fuentes locales y autoalojadas. Cuando falla un proveedor en la nube como OpenAI, OpenRouter o Codex, Phi no cambia a Phi Cloud.

Cuando algo va mal, la página de IA privada muestra **Requiere atención**, con un botón **Reiniciar el servicio local**.

## Usar Codex {#using-codex}

Si tienes una suscripción a ChatGPT y has iniciado sesión en Codex en este Mac, puedes usar esa suscripción como proveedor de IA. Ve a **Configuración → Proveedores de IA → Codex** y haz clic en **Conectar**. Phi usa el inicio de sesión que Codex ya guarda, sin copiar tus credenciales.

- Primero instala Codex y ejecuta `codex login` en Terminal. Phi no puede leer un inicio de sesión de Codex guardado en el llavero.
- Codex puede encargarse de Chat, Memoria, Tareas web y Alternativa para visión, pero no de Búsqueda de datos.
- Lo que hace Codex cuenta para los límites de tu suscripción a ChatGPT. Si se agotan, o el inicio de sesión deja de funcionar, Phi no cambia a otra fuente.

## Desactivar y restablecer {#turning-off-and-resetting}

- **Desactiva la IA privada** con su interruptor. Todas las tareas vuelven a Phi Cloud de inmediato, y los modelos descargados y tus elecciones se conservan.
- **Quita un proveedor** con **Quitar proveedor** en su página. Las tareas que lo usaban vuelven a Phi Cloud.
- **Restablece** con **Restablecer la configuración de IA** en **Configuración avanzada**. Devuelve todas las tareas a Phi Cloud, borra tus proveedores y sus claves de API, y elimina los modelos locales.

## Próximos pasos

- [Conoce a tu asistente](/es/ai/), lo que el asistente puede hacer por ti.
- [Phi Sentinel](/es/sentinel/), el servicio en segundo plano que ejecuta la IA privada.
- [Privacidad y tus datos](/es/privacy/), dónde viven tus datos y qué envía Phi.
