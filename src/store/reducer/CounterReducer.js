const initialState = { counter: 0 };

function CounterReducer(state = initialState, action) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "decrement":
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}

export default CounterReducer;
