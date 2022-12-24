import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Homepage from "./Components/Homepage/Homepage";
import Form from "./Components/Form/Form";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Homepage />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
