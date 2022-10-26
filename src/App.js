import logo from './logo.svg';
import './App.css';
import Form from './Form';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Data from './Data';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/data" element={<Data />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
