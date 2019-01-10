export const selectLibrary = (libraryId, selectedLibraryId) => {
  console.log("Props selected library id " + selectedLibraryId);
  return {
    type: 'select_library',
    payload: libraryId
  }
}