
import { createRoot } from 'react-dom/client'
// import './index.css'
import store from '../store.jsx';
import App from './App.jsx'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <App />
 
    </Provider>
)
