import { useState } from "react";
import "./Count.css";
import "../Nav/Nav.css";

export const Count = ({ btnText, onConfirm }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => (prev > 0 ? prev - 1 : 0));

  const confirm = () => {
    if (count > 0) {
      onConfirm(count);
      setCount(0); // opcional: reinicia después de agregar
    }
  };

  return (
    <div className="count-container">
      <div className="count-buttons">
        <button onClick={decrement} disabled={count === 0}>
          -
        </button>

        {/* Esto solo muestra la cantidad dentro del componente */}
        <span className="cart-badge">{count}</span>

        <button onClick={increment}>
          +
        </button>
      </div>

      <button
       
        onClick={confirm}
        disabled={count === 0}
      >
        {btnText}
      </button>
    </div>
  );
};
