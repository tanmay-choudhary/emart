import './App.css';
import { Home } from './components/Home';
import About from './components/About'
import { Navbar } from './components/Navbar'
import Contact from './components/Contact'
import {Routes ,Route } from 'react-router-dom';
import { Products } from './components/Products';
import { Product } from './components/Product';
import Cart from './components/Cart';





function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:id' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        
        <Route  path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
       
      </Routes>

    </>
  );
}

export default App;
