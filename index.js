const users = {
    "Demian": "Demian25",
    "Paulo": "hachiv",
    "Coraline": "madafaker",
    "Aldo": "Molly",
    "Bryan": "Pencin",
    "a": "a",
};
const courses = [
    {
        "id": 1,
        "title": "Curso de Programación desde 0",
        "description": "Domina la programación desde cero hasta nivel experto con proyectos reales.",
        "level": "Básico",
        "duration": "3 horas",
        "url": "Cursos/Curso_Programacion_Desde_0/curso-p0_01.html",
        "category": "Programación",
        "image": "imgs/programacion0.jpg" 
    },
    // {
    //     "id": 2,
    //     "title": "Fundamentos de Programación",
    //     "description": "Aprende los principios básicos de la programación, estructuras de control y lógica computacional.",
    //     "level": "Básico",
    //     "duration": "30 horas",
    //     "url": "fundamentos-programacion.html",
    //     "category": "Programación",
    //     "image": "imgs/programacion1.jpg"
    // },
    // {
    //     "id": 3,
    //     "title": "Programación Estructurada",
    //     "description": "Desarrolla habilidades para escribir código claro y modular con el paradigma estructurado.",
    //     "level": "Intermedio",
    //     "duration": "35 horas",
    //     "url": "programacion-estructurada.html",
    //     "category": "Programación",
    //     "image": "imgs/programacion2.jpg"
    // },
    // {
    //     "id": 4,
    //     "title": "Programación Orientada a Objetos",
    //     "description": "Domina los conceptos de clases, objetos, herencia y polimorfismo.",
    //     "level": "Intermedio",
    //     "duration": "40 horas",
    //     "url": "poo.html",
    //     "category": "Programación",
    //     "image": "imgs/programacion3.jpg"
    // },
];
// ------------------ FUNCIONES DE LOGIN -------------------
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('techlearn_logged_in');
    if (isLoggedIn === 'true') {
        showMainContent();
    } else {
        showLoginModal();
    }
}
function showLoginModal() {
    document.getElementById('loginModal').style.display = 'flex';
    document.getElementById('mainContent').classList.add('hidden');
}
function showMainContent() {
    document.getElementById('loginModal').style.display = 'none';
    document.getElementById('mainContent').classList.remove('hidden');
    loadCourses();
}
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (users[username] && users[username] === password) {
        localStorage.setItem('techlearn_logged_in', 'true');
        localStorage.setItem('techlearn_username', username);
        showMainContent();
        document.querySelector('.login-btn').style.background = 'linear-gradient(45deg, #00ff88, #00d4ff)';
        document.querySelector('.login-btn').textContent = '¡Acceso Concedido! ✅';
        setTimeout(showMainContent, 1000);
    } else {
        document.querySelector('.login-container').style.animation = 'shake 0.5s ease-in-out';
        document.querySelector('.login-btn').style.background = 'linear-gradient(45deg, #ff0080, #ff4040)';
        document.querySelector('.login-btn').textContent = '❌ Credenciales Incorrectas';
        setTimeout(() => {
            document.querySelector('.login-btn').style.background = 'linear-gradient(45deg, #00d4ff, #0080ff)';
            document.querySelector('.login-btn').textContent = 'Ingresar a la Plataforma';
            document.querySelector('.login-container').style.animation = '';
        }, 2000);
    }
});
// ------------------ FUNCIONES DE CARGA DE CURSOS -------------------
function loadCourses(filteredCourses = null) {
    const coursesGrid = document.getElementById('coursesGrid');
    coursesGrid.innerHTML = '';
    const source = filteredCourses || courses;
    // Agrupar cursos por categoría
    const categories = {};
    source.forEach(course => {
        if (!categories[course.category]) {
            categories[course.category] = [];
        }
        categories[course.category].push(course);
    });
    Object.keys(categories).forEach(category => {
    const section = document.createElement('div');
    section.className = 'category-section';
    // Título con ícono
    const title = document.createElement('h2');
    title.className = 'category-title';
    const iconMap = {
        "Programación": "fa-solid fa-code",
        "Inglés": "fa-solid fa-language",
        "Matemáticas": "fa-solid fa-square-root-variable",
        "Ciencias": "fa-solid fa-flask",
        "Habilidades Blandas": "fa-solid fa-people-arrows",
        "Conocimientos Clave para el Trabajo": "fa-solid fa-briefcase"
    };
    const icon = document.createElement('i');
    icon.className = iconMap[category] || "fa-solid fa-book";
    icon.style.marginRight = '8px';
    title.appendChild(icon);
    title.appendChild(document.createTextNode(category));
    section.appendChild(title);
    // Grid para cursos
    const grid = document.createElement('div');
    grid.className = 'category-grid';
    // Configurar columnas: 5 columnas para Programación, pero tarjetas sin recortar
    if (category === "Programación") {
        grid.style.gridTemplateColumns = "repeat(5, 1fr)";
    } 
    categories[category].forEach(course => {
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
    const imageSrc = course.image || `imgs/default-${course.category.toLowerCase()}.jpg` || 'imgs/default-course.jpg';
    card.innerHTML = `
        <div class="course-thumbnail">
            <img src="${imageSrc}" alt="Imagen del curso ${course.title}" />
            <div class="play-icon">▶️</div>
        </div>
        <h3 class="course-title">${course.title}</h3>
        <p class="course-description">${course.description}</p>
        <div class="course-meta">
            <span class="course-level">${course.level}</span>
            <span class="course-duration">⏱️ ${course.duration}</span>
        </div>
    `;
    card.addEventListener('click', () => {
        window.location.href = course.url;
    });
    return card;
}
// ------------------ BÚSQUEDA -------------------
document.getElementById('searchInput').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = courses.filter(course =>
        course.title.toLowerCase().includes(searchTerm) ||
        course.description.toLowerCase().includes(searchTerm)
    );
    loadCourses(filtered);
});
// ------------------ CERRAR SESIÓN -------------------
document.getElementById('logoutBtn').addEventListener('click', function(e) {
    e.preventDefault();
    localStorage.removeItem('techlearn_logged_in');
    localStorage.removeItem('techlearn_username');
    location.reload();
});
// ------------------ ANIMACIÓN DE PARTICULAS -------------------
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
// ------------------ ANIMACIÓN DE SHAKE EN LOGIN -------------------
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
`;
document.head.appendChild(additionalStyles);

document.getElementById("notificationIcon").addEventListener("click", function () {
    const panel = document.getElementById("notificationPanel");
    panel.style.display = (panel.style.display === "block") ? "none" : "block";
});

// ------------------ INICIALIZAR -------------------
checkLoginStatus();





    // {
    //     "id": 2,
    //     "title": "Fundamentos de Programación",
    //     "description": "Aprende los principios básicos de la programación, estructuras de control y lógica computacional.",
    //     "level": "Básico",
    //     "duration": "30 horas",
    //     "url": "fundamentos-programacion.html",
    //     "category": "Programación"

    // },
    // {
    //     "id": 3,
    //     "title": "Programación Estructurada",
    //     "description": "Desarrolla habilidades para escribir código claro y modular con el paradigma estructurado.",
    //     "level": "Intermedio",
    //     "duration": "35 horas",
    //     "url": "programacion-estructurada.html",
    //     "category": "Programación"
    // },
    // {
    //     "id": 4,
    //     "title": "Programación Orientada a Objetos",
    //     "description": "Domina los conceptos de clases, objetos, herencia y polimorfismo.",
    //     "level": "Intermedio",
    //     "duration": "40 horas",
    //     "url": "poo.html",
    //     "category": "Programación"
    // },
    // {
    //     "id": 5,
    //     "title": "Estructura de Datos",
    //     "description": "Implementa listas, pilas, colas, árboles y grafos con eficiencia algorítmica.",
    //     "level": "Avanzado",
    //     "duration": "45 horas",
    //     "url": "estructuras-datos.html",
    //     "category": "Programación"
    // },
    // {
    //     "id": 6,
    //     "title": "Análisis de Algoritmos",
    //     "description": "Analiza la eficiencia de algoritmos y técnicas de optimización.",
    //     "level": "Avanzado",
    //     "duration": "40 horas",
    //     "url": "analisis-algoritmos.html",
    //     "category": "Programación"
    // },
    // {
    //     "id": 7,
    //     "title": "Innovación Tecnológica",
    //     "description": "Explora procesos creativos, tendencias tecnológicas y herramientas disruptivas.",
    //     "level": "Intermedio",
    //     "duration": "30 horas",
    //     "url": "innovacion-tecnologica.html",
    //     "category": "Programación"
    // },
    // {
    //     "id": 8,
    //     "title": "Teoría de la Computación",
    //     "description": "Estudia autómatas, gramáticas, lenguajes formales y problemas indecidibles.",
    //     "level": "Avanzado",
    //     "duration": "45 horas",
    //     "url": "teoria-computacion.html",
    //     "category": "Programación"
    // },
    // {
    //     "id": 9,
    //     "title": "Compiladores",
    //     "description": "Diseña e implementa compiladores simples: análisis léxico, sintáctico y generación de código.",
    //     "level": "Avanzado",
    //     "duration": "50 horas",
    //     "url": "compiladores.html",
    //     "category": "Programación"
    // },
    // {
    //     "id": 10,
    //     "title": "Programación Paralela y Concurrente",
    //     "description": "Implementa soluciones eficientes mediante hilos, sincronización y procesos paralelos.",
    //     "level": "Avanzado",
    //     "duration": "45 horas",
    //     "url": "programacion-concurrente.html",
    //     "category": "Programación"
    // },
    // {
    //     "id": 11,
    //     "title": "Lógica Matemática",
    //     "description": "Desarrolla razonamiento formal y comprensión de proposiciones, cuantificadores y pruebas.",
    //     "level": "Intermedio",
    //     "duration": "30 horas",
    //     "url": "logica-matematica.html",
    //     "category": "Matematicas"
    // },
    // {
    //     "id": 12,
    //     "title": "Matemáticas Discretas",
    //     "description": "Aprende sobre conjuntos, relaciones, combinatoria, grafos y funciones.",
    //     "level": "Intermedio",
    //     "duration": "35 horas",
    //     "url": "matematicas-discretas.html",
    //     "category": "Matematicas"
    // },
    // {
    //     "id": 13,
    //     "title": "Álgebra Lineal",
    //     "description": "Estudia vectores, matrices, transformaciones lineales y sistemas de ecuaciones.",
    //     "level": "Intermedio",
    //     "duration": "35 horas",
    //     "url": "algebra-lineal.html",
    //     "category": "Matematicas"
    // },
    // {
    //     "id": 14,
    //     "title": "Probabilidad y Estadística",
    //     "description": "Comprende distribuciones, inferencia estadística y análisis de datos.",
    //     "level": "Intermedio",
    //     "duration": "35 horas",
    //     "url": "probabilidad-estadistica.html",
    //     "category": "Matematicas"
    // },
    // {
    //     "id": 15,
    //     "title": "Interacción Computacional",
    //     "description": "Diseña interfaces efectivas considerando usabilidad y experiencia de usuario.",
    //     "level": "Intermedio",
    //     "duration": "30 horas",
    //     "url": "interaccion-computacional.html",
    //     "category": "Programación"
    // },
    // {
    //     "id": 16,
    //     "title": "Bases de Datos",
    //     "description": "Diseña y consulta bases de datos relacionales con SQL.",
    //     "level": "Intermedio",
    //     "duration": "40 horas",
    //     "url": "bases-datos.html",
    //     "category": "Programación"
    // },
    // {
    //     "id": 17,
    //     "title": "Seminario de Integración y Desarrollo",
    //     "description": "Aplica conocimientos multidisciplinarios en proyectos integradores.",
    //     "level": "Avanzado",
    //     "duration": "30 horas",
    //     "url": "seminario-integracion-desarrollo.html",
    //     "category": "Programación"
    // },
    // {
    //     "id": 18,
    //     "title": "Seguridad en la Información",
    //     "description": "Aprende principios, amenazas, cifrado y buenas prácticas de ciberseguridad.",
    //     "level": "Avanzado",
    //     "duration": "35 horas",
    //     "url": "seguridad-informacion.html",
    //     "category": "Programación"
    // },
    // {
    //     "id": 19,
    //     "title": "Seminario de Integración y Comunicación",
    //     "description": "Desarrolla habilidades de comunicación en contextos profesionales y técnicos.",
    //     "level": "Intermedio",
    //     "duration": "25 horas",
    //     "url": "seminario-integracion-comunicacion.html",
    //     "category": "Programación"
    // },
    // {
    //     "id": 20,
    //     "title": "Precálculo",
    //     "description": "Refuerza tus conocimientos en álgebra, funciones y trigonometría.",
    //     "level": "Básico",
    //     "duration": "30 horas",
    //     "url": "precalculo.html",
    //     "category": "Matematicas"
    // },
    // {
    //     "id": 21,
    //     "title": "Cálculo Diferencial e Integral",
    //     "description": "Aprende derivadas, integrales y aplicaciones en problemas reales.",
    //     "level": "Intermedio",
    //     "duration": "40 horas",
    //     "url": "calculo.html",
    //     "category": "Matematicas"
    // },
    // {
    //     "id": 22,
    //     "title": "Ecuaciones Diferenciales",
    //     "description": "Estudia y resuelve ecuaciones diferenciales ordinarias aplicadas.",
    //     "level": "Avanzado",
    //     "duration": "40 horas",
    //     "url": "ecuaciones-diferenciales.html",
    //     "category": "Matematicas"
    // },
    // {
    //     "id": 23,
    //     "title": "Métodos Numéricos",
    //     "description": "Implementa soluciones aproximadas a problemas matemáticos complejos.",
    //     "level": "Avanzado",
    //     "duration": "35 horas",
    //     "url": "metodos-numericos.html",
    //     "category": "Matematicas"
    // },
    // {
    //     "id": 24,
    //     "title": "Sistemas Operativos",
    //     "description": "Comprende procesos, memoria, archivos y dispositivos en sistemas operativos.",
    //     "level": "Avanzado",
    //     "duration": "40 horas",
    //     "url": "sistemas-operativos.html",
    //     "category": "Programacion"
    // },
    // {
    //     "id": 25,
    //     "title": "Programación de Bajo Nivel",
    //     "description": "Escribe código cercano al hardware utilizando ensamblador y C.",
    //     "level": "Avanzado",
    //     "duration": "40 horas",
    //     "url": "programacion-bajo-nivel.html",
    //     "category": "Programacion"
    // },
    // {
    //     "id": 26,
    //     "title": "Laboratorio de Diseño",
    //     "description": "Desarrolla prototipos y propuestas funcionales en contextos de ingeniería.",
    //     "level": "Intermedio",
    //     "duration": "30 horas",
    //     "url": "laboratorio-diseno.html",
    //     "category": "Programacion"
    // },
    // {
    //     "id": 27,
    //     "title": "Laboratorio de Construcción",
    //     "description": "Implementa soluciones técnicas y realiza pruebas funcionales.",
    //     "level": "Intermedio",
    //     "duration": "30 horas",
    //     "url": "laboratorio-construccion.html",
    //     "category": "Programacion"
    // },
    // {
    //     "id": 28,
    //     "title": "Fundamentos de la Física",
    //     "description": "Explora cinemática, dinámica, energía y leyes fundamentales.",
    //     "level": "Básico",
    //     "duration": "35 horas",
    //     "url": "fundamentos-fisica.html",
    //     "category": "Ciencia"
    // },
    // {
    //     "id": 29,
    //     "title": "Mecánica",
    //     "description": "Analiza el movimiento, fuerzas y leyes de Newton con profundidad.",
    //     "level": "Intermedio",
    //     "duration": "35 horas",
    //     "url": "mecanica.html",
    //     "category": "Ciencia"
    // },
    // {
    //     "id": 30,
    //     "title": "Circuitos Electrónicos y Electromagnetismo",
    //     "description": "Estudia circuitos, corriente, voltaje, campos y leyes electromagnéticas.",
    //     "level": "Intermedio",
    //     "duration": "40 horas",
    //     "url": "circuitos-electromagnetismo.html",
    //     "category": "Programacion",
    //     "category": "Ciencia"
    // },
    // {
    //     "id": 31,
    //     "title": "Arquitectura de Computadoras",
    //     "description": "Conoce la estructura interna de una computadora y su funcionamiento.",
    //     "level": "Avanzado",
    //     "duration": "40 horas",
    //     "url": "arquitectura-computadoras.html",
    //     "category": "Programacion"
    // },
    // {
    //     "id": 32,
    //     "title": "Programación para Internet",
    //     "description": "Desarrolla aplicaciones web dinámicas usando tecnologías frontend y backend.",
    //     "level": "Intermedio",
    //     "duration": "40 horas",
    //     "url": "programacion-internet.html",
    //     "category": "Programacion"
    // },
    // {
    //     "id": 33,
    //     "title": "Ingeniería en Software",
    //     "description": "Aplica metodologías de desarrollo, análisis, diseño y pruebas de software.",
    //     "level": "Avanzado",
    //     "duration": "40 horas",
    //     "url": "ingenieria-software.html",
    //     "category": "Programacion"
    // },
    // {
    //     "id": 34,
    //     "title": "Introducción a la Ingeniería",
    //     "description": "Descubre los principios, ramas y ética de la ingeniería.",
    //     "level": "Básico",
    //     "duration": "25 horas",
    //     "url": "introduccion-ingenieria.html",
    //     "category": "Programacion"
    // },
    // {
    //     "id": 35,
    //     "title": "Administración de Proyectos Tecnológicos",
    //     "description": "Gestiona eficazmente proyectos tecnológicos, riesgos y recursos.",
    //     "level": "Intermedio",
    //     "duration": "30 horas",
    //     "url": "administracion-proyectos.html",
    //     "category": "Programacion"
    // },
    // {
    //     "id": 36,
    //     "title": "Sistemas Digitales",
    //     "description": "Diseña circuitos lógicos, compuertas, flip-flops y sistemas digitales.",
    //     "level": "Intermedio",
    //     "duration": "35 horas",
    //     "url": "sistemas-digitales.html",
    //     "category": "Programacion"
    // },
    // {
    //     "id": 37,
    //     "title": "Fundamentos de Inteligencia Artificial",
    //     "description": "Explora agentes inteligentes, búsqueda, razonamiento y aprendizaje.",
    //     "level": "Avanzado",
    //     "duration": "40 horas",
    //     "url": "fundamentos-ia.html",
    //     "category": "Programacion"
    // },
    // {
    //     "id": 38,
    //     "title": "Redes de Computadoras",
    //     "description": "Conoce protocolos, topologías, modelos OSI y TCP/IP.",
    //     "level": "Intermedio",
    //     "duration": "40 horas",
    //     "url": "redes-computadoras.html",
    //     "category": "Programacion"
    // },
    // {
    //     "id": 39,
    //     "title": "Ética y Legislación",
    //     "description": "Analiza dilemas éticos, marco legal y responsabilidad profesional en TI.",
    //     "level": "Básico",
    //     "duration": "25 horas",
    //     "url": "etica-legislacion.html",
    //     "category": "Soft Skills"
    // },
    // {
    //     "id": 40,
    //     "title": "Expresión Oral y Escrita",
    //     "description": "Desarrolla habilidades para comunicarte de forma clara y profesional.",
    //     "level": "Básico",
    //     "duration": "20 horas",
    //     "url": "expresion-oral-escrita.html",
    //     "category": "Soft Skills"
    // },
    // {
    //     "id": 41,
    //     "title": "Liderazgo y Emprendimiento",
    //     "description": "Fortalece tus competencias de liderazgo, innovación y creación de empresas.",
    //     "level": "Intermedio",
    //     "duration": "25 horas",
    //     "url": "liderazgo-emprendimiento.html",
    //     "category": "Soft Skills"
    // },
    // {
    //     "id": 42,
    //     "title": "Administración",
    //     "description": "Conoce los fundamentos de la administración organizacional y estratégica.",
    //     "level": "Intermedio",
    //     "duration": "30 horas",
    //     "url": "administracion.html",
    //     "category": "Soft Skills"
    // },
    // {
    //     "id": 43,
    //     "title": "Seminario de Integración y Protocolo",
    //     "description": "Consolida conocimientos y habilidades para el egreso profesional.",
    //     "level": "Avanzado",
    //     "duration": "20 horas",
    //     "url": "seminario-protocolo.html",
    //     "category": "Soft Skills"
    // },
    // //Derevo
    // {
    //     "id": 44,
    //     "title": "Inglés A1",
    //     "description": "Aprende vocabulario y gramática básica para comenzar a comunicarte en inglés.",
    //     "level": "Básico",
    //     "duration": "30 horas",
    //     "url": "ingles-a1.html",
    //     "category": "Ingles"
    // },
    // {
    //     "id": 45,
    //     "title": "Inglés A2",
    //     "description": "Amplía tus conocimientos en estructuras gramaticales y comprensión básica.",
    //     "level": "Básico",
    //     "duration": "30 horas",
    //     "url": "ingles-a2.html",
    //     "category": "Ingles"
    // },
    // {
    //     "id": 46,
    //     "title": "Inglés B1",
    //     "description": "Mejora tu fluidez y comprensión oral y escrita en contextos cotidianos.",
    //     "level": "Intermedio",
    //     "duration": "35 horas",
    //     "url": "ingles-b1.html",
    //     "category": "Ingles"
    // },
    // {
    //     "id": 47,
    //     "title": "Inglés B2",
    //     "description": "Desarrolla competencias para mantener conversaciones técnicas y profesionales.",
    //     "level": "Intermedio",
    //     "duration": "40 horas",
    //     "url": "ingles-b2.html",
    //     "category": "Ingles"
    // },
    // {
    //     "id": 48,
    //     "title": "Inglés C1",
    //     "description": "Perfecciona tu dominio del inglés para entornos académicos y laborales avanzados.",
    //     "level": "Avanzado",
    //     "duration": "40 horas",
    //     "url": "ingles-c1.html",
    //     "category": "Ingles"
    // },
    // {
    //     "id": 49,
    //     "title": "Inglés C2",
    //     "description": "Alcanza un dominio casi nativo del idioma inglés con precisión y fluidez total.",
    //     "level": "Avanzado",
    //     "duration": "45 horas",
    //     "url": "ingles-c2.html",
    //     "category": "Ingles"
    // },
    // {
    //     "id": 50,
    //     "title": "Canva",
    //     "description": "Crea diseños gráficos atractivos para presentaciones, redes sociales y más.",
    //     "level": "Básico",
    //     "duration": "10 horas",
    //     "url": "canva.html",
    //     "category": "Mundo Laboral"
    // },
    // {
    //     "id": 51,
    //     "title": "PowerPoint",
    //     "description": "Diseña presentaciones profesionales y efectivas usando PowerPoint.",
    //     "level": "Básico",
    //     "duration": "12 horas",
    //     "url": "powerpoint.html",
    //     "category": "Mundo Laboral"
    // },
    // {
    //     "id": 52,
    //     "title": "Excel",
    //     "description": "Domina fórmulas, gráficos, tablas dinámicas y funciones avanzadas.",
    //     "level": "Intermedio",
    //     "duration": "20 horas",
    //     "url": "excel.html",
    //     "category": "Mundo Laboral"
    // },
    // {
    //     "id": 53,
    //     "title": "Microsoft Word",
    //     "description": "Edita y formatea documentos profesionales con las herramientas de Word.",
    //     "level": "Básico",
    //     "duration": "10 horas",
    //     "url": "word.html",
    //     "category": "Mundo Laboral"
    // },
    // {
    //     "id": 54,
    //     "title": "Microsoft Azure",
    //     "description": "Aprende los fundamentos del cómputo en la nube con Microsoft Azure.",
    //     "level": "Intermedio",
    //     "duration": "30 horas",
    //     "url": "azure.html",
    //     "category": "Mundo Laboral"
    // },
    // {
    //     "id": 55,
    //     "title": "Databricks",
    //     "description": "Usa Databricks para análisis de datos masivos, notebooks y aprendizaje automático.",
    //     "level": "Avanzado",
    //     "duration": "35 horas",
    //     "url": "databricks.html",
    //     "category": "Mundo Laboral"
    // },
    // {
    //     "id": 56,
    //     "title": "Snowflake y QDI",
    //     "description": "Administra y analiza datos en la nube con Snowflake y herramientas de integración.",
    //     "level": "Avanzado",
    //     "duration": "35 horas",
    //     "url": "snowflake-qdi.html",
    //     "category": "Mundo Laboral"
    // },
    // {
    //     "id": 57,
    //     "title": "SQL",
    //     "description": "Consulta, gestiona y manipula bases de datos relacionales con SQL.",
    //     "level": "Intermedio",
    //     "duration": "20 horas",
    //     "url": "sql.html",
    //     "category": "Mundo Laboral"
    // },
    // {
    //     "id": 58,
    //     "title": "Data Warehouse",
    //     "description": "Diseña y administra almacenes de datos para inteligencia de negocio.",
    //     "level": "Avanzado",
    //     "duration": "30 horas",
    //     "url": "data-warehouse.html",
    //     "category": "Mundo Laboral"
    // },
    // {
    //     "id": 59,
    //     "title": "Git y GitHub",
    //     "description": "Controla versiones de tu código, colabora y gestiona proyectos en GitHub.",
    //     "level": "Intermedio",
    //     "duration": "15 horas",
    //     "url": "git-github.html",
    //     "category": "Mundo Laboral"
    // },
    // {
    //     "id": 60,
    //     "title": "Python",
    //     "description": "Aprende a programar desde cero con Python, el lenguaje más versátil y popular.",
    //     "level": "Intermedio",
    //     "duration": "40 horas",
    //     "url": "python.html",
    //     "category": "Mundo Laboral",
    //     "category": "Programacion"
    // },
    // {
    //     "id": 61,
    //     "title": "Jupyter Notebooks y Librerías de Python",
    //     "description": "Visualiza y analiza datos con Jupyter, Numpy, Seaborn y Matplotlib.",
    //     "level": "Intermedio",
    //     "duration": "30 horas",
    //     "url": "jupyter-librerias-python.html",
    //     "category": "Mundo Laboral",
    //     "category": "Programacion"
    // },
    // {
    //     "id": 62,
    //     "title": "Entornos Virtuales en Python",
    //     "description": "Gestiona entornos y dependencias de Python con herramientas como venv o conda.",
    //     "level": "Intermedio",
    //     "duration": "10 horas",
    //     "url": "entornos-python.html",
    //     "category": "Mundo Laboral",
    //     "category": "Programacion"
    // },
    // {
    //     "id": 63,
    //     "title": "Kafka",
    //     "description": "Implementa flujos de datos en tiempo real con Apache Kafka y su ecosistema.",
    //     "level": "Avanzado",
    //     "duration": "30 horas",
    //     "url": "kafka.html",
    //     "category": "Mundo Laboral"
    // },
    // {
    //     "id": 64,
    //     "title": "Desarrollo de Páginas Web",
    //     "description": "Aprende a crear sitios web modernos con HTML, CSS y JavaScript.",
    //     "level": "Intermedio",
    //     "duration": "35 horas",
    //     "url": "desarrollo-web.html",
    //     "category": "Mundo Laboral",
    //     "category": "Programacion"
    // },
    // {
    //     "id": 65,
    //     "title": "Lenguaje C",
    //     "description": "Domina la programación estructurada utilizando el lenguaje C desde cero.",
    //     "level": "Intermedio",
    //     "duration": "40 horas",
    //     "url": "lenguaje-c.html",
    //     "category": "Programacion"
    // },
    // {
    //     "id": 66,
    //     "title": "Storytelling",
    //     "description": "Desarrolla habilidades narrativas para comunicar ideas con impacto.",
    //     "level": "Básico",
    //     "duration": "15 horas",
    //     "url": "storytelling.html",
    //     "category": "Soft Skills"
    // },
    // {
    //     "id": 67,
    //     "title": "Emprendimiento",
    //     "description": "Adquiere herramientas para iniciar y gestionar tu propio negocio.",
    //     "level": "Intermedio",
    //     "duration": "20 horas",
    //     "url": "emprendimiento.html",
    //     "category": "Soft Skills"
    // },
    // {
    //     "id": 68,
    //     "title": "Edición de Videos",
    //     "description": "Aprende a editar videos profesionales con software como Premiere Pro o DaVinci.",
    //     "level": "Intermedio",
    //     "duration": "25 horas",
    //     "url": "edicion-videos.html",
    //     "category": "Mundo Laboral"
    // },
    // {
    //     "id": 69,
    //     "title": "Metodologías Ágiles",
    //     "description": "Aprende a gestionar proyectos con enfoques ágiles como Scrum y Kanban.",
    //     "level": "Intermedio",
    //     "duration": "20 horas",
    //     "url": "metodologias-agiles.html",
    //     "category": "Soft Skills"
    // },
    // {
    //     "id": 70,
    //     "title": "Soft Skills",
    //     "description": "Desarrolla habilidades blandas clave como comunicación, empatía y liderazgo.",
    //     "level": "Básico",
    //     "duration": "15 horas",
    //     "url": "soft-skills.html",
    //     "category": "Soft Skills"
    // },
    // {
    //     "id": 71,
    //     "title": "Preparación para el Mundo Laboral",
    //     "description": "Prepárate para entrevistas, mejora tu currículum y conoce el entorno profesional.",
    //     "level": "Básico",
    //     "duration": "15 horas",
    //     "url": "preparacion-laboral.html",
    //     "category": "Soft Skills",
    //     "category": "Mundo Laboral"
    // },
    // {
    //     "id": 72,
    //     "title": "Scratch",
    //     "description": "Introduce a los más jóvenes en la programación mediante bloques visuales y juegos.",
    //     "level": "Básico",
    //     "duration": "10 horas",
    //     "url": "scratch.html",
    //     "category": "Programacion"
    // },
    // {
    //     "id": 73,
    //     "title": "Comandos en Minecraft",
    //     "description": "Aprende a usar comandos y bloques de comandos en Minecraft para automatizar y crear mundos interactivos.",
    //     "level": "Básico",
    //     "duration": "12 horas",
    //     "url": "comandos-minecraft.html",
    //     "category": "Programacion"
    // },
    // {
    //     "id": 74,
    //     "title": "Lógica en Programación",
    //     "description": "Desarrolla el pensamiento lógico necesario para resolver problemas con algoritmos.",
    //     "level": "Básico",
    //     "duration": "15 horas",
    //     "url": "logica-programacion.html",
    //     "category": "Programacion",
    //     "category": "Logica"
    // }