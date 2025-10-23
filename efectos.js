// efectos.js
// Fuente de datos completa para el Atlas Visual de Efectos Psicodélicos

const efectosData = [
  // --- DOMINIO VISUAL ---
  {
    "efecto": "Estelas visuales (Tracers)",
    "dominio": ["visual"],
    "fenomenologia": {
      "descripcion_paciente": "Los objetos en movimiento, como manos o pájaros, parecen dejar un 'rastro' visual o un halo alargado detrás de sí.",
      "signos_observables": "Mirada fija o seguimiento ocular errático, movimientos lentos de manos o cabeza para experimentar o minimizar el efecto."
    },
    "neurobiologia_aplicada": {
      "mecanismo_hipotetico": "El cerebro no puede actualizar con precisión la representación visual de los objetos en movimiento, lo que se atribuye a la relajación de las predicciones previas de bajo nivel (Modelo REBUS).",
      "frase_de_normalizacion": "Tu cerebro está procesando las imágenes más despacio de lo habitual, lo cual es una parte esperada del proceso visual y es seguro. Permite que el proceso se desarrolle."
    },
    "moduladores_riesgo": { "dosis": "media|alta", "historial": ["NA"], "medicacion": ["ISRS","NA"], "set_setting": ["entorno no seguro"] },
    "matriz_riesgo": "Bajo (Justificación: Es un efecto perceptivo puro y común. El riesgo aumenta si la falta de actualización visual provoca pánico.)",
    "manual_de_intervencion": {
      "no_intervencion_sosten": "Estoy aquí contigo. Solo observa lo que ves.",
      "intervencion_minima_anclaje": "Siente el peso de la manta. Trae tu atención a mi voz y a tu cuerpo.",
      "intervencion_activa_reencuadre": "Estás a salvo, este es tu cerebro volviendo a cablearse; acércate a esa sensación con curiosidad, el rastro pasará."
    },
    "criterios_de_escalamiento": {
      "criterio_observable_para_escalar": "Pánico severo o intentos de quitarse la venda/abandonar la sala por confusión visual.",
      "accion_de_escalamiento": "Intervención verbal directiva, contención física suave si hay riesgo de lesión."
    },
    "banderas_rojas_diagnostico_diferencial": ["Persistencia de estelas visuales significativa post-sesión."],
    "integracion_post_sesion": {
      "tema_a_explorar": "Procesamiento de la información, percepción del tiempo.",
      "practica_sugerida": "Dibujar los patrones vistos; Journaling sobre cómo se sintió la mente al fallar en la predicción."
    }
  },
  {
    "efecto": "Geometría fractal",
    "dominio": ["visual"],
    "fenomenologia": {
      "descripcion_paciente": "Veo patrones geométricos intrincados, a menudo repetitivos, en forma de mandala o túnel, especialmente con los ojos cerrados.",
      "signos_observables": "Mirada fija o dilatada, expresiones faciales de asombro o intensa concentración, reportes de 'alucinaciones internas'."
    },
    "neurobiologia_aplicada": {
      "mecanismo_hipotetico": "Intensificación de la información sensorial en la corteza visual, mediada por la alta densidad de receptores 5-HT$_{2A}$ en la corteza visual estriada y extraestriada.",
      "frase_de_normalizacion": "Estás viendo la forma en que tu cerebro crea las imágenes, lo cual es una respuesta normal a la medicina. Simplemente observa la belleza y la complejidad, muchos lo asocian con el asombro o *awe*."
    },
    "moduladores_riesgo": { "dosis": "media|alta", "historial": ["NA"], "medicacion": ["Ketanserina (antagonista 5-HT2A)"], "set_setting": ["NA"] },
    "matriz_riesgo": "Bajo (Justificación: Generalmente se asocia con el asombro, *awe*, y la apertura, lo que predice resultados positivos si la geometría no se interpreta como amenazante.)",
    "manual_de_intervencion": {
      "no_intervencion_sosten": "Estoy aquí contigo. Permite que la experiencia visual te muestre lo que tiene para ti.",
      "intervencion_minima_anclaje": "Siente el tejido de la manta sobre tu piel. Recuerda dónde estás y que estás respirando.",
      "intervencion_activa_reencuadre": "Confía en el proceso. Estos patrones son una forma de ver la complejidad de la vida, permítete sentir asombro."
    },
    "criterios_de_escalamiento": {
      "criterio_observable_para_escalar": "Disociación prolongada de la realidad (pérdida de conexión con el terapeuta por >10 min).",
      "accion_de_escalamiento": "Intervención verbal directiva (p. ej., 'Abre los ojos y mírame'), contención si es necesario."
    },
    "banderas_rojas_diagnostico_diferencial": ["Persistencia de alucinaciones post-sesión."],
    "integracion_post_sesion": {
      "tema_a_explorar": "Unidad, complejidad, patrón, asombro (awe).",
      "practica_sugerida": "Dibujar los patrones vistos, Journaling sobre el significado del orden y la unidad revelada."
    }
  },
  {
    "efecto": "Sinestesia (auditiva-visual)",
    "dominio": ["visual", "perceptivo"],
    "fenomenologia": {
      "descripcion_paciente": "Los sonidos tienen color o forma. Siento que los diferentes sentidos se han 'fusionado'.",
      "signos_observables": "El paciente reacciona visualmente a estímulos auditivos (p. ej., moviendo la cabeza rítmicamente al escuchar música o señalando colores mientras se reproduce un sonido)."
    },
    "neurobiologia_aplicada": {
      "mecanismo_hipotetico": "Aumento de la conectividad y la 'intercomunicación' entre diferentes regiones cerebrales sensoriales primarias, lo que se atribuye a un estado de alta entropía cerebral (Modelo REBUS).",
      "frase_de_normalizacion": "Tu cerebro está haciendo conexiones que normalmente están separadas, permitiendo que experimentes los sentidos de nuevas maneras. Es una experiencia inusual pero segura, explora lo que sientes."
    },
    "moduladores_riesgo": { "dosis": "media|alta", "historial": ["NA"], "medicacion": ["NA"], "set_setting": ["Música/entorno auditivo"] },
    "matriz_riesgo": "Bajo (Justificación: Indica un estado de alta entropía/plasticidad, y la música, un modulador clave, es un estímulo controlado que mejora la experiencia psicodélica.)",
    "manual_de_intervencion": {
      "no_intervencion_sosten": "Estoy aquí. Simplemente escucha los sonidos y percibe lo que se manifiesta.",
      "intervencion_minima_anclaje": "Concéntrate en la respiración; nota la sensación de la música como una vibración física en tu cuerpo.",
      "intervencion_activa_reencuadre": "Tu mente está experimentando una mayor conectividad. Permite que las diferentes formas de percepción se fusionen con curiosidad."
    },
    "criterios_de_escalamiento": {
      "criterio_observable_para_escalar": "Sobrecarga sensorial manifiesta (gritos persistentes, cubriéndose los oídos/ojos repetidamente).",
      "accion_de_escalamiento": "Reducción de estímulos sensoriales (p. ej., bajar o cambiar la música, ofrecer silencio), intervención verbal de anclaje."
    },
    "banderas_rojas_diagnostico_diferencial": ["Síntomas sinestésicos o alucinatorios persistentes que afectan la función post-sesión."],
    "integracion_post_sesion": {
      "tema_a_explorar": "Conectividad, límites sensoriales, unidad, creatividad.",
      "practica_sugerida": "Dibujar la música (pintar lo que se escuchó), Journaling sobre la desconstrucción de la percepción sensorial."
    }
  },
  {
    "efecto": "'Respiración' de superficies (drifting)",
    "dominio": ["visual"],
    "fenomenologia": {
      "descripcion_paciente": "Las paredes, los patrones o las texturas parecen ondular, moverse o 'respirar' lentamente. Siento que el suelo se curva.",
      "signos_observables": "Mirada fija o dilatada, asombro, tocar o frotar superficies para verificar su solidez."
    },
    "neurobiologia_aplicada": {
      "mecanismo_hipotetico": "Relajación de las predicciones previas de bajo nivel (Modelo REBUS), lo que interrumpe la restricción que el cerebro normalmente aplica a la percepción de objetos sólidos inmutables.",
      "frase_de_normalizacion": "Estás experimentando el aflojamiento de tus creencias visuales previas. Tu mente está abierta a nuevas posibilidades de cómo se ve el mundo. Es un efecto óptico esperado, estás totalmente seguro."
    },
    "moduladores_riesgo": { "dosis": "baja|media", "historial": ["NA"], "medicacion": ["NA"], "set_setting": ["Entorno visualmente saturado"] },
    "matriz_riesgo": "Bajo (Justificación: Es un efecto visual común de percepción que, si es aceptado, raramente es disruptivo, aunque la pérdida de estabilidad percibida puede generar inquietud inicial.)",
    "manual_de_intervencion": {
      "no_intervencion_sosten": "Estoy aquí contigo. Solo observa cómo se mueve, no tienes que hacer nada.",
      "intervencion_minima_anclaje": "Toca el material que tienes cerca (la manta o el sofá). Siente la estabilidad de tu cuerpo.",
      "intervencion_activa_reencuadre": "Las cosas sólidas siguen siendo sólidas; solo tu percepción está siendo temporalmente flexible. Acércate a esa sensación con curiosidad."
    },
    "criterios_de_escalamiento": {
      "criterio_observable_para_escalar": "Ansiedad extrema o pánico debido a la pérdida de solidez percibida.",
      "accion_de_escalamiento": "Intervención verbal directiva, reorientación suave a la sala y a objetos estables."
    },
    "banderas_rojas_diagnostico_diferencial": ["Creencia delirante persistente post-sesión de que las superficies realmente se deforman o derriten."],
    "integracion_post_sesion": {
      "tema_a_explorar": "Flexibilidad cognitiva, solidez de las creencias previas (priores), límites, estabilidad.",
      "practica_sugerida": "Journaling sobre la flexibilidad mental o practicar la atención plena en objetos fijos."
    }
  },
  {
    "efecto": "Pareidolia (ver caras en patrones)",
    "dominio": ["visual", "cognitivo"],
    "fenomenologia": {
      "descripcion_paciente": "Vi una cara o una entidad con significado en el patrón de la alfombra o en la oscuridad. El patrón me estaba hablando.",
      "signos_observables": "Mirada fija en objetos inanimados, sorpresa o reacciones emocionales intensas (positivas o negativas) a estímulos visuales ambiguos."
    },
    "neurobiologia_aplicada": {
      "mecanismo_hipotetico": "El procesamiento predictivo (REBUS) de alto nivel, que busca continuamente 'explicar' la información sensorial, genera una fuerte inferencia de rostros o entidades en datos visuales ambiguos.",
      "frase_de_normalizacion": "Tu mente está tratando intensamente de darle sentido a lo que ves. La capacidad de tu cerebro para encontrar significado y patrones está aumentada. Esto es normal en este estado."
    },
    "moduladores_riesgo": { "dosis": "media|alta", "historial": ["psicosis"], "medicacion": ["NA"], "set_setting": ["Entorno no seguro", "ansiedad basal alta"] },
    "matriz_riesgo": "Medio (Justificación: La interpretación de la figura puede desencadenar emociones intensas, *bypass* espiritual o narrativas delirantes que requieren reencuadre terapéutico y validación.)",
    "manual_de_intervencion": {
      "no_intervencion_sosten": "Estoy aquí contigo. Permítete recibir la experiencia, mantente abierto.",
      "intervencion_minima_anclaje": "Siente mi presencia. Toca el material que tienes cerca para reorientarte al entorno físico.",
      "intervencion_activa_reencuadre": "Estás a salvo. Recuerda que la medicina amplifica las interpretaciones; el significado que le das a lo que ves es tuyo, acércate con curiosidad."
    },
    "criterios_de_escalamiento": {
      "criterio_observable_para_escalar": "Discurso delirante activo sobre la entidad o agresión en respuesta a la figura percibida.",
      "accion_de_escalamiento": "Intervención verbal directiva, activación de protocolo de emergencia si se sospecha de un delirio persistente."
    },
    "banderas_rojas_diagnostico_diferencial": [
      "Interpretación rígida o delirante persistente de las figuras vistas post-sesión (shock ontológico).",
      "Pérdida de la conexión con el terapeuta por un periodo prolongado."
    ],
    "integracion_post_sesion": {
      "tema_a_explorar": "Creencias metafísicas, significado y propósito, límites (si la figura fue intrusiva).",
      "practica_sugerida": "Journaling sobre la naturaleza de la entidad vista, exploración de creencias sobre lo sobrenatural o la realidad."
    }
  },

  // --- DOMINIO COGNITIVO ---
  {
    "efecto": "Distorsión temporal (Time distortion)",
    "dominio": ["cognitivo", "perceptivo"],
    "fenomenologia": {
      "descripcion_paciente": "El tiempo parece acelerarse o dilatarse; tengo dificultad para percibir la duración de los intervalos de tiempo. Siento una pérdida del control del tiempo.",
      "signos_observables": "Dificultad para tareas de sincronización (como tapping) o reproducción de intervalos de tiempo. Puede haber asombro o desorientación."
    },
    "neurobiologia_aplicada": {
      "mecanismo_hipotetico": "El efecto se relaciona con la actividad de la red de prominencia (SN), implicada en la percepción temporal. La alteración se observa en la representación interna del tiempo.",
      "frase_de_normalizacion": "Tu percepción del tiempo está temporalmente alterada, lo cual es un efecto común y esperado. Estás a salvo; simplemente observa esta nueva forma en que tu cerebro experimenta la duración."
    },
    "moduladores_riesgo": { "dosis": "media|alta", "historial": ["NA"], "medicacion": ["NA"], "set_setting": ["entorno temporalmente estresante"] },
    "matriz_riesgo": "Bajo (Justificación: Es un efecto perceptivo común que raras veces es disruptivo, aunque la desorientación severa puede aumentar la confusión.)",
    "manual_de_intervencion": {
      "no_intervencion_sosten": "Estoy aquí contigo. Solo observa el fluir del tiempo, sin intentar controlarlo.",
      "intervencion_minima_anclaje": "Siente el peso de la manta. Trae tu atención a tu respiración, que ocurre en el tiempo presente.",
      "intervencion_activa_reencuadre": "Permite que la sensación de tiempo se flexibilice. Este es tu cerebro viendo el presente de una manera nueva."
    },
    "criterios_de_escalamiento": {
      "criterio_observable_para_escalar": "Pánico o ansiedad extrema debido a la sensación de que el tiempo se detiene indefinidamente.",
      "accion_de_escalamiento": "Intervención verbal directiva, reorientación a objetos estables y recordatorio de la duración esperada de la sesión."
    },
    "banderas_rojas_diagnostico_diferencial": ["Persistencia de la distorsión temporal que afecta la función social o laboral post-sesión."],
    "integracion_post_sesion": {
      "tema_a_explorar": "Percepción del presente, paciencia, la naturaleza subjetiva del tiempo.",
      "practica_sugerida": "Journaling sobre la secuencia subjetiva de eventos; práctica de atención plena enfocada en la permanencia."
    }
  },
  {
    "efecto": "Hiper-asociación (pensamiento divergente)",
    "dominio": ["cognitivo"],
    "fenomenologia": {
      "descripcion_paciente": "Mi mente está generando ideas rápidamente, haciendo conexiones que nunca antes había visto. El pensamiento se siente libre y menos restringido.",
      "signos_observables": "Verbalizaciones rápidas y rítmicas. Expresiones de asombro o 'insight'. Mejora en tareas de creatividad."
    },
    "neurobiologia_aplicada": {
      "mecanismo_hipotetico": "Relajación de las predicciones previas (priores) de alto nivel, lo que permite al cerebro considerar una distribución más amplia de hipótesis (Modelo REBUS). Aumento de la flexibilidad cognitiva.",
      "frase_de_normalizacion": "Tu mente está en un estado de mayor plasticidad y flexibilidad cognitiva. Permite que las nuevas ideas y conexiones fluyan sin censura."
    },
    "moduladores_riesgo": { "dosis": "media|alta", "historial": ["NA"], "medicacion": ["NA"], "set_setting": ["contexto de apoyo (setting)"] },
    "matriz_riesgo": "Bajo (Justificación: Asociado con la creatividad y el insight, lo cual es un predictor de resultados terapéuticos positivos.)",
    "manual_de_intervencion": {
      "no_intervencion_sosten": "Estoy aquí. Simplemente deja que tu mente te muestre las cosas.",
      "intervencion_minima_anclaje": "Si te sientes abrumado, haz una pausa. Recuerda que puedes volver a estas ideas más tarde, solo respira.",
      "intervencion_activa_reencuadre": "Aprovecha esta ventana para ver nuevas perspectivas sobre tus problemas. No tienes que seleccionar la 'mejor' idea ahora, solo regístrala."
    },
    "criterios_de_escalamiento": {
      "criterio_observable_para_escalar": "Discurso delirante activo o pensamiento desorganizado y persistente que impida la comunicación coherente.",
      "accion_de_escalamiento": "Intervención verbal directiva, reorientación activa al entorno y validación de la seguridad."
    },
    "banderas_rojas_diagnostico_diferencial": ["Persistencia de la desorganización del pensamiento o el delirio post-sesión."],
    "integracion_post_sesion": {
      "tema_a_explorar": "Flexibilidad cognitiva, resolución de problemas, creatividad.",
      "practica_sugerida": "Dibujo libre o escritura no estructurada (Journaling) para capturar las ideas generadas."
    }
  },
  {
    "efecto": "Rumiación circular (loops de pensamiento)",
    "dominio": ["cognitivo", "emocional"],
    "fenomenologia": {
      "descripcion_paciente": "Estoy atascado en un bucle de pensamiento; la misma preocupación se repite. Siento que no puedo salir de mis viejos patrones mentales.",
      "signos_observables": "Repetición verbal de ideas o preocupaciones específicas, frustración, ansiedad."
    },
    "neurobiologia_aplicada": {
      "mecanismo_hipotetico": "Refleja la persistencia de 'hiperpriores' rígidos y desadaptativos (creencias fijas), que resisten la relajación inducida por el agonismo 5-HT$_{2A}$ (Modelo REBUS).",
      "frase_de_normalizacion": "Estás experimentando la intensidad de un patrón de pensamiento que tu mente está acostumbrada a ejecutar. Esto es resistencia. Observa el patrón con desapego."
    },
    "moduladores_riesgo": { "dosis": "media|alta", "historial": ["TOC", "Depresión (rumiación)"], "medicacion": ["NA"], "set_setting": ["ansiedad basal alta"] },
    "matriz_riesgo": "Medio (Justificación: Indica resistencia del ego y potencial para una disolución del ego sentida negativamente o pánico si no se logra la rendición.)",
    "manual_de_intervencion": {
      "no_intervencion_sosten": "Estoy aquí contigo. Está bien estar atascado, pero ¿puedes simplemente observar el patrón?",
      "intervencion_minima_anclaje": "Siente el apoyo debajo de ti. Concéntrate en el sonido de la música o mi voz, y saca tu atención del bucle.",
      "intervencion_activa_reencuadre": "Estás en el proceso de desarmar una vieja defensa. Ríndete a la incomodidad, el pensamiento circular se disolverá."
    },
    "criterios_de_escalamiento": {
      "criterio_observable_para_escalar": "Pánico severo, angustia que lleva a la agitación o incapacidad prolongada para cambiar el enfoque.",
      "accion_de_escalamiento": "Reforzar el anclaje somático con tacto (si está consensuado) y guiar al paciente hacia la aceptación."
    },
    "banderas_rojas_diagnostico_diferencial": ["Persistencia de la rumiación obsesiva o los pensamientos circulares después del efecto agudo."],
    "integracion_post_sesion": {
      "tema_a_explorar": "Rigidez mental, la necesidad de control, la naturaleza de las creencias desadaptativas.",
      "practica_sugerida": "Implementar prácticas de atención plena para observar los pensamientos sin juzgarlos."
    }
  },
  {
    "efecto": "Despersonalización",
    "dominio": ["cognitivo", "existencial"],
    "fenomenologia": {
      "descripcion_paciente": "Siento que estoy separado de mi cuerpo o de mis emociones; la realidad parece irreal (desrealización). He perdido mi sentido de ser un 'yo' corporal o narrativo.",
      "signos_observables": "Mirada fija o dilatada, expresiones faciales disminuidas, informes de 'inefabilidad'. Comportamiento reflexivo intenso o desconexión emocional."
    },
    "neurobiologia_aplicada": {
      "mecanismo_hipotetico": "Se relaciona con la disolución del ego, caracterizada por la relajación de los antecedentes (creencias) de alto nivel que sustentan el modelo de sí mismo (disminución de actividad en la DMN).",
      "frase_de_normalizacion": "Estás experimentando el aflojamiento de tu sentido habitual del yo, lo que permite una perspectiva fresca. Este es un fenómeno central de la medicina, y estás seguro."
    },
    "moduladores_riesgo": { "dosis": "alta", "historial": ["psicosis", "neuroticismo alto"], "medicacion": ["NA"], "set_setting": ["entorno no seguro", "falta de apoyo"] },
    "matriz_riesgo": "Medio (Justificación: Aunque la disolución del ego sentida positivamente es terapéutica, la despersonalización puede manifestarse como temor o pánico si el paciente no logra rendirse.)",
    "manual_de_intervencion": {
      "no_intervencion_sosten": "Estoy aquí contigo. Observa con curiosidad cómo tu 'yo' se disuelve; es solo temporal.",
      "intervencion_minima_anclaje": "Concentra tu atención en la sensación de la superficie bajo tu cuerpo. Siente la ropa, siente la respiración.",
      "intervencion_activa_reencuadre": "Estás soltando las construcciones del ego. Ríndete a la pérdida de límites. Confía en el proceso de reconexión."
    },
    "criterios_de_escalamiento": {
      "criterio_observable_para_escalar": "Temor severo o pánico asociado con la pérdida del 'yo'. Discurso psicótico o pérdida total de conexión con el terapeuta por >10 min.",
      "accion_de_escalamiento": "Intervención verbal directiva, centrar la atención en el anclaje físico y validar la seguridad del entorno."
    },
    "banderas_rojas_diagnostico_diferencial": ["Persistencia de síntomas disociativos o delirantes (shock ontológico) post-sesión."],
    "integracion_post_sesion": {
      "tema_a_explorar": "Identidad, autotrascendencia, unidad, la construcción narrativa del yo.",
      "practica_sugerida": "Journaling sobre la naturaleza del ego y la inefabilidad de la experiencia."
    }
  },

  // --- DOMINIO EMOCIONAL ---
  {
    "efecto": "Miedo intenso / Ansiedad (Challenging experience)",
    "dominio": ["emocional"],
    "fenomenologia": {
      "descripcion_paciente": "Pánico, miedo extremo, confusión, sensación de perder el control o la cordura. Puede estar asociado con contenido mental traumático o angustia debido a la pérdida del 'yo'.",
      "signos_observables": "Agitación, llanto súbito, temblor fino, aumento de la frecuencia cardíaca y la presión arterial. Posibles intentos de quitarse la venda o abandonar la sala."
    },
    "neurobiologia_aplicada": {
      "mecanismo_hipotetico": "Amplificación no selectiva de los estados emocionales (agonismo 5-HT$_{2A}$), exacerbada por la resistencia activa del ego a la pérdida de control. Puede implicar la activación de la amígdala (AMG).",
      "frase_de_normalizacion": "Tu cuerpo y tu mente están reaccionando a la intensidad del momento. El miedo es una parte normal de la confrontación de viejos patrones. Estás física y emocionalmente a salvo."
    },
    "moduladores_riesgo": { "dosis": "alta", "historial": ["neuroticismo alto"], "medicacion": ["NA"], "set_setting": ["ansiedad basal alta", "entorno no seguro"] },
    "matriz_riesgo": "Alto (Justificación: El pánico severo puede llevar a la agitación y al riesgo de lesión. El riesgo se reduce sustancialmente en entornos clínicos seguros.)",
    "manual_de_intervencion": {
      "no_intervencion_sosten": "Estoy aquí contigo, no te irás. Solo respira; la incomodidad no es un peligro.",
      "intervencion_minima_anclaje": "Siente mi mano en tu hombro (si está consensuado). Concéntrate en la exhalación. Toca el suelo para reorientarte.",
      "intervencion_activa_reencuadre": "Estás a salvo. Confía en el proceso. Permite soltar la resistencia al miedo y acércate a la sensación con curiosidad."
    },
    "criterios_de_escalamiento": {
      "criterio_observable_para_escalar": "Gritos persistentes, agresión o intento de abandono de la sala. Aumento severo de la presión arterial que represente riesgo cardíaco.",
      "accion_de_escalamiento": "Intervención verbal directiva, contención física suave si hay riesgo de lesión, activar protocolo de emergencia."
    },
    "banderas_rojas_diagnostico_diferencial": [
      "Persistencia de emociones negativas o angustia (malestar psicológico persistente) post-sesión.",
      "Desarrollo de recuerdos falsos."
    ],
    "integracion_post_sesion": {
      "tema_a_explorar": "Resistencia, miedo al control, trauma corporal, afrontamiento activo de la angustia.",
      "practica_sugerida": "Journaling sobre el contenido desafiante; exploración de la fuente del miedo y las defensas del ego."
    }
  },
  {
    "efecto": "Culpa expansiva",
    "dominio": ["emocional", "cognitivo"],
    "fenomenologia": {
      "descripcion_paciente": "Pensamiento rígido y fijo sobre mis errores o insuficiencia. Los viejos patrones de preocupación o rumiación se repiten sin cesar, siento una amplificación incontrolable de la culpa.",
      "signos_observables": "Rumiación verbal de ideas específicas y autocríticas. Llanto, expresiones de frustración o angustia, incapacidad para cambiar el enfoque."
    },
    "neurobiologia_aplicada": {
      "mecanismo_hipotetico": "Activación y persistencia de 'hiperpriores' rígidos y desadaptativos (creencias fijas, como la autoimagen negativa), que la psilocibina busca relajar (Modelo REBUS).",
      "frase_de_normalizacion": "Estás viendo un patrón mental que tu mente está acostumbrada a ejecutar. Esto es resistencia. Observa el patrón con desapego; es una oportunidad para desafiarlo."
    },
    "moduladores_riesgo": { "dosis": "media|alta", "historial": ["depresión (rumiación)", "TOC"], "medicacion": ["NA"], "set_setting": ["mentalidad preocupada"] },
    "matriz_riesgo": "Medio (Justificación: Indica la resistencia de las creencias rígidas al cambio, lo que puede impedir la respuesta terapéutica positiva. Requiere intervención.)",
    "manual_de_intervencion": {
      "no_intervencion_sosten": "Estoy aquí. Observa el pensamiento como un objeto en movimiento. No tienes que creer en él.",
      "intervencion_minima_anclaje": "Concéntrate en la sensación de tus manos o en el anclaje somático para sacar tu atención del bucle.",
      "intervencion_activa_reencuadre": "Permite que la nueva información entre. El pensamiento circular se disolverá cuando permitas que la nueva perspectiva sustituya a la antigua creencia."
    },
    "criterios_de_escalamiento": {
      "criterio_observable_para_escalar": "Angustia o rumiación tan persistente que impide el avance terapéutico; incapacidad prolongada para cambiar el foco.",
      "accion_de_escalamiento": "Reforzar el anclaje somático y guiar al paciente a la aceptación de la no-resistencia."
    },
    "banderas_rojas_diagnostico_diferencial": ["Persistencia de rumiación obsesiva o pensamientos circulares posteriores al efecto agudo."],
    "integracion_post_sesion": {
      "tema_a_explorar": "Rigidez mental, la necesidad de control, la naturaleza de las creencias desadaptativas (hiperpriores).",
      "practica_sugerida": "Implementar prácticas de atención plena para observar los pensamientos sin juzgarlos; exploración de la fuente emocional del 'bucle'."
    }
  },
  {
    "efecto": "Ansiedad de rebote (0-72h)",
    "dominio": ["emocional"],
    "fenomenologia": {
      "descripcion_paciente": "Me siento irritable y ansioso; las emociones negativas o la angustia persisten mucho después de que el efecto de la droga desaparece.",
      "signos_observables": "Malestar psicológico persistente, frustración, rumiación que se reactiva, o dificultad para volver a la funcionalidad basal."
    },
    "neurobiologia_aplicada": {
      "mecanismo_hipotetico": "Persistencia de la ansiedad como secuela del enfrentamiento con contenido psicológico desafiante o como reflejo de hiperpriores desadaptativos que no fueron completamente revisados.",
      "frase_de_normalizacion": "Es una reacción normal que las emociones se sientan más intensas durante la integración temprana. Esto indica que el trabajo importante continúa. No estás volviendo al punto de partida."
    },
    "moduladores_riesgo": { "dosis": "media|alta", "historial": ["neuroticismo alto", "ansiedad"], "medicacion": ["NA"], "set_setting": ["falta de integración o apoyo post-sesión"] },
    "matriz_riesgo": "Medio (Justificación: El malestar post-agudo requiere apoyo activo para evitar que los efectos negativos persistan.)",
    "manual_de_intervencion": {
      "no_intervencion_sosten": "Estoy aquí para apoyarte durante la integración. No tienes que apresurar el proceso.",
      "intervencion_minima_anclaje": "Encuentra un objeto o una rutina que te dé estabilidad. Concéntrate en el 'aquí y ahora' de tu entorno diario.",
      "intervencion_activa_reencuadre": "Utiliza la flexibilidad que experimentaste para acercarte a esta ansiedad con curiosidad, no con juicio. Es una oportunidad para practicar la no-resistencia."
    },
    "criterios_de_escalamiento": {
      "criterio_observable_para_escalar": "Angustia severa que afecta la funcionalidad. Ideación suicida o delirios post-agudos.",
      "accion_de_escalamiento": "Intervención terapéutica estructurada para la integración, revisión de las redes de apoyo."
    },
    "banderas_rojas_diagnostico_diferencial": ["Persistencia de emociones negativas o angustia (malestar psicológico persistente) más allá de la primera semana."],
    "integracion_post_sesion": {
      "tema_a_explorar": "Afrontamiento del contenido desafiante, la transición de la plasticidad a la rigidez, la aceptación de la no-resistencia.",
      "practica_sugerida": "Journaling sobre el contenido desafiante y las defensas del ego; reevaluar creencias desadaptativas (hiperpriores)."
    }
  },

  // --- DOMINIO EXISTENCIAL ---
  {
    "efecto": "Disolución del yo (Ego dissolution)",
    "dominio": ["existencial", "emocional"],
    "fenomenologia": {
      "descripcion_paciente": "Pérdida completa de la autoconciencia; he perdido mi sentido de ser un 'yo' corporal o narrativo. Siento una desintegración de los límites entre mi yo y el mundo.",
      "signos_observables": "Mirada fija o dilatada, ausencia total de pensamiento autorreflexivo observable, discursos centrados en la inefabilidad o la unidad, o bien, pánico (temor a la disolución)."
    },
    "neurobiologia_aplicada": {
      "mecanismo_hipotetico": "Relajación de los priores de alto nivel que sustentan el modelo del sí mismo, asociada a la disminución de la actividad de la Red de Modo por Defecto (DMN).",
      "frase_de_normalizacion": "Estás experimentando el aflojamiento temporal de tu sentido habitual del yo, un fenómeno central de la medicina mediado por la desactivación de las redes cerebrales que construyen tu 'yo' narrativo."
    },
    "moduladores_riesgo": { "dosis": "alta", "historial": ["ansiedad o neuroticismo alto"], "medicacion": ["NA"], "set_setting": ["falta de apoyo terapéutico"] },
    "matriz_riesgo": "Medio (Justificación: Aunque terapéutica, puede manifestarse como temor o pánico intenso si el paciente se resiste a la pérdida de control, aumentando el riesgo.)",
    "manual_de_intervencion": {
      "no_intervencion_sosten": "Estoy aquí contigo. Observa con curiosidad cómo tu 'yo' se disuelve, es solo temporal.",
      "intervencion_minima_anclaje": "Siente el peso de la manta. Siente la superficie bajo tu cuerpo. Siente la ropa, siente la respiración.",
      "intervencion_activa_reencuadre": "Ríndete a la pérdida de límites. Confía en el proceso de desarmar la resistencia del ego y acéptalo como una perspectiva fresca."
    },
    "criterios_de_escalamiento": {
      "criterio_observable_para_escalar": "Pánico severo asociado con la pérdida del 'yo' o pérdida total de conexión con el terapeuta por periodo prolongado (>10 min).",
      "accion_de_escalamiento": "Intervención verbal directiva, reorientación activa al entorno y validación de la seguridad."
    },
    "banderas_rojas_diagnostico_diferencial": ["Persistencia de síntomas disociativos o delirantes (shock ontológico) post-sesión."],
    "integracion_post_sesion": {
      "tema_a_explorar": "Identidad, autotrascendencia, la construcción narrativa del yo, la naturaleza del ego.",
      "practica_sugerida": "Journaling sobre la naturaleza inefable del ego; explorar nuevas perspectivas sobre el propósito y la vida."
    }
  },
  {
    "efecto": "Unidad / Interconexión (Oceanic boundlessness)",
    "dominio": ["existencial", "emocional"],
    "fenomenologia": {
      "descripcion_paciente": "Fuertes sentimientos de conexión con otros, con la naturaleza o con el universo. Experiencia mística caracterizada por unidad, trascendencia del tiempo y asombro.",
      "signos_observables": "Expresiones faciales de asombro (*awe*) y bienestar. Puntuaciones altas en cuestionarios (MEQ) o en la dimensión de inmensidad oceánica (5D-ASC)."
    },
    "neurobiologia_aplicada": {
      "mecanismo_hipotetico": "Se relaciona con la relajación de los límites jerárquicos y un aumento en la conectividad (entropía) entre diferentes redes cerebrales que normalmente están muy segregadas.",
      "frase_de_normalizacion": "Tu cerebro está facilitando una experiencia de profunda interconexión. Este estado de mayor flexibilidad te permite ver el mundo con una nueva perspectiva de unidad."
    },
    "moduladores_riesgo": { "dosis": "alta", "historial": ["NA"], "medicacion": ["NA"], "set_setting": ["entorno de apoyo (setting) y mentalidad abierta (set)"] },
    "matriz_riesgo": "Bajo (Justificación: La experiencia de unidad y misticismo es altamente correlacionada con resultados terapéuticos positivos y sensación de significado.)",
    "manual_de_intervencion": {
      "no_intervencion_sosten": "Estoy aquí. Permite que esta experiencia te envuelva, sin intentar analizarla.",
      "intervencion_minima_anclaje": "Siente el apoyo físico debajo de ti. Concéntrate en el sonido de la música y permite que te guíe.",
      "intervencion_activa_reencuadre": "Estás a salvo, confía en esta sensación. Permite que esta nueva perspectiva de unidad desafíe cualquier creencia previa de soledad."
    },
    "criterios_de_escalamiento": {
      "criterio_observable_para_escalar": "Disociación prolongada de la realidad o interpretación delirante de la entidad.",
      "accion_de_escalamiento": "Intervención verbal de anclaje firme, reorientación a la seguridad del entorno."
    },
    "banderas_rojas_diagnostico_diferencial": ["Interpretación delirante o mesiánica persistente de la experiencia post-sesión (grandiosidad)."],
    "integracion_post_sesion": {
      "tema_a_explorar": "Trascendencia, propósito, prosocialidad y relación con la naturaleza.",
      "practica_sugerida": "Journaling sobre los sentimientos de conexión y asombro; practicar la gratitud y la atención plena (mindfulness)."
    }
  },

  // --- DOMINIO SOMÁTICO ---
  {
    "efecto": "Opresión torácica / Temblor",
    "dominio": ["somatico", "emocional"],
    "fenomenologia": {
      "descripcion_paciente": "Siento el pecho muy apretado o una gran incomodidad corporal. Hay temblores incontrolables en mis manos o en todo mi cuerpo. Siento un pánico abrumador.",
      "signos_observables": "Temblor fino o grueso, llanto súbito, agitación, elevación de la frecuencia cardíaca, intentos de quitarse la venda bruscamente."
    },
    "neurobiologia_aplicada": {
      "mecanismo_hipotetico": "Amplificación no selectiva de estados emocionales, exacerbada por la resistencia activa a la pérdida de control, lo que activa la respuesta simpática (amígdala).",
      "frase_de_normalizacion": "Tu cuerpo está reaccionando a la intensidad del momento o a la liberación de tensión. Estás físicamente seguro; el temblor es la forma en que tu cuerpo libera esa energía."
    },
    "moduladores_riesgo": { "dosis": "alta", "historial": ["neuroticismo alto", "TEPT"], "medicacion": ["NA"], "set_setting": ["ansiedad basal alta", "entorno no seguro"] },
    "matriz_riesgo": "Alto (Justificación: El pánico severo puede llevar a la agitación y al riesgo de lesión, lo que requiere intervención activa y contención si es necesario.)",
    "manual_de_intervencion": {
      "no_intervencion_sosten": "Estoy aquí contigo. Solo observa cómo se siente tu cuerpo. Estoy aquí para sostenerte.",
      "intervencion_minima_anclaje": "Siente el apoyo físico debajo de ti. Concéntrate en la exhalación, lenta y profunda.",
      "intervencion_activa_reencuadre": "Estás a salvo. Ríndete a la incomodidad y confía en el proceso; el miedo disminuirá si dejas de luchar contra la sensación."
    },
    "criterios_de_escalamiento": {
      "criterio_observable_para_escalar": "Agitación que representa un riesgo para la seguridad, pánico persistente o incapacidad para responder al anclaje.",
      "accion_de_escalamiento": "Intervención verbal directiva, contención física suave si hay riesgo de lesión, activar protocolo de emergencia."
    },
    "banderas_rojas_diagnostico_diferencial": ["Persistencia de la agitación o síntomas autonómicos después de la fase aguda."],
    "integracion_post_sesion": {
      "tema_a_explorar": "Resistencia, miedo al control, trauma corporal, afrontamiento activo de la angustia.",
      "practica_sugerida": "Movimiento consciente o estiramientos para liberar la tensión corporal; Journaling sobre el significado del miedo."
    }
  }
];