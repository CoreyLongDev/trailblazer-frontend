import "./App.css";
import Header from "./Components/Header/Header";
import NavBar from "./Components/Navbar/NavBar";
import { Index } from "./Pages/Index";
import { SearchBar } from "./Components/Searchbar/SearchBar";
import Footer from "./Components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import { About } from "./Pages/About";
import MapWrapper from "./Components/map/MapWrapper";
import View from "./Components/View/View";
import Sidebar from "./Components/Sidebar/Sidebar";

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
        <Route path="/" element={<Welcome />} />
        <Route
          path="/parks"
          element={
            <>
              <Index />
              <Sidebar />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/map" element={<MapWrapper />} />
        <Route path="/:id/view" element={<View />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
