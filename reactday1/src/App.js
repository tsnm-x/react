import './App.css';
import HeadComponent from "./head";
import Aboutme from './about-me';
import Skills from './skills';
import Protfolio from './portfolio';
import Footer from './footer';

function App() {
  return (
    <div className="App container-fluid g-0">
      <HeadComponent/>
      <Aboutme/>
      <Skills/>
      <Protfolio/>
      <Footer/>
    </div>
  );
}

export default App;
