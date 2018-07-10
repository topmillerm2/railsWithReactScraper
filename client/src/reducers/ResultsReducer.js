import { FORM_SUBMITTED } from '../actions/types';

const INITIAL_STATE = {
  element: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FORM_SUBMITTED:
      return { ...state, element: action.payload };
    default:
      return state;
  }
};
