import "./App.css";
import Header from "./Components/Header/Header";
import NavBar from "./Components/Navbar/NavBar";
import { Index } from "./Components/Content/Index";
import { SearchBar } from "./Components/Searchbar/SearchBar";
import { Routes, Route } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import { About } from "./Pages/About";

function App() {
  return (
    <>
      <header>
        <Header />
      <NavBar />
      <SearchBar />
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
        </Routes>
    </>
  );
}

export default App;
