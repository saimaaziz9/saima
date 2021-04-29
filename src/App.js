import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './routers.js/Home'
import About from './routers.js/About'
import Contact from  './routers.js/Contact'
import{BrowserRouter} from 'react-router-dom'
import { Route } from 'react-router';
import Nav from './Nav'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About}/>
      <Route exact path="/contact" component={Contact}/>
      
      </BrowserRouter>
    
    </div>
  );
}

export default App;
