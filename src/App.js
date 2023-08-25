import "./App.css";
import Display from "./components/Display";
import Navbar from "./components/Navbar";
import Plans from "./components/Plans";
import Sectiontab from "./components/Sectiontab";
import Banner from "./components/banner";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Display />
      <Sectiontab />
      <Banner />
      <Plans />
      <Footer />
    </div>
  );
}

export default App;
