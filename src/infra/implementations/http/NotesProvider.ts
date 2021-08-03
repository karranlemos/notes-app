import APIRequestError from '../../../app/errors/APIRequestError';
import INotesProvider, {
  INotesCreationParams,
  INotesRetrievalParams,
  INote,
} from '../../interfaces/INotesProvider';
import { notesAPI } from './connections';

export default class NotesProvider implements INotesProvider {
  async createNotes(notesCreationParams: INotesCreationParams[]): Promise<INote[]> {
    try {
      const { data: notes } = await notesAPI.post('/notes', notesCreationParams);
      return notes;
    } catch (error) {
      throw new APIRequestError({
        error,
      });
    }
  }

  async getNotes(notesRetrievalParams: INotesRetrievalParams = {}): Promise<INote[]> {
    try {
      const { data: notes } = await notesAPI.get('/notes', {
        params: notesRetrievalParams,
      });
      return notes;
    } catch (error) {
      throw new APIRequestError({
        error,
      });
    }
  }

  async deleteNotes(idsNotes: number[]): Promise<number> {
    try {
      const { data } = await notesAPI.delete('/notes', {
        data: idsNotes,
      });
      return data.notes_deleted;
    } catch (error) {
      throw new APIRequestError({
        error,
      });
    }
  }
}
