---
description: "Permite que agentes de programación con IA como Claude Code controlen Phi Browser en sus propios Espacios de agente. Instala la habilidad phi-browser, observa a los agentes trabajar en directo y toma el control en cualquier momento."
---

# La habilidad phi-browser

La **habilidad phi-browser** conecta Phi con agentes de programación con IA que viven fuera del navegador: **Claude Code, Codex, Cursor, OpenClaw, Pi y Hermes**. Instálala en tu agente y este podrá controlar Phi directamente: abrir páginas, rellenar formularios, tomar capturas de pantalla, extraer datos, probar aplicaciones web, cualquier cosa que necesite un navegador real.

::: tip No es lo mismo que las Habilidades del navegador
Esta es una sola habilidad, en singular, y pertenece a tu agente de programación. Las **[Habilidades del navegador](/es/skills/)** son la dirección contraria: instrucciones que le enseñas al asistente propio de Phi, dentro del navegador. La habilidad phi-browser es algo que Phi le entrega a _tu agente_ para que use Phi como su navegador.
:::

Lo que la hace peculiar es _dónde_ trabaja el agente. No se apodera de tu ventana, y tampoco ejecuta aparte un navegador recortado. Trabaja en su propio **Espacio de agente**, una ventana oculta del navegador con tu estado de sesión real, mientras tú sigues navegando. Puedes verlo en directo, tomar el control en cualquier momento y devolverlo cuando termines.

## Espacios de agente

Phi está construido en torno a los [Espacios](/es/spaces/), áreas de trabajo separadas, cada una vinculada a un perfil con sus propios inicios de sesión. Cuando un agente de programación inicia una tarea, Phi le da un **Espacio de agente** dedicado: una ventana real del navegador, creada oculta, que aparece en tu selector de Espacios como un pequeño distintivo de robot (🤖) con un indicador de estado. Si hay varios agentes, cada uno recibe un distintivo numerado (R1, R2, y así sucesivamente) para que puedas distinguirlos.

Haz clic en el distintivo para ver al agente trabajar en tiempo real. Phi muestra las acciones del agente de forma nativa, así que el cursor se desliza hasta su objetivo, los clics producen una onda y los campos donde escribe parpadean, y puedes seguir exactamente lo que está haciendo. Mientras miras, la página ignora tus clics y tus pulsaciones de teclado, para que no puedas molestar al agente por accidente. La única puerta de entrada es el botón explícito **Tomar el control**.

Dos elementos de menú completan esto. **Ver → Transcripción del agente** abre una consola que muestra la narración, las acciones y la conversación del agente, y desde ahí puedes escribirle órdenes. **Ver → Vista automática del agente** sigue automáticamente al agente que esté operando en cada momento.

Los Espacios de agente son ordenados de forma predeterminada. Un Espacio efímero se cierra solo poco después de que la tarea quede inactiva, de modo que las tareas terminadas no se acumulan en tu selector. Un agente solo crea un área de trabajo duradera cuando se la pides explícitamente.

## Siempre puedes tomar el volante

Solo un lado controla un Espacio de agente a la vez, y tú siempre ganas. El indicador superpuesto en la parte superior de un Espacio de agente nombra al agente que conduce y ofrece los controles a quien tenga el volante:

- Mientras conduce el agente, **Tomar el control** lo detiene al instante, y cualquier acción que intente después se rechaza hasta que le devuelvas el control.
- Mientras conduces tú, **Devolver el control** devuelve el mando al agente, que continúa donde lo dejó, y **Finalizar** termina la tarea.

El relevo también funciona en la otra dirección. Cuando el agente llega a un paso que te corresponde a ti, como un inicio de sesión, un captcha, un código de verificación en dos pasos o una decisión con consecuencias, devuelve el control y Phi muestra un aviso, **"El agente te necesita"**, con un botón para saltar directamente al Espacio de agente. Haz el paso humano, pulsa **Devolver el control** y el agente continúa.

## Tus inicios de sesión, reutilizados deliberadamente

Un Espacio de agente está vinculado a uno de tus perfiles existentes, así que el agente navega con los sitios en los que ya has iniciado sesión. Esa es la idea: puede continuar desde donde tú estás en lugar de empezar con un navegador en blanco.

Tú decides hasta dónde llega eso. **Perfiles que los agentes pueden usar**, en la pestaña Desarrollador, restringe en qué perfiles pueden trabajar los agentes. Si los prohíbes todos, Phi crea un perfil "Agente" dedicado para que los agentes puedan seguir trabajando sin tocar tus inicios de sesión principales. Y cuando una tarea necesita iniciar sesión en algún sitio, el agente no te pide que pegues una contraseña: pasa por el [Administrador de contraseñas para agentes](/es/agent-passwords/), donde cada petición necesita tu aprobación.

## Lo que hace el agente es responsabilidad tuya

Esta es la parte que vale la pena leer dos veces, porque es fácil pasarla por alto cuando ves algo trabajar por sí solo.

Un agente que controla Phi actúa **como tú**, desde tu navegador, con tus sesiones. Lo que hace bajo tus instrucciones es tuyo, en nuestros servicios y en los de todos los demás, y los términos de los sitios que visita se te aplican exactamente igual que si hubieras hecho cada clic a mano.

**Algunos sitios no quieren agentes, y actuarán en consecuencia.** Muchos sitios tratan el acceso automatizado como una amenaza para su negocio, porque su contenido es su negocio, y lo detectan de forma agresiva. Reddit es el ejemplo conocido: las cuentas identificadas como automatizadas quedan restringidas o suspendidas, y esa decisión es suya, no nuestra. Apunta un agente a un sitio que no lo acepta y puedes perder tu cuenta allí, tu historial y todo lo que guardaras en ella. Ese riesgo es tuyo, y no es algo que podamos apelar ni deshacer en tu nombre.

**Las acciones con consecuencias las autorizas tú.** Un agente puede comprar cosas, enviar mensajes, enviar formularios y cambiar ajustes en servicios donde tienes la sesión iniciada. Revisa lo que está a punto de hacer antes de permitírselo. Cuando Phi te pide confirmación, esa confirmación hace un trabajo real.

Nuestros [Términos de uso](https://phibrowser.com/terms/) lo recogen en detalle.

## Cómo configurarla

Todo vive detrás del **Modo de desarrollador**, que está desactivado de forma predeterminada. Tres pasos:

1. **Activa el Modo de desarrollador** en **Configuración → General**. Esto revela la pestaña Desarrollador, que contiene el acceso de agentes, los permisos y el administrador de contraseñas.
2. **Instala la habilidad** desde **Configuración → Desarrollador → Instalar la habilidad phi-browser**. El botón **Añadir habilidad a…** lista cada agente compatible, o **Todos los agentes**, y enlaza la habilidad incluida dentro de Phi en la carpeta de habilidades de ese agente, de modo que se mantiene al día con cada actualización de Phi. Necesita Node 22 o más reciente, y conviene reiniciar un agente recién configurado. En Pi, basta con `/reload`.
3. **Permite que los agentes se conecten** con **Configuración → Desarrollador → Control de agentes → "Permitir que los agentes controlen Phi (CDP)"**. Se aplica de inmediato, sin reiniciar nada.

La primera vez que un agente concreto se conecta de verdad, Phi identifica el proceso que se conecta, incluida su firma de código, y te pregunta: **Permitir una vez**, **Permitir siempre** o **Denegar**. Nada llega al navegador hasta que lo apruebas. Los agentes que has aprobado aparecen en **Agentes permitidos** en la misma pestaña, marcados como "Siempre" o "Esta sesión". Elimina uno y volverá a preguntar la próxima vez.

## Cómo se contiene el acceso

La conexión está diseñada para que nada que no hayas aprobado pueda alcanzarla:

- Phi escucha en un **socket privado al que solo pueden llegar los procesos de este Mac**, no en un puerto de red. Nada en tu red, y ningún otro usuario del Mac, puede conectarse a él.
- Cada conexión se **consiente agente por agente**, verificada por la identidad del proceso que se conecta.
- Desactivar "Permitir que los agentes controlen Phi (CDP)" detiene las conexiones nuevas y corta las activas al instante.
- De forma predeterminada, los agentes solo pueden trabajar dentro de **sus propios Espacios de agente**. Tocar tus datos de navegación reales, es decir, tus Espacios, marcadores, pestañas fijadas, reglas de URL y disposición de ventanas, es un permiso aparte, **"Permitir que los agentes operen tus Espacios"**, que también está desactivado de forma predeterminada.
- Desactivar el **Modo de desarrollador** es el interruptor de corte total. Desactiva a la vez el acceso de agentes y el [Administrador de contraseñas para agentes](/es/agent-passwords/), y nada se reactiva automáticamente cuando lo vuelves a encender.

## Próximos pasos

- [La CLI de Phi](/es/phi-cli/), la misma automatización como un comando `phi` en tu terminal, para scripts y usos rápidos puntuales.
- [Administrador de contraseñas para agentes](/es/agent-passwords/), cómo los agentes inician sesión con tu caja fuerte sin ver tus contraseñas.
- [Habilidades del navegador](/es/skills/), el otro tipo de habilidad, la que se le enseña al asistente propio de Phi.
- [Espacios y perfiles](/es/spaces/), las áreas de trabajo y las identidades de inicio de sesión sobre las que se construyen los Espacios de agente.
- [Automatización y Phi Link](/es/automation/), lo que el asistente propio de Phi puede hacer en tu nombre.
