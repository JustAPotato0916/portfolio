import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { useWindowScroll } from 'react-use';

const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

const Navbar = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);

  const navContainerRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove('bg-black!');
      navContainerRef.current.classList.remove('text-white');
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add('bg-black!');
      navContainerRef.current.classList.add('text-white');
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add('bg-black!');
      navContainerRef.current.classList.add('text-white');
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div className="fixed z-10 flex w-full items-center justify-center overflow-x-hidden">
      <nav
        ref={navContainerRef}
        className="my-4 flex w-7/8 flex-row items-center justify-between rounded-2xl px-24 py-5 text-xl font-bold transition-all duration-700 ease-out"
      >
        <div className="text-4xl">Eric</div>

        <div className="flex flex-row gap-10">
          {navItems.map((title) => (
            <a
              key={title}
              href={`/#${title.toLowerCase()}`}
              className={`relative cursor-pointer transition-all ease-in-out before:absolute before:bottom-0 before:left-[50%] before:h-[2px] before:w-0 before:origin-center before:transition-[width] before:duration-700 before:ease-in-out after:absolute after:right-[50%] after:bottom-0 after:h-[2px] after:w-0 after:origin-center after:transition-[width] after:duration-700 after:ease-in-out hover:before:w-[50%] hover:after:w-[50%] ${currentScrollY === 0 ? 'before:bg-black after:bg-black' : 'before:bg-white after:bg-white'}`}
            >
              {title}
            </a>
          ))}
          <a
            href="https://github.com/JustAPotato0916"
            className={`relative cursor-pointer transition-all ease-in-out before:absolute before:bottom-0 before:left-[50%] before:h-[2px] before:w-0 before:origin-center before:transition-[width] before:duration-700 before:ease-in-out after:absolute after:right-[50%] after:bottom-0 after:h-[2px] after:w-0 after:origin-center after:transition-[width] after:duration-700 after:ease-in-out hover:before:w-[50%] hover:after:w-[50%] ${currentScrollY === 0 ? 'before:bg-black after:bg-black' : 'before:bg-white after:bg-white'}`}
          >
            <div className="flex flex-row items-center justify-center gap-2">
              <FaGithub className="h-5 w-5" />
              Github
            </div>
          </a>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
