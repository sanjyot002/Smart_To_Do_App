
import  {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
function App() {
 

  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/Register' element={<Register/>}></Route>
      <Route path='/Dashboard' element={<Dashboard/>}></Route>
      <Route path='/Sidebar' element={<Sidebar/>}></Route>
      
    </Routes>
    </BrowserRouter>
    
     )
}

export default App
