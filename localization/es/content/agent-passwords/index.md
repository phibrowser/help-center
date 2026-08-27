---
description: "Permite que los agentes inicien sesión con credenciales de tu caja fuerte de Bitwarden. Solicitudes de aprobación para cada petición, autocompletado que mantiene ocultos los secretos, caducidad de sesión y permisos revocables."
---

# Administrador de contraseñas para agentes

Tarde o temprano, un agente que trabaja en Phi se topa con un muro de inicio de sesión. Pegar una contraseña en un chat es exactamente la respuesta equivocada, así que Phi tiene una mejor. El **Administrador de contraseñas para agentes** conecta a los agentes con tu administrador de contraseñas, actualmente **Bitwarden**, para que puedan iniciar sesión en los sitios con credenciales de tu caja fuerte. Está diseñado para que, la mayor parte del tiempo, **el agente nunca llegue a ver la contraseña**.

Viene desactivado de forma predeterminada, cada petición individual te pregunta primero y puedes revocar cualquier aprobación vigente en cualquier momento.

## Por qué Bitwarden

Darle a un agente de IA un camino hacia tus contraseñas es un acto de confianza, así que la caja fuerte que hay detrás no debería ser una caja negra. Bitwarden es de **código abierto**, por lo que cualquiera puede auditar sus clientes y su servidor, y **admite el alojamiento propio**, así que puedes mantener tu caja fuerte en un servidor administrado por ti en lugar de en la nube de un tercero. Eso te da control de principio a fin sobre dónde viven tus credenciales: tu caja fuerte en tu infraestructura, desbloqueada en tu Mac, entregada solo cuando tú lo apruebas. El proceso auxiliar de Phi se basa en el SDK oficial de Bitwarden, y los servidores autoalojados son compatibles al iniciar sesión.

Conviene dejar claro quién es quién aquí. **Bitwarden es el proveedor del servicio de caja fuerte**, y tu relación por ese servicio es con Bitwarden, bajo sus términos y su política de privacidad. Tú eliges si tu caja fuerte está en bitwarden.com, en bitwarden.eu o en un servidor que alojas tú mismo, y esa elección decide dónde vive tu caja fuerte y qué legislación la alcanza. La parte de Phi consiste en desbloquearla en tu Mac y pasar una única credencial a un agente cuando apruebas esa petición concreta. Tu caja fuerte nunca llega a Phinomenon, y tu contraseña maestra tampoco.

## Cómo los secretos quedan fuera de alcance

Tu caja fuerte no se abre dentro del navegador. Phi incluye un **proceso auxiliar separado** que habla con Bitwarden en nombre de la app, de modo que las credenciales para Phi y las peticiones de los agentes las guarda ese proceso auxiliar y **las contraseñas nunca tocan el proceso del navegador**. La clave de la caja fuerte desbloqueada vive solo en la memoria del proceso auxiliar y se descarta en el momento en que la caja fuerte se bloquea. El proceso auxiliar solo acepta conexiones del propio Phi, y Phi verifica la firma de código del proceso auxiliar antes de confiarle nada.

Además, la forma predeterminada en que los agentes usan una credencial es el autocompletado, que mantiene el secreto completamente fuera del alcance del agente. Phi rellena por sí mismo el campo de la página, y el agente solo se entera de que el campo se rellenó.

## Cómo activarlo

El Administrador de contraseñas para agentes vive en la pestaña **Desarrollador** de Configuración, que aparece cuando el **Modo de desarrollador** está activado:

1. Abre **Configuración → General** y activa el **Modo de desarrollador**.
2. En la pestaña **Desarrollador**, busca **Administrador de contraseñas para agentes** y activa **Administrador de contraseñas de Bitwarden**.
3. Inicia sesión en tu cuenta de Bitwarden. Se admiten servidores de EE. UU., de la UE y autoalojados, incluidas cuentas con inicio de sesión en dos pasos. Después desbloquea la caja fuerte con tu contraseña maestra.

Al activarlo, puede que Phi también te ofrezca instalar la **extensión de Bitwarden para el navegador** desde Chrome Web Store. Esa extensión es una comodidad aparte para _ti_, que autocompleta tus credenciales mientras navegas con normalidad. Las peticiones de los agentes no la usan ni la necesitan, así que puedes rechazarla con **Ahora no** y el acceso de los agentes seguirá funcionando.

## Cada petición te pregunta primero

Siempre que un agente pide una credencial, Phi muestra una solicitud de aprobación que indica **qué agente** la pide y **qué sitio o elemento** quiere, junto con el motivo declarado por el agente. No se entrega nada hasta que respondes, y una solicitud ignorada **se deniega sola a los 60 segundos**.

La solicitud te da opciones reales, no solo un botón de aceptar:

- **Aprobar** o **Denegar** la petición.
- Elegir cuánto dura la aprobación: **Solo una vez**, **Durante 10 min** o **Siempre**.
- Opcionalmente, **aplicar la aprobación a todos los agentes** en lugar de solo al que pregunta. Esto no está disponible para las aprobaciones de una sola vez.

Si la caja fuerte está bloqueada cuando llega una petición, Phi te pide primero tu **contraseña maestra** para desbloquearla. Esa contraseña va directa al proceso auxiliar y el navegador nunca la almacena.

## Tres niveles de exposición

No todas las peticiones son iguales, y la solicitud es honesta sobre la diferencia. Cada petición es de uno de tres tipos, con un código de color según hasta dónde viaja el secreto:

| Tipo                      | Qué ocurre realmente                                                                                                                                                                                                                                                              |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🟢 **Solo autocompletar** | Phi rellena por sí mismo la credencial guardada en la página. El agente activa el rellenado pero **nunca recibe el nombre de usuario ni la contraseña**.                                                                                                                          |
| 🟠 **Uso en comandos**    | El valor se entrega al agente para que pueda usarlo un comando que este ejecuta, por ejemplo una contraseña de base de datos inyectada en el entorno de una CLI. Las herramientas del agente lo eliminan de la salida, pero Phi no puede impedir que el agente conserve el valor. |
| 🔴 **Acceso completo**    | El elemento guardado, que puede ser una contraseña, una nota, una tarjeta, una identidad o una clave, se comparte directamente con el agente, y el agente puede registrarlo en su contexto.                                                                                       |

Una aprobación recordada solo cubre el tipo para el que se concedió. Una aprobación de solo autocompletar nunca permite que un agente lea la contraseña sin más.

El autocompletado viene con una red de seguridad adicional: **está vinculado al origen**. Si la página en la que está el agente no pertenece al sitio para el que se guardó la credencial, Phi se niega a rellenarla, que es precisamente como una página engañosa intentaría robar una contraseña. Las contraseñas rellenadas, además, permanecen enmascaradas en la página, incluso si alguien pulsa un control de "mostrar contraseña".

## Lo que los agentes nunca reciben

Hay líneas que no se cruzan, sin importar lo que esté aprobado:

- **Los códigos de verificación en dos pasos nunca se entregan.** Dar a un agente un código vigente reduciría los dos factores a una sola solicitud, así que ese paso siempre es tuyo. El agente devuelve el control y tú introduces el código.
- **La ambigüedad no entrega nada.** Si varios elementos de la caja fuerte coinciden con una petición, Phi la rechaza y pide al agente que la concrete, en lugar de adivinar una cuenta en tu nombre.
- **Todo se registra, sin valores.** Cada petición queda anotada en un registro de auditoría que recoge qué agente, qué sitio y qué tipo de acceso, nunca los secretos en sí.

La caja fuerte sirve para más que inicios de sesión, ya que también se pueden solicitar notas seguras, tarjetas, identidades y claves SSH, pero solo los inicios de sesión pueden autocompletarse en una página. Todo lo demás pasa por las mismas solicitudes de aprobación explícitas de arriba.

## Revisar y revocar aprobaciones

**Aprobaciones de credenciales de agentes…**, en la misma sección de la configuración, lista todas las aprobaciones vigentes: qué agente, qué sitio, qué tipo de acceso y cuánto dura. Las aprobaciones con plazo caducan por sí solas. Las aprobaciones de **Siempre** persisten hasta que las revocas, una por una o con **Revocar todas**.

Ese panel también contiene un interruptor, **Permitir acceso a todas las contraseñas**, una concesión maestra deliberada que permite a cualquier agente usar cualquier credencial guardada sin preguntar. Está pintado en rojo de advertencia por una razón, y Phi te pide confirmación antes de activarlo. Déjalo desactivado a menos que entiendas del todo el intercambio que supone.

## Caducidad de la sesión de la caja fuerte

Tú controlas cuánto tiempo permanece desbloqueada la caja fuerte. En la sección del Administrador de contraseñas para agentes, elige un **tiempo de espera de sesión** de **1 hora**, **4 horas**, **Al bloquearse el sistema**, **Al reiniciar el navegador** (el valor predeterminado) o **Nunca**, y elige qué ocurre cuando se cumple: **Bloquear**, que exige tu contraseña maestra para continuar, o **Cerrar sesión**, que cierra la sesión de la cuenta por completo.

## Cómo desactivarlo

Los interruptores apagan las cosas de verdad, en lugar de solo esconderlas:

- Desactivar **Administrador de contraseñas de Bitwarden** bloquea la caja fuerte y descarta las aprobaciones con plazo. Tu cuenta sigue con la sesión iniciada en el disco para una reactivación posterior, pero toda petición de agente se rechaza mientras esté desactivado, incluso las cubiertas por una aprobación de **Siempre**.
- Desactivar el **Modo de desarrollador** es un interruptor de corte total. Desactiva a la vez el acceso de los agentes y el Administrador de contraseñas para agentes, y volver a encenderlo no reactiva nada automáticamente. Cada función debe activarse de nuevo a mano.

## Próximos pasos

- [La habilidad phi-browser](/es/phi-browser-skill/), cómo los agentes de programación controlan Phi en sus propios Espacios de agente.
- [Automatización y Phi Link](/es/automation/), acciones bajo demanda, tareas en segundo plano y cómo mantener el control.
- [Privacidad y tus datos](/es/privacy/), dónde viven tus datos y cómo se gestiona la IA.
