export default (state = null, action) => {
  switch (action.type) {
    case 'select_library':
      console.log("reducer payload: " + action.payload);
      return Object.assign({}, state, {
        selectedLibraryId: action.payload
      });
    default:
      console.log(state);
      return state;
  }
};
