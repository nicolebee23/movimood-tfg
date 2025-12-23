import './App.css';
import BotonMood from './componentes/BotonMood';
import { useState } from 'react';

function App() {
  // Estado para guardar el mood seleccionado
  const [moodSeleccionado, setMoodSeleccionado] = useState('');

  // Array con todos los moods (aquí defines UNA VEZ todos los moods)
  const listaMoods = [
    { emoji: '😊', texto: 'Feliz' },
    { emoji: '😢', texto: 'Triste' },
    { emoji: '😴', texto: 'Relajado' },
    { emoji: '😡', texto: 'Enojado' },
    { emoji: '🤩', texto: 'Emocionado' }
  ];

  return (
    <div className="pagina-principal">
      <h1 className="titulo-app">🎬 MoviMood</h1>
      <p className="descripcion">¡Tu recomendador de películas según tu mood!</p>
      
      <h2>¿Cómo te sientes hoy?</h2>
      <div className="contenedor-botones">
        {/* Generar botones automáticamente con .map() */}
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

      {/* Mostrar el mood seleccionado */}
      {moodSeleccionado && (
        <div className="mood-seleccionado">
          <p>Has seleccionado: <strong>{moodSeleccionado}</strong></p>
        </div>
      )}
      
      <p className="nombre-autora">Por Nicole Beeckmans</p>
    </div>
  );
}

export default App;