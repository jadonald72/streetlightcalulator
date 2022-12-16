import { Route, Routes } from 'react-router-dom';
import { Fragment } from 'react';
import Map from '../pages/map/map';
import Admin from '../pages/admin/index';
import NotFound from '../pages/notfound';

function App() {
  return (
    <Fragment>
      <main>
          <Routes> 
              <Route path='/' element={<Map />} />
              <Route path='/admin' element={<Admin />} />
              <Route path='*' element={<NotFound />} />
          </Routes>
      </main>
    </Fragment>
    
  )
  
}

export default App;
