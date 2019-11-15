export const REMOVE_NOTE = "REMOVE_NOTE";
export const ADD_NOTE = "ADD_NOTE";

export function removeNote(id){
    return {type: REMOVE_NOTE, id: id};
}