import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { Nav } from './components/Nav/Nav';
import './App.css';
import { ProductFormContainer } from "./components/adminComponents/productFormContainer/ProductFormContainer";
import { MainLayout } from "./layouts/MainLayout";
import { AdminLayout } from "./layouts/AdminLayout";
import { RutaProtegida } from "./components/rutaProtegida/RutaProtegida";
import { Login } from "./components/login/Login";
import { CartProvider } from './components/Cart/CartContext';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>

        <Nav />

        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />

          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Login />} />

            <Route
              path="alta-productos"
              element={
                <RutaProtegida>
                  <ProductFormContainer />
                </RutaProtegida>
              }
            />
          </Route>

        </Routes>
      </CartProvider >
    </BrowserRouter>
  );
}

export default App;
