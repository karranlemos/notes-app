export interface INotesCreationParams {
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
}

export default INotesProvider;
