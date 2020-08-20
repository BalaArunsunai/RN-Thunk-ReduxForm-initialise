import * as types from '../action/actionTypes';


  export function changeName(username) {
    return function(dispatch) {
      dispatch(logoutSuccess(username)); 
    };
  }
  export function logoutSuccess(isSideBar) {
    return {type: types.SIDE_BAR_TOGGLE, isSideBar: isSideBar};
  }
