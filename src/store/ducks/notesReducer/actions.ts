import { INote } from '../../../infra/interfaces/INotesProvider';
import { IActionUpdateNotes } from './interfaces';
import types from './types';

export const updateNotesAction = (
  scrollBehavior: INote[],
): IActionUpdateNotes => ({
  type: types.UPDATE_NOTES,
  payload: scrollBehavior,
});
