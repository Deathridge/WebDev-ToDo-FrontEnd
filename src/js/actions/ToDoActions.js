import * as types from '../actionTypes/ActionTypes';

let nextToDoID = 0;

export function addToDo(description) {
  return {
    type: types.ADD_TODO,
    id: nextToDoID++,
    description,
    completed: false
  };
}

export function deleteToDo(id) {
  return {
    type: types.DELETE_TODO,
    id
  };
}

export function toggleToDo(id) {
  return {
    type: types.TOGGLE_COMPLETE,
    id
  };
}

export function setVisibilityFilter(filter) {
  return {
    type: types.SET_VISIBILITY_FILTER,
    filter
  };
}
