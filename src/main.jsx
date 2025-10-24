
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartProvider } from './components/Cart/CartContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>
    <App />
  </CartProvider>
);

