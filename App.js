import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import Movies from "./Movies";
import Navbar from './Navbar';
import {
  BrowserRouter ,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Home from './Home';
function App() {
  return (
<BrowserRouter>
       <Navbar />
       <Routes>
       <Route exact path="/" element={<Home />} />
       <Route exact path="/movies" element={<Movies />} />
       </Routes>

      </BrowserRouter>
  );
}

export default App;
