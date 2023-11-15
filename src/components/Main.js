

import Hero from './Hero';
import Acounts from './Acounts';

import {BrowserRouter,Routes,Route} from 'react-router-dom'



function Main() {
  return (
    <BrowserRouter>
    <div className="main">
    
       <Route path="Hero" element={<Hero />} />
       <Route path="Acounts" element={<Acounts />} />

       
    </div>
    </BrowserRouter>
  );
}

export default Main;
