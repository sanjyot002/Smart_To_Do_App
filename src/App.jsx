
import  {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/layout/Navbar';
function App() {
 

  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/Register' element={<Register/>}></Route>
      <Route path='/Navbar' element={<Navbar/>}></Route>
      
    </Routes>
    </BrowserRouter>
    
     )
}

export default App
