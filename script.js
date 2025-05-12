const subtitles = [
    "📘 Se abre un campo de trabajo amplio como el horizonte",
    "🎯 Combinar pasiones con idiomas",
    "🎓 Becas y estudios en el exterior",
    "🧳 Trabajos globales, desde donde estés",
    "🛠️ Una herramienta útil en cualquier carrera",
    "👩‍🏫 Enseñar también es crecer",
    "🧩 Construye tu propia identidad profesional",
    "🧠 Idiomas y desarrollo cognitivo",
    "🌐 Conecta con el mundo",
    "✨ Los idiomas como camino y propósito",
    "Precaución, precaución.",
    "Agradecimientos..."
];


const pages = [
    // Página 1
    `
    <p>Aprender idiomas no es solo aprender a hablar, sino aprender a entender. Y eso abre muchas puertas laborales:</p>
    <ul>
        <li><strong>Traducción e interpretación:</strong> Desde textos literarios hasta documentos técnicos o científicos. Hay demanda de personas que puedan traducir emociones, ideas y precisiones, y hacerlo bien es un arte.</li>
        <li><strong>Organizaciones internacionales:</strong> Las Naciones Unidas, la Cruz Roja, embajadas, ONGs… todos necesitan personas multilingües para conectar al mundo.</li>
        <li><strong>Turismo y hotelería:</strong> No hay turismo sin comunicación. Saber idiomas te hace parte de la experiencia que el visitante nunca olvida.</li>
        <li><strong>Empresas globales:</strong> Hoy, cualquier empresa con presencia digital es una empresa internacional. Y para ellas, una persona que maneja idiomas es un puente valioso.</li>
    </ul>
    <blockquote>"Saber otro idioma no es sumar palabras nuevas, es ver el mundo con otros ojos."</blockquote>
    `,

    // Página 2
    `
    <p><strong>El idioma no tiene que ser el fin. Puede ser el vehículo para llegar a donde sí late el corazón:</strong></p>
    <ul>
        <li>Traducir artículos científicos, trabajar en campañas internacionales de protección animal, o estudiar veterinaria en otro país.</li>
        <li>El diseño gráfico también se conecta: los idiomas permiten trabajar con clientes globales, traducir contenido visual y crear piezas multilingües.</li>
        <li>Si te gusta la fotografía, dominar un idioma te puede abrir espacios en medios internacionales, trabajar con marcas extranjeras o contar historias visuales que viajan más lejos.</li>
        <li>¿La psicología? Entender otras lenguas también es entender otras formas de pensar, culturas, emociones. Puedes formarte en escuelas de afuera, acceder a investigaciones recientes y ayudar a personas en distintos contextos.</li>
        <li>¿Y la repostería? Imagina aprender de los mejores chefs en Francia, Italia o Japón, seguir tutoriales en su idioma original, compartir tus recetas al mundo o emprender con tu propia marca con clientes de distintos países.</li>
    </ul>
    <blockquote>"Todo lo que amamos puede florecer, si lo regamos con tiempo, idioma y alma."</blockquote>
    `,

    // Página 3
    `
    <p><strong>Saber idiomas abre puertas a becas y estudios internacionales.</strong></p>

    <p>Dominar una lengua extranjera no solo mejora el perfil académico, también incrementa las posibilidades de acceder a oportunidades educativas de alto nivel en otros países. Desde Colombia, hay múltiples programas que valoran el dominio de lenguas extranjeras:</p>

    <ul>
        <li>ICETEX ofrece becas para estudiar en el exterior que muchas veces requieren o favorecen el conocimiento de inglés, francés, portugués o alemán.</li>
        <li>Programa DAAD (Alemania) brinda oportunidades para estudios de pregrado y posgrado, especialmente si manejas el alemán o inglés.</li>
        <li>Alianza del Pacífico tiene programas de movilidad estudiantil entre Colombia, México, Chile y Perú, y conocer el idioma del país receptor es clave.</li>
        <li>BECAS Campus France y AUF (Francofonía) están dirigidas a estudiantes que dominan el francés.</li>
        <li>Becas Fulbright (EE. UU.) premian el mérito académico y exigen un sólido nivel de inglés.</li>
    </ul>
    <blockquote>"Los idiomas no solo enseñan palabras. Enseñan caminos."</blockquote>
    `,

    // Página 4
    `
    <p><strong>Hoy el mundo es una pantalla. Y quien sabe comunicarse en distintos idiomas tiene el mundo en su escritorio:</strong></p>
    <ul>
        <li>Intérprete en congresos, traductora freelance, profesora de español, agente de soporte en remoto.</li>
        <li>Incluso sin viajar, se pueden vivir experiencias globales desde casa.</li>
    </ul>
    <blockquote>"Dominar un idioma es llevar el pasaporte en la voz."</blockquote>
    `,

    // Página 5
    `
    <p><strong>Aunque más adelante cambies de rumbo, los idiomas seguirán siendo una herramienta poderosa:</strong></p>
    <ul>
        <li>Médica que accede a artículos científicos actuales en inglés.</li>
        <li>Periodista que cubre noticias internacionales y entrevista a personas en distintos idiomas.</li>
        <li>Emprendedora que exporta productos artesanales a otros países y negocia con clientes en italiano.</li>
        <li>Psicóloga que asiste a congresos internacionales y accede a investigaciones recientes gracias al dominio del inglés.</li>
        <li>Diseñadora que consigue clientes europeos.</li>
    </ul>
    <blockquote>"Lo que aprendes hoy, puede ser la llave de una puerta que aún no sabes que existe."</blockquote>
    `,

    // Página 6
    `
    <p><strong>Enseñar idiomas es tocar vidas.</strong> </p>
    <p>Puedes hacerlo en colegios, academias, universidades o por cuenta propia. Enseñar no es solo transmitir reglas, es abrir mundos, sembrar confianza y despertar curiosidad.</p>
    <p>Y en la era de clases online, también puede ser un proyecto personal: desde tutorías hasta cursos creados por ti.</p>
    <blockquote>"Una voz que enseña, también sana."</blockquote>
    `,

    // Página 7
    `
    <p><strong>Estudiar idiomas te da versatilidad profesional. Incluso antes de graduarte, puedes construir un perfil sólido:</strong></p>
    <ul>
        <li>Tutorías personalizadas</li>
        <li>Traducción de CVs y documentos</li>
        <li>Subtitulación de videos</li>
        <li>Corrección y edición de textos</li>
    </ul>
    <blockquote>"El idioma que dominas puede ser la forma más pura de expresar quién eres."</blockquote>
    `,

    // Página 8
    `
    <p><strong>Estudios demuestran que aprender idiomas:</strong></p>
    <ul>
        <li>Mejora la memoria y la agilidad mental.</li>
        <li>Estimula la atención y la capacidad de concentración.</li>
        <li>Fortalece el pensamiento crítico y la resolución de problemas.</li>
        <li>Mejora habilidades sociales y emocionales, como la empatía y la escucha activa.</li>
    </ul>
    <p>No es solo aprender a decir las cosas de otra forma, es entrenar la mente para ver el mundo desde otras perspectivas.</p>
    <blockquote>"Cuando aprendes otro idioma, también aprendes otra versión de ti."</blockquote>
    `,

    // Página 9
    `
    <p><strong>Los idiomas amplían tu red de contactos y amistades:</strong></p>
    <p>Hablar otrs idiomas no es solo una habilidad, es una llave que abre puertas a nuevas personas, culturas y formas de vida. Te permite conectar con personas de otros países, compartir ideas, colaborar en proyectos y entender mejor el mundo en su diversidad.</p>
    <p>Te da acceso directo a historias, tradiciones y oportunidades que de otro modo pasarían de largo.</p>
    <blockquote>"Un idioma aprendido, es un amigo más en el mundo."</blockquote>
    `,

    // Página 10
    `
    <p>A veces podemos sentir que vamos por el camino equivocado, que la vida no está tomando el rumbo que imaginamos, pero eso también es parte del plan:</p>
    <blockquote>“Porque yo sé muy bien los planes que tengo para ustedes —afirma el Señor—, planes de bienestar y no de calamidad, a fin de darles un futuro y una esperanza.”</blockquote>
    <p>Dios ya sabía por lo que ibas a pasar, al igual que sabía que serías capaz de seguir adelante aún con todo los problemas y dificultades. Solo nos queda confiar en él y en lo que nos tiene preparado. Recordemos que los que aman a Dios, TODAS las cosas les ayudan a bien.</p>
    `,

    //Pag 11
    `
    <p><strong>Ojo al tejo</strong> </p>
    <p>Esta página no fue creada con el propósito de convencerte de que te quedes donde de pronto no quieres estar, ni para que te conformes si en el fondo sientes que tu camino es otro.</p>
    <p>El objetivo aquí es simplemente mostrarte las luces, las posibilidades, los caminos que también existen dentro de lo que estás estudiando hoy.</p>
    <blockquote>"Resaltar lo bueno no es negar lo difícil, es recordarte que incluso en medio del cansancio, hay valor en lo que haces."</blockquote>
    <p>Pero si un día decides que necesitas otro rumbo, que lo que verdaderamente va contigo está en otro lugar, está perfecto. No sería un retroceso, sino más bien un acto de valentía, pero tamopco estoy aquí para decirte que cambies de carrera.</p>
    <p>De igual manera, si llegara a pasar, buscaría la forma de hacer otra página, con la nueva carrera, con tus nuevos sueños, porque eso hacemos los amigos, nos apoyamos. </p>
    `,


    //pag 12
    `
    <ul>
        <li>"Primero que todo agradeciminetos a Dios, por darme la salud y la idea de esta página."</li>
        <li>"A Luna por acompañarme en este proceso."</li>
        <li>"Y a ChatGPT por su ayuda en este proyecto."</li>
    `
];

const images = [
    "assets/Luna.jpeg",
    "assets/img2.jpg",
    "assets/img3.jpg",
    "assets/img4.jpg",
    "assets/img5.jpg",
    "assets/img6.jpg",
    "assets/img7.jpg",
    "assets/img8.jpg",
    "assets/img9.jpg",
    "assets/img10.jpg",
    "assets/img11.png",
    "assets/img12.png"
];


let currentPage = -1;

const title = document.querySelector('.site-title');
const text = document.getElementById('text');
const startTexts = document.getElementById('startTexts');
const startButton = document.getElementById('startButton');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

const homeButton = document.getElementById('homeButton');

homeButton.addEventListener('click', () => {
    goToStart();
});


startButton.addEventListener('click', () => {
    currentPage = 0;
    showPage();
});

nextButton.addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
        currentPage++;
        showPage();
    }
});

prevButton.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        showPage();
    } else if (currentPage === 0) {
        goToStart();
    }
});

function showPage() {
    text.innerHTML = pages[currentPage];
    text.classList.remove('hidden', 'fade-in');
    void text.offsetWidth; // Reinicia animación
    text.classList.add('fade-in');

    const subtitle = document.getElementById('subtitle');
    const heroImg = document.getElementById('heroImg');
    
    subtitle.textContent = subtitles[currentPage];
    subtitle.classList.remove('slide-up');
    void subtitle.offsetWidth;
    subtitle.classList.add('slide-up');

    heroImg.src = images[currentPage];
    heroImg.classList.remove('zoom-in');
    void heroImg.offsetWidth;
    heroImg.classList.add('zoom-in');

    startTexts.classList.add('hidden');
    startButton.classList.add('hidden');

    prevButton.classList.remove('hidden');
    prevButton.disabled = false;

    if (currentPage === pages.length - 1) {
        nextButton.classList.add('hidden');
        homeButton.classList.remove('hidden');
    } else {
        nextButton.classList.remove('hidden');
        homeButton.classList.add('hidden');
    }
}



function goToStart() {
    currentPage = -1;

    text.textContent = "";
    text.classList.add('hidden');

    startTexts.classList.remove('hidden');
    startButton.classList.remove('hidden');

    prevButton.classList.add('hidden');
    nextButton.classList.add('hidden');
    homeButton.classList.add('hidden');

    // Restaurar el subtítulo inicial
    const subtitle = document.getElementById('subtitle');
    subtitle.textContent = "🌍 Estudiar Idiomas: Una puerta que no cierra, sino que abre muchas más 📚";
    subtitle.classList.remove('slide-up');
    void subtitle.offsetWidth;
    subtitle.classList.add('slide-up');

    // Restaurar imagen inicial y reiniciar animación
    const heroImg = document.getElementById('heroImg');
    heroImg.src = "assets/header-image.png";
    heroImg.classList.remove('zoom-in');
    void heroImg.offsetWidth;
    heroImg.classList.add('zoom-in');

    // Animar textos de inicio
    startTexts.classList.remove('animate-start');
    void startTexts.offsetWidth;
    startTexts.classList.add('animate-start');

    startButton.classList.remove('animate-start');
    void startButton.offsetWidth;
    startButton.classList.add('animate-start');
}

