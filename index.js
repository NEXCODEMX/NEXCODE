const courses = [
    {
        id: 1,
        title: "Curso de Programación desde 0",
        description: "Domina la programación desde cero hasta nivel experto con proyectos reales y ejercicios prácticos.",
        level: "Básico",
        duration: "3 horas",
        url: "Cursos/Curso_Programacion_Desde_0/curso-p0_01.html",
        category: "Programación",
        image: "Imagenes/programming-basic.jpg", // Necesitarás esta imagen
        available: true 
    },
    // INICIO de los nuevos cursos "Próximamente"
    {
        id: 2,
        title: "Fundamentos de Programación",
        description: "Aprende los principios básicos de la programación, estructuras de control y lógica computacional.",
        level: "Básico",
        duration: "30 horas",
        url: "fundamentos-programacion.html",
        category: "Programación",
        image: "imgs/programming-fundamentals.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 3,
        title: "Programación Estructurada",
        description: "Desarrolla habilidades para escribir código claro y modular con el paradigma estructurado.",
        level: "Intermedio",
        duration: "35 horas",
        url: "programacion-estructurada.html",
        category: "Programación",
        image: "imgs/programming-structured.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 4,
        title: "Programación Orientada a Objetos",
        description: "Domina los conceptos de clases, objetos, herencia y polimorfismo.",
        level: "Intermedio",
        duration: "40 horas",
        url: "poo.html",
        category: "Programación",
        image: "imgs/programming-oop.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 5,
        title: "Estructura de Datos",
        description: "Implementa listas, pilas, colas, árboles y grafos con eficiencia algorítmica.",
        level: "Avanzado",
        duration: "45 horas",
        url: "estructuras-datos.html",
        category: "Programación",
        image: "imgs/data-structures.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 6,
        title: "Análisis de Algoritmos",
        description: "Analiza la eficiencia de algoritmos y técnicas de optimización.",
        level: "Avanzado",
        duration: "40 horas",
        url: "analisis-algoritmos.html",
        category: "Programación",
        image: "imgs/algorithm-analysis.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 7,
        title: "Innovación Tecnológica",
        description: "Explora procesos creativos, tendencias tecnológicas y herramientas disruptivas.",
        level: "Intermedio",
        duration: "30 horas",
        url: "innovacion-tecnologica.html",
        category: "Programación", // Asumiendo Programación o podrías crear "Innovación"
        image: "imgs/tech-innovation.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 8,
        title: "Teoría de la Computación",
        description: "Estudia autómatas, gramáticas, lenguajes formales y problemas indecidibles.",
        level: "Avanzado",
        duration: "45 horas",
        url: "teoria-computacion.html",
        category: "Programación",
        image: "imgs/computation-theory.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 9,
        title: "Compiladores",
        description: "Diseña e implementa compiladores simples: análisis léxico, sintáctico y generación de código.",
        level: "Avanzado",
        duration: "50 horas",
        url: "compiladores.html",
        category: "Programación",
        image: "imgs/compilers.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 10,
        title: "Programación Paralela y Concurrente",
        description: "Implementa soluciones eficientes mediante hilos, sincronización y procesos paralelos.",
        level: "Avanzado",
        duration: "45 horas",
        url: "programacion-concurrente.html",
        category: "Programación",
        image: "imgs/parallel-programming.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 11,
        title: "Lógica Matemática",
        description: "Desarrolla razonamiento formal y comprensión de proposiciones, cuantificadores y pruebas.",
        level: "Intermedio",
        duration: "30 horas",
        url: "logica-matematica.html",
        category: "Matemáticas", // Corregido de "Matematicas"
        image: "imgs/math-logic.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 12,
        title: "Matemáticas Discretas",
        description: "Aprende sobre conjuntos, relaciones, combinatoria, grafos y funciones.",
        level: "Intermedio",
        duration: "35 horas",
        url: "matematicas-discretas.html",
        category: "Matemáticas", // Corregido de "Matematicas"
        image: "imgs/discrete-math.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 13,
        title: "Álgebra Lineal",
        description: "Estudia vectores, matrices, transformaciones lineales y sistemas de ecuaciones.",
        level: "Intermedio",
        duration: "35 horas",
        url: "algebra-lineal.html",
        category: "Matemáticas", // Corregido de "Matematicas"
        image: "imgs/linear-algebra.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 14,
        title: "Probabilidad y Estadística",
        description: "Comprende distribuciones, inferencia estadística y análisis de datos.",
        level: "Intermedio",
        duration: "35 horas",
        url: "probabilidad-estadistica.html",
        category: "Matemáticas", // Corregido de "Matematicas"
        image: "imgs/probability-statistics.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 15,
        title: "Interacción Computacional",
        description: "Diseña interfaces efectivas considerando usabilidad y experiencia de usuario.",
        level: "Intermedio",
        duration: "30 horas",
        url: "interaccion-computacional.html",
        category: "Programación",
        image: "imgs/computational-interaction.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 16,
        title: "Bases de Datos",
        description: "Diseña y consulta bases de datos relacionales con SQL.",
        level: "Intermedio",
        duration: "40 horas",
        url: "bases-datos.html",
        category: "Programación",
        image: "imgs/databases.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 17,
        title: "Seminario de Integración y Desarrollo",
        description: "Aplica conocimientos multidisciplinarios en proyectos integradores.",
        level: "Avanzado",
        duration: "30 horas",
        url: "seminario-integracion-desarrollo.html",
        category: "Programación",
        image: "imgs/integration-seminar.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 18,
        title: "Seguridad en la Información",
        description: "Aprende principios, amenazas, cifrado y buenas prácticas de ciberseguridad.",
        level: "Avanzado",
        duration: "35 horas",
        url: "seguridad-informacion.html",
        category: "Programación",
        image: "imgs/information-security.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 19,
        title: "Seminario de Integración y Comunicación",
        description: "Desarrolla habilidades de comunicación en contextos profesionales y técnicos.",
        level: "Intermedio",
        duration: "25 horas",
        url: "seminario-integracion-comunicacion.html",
        category: "Programación", // O quizás "Habilidades Blandas"
        image: "imgs/communication-seminar.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 20,
        title: "Precálculo",
        description: "Refuerza tus conocimientos en álgebra, funciones y trigonometría.",
        level: "Básico",
        duration: "30 horas",
        url: "precalculo.html",
        category: "Matemáticas", // Corregido de "Matematicas"
        image: "imgs/precalculus.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 21,
        title: "Cálculo Diferencial e Integral",
        description: "Aprende derivadas, integrales y aplicaciones en problemas reales.",
        level: "Intermedio",
        duration: "40 horas",
        url: "calculo.html",
        category: "Matemáticas", // Corregido de "Matematicas"
        image: "imgs/calculus.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 22,
        title: "Ecuaciones Diferenciales",
        description: "Estudia y resuelve ecuaciones diferenciales ordinarias aplicadas.",
        level: "Avanzado",
        duration: "40 horas",
        url: "ecuaciones-diferenciales.html",
        category: "Matemáticas", // Corregido de "Matematicas"
        image: "imgs/differential-equations.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 23,
        title: "Métodos Numéricos",
        description: "Implementa soluciones aproximadas a problemas matemáticos complejos.",
        level: "Avanzado",
        duration: "35 horas",
        url: "metodos-numericos.html",
        category: "Matemáticas", // Corregido de "Matematicas"
        image: "imgs/numerical-methods.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 24,
        title: "Sistemas Operativos",
        description: "Comprende procesos, memoria, archivos y dispositivos en sistemas operativos.",
        level: "Avanzado",
        duration: "40 horas",
        url: "sistemas-operativos.html",
        category: "Programación", // Corregido de "Programacion"
        image: "imgs/operating-systems.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 25,
        title: "Programación de Bajo Nivel",
        description: "Escribe código cercano al hardware utilizando ensamblador y C.",
        level: "Avanzado",
        duration: "40 horas",
        url: "programacion-bajo-nivel.html",
        category: "Programación", // Corregido de "Programacion"
        image: "imgs/low-level-programming.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 26,
        title: "Laboratorio de Diseño",
        description: "Desarrolla prototipos y propuestas funcionales en contextos de ingeniería.",
        level: "Intermedio",
        duration: "30 horas",
        url: "laboratorio-diseno.html",
        category: "Programación", // Corregido de "Programacion"
        image: "imgs/design-lab.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 27,
        title: "Laboratorio de Construcción",
        description: "Implementa soluciones técnicas y realiza pruebas funcionales.",
        level: "Intermedio",
        duration: "30 horas",
        url: "laboratorio-construccion.html",
        category: "Programación", // Corregido de "Programacion"
        image: "imgs/construction-lab.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 28,
        title: "Fundamentos de la Física",
        description: "Explora cinemática, dinámica, energía y leyes fundamentales.",
        level: "Básico",
        duration: "35 horas",
        url: "fundamentos-fisica.html",
        category: "Ciencias", // Corregido de "Ciencia"
        image: "imgs/physics-fundamentals.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 29,
        title: "Mecánica",
        description: "Analiza el movimiento, fuerzas y leyes de Newton con profundidad.",
        level: "Intermedio",
        duration: "35 horas",
        url: "mecanica.html",
        category: "Ciencias", // Corregido de "Ciencia"
        image: "imgs/mechanics.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 30,
        title: "Circuitos Electrónicos y Electromagnetismo",
        description: "Estudia circuitos, corriente, voltaje, campos y leyes electromagnéticas.",
        level: "Intermedio",
        duration: "40 horas",
        url: "circuitos-electromagnetismo.html",
        category: "Ciencias", // Simplificado a una sola categoría, o podrías usar un array si aplica a Programación también.
        image: "imgs/circuits-electromagnetism.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 31,
        title: "Arquitectura de Computadoras",
        description: "Conoce la estructura interna de una computadora y su funcionamiento.",
        level: "Avanzado",
        duration: "40 horas",
        url: "arquitectura-computadoras.html",
        category: "Programación", // Corregido de "Programacion"
        image: "imgs/computer-architecture.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 32,
        title: "Programación para Internet",
        description: "Desarrolla aplicaciones web dinámicas usando tecnologías frontend y backend.",
        level: "Intermedio",
        duration: "40 horas",
        url: "programacion-internet.html",
        category: "Programación", // Corregido de "Programacion"
        image: "imgs/web-programming.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 33,
        title: "Ingeniería en Software",
        description: "Aplica metodologías de desarrollo, análisis, diseño y pruebas de software.",
        level: "Avanzado",
        duration: "40 horas",
        url: "ingenieria-software.html",
        category: "Programación", // Corregido de "Programacion"
        image: "imgs/software-engineering.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 34,
        title: "Introducción a la Ingeniería",
        description: "Descubre los principios, ramas y ética de la ingeniería.",
        level: "Básico",
        duration: "25 horas",
        url: "introduccion-ingenieria.html",
        category: "Programación", // Corregido de "Programacion"
        image: "imgs/intro-engineering.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 35,
        title: "Administración de Proyectos Tecnológicos",
        description: "Gestiona eficazmente proyectos tecnológicos, riesgos y recursos.",
        level: "Intermedio",
        duration: "30 horas",
        url: "administracion-proyectos.html",
        category: "Programación", // Corregido de "Programacion", o "Conocimientos Clave"
        image: "imgs/project-management.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 36,
        title: "Sistemas Digitales",
        description: "Diseña circuitos lógicos, compuertas, flip-flops y sistemas digitales.",
        level: "Intermedio",
        duration: "35 horas",
        url: "sistemas-digitales.html",
        category: "Programación", // Corregido de "Programacion"
        image: "imgs/digital-systems.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 37,
        title: "Fundamentos de Inteligencia Artificial",
        description: "Explora agentes inteligentes, búsqueda, razonamiento y aprendizaje.",
        level: "Avanzado",
        duration: "40 horas",
        url: "fundamentos-ia.html",
        category: "Programación", // Corregido de "Programacion"
        image: "imgs/ai-fundamentals.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 38,
        title: "Redes de Computadoras",
        description: "Conoce protocolos, topologías, modelos OSI y TCP/IP.",
        level: "Intermedio",
        duration: "40 horas",
        url: "redes-computadoras.html",
        category: "Programación", // Corregido de "Programacion"
        image: "imgs/computer-networks.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 39,
        title: "Ética y Legislación",
        description: "Analiza dilemas éticos, marco legal y responsabilidad profesional en TI.",
        level: "Básico",
        duration: "25 horas",
        url: "etica-legislacion.html",
        category: "Habilidades Blandas", // Mapeado de "Soft Skills"
        image: "imgs/ethics-legislation.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 40,
        title: "Expresión Oral y Escrita",
        description: "Desarrolla habilidades para comunicarte de forma clara y profesional.",
        level: "Básico",
        duration: "20 horas",
        url: "expresion-oral-escrita.html",
        category: "Habilidades Blandas", // Mapeado de "Soft Skills"
        image: "imgs/oral-written-expression.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 41,
        title: "Liderazgo y Emprendimiento",
        description: "Fortalece tus competencias de liderazgo, innovación y creación de empresas.",
        level: "Intermedio",
        duration: "25 horas",
        url: "liderazgo-emprendimiento.html",
        category: "Habilidades Blandas", // Mapeado de "Soft Skills"
        image: "imgs/leadership-entrepreneurship.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 42,
        title: "Administración",
        description: "Conoce los fundamentos de la administración organizacional y estratégica.",
        level: "Intermedio",
        duration: "30 horas",
        url: "administracion.html",
        category: "Habilidades Blandas", // Mapeado de "Soft Skills"
        image: "imgs/administration.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 43,
        title: "Seminario de Integración y Protocolo",
        description: "Consolida conocimientos y habilidades para el egreso profesional.",
        level: "Avanzado",
        duration: "20 horas",
        url: "seminario-protocolo.html",
        category: "Habilidades Blandas", // Mapeado de "Soft Skills"
        image: "imgs/integration-protocol-seminar.jpg", // Necesitarás esta imagen
        available: false
    },
    // Nuevos cursos de Inglés
    {
        id: 44,
        title: "Inglés A1",
        description: "Aprende vocabulario y gramática básica para comenzar a comunicarte en inglés.",
        level: "Básico",
        duration: "30 horas",
        url: "ingles-a1.html",
        category: "Inglés", // Corregido de "Ingles"
        image: "imgs/english-a1.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 45,
        title: "Inglés A2",
        description: "Amplía tus conocimientos en estructuras gramaticales y comprensión básica.",
        level: "Básico",
        duration: "30 horas",
        url: "ingles-a2.html",
        category: "Inglés", // Corregido de "Ingles"
        image: "imgs/english-a2.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 46,
        title: "Inglés B1",
        description: "Mejora tu fluidez y comprensión oral y escrita en contextos cotidianos.",
        level: "Intermedio",
        duration: "35 horas",
        url: "ingles-b1.html",
        category: "Inglés", // Corregido de "Ingles"
        image: "imgs/english-b1.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 47,
        title: "Inglés B2",
        description: "Desarrolla competencias para mantener conversaciones técnicas y profesionales.",
        level: "Intermedio",
        duration: "40 horas",
        url: "ingles-b2.html",
        category: "Inglés", // Corregido de "Ingles"
        image: "imgs/english-b2.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 48,
        title: "Inglés C1",
        description: "Perfecciona tu dominio del inglés para entornos académicos y laborales avanzados.",
        level: "Avanzado",
        duration: "40 horas",
        url: "ingles-c1.html",
        category: "Inglés", // Corregido de "Ingles"
        image: "imgs/english-c1.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 49,
        title: "Inglés C2",
        description: "Alcanza un dominio casi nativo del idioma inglés con precisión y fluidez total.",
        level: "Avanzado",
        duration: "45 horas",
        url: "ingles-c2.html",
        category: "Inglés", // Corregido de "Ingles"
        image: "imgs/english-c2.jpg", // Necesitarás esta imagen
        available: false
    },
    // Nuevos cursos de "Mundo Laboral" / "Conocimientos Clave"
    {
        id: 50,
        title: "Canva",
        description: "Crea diseños gráficos atractivos para presentaciones, redes sociales y más.",
        level: "Básico",
        duration: "10 horas",
        url: "canva.html",
        category: "Conocimientos Clave", // Mapeado de "Mundo Laboral"
        image: "imgs/canva.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 51,
        title: "PowerPoint",
        description: "Diseña presentaciones profesionales y efectivas usando PowerPoint.",
        level: "Básico",
        duration: "12 horas",
        url: "powerpoint.html",
        category: "Conocimientos Clave", // Mapeado de "Mundo Laboral"
        image: "imgs/powerpoint.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 52,
        title: "Excel",
        description: "Domina fórmulas, gráficos, tablas dinámicas y funciones avanzadas.",
        level: "Intermedio",
        duration: "20 horas",
        url: "excel.html",
        category: "Conocimientos Clave", // Mapeado de "Mundo Laboral"
        image: "imgs/excel.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 53,
        title: "Microsoft Word",
        description: "Edita y formatea documentos profesionales con las herramientas de Word.",
        level: "Básico",
        duration: "10 horas",
        url: "word.html",
        category: "Conocimientos Clave", // Mapeado de "Mundo Laboral"
        image: "imgs/word.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 54,
        title: "Microsoft Azure",
        description: "Aprende los fundamentos del cómputo en la nube con Microsoft Azure.",
        level: "Intermedio",
        duration: "30 horas",
        url: "azure.html",
        category: "Conocimientos Clave", // Mapeado de "Mundo Laboral"
        image: "imgs/azure.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 55,
        title: "Databricks",
        description: "Usa Databricks para análisis de datos masivos, notebooks y aprendizaje automático.",
        level: "Avanzado",
        duration: "35 horas",
        url: "databricks.html",
        category: "Conocimientos Clave", // Mapeado de "Mundo Laboral"
        image: "imgs/databricks.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 56,
        title: "Snowflake y QDI",
        description: "Administra y analiza datos en la nube con Snowflake y herramientas de integración.",
        level: "Avanzado",
        duration: "35 horas",
        url: "snowflake-qdi.html",
        category: "Conocimientos Clave", // Mapeado de "Mundo Laboral"
        image: "imgs/snowflake-qdi.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 57,
        title: "SQL",
        description: "Consulta, gestiona y manipula bases de datos relacionales con SQL.",
        level: "Intermedio",
        duration: "20 horas",
        url: "sql.html",
        category: "Conocimientos Clave", // Mapeado de "Mundo Laboral"
        image: "imgs/sql.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 58,
        title: "Data Warehouse",
        description: "Diseña y administra almacenes de datos para inteligencia de negocio.",
        level: "Avanzado",
        duration: "30 horas",
        url: "data-warehouse.html",
        category: "Conocimientos Clave", // Mapeado de "Mundo Laboral"
        image: "imgs/data-warehouse.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 59,
        title: "Git y GitHub",
        description: "Controla versiones de tu código, colabora y gestiona proyectos en GitHub.",
        level: "Intermedio",
        duration: "15 horas",
        url: "git-github.html",
        category: "Conocimientos Clave", // Mapeado de "Mundo Laboral"
        image: "imgs/git-github.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 60,
        title: "Python (Mundo Laboral)", // Renombrado para evitar conflicto con el curso de Programación
        description: "Aprende a programar desde cero con Python, el lenguaje más versátil y popular para el ámbito laboral.",
        level: "Intermedio",
        duration: "40 horas",
        url: "python-ml.html",
        category: "Conocimientos Clave", // Mapeado de "Mundo Laboral"
        image: "imgs/python-ml.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 61,
        title: "Jupyter Notebooks y Librerías de Python",
        description: "Visualiza y analiza datos con Jupyter, Numpy, Seaborn y Matplotlib.",
        level: "Intermedio",
        duration: "30 horas",
        url: "jupyter-librerias-python.html",
        category: "Conocimientos Clave", // Mapeado de "Mundo Laboral"
        image: "imgs/jupyter-libs-python.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 62,
        title: "Entornos Virtuales en Python",
        description: "Gestiona entornos y dependencias de Python con herramientas como venv o conda.",
        level: "Intermedio",
        duration: "10 horas",
        url: "entornos-python.html",
        category: "Conocimientos Clave", // Mapeado de "Mundo Laboral"
        image: "imgs/python-envs.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 63,
        title: "Kafka",
        description: "Implementa flujos de datos en tiempo real con Apache Kafka y su ecosistema.",
        level: "Avanzado",
        duration: "30 horas",
        url: "kafka.html",
        category: "Conocimientos Clave", // Mapeado de "Mundo Laboral"
        image: "imgs/kafka.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 64,
        title: "Desarrollo de Páginas Web (Conceptos Clave)", // Renombrado para evitar conflicto
        description: "Aprende a crear sitios web modernos con HTML, CSS y JavaScript para el entorno laboral.",
        level: "Intermedio",
        duration: "35 horas",
        url: "desarrollo-web-kc.html",
        category: "Conocimientos Clave", // Mapeado de "Mundo Laboral"
        image: "imgs/web-dev-kc.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 65,
        title: "Lenguaje C (Programación)", // Renombrado para evitar conflicto
        description: "Domina la programación estructurada utilizando el lenguaje C desde cero.",
        level: "Intermedio",
        duration: "40 horas",
        url: "lenguaje-c-prog.html",
        category: "Programación", // Corregido de "Programacion"
        image: "imgs/language-c-prog.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 66,
        title: "Storytelling",
        description: "Desarrolla habilidades narrativas para comunicar ideas con impacto.",
        level: "Básico",
        duration: "15 horas",
        url: "storytelling.html",
        category: "Habilidades Blandas", // Mapeado de "Soft Skills"
        image: "imgs/storytelling.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 67,
        title: "Emprendimiento",
        description: "Adquiere herramientas para iniciar y gestionar tu propio negocio.",
        level: "Intermedio",
        duration: "20 horas",
        url: "emprendimiento.html",
        category: "Habilidades Blandas", // Mapeado de "Soft Skills"
        image: "imgs/entrepreneurship.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 68,
        title: "Edición de Videos",
        description: "Aprende a editar videos profesionales con software como Premiere Pro o DaVinci.",
        level: "Intermedio",
        duration: "25 horas",
        url: "edicion-videos.html",
        category: "Conocimientos Clave", // Mapeado de "Mundo Laboral"
        image: "imgs/video-editing.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 69,
        title: "Metodologías Ágiles",
        description: "Aprende a gestionar proyectos con enfoques ágiles como Scrum y Kanban.",
        level: "Intermedio",
        duration: "20 horas",
        url: "metodologias-agiles.html",
        category: "Habilidades Blandas", // Mapeado de "Soft Skills"
        image: "imgs/agile-methodologies.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 70,
        title: "Soft Skills Fundamentales", // Renombrado para ser más específico
        description: "Desarrolla habilidades blandas clave como comunicación, empatía y liderazgo.",
        level: "Básico",
        duration: "15 horas",
        url: "soft-skills.html",
        category: "Habilidades Blandas", // Mapeado de "Soft Skills"
        image: "imgs/soft-skills-found.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 71,
        title: "Preparación para el Mundo Laboral",
        description: "Prepárate para entrevistas, mejora tu currículum y conoce el entorno profesional.",
        level: "Básico",
        duration: "15 horas",
        url: "preparacion-laboral.html",
        category: "Conocimientos Clave", // Priorizado sobre "Soft Skills"
        image: "imgs/career-prep.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 72,
        title: "Scratch",
        description: "Introduce a los más jóvenes en la programación mediante bloques visuales y juegos.",
        level: "Básico",
        duration: "10 horas",
        url: "scratch.html",
        category: "Programación", // Corregido de "Programacion"
        image: "imgs/scratch.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 73,
        title: "Comandos en Minecraft",
        description: "Aprende a usar comandos y bloques de comandos en Minecraft para automatizar y crear mundos interactivos.",
        level: "Básico",
        duration: "12 horas",
        url: "comandos-minecraft.html",
        category: "Programación", // Corregido de "Programacion"
        image: "imgs/minecraft-commands.jpg", // Necesitarás esta imagen
        available: false
    },
    {
        id: 74,
        title: "Lógica en Programación",
        description: "Desarrolla el pensamiento lógico necesario para resolver problemas con algoritmos.",
        level: "Básico",
        duration: "15 horas",
        url: "logica-programacion.html",
        category: "Programación", // Corregido de "Programacion" (y asumiendo que "Logica" es parte de Programación)
        image: "imgs/programming-logic.jpg", // Necesitarás esta imagen
        available: false
    }
    // FIN de los nuevos cursos "Próximamente"
];

// ... (El resto de tu index.js, incluyendo las funciones loadCourses, createCourseCard,
// sidebar toggle, category filtering, search, notifications y particle animation.
// No hay cambios adicionales en estas funciones con respecto a la última versión.) ...

// ------------------ FUNCIONES DE CARGA DE CURSOS -------------------
function loadCourses(filteredCourses = null, selectedCategory = 'all') {
    const coursesGrid = document.getElementById('coursesGrid');
    if (!coursesGrid) {
        console.error("Element with ID 'coursesGrid' not found. Make sure the div in index.html has id='coursesGrid'.");
        return;
    }
    coursesGrid.innerHTML = '';
    
    let sourceCourses = filteredCourses || courses;

    // Filter by category if a specific category is selected
    if (selectedCategory !== 'all') {
        sourceCourses = sourceCourses.filter(course => course.category === selectedCategory);
    }

    // Group courses by category for display
    const categoriesToDisplay = {};
    sourceCourses.forEach(course => {
        if (!categoriesToDisplay[course.category]) {
            categoriesToDisplay[course.category] = [];
        }
        categoriesToDisplay[course.category].push(course);
    });

    if (Object.keys(categoriesToDisplay).length === 0 && (filteredCourses === null && selectedCategory === 'all')) {
        coursesGrid.innerHTML = '<p class="no-courses">No hay cursos disponibles en este momento.</p>';
        return;
    } else if (Object.keys(categoriesToDisplay).length === 0 && (filteredCourses !== null || selectedCategory !== 'all')) {
        coursesGrid.innerHTML = '<p class="no-courses">No se encontraron cursos para esta búsqueda/categoría.</p>';
        return;
    }
    
    Object.keys(categoriesToDisplay).forEach(category => {
        const section = document.createElement('div');
        section.className = 'category-section';
        
        // Title with icon
        const title = document.createElement('h2');
        title.className = 'category-title';
        const iconMap = {
            "Programación": "fas fa-code",
            "Inglés": "fas fa-language",
            "Matemáticas": "fas fa-square-root-variable",
            "Ciencias": "fas fa-flask",
            "Habilidades Blandas": "fas fa-people-arrows",
            "Conocimientos Clave": "fas fa-briefcase"
        };
        const icon = document.createElement('i');
        icon.className = iconMap[category] || "fas fa-book"; // Default icon
        icon.style.marginRight = '8px';
        title.appendChild(icon);
        title.appendChild(document.createTextNode(category));
        section.appendChild(title);
        
        // Grid for courses
        const grid = document.createElement('div');
        grid.className = 'category-grid';
        
        categoriesToDisplay[category].forEach(course => {
            const courseCard = createCourseCard(course);
            grid.appendChild(courseCard);
        });
        
        section.appendChild(grid);
        coursesGrid.appendChild(section);
    });
}

function createCourseCard(course) {
    const card = document.createElement('div');
    card.className = 'course-card';
    const imageSrc = course.image || `imgs/default-${course.category.toLowerCase().replace(/\s/g, '-')}.jpg` || 'imgs/default-course.jpg';
    
    // Añadir clase 'unavailable' si el curso no está disponible
    if (course.available === false) {
        card.classList.add('unavailable');
    }

    card.innerHTML = `
        <div class="course-thumbnail">
            <img src="${imageSrc}" alt="Imagen del curso ${course.title}" onerror="this.onerror=null; this.src='imgs/default-course.jpg';" />
            ${course.available === false ? '<div class="coming-soon-overlay">Próximamente</div>' : '<div class="play-icon">▶️</div>'}
        </div>
        <div class="course-content">
            <h3 class="course-title">${course.title}</h3>
            <p class="course-description">${course.description}</p>
            <div class="course-meta">
                <span class="course-level">${course.level}</span>
                <span class="course-duration">⏱️ ${course.duration}</span>
            </div>
        </div>
    `;
    
    // Solo agregar el event listener si el curso está disponible
    if (course.available !== false) {
        card.addEventListener('click', () => {
            window.location.href = course.url;
        });
    } else {
        // Opcional: Deshabilitar clics o cambiar cursor para cursos no disponibles
        card.style.cursor = 'not-allowed';
    }
    
    return card;
}

// ------------------ SIDEBAR TOGGLE -------------------
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('mainContent');

if (sidebarToggle && sidebar && mainContent) {
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('hidden');
        mainContent.classList.toggle('sidebar-hidden');
    });
}

// ------------------ CATEGORY FILTERING -------------------
const categoryItems = document.querySelectorAll('.category-item');
if (categoryItems) {
    categoryItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all
            categoryItems.forEach(i => i.classList.remove('active'));
            // Add active class to clicked item
            item.classList.add('active');

            const selectedCategory = item.dataset.category;
            if (selectedCategory === 'all') {
                loadCourses(null, 'all'); // Load all courses
            } else {
                const filtered = courses.filter(course => course.category === selectedCategory);
                loadCourses(filtered, selectedCategory); // Load filtered courses by category
            }
            // Clear search input when category is selected
            document.getElementById('searchInput').value = '';
        });
    });
}

// ------------------ SEARCH -------------------
document.getElementById('searchInput').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = courses.filter(course =>
        course.title.toLowerCase().includes(searchTerm) ||
        course.description.toLowerCase().includes(searchTerm) ||
        course.category.toLowerCase().includes(searchTerm)
    );
    loadCourses(filtered, 'all'); // When searching, show all matching regardless of category filter
    
    // Remove active class from categories when searching
    categoryItems.forEach(i => i.classList.remove('active'));
    // Optionally, set 'Todos los cursos' as active
    document.querySelector('.category-item[data-category="all"]').classList.add('active');
});

// ------------------ NOTIFICATIONS -------------------
document.getElementById('notificationBell').addEventListener('click', function() {
    const panel = document.getElementById('notificationPanel');
    if (panel.style.display === 'block') {
        panel.style.display = 'none';
    } else {
        panel.style.display = 'block';
    }
});

// Close notification panel when clicking outside
document.addEventListener('click', function(e) {
    const bell = document.getElementById('notificationBell');
    const panel = document.getElementById('notificationPanel');
    
    if (!bell.contains(e.target) && !panel.contains(e.target)) {
        panel.style.display = 'none';
    }
});

// ------------------ PARTICLE ANIMATION -------------------
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.width = particle.style.height = Math.random() * 10 + 5 + 'px';
    particle.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 6000);
}

setInterval(createParticle, 2000);

// ------------------ INITIALIZE -------------------
// Load courses and ensure sidebar state is consistent on page load
document.addEventListener('DOMContentLoaded', function() {
    loadCourses(); // Load all courses initially when the DOM is fully loaded
});