
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './context/authContext/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);

