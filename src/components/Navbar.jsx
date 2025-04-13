import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { FaGithub, FaHome, FaInfoCircle } from 'react-icons/fa';
import { FaLightbulb } from 'react-icons/fa6';
import { GrContact } from 'react-icons/gr';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { IoNewspaper } from 'react-icons/io5';
import { useWindowScroll } from 'react-use';

const navItems = [
  { icon: <FaHome className="size-10" />, title: 'Home' },
  { icon: <FaInfoCircle className="size-10" />, title: 'About' },
  { icon: <FaLightbulb className="size-10" />, title: 'Skills' },
  { icon: <IoNewspaper className="size-10" />, title: 'Projects' },
  { icon: <GrContact className="size-10" />, title: 'Contact' },
];

const Navbar = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isBottomNavShow, setIsBottomNavShow] = useState(false);

  const navContainerRef = useRef(null);

  const navCoverRef = useRef(null);
  const bottomNavRef = useRef(null);

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

  const handleBottomNavOpen = () => {
    navCoverRef.current.classList.remove('hidden');
    gsap
      .timeline()
      .set(bottomNavRef.current, {
        y: 100,
        opacity: 0,
      })
      .to(bottomNavRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
      });
  };

  const handleBottomNavClose = () => {
    gsap
      .timeline()
      .set(bottomNavRef.current, {
        y: 0,
        opacity: 0.5,
      })
      .to(bottomNavRef.current, {
        y: 100,
        opacity: 0,
        duration: 0.5,
      })
      .call(() => {
        navCoverRef.current.classList.add('hidden');
      });
  };

  return (
    <>
      <div className="fixed z-10 flex w-full items-center justify-center overflow-x-hidden">
        <nav
          ref={navContainerRef}
          className="my-4 flex w-full flex-row items-center justify-between rounded-2xl px-12 py-5 text-xl font-bold transition-all duration-700 ease-out md:w-7/8 xl:px-24"
        >
          <div className="text-4xl">Eric</div>

          <div className="hidden gap-10 md:flex md:flex-row">
            {navItems.map(({ title }) => (
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
              target="_blank"
            >
              <div className="flex flex-row items-center justify-center gap-2">
                <FaGithub className="size-5" />
                Github
              </div>
            </a>
          </div>

          <div className="block md:hidden" onClick={handleBottomNavOpen}>
            <HiOutlineMenuAlt3 className="size-7" />
          </div>
        </nav>
      </div>

      <div ref={navCoverRef} className="fixed z-10 hidden h-dvh w-dvw">
        <div
          className="bg-sub h-full opacity-50"
          onClick={handleBottomNavClose}
        ></div>
        <div
          ref={bottomNavRef}
          className="absolute bottom-0 flex h-2/5 w-full flex-row flex-wrap bg-white p-6 md:p-12"
        >
          {navItems.map(({ icon, title }) => (
            <a
              key={`bot-${title}`}
              href={`/#${title.toLowerCase()}`}
              onClick={handleBottomNavClose}
              className="flex w-full basis-1/3 flex-col items-center justify-center gap-2"
            >
              {icon}
              <p className="text-xl font-bold">{title}</p>
            </a>
          ))}
          <a
            href="https://github.com/JustAPotato0916"
            target="_blank"
            className="flex w-full basis-1/3 flex-col items-center justify-center gap-2"
          >
            <FaGithub className="size-10" />
            <p className="text-xl font-bold">Github</p>
          </a>
        </div>
      </div>
    </>
  );
};
export default Navbar;
