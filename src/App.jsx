import { useEffect } from 'react';

// Layout & Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

// Pages
import Home from './pages/Home';
import Work from './pages/Work';
import Studio from './pages/Studio';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <CustomCursor />
      <Navbar />
      <main className="flex-grow">
        <section id="home">
          <Home />
        </section>
        <section id="work">
          <Work />
        </section>
        <section id="studio">
          <Studio />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
