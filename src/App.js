
import './App.css';
import Navbar from './components/header/Navbar';
import {Route,Routes} from 'react-router-dom' 
import Home from './components/Home';
import About from "./components/About";
import Login from './components/Login';
import SignUp from "./components/SignUp";
import FaqState from './context/faqState'

function App() {
  return (
    <div className="App">
      <>
        <FaqState>
          <Navbar />
          <div className="container" style={{ marginTop: "25px" }}>
            <Routes>
              <Route path="/" index element={<Home />} />
              <Route path="/home" index element={<Home />} />
              <Route path="/about" index element={<About />} />
              <Route path="/Login" index element={<Login />} />
              <Route path="/SignUp" index element={<SignUp />} />
            </Routes>
          </div>
        </FaqState>
      </>
    </div>
  );
}

export default App;
