import Routes from './navigation/Routes';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import CartContext, { StateProvider } from './state/context/CartContext';

function App() {
  return (
    <div className="App">
      <StateProvider>
      <Router> 
        <Routes />
      </Router>
      </StateProvider>
    </div>
  );
}

export default App;
