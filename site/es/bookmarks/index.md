---
description: "Entiende los marcadores vivos de Phi Browser, la organización de la barra lateral, las pestañas fijadas, su alcance configurable y cuándo conviene usar cada uno."
---

# Marcadores y pestañas fijadas

En Phi, la barra lateral es tu área de trabajo, y los marcadores y las pestañas fijadas son las dos formas de conservar las páginas que importan. Este capítulo profundiza más que [Diseños y navegación](/es/layouts/) en cómo se comportan, empezando por lo que sorprende a mucha gente que viene de navegadores tradicionales: en Phi, un marcador se abre en su sitio, como una pestaña.

## Marcadores que se abren en su sitio

En un navegador tradicional un marcador es un enlace muerto: al hacer clic siempre genera una pestaña nueva, y acabas con duplicados de la misma página. Phi trata el marcador como una entrada viva. Haz clic en uno y se abre en su sitio, de modo que esa misma entrada de la barra lateral se convierte en su pestaña activa. Cierra la página y el marcador se queda exactamente donde estaba, listo para abrirse de nuevo. Si el marcador ya está abierto, hacer clic en él solo activa esa pestaña en lugar de crear una segunda copia.

Esta es la idea que popularizaron Arc y Dia: la barra lateral contiene cosas vivas, no un archivo aparte que visitas dos veces al año. Phi sigue ese modelo, pero conserva un árbol de marcadores de verdad, carpetas incluidas, así mantienes la organización que da un archivo de marcadores.

## Crear y organizar marcadores

- **Crea un marcador** arrastrando una pestaña a la barra lateral, o haz clic derecho en una pestaña y elige **Añadir a marcadores** (aparece como **Añadir a la barra de marcadores** en el modo Cómodo). Usa **Añadir a carpeta** para dejarlo directamente en una carpeta.
- **Organiza con carpetas.** Los marcadores se anidan en carpetas, y puedes crear una subcarpeta con **Nueva carpeta anidada…**.
- **Guarda una Vista dividida como un solo marcador.** Desde una Vista dividida, **Añadir vista dividida a marcadores** conserva ambas páginas como una sola entrada que reabre el par junto.
- **Administra un marcador** desde su menú contextual: **Copiar enlace**, **Renombrar…**, **Editar…**, **Abrir en nueva pestaña**, **Abrir como vista dividida** y **Eliminar**.

Los marcadores están limitados al Espacio en el que estás. Cada [Espacio](/es/spaces/) mantiene su propio conjunto, así las páginas guardadas de un Espacio de trabajo no estorban en uno personal.

## Pestañas fijadas

Las pestañas fijadas se sitúan en la parte superior de la barra lateral, en una cuadrícula, para el puñado de páginas en las que vives: tu correo, un panel, una herramienta de proyecto. Son persistentes: una pestaña fijada permanece en la cuadrícula incluso después de cerrar su página, y al hacer clic en ella la página se vuelve a abrir.

- **Fija una pestaña** haciendo clic derecho en ella y eligiendo **Fijar**, o arrastrándola a la cuadrícula de fijadas. **Desfijar**, en el mismo menú, la devuelve a la lista de pestañas.
- **Reordena** las pestañas fijadas arrastrándolas por la cuadrícula.
- **Fija una vista dividida.** **Fijar vista dividida** conserva la disposición de dos paneles como un único elemento fijado que reabre ambos lados; **Desfijar vista dividida** lo deshace.

## Elige el alcance de las pestañas fijadas {#choose-a-pinned-tab-scope}

Abre **Configuración → Espacios** y usa **Alcance de pestañas fijadas** para decidir hasta dónde se comparten tus pestañas fijadas. **Perfil** es el valor predeterminado.

| Alcance        | Dónde aparecen las pestañas fijadas                                             |
| -------------- | ------------------------------------------------------------------------------- |
| **Espacio**    | Cada Espacio tiene sus propias pestañas fijadas.                                |
| **Perfil**     | Los Espacios que usan el mismo Perfil comparten las pestañas fijadas.           |
| **Aplicación** | Las pestañas fijadas se comparten entre todos los Perfiles y Espacios normales. |

Los Espacios de incógnito nunca muestran ni permiten pestañas fijadas, sea cual sea el alcance que elijas.

Cambiar el alcance también traslada tus pestañas fijadas actuales a la nueva disposición. Cuando pasas a un alcance más estrecho, Phi copia las pestañas fijadas actuales en cada destino existente, y esas copias pueden cambiarse después de forma independiente. Cuando pasas a un alcance más amplio, Phi fusiona los conjuntos existentes. Las copias sin cambios se combinan, mientras que las versiones distintas se conservan. Phi muestra una confirmación antes de hacer cualquiera de los dos cambios.

Los marcadores siempre están limitados a un solo Espacio. El ajuste de pestañas fijadas no les afecta. Consulta [Espacios y Perfiles](/es/spaces/) para ver cómo encajan esas capas.

## Volver a la página original

Seguir enlaces en una pestaña fijada o en un marcador puede alejarlo de su URL original. Para volver, haz doble clic en la pestaña fijada, o haz clic en el favicon de un marcador que esté abierto como pestaña.

Los enlaces que llevan a un sitio distinto no mueven la pestaña en absoluto: Phi los abre como vista previa en un panel flotante de [vista Peek](/es/peek/), de modo que el marcador o la pestaña fijada se queda con la página que le corresponde. Si prefieres que esos enlaces se abran como pestañas nuevas, desactiva **Abrir automáticamente los enlaces de pestañas fijadas y marcadores en vista Peek** en **Configuración → Navegación**.

Para conservar la página actual, mantén presionada la tecla **Comando (⌘)** mientras haces doble clic en la pestaña fijada o haces clic en el favicon del marcador. La página actual pasa a la lista de pestañas como una pestaña aparte, y la pestaña fijada o el marcador vuelve a su URL original.

## ¿Cuál deberías usar?

Un reparto sencillo de funciones:

- **Las pestañas fijadas** son páginas en las que vives, siempre arriba, a un clic, y compartidas en el alcance de Espacio, Perfil o Aplicación que elijas.
- **Los marcadores** son páginas que quieres conservar, organizadas en carpetas, limitadas a un Espacio y abiertas en su sitio cuando las necesitas.

Si vienes de Arc o Dia, consulta [Cambiarse a Phi](/es/switching-to-phi/) para ver cómo se comparan la barra lateral viva, los marcadores y las pestañas fijadas de Phi. Para traer marcadores desde otro navegador o desde un archivo, o para exportar los marcadores de un Espacio a HTML, consulta [Importar y exportar](/es/import-export/).
