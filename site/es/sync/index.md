---
description: "Mantén tus Espacios, marcadores, pestañas fijadas, Reglas de URL, ajustes compatibles e historial de navegación iguales en cada Mac en el que inicias sesión, cifrados antes de subirse con claves que solo tienen tus Mac."
---

# Sincronización

La sincronización mantiene los datos propios de Phi iguales en cada Mac en el que tienes iniciada sesión con la misma cuenta de Phi. Guarda un marcador o cambia el nombre de un Espacio en un Mac y el cambio llega a los demás. Está desactivada hasta que la configuras en cada Mac, y está pensada para que nosotros no podamos leer lo que transporta: todo se cifra en tu Mac antes de subirse, con claves que solo tienen tus Mac.

Todo lo que se describe aquí está en **Configuración → Sincronización**.

## Qué se sincroniza

| Qué                                 | Detalles                                                                                                                                                                                                                                                                                    |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Espacios**                        | Nombre, icono, color, tema y el Perfil al que pertenece cada Espacio.                                                                                                                                                                                                                       |
| **Perfiles**                        | Los nombres de los Perfiles y qué Espacios pertenecen a cada Perfil.                                                                                                                                                                                                                        |
| **Marcadores y carpetas**           | Los marcadores de cada Espacio, con sus carpetas y su orden.                                                                                                                                                                                                                                |
| **Pestañas fijadas**                | Las pestañas fijadas, con el alcance que hayas elegido en **Configuración → Espacios**.                                                                                                                                                                                                     |
| **Reglas de URL**                   | Las reglas que dirigen los sitios que coinciden a un Espacio, a Incógnito o a Kiosk.                                                                                                                                                                                                        |
| **Ajustes compatibles**             | El modo de diseño, la apariencia, el tema y el tono de selección, los ajustes de la barra de marcadores y de URL completa, el atajo de nueva pestaña, el aviso al cerrar Incógnito, la imagen en imagen automática, el alcance de las pestañas fijadas y cuál es el Espacio predeterminado. |
| **Datos de navegación, por Perfil** | El historial de navegación, las preferencias propias del navegador, como el motor de búsqueda predeterminado, y las extensiones con sus ajustes sincronizados.                                                                                                                              |

::: warning La eliminación también se sincroniza
Si eliminas un Espacio o un Perfil en un Mac, se elimina de todos los Mac que se sincronizan con él, marcadores incluidos. Phi lo indica en el diálogo de confirmación, así que léelo antes de confirmar.
:::

Algunas cosas se quedan donde están a propósito:

- **Contraseñas, cookies y autocompletar.** Nunca entran en la sincronización. Phi no tiene un administrador de contraseñas propio, y una bóveda que conectes a través del [Administrador de contraseñas del agente](/es/agent-passwords/) pertenece a su proveedor y se sincroniza según las condiciones de ese proveedor.
- **Pestañas abiertas.** Las pestañas abiertas normales no se recrean en otro Mac. Las pestañas fijadas, sí.
- **Phi Chat y la Memoria.** Tus conversaciones con el asistente se quedan en el Mac donde las tuviste, y lo mismo ocurre con la [Memoria](/es/memory/).
- **Los Espacios de incógnito** y los Espacios en los que trabajan los agentes. No se sincroniza nada de ellos. Una Regla de URL que envía un sitio a Incógnito sigue siendo una regla, así que se sincroniza como cualquier otra.
- **Los ajustes ligados a un solo Mac**, incluidos los ajustes de IA y de agentes.

## Antes de empezar

- **Una cuenta de Phi, con la sesión iniciada en cada Mac.** Sin ella, el panel solo ofrece **Inicia sesión para sincronizar entre dispositivos**. Si elegiste explorar sin cuenta, consulta [Iniciar sesión más tarde](/es/get-started/#signing-in-later).
- **La versión oficial de Phi.** La sincronización funciona a través del servicio de sincronización de Phinomenon, y una copia de Phi que compiles tú mismo a partir del código abierto no puede usarlo.

## Configura tu primer Mac {#set-up-your-first-mac}

1. Abre **Configuración → Sincronización** y haz clic en **Configurar sincronización en este dispositivo**. La ventana explica lo que va a ocurrir; haz clic en **Continuar**.
2. **Guarda tu código de recuperación.** Phi crea un código de recuperación y lo muestra una sola vez: 27 caracteres en grupos de cinco. Haz clic en **Copiar** y guárdalo en un lugar seguro, como un administrador de contraseñas, y luego haz clic en **Lo he guardado**.
3. **Confirma tu código de recuperación.** Phi te pide que escribas el código que guardaste. Los guiones, los espacios y las mayúsculas no importan. Si no lo guardaste, haz clic en **Atrás**: Phi vuelve a mostrar el mismo código para que lo guardes ahora. La sincronización sigue desactivada hasta que el código se verifica, así que no puedes descubrir más tarde que nunca lo guardaste. Si cierras la ventana en este paso, Phi vuelve a pedírtelo la próxima vez que abras la configuración o reinicies, pero para entonces **Atrás** ya no está, porque el código no se conserva una vez cerrada la ventana.
4. **Empareja tus Perfiles y Espacios.** En un primer Mac todavía no hay nada en la cuenta con lo que emparejar, así que este paso sobre todo confirma lo que se agrega: elige **Registrar como nuevo** para cada Perfil y **Agregar todos como nuevos** para los Espacios. Consulta [Agregar otro Mac](#add-another-mac) para ver qué hacen estos dos pasos cuando la cuenta ya tiene datos.
5. Haz clic en **Finalizar**. El panel muestra **Sincronización inicial en curso** mientras este Mac sube los datos, y luego **Actualizado**.

::: warning El código de recuperación se muestra una sola vez
El código se crea en tu Mac y nunca se nos envía, así que no podemos volver a mostrarlo, enviarte uno de reemplazo ni restablecerlo. Para agregar otro Mac necesitas el código o un Mac que ya esté configurado. Si pierdes ambos, nadie puede desbloquear la copia cifrada de tu cuenta, ni siquiera nosotros. Si ya has perdido el código, consulta [¿Has olvidado tu código de recuperación?](#forgot-your-recovery-code)
:::

## Agregar otro Mac {#add-another-mac}

1. Inicia sesión con la misma cuenta de Phi, abre **Configuración → Sincronización**, haz clic en **Configurar sincronización en este dispositivo** y luego en **Continuar**.
2. En **Agrega este dispositivo a tu cuenta**, elige cómo se une este Mac:
   - **Solicitar aprobación desde otro dispositivo.** Phi muestra un código corto y espera. En un Mac que ya esté configurado, abre **Configuración → Sincronización**: la solicitud aparece en **Dispositivos** con el mismo código y la hora en que expira. Comprueba que los dos códigos coinciden y haz clic en **Aprobar**, o en **Denegar** si no la esperabas. El código identifica el Mac nuevo y no es secreto, así que no pasa nada si lo lees en voz alta por teléfono. Una solicitud denegada o expirada ofrece **Probar de otra manera**.
   - **Introducir un código de recuperación.** Escribe el código que guardaste en tu primer Mac.
3. **Empareja tus Perfiles.** Phi empareja los Perfiles de este Mac con los Perfiles de tu cuenta y te pregunta por los que no pudo emparejar. Para cada Perfil de este Mac, elige **Asignar a** un Perfil de la cuenta o **Registrar como nuevo**. Los Perfiles de tu cuenta que no tienen equivalente aquí aparecen en **Perfiles de la cuenta sin asignar**, donde **Crear en este Mac** los agrega.
4. **Empareja tus Espacios.** Para cada Espacio de este Mac, elige el Espacio de la cuenta que le corresponde, o **Agregar como nuevo**. **Agregar todos como nuevos** resuelve de una vez todos los Espacios pendientes, y los Espacios cuyos nombres coinciden exactamente se eligen por ti. Los Espacios de tu cuenta que no están en este Mac aparecen en **Espacios que se agregarán desde tu cuenta** y se crean al finalizar. No se elimina nada de este Mac. Haz clic en **Finalizar**.
5. **Revisa lo que cambia**, que solo aparece si algo de este Mac se va a sobrescribir. Si emparejaste un Espacio de aquí con uno de tu cuenta, el nombre, el icono, el color y el tema de la cuenta reemplazan los de este Mac, y el Espacio puede moverse al Perfil que tiene en tu cuenta. Las pestañas, los marcadores, las pestañas fijadas y las Reglas de URL de este Mac no se tocan. Para conservar los valores de este Mac, vuelve con **Atrás** y agrega ese Espacio como nuevo. Haz clic en **Aplicar** para iniciar la sincronización. Si no se va a sobrescribir nada, la sincronización empieza en cuanto haces clic en **Finalizar**.

Cargar la cuenta puede tardar hasta dos minutos mientras Phi cuenta tus Espacios, y necesita conexión: no hay ninguna copia en caché a la que recurrir. Una vez que empieza la sincronización, se conservan los marcadores, las pestañas fijadas y las Reglas de URL de ambos Mac, así que no se pierde nada de ninguno de los dos.

### Finalizar más tarde

**Finalizar más tarde** aparece en las páginas de emparejamiento. Elígelo, o cierra la ventana, y este Mac sigue navegando en local: no se sincroniza nada, el panel indica **Sin emparejar** y Phi no vuelve a abrir la configuración por su cuenta. Vuelve a **Configuración → Sincronización** y haz clic en **Continuar la configuración** cuando quieras. En ese momento Phi vuelve a cargar tu cuenta, así que las elecciones sin terminar no se conservan.

## ¿Has olvidado tu código de recuperación? {#forgot-your-recovery-code}

Nadie puede volver a mostrar tu código de recuperación ni crear uno nuevo para los mismos datos de sincronización, ni siquiera nosotros. Lo que todavía puedes hacer depende de tu situación. El enlace **¿Has olvidado tu código de recuperación?** de la página **Introduce tu código de recuperación** abre esta sección.

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

## Comprobar el estado de la sincronización

La parte superior del panel Sincronización muestra cómo están las cosas:

- **Actualizado**, **Sincronizando…** o **Sincronización inicial en curso** mientras se ejecuta la primera sincronización.
- **Sin conexión: los cambios se sincronizarán al conectarse.** Phi sigue funcionando con los datos locales y envía tus cambios cuando el Mac vuelve a estar en línea.
- **Sincronización en pausa.** Un Perfil de este Mac todavía no está configurado para la sincronización, normalmente uno que creaste después de la configuración. Phi lo registra por su cuenta y sigue reintentándolo; la línea de debajo explica por qué está esperando, y **Reintentar** lo intenta de inmediato.
- **Requiere atención.** Algo falló, y **Último problema** indica qué. **Inicio de sesión caducado** significa que debes volver a iniciar sesión. **Sin conexión** y **Error del servidor** se resuelven solos con la siguiente sincronización correcta. **Es necesario restablecer la sincronización** se explica en [Volver a configurar la sincronización](#set-up-sync-again).

**Detalles** abre una fila por cada tipo de datos de Phi (Espacios, Marcadores, Pestañas fijadas, Reglas de URL, Configuración) que muestra lo que este Mac ha recibido y enviado recientemente y lo que aún tiene pendiente de enviar, además de una fila con los datos de navegación de cada Perfil. **Sincronizar ahora** pide a este Mac que lo sincronice todo de inmediato. Rara vez lo necesitarás: Phi recibe un aviso cuando otro Mac cambia algo y además lo comprueba por su cuenta, y nunca ejecuta dos sincronizaciones con menos de un minuto de diferencia.

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

## Cerrar sesión

Cerrar sesión en tu cuenta de Phi detiene la sincronización en ese Mac, y no llega nada de tus otros Mac hasta que vuelvas a iniciar sesión. Si vuelves a iniciar sesión con la misma cuenta, la sincronización continúa donde se quedó y se pone al día con lo que se perdió; el panel Sincronización te indica si queda algo por terminar. Cambiar a otra cuenta nunca mezcla las dos: cada cuenta tiene sus propios datos sincronizados y su propio emparejamiento.

## Cómo se protegen tus datos

- **Cifrados antes de salir de tu Mac.** Tus Mac crean las claves, y solo se sube la copia cifrada. El servicio de sincronización la almacena y la entrega a tus otros Mac; no puede descifrarla.
- **Iniciar sesión no basta para leerlos.** Un Mac nuevo obtiene la clave solo mediante la aprobación de un Mac que ya la tiene, o con tu código de recuperación. Por eso tampoco se puede recuperar un código perdido: el enlace **¿Has olvidado tu código de recuperación?** de la configuración explica tus opciones, y ninguna de ellas te devuelve el código.
- **Siguen siendo datos que guardamos por ti.** La copia cifrada está en el servicio de sincronización de Phinomenon, así que la sincronización es una de las cosas que Phi envía. [Privacidad y tus datos](/es/privacy/) enumera las demás, y la [Política de privacidad](https://phibrowser.com/privacy/) y los [Términos](https://phibrowser.com/terms/) son la referencia autorizada sobre todo ello.

## Sincronizar o exportar

La sincronización es para Mac que sigues usando a la vez. Para una mudanza puntual a un Mac nuevo, o para una copia que guardas tú, la mejor herramienta es **Administrar datos de usuario → Exportar datos de usuario…** en el menú **Ayuda**; consulta [Importar y exportar](/es/import-export/).

## Por dónde seguir

- [Espacios y Perfiles](/es/spaces/), qué son un Espacio y un Perfil, y por qué la configuración los empareja.
- [Marcadores y pestañas fijadas](/es/bookmarks/), el alcance de las pestañas fijadas que sigue la sincronización.
- [Privacidad y tus datos](/es/privacy/), todo lo demás que Phi envía y guarda.
- [Importar y exportar](/es/import-export/), mover datos una sola vez en lugar de forma continua.
