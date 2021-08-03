export interface INotesCreationParams {
  title?: string | null;
  description?: string | null;
}

export interface INotesRetrievalParams {
  ids?: number[] | null;
  title?: string | null;
  description?: string | null;
}

export interface INote {
  id: number;
  title: string;
  description: string;
}

interface INotesProvider {
  createNotes(notesCreationParams: INotesCreationParams[]): Promise<INote[]>;
  getNotes(notesRetrievalParams?: INotesRetrievalParams): Promise<INote[]>;
  deleteNotes(idsNotes: number[]): Promise<number>;
}

export default INotesProvider;
