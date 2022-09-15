import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Perro from "./components/Perro";
import Cerditos from "./components/Cerditos";

function App() {
  return (
    <div className="App">
      <Header />
      <Perro />
      <Cerditos />
      <Footer />
    </div>
  );
}

export default App;
