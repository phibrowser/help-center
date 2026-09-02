---
description: "Aprende a ver la vista previa de un enlace en un panel flotante sobre la página que estás leyendo en Phi Browser, y a cerrarla, abrirla como pestaña o abrirla como Vista dividida."
---

# Vista Peek

Un Peek es un panel flotante que muestra una página encima de la que estás leyendo. Sigue un enlace, lee lo que hay, ciérralo, y estás de vuelta donde empezaste sin ninguna pestaña extra que limpiar.

Peek funciona en los modos **Equilibrado** y **Rendimiento**. El modo Cómodo, en cambio, abre cada enlace como una pestaña normal. Peek también está desactivado en los Espacios de incógnito.

## Abrir un Peek

Hay tres formas de conseguir uno:

- **Sigue un enlace desde un marcador o una pestaña fijada.** Cuando un enlace en un marcador o en una pestaña fijada lleva a un sitio distinto, Phi lo muestra en un Peek en lugar de alejar esa pestaña de su página. Los enlaces que se quedan en el mismo sitio siguen navegando en su lugar. Este Peek automático tiene su propio interruptor, descrito en [Configuración de Peek](#peek-settings).
- **Haz clic en un enlace con la tecla Mayúsculas (⇧) presionada.** Funciona en cualquier pestaña normal, no solo en marcadores y pestañas fijadas.
- **Haz clic derecho en un enlace y elige "Abrir enlace en vista Peek".** El mismo resultado que el clic con Mayúsculas, desde el menú contextual de la página.

"Un sitio distinto" significa un dominio distinto. Los subdominios del mismo sitio, como pasar de un servicio de Google a otro, cuentan como el mismo sitio y se abren en su lugar como de costumbre. Los enlaces que no son páginas web, como las direcciones `mailto:`, nunca se abren en un Peek.

El clic con Mayúsculas y el elemento del clic derecho no se ofrecen dentro de un panel de Vista dividida ni dentro de un Peek. En esos lugares, un enlace se abre como lo haría normalmente.

## Dentro del panel

La página llena el panel de borde a borde. Tres controles se sitúan en la franja a su derecha:

| Control                     | Qué hace                                                                                                                                                     |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Cerrar**                  | Cierra la vista previa y su página.                                                                                                                          |
| **Abrir como pestaña**      | Convierte la vista previa en una pestaña normal. La página no se vuelve a cargar, así que la posición de desplazamiento y lo que hayas escrito se conservan. |
| **Abrir en vista dividida** | Coloca la vista previa junto a la pestaña de la que salió, como una Vista dividida de dos paneles.                                                           |

## Cerrar un Peek

Cualquiera de estas acciones quita la vista previa:

- Presiona **Esc** o **⌘W**.
- Haz clic en la página alrededor del panel.
- Ve **Atrás** o **Adelante**, o escribe una dirección en la barra de direcciones. Ambas cosas se interpretan como "salir de la vista previa", así que el Peek se cierra y la pestaña de debajo se queda donde estaba.
- Haz clic en el botón de menos en la fila de la barra lateral o en la pestaña fijada de la que salió el Peek.
- Cierra la pestaña de la que salió el Peek. Su Peek se va con ella.

## Un Peek por pestaña

Cada pestaña puede llevar su propio Peek, y solo el Peek de la pestaña que estás mirando aparece en pantalla. Cambia a otra pestaña y el panel desaparece; vuelve a ella y el panel regresa con la página tal como la dejaste. Abrir un segundo Peek desde la misma pestaña reemplaza al primero.

Mientras una pestaña lleva un Peek, el favicon de la página en vista previa aparece al final de la fila de esa pestaña en la barra lateral, o como una pequeña insignia en la esquina de una pestaña fijada. Pasa el puntero por encima y se convierte en un botón de menos que cierra el Peek.

Los Peeks sobreviven a un reinicio. Cuando Phi restaura tu sesión, cada Peek vuelve unido a la pestaña a la que pertenecía.

## Configuración de Peek {#peek-settings}

Abre la **Configuración**, ve a la pestaña **Navegación** y busca la sección **Peek**. Hay dos interruptores, ambos activados de forma predeterminada.

- **Activar vista Peek** es el interruptor principal. Con él desactivado, los enlaces vuelven a su comportamiento de siempre: un enlace a otro sitio en un marcador o una pestaña fijada se abre como pestaña nueva, el clic con Mayúsculas abre una ventana nueva y el elemento del menú del clic derecho ya no aparece. Cualquier Peek abierto en ese momento se convierte en una pestaña normal en lugar de desaparecer. Cambiar al modo Cómodo hace lo mismo.
- **Abrir automáticamente los enlaces de pestañas fijadas y marcadores en vista Peek** cubre solo el caso automático. Desactívalo y un enlace a otro sitio en un marcador o una pestaña fijada se abre como pestaña nueva, mientras que el clic con Mayúsculas y **Abrir enlace en vista Peek** siguen funcionando. Elige esta opción si quieres un Peek solo cuando lo pidas.

El segundo interruptor depende del primero. Al desactivar **Activar vista Peek**, la opción automática se desactiva con él; al volver a activarlo, la opción automática vuelve. El segundo aparece atenuado mientras la vista Peek está desactivada.

Para saber cómo los marcadores y las pestañas fijadas se mantienen vinculados a su página, consulta [Marcadores y pestañas fijadas](/es/bookmarks/). Para las páginas lado a lado y el resto del flujo de trabajo de la barra lateral, consulta [Diseños y navegación](/es/layouts/).
