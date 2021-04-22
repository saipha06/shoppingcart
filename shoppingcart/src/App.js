import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from "./reducer";
import{Provider} from 'react-redux';
import { createStore } from "redux";
import Routes from './Components/Routes'
const store = createStore(reducer)
function App() { 
  return (
    <Provider store = {store}>
      <Routes/>
    </Provider>
  );
}

export default App;
