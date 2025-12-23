import './App.css';
import BotonMood from './componentes/BotonMood';
import { useState } from 'react';

function App() {
  // Estados para guardar las respuestas del cuestionario
  const [moodSeleccionado, setMoodSeleccionado] = useState('');
  const [duracionSeleccionada, setDuracionSeleccionada] = useState('');
  const [epocaSeleccionada, setEpocaSeleccionada] = useState('');
  const [generoSeleccionado, setGeneroSeleccionado] = useState('');

  // Arrays con las opciones de cada pregunta
  const listaMoods = [
    { emoji: '😊', texto: 'Feliz' },
    { emoji: '😢', texto: 'Triste' },
    { emoji: '😴', texto: 'Relajado' },
    { emoji: '😡', texto: 'Enojado' },
    { emoji: '🤩', texto: 'Emocionado' }
  ];

  const listaDuraciones = [
    { emoji: '⚡', texto: 'Corta', detalle: '< 90 min' },
    { emoji: '⏱️', texto: 'Media', detalle: '90-120 min' },
    { emoji: '🎬', texto: 'Larga', detalle: '> 120 min' }
  ];

  const listaEpocas = [
    { emoji: '📼', texto: 'Clásicas', detalle: 'Antes 1980' },
    { emoji: '🎸', texto: '80s-90s', detalle: '1980-1999' },
    { emoji: '💿', texto: '2000s', detalle: '2000-2010' },
    { emoji: '🎥', texto: 'Modernas', detalle: '2010+' }
  ];

  const listaGeneros = [
    { emoji: '💥', texto: 'Acción' },
    { emoji: '😂', texto: 'Comedia' },
    { emoji: '😭', texto: 'Drama' },
    { emoji: '👻', texto: 'Terror' },
    { emoji: '💕', texto: 'Romance' },
    { emoji: '🔮', texto: 'Fantasía' }
  ];

  // Función para mostrar un resumen al final
  function verResumen() {
    if (moodSeleccionado && duracionSeleccionada && epocaSeleccionada && generoSeleccionado) {
      alert(`¡Cuestionario completado!\n\nMood: ${moodSeleccionado}\nDuración: ${duracionSeleccionada}\nÉpoca: ${epocaSeleccionada}\nGénero: ${generoSeleccionado}\n\n(Próximamente aquí verás películas recomendadas)`);
    } else {
      alert('Por favor, responde todas las preguntas');
    }
  }

  return (
    <div className="pagina-principal">
      <h1 className="titulo-app">🎬 MoviMood</h1>
      <p className="descripcion">¡Tu recomendador de películas según tu mood!</p>
      
      {/* PREGUNTA 1: MOOD */}
      <div className="seccion-pregunta">
        <h2>¿Cómo te sientes hoy?</h2>
        <div className="contenedor-botones">
          {listaMoods.map((mood) => (
            <BotonMood 
              key={mood.texto}
              emoji={mood.emoji}
              texto={mood.texto}
              onClick={() => setMoodSeleccionado(mood.texto)}
              seleccionado={moodSeleccionado === mood.texto}
            />
          ))}
        </div>
      </div>

      {/* PREGUNTA 2: DURACIÓN */}
      <div className="seccion-pregunta">
        <h2>¿Cuánto tiempo tienes?</h2>
        <div className="contenedor-botones">
          {listaDuraciones.map((duracion) => (
            <BotonMood 
              key={duracion.texto}
              emoji={duracion.emoji}
              texto={duracion.texto}
              detalle={duracion.detalle}
              onClick={() => setDuracionSeleccionada(duracion.texto)}
              seleccionado={duracionSeleccionada === duracion.texto}
            />
          ))}
        </div>
      </div>

      {/* PREGUNTA 3: ÉPOCA */}
      <div className="seccion-pregunta">
        <h2>¿Qué época prefieres?</h2>
        <div className="contenedor-botones">
          {listaEpocas.map((epoca) => (
            <BotonMood 
              key={epoca.texto}
              emoji={epoca.emoji}
              texto={epoca.texto}
              detalle={epoca.detalle}
              onClick={() => setEpocaSeleccionada(epoca.texto)}
              seleccionado={epocaSeleccionada === epoca.texto}
            />
          ))}
        </div>
      </div>

      {/* PREGUNTA 4: GÉNERO */}
      <div className="seccion-pregunta">
        <h2>¿Qué género te apetece?</h2>
        <div className="contenedor-botones">
          {listaGeneros.map((genero) => (
            <BotonMood 
              key={genero.texto}
              emoji={genero.emoji}
              texto={genero.texto}
              onClick={() => setGeneroSeleccionado(genero.texto)}
              seleccionado={generoSeleccionado === genero.texto}
            />
          ))}
        </div>
      </div>

      {/* BOTÓN PARA VER RECOMENDACIONES */}
      <button className="boton-ver-peliculas" onClick={verResumen}>
        🎥 Ver Recomendaciones
      </button>
      
      <p className="nombre-autora">Por Nicole Beeckmans</p>
    </div>
  );
}

export default App;