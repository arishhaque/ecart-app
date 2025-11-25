import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Cart from './Components/Cart';
import NotFoundPage from './Pages/NotFound';
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="app-container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App;
