// Variables principales
const chatToggle = document.getElementById('chat-toggle');
const chatContent = document.querySelector('.content');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const sendButton = document.getElementById('send-button');

// Archivo de audio
const userSound = new Audio('Audio/user-sound.mp3'); // Sonido al enviar mensaje
const botSound = new Audio('Audio/bot-sound.mp3');   // Sonido al recibir respuesta

// Mostrar/Ocultar chat
chatToggle.addEventListener('click', () => {
  chatContent.style.display = chatContent.style.display === 'block' ? 'none' : 'block';
});

// Evento para enviar mensajes
sendButton.addEventListener('click', () => {
  sendMessage();
});

chatInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    sendMessage();
  }
});

// Enviar mensaje del usuario y obtener respuesta del bot
async function sendMessage() {
  const userMessage = chatInput.value.trim();
  if (userMessage === '') return;

  // Reproducir sonido al enviar mensaje
  userSound.play();

  // Agregar el mensaje del usuario al chat
  appendMessage(userMessage, 'user');
  chatInput.value = '';

  // Mostrar la nube de "escribiendo..." del bot
  const typingIndicator = document.createElement('div');
  typingIndicator.classList.add('typing-indicator');
  chatMessages.appendChild(typingIndicator);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  // Simular un retraso de 1.5 segundos antes de que el bot responda
  setTimeout(async () => {
    const botResponse = await getBotResponse(userMessage);

    // Eliminar la nube de "escribiendo..."
    chatMessages.removeChild(typingIndicator);

    // Reproducir sonido al recibir la respuesta
    botSound.play();

    // Mostrar la respuesta del bot
    appendMessage(botResponse, 'bot');
  }, 1500); // 1.5 segundos de retraso
}

// Función para agregar mensajes al chat
function appendMessage(message, sender) {
  const messageElement = document.createElement('div');
  messageElement.classList.add(`${sender}-text`);
  messageElement.innerHTML = `<span>${message}</span>`;
  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Obtener respuesta del bot (esto puede ser modificado según tus necesidades)
async function getBotResponse(userInput) {
  // Aquí puedes personalizar la lógica del bot
  return `Respuesta automática: ${userInput}`;
}

function getBotResponse(userInput) {
  userInput = userInput.toLowerCase();

  if (userInput.includes('hola')) {
    return '¡Hola! Bienvenido al Sunset Royal Beach Resort, ¿cómo puedo ayudarte hoy?';
} else if (userInput.includes('sunset royal')) {
    return 'Sunset Royal Beach Resort está ubicado en la Zona Hotelera de Cancún, justo frente al mar Caribe. ¿Te gustaría saber más sobre nuestras instalaciones?';
} else if (userInput.includes('zona hotelera')) {
    return 'Estamos ubicados en la exclusiva Zona Hotelera de Cancún, con acceso directo a la playa y cerca de los principales centros comerciales y atracciones turísticas.';
} else if (userInput.includes('habitaciones')) {
    return 'Ofrecemos habitaciones con vista al mar, suites de lujo y opciones todo incluido. ¿Te gustaría saber más sobre nuestras opciones de habitación?';
} else if (userInput.includes('habitaciones con vista al mar')) {
    return 'Nuestras habitaciones con vista al mar ofrecen un entorno relajante con vistas espectaculares del Caribe. Perfectas para disfrutar del atardecer.';
} else if (userInput.includes('habitaciones de lujo')) {
    return 'Las habitaciones de lujo están equipadas con todo lo necesario para una estancia de confort, incluyendo jacuzzi y vistas panorámicas al mar.';
} else if (userInput.includes('todo incluido')) {
    return 'Nuestro paquete todo incluido incluye comidas, bebidas y acceso a diversas actividades. Es la opción ideal para disfrutar sin preocupaciones.';
} else if (userInput.includes('restaurante')) {
    return 'Contamos con un restaurante de primer nivel que sirve cocina internacional y platillos locales. ¿Te gustaría saber más sobre el menú?';
} else if (userInput.includes('comida')) {
    return 'Ofrecemos opciones gastronómicas para todos los gustos, desde comida local hasta internacional. ¿Te gustaría conocer más sobre nuestros platillos?';
} else if (userInput.includes('bar')) {
    return 'Nuestro resort cuenta con varios bares en el área de la piscina y en la playa. ¡Perfectos para disfrutar de un cóctel mientras te relajas!';
} else if (userInput.includes('piscinas')) {
    return 'Contamos con varias piscinas en el resort, incluyendo una para adultos y otra familiar. Las vistas al mar desde la piscina son impresionantes.';
} else if (userInput.includes('playa')) {
    return 'La playa está justo frente al resort. Puedes disfrutar de un día de sol o participar en nuestras actividades acuáticas como snorkel o paddleboarding.';
} else if (userInput.includes('spa')) {
    return 'Nuestro spa ofrece una amplia gama de tratamientos de relajación, desde masajes hasta faciales, todo en un entorno tranquilo frente al mar.';
} else if (userInput.includes('actividades')) {
    return 'En el Sunset Royal tenemos muchas actividades como deportes acuáticos, yoga, clases de cocina y entretenimiento nocturno. ¿Te gustaría reservar alguna actividad?';
} else if (userInput.includes('gimnasio')) {
    return 'Nuestro gimnasio está completamente equipado con lo último en tecnología para que puedas mantenerte en forma durante tu estancia.';
} else if (userInput.includes('wifi')) {
    return 'El WiFi está disponible en todo el resort sin costo adicional para nuestros huéspedes. Puedes disfrutar de Internet en todas nuestras instalaciones.';
} else if (userInput.includes('transporte')) {
    return 'Ofrecemos transporte desde el aeropuerto a nuestro resort. ¿Te gustaría reservar un traslado?';
} else if (userInput.includes('reservas')) {
    return 'Para hacer una reserva, puedes hacerlo directamente en nuestra página web o llamando al +52 998 123 4567. ¿Te gustaría hacer una reserva ahora?';
} else if (userInput.includes('promociones')) {
    return 'Tenemos promociones especiales dependiendo de la temporada. ¿Te gustaría saber más sobre nuestras ofertas actuales?';
} else if (userInput.includes('check-in')) {
    return 'El horario de check-in es a partir de las 3:00 PM. Si llegas antes, podemos guardar tus maletas hasta que la habitación esté lista.';
} else if (userInput.includes('check-out')) {
    return 'El check-out es hasta las 12:00 PM. Si necesitas más tiempo, por favor avísanos con anticipación para verificar la disponibilidad.';
} else if (userInput.includes('boda')) {
    return 'El Sunset Royal es el lugar perfecto para bodas en la playa. Podemos ayudarte a organizar todo para tu gran día. ¿Te gustaría más información sobre nuestros paquetes de bodas?';
} else if (userInput.includes('luna de miel')) {
    return 'Contamos con paquetes especiales para lunas de miel, que incluyen cenas románticas y tratamientos de spa. ¿Te gustaría saber más?';
} else if (userInput.includes('niños')) {
    return 'Tenemos actividades y programas especiales para niños, como el club infantil y actividades acuáticas. ¿Te gustaría saber más sobre esto?';
} else if (userInput.includes('masajes')) {
    return 'Ofrecemos masajes relajantes en el spa y también en la playa. ¿Te gustaría reservar un masaje?';
} else if (userInput.includes('todo incluido')) {
    return 'El paquete todo incluido cubre todas las comidas, bebidas y acceso a actividades como deportes acuáticos, entretenimiento y más.';
} else if (userInput.includes('suites')) {
    return 'Las suites están equipadas con jacuzzi, vistas panorámicas y una decoración elegante. Son ideales para una estancia de lujo. ¿Te gustaría más detalles?';
} else if (userInput.includes('actividades acuáticas')) {
    return 'Ofrecemos actividades acuáticas como kayak, snorkel y paddleboarding. ¿Te gustaría reservar alguna de estas actividades?';
} else if (userInput.includes('golf')) {
    return 'Aunque no tenemos un campo de golf en el resort, hay excelentes campos de golf cerca que podemos recomendarte. ¿Te gustaría saber más?';
} else if (userInput.includes('tours')) {
    return 'Ofrecemos tours por Cancún y sus alrededores, incluyendo visitas a parques temáticos y excursiones a las ruinas mayas. ¿Te gustaría saber más sobre estos tours?';
} else if (userInput.includes('clima')) {
    return 'Cancún tiene un clima tropical. Las temperaturas promedio son de 27°C. ¿Te gustaría saber más sobre el clima durante tu estancia?';
} else if (userInput.includes('conferencias')) {
    return 'Contamos con salas de conferencias y eventos. Si deseas organizar una reunión o evento, podemos ayudarte. ¿Te gustaría más información?';
} else if (userInput.includes('wifi gratuito')) {
    return 'Sí, ofrecemos Wi-Fi gratuito en todo el resort. Puedes conectarte sin problemas desde cualquier área del hotel.';
} else if (userInput.includes('hace frío')) {
    return 'Aunque Cancún tiene un clima cálido la mayor parte del año, las noches pueden ser frescas en temporada baja. Te recomendamos traer algo ligero para la noche.';
} else if (userInput.includes('compras')) {
    return 'La Zona Hotelera de Cancún tiene varios centros comerciales. Te recomendamos el Mall La Isla y Plaza Kukulcán. ¿Te gustaría más información sobre las tiendas cercanas?';
} else if (userInput.includes('eventos especiales')) {
    return 'Podemos organizar eventos especiales como cenas temáticas y noches de fiesta. ¿Te gustaría saber más sobre las opciones para eventos?';
} else if (userInput.includes('paseo en barco')) {
    return 'Podemos organizar un paseo en barco privado para ti y tus acompañantes. ¿Te gustaría saber más sobre esta actividad?';
} else if (userInput.includes('temazcal')) {
    return 'Ofrecemos un temazcal tradicional para una experiencia de relajación única. ¿Te gustaría reservarlo?';
} else if (userInput.includes('servicio de habitaciones')) {
    return 'El servicio de habitaciones está disponible las 24 horas. ¿Te gustaría hacer un pedido o recibir algo en tu habitación?';
} else if (userInput.includes('lugar de interés')) {
    return 'Cancún tiene muchos lugares de interés cercanos, como las ruinas de Tulum, Chichen Itza y el Parque Xcaret. ¿Te gustaría saber más sobre estos lugares?';
} else if (userInput.includes('centros comerciales')) {
    return 'Estamos cerca de varios centros comerciales como La Isla Shopping Village y Plaza Kukulcán. ¿Te gustaría saber más sobre las tiendas o actividades cercanas?';
} else if (userInput.includes('tours guiados')) {
    return 'Tenemos varios tours guiados a sitios históricos y naturales cercanos. ¿Te gustaría reservar un tour guiado?';
} else if (userInput.includes('reserva en línea')) {
    return 'Puedes hacer tu reserva directamente en nuestra página web para obtener las mejores tarifas. ¿Te gustaría recibir el enlace para hacer tu reserva?';
} else if (userInput.includes('hora de salida')) {
    return 'El check-out es hasta las 12:00 PM, pero si necesitas salir más tarde, por favor avísanos para verificar la disponibilidad.';
} else if (userInput.includes('horarios de comida')) {
    return 'El desayuno se sirve de 7:00 AM';
} else if (userInput.includes('mascotas')) {
    return 'Efectivamente, si aceptamos mascotas en el resort ya que somos pet friendly';
} else if (userInput.includes('tipos de pago')) {
    return 'Aceptamos varios métodos de pago'
}
else {
  return 'Lo siento, no entiendo tu consulta. Por favor, intenta preguntar algo más específico.';}

}
