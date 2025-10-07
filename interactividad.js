$(document).ready(function() {

    // FECHA 6 DE MARZO DE 2025:
    const fechaInicio = new Date('April 6, 2025 00:00:00').getTime(); 
    
    const $contadorElemento = $('#tiempo-juntos');

    function actualizarContador() {
        const ahora = new Date().getTime();
        const distancia = ahora - fechaInicio;

        if (distancia < 0) {
            $contadorElemento.html("¡Aún no llegamos a 6 meses! Contando para la sorpresa...");
            return;
        }

        // Cálculos
        const segundos = Math.floor(distancia / 1000);
        const minutos = Math.floor(segundos / 60);
        const horas = Math.floor(minutos / 60);
        const dias = Math.floor(horas / 24);

        const horasRestantes = horas % 24;
        const minutosRestantes = minutos % 60;
        const segundosRestantes = segundos % 60;

        // Uso de .html() de jQuery
        $contadorElemento.html(
            `<span class="numero">${dias}</span> Días, 
             <span class="numero">${horasRestantes}</span> Horas, 
             <span class="numero">${minutosRestantes}</span> Minutos y 
             <span class="numero">${segundosRestantes}</span> Segundos`
        );
    }

    // Inicia la actualización del contador
    setInterval(actualizarContador, 1000);
    actualizarContador();


    // Frases 
    const frases = [
        "Tu sonrisa es mi lugar favorito en el mundo.",
        "Amo la forma en que me dices 'bebé'.",
        "Eres mi paz y mi aventura, todo en una sola cosita.",
        "Gracias por ser mi vida.",
        "Contigo, cada día es una celebración.",
        "Tu forma de ser es la razón por la que soy tan feliz.",
        "No hay nadie más linda que mi bebé."
    ];

    function mostrarFraseRandom() {
        const indice = Math.floor(Math.random() * frases.length);
        
        // Uso de .fadeOut() y .fadeIn() de jQuery para el efecto suave
        $('#frase-random').fadeOut(500, function() {
            $(this).html(frases[indice]).fadeIn(500);
        });
    }

    // Llamada inicial
    mostrarFraseRandom();
    
    // Asignación de evento de clic al botón en la sección de elogios
    $('.elogios-section button').on('click', mostrarFraseRandom); 
    
    // Asignación de evento de clic a las tarjetas
    $('.tarjeta-recuerdo').on('click', function() {
        // Uso de .toggleClass() de jQuery para añadir/quitar la clase 'volteada'
        $(this).toggleClass('volteada');
    });

});