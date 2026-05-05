// efectos.js
// Atlas de Fenómenos Psicodélicos
// Lectura operativa y presencia CUSHION en sesión

const efectosData = [
  // --- DOMINIO VISUAL ---
  {
    "efecto": "Estelas visuales (Tracers)",
    "dominio": ["visual"],
    "fenomenologia": {
      "descripcion_paciente": "Los objetos en movimiento dejan un rastro de luz, sombra o halo que persiste unos instantes después de moverse. Puede sentirse curioso, bello o desorientador.",
      "signos_observables": "Mirada fija en objetos en movimiento. Movimientos lentos de manos o cabeza para observar el efecto. Puede haber risa, asombro o incomodidad si la persona se desorienta."
    },
    "mecanismo_probable": "La percepción visual puede estar procesando el movimiento con menos estabilidad habitual. El sistema da más peso a rastros sensoriales que normalmente se filtran rápido.",
    "lectura_operativa": "Si la persona observa con curiosidad y conserva orientación, no interrumpas. Si aparece pánico, desorientación o intento de levantarse por miedo a lo que ve, pasa a orientación y anclaje.",
    "presencia_cushion": {
      "prioridad": "Ubicación + Calma",
      "hacer": "Permanece estable y visible si la persona busca referencia. Usa pocas palabras y tono bajo. Observa si el fenómeno aumenta curiosidad o amenaza.",
      "evitar": "No expliques el efecto como si fuera peligroso. No sobreintervengas si la persona está tranquila."
    },
    "frases_utiles": {
      "sosten": "Estoy aquí contigo. Puedes observarlo sin intentar cambiarlo.",
      "anclaje": "Siente el contacto de tu cuerpo con la superficie. Escucha mi voz y vuelve a tu respiración.",
      "orientacion": "Esto puede verse extraño, pero estás aquí, en la sesión. Podemos volver a lo concreto si se vuelve demasiado."
    },
    "senales_intervencion_directiva": [
      "Pánico ante las distorsiones visuales.",
      "Intento de quitarse la venda o abandonar la sala por desorientación.",
      "Pérdida de respuesta a la voz o dificultad para orientarse en el espacio.",
      "Riesgo físico por movimiento impulsivo."
    ],
    "accion_directiva": "Reducir estímulos visuales, orientar a cuerpo y espacio, usar voz clara y mantener presencia física estable."
  },

  {
    "efecto": "Geometría fractal",
    "dominio": ["visual"],
    "fenomenologia": {
      "descripcion_paciente": "Aparecen patrones geométricos, mandalas, túneles, formas repetitivas o diseños complejos, especialmente con ojos cerrados. Pueden ser intensos y cambiantes.",
      "signos_observables": "Quietud, expresión de asombro, sonrisa, lágrimas o mirada fija. Puede haber inmersión profunda y menor respuesta verbal durante algunos minutos."
    },
    "mecanismo_probable": "El sistema visual puede estar generando patrones internos con menos control de filtros habituales. La experiencia puede sentirse envolvente sin que implique pérdida de seguridad por sí misma.",
    "lectura_operativa": "Si hay fascinación, calma o inmersión estable, sostén sin intervenir. Si la persona se asusta, pierde contacto prolongado o interpreta las formas como amenaza, orienta y ancla.",
    "presencia_cushion": {
      "prioridad": "Hospitalidad + No imposición",
      "hacer": "Permite que la experiencia visual ocurra sin interpretarla. Mantén una presencia receptiva y no dirijas el contenido.",
      "evitar": "No digas qué significan los patrones. No conviertas la geometría en mensaje espiritual o diagnóstico."
    },
    "frases_utiles": {
      "sosten": "Estoy contigo. No necesitas explicar lo que ves ahora.",
      "anclaje": "Siente tu respiración y el peso del cuerpo. Puedes volver a mi voz si lo necesitas.",
      "orientacion": "Las imágenes pueden ser intensas. Estás en un espacio seguro y podemos ir más despacio."
    },
    "senales_intervencion_directiva": [
      "Desconexión prolongada sin respuesta a señales pactadas.",
      "Miedo intenso ante los patrones.",
      "Interpretación amenazante o persecutoria de las formas.",
      "Necesidad de levantarse sin orientación."
    ],
    "accion_directiva": "Usar orientación verbal breve, pedir contacto con cuerpo o entorno y reducir estímulos si hay sobrecarga."
  },

  {
    "efecto": "Sinestesia (auditiva-visual)",
    "dominio": ["visual", "perceptivo"],
    "fenomenologia": {
      "descripcion_paciente": "Los sonidos pueden sentirse como colores, formas, texturas o movimientos. La música puede parecer visible o corporal.",
      "signos_observables": "Movimientos rítmicos, respiración sincronizada con música, sonrisa, llanto suave o expresión de asombro. También puede aparecer sobrecarga sensorial."
    },
    "mecanismo_probable": "La separación habitual entre sentidos puede volverse más flexible. Sonido, color, cuerpo y emoción pueden mezclarse en una sola experiencia perceptiva.",
    "lectura_operativa": "Si la experiencia se vive con apertura y regulación, no intervengas. Si hay sobrecarga, confusión o rechazo intenso a la música, reduce estímulos y orienta al cuerpo.",
    "presencia_cushion": {
      "prioridad": "Calma + Ubicación",
      "hacer": "Observa si la música ayuda o abruma. Mantén estabilidad y ajusta el entorno si la persona muestra saturación.",
      "evitar": "No subas intensidad sensorial para 'profundizar'. No fuerces música, luz o estímulos."
    },
    "frases_utiles": {
      "sosten": "Puedes dejar que los sonidos y las sensaciones pasen a su ritmo.",
      "anclaje": "Siente un punto del cuerpo. Podemos bajar la intensidad si lo necesitas.",
      "orientacion": "Si se siente demasiado, volvemos a algo simple: respiración, cuerpo y silencio."
    },
    "senales_intervencion_directiva": [
      "La persona se cubre ojos u oídos con angustia.",
      "Confusión creciente o llanto persistente por sobrecarga.",
      "Rechazo claro a la música o estímulos.",
      "Pérdida de contacto interpersonal."
    ],
    "accion_directiva": "Reducir o pausar estímulos, bajar volumen, ajustar luz y orientar a respiración o contacto corporal."
  },

  {
    "efecto": "Respiración de superficies (Drifting)",
    "dominio": ["visual"],
    "fenomenologia": {
      "descripcion_paciente": "Paredes, objetos, texturas o el suelo parecen moverse, ondular o respirar. Puede sentirse agradable, extraño o inestable.",
      "signos_observables": "Mirada fija en superficies, tocar paredes o piso para verificar estabilidad, comentarios como 'todo se mueve' o gestos de confusión leve."
    },
    "mecanismo_probable": "La percepción de estabilidad del entorno puede flexibilizarse. Estímulos visuales estáticos se interpretan como si tuvieran movimiento.",
    "lectura_operativa": "Si la persona observa sin angustia, sostén. Si cree que el entorno es peligroso o intenta salir, orienta al espacio físico y reduce estímulos visuales.",
    "presencia_cushion": {
      "prioridad": "Ubicación + Seguridad",
      "hacer": "Ofrece una referencia estable: tu voz, un objeto fijo, el suelo o la manta. Mantén una presencia predecible.",
      "evitar": "No discutas si el entorno se mueve o no. No ridiculices la percepción."
    },
    "frases_utiles": {
      "sosten": "Puedes observarlo sin tener que hacer nada con eso.",
      "anclaje": "Siente el suelo o la manta. Este punto está estable.",
      "orientacion": "Lo que ves puede cambiar, pero estás aquí en la sala y el espacio está contenido."
    },
    "senales_intervencion_directiva": [
      "Pánico por sentir que el entorno es inestable.",
      "Intento de levantarse o salir sin orientación.",
      "Confusión visual que compromete seguridad física.",
      "Necesidad repetida de verificar objetos con angustia creciente."
    ],
    "accion_directiva": "Reducir estímulos visuales, orientar a un punto fijo y mantener al participante en una postura segura."
  },

  {
    "efecto": "Pareidolia (ver caras en patrones)",
    "dominio": ["visual", "cognitivo"],
    "fenomenologia": {
      "descripcion_paciente": "La persona ve caras, figuras o presencias en patrones, sombras, texturas o la oscuridad. Puede sentir que tienen intención, mensaje o carga emocional.",
      "signos_observables": "Mirada prolongada a objetos ambiguos, reacción intensa ante paredes, alfombras o sombras. Puede decir que algo lo mira, le habla o tiene intención."
    },
    "mecanismo_probable": "La mente puede proyectar significado sobre estímulos ambiguos. El sistema perceptivo intenta organizar patrones y puede convertirlos en rostros, presencias o figuras.",
    "lectura_operativa": "Si hay curiosidad y flexibilidad, no impongas interpretación. Si el contenido se vuelve amenazante, rígido o persecutorio, orienta y reencuadra sin confirmar la creencia.",
    "presencia_cushion": {
      "prioridad": "No imposición + Orientación",
      "hacer": "Valida la vivencia sin validar literalmente el contenido. Mantén el marco de sesión y vuelve a cuerpo, espacio y voz.",
      "evitar": "No digas que la figura es real, espiritual, ancestral o diagnóstica. No refuerces delirios."
    },
    "frases_utiles": {
      "sosten": "Puedes observar lo que aparece sin decidir ahora qué significa.",
      "anclaje": "Toca la manta o siente tus pies. Vuelve conmigo a este espacio.",
      "orientacion": "Eso puede sentirse muy real. Ahora no necesitamos confirmarlo ni explicarlo; volvamos a tu cuerpo y a la sala."
    },
    "senales_intervencion_directiva": [
      "Narrativa persecutoria o delirante sobre la figura.",
      "Creencia rígida de que la presencia amenaza o controla.",
      "Respuesta agresiva o intento de huida.",
      "Pérdida del juicio de realidad sin capacidad de responder a orientación."
    ],
    "accion_directiva": "Reorientar de forma firme, reducir estímulos ambiguos, evitar confirmar el contenido y activar protocolo si hay riesgo."
  },

  {
    "efecto": "Visiones figurales complejas",
    "dominio": ["visual"],
    "fenomenologia": {
      "descripcion_paciente": "Aparecen personas, entidades, paisajes, escenas o recuerdos visuales vívidos, especialmente con ojos cerrados. Pueden sentirse simbólicos, autobiográficos o extraños.",
      "signos_observables": "Quietud prolongada, lágrimas, asombro, narración de escenas o presencias. Puede haber inmersión profunda y menor contacto verbal."
    },
    "mecanismo_probable": "La imaginación visual, memoria y significado pueden combinarse con gran intensidad. La experiencia puede sentirse como una escena interna muy vívida.",
    "lectura_operativa": "Si la persona observa y mantiene estabilidad, sostén sin interpretar. Si la visión genera terror, delirio, confusión o pérdida prolongada de contacto, orienta y ancla.",
    "presencia_cushion": {
      "prioridad": "Hospitalidad + No imposición",
      "hacer": "Recibe la narración sin decidir qué significa. Permite silencio y evita preguntas invasivas.",
      "evitar": "No confirmes entidades, mensajes o presencias. No empujes a explorar escenas traumáticas durante el pico."
    },
    "frases_utiles": {
      "sosten": "Puedes dejar que la imagen esté ahí sin tener que entenderla ahora.",
      "anclaje": "Vuelve al contacto del cuerpo con la superficie. Estoy aquí contigo.",
      "orientacion": "Puede sentirse muy intenso. Ahora solo necesitamos que recuerdes que estás en sesión y acompañado."
    },
    "senales_intervencion_directiva": [
      "Angustia marcada o llanto incontenible.",
      "Pérdida prolongada de contacto con el facilitador.",
      "Ideas delirantes asociadas a la visión.",
      "Riesgo físico por movimiento impulsivo."
    ],
    "accion_directiva": "Usar orientación verbal clara, pedir respuesta simple a la voz y volver a cuerpo/entorno antes de cualquier exploración de contenido."
  },

  // --- DOMINIO COGNITIVO ---
  {
    "efecto": "Distorsión temporal",
    "dominio": ["cognitivo", "perceptivo"],
    "fenomenologia": {
      "descripcion_paciente": "El tiempo parece estirarse, comprimirse, repetirse o desaparecer. Minutos pueden sentirse como horas, o todo puede sentirse suspendido.",
      "signos_observables": "Asombro al preguntar por la hora, dificultad para ordenar la secuencia de eventos, introspección profunda o frases como 'esto no termina'."
    },
    "mecanismo_probable": "La percepción del tiempo puede perder su referencia habitual. La atención se concentra en el presente o en ciclos internos de experiencia.",
    "lectura_operativa": "Si hay asombro y calma, sostén. Si aparece miedo a quedar atrapado, a no volver o a que el tiempo no termine, orienta con referencias simples y temporales.",
    "presencia_cushion": {
      "prioridad": "Orientación + Calma",
      "hacer": "Usa pocas referencias concretas: estás en sesión, esto es temporal, yo estoy aquí. Mantén ritmo lento.",
      "evitar": "No bromees con el tiempo. No digas 'falta mucho' si eso puede aumentar pánico."
    },
    "frases_utiles": {
      "sosten": "El tiempo puede sentirse diferente. No necesitas medirlo ahora.",
      "anclaje": "Respira conmigo. Siente este momento, este cuerpo, esta superficie.",
      "orientacion": "Esto es temporal. Estás en una sesión y yo estoy aquí contigo."
    },
    "senales_intervencion_directiva": [
      "Pánico por sentir que el tiempo se detuvo.",
      "Repetición angustiada de que 'esto no termina'.",
      "Desorientación temporal con agitación.",
      "Incapacidad de responder a orientación básica."
    ],
    "accion_directiva": "Orientar con voz lenta, repetir información básica, usar respiración y contacto con superficie como referencia temporal y corporal."
  },

  {
    "efecto": "Hiperasociación (pensamiento divergente)",
    "dominio": ["cognitivo"],
    "fenomenologia": {
      "descripcion_paciente": "La mente conecta ideas rápidamente. Todo parece relacionado o cargado de significado. Puede sentirse creativo, revelador o abrumador.",
      "signos_observables": "Verbalización fluida, cambios rápidos de tema, asociaciones amplias, entusiasmo, asombro o pérdida de foco."
    },
    "mecanismo_probable": "El pensamiento puede volverse menos lineal y más asociativo. Ideas que normalmente estarían separadas pueden conectarse con facilidad.",
    "lectura_operativa": "Si hay curiosidad y flexibilidad, escucha sin dirigir. Si aparecen certezas rígidas, grandiosidad, paranoia o desorganización, limita contenido y orienta al presente.",
    "presencia_cushion": {
      "prioridad": "Interés + No imposición",
      "hacer": "Escucha sin convertir cada idea en conclusión. Puedes ofrecer anotar algo para después, sin analizarlo durante el pico.",
      "evitar": "No estimules más asociaciones. No tomes decisiones ni hagas interpretaciones importantes en sesión."
    },
    "frases_utiles": {
      "sosten": "Puedes dejar que las ideas pasen sin tener que seguirlas todas.",
      "anclaje": "Volvamos un momento a tu respiración. Una idea a la vez.",
      "orientacion": "No necesitamos decidir nada ahora. Podemos recogerlo y revisarlo después con calma."
    },
    "senales_intervencion_directiva": [
      "Discurso incoherente persistente.",
      "Aumento de ansiedad por exceso de ideas.",
      "Creencias rígidas o grandiosas sin capacidad de pausa.",
      "Pérdida de contacto interpersonal."
    ],
    "accion_directiva": "Reducir estimulación verbal, anclar al cuerpo, posponer decisiones y restaurar contacto con la sala."
  },

  {
    "efecto": "Rumiación circular (loops de pensamiento)",
    "dominio": ["cognitivo", "emocional"],
    "fenomenologia": {
      "descripcion_paciente": "La misma idea se repite con fuerza. La persona siente que debe resolverla, pero no avanza. Puede sentirse atrapada en una espiral mental.",
      "signos_observables": "Repetición verbal de la misma preocupación, mirada fija, ansiedad creciente, frustración o lenguaje sin avance narrativo."
    },
    "mecanismo_probable": "Un patrón de pensamiento rígido puede mantenerse activo mientras la experiencia lo vuelve más visible. La mente intenta controlar o resolver algo bajo alta carga emocional.",
    "lectura_operativa": "No entres a resolver el contenido del loop. Si la persona puede observarlo, sostén. Si aumenta angustia o rigidez, ancla al cuerpo y reduce procesamiento verbal.",
    "presencia_cushion": {
      "prioridad": "Orientación + No imposición",
      "hacer": "Interrumpe suavemente la urgencia de resolver. Devuelve a cuerpo, respiración y presente.",
      "evitar": "No debatas la idea. No ofrezcas soluciones complejas durante el bucle."
    },
    "frases_utiles": {
      "sosten": "No necesitas resolver eso ahora. Puedes notar que la idea está repitiéndose.",
      "anclaje": "Lleva la atención a tus pies o manos. Respira más lento conmigo.",
      "orientacion": "Ahora volvemos al cuerpo. La idea puede esperar; tu seguridad va primero."
    },
    "senales_intervencion_directiva": [
      "Angustia severa sin capacidad de pausa.",
      "Pánico asociado al bucle.",
      "Discurso cada vez más desorganizado.",
      "Fijación en una idea persecutoria o autolesiva."
    ],
    "accion_directiva": "Reducir lenguaje conceptual, usar anclaje somático, orientar al presente y escalar si hay riesgo o pérdida del juicio de realidad."
  },

  {
    "efecto": "Despersonalización / Disolución del ego",
    "dominio": ["cognitivo", "autoprocesamiento"],
    "fenomenologia": {
      "descripcion_paciente": "La persona siente que ya no es ella misma, que los límites del cuerpo se disuelven o que el mundo se vuelve irreal. Puede vivirse como paz o como miedo a desaparecer.",
      "signos_observables": "Quietud profunda, asombro, frases como 'no sé quién soy', o ansiedad, confusión y búsqueda de orientación si se vive como pérdida de control."
    },
    "mecanismo_probable": "La narrativa habitual del yo puede volverse menos fija. Las referencias normales de identidad, cuerpo y entorno pueden sentirse más flexibles o difusas.",
    "lectura_operativa": "Si hay paz o apertura, sostén sin interferir. Si aparece terror, fragmentación o miedo a morir/desaparecer, orienta al cuerpo y al encuadre de sesión.",
    "presencia_cushion": {
      "prioridad": "Hospitalidad + Orientación",
      "hacer": "Permite la experiencia si es estable. Si hay miedo, ofrece referencias concretas: nombre, cuerpo, sala, voz y respiración.",
      "evitar": "No digas que la persona está 'muriendo' simbólicamente. No espiritualices el terror."
    },
    "frases_utiles": {
      "sosten": "Estoy contigo. No tienes que definir quién eres ahora.",
      "anclaje": "Siente tu respiración, tu cuerpo y el contacto con la superficie. Aquí hay un punto de apoyo.",
      "orientacion": "Esta sensación es temporal. Estás en tu sesión, en este espacio, acompañado."
    },
    "senales_intervencion_directiva": [
      "Pánico ante la sensación de perder el yo.",
      "Desconexión prolongada del entorno o facilitador.",
      "Confusión marcada sobre dónde está o quién acompaña.",
      "Agitación por miedo a desaparecer o morir."
    ],
    "accion_directiva": "Orientar de forma firme y tranquila, usar anclaje corporal y mantener límites claros del rol del facilitador."
  },

  {
    "efecto": "Flexibilidad cognitiva",
    "dominio": ["cognitivo"],
    "fenomenologia": {
      "descripcion_paciente": "La mente se siente más abierta. Aparecen perspectivas nuevas, menos rigidez y posibilidad de pensar desde otro lugar.",
      "signos_observables": "Mayor receptividad, cambios de perspectiva, lenguaje menos defensivo, curiosidad. También puede haber sugestionabilidad aumentada."
    },
    "mecanismo_probable": "Creencias o interpretaciones habituales pueden relajarse temporalmente. Esto puede permitir nuevas perspectivas, pero también aumenta la influencia del entorno y del lenguaje del facilitador.",
    "lectura_operativa": "Es un estado útil si se acompaña sin dirigir. Prioriza no imposición: no introduzcas ideas, explicaciones o conclusiones que la persona pueda adoptar por sugestión.",
    "presencia_cushion": {
      "prioridad": "No imposición + Interés",
      "hacer": "Escucha, refleja con cuidado y evita dirigir la conclusión. Protege la autonomía de la persona.",
      "evitar": "No aproveches la apertura para instalar creencias, promesas o interpretaciones."
    },
    "frases_utiles": {
      "sosten": "Puedes notar esa apertura sin apresurarte a concluir.",
      "anclaje": "Respira y quédate con una sensación o idea simple por ahora.",
      "orientacion": "No necesitamos decidir nada en este momento. Después habrá tiempo para revisar qué sigue siendo útil."
    },
    "senales_intervencion_directiva": [
      "Alta sugestionabilidad con búsqueda de respuestas externas.",
      "Desorganización del pensamiento.",
      "Adopción rígida de conclusiones súbitas.",
      "Pérdida de capacidad para pausar o cuestionar."
    ],
    "accion_directiva": "Limitar interpretaciones, posponer decisiones, orientar al presente y reforzar que las conclusiones se revisarán después."
  },

  {
    "efecto": "Insight noético",
    "dominio": ["cognitivo"],
    "fenomenologia": {
      "descripcion_paciente": "Surge una comprensión que se siente profunda, evidente o verdadera. Puede ser difícil de explicar, pero tener mucha fuerza subjetiva.",
      "signos_observables": "Lágrimas, asombro, calma intensa, frases de revelación o certezas sobre sí mismo, la vida o el mundo."
    },
    "mecanismo_probable": "La experiencia puede unir emoción, significado y certeza subjetiva. Algo puede sentirse verdadero antes de haber sido revisado con calma.",
    "lectura_operativa": "Valida la importancia subjetiva sin confirmar que sea verdad objetiva. Sostén la experiencia y protege la revisión crítica posterior.",
    "presencia_cushion": {
      "prioridad": "No imposición + Orientación",
      "hacer": "Permite que la comprensión exista sin fijarla como conclusión definitiva. Usa lenguaje que mantenga apertura.",
      "evitar": "No digas 'esa es la verdad'. No conviertas el insight en mandato o diagnóstico."
    },
    "frases_utiles": {
      "sosten": "Eso parece importante. No necesitas explicarlo por completo ahora.",
      "anclaje": "Siente tu cuerpo mientras eso se asienta. Respira y déjalo estar.",
      "orientacion": "Podemos guardar esta comprensión y revisarla después con más calma."
    },
    "senales_intervencion_directiva": [
      "Grandiosidad o omnipotencia.",
      "Certeza delirante sin capacidad de cuestionamiento.",
      "Impulso a tomar decisiones inmediatas.",
      "Contenido persecutorio, mesiánico o autolesivo."
    ],
    "accion_directiva": "Validar la intensidad sin reforzar literalidad, anclar al presente y posponer decisiones o interpretaciones."
  },

  // --- DOMINIO EMOCIONAL ---
  {
    "efecto": "Miedo intenso / Ansiedad",
    "dominio": ["emocional"],
    "fenomenologia": {
      "descripcion_paciente": "El miedo puede sentirse como angustia corporal, pánico a perder el control, miedo a morir, desaparecer o quedar atrapado en la experiencia.",
      "signos_observables": "Llanto, hiperventilación, temblor, agitación, vigilancia, lenguaje desorganizado o intento de abandonar la sala."
    },
    "mecanismo_probable": "El sistema emocional puede estar procesando amenaza con alta intensidad. Puede haber lucha contra la experiencia, necesidad de control o dificultad para aceptar lo que aparece.",
    "lectura_operativa": "La intensidad emocional no exige cortar el proceso si la persona conserva seguridad. Si hay pánico sostenido, agitación o riesgo físico, pasa a anclaje y escalamiento según respuesta.",
    "presencia_cushion": {
      "prioridad": "Seguridad + Calma",
      "hacer": "Baja tu ritmo, mantén voz firme y suave, confirma que está acompañado. Primero co-regula; luego orienta.",
      "evitar": "No digas 'no pasa nada'. No minimices. No empujes a atravesar miedo si la persona está perdiendo seguridad."
    },
    "frases_utiles": {
      "sosten": "Estoy aquí contigo. No tienes que pelear con esto ahora.",
      "anclaje": "Pon atención a tu exhalación. Siente el peso de tu cuerpo sobre la superficie.",
      "orientacion": "Esto se siente muy intenso, pero estás en la sesión y estoy aquí. Vamos paso a paso."
    },
    "senales_intervencion_directiva": [
      "Hiperventilación persistente o pánico sostenido.",
      "Intento de autoagresión o de abandonar el espacio sin orientación.",
      "Agitación psicomotriz peligrosa.",
      "Verbalizaciones incoherentes persistentes o pérdida de contacto."
    ],
    "accion_directiva": "Anclar a cuerpo y entorno, reducir estímulos, usar instrucciones breves y activar protocolo de seguridad si no responde."
  },

  {
    "efecto": "Culpa expansiva / Juicio moral intenso",
    "dominio": ["emocional", "cognitivo"],
    "fenomenologia": {
      "descripcion_paciente": "Aparece culpa intensa, autocrítica o sensación de haber hecho algo irreparable. Puede sentirse como una verdad devastadora sobre sí mismo.",
      "signos_observables": "Llanto, frases repetitivas de culpa o insuficiencia, inquietud, contracción corporal, dificultad para soltar una idea moral o autocrítica."
    },
    "mecanismo_probable": "Un patrón de autojuicio puede hacerse muy visible y emocionalmente intenso. La mente puede tomar una evaluación interna como verdad absoluta.",
    "lectura_operativa": "No confirmes el contenido de culpa. Si hay contacto y emoción procesable, sostén. Si hay rumiación, pánico o autodesprecio rígido, orienta y reencuadra sin discutir. ",
    "presencia_cushion": {
      "prioridad": "Hospitalidad + No imposición",
      "hacer": "Recibe la culpa sin reforzarla. Diferencia sentir culpa de concluir que la culpa es toda la verdad.",
      "evitar": "No digas que la persona debe perdonarse ahora. No conviertas la culpa en lección espiritual."
    },
    "frases_utiles": {
      "sosten": "Puedes sentir esto sin convertirlo en una sentencia sobre quién eres.",
      "anclaje": "Vuelve al cuerpo. Siente tus manos, tus pies, el contacto con la superficie.",
      "orientacion": "No necesitamos resolver esta culpa ahora. Podemos sostenerla sin obedecerla."
    },
    "senales_intervencion_directiva": [
      "Rumiación moral sin pausa.",
      "Autodesprecio extremo o verbalizaciones de daño hacia sí mismo.",
      "Pánico asociado a culpa.",
      "Creencia rígida e incuestionable de condena, castigo o daño irreparable."
    ],
    "accion_directiva": "Validar emoción sin confirmar contenido, anclar al presente y escalar si hay ideación suicida o pérdida del juicio de realidad."
  },

  {
    "efecto": "Ansiedad de rebote (0-72h)",
    "dominio": ["emocional"],
    "fenomenologia": {
      "descripcion_paciente": "Después de la sesión aparece inquietud, fragilidad emocional, miedo, insomnio o sensación de que algo quedó abierto.",
      "signos_observables": "Reportes de ansiedad persistente, irritabilidad, dificultad para dormir, confusión leve, temor a haber quedado mal o desconexión leve."
    },
    "mecanismo_probable": "Después de una experiencia intensa, el sistema puede necesitar tiempo para recuperar estabilidad. Material emocional abierto puede seguir activo durante horas o días.",
    "lectura_operativa": "Aunque ocurre después de la sesión, debe quedar como fenómeno de seguimiento. No lo trates como fracaso. Observa intensidad, duración, sueño, funcionalidad y riesgo.",
    "presencia_cushion": {
      "prioridad": "Seguridad + Orientación",
      "hacer": "Ofrece encuadre claro, seguimiento y referencias simples de regulación. Normaliza sin banalizar.",
      "evitar": "No prometas que todo desaparecerá solo. No interpretes el malestar como sanación inevitable."
    },
    "frases_utiles": {
      "sosten": "Esto puede pasar después de una experiencia intensa. Vamos a observar cómo evoluciona.",
      "anclaje": "Vuelve a rutinas simples: dormir, comer, hidratarte, caminar suave y hablar con apoyo seguro.",
      "orientacion": "Si esto aumenta, dura más de lo esperado o aparecen ideas de hacerte daño, necesitamos apoyo clínico."
    },
    "senales_intervencion_directiva": [
      "Ansiedad severa o confusión persistente más de 72 horas.",
      "Insomnio grave o deterioro funcional.",
      "Sensación de daño permanente.",
      "Ideación suicida, paranoia o desrealización persistente."
    ],
    "accion_directiva": "Activar seguimiento clínico, red de apoyo y evaluación profesional si hay deterioro, riesgo o persistencia."
  },

  {
    "efecto": "Ilimitación oceánica (OBN)",
    "dominio": ["emocional", "autoprocesamiento"],
    "fenomenologia": {
      "descripcion_paciente": "La persona siente unidad, conexión, amplitud, amor o pérdida placentera de límites personales. Puede vivirse como profundamente significativo.",
      "signos_observables": "Calma, quietud, lágrimas, sonrisa, frases sobre unidad, amor, totalidad o conexión con todo."
    },
    "mecanismo_probable": "Los límites habituales del yo pueden sentirse más flexibles. La experiencia de separación puede disminuir y aparecer una sensación intensa de conexión.",
    "lectura_operativa": "Si hay paz y regulación, no intervengas. Si la experiencia se convierte en grandiosidad, certeza metafísica rígida o omnipotencia, orienta sin confrontar. ",
    "presencia_cushion": {
      "prioridad": "Hospitalidad + No imposición",
      "hacer": "Permite la experiencia sin apropiarte de su significado. Protege la autonomía interpretativa.",
      "evitar": "No confirmes creencias metafísicas. No digas que la persona está iluminada o curada."
    },
    "frases_utiles": {
      "sosten": "Puedes descansar en esta experiencia sin tener que explicarla ahora.",
      "anclaje": "Siente también tu cuerpo aquí, respirando, sostenido por la superficie.",
      "orientacion": "Lo que aparece puede ser importante. No necesitamos convertirlo ahora en una conclusión."
    },
    "senales_intervencion_directiva": [
      "Grandiosidad o discurso mesiánico.",
      "Paranoia o pánico tras la apertura expansiva.",
      "Pérdida de juicio de realidad.",
      "Impulso a tomar decisiones radicales durante o inmediatamente después."
    ],
    "accion_directiva": "Orientar al cuerpo y al marco de sesión, evitar reforzar conclusiones rígidas y posponer decisiones."
  },

  {
    "efecto": "Catarsis emocional",
    "dominio": ["emocional"],
    "fenomenologia": {
      "descripcion_paciente": "Aparece una descarga emocional intensa: llanto, grito, temblor o alivio después de expresar algo contenido.",
      "signos_observables": "Llanto profundo, respiración irregular, temblores, expresión de dolor o alivio, relajación corporal después del pico emocional."
    },
    "mecanismo_probable": "Emociones evitadas o contenidas pueden hacerse accesibles con mayor intensidad. El cuerpo puede expresar carga afectiva antes de que haya palabras claras.",
    "lectura_operativa": "Si hay descarga con contacto y seguridad, sostén. No cortes la emoción por incomodidad. Si hay disociación, retraumatización o pérdida de seguridad, orienta y ancla.",
    "presencia_cushion": {
      "prioridad": "Seguridad + Hospitalidad",
      "hacer": "Haz espacio a la emoción sin empujarla. Observa respiración, contacto y recuperación después de la ola emocional.",
      "evitar": "No pidas detalles traumáticos durante la catarsis. No dramatices ni celebres la intensidad."
    },
    "frases_utiles": {
      "sosten": "Estoy aquí. Puedes sentirlo sin tener que explicarlo.",
      "anclaje": "Respira. Siente la superficie sosteniendo tu cuerpo.",
      "orientacion": "No necesitamos entrar en la historia ahora. Solo vuelve al cuerpo y a este momento."
    },
    "senales_intervencion_directiva": [
      "Llanto o grito que evoluciona a pánico o desorganización.",
      "Disociación marcada o pérdida de contacto.",
      "Riesgo físico por movimiento intenso.",
      "Reviviscencia traumática sin capacidad de orientación."
    ],
    "accion_directiva": "Reducir estímulos, orientar al cuerpo, evitar exploración narrativa intensa y escalar si no recupera seguridad."
  },

  // --- DOMINIO AUTOPROCESAMIENTO ---
  {
    "efecto": "Silencio autorreferencial",
    "dominio": ["autoprocesamiento", "emocional"],
    "fenomenologia": {
      "descripcion_paciente": "La autocrítica baja. La persona puede mirar errores, dolor o emociones sin atacarse. Aparece alivio, ternura o quietud interna.",
      "signos_observables": "Rostro más relajado, respiración profunda, menor lenguaje autocrítico, llanto con alivio o silencio estable."
    },
    "mecanismo_probable": "La narrativa habitual de autojuicio puede perder fuerza temporalmente. La persona puede observarse con menos defensa o castigo interno.",
    "lectura_operativa": "Si aparece suavidad y estabilidad, no llenes el silencio. Si se convierte en falsa redención, grandiosidad o rechazo de ayuda futura, orienta con cautela.",
    "presencia_cushion": {
      "prioridad": "Interés + No imposición",
      "hacer": "Respeta el silencio. Refleja sin exagerar. Deja que la persona encuentre su propio lenguaje.",
      "evitar": "No declares que la persona ya sanó. No conviertas el alivio en conclusión clínica."
    },
    "frases_utiles": {
      "sosten": "Puedes quedarte con esa suavidad sin tener que explicarla.",
      "anclaje": "Nota cómo se siente tu cuerpo cuando baja la autocrítica.",
      "orientacion": "Esto puede ser importante. Dejemos que se asiente antes de sacar conclusiones."
    },
    "senales_intervencion_directiva": [
      "Grandiosidad, infalibilidad o certeza de curación completa.",
      "Rechazo absoluto de ayuda o tratamientos necesarios.",
      "Desorganización tras el alivio.",
      "Bypass espiritual o negación del conflicto real."
    ],
    "accion_directiva": "Validar el alivio sin absolutizarlo, orientar al proceso y posponer conclusiones definitivas."
  },

  {
    "efecto": "Aceptación emocional",
    "dominio": ["autoprocesamiento", "emocional"],
    "fenomenologia": {
      "descripcion_paciente": "La persona puede sentir tristeza, rabia, miedo o dolor sin huir. Puede haber malestar, pero también una base de calma o permiso interno.",
      "signos_observables": "Llanto con estabilidad, respiración que se regula, frases como 'puedo sentir esto', menor rigidez corporal y presencia sostenida."
    },
    "mecanismo_probable": "La evitación puede disminuir y permitir más contacto con emoción difícil. La persona puede permanecer con el malestar sin reaccionar automáticamente.",
    "lectura_operativa": "Si hay emoción con presencia, sostén. No rescates. Si aparece retraumatización, disociación o pérdida de regulación, ancla y reduce profundidad emocional.",
    "presencia_cushion": {
      "prioridad": "Seguridad + Hospitalidad",
      "hacer": "Sostén la emoción sin dirigir. Permite pausas, respiración y contacto corporal.",
      "evitar": "No fuerces exposición emocional. No digas que el dolor es necesario o que debe seguir."
    },
    "frases_utiles": {
      "sosten": "Estoy contigo. No hay prisa por entenderlo.",
      "anclaje": "Siente una parte estable del cuerpo: pies, manos o espalda.",
      "orientacion": "Puedes tomar una pausa. No tenemos que ir más profundo ahora."
    },
    "senales_intervencion_directiva": [
      "Disociación o desconexión marcada.",
      "Llanto incontrolable sin respuesta a la voz.",
      "Reviviscencia traumática intensa.",
      "Necesidad de escapar del espacio o del cuerpo."
    ],
    "accion_directiva": "Orientar al entorno físico, estabilizar respiración, pausar exploración emocional y activar apoyo clínico si no recupera regulación."
  },

  {
    "efecto": "Reconstrucción del autoesquema",
    "dominio": ["autoprocesamiento"],
    "fenomenologia": {
      "descripcion_paciente": "La persona siente que puede verse desde otro ángulo. Viejas identidades, culpas o historias personales parecen menos fijas.",
      "signos_observables": "Asombro, frases sobre una nueva perspectiva de la vida, menor lenguaje rígido sobre sí mismo, apertura a revisar narrativas personales."
    },
    "mecanismo_probable": "La historia habitual sobre el yo puede flexibilizarse. Pueden aparecer nuevas formas de organizar recuerdos, identidad y sentido personal.",
    "lectura_operativa": "Acompaña sin fijar una nueva identidad. Si aparecen conclusiones radicales, grandiosidad o negación de hechos biográficos, orienta y pospone decisiones.",
    "presencia_cushion": {
      "prioridad": "No imposición + Orientación",
      "hacer": "Permite nuevas perspectivas sin convertirlas en verdad final. Mantén el marco de sesión y protege decisiones futuras.",
      "evitar": "No ayudes a construir una nueva narrativa definitiva durante el pico. No refuerces omnipotencia."
    },
    "frases_utiles": {
      "sosten": "Puedes observar esa nueva perspectiva sin tener que decidir quién eres ahora.",
      "anclaje": "Siente el cuerpo mientras esta claridad aparece. Respira y deja que se asiente.",
      "orientacion": "No necesitamos reescribir toda tu vida ahora. Podemos guardar esto para revisarlo después."
    },
    "senales_intervencion_directiva": [
      "Creencias de omnipotencia o identidad grandiosa.",
      "Negación rígida de eventos biográficos relevantes.",
      "Impulso a cortar vínculos, tratamientos o responsabilidades de inmediato.",
      "Shock ontológico con ansiedad o desrealización."
    ],
    "accion_directiva": "Validar la apertura, anclar a historia concreta y posponer decisiones identitarias o conductuales."
  },

  // --- DOMINIO SOMÁTICO ---
  {
    "efecto": "Náusea no emética",
    "dominio": ["somatico"],
    "fenomenologia": {
      "descripcion_paciente": "Malestar estomacal, sensación de náusea o incomodidad abdominal sin llegar necesariamente al vómito.",
      "signos_observables": "Palidez, gesto de disgusto, inquietud, respiración superficial, necesidad de cambiar postura o llevar manos al abdomen."
    },
    "mecanismo_probable": "Las señales internas del cuerpo pueden sentirse más intensas. La atención puede amplificar sensaciones gastrointestinales y volverlas difíciles de ignorar.",
    "lectura_operativa": "Si hay incomodidad sin signos médicos graves, sostén con calma y orientación corporal. Si el malestar dispara pánico o miedo a intoxicación, ancla y evalúa seguridad física.",
    "presencia_cushion": {
      "prioridad": "Calma + Orientación",
      "hacer": "Habla poco, observa color, respiración, hidratación y postura. Ofrece ajustes simples sin dramatizar.",
      "evitar": "No espiritualices la náusea como limpieza. No ignores señales médicas si hay dolor intenso, desmayo o síntomas atípicos."
    },
    "frases_utiles": {
      "sosten": "Siente la incomodidad sin pelear con ella. Estoy aquí.",
      "anclaje": "Lleva la respiración suave al abdomen. Podemos ajustar tu postura.",
      "orientacion": "Vamos a observar cómo cambia. Si aumenta o aparece algo distinto, lo revisamos."
    },
    "senales_intervencion_directiva": [
      "Pánico somático o miedo intenso a intoxicación.",
      "Vómito persistente, dolor intenso o signos de deshidratación.",
      "Desmayo, confusión médica o síntomas atípicos.",
      "Incapacidad de recuperar respiración estable."
    ],
    "accion_directiva": "Ajustar postura, reducir estímulos, ofrecer recipiente/agua si procede, observar signos físicos y activar apoyo médico si hay señales relevantes."
  },

  {
    "efecto": "Oleadas térmicas",
    "dominio": ["somatico"],
    "fenomenologia": {
      "descripcion_paciente": "Escalofríos, calor, sudoración, temblores finos o sensación de oleadas que suben por el cuerpo.",
      "signos_observables": "Piel de gallina, temblor, sudoración leve, necesidad de cubrirse o descubrirse, cambios posturales para regular temperatura."
    },
    "mecanismo_probable": "El cuerpo puede mostrar cambios transitorios de activación y sensibilidad interna. Las sensaciones de frío, calor o energía pueden intensificarse.",
    "lectura_operativa": "Si la persona conserva respiración y orientación, acompaña con calma y ajustes físicos. Si hay hiperventilación, pánico o temblor persistente, ancla y evalúa. ",
    "presencia_cushion": {
      "prioridad": "Calma + Seguridad",
      "hacer": "Ofrece manta, ajuste de temperatura o postura. Mantén voz tranquila y observa evolución.",
      "evitar": "No interpretes la oleada como energía espiritual necesaria. No ignores fiebre, dolor torácico o signos médicos."
    },
    "frases_utiles": {
      "sosten": "Deja que la sensación pase como una ola. Estoy aquí.",
      "anclaje": "Siente el peso de la manta y el contacto del cuerpo con la superficie.",
      "orientacion": "Esto es una sensación corporal intensa. Vamos a observarla y cuidar tu comodidad."
    },
    "senales_intervencion_directiva": [
      "Temblor persistente con pánico o hiperventilación.",
      "Verbalizaciones de 'no aguanto más'.",
      "Signos físicos atípicos o deterioro del estado general.",
      "Agitación motora creciente."
    ],
    "accion_directiva": "Ajustar entorno, guiar respiración, ofrecer apoyo físico consensuado y evaluar signos si la intensidad no baja."
  },

  {
    "efecto": "Palpitaciones y agitación",
    "dominio": ["somatico"],
    "fenomenologia": {
      "descripcion_paciente": "El corazón late fuerte o rápido. El cuerpo se siente acelerado, inquieto o incapaz de quedarse quieto.",
      "signos_observables": "Respiración superficial, inquietud motora, dilatación pupilar, aumento visible de activación, miedo a perder control o a morir."
    },
    "mecanismo_probable": "La activación corporal puede aumentar y sentirse amenazante. La atención al corazón o respiración puede amplificar la sensación de peligro.",
    "lectura_operativa": "Diferencia activación esperable de señal médica. Si hay respiración recuperable y seguridad, calma y orienta. Si hay dolor torácico, desmayo, signos vitales fuera de rango o pánico no regulable, escala.",
    "presencia_cushion": {
      "prioridad": "Calma + Orientación",
      "hacer": "Baja el ritmo de la sala. Observa respiración, color, postura y capacidad de responder. Usa instrucciones simples.",
      "evitar": "No digas que es 'apertura del corazón'. No asumas que todo síntoma cardíaco es emocional."
    },
    "frases_utiles": {
      "sosten": "Estoy aquí. Vamos a ir despacio con tu respiración.",
      "anclaje": "Alarga la exhalación. Siente tus pies y el peso del cuerpo.",
      "orientacion": "Vamos a revisar tu seguridad paso a paso. Si aparece dolor fuerte o algo cambia, activamos apoyo."
    },
    "senales_intervencion_directiva": [
      "Miedo a morir con hiperventilación persistente.",
      "Aumento progresivo de agitación motora.",
      "Dolor torácico, desmayo, confusión médica o signos vitales fuera de rango.",
      "Incapacidad de responder a orientación verbal."
    ],
    "accion_directiva": "Guiar respiración, sentar o recostar con seguridad, evaluar signos vitales si es posible y activar apoyo médico si hay señales de alarma."
  }
];
