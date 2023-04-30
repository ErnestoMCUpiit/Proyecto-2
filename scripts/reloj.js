function actualizarHora() {
    const fecha = new Date();
    const hora = fecha.getHours();
    const minutos = fecha.getMinutes();
    const segundos = fecha.getSeconds();
    
    const diaSemana = fecha.toLocaleDateString('es-ES', { weekday: 'long' });
    const diaMes = fecha.getDate();
    const mes = fecha.toLocaleDateString('es-ES', { month: 'long' });
    const anio = fecha.getFullYear();
  
    const relojHTML = `
      <span class="hora">${hora < 10 ? '0' : ''}${hora}:</span>
      <span class="minutos">${minutos < 10 ? '0' : ''}:${minutos}</span>
      <span class="segundos">${segundos < 10 ? '0' : ''}:${segundos}</span>
    `;
  
    const fechaHTML = `
      <span class="diaSemana">${diaSemana}</span>
      <span class="diaMes">${diaMes} de </span> 
      <span class="mes">${mes},</span>
      <span class="anio">${anio}</span>
    `;
  
    document.getElementById('reloj').innerHTML =fechaHTML+ '<br>'+relojHTML;
  }
  
  setInterval(actualizarHora, 1000);