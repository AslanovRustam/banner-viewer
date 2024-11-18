import s from "./button.module.css";

function Button({ text, color, onClick }) {
  return (
    <button
      type="button"
      className={s.btn}
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
