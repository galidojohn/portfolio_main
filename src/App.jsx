import "./app.scss";
import Contact from "./components/navbar/Contact/Contact";
import Hero from "./components/navbar/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/navbar/Parallax/Parallax";
import Portfolio from "./components/navbar/portfolio/Portfolio";
import Services from "./components/navbar/Services/Services";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
      <section id="About">Contacr</section>
    </div>
  );
};

export default App;
