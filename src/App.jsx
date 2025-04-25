import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import ScrollToTopButton from './components/ScrollToTopButton.jsx';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./components/Home.jsx'));
const About = lazy(() => import('./components/About.jsx'));
const Skills = lazy(() => import('./components/Skills.jsx'));
const Projects = lazy(() => import('./components/Projects.jsx'));
const Contact = lazy(() => import('./components/Contact.jsx'));

const WaveText = ({ text }) => {
  return (
    <h1 className="text-dark text-4xl font-bold">
      {[...text].map((char, index) => (
        <span
          key={index}
          className="animate-wave inline-block tracking-widest"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {char}
        </span>
      ))}
    </h1>
  );
};

const Loading = () => {
  return (
    <div className="z-20 flex h-screen w-screen items-center justify-center bg-white text-center">
      <WaveText text="Loading..." />
    </div>
  );
};

const App = () => {
  return (
    <main className="relative min-h-screen max-w-screen overflow-x-hidden">
      <Navbar />
      <ScrollToTopButton />

      <Suspense fallback={<Loading />}>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Suspense>

      <Footer />
    </main>
  );
};

export default App;
