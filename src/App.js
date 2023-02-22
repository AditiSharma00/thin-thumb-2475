import "./App.css";
import Navbar from "./Components/Navbar";
import Firstdiv from "./Components/HomePageComponents/Firstdiv";
import Seconddiv from "./Components/HomePageComponents/Seconddiv";
import Thirddiv from "./Components/HomePageComponents/Thirddiv";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Firstdiv />
      <Seconddiv />
      <Thirddiv />
      <Footer />
    </div>
  );
}

export default App;
