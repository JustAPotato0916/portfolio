import Button from './Button.jsx';
import SectionTitle from './SectionTitle.jsx';
import { FaUserClock } from 'react-icons/fa6';
import { HiDocumentText } from 'react-icons/hi2';
import { RiTeamFill } from 'react-icons/ri';
import { SlMagnifier } from 'react-icons/sl';

const cardInformation = [
  {
    icon: <FaUserClock className="h-8 w-8" />,
    title: '耐心',
    description: '',
  },
  {
    icon: <SlMagnifier className="h-8 w-8" />,
    title: '細心',
    description: '',
  },
  {
    icon: <RiTeamFill className="h-8 w-8" />,
    title: '團隊合作精神',
    description: '',
  },
];

const Card = ({ icon, title, description }) => {
  return (
    <div className="border-sub flex w-48 flex-col items-center justify-center gap-2 rounded-4xl border-2 bg-white p-4">
      {icon}
      <p className="text-2xl font-bold">{title}</p>
      {description && <p className="text-sub text-sm">{description}</p>}
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="section">
      <SectionTitle title="關於我" subtitle="我的介紹" />
      <div className="mt-12 flex size-full items-center justify-center">
        <div className="flex flex-row justify-center gap-24">
          <div className="border-sub flex items-center justify-center rounded-4xl border-2">
            <img src="img/about.png" alt="about" />
          </div>

          <div className="flex w-1/3 flex-col gap-12">
            <div className="flex flex-row gap-4">
              {cardInformation.map(({ icon, title, description }) => (
                <Card
                  key={title}
                  icon={icon}
                  title={title}
                  description={description}
                />
              ))}
            </div>

            <p className="text-sub w-full text-2xl text-wrap">
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
