import About from './components/About.jsx';
import Home from './components/Home.jsx';

const App = () => {
  return (
    <main className="relative min-h-screen max-w-screen overflow-x-hidden">
      <Home />
      <About />
    </main>
  );
};

export default App;
