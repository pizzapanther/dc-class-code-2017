export function addContact (id, data) {
  return {
    type: 'ADD_CONTACT',
    id: id,
    data: data
  }
}

export function editContact (id, data) {
  return {
    type: 'EDIT_CONTACT',
    id: id,
    data: data
  }
}
