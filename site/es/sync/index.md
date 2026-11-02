---
description: "Mantén tus Espacios, marcadores, pestañas fijadas, Reglas de URL, ajustes compatibles e historial de navegación iguales en cada Mac en el que inicias sesión, cifrados antes de subirse con claves que solo tienen tus Mac."
---

# Sincronización

La sincronización mantiene los datos propios de Phi iguales en cada Mac en el que tienes iniciada sesión con la misma cuenta de Phi. Guarda un marcador o cambia el nombre de un Espacio en un Mac y el cambio llega a los demás. Está desactivada hasta que la configuras en cada Mac, y está pensada para que nosotros no podamos leer lo que transporta: todo se cifra en tu Mac antes de subirse, con claves que solo tienen tus Mac.

Todo lo que se describe aquí está en **Configuración → Sincronización**.

## Qué se sincroniza {#what-syncs}

| Qué                                 | Detalles                                                                                                                                                                                                                                                                                                                     |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Espacios**                        | Nombre, icono, color, tema y el Perfil al que pertenece cada Espacio.                                                                                                                                                                                                                                                        |
| **Perfiles**                        | Los nombres de los Perfiles y qué Espacios pertenecen a cada Perfil.                                                                                                                                                                                                                                                         |
| **Marcadores y carpetas**           | Los marcadores de cada Espacio, con sus carpetas y su orden.                                                                                                                                                                                                                                                                 |
| **Pestañas fijadas**                | Las pestañas fijadas, con el alcance que hayas elegido en **Configuración → Espacios**.                                                                                                                                                                                                                                      |
| **Reglas de URL**                   | Las reglas que dirigen los sitios que coinciden a un Espacio, a Incógnito o a Kiosk.                                                                                                                                                                                                                                         |
| **Ajustes compatibles**             | El modo de diseño, la apariencia, el tema y el tono de selección, los ajustes de la barra de marcadores y de URL completa, **Comportamiento de las pestañas nuevas** (lo que abre ⌘T), el aviso al cerrar Incógnito, la imagen en imagen automática, el alcance de las pestañas fijadas y cuál es el Espacio predeterminado. |
| **Datos de navegación, por Perfil** | El historial de navegación, las preferencias propias del navegador, como el motor de búsqueda predeterminado, y las extensiones con sus ajustes sincronizados.                                                                                                                                                               |

::: warning La eliminación también se sincroniza
Si eliminas un Espacio o un Perfil en un Mac, se elimina de todos los Mac que se sincronizan con él, marcadores incluidos. Phi lo indica en el diálogo de confirmación, así que léelo antes de confirmar.
:::

Algunas cosas se quedan donde están a propósito:

- **Contraseñas, cookies y autocompletar.** Nunca entran en la sincronización. Phi no tiene un administrador de contraseñas propio, y una bóveda que conectes a través del [Administrador de contraseñas del agente](/es/agent-passwords/) pertenece a su proveedor y se sincroniza según las condiciones de ese proveedor.
- **Pestañas abiertas.** Las pestañas abiertas normales no se recrean en otro Mac. Las pestañas fijadas, sí.
- **Phi Chat y la Memoria.** Tus conversaciones con el asistente se quedan en el Mac donde las tuviste, y lo mismo ocurre con la [Memoria](/es/memory/).
- **Los Espacios de incógnito** y los Espacios en los que trabajan los agentes. No se sincroniza nada de ellos. Una Regla de URL que envía un sitio a Incógnito sigue siendo una regla, así que se sincroniza como cualquier otra.
- **Atajos de teclado.** Lo que configuras en **Configuración → Atajos** se queda en el Mac donde lo configuraste.
- **Los ajustes ligados a un solo Mac**, incluidos los ajustes de IA y de agentes.

## Antes de empezar

- **Una cuenta de Phi, con la sesión iniciada en cada Mac.** Sin ella, el panel solo ofrece **Inicia sesión para sincronizar entre dispositivos**. Si elegiste explorar sin cuenta, consulta [Iniciar sesión más tarde](/es/get-started/#signing-in-later).
- **La versión oficial de Phi.** La sincronización funciona a través del servicio de sincronización de Phinomenon, y una copia de Phi que compiles tú mismo a partir del código abierto no puede usarlo.

## Configura tu primer Mac {#set-up-your-first-mac}

1. Abre **Configuración → Sincronización** y haz clic en **Configurar sincronización en este dispositivo**. La ventana explica lo que va a ocurrir; haz clic en **Continuar**.
2. **Guarda tu código de recuperación.** Phi crea un código de recuperación y lo muestra una sola vez: 27 caracteres en grupos de cinco. Haz clic en **Copiar** y guárdalo en un lugar seguro, como un administrador de contraseñas, y luego haz clic en **Lo he guardado**.
3. **Confirma tu código de recuperación.** Phi te pide que escribas el código que guardaste. Los guiones, los espacios y las mayúsculas no importan. Si no lo guardaste, haz clic en **Atrás**: Phi vuelve a mostrar el mismo código para que lo guardes ahora. La sincronización sigue desactivada hasta que el código se verifica, así que no puedes descubrir más tarde que nunca lo guardaste. Si cierras la ventana en este paso, Phi vuelve a pedírtelo la próxima vez que abras la configuración o reinicies, pero para entonces **Atrás** ya no está, porque el código no se conserva una vez cerrada la ventana.
4. **Phi configura la sincronización por su cuenta.** En un primer Mac la cuenta todavía no tiene nada con lo que emparejar, así que no hay páginas de emparejamiento que completar. Phi agrega los Perfiles y los Espacios de este Mac a la cuenta y muestra **Configurando la sincronización…** mientras lo hace. Si Phi no pudo leer todo lo que hay en la cuenta, muestra en su lugar las páginas de emparejamiento de [Agregar otro Mac](#add-another-mac).
5. Cuando termina la configuración, el panel muestra **Sincronización inicial en curso** mientras este Mac sube los datos, y luego **Actualizado**.

::: warning El código de recuperación se muestra una sola vez
El código se crea en tu Mac y nunca se nos envía, así que no podemos volver a mostrarlo, enviarte uno de reemplazo ni restablecerlo. Para agregar otro Mac necesitas el código o un Mac que ya esté configurado. Si pierdes ambos, nadie puede desbloquear la copia cifrada de tu cuenta, ni siquiera nosotros. Si ya has perdido el código, consulta [¿Olvidaste tu código de recuperación?](#forgot-your-recovery-code)
:::

## Agregar otro Mac {#add-another-mac}

1. Inicia sesión con la misma cuenta de Phi, abre **Configuración → Sincronización**, haz clic en **Configurar sincronización en este dispositivo** y luego en **Continuar**.
2. En **Agrega este dispositivo a tu cuenta**, elige cómo se une este Mac:
   - **Solicitar aprobación desde otro dispositivo.** Phi muestra un código corto y espera. En un Mac que ya esté configurado, abre **Configuración → Sincronización**: la solicitud aparece en **Dispositivos** con el mismo código y la hora en que expira. Comprueba que los dos códigos coinciden y haz clic en **Aprobar**, o en **Denegar** si no la esperabas. El código identifica el Mac nuevo y no es secreto, así que no pasa nada si lo lees en voz alta por teléfono. Una solicitud denegada o expirada ofrece **Probar de otra manera**.
   - **Introducir un código de recuperación.** Escribe el código que guardaste en tu primer Mac.
3. **Elige cómo se sincroniza este Mac.** Cuando tu cuenta ya tiene datos y este Mac tiene datos propios, Phi pregunta **¿Cómo quieres que se sincronice este Mac?** y muestra lo que tiene cada lado:
   - **Fusionar este Mac con tu cuenta**, marcado como **Recomendado**. En los pasos siguientes emparejas los Perfiles y los Espacios uno por uno, y se conservan los marcadores, las pestañas fijadas y las Reglas de URL de ambos lados.
   - **Usar los datos de tu cuenta**. Los Espacios, los marcadores, las pestañas fijadas, las Reglas de URL y los ajustes sincronizados de este Mac se reemplazan por los de tu cuenta, y los Perfiles que tu cuenta no tiene se eliminan de este Mac. Solo cambia este Mac, y no se puede deshacer. Consulta [Usar los datos de tu cuenta](#use-your-accounts-data) antes de elegirlo.

   Un Mac que solo tiene su Perfil predeterminado y su Espacio predeterminado, sin marcadores, pestañas fijadas ni Reglas de URL, no ve este paso. No hay ninguna opción que copie los datos de este Mac sobre tu cuenta.

4. **Empareja tus Perfiles.** Phi empareja los Perfiles de este Mac con los Perfiles de tu cuenta y te pregunta por los que no pudo emparejar. El Perfil predeterminado de este Mac siempre se empareja con el Perfil predeterminado de tu cuenta: su fila muestra ese Perfil de la cuenta, sin selector. Para cada uno de los demás Perfiles de este Mac, elige **Asignar a** un Perfil de la cuenta o **Registrar como nuevo**. Los Perfiles de tu cuenta que no tienen equivalente aquí aparecen en **Perfiles de la cuenta sin asignar**, donde **Crear en este Mac** los agrega. Si una elección incumple la regla del Perfil predeterminado, Phi dice **El Perfil predeterminado de este Mac solo se puede emparejar con el Perfil predeterminado de la cuenta. Revisa los emparejamientos y vuelve a intentarlo.**
5. **Empareja tus Espacios.** Para cada Espacio de este Mac, elige el Espacio de la cuenta que le corresponde, o **Agregar como nuevo**. **Agregar todos como nuevos** resuelve de una vez todos los Espacios pendientes, y los Espacios cuyos nombres coinciden exactamente se eligen por ti. Los Espacios de tu cuenta que no están en este Mac aparecen en **Espacios que se agregarán desde tu cuenta** y se crean al finalizar. No se elimina nada de este Mac. Haz clic en **Finalizar**.
6. **Revisa lo que cambia**, que solo aparece si algo de este Mac se va a sobrescribir. Si emparejaste un Espacio de aquí con uno de tu cuenta, el nombre, el icono, el color y el tema de la cuenta reemplazan los de este Mac, y el Espacio puede moverse al Perfil que tiene en tu cuenta. Las pestañas, los marcadores, las pestañas fijadas y las Reglas de URL de este Mac no se tocan. Para conservar los valores de este Mac, vuelve con **Atrás** y agrega ese Espacio como nuevo. Haz clic en **Aplicar** para iniciar la sincronización. Si no se va a sobrescribir nada, la sincronización empieza en cuanto haces clic en **Finalizar**.

Phi solo muestra las páginas en las que tiene algo que preguntar. Cuando no hay nada que preguntar, por ejemplo en un Mac que solo tiene datos predeterminados, termina por su cuenta y muestra **Configurando la sincronización…**, y los Perfiles y los Espacios de tu cuenta aparecen en este Mac.

Cargar la cuenta puede tardar hasta dos minutos mientras Phi cuenta tus Espacios, y necesita conexión: no hay ninguna copia en caché a la que recurrir. Con **Fusionar este Mac con tu cuenta**, una vez que empieza la sincronización se conservan los marcadores, las pestañas fijadas y las Reglas de URL de ambos Mac, así que no se pierde nada de ninguno de los dos.

### Usar los datos de tu cuenta {#use-your-accounts-data}

Elige esta opción cuando no quieras conservar lo que Phi tiene en este Mac, por ejemplo en un Mac que solo usaste para hacer pruebas. Phi elimina primero los datos de Phi de este Mac y luego descarga los de tu cuenta.

- **Se elimina de este Mac:** los Espacios que no son el Espacio predeterminado, cuyas pestañas abiertas se cierran; los marcadores, las pestañas fijadas, las Reglas de URL y los ajustes sincronizados; y cada Perfil que tu cuenta no tiene, junto con su historial, sus extensiones y sus datos de sitios web.
- **Se conserva:** el Perfil predeterminado de este Mac y los Perfiles cuyo nombre coincide con uno de tu cuenta conservan su historial, sus extensiones y sus datos de sitios web. Tu cuenta y tus otros Mac no se ven afectados.

Después de hacer clic en **Continuar**, Phi pregunta **¿Reemplazar lo que hay en este Mac?** y enumera lo que se elimina y lo que se descarga. Haz clic en **Reemplazar los datos de este Mac** para seguir adelante. Phi muestra **Reemplazando los datos de este Mac…** y la ventana permanece abierta hasta que termina. Después, los datos de tu cuenta llegan con la primera sincronización y el panel muestra **Sincronización inicial en curso**, lo que puede tardar unos minutos si la cuenta es grande. Si el reemplazo se detiene con un error, consulta [No se pudo terminar de reemplazar los datos de este Mac](#replace-did-not-finish).

::: warning El reemplazo no se puede deshacer
Phi no guarda ninguna copia de lo que elimina. Si quieres una, elige primero **Finalizar más tarde**, exporta con **Ayuda → Administrar datos de usuario → Exportar datos de usuario…** (consulta [Importar y exportar](/es/import-export/) y [Sincronizar o exportar](#sync-or-export)) y luego vuelve a la configuración. Para conservar un Perfil local, elige en su lugar **Fusionar este Mac con tu cuenta**.
:::

### Si la configuración no puede cargar tu cuenta {#setup-cannot-load-account}

La configuración lee tu cuenta antes de mostrar ninguna opción. Cuando eso falla, la ventana indica el motivo y ofrece **Reintentar**:

- **No se pudieron cargar a tiempo los Espacios de tu cuenta.** La cuenta es grande o la conexión es lenta. Revisa tu conexión y vuelve a intentarlo.
- **La sincronización no está disponible en este momento, así que no se pudieron cargar los Espacios de tu cuenta.** Phi no puede acceder a la sincronización en este momento. Comprueba que estás en línea y que sigues con la sesión iniciada, y vuelve a intentarlo.
- **No se pudieron cargar los Perfiles de tu cuenta.** o **No se pudieron cargar los Espacios de tu cuenta.** Revisa tu conexión y vuelve a intentarlo.
- Un Perfil de la cuenta marcado como **No se puede leer por ahora**: Phi sigue reintentando en segundo plano, y el resto de la configuración sigue funcionando.
- **El Perfil predeterminado de tu cuenta no se puede leer en este Mac, así que los datos de este Mac no se pueden reemplazar por ahora.** **Usar los datos de tu cuenta** no puede ejecutarse hasta que se pueda leer. Elige **Fusionar este Mac con tu cuenta**, o **Finalizar más tarde** y vuelve a intentarlo.

### Finalizar más tarde {#finish-later}

**Finalizar más tarde** aparece en el paso del método de sincronización y en las páginas de emparejamiento. Elígelo, o cierra la ventana, y este Mac sigue navegando en local: no se sincroniza nada, el panel indica **Sin emparejar** y Phi no vuelve a abrir la configuración por su cuenta. Vuelve a **Configuración → Sincronización** y haz clic en **Continuar la configuración** cuando quieras. En ese momento Phi vuelve a cargar tu cuenta, así que las elecciones sin terminar no se conservan, incluido el método de sincronización: la siguiente configuración empieza con **Fusionar este Mac con tu cuenta** seleccionado.

La excepción es un reemplazo que ya ha empezado. Una vez que Phi ha empezado a reemplazar los datos de este Mac, salir no lo cancela. Si se detuvo, por ejemplo por un error o porque Phi se cerró, y cerraste la ventana, la próxima vez que abras la configuración irá directamente a **¿Reemplazar lo que hay en este Mac?**, sin **Atrás**, y **Reemplazar los datos de este Mac** continúa desde donde se detuvo. **Eliminar este dispositivo de la sincronización…** sigue disponible ahí; deja este Mac fuera de la sincronización con lo que el reemplazo todavía no hubiera eliminado.

## ¿Olvidaste tu código de recuperación? {#forgot-your-recovery-code}

Nadie puede volver a mostrar tu código de recuperación ni crear uno nuevo para los mismos datos de sincronización, ni siquiera nosotros. Lo que todavía puedes hacer depende de tu situación. El enlace **¿Olvidaste tu código de recuperación?** de la página **Introduce tu código de recuperación** abre esta sección.

### Todavía estás configurando tu primer Mac

Si estás en **Confirma tu código de recuperación** y no has cerrado la ventana de configuración, haz clic en **Atrás**. Phi vuelve a mostrar el mismo código. Guárdalo, haz clic en **Lo he guardado** y escríbelo para confirmarlo.

Phi 2.14 y las versiones anteriores no tienen el botón **Atrás**. Si cerraste la ventana o reiniciaste Phi, el código también se ha perdido: Phi sigue pidiéndolo, pero no puede mostrarlo. En cualquiera de los dos casos, actualiza Phi si es necesario y luego empieza de cero con [Restablecer la sincronización](#reset-sync), como se describe más abajo.

### Otro Mac sigue configurado para la sincronización

No necesitas el código. En el Mac nuevo, elige **Solicitar aprobación desde otro dispositivo** y aprueba la solicitud en el Mac que está configurado; consulta [Agregar otro Mac](#add-another-mac). La sincronización sigue funcionando en los Mac que tienes.

El código sigue sin poder mostrarse de nuevo ni reemplazarse. Mantén al menos un Mac configurado para la sincronización: mientras haya uno, puedes agregar Mac sin el código.

### Es tu único Mac, o quieres empezar de cero

Usa [Restablecer la sincronización](#reset-sync) en ese Mac. Esto elimina el Mac de la sincronización y borra todos los datos de sincronización almacenados para tu cuenta. Tus datos de navegación locales permanecen en el Mac, y cualquier otro Mac que todavía tuviera la sincronización configurada para la cuenta muestra después [Volver a configurar la sincronización](#set-up-sync-again). Luego configura la sincronización en este Mac desde cero, como en [Configura tu primer Mac](#set-up-your-first-mac). Phi crea un código de recuperación nuevo; guárdalo antes de hacer clic en **Lo he guardado**.

**Restablecer la sincronización** solo se ofrece en el último Mac configurado de la cuenta. Si quieres empezar de cero mientras otros Mac siguen configurados, elimina primero de la sincronización cada uno de los demás.

### Ningún Mac que todavía tengas está configurado para la sincronización

Si el código se ha perdido y ningún Mac que todavía tengas está configurado para la sincronización, la copia cifrada de tu cuenta no se puede desbloquear, ni por ti ni por nosotros. Un Mac que todavía no está configurado para la sincronización tampoco puede restablecer la sincronización de la cuenta, así que no hay forma de empezar de cero desde él. Esto incluye un Mac que se perdió o se borró mientras estaba configurado: sigue contando como configurado y no se puede eliminar desde otro Mac.

## Comprobar el estado de la sincronización {#check-sync-status}

La parte superior del panel Sincronización muestra cómo están las cosas:

- **Actualizado**, **Sincronizando…** o **Sincronización inicial en curso** mientras se ejecuta la primera sincronización.
- **Sin conexión: los cambios se sincronizarán al conectarse.** Phi sigue funcionando con los datos locales y envía tus cambios cuando el Mac vuelve a estar en línea.
- **Sincronización en pausa.** Un Perfil de este Mac todavía no está configurado para la sincronización, normalmente uno que creaste después de la configuración. El panel indica los Perfiles a los que espera y por qué. Phi los registra por su cuenta y sigue reintentándolo, y **Reintentar** lo intenta de inmediato. Consulta [Sincronización en pausa](#sync-paused).
- **Requiere atención.** Algo falló. Debajo aparece la línea **Parte del contenido requiere atención. Revisa los detalles y tu conexión.**, y **Último problema** indica el problema más reciente y cuándo ocurrió. Consulta [Qué significa cada problema](#needs-attention).

Debajo del estado, **Última sincronización correcta en este Mac** muestra cuándo terminó este Mac su última sincronización. **Esperando a que se carguen los Perfiles** significa que Phi todavía no ha leído la lista de Perfiles de este Mac. Sigue intentándolo por su cuenta, y al cabo de cinco minutos el estado pasa a **Requiere atención**.

Si cambiaste el alcance de las pestañas fijadas, en este Mac o en otro, puede aparecer una línea que dice **El cambio de ámbito de las pestañas fijadas aún no se ha aplicado**, con el número de intentos y un motivo: **Hay una migración desde otro navegador en curso**, **Los datos locales del navegador no están disponibles** o **No se pudieron guardar las pestañas fijadas en este Mac**. Este Mac todavía no ha movido sus pestañas fijadas al nuevo alcance. Phi sigue reintentándolo por su cuenta y el resto de la sincronización continúa. Si la línea no desaparece, reinicia Phi y, si aun así no desaparece, envía tus comentarios con **Comentarios** en el menú de la parte superior derecha de la ventana.

### Qué significa cada problema {#needs-attention}

**Último problema** muestra uno de estos. Se mantiene hasta que la siguiente sincronización que termina por completo lo borra.

| Último problema                                                | Qué significa                                                                                                                | Qué haces                                                                                                                    |
| -------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| **Inicio de sesión caducado**                                  | El servicio de sincronización ya no acepta el inicio de sesión de este Mac.                                                  | Vuelve a iniciar sesión en tu cuenta de Phi.                                                                                 |
| **Sin conexión**                                               | Este Mac no pudo conectar con el servicio de sincronización.                                                                 | Nada. Se resuelve con la siguiente sincronización correcta una vez que estés en línea.                                       |
| **Error del servidor**                                         | El servicio de sincronización devolvió un error.                                                                             | Nada. Se resuelve con la siguiente sincronización correcta.                                                                  |
| **El servidor rechazó los cambios**                            | El servicio de sincronización rechazó algunos cambios de este Mac, por ejemplo después de conflictos repetidos con otro Mac. | Haz clic en **Sincronizar ahora**. Si vuelve a aparecer, reinicia Phi, y envía tus comentarios si persiste.                  |
| **No se pudieron leer los datos en este Mac**                  | Phi no pudo leer algunos de sus propios datos en este Mac.                                                                   | Haz clic en **Sincronizar ahora**. Si vuelve a aparecer, reinicia Phi, y envía tus comentarios si persiste.                  |
| **No se pudo guardar el estado de sincronización en este Mac** | Phi no pudo guardar su registro de lo que se ha sincronizado.                                                                | Haz clic en **Sincronizar ahora**. Si vuelve a aparecer, reinicia Phi, y envía tus comentarios si persiste.                  |
| **No se pudieron leer algunos datos sincronizados**            | Algo de tu cuenta no se pudo leer en este Mac.                                                                               | Haz clic en **Sincronizar ahora**. Si vuelve a aparecer, reinicia Phi, y envía tus comentarios si persiste.                  |
| **Esperando a que se empareje un Perfil**                      | Algunos elementos sincronizados esperan hasta que un Perfil de este Mac se empareje con tu cuenta.                           | Espera a que Phi configure el Perfil, o haz clic en **Reintentar** cuando el panel muestre **Sincronización en pausa**.      |
| **Es necesario restablecer la sincronización**                 | Los datos de sincronización de tu cuenta se restablecieron y la configuración de este Mac ya no coincide con ellos.          | Haz clic en **Volver a configurar la sincronización**. Consulta [Volver a configurar la sincronización](#set-up-sync-again). |

Los elementos retenidos, descritos en [Detalles](#sync-details), también pueden mantener el estado en **Requiere atención** sin nombre de problema. Consulta [Hay pestañas fijadas retenidas](#held-pinned-tabs).

### Detalles {#sync-details}

**Detalles** enumera tus Perfiles, cada uno con el estado de sus datos de navegación, y luego una fila por cada tipo de datos de Phi: **Configuración**, **Espacios**, **Marcadores**, **Pestañas fijadas** y **Reglas de URL**. La fila de cada tipo describe su sincronización más reciente que tuvo cambios, y cuánto tiempo hace de ella:

| Recuento                 | Qué cuenta                                                                                                                                                                                                                                                               |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **recibidos**            | Cambios que este Mac obtuvo de tu cuenta.                                                                                                                                                                                                                                |
| **enviados**             | Cambios que este Mac subió.                                                                                                                                                                                                                                              |
| **pendientes de enviar** | Cambios de este Mac que todavía no se han subido. Una sincronización posterior los envía.                                                                                                                                                                                |
| **retenidos**            | Elementos que este Mac recibió pero todavía no puede aplicar. Phi los guarda hasta que puede, por ejemplo una pestaña fijada cuyo Perfil o Espacio no está emparejado en este Mac. No se cuentan las pestañas fijadas que pertenecen a otro alcance de pestañas fijadas. |

Los recuentos **pendientes de enviar** y **retenidos** solo aparecen cuando no son cero. Un tipo sin nada reciente muestra **Sin cambios recientes**.

### Sincronizar ahora {#sync-now}

**Sincronizar ahora** pide a este Mac que lo sincronice todo de inmediato. Rara vez lo necesitarás: Phi recibe un aviso cuando otro Mac cambia algo y además lo comprueba por su cuenta, como máximo una vez por minuto. **Sincronizar ahora** se salta esa espera. Mientras una sincronización espera o se ejecuta, el botón muestra el progreso y, al pasar el puntero por encima, indica a qué está esperando, por ejemplo **Esperando a que todos los Perfiles estén disponibles**.

Cuando una sincronización que iniciaste no termina, una línea debajo del estado lo indica hasta que vuelves a hacer clic:

- El nombre del problema, de la tabla anterior, cuando se registró uno durante esa sincronización.
- **La sincronización no finalizó**, cuando la sincronización se detuvo sin un problema concreto. Inténtalo de nuevo más tarde. Si sigue ocurriendo en un Mac, consulta [Hay pestañas fijadas retenidas](#held-pinned-tabs).
- **No se pudo iniciar la sincronización. Inténtalo de nuevo más tarde.**, cuando este Mac no pudo iniciar ninguna sincronización.

Una sincronización que termina no agrega ninguna línea, y **Última sincronización correcta en este Mac** pasa a la nueva hora.

## Dispositivos

La sección **Dispositivos** muestra todos los Mac configurados en tu cuenta, con **Este Mac** marcado, y cualquier Mac que esté esperando para unirse, con su código, **Aprobar**, **Denegar** y la hora en que expira la solicitud. Para aprobar, este Mac debe tener la sesión iniciada y su propia configuración terminada.

Cada Mac solo puede eliminarse a sí mismo, desde su propio panel Sincronización. Todavía no hay forma de eliminar un Mac que ya no tienes: un Mac perdido sigue en la cuenta y sigue recibiendo cambios mientras tenga la sesión iniciada. Si todavía puedes acceder a él, cerrar su sesión lo detiene.

## Eliminar un Mac de la sincronización {#remove-a-mac-from-sync}

En **Configuración → Sincronización**, en **Eliminación**, haz clic en **Eliminar…** en la fila **Eliminar este Mac de la sincronización** y confirma con **Eliminar este dispositivo**. Si la configuración no ha terminado en este Mac, la ventana de configuración ofrece en su lugar **Eliminar este dispositivo de la sincronización…** en la parte inferior.

- Este Mac deja de sincronizarse, el servicio de sincronización lo revoca, y su configuración de sincronización, sus claves y el emparejamiento de Perfiles y Espacios se borran de este Mac.
- Todo lo que estabas navegando se queda: los Espacios, los marcadores, el historial y las pestañas fijadas se conservan por completo, y sigues con la sesión iniciada en tu cuenta.
- Tus otros Mac no se ven afectados y siguen sincronizándose entre sí.
- Para volver a agregar este Mac, inicia de nuevo la configuración y únete mediante aprobación o con el código de recuperación.

Cuando este Mac es el único Mac configurado para la sincronización en la cuenta, la fila es **Restablecer la sincronización**, porque eliminar el último Mac también borra los datos de sincronización de la cuenta. Consulta [Restablecer la sincronización](#reset-sync).

::: warning Eliminar un Mac no cambia las claves de tu cuenta
Eliminar un Mac impide que reciba nada nuevo, pero no cambia las claves de cifrado de tu cuenta ni puede recuperar lo que ese Mac ya había sincronizado. Lo que tenía, lo sigue teniendo.
:::

### Restablecer la sincronización {#reset-sync}

Cuando este Mac es el único Mac configurado para la sincronización en tu cuenta, la sección **Eliminación** muestra **Restablecer la sincronización** con un botón **Restablecer…**. Restablecer elimina este Mac de la sincronización y borra todos los datos de sincronización almacenados para esta cuenta, para que puedas empezar de cero, por ejemplo después de perder tu código de recuperación.

1. En **Configuración → Sincronización**, en **Eliminación**, haz clic en **Restablecer…**.
2. Phi pregunta **¿Eliminar todos los datos de sincronización de esta cuenta?** Haz clic en **Eliminar todos los datos de sincronización** para confirmar. Esto no se puede deshacer.

- Todos los dispositivos se eliminan de la sincronización, y se borra todo lo almacenado en el servidor de sincronización para esta cuenta.
- Tus datos de navegación locales permanecen en este Mac: los Espacios, los marcadores, el historial y las pestañas fijadas se conservan, y sigues con la sesión iniciada en tu cuenta.
- Cualquier otro Mac que todavía tuviera la sincronización configurada para esta cuenta muestra [Volver a configurar la sincronización](#set-up-sync-again).
- Para volver a usar la sincronización, configúrala desde cero. Phi crea un código de recuperación nuevo.

Si eliminas este Mac desde la ventana de configuración y resulta ser el último, Phi lo indica: **Este es el último dispositivo configurado para la sincronización. Puedes eliminarlo junto con todos los datos de sincronización almacenados para esta cuenta, o configurar primero la sincronización en otro dispositivo.** Después ofrece **Eliminar este dispositivo y todos los datos de sincronización…**, que pide la misma confirmación.

Si otro Mac se unió a la cuenta mientras tanto, no se elimina nada. Phi dice **Otro dispositivo se ha unido a esta cuenta desde entonces, así que no se eliminó nada. En su lugar, puedes eliminar este Mac de la sincronización.** y la fila vuelve a ser **Eliminar este Mac de la sincronización**.

## Volver a configurar la sincronización {#set-up-sync-again}

Si el panel dice **Los datos de sincronización de la cuenta han cambiado. La sincronización de los datos de Phi está en pausa.**, los datos de sincronización de tu cuenta se restablecieron y la configuración de este Mac ya no coincide con ellos. Los datos de Phi dejan de sincronizarse hasta que actúes; reintentar o reiniciar no lo resuelve. Haz clic en **Volver a configurar la sincronización** y confirma. Phi borra la configuración de sincronización y la información de emparejamiento de este Mac, conserva tus datos de navegación locales y lo que hay en tu cuenta, y te guía de nuevo por la configuración, incluida la opción de unirte mediante aprobación o con el código de recuperación.

También ves este mensaje en un Mac después de que se usara **Restablecer la sincronización** en el último Mac de la cuenta, porque se han borrado los datos de sincronización con los que se configuró ese Mac.

## Solución de problemas {#troubleshooting}

### Un segundo Mac no recibió mis atajos de teclado ni mis pestañas abiertas {#missing-shortcuts-and-open-tabs}

Es lo esperado. Los atajos de teclado de **Configuración → Atajos** nunca se sincronizan, y tampoco las pestañas abiertas normales: solo las pestañas fijadas. Los ajustes de IA y de agentes también se quedan en cada Mac. Configúralos en cada Mac donde los quieras. Consulta [Qué se sincroniza](#what-syncs).

### Un Mac indica que la sincronización no finalizó y retiene pestañas fijadas {#held-pinned-tabs}

Un Mac muestra **La sincronización no finalizó**, y su fila **Pestañas fijadas** en **Detalles** muestra **retenidos** con un número, mientras que el otro Mac dice **Actualizado**. El recuento **retenidos** significa que este Mac recibió pestañas fijadas que no puede colocar, porque el Perfil o el Espacio al que pertenecen no está emparejado aquí.

La causa habitual es que los Perfiles predeterminados de los dos Mac no se emparejaron entre sí durante la configuración. Los Mac emparejados con Phi 2.12 podían quedar así. Desde Phi 2.13, la configuración siempre empareja el Perfil predeterminado con el Perfil predeterminado de tu cuenta.

Para solucionarlo hoy, en el Mac que retiene las pestañas fijadas, [elimina el Mac de la sincronización](#remove-a-mac-from-sync) y luego vuelve a configurarlo como en [Agregar otro Mac](#add-another-mac). Elige **Fusionar este Mac con tu cuenta** si Phi pregunta cómo debe sincronizarse este Mac. Los marcadores, el historial y todo lo demás se quedan en el Mac mientras lo haces, y su Perfil predeterminado se empareja con el Perfil predeterminado de tu cuenta.

### Sincronización en pausa, o Esperando a que se empareje un Perfil {#sync-paused}

Un Perfil que creas después de configurar la sincronización todavía no está emparejado. Phi lo registra en tu cuenta por sí solo, y la sincronización de ese Perfil empieza en cuanto termina. **Reintentar** en el panel Sincronización lo intenta de inmediato. Si la pausa no se resuelve nunca, comprueba tu conexión y que sigues con la sesión iniciada, y vuelve a hacer clic en **Reintentar**.

### La sincronización indica Requiere atención {#sync-needs-attention}

**Último problema** indica qué falló. [Qué significa cada problema](#needs-attention) enumera todos los problemas y qué hacer con cada uno.

### No se pudo terminar de reemplazar los datos de este Mac {#replace-did-not-finish}

Si la configuración se detiene con **No se pudo terminar de reemplazar los datos de este Mac.** después de elegir **Usar los datos de tu cuenta**, haz clic en **Reintentar**. Reintentar continúa donde se detuvo, y no cambia nada más hasta que termine. Mantén Phi abierto mientras se ejecuta; si la cuenta es grande, puede tardar unos minutos. Si cierras la ventana, la siguiente configuración continúa el mismo reemplazo, como se describe en [Finalizar más tarde](#finish-later).

### El nombre, el icono, el color o el tema de un Espacio cambió después de emparejarlo {#account-values-replaced}

Es lo esperado. Cuando emparejas un Espacio de este Mac con uno de tu cuenta, prevalecen el nombre, el icono, el color y el tema de la cuenta, y **Revisa lo que cambia** lo muestra antes de que hagas clic en **Aplicar**. Para conservar la versión de este Mac, vuelve con **Atrás** en ese punto y elige **Agregar como nuevo** para ese Espacio: entonces se sincroniza como un Espacio aparte. Una vez aplicado el emparejamiento, los valores anteriores de este Mac no se conservan, así que vuelve a personalizar el Espacio a mano si los quieres recuperar; el cambio también se sincroniza con tus otros Mac.

## Cerrar sesión

Cerrar sesión en tu cuenta de Phi detiene la sincronización en ese Mac, y no llega nada de tus otros Mac hasta que vuelvas a iniciar sesión. Si vuelves a iniciar sesión con la misma cuenta, la sincronización continúa donde se quedó y se pone al día con lo que se perdió; el panel Sincronización te indica si queda algo por terminar. Cambiar a otra cuenta nunca mezcla las dos: cada cuenta tiene sus propios datos sincronizados y su propio emparejamiento.

## Cómo se protegen tus datos

- **Cifrados antes de salir de tu Mac.** Tus Mac crean las claves, y solo se sube la copia cifrada. El servicio de sincronización la almacena y la entrega a tus otros Mac; no puede descifrarla.
- **Iniciar sesión no basta para leerlos.** Un Mac nuevo obtiene la clave solo mediante la aprobación de un Mac que ya la tiene, o con tu código de recuperación. Por eso tampoco se puede recuperar un código perdido: el enlace **¿Olvidaste tu código de recuperación?** de la configuración explica tus opciones, y ninguna de ellas te devuelve el código.
- **Siguen siendo datos que guardamos por ti.** La copia cifrada está en el servicio de sincronización de Phinomenon, así que la sincronización es una de las cosas que Phi envía. [Privacidad y tus datos](/es/privacy/) enumera las demás, y la [Política de privacidad](https://phibrowser.com/privacy/) y los [Términos](https://phibrowser.com/terms/) son la referencia autorizada sobre todo ello.

## Sincronizar o exportar {#sync-or-export}

La sincronización es para Mac que sigues usando a la vez. Para una mudanza puntual a un Mac nuevo, o para una copia que guardas tú, la mejor herramienta es **Administrar datos de usuario → Exportar datos de usuario…** en el menú **Ayuda**; consulta [Importar y exportar](/es/import-export/).

## Por dónde seguir

- [Espacios y Perfiles](/es/spaces/), qué son un Espacio y un Perfil, y por qué la configuración los empareja.
- [Marcadores y pestañas fijadas](/es/bookmarks/), el alcance de las pestañas fijadas que sigue la sincronización.
- [Privacidad y tus datos](/es/privacy/), todo lo demás que Phi envía y guarda.
- [Importar y exportar](/es/import-export/), mover datos una sola vez en lugar de forma continua.
