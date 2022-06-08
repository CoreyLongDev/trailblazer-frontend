import './App.css';
import Header from './Components/Header/Header';
import NavBar from './Components/Navbar/NavBar';
import Footer from './Components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Welcome from './Pages/Welcome';
import { About } from './Pages/About';
import MapContainer from './Components/map/MapWrapper';
import View from './Components/View/View';
import Parks from './Pages/Parks';
import Trails from './Pages/Trails';

function App() {
  return (
    <>
      <header>
        <Header />
        <NavBar />
      </header>

      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route
          path="/parks"
          element={
            <>
              <Parks />
            </>
          }
        />
        <Route
          path="/trails"
          element={
            <>
              <Trails />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/map" element={<MapContainer />} />
        <Route path="/:id/view" element={<View />} />
      </Routes>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
