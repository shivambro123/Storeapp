import './App.css';
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import ProductList from './Component/ProductList';

import EditProduct from './Component/EditProduct';
import NavbarComp from './Component/NavbarComp';
import AddProductList from './Component/AddProductList';

function App() {
  return (
    <div className="App">
    <Router>
    <NavbarComp/>
    <Routes>
    <Route path="/" element={<ProductList/>}/>
    <Route path="/edit/:id" element={<EditProduct/>}/>
    <Route path="/add-product" element={<AddProductList/>}/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
