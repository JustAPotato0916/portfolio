import Button from './Button';
import { BiSolidNavigation } from 'react-icons/bi';
import { BsMouse } from 'react-icons/bs';
import { FaRegThumbsUp } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { TiArrowDownThick } from 'react-icons/ti';

const iconLinks = [
  {
    brand: 'Github',
    href: 'https://github.com/JustAPotato0916',
    icon: <FiGithub className="h-7 w-7" />,
  },
];

const Home = () => {
  return (
    <section id="home" className="section overflow-y-hidden">
      <div className="flex size-full flex-col items-center justify-center xl:grid xl:grid-cols-12 xl:gap-12">
        <div className="col-start-2 hidden grid-cols-1 items-center justify-center gap-1 xl:grid 2xl:col-start-3">
          <div className="flex-col items-center gap-8 xl:flex">
            {iconLinks.map(({ brand, href, icon }) => (
              <a key={brand} href={href} className="link">
                {icon}
              </a>
            ))}
          </div>
        </div>
        <div className="items-center p-12 pt-36 md:w-3/4 xl:col-span-6 xl:grid xl:w-full 2xl:col-span-4 2xl:col-start-4">
          <div className="flex flex-col gap-6 md:w-5/6 lg:w-full">
            <div className="flex flex-row items-center gap-8">
              <h1 className="flex flex-row gap-4 text-6xl font-bold">
                陳泓亦 <p className="hidden 2xl:block">Eric</p>
              </h1>
              <FaRegThumbsUp className="mb-3 h-18 w-18" />
            </div>
            <div className="flex flex-row items-center gap-4">
              <div className="border-sub mt-1.5 h-0 w-24 border-t-3" />
              <div className="text-2xl font-bold text-nowrap">
                {' '}
                Front-end Developer
              </div>
            </div>
            <p className="text-sub text-lg">
              我是一名前端工程師，擁有豐富的前端開發經驗，熟悉多種技術和工具，並在專案中展現出色的能力。我熱衷於學習新技術，並致力於提供高品質的用戶體驗。
            </p>
            <Button
              href="#contact"
              title="Say Hello"
              icon={<BiSolidNavigation className="h-6 w-6" />}
              containerClass="mt-10 md:mt-16"
            />
            <div className="mt-12 flex flex-row items-center gap-1 md:mt-32">
              <BsMouse className="h-10 w-10" />
              <p className="text-xl font-black">Scroll down</p>
              <TiArrowDownThick className="mt-2 h-5 w-5 animate-bounce pt-1" />
            </div>
          </div>
        </div>
        <div className="col-span-3 grid items-center justify-center">
          <img src="img/about.png" alt="about" className="hidden xl:block" />
        </div>
      </div>
    </section>
  );
};

export default Home;
