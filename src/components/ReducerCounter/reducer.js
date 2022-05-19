import ACTION_TYPES from './actionTypes';

export default function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.ADD: {
      return { ...state, count: state.count + state.step };
    }
    case ACTION_TYPES.SUBTRACT: {
      return { ...state, count: state.count - state.step };
    }
    case ACTION_TYPES.CHANGE_STEP: {
      const { value } = action;

      return { ...state, step: Number(value) };
    }
    default:
      return state;
  }
}
