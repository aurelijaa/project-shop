const logger = ({ getState, dispatch }) => next => action => {
  const prevState = getState();
  const result = next(action);
  const nextState = getState();
  console.log("prevsate", prevState);
  console.log(action.type, action.paylod);
  console.log("nextsate", nextState);

  if (action.type === "TOGGLE_FAVORITE_PRODUCT") {
    dispatch({ type: "RANDOM" });
  }
  return result;
};

export default logger;
