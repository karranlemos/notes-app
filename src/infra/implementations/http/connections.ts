import axios from 'axios';

import envConstants from '../../../app/constants/env';

export const notesAPI = axios.create({
  baseURL: envConstants.apis.NOTES_API_URL,
});
