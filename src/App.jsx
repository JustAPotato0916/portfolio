import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';

const App = () => {
  return (
    <main className="animate-fadeIn relative min-h-screen max-w-screen overflow-x-hidden">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
