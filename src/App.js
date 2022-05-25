import "./App.css";
import Header from "./Components/Header/Header";
import NavBar from "./Components/Navbar/NavBar";
import { Index } from "./Components/Content/Index";
import { SearchBar } from "./Components/Searchbar/SearchBar";
import Footer from "./Components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import { About } from "./Pages/About";
import MapWrapper from "./Components/map/MapWrapper";
import  Footer  from './Components/Footer/Footer';

function App() {
  return (
    <>
      <header>
        <Header />
      <NavBar />
      <SearchBar />
      <Index />
      
      </header>
      
      

      <Routes>
            <Route 
            path='/' 
            element={<Welcome/>} 
            />
            <Route 
            path='/parks' 
            element={<Index/>} 
            />
            <Route 
            path='/about' 
            element={<About/>} 
            />
            <Route
            path='/map'
            element={<MapWrapper/>}
            />

        </Routes>
        <Footer/>
    </>
  );
}

export default App;
