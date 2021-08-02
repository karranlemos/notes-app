import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import NotesPage from './pages/NotesPage';

const App: React.FC = () => (
  <>
    <NotesPage />
    <ToastContainer />
  </>
);

export default App;
