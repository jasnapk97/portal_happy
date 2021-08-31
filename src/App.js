import logo from './logo.svg';
import './App.css';
import Routes from './Routes';
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import {Provider} from 'react-redux'
import store from '../src/store/store'
function App() {
  return (
<Provider store={store}>
    <Router history={createBrowserHistory()}>
      
    <Routes/>
    </Router>
    </Provider>

    
  
   
   

  );
}

export default App;
