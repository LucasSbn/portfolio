import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";

////pages
import Home from './pages/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Skills from './pages/Skills/Skills';
import Sobre from './pages/Sobre/Sobre';
import Certificados from './pages/Certificados/Certificados';

function App() {

  return (
    <div>

      <BrowserRouter>
      
        <Routes>

          <Route path='/' element={<Home/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/certificados' element={<Certificados/>}/>
          <Route path='/sobre' element={<Sobre/>}/>
          <Route path='*' element={<NotFound/>}/>

        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App
