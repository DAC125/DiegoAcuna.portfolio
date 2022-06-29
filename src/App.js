
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skils from "./components/Skils"
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import './css/App.css'
function App() {

  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Skils/>
      <Projects/>
      <Contact/>
    </div>
  );
}


export default App;
