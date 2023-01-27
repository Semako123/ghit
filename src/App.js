import "./App.css";
import { Navbar } from "./components";
import { Header, WWO, About, System, Footer, CTA } from "./containers";
import { BTT, BTB } from "./assets/images";

function App() {
  return (
    <div>
      
      <Navbar />
      <Header />
      <WWO />
      <About />
      <System />
      <CTA />
      <Footer />
      {/* <a href="#heading" className="ghit__BTT">
        <img src={BTT} />
      </a>
      <a href="#cta" className="ghit__BTB">
        <img src={BTB} />
      </a> */}
    </div>
  );
}

export default App;
