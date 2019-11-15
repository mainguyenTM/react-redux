import {REMOVE_NOTE, ADD_NOTE} from '../actions/note';

const stateDefault = {
    notes: []
}
function rootReducers(state = stateDefault, action){
    switch(action.type) {
        case ADD_NOTE:
            return {
                notes: [
                    ...state.notes,
                    {
                        title: action.title,
                        content: action.content
                    }
                ]
            }
        case REMOVE_NOTE: 
            return {
                notes: state.notes.filter((note, index) => index != action.index)
            }
            default:
                    return state;
    }
}

export default rootReducers;