import './App.css';
import {
  BrowserRouter as
  Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home';
import Experience from './Pages/Experience';
import Projects from './Pages/Projects';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      
       <Router>
        <NavBar/>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
       </Routes>
       <Footer/>
       </Router>
      
    
    </div>
  );
}

export default App;
