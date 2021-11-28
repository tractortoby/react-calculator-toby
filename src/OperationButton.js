export default function OperationButton({ dispatch, operation }) {
  return (
    <button
      onClick={() =>
        dispatch({
          type: "choose-operation",
          payload: { operation },
        })
      }
    >
      {operation}
    </button>
  );
}
