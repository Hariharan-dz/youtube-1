
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart"

function App() {

  return (
    <div>
      <Home/>
      <ProductList/> 
          <Product />
          <Cart />
          
      <Login/>
      <Register/>
      
    </div>
  );
}

export default App;
