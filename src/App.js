import './App.css';
import Footer from './component/Footer';
import Home from './screens/Home';
import { Cartprovider } from './component/Contexreducerpk.js';
import{
  BrowserRouter as Router,
  Routes,
  Route
 
} from "react-router-dom";
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Signin from './screens/Signin.js';
import Signup from './screens/Signup.js';





function App() {
  return (
    <Cartprovider><Router>
    <div className="App mr-0">
     <div className='fs-1'>
    <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route exact path="/login" element={<Signin/>} />
    <Route exact path="/Signup" element={<Signup/>} />
    </Routes> 
     </div>
     <Footer/>
    </div>
    </Router></Cartprovider>
    
  );
}

export default App;
