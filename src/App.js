import { Routes, Route } from 'react-router-dom';
import Home from './Componets/Home';
import './App.css';
import Subproduct from './Componets/Subproduct';

function App() {

  

  return (
      <>
      
        <div className='d-flex justify-content-around titale_color'>
                <h1>Sumeru City Mall </h1>
        </div>

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path=':id' element={<Subproduct />} />
        </Routes>
       
      </>
  );
}

export default App;
