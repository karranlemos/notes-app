import { INote } from '../../../infra/interfaces/INotesProvider';

export interface INotesReducer {
  notes: INote[];
}

export interface IActionUpdateNotes {
  type: string;
  payload: INote[];
}
