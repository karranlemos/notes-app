import { IActionUpdateNotes, INotesReducer } from './interfaces';
import types from './types';

const initialState: INotesReducer = {
  notes: [],
};

export default function reducer(state = initialState, action: IActionUpdateNotes): INotesReducer {
  switch (action.type) {
    case types.UPDATE_NOTES:
      return {
        ...state,
        notes: action.payload,
      };
    default:
      return state;
  }
}
