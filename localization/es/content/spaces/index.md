---
description: "Descubre cómo Phi Browser usa los Espacios como áreas de trabajo y los Perfiles para aislar cookies, historial, inicios de sesión, extensiones, Reglas de URL, marcadores y pestañas fijadas."
---

# Espacios y Perfiles

Los Espacios y los Perfiles te permiten mantener mundos separados en un solo navegador, ya sea trabajo y vida personal, un proyecto paralelo, un cliente o un tema de investigación, sin hacer malabares con ventanas ni iniciar y cerrar sesión una y otra vez. Son dos capas con funciones distintas, y Phi las mantiene simples haciendo que una se apoye sobre la otra.

## Las dos capas

- Un **Espacio** es un área de trabajo en la barra lateral. Tiene su propio nombre, icono y color, y sus propios marcadores. Al cambiar de Espacio, la barra lateral se reorganiza en torno a la tarea en la que estás.
- Un **Perfil** es la capa de aislamiento que hay debajo. Cada Perfil tiene sus propias cookies, historial, inicios de sesión y extensiones, de modo que dos Perfiles pueden tener sesión iniciada en el mismo sitio con cuentas distintas al mismo tiempo.

La relación es de un solo sentido: **cada Espacio pertenece a un Perfil, y un mismo Perfil puede estar detrás de varios Espacios.** Los Espacios que comparten un Perfil comparten los mismos inicios de sesión. La visibilidad de las pestañas fijadas es configurable y puede seguir un alcance de Espacio, de Perfil o de Aplicación; no cambia el aislamiento entre Perfiles.

Una forma sencilla de recordarlo: **los Espacios organizan cómo se ven y se sienten las cosas; los Perfiles deciden qué se mantiene separado por debajo.**

## Qué vive en un Espacio

- **Un nombre, un icono y un color.** Elige uno del conjunto de iconos integrado de Phi o usa un emoji, para que cada Espacio se reconozca de un vistazo en la barra lateral.
- **Sus propios marcadores.** Cada Espacio tiene un conjunto de marcadores independiente, así las páginas guardadas de un Espacio de trabajo no estorban en uno personal.
- **Su propio tema (opcional).** Un Espacio puede usar su propio tema de color o seguir tu tema global. Al entrar en el Espacio se aplica su tema, de modo que la ventana coincide con el contexto en el que estás.
- **Las pestañas fijadas** siguen el alcance seleccionado en **Configuración → Espacios**. Cada Espacio puede tener las suyas, los Espacios que usan el mismo Perfil pueden compartirlas, o todos los Perfiles y Espacios normales pueden compartir un mismo conjunto. Consulta [Marcadores y pestañas fijadas](/es/bookmarks/#choose-a-pinned-tab-scope) para más detalles.

## Crear, cambiar y administrar Espacios

- **Crea** un Espacio desde la franja de Espacios en la barra lateral. Le das un nombre y eliges a qué Perfil pertenece, o creas un **Nuevo perfil** ahí mismo si este Espacio debe estar completamente separado.
- **Cambia** de Espacio desde la barra lateral con un solo clic. Las pestañas, los marcadores y el tema de la barra lateral cambian para coincidir, y Phi reabre la ventana del Espacio si no está ya abierta.
- **Renombra** el Espacio, o usa **Cambiar icono** / **Cambiar tema** desde su menú. Elige **Seguir tema global** para quitar el tema propio del Espacio.
- **Elimina** un Espacio desde el mismo menú. Eliminar un Espacio también borra los marcadores y las Reglas de URL que le pertenecen, y no se puede deshacer. Si el alcance de pestañas fijadas es **Espacio**, las pestañas fijadas de ese Espacio también se eliminan. Las pestañas fijadas con alcance de Perfil o de Aplicación no se ven afectadas.

## Reglas de URL: envía los sitios al Espacio correcto automáticamente {#url-rules-send-sites-to-the-right-space-automatically}

Los Espacios resultan más útiles cuando las páginas correctas llegan al lugar correcto sin que tengas que pensarlo. Las **Reglas de URL** hacen justo eso: una regla coincide con un sitio y lo abre en el Espacio que le asignes, sin importar dónde hagas clic en el enlace o dónde lo escribas.

Abre **Reglas de URL…** desde el menú **Espacios** de la barra de menús, o desde la sección Espacios de la Configuración, para administrar las reglas de todos los Espacios en un solo lugar. Cada regla coincide por:

- **Sufijo de dominio**, `figma.com` y todos sus subdominios.
- **Dominio**, un host exacto, como `www.example.com`.
- **El dominio contiene**, cualquier host que contenga una palabra, como `git`.
- **URL**, un host más un prefijo de ruta, como `example.com/team`.

Además de tus Espacios normales, una regla puede apuntar a **Incógnito**: los sitios que coincidan se abren entonces en un [Espacio de incógnito](/es/incognito/), creado bajo demanda cuando no hay ninguno abierto.

Configura una regla como **Preguntar cada vez** en lugar de redirigir en silencio. Cuando se abre un enlace que coincide, Phi muestra un selector **¿En qué Espacio abrirlo?** para que elijas. Tu Espacio actual aparece marcado, y puedes dejar la página donde estás. Cuando varias reglas podrían coincidir, gana la más específica (una ruta más larga vence a una más corta; un host exacto vence a un comodín).

## Espacios de incógnito: un Espacio sin dejar rastro

Para la navegación que no debe dejar nada atrás, **Archivo → Nuevo Espacio de incógnito** abre un Espacio privado directamente en la franja de la barra lateral. Tiene la misma sensación de área de trabajo, pero detrás hay una sesión en memoria en lugar de un Perfil: sin marcadores, sin pestañas fijadas, sin IA y sin nada escrito en disco. Al cerrarlo, la sesión se destruye. Consulta [Espacios de incógnito](/es/incognito/) para el panorama completo.

## Cómo se conecta esto con el resto de Phi

Los Espacios se apoyan en el área de trabajo de la barra lateral descrita en [Diseños y navegación](/es/layouts/), y los colores por Espacio usan la misma paleta que [Temas y apariencia](/es/themes/). Si vienes de Arc o Dia, consulta [Cambiarse a Phi](/es/switching-to-phi/) para la comparación de migración. Como los Perfiles aíslan las cookies y el historial, lo que el asistente puede ver queda limitado al Perfil en el que estás navegando. Consulta [Privacidad y tus datos](/es/privacy/) para saber cómo se tratan tus datos.
