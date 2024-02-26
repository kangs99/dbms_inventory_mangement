import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Brands from './Brands'
import Data from './Data';
import Add from './Add';
import Update from'./Update';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Brands />}></Route>
        <Route path='/data/:brand' element={<Data />}></Route>
        <Route path='/add/:brand' element={<Add />}></Route>
        <Route path='/update/:brand/:id' element={<Update />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
