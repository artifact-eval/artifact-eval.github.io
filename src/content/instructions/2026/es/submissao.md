---
title: Instrucciones de envío
section: submissao
year: 2026
lang: es
order: 1
summary: Cómo registrar y enviar artefactos, requisitos mínimos del README.md, el apéndice y los requisitos por sello.
---

Se pueden considerar cuatro sellos de calidad para un artefacto.

Tras la notificación de aceptación del artículo, los autores pueden enviar opcionalmente el/los artefacto(s) relacionado(s) (los autores del Salón de Herramientas están **obligados** a enviar el artefacto).

Los autores deben registrar el artefacto en la plataforma **hotcrp**. Este registro requiere información como el contacto de los autores, un enlace al artefacto y, opcionalmente, un apéndice. Cabe recordar que el proceso de revisión del CTA es independiente de la revisión del artículo en JEMS y los envíos son *single-blind*.

Para un artefacto, el comité de revisión espera que:

- los requisitos mínimos del README estén presentes en el repositorio;
- la información sobre recursos específicos esté presente en el apéndice;
- el artefacto cumpla los criterios de los sellos solicitados;
- los autores respondan a las preguntas publicadas por los revisores en la plataforma y envíen la carta de rebuttal dentro del plazo.

Todo el proceso de revisión del artefacto se realiza en la plataforma hotcrp. Los autores con artefactos registrados para revisión serán notificados sobre el acceso a la plataforma y deben estar atentos a los correos enviados por la plataforma con las dudas del comité de revisión. Toda la comunicación entre los revisores de artefactos y los autores se realiza a través de hotcrp.

## Requisitos mínimos del README.md (Obligatorio)

Para facilitar el proceso de evaluación de los artefactos, se creó una plantilla de `README.md` (obligatoria) con todos los campos mínimos esperados para un artefacto. Vea [ejemplos de README.md de artefactos con 4 sellos](/es/instrucoes/2026/exemplos-readme/).

```markdown
# Título del proyecto
Resumen que describe el objetivo del artefacto, con el título y el resumen del artículo.

# Estructura del README.md
Presenta la estructura del README.md, describiendo cómo está organizado el repositorio.

# Sellos considerados
Los autores deben describir qué sellos deben considerarse durante la evaluación.
Por ejemplo: "Los sellos considerados son: Disponible y Funcional."

# Información básica
Información básica de todos los componentes necesarios para ejecutar y replicar
los experimentos, describiendo todo el entorno de ejecución, con requisitos de
hardware y software.

# Dependencias
Información sobre los benchmarks utilizados y las dependencias para la ejecución.
Sea lo más claro posible: versiones de dependencias y procesos para acceder a
recursos de terceros cuando sea necesario.

# Preocupaciones de seguridad
Si la ejecución del artefacto supone algún riesgo para los evaluadores, dicho
riesgo debe describirse y debe presentarse el proceso adecuado para garantizar
la seguridad de los revisores.

# Instalación
El proceso para descargar e instalar la aplicación. Al final de este proceso se
espera que la aplicación/benchmark/herramienta pueda ejecutarse.

# Prueba mínima
Un paso a paso de una prueba mínima que permita a los revisores observar algunas
funcionalidades del artefacto e identificar problemas de instalación.

# Experimentos
Un paso a paso para ejecutar y obtener los resultados del artículo. Cada
afirmación debe presentarse en una subsección, con detalles de archivos de
configuración, comandos, flags, tiempo de ejecución esperado, recursos esperados
(p. ej., 1GB RAM/Disco) y resultado esperado.
## Afirmación #X
## Afirmación #Y

# LICENSE
Indique la licencia.
```

Es **obligatorio** que TODAS las secciones presentadas en el requisito mínimo del README.md estén presentes. Si tiene alguna duda, por favor contáctenos.

> **Nota:** antes de enviar su artefacto, es recomendable instalarlo y ejecutarlo en un entorno nuevo (máquina virtual) siguiendo únicamente las instrucciones del README.md.

## Recursos específicos o restricciones

Si se requieren recursos adicionales (infraestructura en la nube, claves SSH, etc.) para evaluar el artefacto, esta información debe enviarse a través de un apéndice. En él, los autores incluyen información adicional (privada, como claves SSH para acceder a Google Cloud) para ayudar a los revisores del Comité Técnico de Artefactos.

La plantilla LaTeX del apéndice está disponible en [Ejemplo de Apéndice](https://www.overleaf.com/read/jscjwsnqsxfh). Todos los campos deben presentarse en el apéndice, además de los requisitos mínimos obligatorios del README.md. El apéndice es un criterio adicional cuando se necesitan recursos específicos para la evaluación o cuando existen restricciones de acceso.

## Requisitos por sello

Para que el trabajo/artefacto sea apto para recibir el sello, deben cumplirse los respectivos requisitos:

### Artefactos Disponibles (Sello D)
Se espera que el código y/o los datos estén disponibles en un repositorio estable (como GitHub y GitLab). En este repositorio se espera encontrar un README.md con los requisitos mínimos. El archivo README.md del repositorio puede ser el mismo archivo enviado para la apreciación del CTA.

### Artefactos Funcionales (Sello F)
Se espera que el código y/o artefacto pueda ejecutarse y que el revisor pueda observar algunas de sus funcionalidades. Para obtener este sello, es importante que haya información adicional en el README.md del repositorio, como:

- lista de dependencias;
- lista de versiones de las dependencias/lenguajes/entorno;
- descripción del entorno de ejecución;
- instrucciones de instalación y ejecución;
- un ejemplo de ejecución mínima.

### Artefactos Sostenibles (Sello S)
Se espera que el código y/o artefacto esté modularizado, organizado, inteligible y fácil de comprender. Para obtener el sello es recomendable que:

- exista una documentación mínima del código (describiendo archivos, funciones, ...);
- haya una legibilidad mínima del código;
- los evaluadores puedan identificar las principales afirmaciones del artículo en el artefacto.

### Experimentos Reproducibles (Sello R)
Se espera que el revisor pueda reproducir las principales afirmaciones presentadas en el artículo. Se sugiere el uso de máquinas virtuales, contenedores o scripts que faciliten y reduzcan el tiempo de creación del entorno. Para obtener este sello se espera:

- instrucciones para ejecutar las principales afirmaciones (p. ej., resultados de los principales gráficos/tablas);
- una descripción del proceso de cómo se ejecutaron los experimentos para llegar al resultado del artículo.

Para cumplir estos requisitos se sugiere incluir script(s) que automaticen al máximo todo el proceso de reproducción.

## Proceso de revisión

El proceso de revisión de artefactos se divide en dos etapas. Como autor, debe estar atento a las preguntas planteadas por los revisores en la plataforma. Tras finalizar la primera etapa de revisión (r1), los autores deben enviar una carta de rebuttal que busca aclarar los problemas encontrados por los revisores y ayudar en el proceso. Finalmente, los revisores consideran las revisiones de la primera fase y la carta de rebuttal para tomar una decisión en la segunda etapa de evaluación (r2-decision).

Calendario del ciclo de revisión:

- Plazo de envío de artefactos
- Ronda 1 de revisión (r1)
- Fase de rebuttal
- Decisión del revisor (r2-decision)

*Las fechas están disponibles en hotcrp.*
