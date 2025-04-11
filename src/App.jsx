import About from './components/About.jsx';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';

const App = () => {
  return (
    <main className="animate-fadeIn relative min-h-screen max-w-screen overflow-x-hidden">
      <Navbar />
      <Home />
      <About />
    </main>
  );
};

export default App;
