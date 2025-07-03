import react from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./Home";
import Biography from "./Biography";
import Repertoire from "./Repertoire";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Subscribe from "./Subscribe";


const App = ()=>{
  return(
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Biography" element={<Biography/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/Repertoire" element={<Repertoire/>}></Route>
      </Routes>
      <Subscribe/>
    </Router>
    </>
  )
}

export default App;