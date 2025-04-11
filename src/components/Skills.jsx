import SectionTitle from './SectionTitle.jsx';
import { BiLogoVisualStudio } from 'react-icons/bi';
import { IoLogoFirebase } from 'react-icons/io5';
import { RiVerifiedBadgeLine } from 'react-icons/ri';
import {
  SiBootstrap,
  SiDocker,
  SiFastify,
  SiGithub,
  SiJavascript,
  SiJira,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiWebstorm,
} from 'react-icons/si';

const frontEndSkills = [
  { icon: <SiJavascript className="mt-1 h-6 w-6" />, title: 'JavaScript' },
  { icon: <SiTypescript className="mt-1 h-6 w-6" />, title: 'TypeScript' },
  { icon: <SiReact className="mt-1 h-6 w-6" />, title: 'React' },
  { icon: <SiBootstrap className="mt-1 h-6 w-6" />, title: 'Bootstrap' },
  { icon: <SiTailwindcss className="mt-1 h-6 w-6" />, title: 'Tailwind CSS' },
  { icon: <SiShadcnui className="mt-1 h-6 w-6" />, title: 'Shadcn-UI' },
];
const backEndSkills = [
  { icon: <SiNodedotjs className="mt-1 h-6 w-6" />, title: 'Node.js' },
  { icon: <SiFastify className="mt-1 h-6 w-6" />, title: 'Fastify' },
  { icon: <SiNestjs className="mt-1 h-6 w-6" />, title: 'NestJS' },
  { icon: <SiMysql className="mt-1 h-6 w-6" />, title: 'MySQL' },
  { icon: <SiMongodb className="mt-1 h-6 w-6" />, title: 'MongoDB' },
  { icon: <IoLogoFirebase className="mt-1 h-6 w-6" />, title: 'Firebase' },
];

const tools = [
  { icon: <SiGithub className="mt-1 h-6 w-6" />, title: 'Git / Github' },
  { icon: <SiJira className="mt-1 h-6 w-6" />, title: 'Jira' },
  {
    icon: <BiLogoVisualStudio className="mt-1 h-6 w-6" />,
    title: 'Visual' + ' Studio Code',
  },
  { icon: <SiWebstorm className="mt-1 h-6 w-6" />, title: 'WebStorm' },
  { icon: <SiPostman className="mt-1 h-6 w-6" />, title: 'Postman' },
  { icon: <SiDocker className="mt-1 h-6 w-6" />, title: 'Docker' },
];

const SkillsInfo = ({ icon, title }) => {
  return (
    <div className="mb-5 flex flex-row items-center gap-x-4">
      <div className="flex w-full flex-row items-center gap-2">
        {icon ? icon : <RiVerifiedBadgeLine className="mt-1 h-6 w-6" />}
        <p className="text-2xl font-bold">{title}</p>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="section">
      <SectionTitle title="技能與工具" subtitle="核心技能與工具展示" />
      <div className="mt-12 flex size-full items-center justify-center">
        <div className="flex w-3/4 flex-row justify-center gap-24">
          <div className="border-sub n flex w-1/3 flex-col items-center justify-center rounded-2xl border-1 bg-white">
            <p className="m-4 text-4xl font-bold">Front-end</p>
            <div>
              {frontEndSkills.map(({ icon, title }) => (
                <SkillsInfo key={title} icon={icon} title={title} />
              ))}
            </div>
          </div>

          <div className="border-sub n flex w-1/3 flex-col items-center justify-center rounded-2xl border-1 bg-white">
            <p className="m-4 text-4xl font-bold">Back-end</p>
            <div>
              {backEndSkills.map(({ icon, title }) => (
                <SkillsInfo key={title} icon={icon} title={title} />
              ))}
            </div>
          </div>

          <div className="border-sub n flex w-1/3 flex-col items-center justify-center rounded-2xl border-1 bg-white">
            <p className="m-4 text-4xl font-bold">Tools</p>
            <div>
              {tools.map(({ icon, title }) => (
                <SkillsInfo key={title} icon={icon} title={title} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
