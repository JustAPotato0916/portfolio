import Button from './Button.jsx';
import Loading from './Loading.jsx';
import SectionTitle from './SectionTitle.jsx';
import { useState } from 'react';
import { FaUserClock } from 'react-icons/fa6';
import { HiDocumentText } from 'react-icons/hi2';
import { RiTeamFill } from 'react-icons/ri';
import { SlMagnifier } from 'react-icons/sl';

const cardInformation = [
  {
    icon: <FaUserClock className="h-8 w-8" />,
    title: '耐心',
  },
  {
    icon: <SlMagnifier className="h-8 w-8" />,
    title: '細心',
  },
  {
    icon: <RiTeamFill className="h-8 w-8" />,
    title: '團隊合作精神',
  },
];

const Card = ({ icon, title }) => {
  return (
    <div className="border-sub flex basis-1/3 flex-col items-center justify-center gap-2 rounded-4xl border-2 bg-white p-4">
      {icon}
      <p className="text-center text-base font-bold 2xl:text-2xl">{title}</p>
    </div>
  );
};

const About = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section id="about" className="section">
      <SectionTitle title="關於我" subtitle="我的介紹" />

      <div className="flex items-center justify-center xl:size-full">
        <div className="flex w-full flex-col justify-center gap-4 p-12 md:gap-6 xl:flex-row xl:gap-24 xl:p-24">
          <div className="flex items-center justify-center xl:basis-1/3">
            <div className="border-sub w-72 rounded-4xl border-2 xl:w-fit">
              {isLoading && <Loading />}
              <img
                src="img/about.png"
                alt="about"
                className={`hidden xl:block ${isLoading ? 'hidden' : 'block'}`}
                onLoad={() => setIsLoading(false)}
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 xl:basis-1/2 xl:gap-12">
            <div className="flex flex-row gap-2 xl:gap-4">
              {cardInformation.map(({ icon, title }) => (
                <Card key={title} icon={icon} title={title} />
              ))}
            </div>

            <p className="text-sub text-lg text-wrap md:text-2xl">
              作為一名充滿熱情的前端工程師，我擁有強大的技術基礎和創新思維。通過持續學習和實踐，我能夠提供高品質的用戶體驗，並在團隊中發揮良好的溝通和合作能力。我的目標是通過精湛的技術和創新的設計，為用戶帶來更好的互動體驗。
            </p>

            <Button
              href={'/resume.pdf'}
              title="Download Resume"
              icon={<HiDocumentText className="h-8 w-8" />}
              download={'Eric - CakeResume'}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
