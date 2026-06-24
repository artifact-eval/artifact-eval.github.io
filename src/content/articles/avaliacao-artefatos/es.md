---
articleSlug: avaliacao-artefatos
title: 'Entre la teoría y la práctica: la experiencia brasileña en la evaluación de artefactos científicos'
lang: es
authors: Diego Kreutz y Tiago Heinrich
date: 16 de junio de 2026
dateISO: '2026-06-16'
abstract: Cómo el SBSeg y el SBRC crearon un proceso nacional para evaluar artefactos de investigación, y por qué eso cambia lo que significa publicar ciencia en Brasil, formar investigadores y preparar profesionales para el mercado laboral.
isBridge: false
originalUrl: https://horizontes.sbc.org.br/index.php/2026/06/entre-a-teoria-e-a-pratica/
---

## Cuando el artículo no basta

En la ciencia de la computación existe un hábito cómodo: tratar el artículo publicado como el producto final de la investigación. El artículo se envía, se revisa, se acepta, se publica, y la comunidad sigue adelante. Pero, en áreas experimentales, esa visión no se sostiene. Un trabajo sobre un nuevo protocolo de red, un detector de intrusiones o un sistema distribuido no termina en el texto del artículo. Depende, de forma inseparable, del código que lo implementa, de los datos que lo alimentan y de los scripts que producen los análisis. Sin esos materiales, solo queda una afirmación. Puede ser correcta o no, pero nadie de fuera consigue verificarla.

Es en este punto donde la discusión deja de ser apenas técnica y pasa a ser científica, en el sentido más clásico del término. La reproducibilidad no es un detalle metodológico: es una condición básica de la ciencia experimental. Si la comunidad acepta que los artefactos son parte esencial del resultado de la investigación, necesita mecanismos formales para evaluarlos, reconocerlos y mejorarlos. Y, por encima de todo, necesita formar investigadores capaces de producirlos y de evaluarlos.

Fue exactamente eso lo que miembros de las comunidades brasileñas de ciberseguridad y de redes decidieron construir, a partir de 2022. Ese proceso está documentado en el artículo "An Experience Report on Artifact Evaluation in Brazilian Conferences", publicado en ACM SIGCOMM Computer Communication Review (vol. 56, n.º 1, abril de 2026).

## El punto de partida: la ausencia de proceso y sus efectos formativos

Hasta hace poco, los simposios brasileños no tenían mecanismos formales para el envío y la evaluación de artefactos. Cuando esos materiales existían, se citaban de forma libre: un enlace en el pie de página, un repositorio cualquiera, sin criterios mínimos de disponibilidad, documentación, funcionamiento o reproducibilidad. Esa informalidad generaba problemas recurrentes: documentación ausente o insuficiente, código que no compilaba en un entorno nuevo, scripts que dependían de rutas fijas de la máquina del autor y resultados que no podían reproducirse con el material disponibilizado.

Vale una reflexión de fondo educativo. Si el artículo es lo que cuenta para la comunidad, y el artefacto es apenas un anexo opcional, sin un proceso propio de evaluación, ¿cuál es el incentivo real para que un orientador invierta tiempo enseñando documentación, modularización y empaquetado? ¿Y cuál es el incentivo para que estudiantes de posgrado desarrollen esas competencias, en medio de la presión por publicar? La respuesta honesta es: casi ninguno.

Sin ese incentivo, la literatura científica acumula afirmaciones cada vez más difíciles de validar de forma independiente. Y, en el camino, se pierde una oportunidad valiosa de formación. El precio de esa ausencia no lo paga un artículo aislado. Lo paga la base sobre la cual la próxima generación de investigadores debería construir su trabajo.

Inspirados en iniciativas internacionales como ACM SIGCOMM, USENIX, NSDI y EuroSys, investigadores brasileños decidieron cambiar ese escenario. El Simposio Brasileño de Ciberseguridad (SBSeg) y el Simposio Brasileño de Redes de Computadoras y Sistemas Distribuidos (SBRC) pasaron a contar, a partir de 2023, con un Comité Técnico de Artefactos (CTA) formal, construido poco a poco a lo largo de cuatro ediciones.

## Los cuatro sellos: criterios objetivos para una cultura de calidad

El objetivo del CTA es evaluar artefactos para reconocer los trabajos que se esfuerzan en disponibilizarlos, permitiendo que otros investigadores puedan usar, ampliar y reproducir los resultados. Un artefacto puede ser un software, datos, documentación, resultados brutos, pruebas, modelos o benchmarks. Para evaluarlos, se definió un modelo con cuatro sellos:

- El sello **Disponible** reconoce que el material fue depositado en un repositorio estable y de acceso público, con documentación mínima organizada en un README con diez temas.
- El sello **Funcional** confirma que el artefacto funciona y que el revisor consigue ver sus funcionalidades en un entorno limpio, instalado desde cero.
- El sello **Reproducible** confirma que los principales resultados del artículo pueden reproducirse con el material disponibilizado.
- El sello **Sostenible**, una contribución original del modelo brasileño, reconoce el esfuerzo de organización, modularización y claridad del código. Desplaza la discusión del "funciona hoy" al "sigue siendo útil mañana".

## Evolución del proceso: del juicio al diálogo formativo

La estructura del proceso de revisión también pasó por cambios. En las primeras ediciones, siguiendo el modelo del SIGCOMM, la evaluación tenía una única ronda. El problema observado fue recurrente: los autores dejaban para resolver las pendencias en los últimos días, y sobraba poco tiempo para que los revisores validaran las correcciones.

A partir de esa observación, el proceso se reorganizó en dos rondas. La primera no produce decisión; produce diálogo. Los revisores señalan problemas, los autores corrigen en una fase de respuesta (rebuttal), y solo en la segunda ronda los sellos se atribuyen de hecho. Esa aparente complicación operativa se mostró una de las partes más transformadoras del modelo. Es en ella donde está buena parte del efecto educativo.

Otro elemento importante es la prueba de ejecución obligatoria. Para los sellos de funcionalidad y de reproducibilidad, los revisores necesitan registrar logs y resultados observados. No basta con decir que "funcionó": hay que mostrarlo. Ese mecanismo cumple tres funciones al mismo tiempo: detecta divergencias entre revisores, da a los autores información concreta sobre dónde apareció el problema y crea un registro auditable del propio proceso de evaluación.

## Innovaciones brasileñas: sostenibilidad y proceso como aula

Vale destacar dos contribuciones originales del modelo brasileño, que resuelven problemas no tratados por los modelos internacionales de referencia.

La primera es el sello de sostenibilidad. Su creación vino de una observación recurrente: los artefactos pueden "funcionar" y, aun así, ser difíciles de mantener, entender o extender. Un script monolítico de dos mil líneas puede ejecutarse y producir los números del artículo. Pero ¿cuál es su valor para un estudiante de posgrado que intente, dos años después, adaptarlo a una nueva pregunta de investigación? El sello Sostenible reconoce y premia el esfuerzo de organización, modularización y documentación interna del código. Con ello, señala que la comunidad valora no solo la verificación puntual, sino también la posibilidad de reutilización a largo plazo.

La segunda es la estructura interactiva del proceso de revisión. Aquí está, tal vez, el punto más interesante para esta columna. La primera ronda, que a propósito no tiene decisión, transforma lo que sería apenas un juicio en un espacio de formación. Los investigadores aprenden, durante el propio ciclo, lo que se espera de un artefacto maduro: qué criterios debe cumplir el README, cómo describir requisitos de hardware, cómo separar la instalación de la ejecución y cómo organizar las evidencias de cada resultado central del artículo.

En pocas ediciones, ese aprendizaje se refleja en artefactos mejor documentados, más reproducibles y más sostenibles. Esto ocurre no porque los autores hayan sido castigados por los errores, sino porque el proceso les enseñó, en la práctica, qué es un artefacto de calidad.

Hay un efecto parecido del lado de los revisores. Los CTA también han funcionado como una escuela para evaluadores. Por medio de las reuniones, del contacto con revisores experimentados, de la prueba de ejecución obligatoria y de la conversación con los autores, nuevos revisores se forman en buenas prácticas de evaluación, reproducibilidad e ingeniería de investigación. Entre ellos hay estudiantes de posgrado y profesionales de la industria.

Los CTA son, al mismo tiempo, un instrumento de evaluación y un instrumento de formación. Esa doble función es, probablemente, una condición necesaria para construir en Brasil una cultura sana y sostenible de artefactos de calidad.

## Los números y lo que hay detrás de ellos

Los resultados son expresivos. En la primera experiencia (SBSeg 2023), apenas el 56,52 % de los artefactos enviados recibieron el sello de disponibilidad, y solo el 13,04 % recibieron el de reproducibilidad. En 2025, el 100 % de los 38 artefactos del SBSeg recibieron el sello de disponibilidad, el 84,21 % el de funcionalidad y el 57,89 % el de reproducibilidad. Incluso el sello de sostenibilidad, creado para atender una exigencia más profunda, llegó al 71,05 % en el SBSeg 2025.

El SBSeg también registró un crecimiento del 31 % en el número de envíos de artefactos entre 2024 y 2025. Esa es una señal clara de que el proceso genera adhesión, y no rechazo.

Más importante que los números es el cambio cultural que reflejan. Los investigadores pasan a planificar experimentos y sistemas pensando en la reproducibilidad desde el inicio, y no como un ajuste de última hora antes de la publicación. Plantillas de README, formularios de revisión y guías para autores y revisores, hoy disponibles públicamente en [https://doc-artefatos.github.io](https://doc-artefatos.github.io), pasan a circular entre orientadores y estudiantes como referencia de buena práctica. En algunos laboratorios, el esqueleto del artefacto empieza a construirse junto con el esqueleto del artículo.

Entre las principales lecciones aprendidas, cuatro merecen destaque:

- La revisión de artefactos exige, en general, más esfuerzo que la revisión de los propios artículos.
- Criterios objetivos de sellos reducen bastante la subjetividad de los dictámenes.
- La prueba de ejecución es un elemento esencial en la evaluación de la reproducibilidad.
- La interacción temprana y acompañada entre autores y revisores es decisiva para la eficiencia del proceso.

## Por qué esto importa para la ciencia, para la formación y para la profesión

Hay quien trata la evaluación de artefactos como un requisito burocrático más, una exigencia adicional sobre un sistema académico ya sobrecargado. Ese modo de ver confunde costo con inversión. Sin artefactos evaluados, la literatura científica acumula afirmaciones que nadie consigue verificar, experimentos que no pueden reproducirse y sistemas cuyos detalles críticos solo existen en la memoria de quien los escribió.

Institucionalizar la evaluación de artefactos es, por encima de todo, un acto de cuidado con la comunidad. Eleva el estándar de documentación. Valora el trabajo de ingeniería que sustenta la investigación, muchas veces invisible en las métricas académicas tradicionales. Reconoce públicamente a los autores que disponibilizan materiales de calidad. Y crea condiciones para que estudiantes e investigadores en formación encuentren bases reutilizables sobre las cuales avanzar, en vez de reimplementar desde cero lo que otros ya hicieron.

Hay además un efecto que va más allá de las fronteras de la academia y que merece atención especial en una columna sobre Educación. Cuando los estudiantes aprenden, durante el ciclo de evaluación, qué es un README bien estructurado, cómo organizar dependencias, cómo documentar requisitos de hardware, cómo separar instalación de ejecución y cómo dejar un experimento reproducible en un entorno limpio, también están aprendiendo prácticas de ingeniería de software que el mercado exige todos los días.

Modularización, legibilidad, trazabilidad, empaquetado, automatización de ejecución y claridad de documentación no son apenas criterios de sello. Son competencias profesionales centrales para quien va a construir productos en empresas, startups o equipos de desarrollo del sector público.

La evaluación de artefactos amplía la formación profesional de los investigadores en formación. Conecta el rigor de la ciencia al rigor de la industria y ayuda a preparar profesionales más aptos para entregar software confiable, sostenible y auditable fuera del ambiente académico.

Hay desafíos, claro. Evaluar artefactos exige más tiempo que evaluar artículos, demanda capacitación de los revisores e impone un costo inicial a los autores. Pero la experiencia brasileña muestra que esos costos se compensan rápidamente. Con directrices claras, plantillas reutilizables y ciclos iterativos, el proceso se vuelve cada vez más eficiente, y los artefactos, cada vez mejores.

## Una invitación a la comunidad SBC

La experiencia del SBSeg y del SBRC muestra que es posible adaptar buenas prácticas internacionales al contexto brasileño, respetando las limitaciones locales y, al mismo tiempo, elevando el estándar científico de los eventos nacionales.

Más que eso, muestra que ese proceso no necesita empezar grande. Puede empezar simple y opcional, con un conjunto reducido de sellos centrado en disponibilidad y funcionalidad, y evolucionar poco a poco hacia reproducibilidad y sostenibilidad, conforme la comunidad madura. Todo el material producido (sellos, formularios de revisión, guías para autores y revisores y plantilla de README) está disponible para reutilización en [https://doc-artefatos.github.io](https://doc-artefatos.github.io). El artículo en ACM CCR ofrece una hoja de ruta práctica, con trampas a evitar y decisiones de proceso ya probadas.

Queda, entonces, una invitación directa: los eventos nacionales de computación deberían considerar la adopción gradual de procesos de evaluación de artefactos. Si queremos una ciencia más rigurosa, transparente y relevante, y una formación de investigadores más conectada con las exigencias de la investigación actual y del mercado laboral, necesitamos ir más allá del artículo publicado.

Y tú, lector: ¿te has parado a pensar en lo que pasa con tu investigación después de que el artículo es aceptado? ¿El artefacto que sustenta tus resultados estaría listo para ser ejecutado, en un entorno limpio, por alguien que nunca habló contigo? Y, más importante: ¿los investigadores que orientas estarían aprendiendo a producirlo durante su formación?

## Referencias

HEINRICH, Tiago; KREUTZ, Diego et al. An Experience Report on Artifact Evaluation in Brazilian Conferences. ACM SIGCOMM Computer Communication Review, v. 56, n. 1, abr. 2026. Disponible en: [https://dl.acm.org/doi/10.1145/3717554.3717558](https://dl.acm.org/doi/10.1145/3717554.3717558). Acceso: mayo de 2026.

EUROSYS ARTIFACT EVALUATION. EuroSys Artifact Evaluation Process. Disponible en: [https://sysartifacts.github.io/eurosys2024/](https://sysartifacts.github.io/eurosys2024/). Acceso: mayo de 2026.

OSDI ARTIFACT EVALUATION. OSDI Artifact Evaluation. Disponible en: [https://www.usenix.org/osdi24/call-for-artifacts](https://www.usenix.org/osdi24/call-for-artifacts). Acceso: mayo de 2026.

## Cómo citar este artículo

KREUTZ, Diego; HEINRICH, Tiago. Entre a teoria e a prática: a experiência brasileira na avaliação de artefatos científicos. SBC Horizontes, 16 jun. 2026. ISSN 2175-9235. Publicado originalmente en portugués. Disponible en: [https://horizontes.sbc.org.br/index.php/2026/06/entre-a-teoria-e-a-pratica/](https://horizontes.sbc.org.br/index.php/2026/06/entre-a-teoria-e-a-pratica/). Acceso: DD mes. AAAA.

## Sobre los autores

**Diego Kreutz.** Soy profesor de la Universidad Federal del Pampa (UNIPAMPA), actúo en el Programa de Posgrado en Ingeniería de Software (PPGES) y co-coordino el AI Horizon Labs. Mis actividades de investigación se concentran en ciberseguridad, inteligencia artificial aplicada e infraestructuras digitales seguras. Co-coordiné el SBSeg 2024 y he actuado, en conjunto con investigadores de las comunidades de ciberseguridad, redes de computadoras y sistemas distribuidos, en la construcción y consolidación de procesos brasileños de evaluación de artefactos científicos, tema de este artículo. Creo que la ciencia abierta, la reproducibilidad, la transparencia y la formación de personas son pilares inseparables de la investigación de calidad, y que la producción científica necesita avanzar más allá del PDF, incorporando software, datos, experimentos y artefactos reproducibles como parte integrante del conocimiento científico. Currículo Lattes: [http://lattes.cnpq.br/2781747995973774](http://lattes.cnpq.br/2781747995973774)

**Tiago Heinrich.** Soy investigador en el Max Planck Institute for Informatics (MPI), en Alemania, con actuación en ciberseguridad, sistemas y redes de computadoras. Chair de Publicaciones para la Evaluación de Artefactos del USENIX Security 2025 y 2026. He colaborado con colegas en la creación del modelo brasileño de evaluación de artefactos científicos abordado en este reportaje. Nuestra propuesta se inspira en modelos internacionales de revisión, los cuales adaptamos y perfeccionamos para atender las demandas específicas de las comunidades brasileñas de ciberseguridad y redes de computadoras. Currículo Lattes: [http://lattes.cnpq.br/1318030512054485](http://lattes.cnpq.br/1318030512054485). Website: [https://www.mpi-inf.mpg.de/tiago-heinrich](https://www.mpi-inf.mpg.de/tiago-heinrich)
