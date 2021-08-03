import { INote } from '../../../infra/interfaces/INotesProvider';
import { IActionUpdateNotes } from './interfaces';
import types from './types';

export const updateNotesAction = (
  notes: INote[],
): IActionUpdateNotes => ({
  type: types.UPDATE_NOTES,
  payload: notes,
});
