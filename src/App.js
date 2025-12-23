import './App.css';
import BotonMood from './componentes/BotonMood';

function App() {
  return (
    <div className="pagina-principal">
      <h1 className="titulo-app">🎬 MoviMood</h1>
      <p className="descripcion">¡Tu recomendador de películas según tu mood!</p>
      
      <h2>¿Cómo te sientes hoy?</h2>
      <div className="contenedor-botones">
        <BotonMood emoji="😊" texto="Feliz" />
        <BotonMood emoji="😢" texto="Triste" />
        <BotonMood emoji="😴" texto="Relajado" />
        <BotonMood emoji="😡" texto="Enojado" />
        <BotonMood emoji="🤩" texto="Emocionado" />
      </div>
      
      <p className="nombre-autora">Por Nicole Beeckmans</p>
    </div>
  );
}

export default App;