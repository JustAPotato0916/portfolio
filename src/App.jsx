import About from './components/About.jsx';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Skills from './components/Skills.jsx';

const App = () => {
  return (
    <main className="animate-fadeIn relative min-h-screen max-w-screen overflow-x-hidden">
      <Navbar />
      <Home />
      <About />
      <Skills />
    </main>
  );
};

export default App;
