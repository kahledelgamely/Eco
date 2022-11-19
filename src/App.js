import './App.css';
import Navbar from './Navbar';
import Slider from './Slider';
import About from './About';
import Details from './Details';
import { ProductList } from './ProductList';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/'
          element={
            <div>
              <Slider />
              <ProductList />
            </div>

          }
        />
        <Route path='about' element={<About />} />
        <Route path="product/:productId" element={<Details />} />

      </Routes>
    </div>
  );
}

export default App;
