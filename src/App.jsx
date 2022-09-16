import "./App.css";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Carouselsantuario from "./components/Carouselsantuario";
import Navbar from "./components/Navbar";
import Perro from "./components/Perro";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carouselsantuario />
      <Perro />
      <Footer />
    </div>
  );
}

export default App;
