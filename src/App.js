import Routes from "./navigation/Routes";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { StateProvider } from "./state/context/CartContext";
import cartReducer, { initialState } from "./state/context/cartReducer";

function App() {
  
  return (
    <div className="App">
      <StateProvider initialState={initialState} reducer={cartReducer}>
        <Router>
          <Routes />
        </Router>
      </StateProvider>
    </div>
  );
}

export default App;
