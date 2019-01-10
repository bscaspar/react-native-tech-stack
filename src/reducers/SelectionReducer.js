export default (state = {}, action) => {
  switch (action.type) {
    case 'select_library':
      return Object.assign({}, state, {
        selectedLibraryId: action.payload
      });
    default:
      return state;
  }
};
