import {Map} from 'immutable';

function setState(state, newState) {
    return state.merge(newState);
}

function findItemIndex(state, itemId) {
    return state.get('todos').findIndex((item) => item.get('id') === itemId);
}

function toggleComplete(state, itemId) {
    // We find the index associated with the itemId
    const index = findItemIndex(state, itemId);

    // We update the todo at this index
    const updatedItem = state.get('todos')
      .get(index)
      .update('status', status => status === 'active' ? 'completed' : 'active');

    return state.update('todos', todos => todos.set(index, updatedItem));
}

function changeFilter(state, filter) {
    return state.set('filter', filter);
}

function editItem(state, itemId) {
    const index = findItemIndex(state, itemId);
    const updatedItem = state.get('todos')
      .get(index)
      .set('editing', true);

    return state.update('todos', todos => todos.set(index, updatedItem));
}

function cancelEditing(state, itemId) {
    const index = findItemIndex(state, itemId);
    const updatedItem = state.get('todos')
      .get(index)
      .set('editing', false);

    return state.update('todos', todos => todos.set(index, updatedItem));
}

function doneEditing(state, itemId, newText) {
    const index = findItemIndex(state, itemId);
    const updatedItem = state.get('todos')
      .get(index)
      .set('editing', false)
      .set('text', newText);

    return state.update('todos', todos => todos.set(index, updatedItem));
}

export default function(state = Map(), action) {
    switch(action.type) {
        case 'SET_STATE':
          return setState(state, action.state);
        case 'TOGGLE_COMPLETE':
          return toggleComplete(state, action.itemId);
        case 'CHANGE_FILTER':
          return changeFilter(state, action.filter);
        case 'EDIT_ITEM':
          return editItem(state, action.itemId);
        case 'CANCEL_EDITING':
          return cancelEditing(state, action.itemId);
        case 'DONE_EDITING':
          return doneEditing(state, action.itemId, action.newText);
    }
    return state;
}
