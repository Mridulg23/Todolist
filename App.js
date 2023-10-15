import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter ,Route,Routes} from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
    <Header/>
       <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
        
      </Routes>
      
      <Footer/>
    </BrowserRouter>

  );
}

export default App;

