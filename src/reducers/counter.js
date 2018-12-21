const initialState = 0;

export default function counter(state = initialState, action) {
  switch (action.type) {
    case "counter:increment":
      return state + 1
    default:
      return state
  }
}

