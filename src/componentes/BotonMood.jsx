import './BotonMood.css';

// Componente de botón para seleccionar mood
function BotonMood(props) {
  return (
    <button className="boton-mood">
      <span className="emoji-mood">{props.emoji}</span>
      <span className="texto-mood">{props.texto}</span>
    </button>
  );
}

export default BotonMood;