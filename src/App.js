import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer'
import Homepage from './Components/Homepage/Homepage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <main>
        <switch>
<Homepage/>
        </switch>
      </main>
      <Footer/>
      
    </div>
  );
}

export default App;
