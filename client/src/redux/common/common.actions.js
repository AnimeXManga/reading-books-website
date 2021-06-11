export const AppTypes = {
  reset: 'app.reset',
};

export function createAction(type, data, message) {
  console.log('Redux Action: ', type, data, message);
  // console.log('Action payload data', data);
  // console.log('Action payload message', message);
  return {
    type,
    data,
    message,
  };
}

export const resetState = () => (dispatch) => {
  dispatch(createAction(AppTypes.reset, {}));
};
