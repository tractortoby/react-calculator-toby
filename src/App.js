import { useReducer } from "react";
import "./styles.css";

function reducer(state, { type, payload }) {
  switch (type) {
    case "add-digit":
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };
    case "choose-operation":
      return;
    case "clear":
      return;
    case "delete-digit":
      return;
    case "evaluate":
      return;
  }
}

function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">
          {previousOperand}
          {operation}
        </div>
        <div className="current-operand">{currentOperand}</div>
      </div>
      <button className="span-two">AC</button>
      <button>DEL</button>
      <button
        onClick={() =>
          dispatch({ type: "add-digit", payload: { operation: "÷" } })
        }
      >
        ÷
      </button>
      <button
        onClick={() => dispatch({ type: "add-digit", payload: { digit: 1 } })}
      >
        1
      </button>
      <button
        onClick={() => dispatch({ type: "add-digit", payload: { digit: 2 } })}
      >
        2
      </button>
      <button
        onClick={() => dispatch({ type: "add-digit", payload: { digit: 3 } })}
      >
        3
      </button>
      <button
        onClick={() =>
          dispatch({ type: "add-digit", payload: { operation: "*" } })
        }
      >
        *
      </button>
      <button
        onClick={() => dispatch({ type: "add-digit", payload: { digit: 4 } })}
      >
        4
      </button>
      <button
        onClick={() => dispatch({ type: "add-digit", payload: { digit: 5 } })}
      >
        5
      </button>
      <button
        onClick={() => dispatch({ type: "add-digit", payload: { digit: 6 } })}
      >
        6
      </button>
      <button
        onClick={() =>
          dispatch({ type: "add-digit", payload: { operation: "+" } })
        }
      >
        +
      </button>
      <button
        onClick={() => dispatch({ type: "add-digit", payload: { digit: 7 } })}
      >
        7
      </button>
      <button
        onClick={() => dispatch({ type: "add-digit", payload: { digit: 8 } })}
      >
        8
      </button>
      <button
        onClick={() => dispatch({ type: "add-digit", payload: { digit: 9 } })}
      >
        9
      </button>
      <button
        onClick={() =>
          dispatch({ type: "add-digit", payload: { operation: "-" } })
        }
      >
        -
      </button>
      <button
        onClick={() => dispatch({ type: "add-digit", payload: { digit: "." } })}
      >
        .
      </button>
      <button
        onClick={() => dispatch({ type: "add-digit", payload: { digit: 0 } })}
      >
        0
      </button>
      <button className="span-two">=</button>
    </div>
  );
}

export default App;
