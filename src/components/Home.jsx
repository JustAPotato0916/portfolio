import Button from './Button';
import { BiSolidNavigation } from 'react-icons/bi';
import { BsMouse } from 'react-icons/bs';
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
    <section className="section">
      <div className="grid size-full grid-cols-12 gap-12">
        <div className="col-start-3 grid grid-cols-1 items-center justify-center gap-1">
          <div className="flex flex-col items-center gap-8">
            {iconLinks.map(({ brand, href, icon }) => (
              <a key={brand} href={href} className="link">
                {icon}
              </a>
            ))}
          </div>
        </div>
        <div className="col-span-4 col-start-4 grid items-center p-12 pt-36">
          <div className="flex flex-col gap-6">
            <h1 className="text-6xl font-bold">👋 陳泓亦 Eric</h1>
            <div className="flex flex-row items-center gap-4">
              <div className="border-sub mt-1.5 h-0 w-24 border-t-3" />
              <div className="text-2xl font-bold"> Front-end Developer</div>
            </div>
            <p className="text-sub text-lg">
              我是一名前端工程師，擁有豐富的前端開發經驗，熟悉多種技術和工具，並在專案中展現出色的能力。我熱衷於學習新技術，並致力於提供高品質的用戶體驗。
            </p>
            <Button
              href="#contact"
              title="Say Hello"
              icon={<BiSolidNavigation className="h-6 w-6" />}
              containerClass="mt-16"
            />
            <div className="mt-32 flex flex-row items-center gap-1">
              <BsMouse className="h-10 w-10" />
              <p className="text-xl font-black">Scroll down</p>
              <TiArrowDownThick className="mt-2 h-5 w-5 animate-bounce pt-1" />
            </div>
          </div>
        </div>
        <div className="col-span-3 grid items-center justify-center">
          <img src="img/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default Home;
