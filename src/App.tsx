import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import NotesPage from './pages/NotesPage';
import store from './store';

const App: React.FC = () => (
  <Provider store={store}>
    <NotesPage />
    <ToastContainer />
  </Provider>
);

export default App;
