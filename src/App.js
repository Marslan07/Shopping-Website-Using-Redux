import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Store from './Store/Store';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Navbar from './Component/Navbar';
import { Provider } from 'react-redux';
function App() {
  return (
    <div className="App">
      <Provider store={Store}>
      <BrowserRouter>
      <Navbar/>
       <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/cart' element={<Cart/>} />
       </Routes>
       </BrowserRouter>
      </Provider>

    </div>
  );
}

export default App;
