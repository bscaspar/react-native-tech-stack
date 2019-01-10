export const selectLibrary = (libraryId) => {
  console.log("action executed")
  return {
    type: 'select_library',
    payload: libraryId
  }
}