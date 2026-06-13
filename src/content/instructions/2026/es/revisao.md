---
title: Instrucciones para la revisión
section: revisao
year: 2026
lang: es
order: 2
summary: El papel del revisor, el proceso en dos etapas, los criterios por sello y la entrega de revisiones.
---

Su objetivo como revisor de artefactos es garantizar que la calidad del artefacto se corresponda con el contenido del artículo y los requisitos mínimos esperados para la obtención de cada sello.

> **Nota:** tenga en cuenta que el período de revisión es relativamente corto. Recomendamos iniciar sus revisiones en cuanto reciba su asignación, ya que dos sellos requieren la ejecución del artefacto.

## Pasos para la evaluación de un artefacto

La revisión puede realizarse en un entorno de su preferencia, siempre que satisfaga los requisitos mínimos del entorno de ejecución esperado para el artefacto. Recomendamos ejecutar el artefacto (cuando corresponda) en un entorno virtual, por la comodidad que ofrece a los revisores y para garantizar que los componentes de su máquina local no interfieran en la evaluación (una instalación limpia en un entorno nuevo puede reducir imprevistos).

Todos los recursos adicionales necesarios para ejecutar el artefacto (infraestructura en la nube, claves SSH, etc.) deben estar presentes en el apéndice que describe el artefacto.

El artefacto en evaluación está relacionado con un artículo en evaluación por los comités técnicos de la conferencia. El foco de un revisor del CTA está en el artefacto y no en la revisión del artículo. No obstante, si se encuentra algún problema, debe informarse a los coordinadores de evaluación de artefactos.

> **Nota:** recuerde que todos los artefactos, análisis y discusiones son confidenciales.

## Proceso de revisión

En cuanto se le asigna un artefacto para revisión, puede comenzar el trabajo. Cuanto antes empiece, mejor, pues permite encontrar y discutir problemas con los autores. Este año tendremos la revisión en dos etapas:

En la **primera etapa (r1)** los revisores evalúan el artefacto considerando los criterios de evaluación. Durante este proceso pueden publicarse mensajes en la plataforma hotcrp — discusiones entre miembros del comité de revisión o preguntas para los autores, como por ejemplo preguntas sobre problemas encontrados en el artefacto. Al final de la revisión debe enviar un dictamen que se presentará a los autores. Este debe destacar las etapas realizadas para la evaluación de cada sello, el proceso de ejecución observado y el resultado alcanzado (los problemas en el proceso de ejecución deben explicarse claramente en la revisión). Los autores responderán a los puntos planteados en esta etapa durante la fase de rebuttal.

La **segunda etapa (r2-decision)** ocurre después de la fase de rebuttal de los autores. En ella, los autores, con base en la revisión de la primera fase, aclaran dudas, solucionan problemas encontrados, informan eventuales equivocaciones y/o explican algo que pasó desapercibido a los revisores. Su papel como revisor en la segunda etapa consiste en considerar los puntos planteados en la primera fase y en el rebuttal para decidir qué sellos deben asignarse o no.

Calendario del ciclo de revisión:

- Plazo de envío de artefactos
- Ronda 1 de revisión (r1)
- Fase de rebuttal
- Decisión del revisor (r2-decision)

*Las fechas están disponibles en hotcrp.*

> **Nota:** procure escribir su revisión de forma precisa, impersonal y cortés, considerando que estará disponible para los autores en una fase posterior del proceso.

## Criterios de evaluación

Para realizar esta actividad con excelencia, debe considerar los cuatro sellos y sus respectivos requisitos mínimos para la asignación de un sello.

### Artefactos Disponibles (Sello D)
Se espera que el código y/o los datos estén disponibles en un repositorio estable (como GitHub o GitLab). En este repositorio se espera encontrar un README.md con los [requisitos mínimos del README.md](/es/instrucoes/2026/submissao/).

### Artefactos Funcionales (Sello F)
Se espera que el código y/o artefacto pueda ejecutarse y que el revisor pueda observar algunas de sus funcionalidades. Para obtener este sello, es importante que haya información adicional en el README.md del repositorio, como una lista de dependencias, una lista de versiones de las dependencias/lenguajes/entorno, una descripción del entorno de ejecución, instrucciones de instalación y ejecución, y un ejemplo de ejecución mínima.

> **Nota:** como revisor, además de verificar que el artefacto cumple los respectivos criterios, es necesario ejecutar el artefacto. En su revisión se espera una prueba de ejecución, con algunas de las salidas presentadas por la herramienta.

### Artefactos Sostenibles (Sello S)
Se espera que el código y/o artefacto esté modularizado, organizado, inteligible y fácil de comprender. Para obtener el sello es recomendable que exista una documentación mínima del código (describiendo archivos, funciones, ...), una legibilidad mínima del código y que los evaluadores puedan identificar las principales afirmaciones del artículo en el artefacto.

### Experimentos Reproducibles (Sello R)
Se espera que el revisor pueda reproducir las principales afirmaciones presentadas en el artículo. Para obtener este sello se esperan instrucciones para ejecutar las principales afirmaciones (p. ej., resultados de los principales gráficos/tablas) y una descripción del proceso de cómo se ejecutaron los experimentos para llegar al resultado del artículo.

> **Nota:** para la asignación del sello debe reproducir (ejecutar) los experimentos presentados en el artículo mediante el contenido encontrado en el artefacto, alcanzando las afirmaciones del artículo y reproduciendo tablas y figuras. En su revisión se espera un resumen con estos resultados.

## Entrega de las revisiones

Para cada artefacto, debe producir una breve revisión que justifique la razón para asignar o denegar un sello al artefacto. Esta evaluación solo debe completarse una vez realizado el proceso de evaluación. Para facilitar el proceso, hay un ejemplo disponible junto al formulario de envío.

## Mejores trabajos

Para asignar los premios a los mejores trabajos, utilizaremos como uno de los criterios la clasificación asignada por los revisores en la categoría "Candidato al Premio Artefacto Distinguido". Así, se espera que los revisores asignen notas más altas (3 y 4) a los trabajos con al menos 3 sellos que se destaquen por su calidad respecto a los demás. Además, se espera que los trabajos que no obtuvieron más de dos sellos no tengan una nota superior a la mínima (1).
