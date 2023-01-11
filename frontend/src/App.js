import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landingpage from './pages/Landingpage';
import Addpage from './pages/Addpage';
import Detailpage from './pages/Detailpage';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Landingpage />}></Route>
          <Route path='/add' element={<Addpage />}></Route>
          <Route path='/details' element={<Detailpage />}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
