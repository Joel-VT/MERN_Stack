import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import AllAuthors from './views/AllAuthors';
import EditAuthor from './views/EditAuthor';
import NewAuthor from './views/NewAuthor';
import NotFound from './views/NotFound';

function App() {
  return (
    <div className="container">
      <nav className='navbar navbar-expand-lg navbar-light bg-light sticky-top justify-content-between mb-4 p-1'>
        <h1 className='navbar-brand mb-0'>Favorite authors</h1>
        <div className='navbar-nav justify-content-between'>
        </div>
      </nav>
        <Routes>
          <Route path='/' element={<Navigate to='/authors' replace />} />
          <Route path='/authors' element={<AllAuthors />} />
          <Route path='/authors/new' element={<NewAuthor />} />
          <Route path='/authors/:id/edit' element={<EditAuthor />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
    </div>
  );
}

export default App;
