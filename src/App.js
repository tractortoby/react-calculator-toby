import { useReducer } from "react";
import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";
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
      <OperationButton dispatch={dispatch} operation="÷" />
      <DigitButton dispatch={dispatch} digit="1" />
      <DigitButton dispatch={dispatch} digit="2" />
      <DigitButton dispatch={dispatch} digit="3" />
      <OperationButton dispatch={dispatch} operation="*" />
      <DigitButton dispatch={dispatch} digit="4" />
      <DigitButton dispatch={dispatch} digit="5" />
      <DigitButton dispatch={dispatch} digit="6" />
      <OperationButton dispatch={dispatch} operation="+" />
      <DigitButton dispatch={dispatch} digit="7" />
      <DigitButton dispatch={dispatch} digit="8" />
      <DigitButton dispatch={dispatch} digit="9" />
      <OperationButton dispatch={dispatch} operation="-" />
      <DigitButton dispatch={dispatch} digit="." />
      <DigitButton dispatch={dispatch} digit="0" />
      <button className="span-two">=</button>
    </div>
  );
}

export default App;

