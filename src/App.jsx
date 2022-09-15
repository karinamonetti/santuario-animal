import "./App.css";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Perro from "./components/Perro";
import Cerditos from "./components/Cerditos";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Perro />

      <Cerditos />
      <Footer />
    </div>
  );
}

export default App;
