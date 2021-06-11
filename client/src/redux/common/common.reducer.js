import { AppTypes } from './common.actions';

export const commonHandler = (state, action, initialState) => {
  switch (action.type) {
    case AppTypes.reset:
      return initialState;
    default:
      return state;
  }
};