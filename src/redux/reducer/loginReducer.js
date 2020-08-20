import * as types from '../action/actionTypes';

const INITIAL_STATE = {
  isSideBar: 'Name',
};

export default function loginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SIDE_BAR_TOGGLE: {
      const newState = {
        ...state,
        isSideBar: action.isSideBar,
      };
      return newState;
    }

    default:
      return state;
  }
}