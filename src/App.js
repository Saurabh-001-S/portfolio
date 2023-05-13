import './App.css';
import { About, Navbar, Project, Home, Contact } from "./Component/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
      return (
            <Router>
                  <div className="App">
                        <Navbar />
                        <Home />
                        <About />
                        <Project />
                        <Contact />
                  </div>
            </Router>
      );
}

export default App;