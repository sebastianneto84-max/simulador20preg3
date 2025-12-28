// ==========================
// SIMULADOR DE INGRESO - VERSIÓN ROBUSTA (FormData)
// ==========================

// Preguntas
const questions = [
    { id: 1, block: 'RAZONAMIENTO MATEMÁTICO', text: 'Se mezclan 10 litros de $3 el litro; 5 litros de $9 el litro y 15 litros de $4 el litro. ¿Cuál es el precio de cada litro de la mezcla resultante?', options: ['a) $16', 'b) $3', 'c) $4', 'd) $4,5'], answer: 'd' },
    { id: 2, block: 'RAZONAMIENTO MATEMÁTICO', text: 'María no sabe que pizza pedir. Puede pedir la mediana o la grande, con masa fina o gruesa; substituir la salsa normal por salsa picante o la de ajo; añadir un ingrediente si lo desea: champiñones, cebolla, pimientos o pepperoni. ¿Cuántas pizzas diferentes puede pedir María?', options: ['a) 80', 'b) 60', 'c) 48', 'd) 32'], answer: 'b' },
    { id: 3, block: 'RAZONAMIENTO MATEMÁTICO', text: 'Debido al aumento de impuestos sobre los dispositivos electrónicos, el precio de un televisor ha subido a 845 dólares, lo que supone un incremento del 30% con respecto al precio original. ¿Cuál era el precio original del televisor antes del aumento?', options: ['a) 650', 'b) 591,5', 'c) 676', 'd) 515,5'], answer: 'a' },
    { id: 4, block: 'RAZONAMIENTO MATEMÁTICO', text: 'En la tabla se muestra la presión como una función de la profundidad para cada 15 m de descenso en el océano. Si la presión se incrementa a una razón constante por cada metro de descenso, ¿cuál de los siguientes datos describe los datos dados?', image: 'imagenes/ejercicio4_rm.png', imageStyle: 'max-width: 400px;', options: ['a) Opción 3', 'b) Opción 1', 'c) Opción 2', 'd) Opción 4'], answer: 'a' },
    { id: 5, block: 'RAZONAMIENTO MATEMÁTICO', text: 'Sobre una recta se tienen los puntos consecutivos A, B, C y D, de tal modo que AB = 2 m y CD = 3 m. Hallar BC si se cumple que \\( \\frac{AD+BC}{2} = 10 \\)', image: 'imagenes/ejercicio5_rm.png', imageStyle: 'max-width: 350px', options: ['a) 6', 'b) 7,5', 'c) 9/2', 'd) 13/2'], answer: 'b' },
    { id: 6, block: 'RAZONAMIENTO MATEMÁTICO', text: 'Si, 3 < |x| < 5 y 4 < |y| < 6 . ¿Cuál de las siguientes opciones debe ser verdadera?', options: ['a) y < x', 'b) x < y', 'c) |xy| > 12', 'd) |x+y| > 7'], answer: 'c' },
    { id: 7, block: 'RAZONAMIENTO MATEMÁTICO', text: 'Cada término de una secuencia es más grande que el anterior, la diferencia entre dos términos consecutivos es siempre el mismo número. Si el tercero y el sexto término son 17 y 77 respectivamente. ¿Cuál es el octavo término?', options: ['a) 97', 'b) 110', 'c) 117', 'd) 140'], answer: 'c' },
    { id: 8, block: 'RAZONAMIENTO MATEMÁTICO', text: 'La siguiente tabla muestra la asistencia a cinco salas de cine del centro comercial.', image: 'imagenes/ejercicio8_rm.png', imageStyle: 'max-width: 250px', options: ['a) 380', 'b) 390', 'c) 500', 'd) 385'], answer: 'd' },
    { id: 9, block: 'APTITUD ESPACIAL', text: 'Se muestran tres vistas del mismo cubo.', image: 'imagenes/ejercicio9_ae.png', imageStyle: 'max-width: 450px;', image2: 'imagenes/ejercicio92_ae.png', image2Style: 'max-width: 400px;', options: ['a) Opción 1', 'b) Opción 2', 'c) Opción 3', 'd) Opción 4'], answer: 'c' },
    { id: 10, block: 'APTITUD ESPACIAL', text: 'Escoja la opción que mejor completa la analogía dada.', image: 'imagenes/ejercicio10_ae.png', imageStyle: 'max-width: 550px;', options: ['a) Opción 1', 'b) Opción 2', 'c) Opción 3', 'd) Opción 4'], answer: 'd' },
    { id: 11, block: 'APTITUD ESPACIAL', text: 'Considere las siguientes figuras.', image: 'imagenes/ejercicio11_ae.png', imageStyle: 'max-width: 450px;', image2: 'imagenes/ejercicio112_ae.png', image2Style: 'max-width: 250px;', options: ['a) Opción 1', 'b) Opción 2', 'c) Opción 3', 'd) Opción 4'], answer: 'b' },
    { id: 12, block: 'APTITUD ESPACIAL', text: '¿Cuál de las siguientes casillas debe reemplazar el signo de interrogación para completar el patrón?', image: 'imagenes/ejercicio12_ae.png', imageStyle: 'max-width: 450px;', options: ['a) Opción 1', 'b) Opción 2', 'c) Opción 3', 'd) Opción 4'], answer: 'a' },
    { id: 13, block: 'APTITUD ESPACIAL', text: '¿Cuál es la opción que sustituye a los signos de interrogación?', image: 'imagenes/ejercicio13_ae.png', imageStyle: 'max-width: 250px;', options: ['a) 5 – 4', 'b) 0 – 4', 'c) 0 – 1', 'd) 2 – 1'], answer: 'd' },
    { id: 14, block: 'APTITUD VERBAL', text: 'Considere el siguiente texto: <p><mark>"Ese texto, sin duda, por sus contenidos, por la manera en que está redactado, por su gran aporte histórico y demás características, promete tener gran envergadura para todos aquellos lectores que logren identificar toda su riqueza".<mark> <p>Según el texto, ¿cuál palabra es equivalente a “envergadura”?', options: ['a) Trascendencia', 'b) Calidad', 'c) Sentido', 'd) Significado'], answer: 'a' },
    { id: 15, block: 'APTITUD VERBAL', text: 'Seleccione la alternativa que exprese el significado opuesto al de la palabra escrita en letras mayúsculas: <p>CÁNDIDO', options: ['a) Incrédulo', 'b) Desinhibido', 'c) Astuto', 'd) Experimentado'], answer: 'c' },
    { id: 16, block: 'APTITUD VERBAL', text: 'Considere el siguiente texto: <p><mark>"El chiste es un dicho <u>breve</u>, <u>agudo</u> y <u>gracioso</u> que surge espontáneamente del pueblo; algunos investigadores y autores los recopilan para su publicación".<mark> <p>Según el texto, ¿cuál palabra sintetiza los términos subrayados?', options: ['a) Sagaz', 'b) Burlesco', 'c) Ingenioso', 'd) Perspicaz'], answer: 'c' },
    { id: 17, block: 'APTITUD VERBAL', text: 'Considere el siguiente texto: <p><mark>La diferencia entre mito y leyenda es imprecisa, ya que sus orígenes son __________. En su lenguaje desempeñan un papel de particular relevancia la __________ y la alegoría; ya que describen figuras míticas, que generalmente son __________.<mark> <p>Según el texto, ¿cuáles palabras completan el párrafo anterior con sentido lógico?', options: ['a) idénticos – poesía – insólitas', 'b) semejantes – metáfora – simbólicas', 'c) exactos – ambigüedad – metafísicas', 'd) relacionados – historia – imaginarias.'], answer: 'b' },
    { id: 18, block: 'APTITUD VERBAL', text: 'En el siguiente ítem escoja la opción, aquella que tenga un significado diferente (que no comparte relación semántica) con la palabra escrita con letras mayúsculas y las demás del grupo. <p>SIGNO', options: ['a) Punto', 'b) Coma', 'c) Guión', 'd) Tilde'], answer: 'd' },
    { id: 19, block: 'APTITUD VERBAL', text: 'En el siguiente ejercicio, seleccione la alternativa que establezca la misma relación que hay entre las dos primeras palabras escritas con mayúsculas. <p>INVITACIÓN es a DEFERENCIA como …', options: ['a) Parecer es a libertad', 'b) Préstamo es a Seguridad', 'c) Obsequio es a generosidad', 'd) Donaciòn esa comercio'], answer: 'c' },
    { id: 20, block: 'APTITUD VERBAL', text: '“A continuación, usted encontrará un fragmento de lectura, lea el texto y responda a la pregunta planteada, de acuerdo con lo expresado en dicho texto. <p><mark>La protección de la libertad a la que se refiere el código penal no es la defensa de la libertad política, sino de la libertad social, de la relación del ciudadano con los demás miembros de la sociedad. El mero hecho de vivir en sociedad obliga al ciudadano a renunciar a gran parte de su libertad, a gran parte de su voluntad, lo que relativiza extraordinariamente este concepto”.<mark> <p>¿Qué protege el código penal?', options: ['a) La voluntad restringida', 'b) La libertad política', 'c) La libertad social', 'd) La libertad limitada'], answer: 'c' }
];

// Variables globales
let currentQuestionIndex = 0;
let timerInterval;
const totalTime = 24 * 60; // 24 minutos
let timeRemaining = totalTime;
let userAnswers = {};
let flaggedQuestions = new Set();
let isQuizSubmitted = false;
let isQuizActive = false;

// **FUNCIÓN START QUIZ**
function startQuiz() {
    const email = window.currentUser ? window.currentUser.email : null;
    if (!email) {
        alert("Error: No se ha podido identificar al usuario. Por favor, inicie sesión de nuevo.");
        return;
    }

    // Verificar intentos antes de empezar
    const isAdmin = email === "sebastian.neto@593teveoenlau.ec";
    let attempts = localStorage.getItem(`attempts_${email}`) || 0;
    
    if (!isAdmin && attempts >= 2) {
      alert("Ya alcanzaste el límite de 2 intentos. Se cerrará tu sesión.");
      logoutAndReload();
      return;
    }

    if (typeof registerAttempt === 'function') {
        registerAttempt();
    } else {
        console.error("La función registerAttempt no está definida.");
        return;
    }

    isQuizActive = true;
    currentQuestionIndex = 0;
    timeRemaining = totalTime;
    userAnswers = {};
    flaggedQuestions.clear();
    isQuizSubmitted = false;
    document.getElementById('intro-page-container').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'flex';
    renderQuiz();
    startTimer();
    saveProgress();
}

function renderQuiz() {
    renderNavigation();
    renderQuestion(currentQuestionIndex);
    if (window.MathJax) {
        window.MathJax.typeset();
    }
}

function renderNavigation() {
    document.getElementById('math-nav-buttons').innerHTML = '';
    document.getElementById('spatial-nav-buttons').innerHTML = '';
    document.getElementById('verbal-nav-buttons').innerHTML = '';
    questions.forEach((q, index) => {
        const button = document.createElement('button');
        button.textContent = q.id;
        button.onclick = () => {
            renderQuestion(index);
            saveProgress(); 
        };
        const blockContainerId = 
            q.block.includes('MATEMÁTICO') ? 'math-nav-buttons' :
            q.block.includes('ESPACIAL') ? 'spatial-nav-buttons' :
            'verbal-nav-buttons';
        if (userAnswers[q.id]) button.classList.add('answered');
        if (flaggedQuestions.has(q.id)) button.classList.add('flagged');
        if (index === currentQuestionIndex) button.classList.add('active');
        document.getElementById(blockContainerId).appendChild(button);
    });
}

function renderQuestion(index) {
    currentQuestionIndex = index;
    const container = document.getElementById('question-container');
    container.innerHTML = '';
    const q = questions[index];
    document.getElementById('section-title').textContent = q.block;
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question active';
    let html = `<h3>Pregunta ${q.id}.</h3><p>${q.text}</p>`;

    if (q.image) {
        const style = q.imageStyle || '';
        html += `<div class="image-container"><img src="${q.image}" alt="Imagen para el ejercicio ${q.id}" style="${style}"></div>`;
        
        if (q.id === 8) {
            html += `<p style="text-align: left; margin-top: 15px; font-weight: 500;">Si la mediana de la asistencia a las cinco salas es 386 y no hay dos salas con el mismo número de asistencias, ¿cuál es el mayor valor posible para “n”?</p>`;
        }
        if (q.id === 9) {
            html += `<p style="text-align: left; margin-top: 15px; font-weight: 500;">De las cuatro opciones siguientes, escoja la que contiene el símbolo que está opuesto al círculo.</p>`;
        }
        if (q.id === 11) {
            html += `<p style="text-align: left; margin-top: 15px; font-weight: 500;">¿Cuál de ellas se debe rotar para obtener esta figura?.</p>`;
        }
        if (q.image2) {
            const style2 = q.image2Style || '';
            html += `<div class="image-container"><img src="${q.image2}" alt="Imagen adicional para el ejercicio ${q.id}" style="${style2}"></div>`;
        }
    }

    html += '<div class="options">';
    if (q.optionImages) {
        const containerClass = q.id === 10 ? 'image-options-container-vertical' : 'image-options-container';
        html += `<div class="${containerClass}">`;
        q.options.forEach((option, i) => {
            const optionValue = String.fromCharCode(97 + i);
            const checked = userAnswers[q.id] === optionValue ? 'checked' : '';
            html += `
                <label class="image-option-label">
                    <input type="radio" name="q${q.id}" value="${optionValue}" ${checked} onclick="handleOptionClick(${q.id}, this)">
                    <span>${option}</span>
                    <img src="${q.optionImages[i]}" alt="Opción ${optionValue}">
                </label>
            `;
        });
        html += `</div>`;
    } else {
        q.options.forEach((option, i) => {
            const optionValue = option.charAt(0).toLowerCase();
            const checked = userAnswers[q.id] === optionValue ? 'checked' : '';
            html += `
                <label>
                    <input type="radio" name="q${q.id}" value="${optionValue}" ${checked} onclick="handleOptionClick(${q.id}, this)">
                    ${option}
                </label>
            `;
        });
    }
    html += '</div>';
    questionDiv.innerHTML = html;
    container.appendChild(questionDiv);
    
    if (window.MathJax) {
        window.MathJax.typesetPromise([questionDiv]).catch(function (err) {
            console.log('MathJax error: ' + err.message);
        });
    }

    updateNavigationButtons();
}

function handleOptionClick(questionId, element) {
    userAnswers[questionId] = element.value;
    saveProgress(); 
    renderNavigation();
}

function updateNavigationButtons() {
    document.getElementById('next-btn').style.display = currentQuestionIndex === questions.length - 1 ? 'none' : 'block';
    document.getElementById('prev-btn').style.display = currentQuestionIndex === 0 ? 'none' : 'block';
    const flagBtn = document.getElementById('flag-btn');
    if (flaggedQuestions.has(questions[currentQuestionIndex].id)) {
        flagBtn.style.backgroundColor = '#ffc107';
    } else {
        flagBtn.style.backgroundColor = '#6c757d';
    }
    renderNavigation();
}

function toggleFlaggedQuestion() {
    const currentId = questions[currentQuestionIndex].id;
    if (flaggedQuestions.has(currentId)) {
        flaggedQuestions.delete(currentId);
    } else {
        flaggedQuestions.add(currentId);
    }
    saveProgress();
    updateNavigationButtons();
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        renderQuestion(currentQuestionIndex + 1);
        saveProgress();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        renderQuestion(currentQuestionIndex - 1);
        saveProgress();
    }
}

function startTimer() {
    timerInterval = setInterval(() => {
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            submitQuiz();
            return;
        }
        timeRemaining--;
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        document.getElementById('timer').textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        if (timeRemaining % 5 === 0) {
            saveProgress();
        }
    }, 1000);
}

function submitQuiz() {
    if (isQuizSubmitted) return; 
    clearInterval(timerInterval);
    isQuizSubmitted = true;
    isQuizActive = false; 
    localStorage.removeItem("quizState"); 
    
    document.getElementById('quiz-page').style.display = 'none';
    document.getElementById('results-page').style.display = 'flex';
    displayResultsPage();
}

function calculateResults() {
    let correctAnswers = 0;
    questions.forEach(q => {
        if (userAnswers[q.id] === q.answer) {
            correctAnswers++;
        }
    });
    return { correctAnswers, totalQuestions: questions.length };
}

function displayResultsPage() {
    const existingAdjustedScore = document.querySelector('.adjusted-score-display');
    if (existingAdjustedScore) {
        existingAdjustedScore.remove();
    }
    const results = calculateResults();
    const resultsScoreEl = document.querySelector('.results-score');
    resultsScoreEl.textContent = `Aciertos: ${results.correctAnswers} / ${results.totalQuestions} (${(results.correctAnswers / results.totalQuestions * 100).toFixed(1)}%)`;
    const baseScore = 425;
    const variableScore = 575;
    const pointsPerAnswer = variableScore / results.totalQuestions;
    const finalScore = Math.round(baseScore + (results.correctAnswers * pointsPerAnswer));

    // ============================================
    // INTEGRACIÓN CORREO CON ALERTA VISUAL
    // ============================================
    sendResultsToEmail(results, finalScore);
    // ============================================

    const adjustedScoreEl = document.createElement('p');
    adjustedScoreEl.className = 'results-score adjusted-score-display';
    adjustedScoreEl.style.marginTop = '15px';
    adjustedScoreEl.style.fontSize = '2.8em';
    adjustedScoreEl.innerHTML = `Puntuación Final: <strong style="color: var(--accent-color);">${finalScore} / 1000</strong>`;
    resultsScoreEl.parentNode.insertBefore(adjustedScoreEl, resultsScoreEl.nextSibling);
    
    const resultsContent = document.getElementById('results-content');
    resultsContent.innerHTML = '';
    questions.forEach(q => {
        const userAnswer = userAnswers[q.id];
        const isCorrect = userAnswer === q.answer;
        const block = document.createElement('div');
        block.className = 'results-question-block';
        let html = `<h4>Pregunta ${q.id}. ${q.block}</h4><p>${q.text}</p>`;
        if (q.image) {
            const style = q.imageStyle || '';
            html += `<div class="image-container"><img src="${q.image}" alt="Imagen para el ejercicio ${q.id}" style="${style}"></div>`;
        }
        html += '<div class="options">';
        if (q.optionImages) {
            const containerClass = q.id === 10 ? 'image-options-container-vertical' : 'image-options-container';
            html += `<div class="${containerClass}">`;
            q.options.forEach((option, i) => {
                const optionValue = String.fromCharCode(97 + i);
                const isSelected = userAnswer === optionValue;
                const isTheCorrectAnswer = q.answer === optionValue;
                let labelClass = 'image-option-label';
                if (isSelected && isCorrect) labelClass += ' correct';
                else if (isSelected && !isCorrect) labelClass += ' incorrect';
                else if (isTheCorrectAnswer) labelClass += ' correct';
                html += `
                    <label class="${labelClass}">
                        <input type="radio" name="results_q${q.id}" value="${optionValue}" ${isSelected ? 'checked' : ''} disabled>
                        <span>${option}</span>
                        <img src="${q.optionImages[i]}" alt="Opción ${optionValue}">
                    </label>`;
            });
            html += `</div>`;
        } else {
            q.options.forEach((option, i) => {
                const optionValue = option.charAt(0).toLowerCase();
                const isSelected = userAnswer === optionValue;
                const isTheCorrectAnswer = q.answer === optionValue;
                let labelClass = '';
                if (isSelected && isCorrect) labelClass = 'correct';
                else if (isSelected && !isCorrect) labelClass = 'incorrect';
                else if (isTheCorrectAnswer) labelClass = 'correct';
                html += `
                    <label class="${labelClass}">
                        <input type="radio" name="results_q${q.id}" value="${optionValue}" ${isSelected ? 'checked' : ''} disabled>
                        ${option}
                    </label>`;
            });
        }
        html += '</div>';
        if (!isCorrect) {
            html += `<p style="color: red; margin-top: 10px;">Tu respuesta: ${userAnswer ? userAnswer.toUpperCase() : 'Ninguna'}. Respuesta correcta: <strong>${q.answer.toUpperCase()}</strong></p>`;
        } else {
            html += `<p style="color: green; margin-top: 10px;">¡Respuesta correcta!</p>`;
        }
        block.innerHTML = html;
        resultsContent.appendChild(block);
    });

    if (window.MathJax) {
        window.MathJax.typesetPromise([resultsContent]).catch(function (err) {
            console.log('MathJax error: ' + err.message);
        });
    }
}

function saveProgress() {
    if (!isQuizActive || isQuizSubmitted) return;
    const state = {
        currentQuestionIndex,
        userAnswers,
        timeRemaining,
        flaggedQuestions: Array.from(flaggedQuestions)
    };
    localStorage.setItem("quizState", JSON.stringify(state));
}

function restoreProgress() {
    const savedState = localStorage.getItem("quizState");
    if (savedState) {
        const saved = JSON.parse(savedState);
        isQuizActive = true; 
        document.getElementById('intro-page-container').style.display = 'none';
        document.getElementById('quiz-page').style.display = 'flex';
        currentQuestionIndex = saved.currentQuestionIndex || 0;
        userAnswers = saved.userAnswers || {};
        timeRemaining = saved.timeRemaining || totalTime;
        flaggedQuestions = new Set(saved.flaggedQuestions || []);
        renderQuiz();
        startTimer();
    }
}

// ==========================
// FUNCIÓN PARA ENVIAR CORREO (ROBUSTA)
// ==========================
function sendResultsToEmail(results, finalScore) {
    const userEmail = window.currentUser ? window.currentUser.email : "Desconocido";
    
    // 1. Resumen respuestas
    let answersSummary = "";
    questions.forEach(q => {
        const userAnswer = userAnswers[q.id] ? userAnswers[q.id].toUpperCase() : "-";
        const isCorrect = userAnswers[q.id] === q.answer;
        const status = isCorrect ? "OK" : "X";
        answersSummary += `P${q.id}: ${status} (Tuya:${userAnswer})\n`;
    });

    // 2. Usamos FormData en lugar de JSON para mayor compatibilidad
    const formData = new FormData();
    formData.append("email", userEmail); // Esto habilita 'Reply-To'
    formData.append("_subject", "Nuevo Resultado Simulador: " + userEmail);
    formData.append("_captcha", "false"); // Desactivar captcha
    formData.append("_template", "table");
    
    // Datos del examen
    formData.append("Estudiante", userEmail);
    formData.append("Puntaje", finalScore + " / 1000");
    formData.append("Aciertos", results.correctAnswers + " / " + results.totalQuestions);
    formData.append("Detalle", answersSummary);

    console.log("Intentando enviar correo a FormSubmit...");

    // 3. Envío con fetch
    fetch("https://formsubmit.co/ajax/sebasemprende2024@gmail.com", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log("ÉXITO: Correo enviado.", data);
        // Opcional: Avisar al usuario discretamente
        // alert("Tus resultados han sido enviados al administrador.");
    })
    .catch(error => {
        console.error("ERROR enviando correo:", error);
        alert("Atención: Hubo un error enviando tus resultados al sistema. Por favor toma una captura de pantalla.");
    });
}


// LÓGICA DE INICIO CENTRALIZADA
document.addEventListener('DOMContentLoaded', () => {
    auth.onAuthStateChanged(user => {
        if (user) {
            window.currentUser = user; 
            document.getElementById('login-page').style.display = 'none';
            document.getElementById('app-container').style.display = 'block';

            if (localStorage.getItem("quizState")) {
                restoreProgress();
            } else {
                document.getElementById('intro-page-container').style.display = 'flex';
                document.getElementById('quiz-page').style.display = 'none';
                document.getElementById('results-page').style.display = 'none';
            }
        } else {
            window.currentUser = null;
            document.getElementById('login-page').style.display = 'flex';
            document.getElementById('app-container').style.display = 'none';
        }
    });
});

window.addEventListener("beforeunload", (e) => {
    if (isQuizActive && !isQuizSubmitted) {
        const confirmationMessage = '¡Atención! Si cierras o recargas la pestaña, tu intento se enviará automáticamente. ¿Estás seguro?';
        e.returnValue = confirmationMessage; 
        return confirmationMessage;
    }
});

window.addEventListener("pagehide", () => {
    if (isQuizActive && !isQuizSubmitted) {
        saveProgress();
    }
});


