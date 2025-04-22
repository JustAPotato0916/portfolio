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
  {
    icon: <SiJavascript className="skillIcon" />,
    title: 'JavaScript',
  },
  {
    icon: <SiTypescript className="skillIcon" />,
    title: 'TypeScript',
  },
  { icon: <SiReact className="skillIcon" />, title: 'React' },
  {
    icon: <SiBootstrap className="skillIcon" />,
    title: 'Bootstrap',
  },
  {
    icon: <SiTailwindcss className="skillIcon" />,
    title: 'Tailwind' + ' CSS',
  },
  {
    icon: <SiShadcnui className="skillIcon" />,
    title: 'Shadcn-UI',
  },
];
const backEndSkills = [
  { icon: <SiNodedotjs className="skillIcon" />, title: 'Node.js' },
  { icon: <SiFastify className="skillIcon" />, title: 'Fastify' },
  { icon: <SiNestjs className="skillIcon" />, title: 'NestJS' },
  { icon: <SiMysql className="skillIcon" />, title: 'MySQL' },
  { icon: <SiMongodb className="skillIcon" />, title: 'MongoDB' },
  {
    icon: <IoLogoFirebase className="skillIcon" />,
    title: 'Firebase',
  },
];

const tools = [
  {
    icon: <SiGithub className="skillIcon" />,
    title: 'Git /' + ' Github',
  },
  { icon: <SiJira className="skillIcon" />, title: 'Jira' },
  {
    icon: <BiLogoVisualStudio className="skillIcon" />,
    title: 'Visual' + ' Studio Code',
  },
  { icon: <SiWebstorm className="skillIcon" />, title: 'WebStorm' },
  { icon: <SiPostman className="skillIcon" />, title: 'Postman' },
  { icon: <SiDocker className="skillIcon" />, title: 'Docker' },
];

const SkillsInfo = ({ icon, title }) => {
  return (
    <div className="flex basis-1/3 flex-row items-center gap-x-4 p-2 xl:basis-1">
      <div className="flex w-full flex-row items-center gap-2 md:justify-center">
        {icon ? icon : <RiVerifiedBadgeLine className="skillIcon" />}
        <p className="text-sm font-bold md:text-2xl">{title}</p>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="section">
      <SectionTitle title="技能與工具" subtitle="核心技能與工具展示" />

      <div className="flex items-center justify-center md:size-full">
        <div className="flex w-full flex-col gap-4 px-4 py-12 md:gap-12 md:p-12 xl:flex-row xl:gap-24 xl:p-24">
          <div className="border-sub flex basis-1/3 flex-col items-center justify-center rounded-2xl border-1 bg-white">
            <p className="m-2 text-xl font-bold md:text-4xl">Front-end</p>
            <div className="flex flex-row flex-wrap xl:flex-col">
              {frontEndSkills.map(({ icon, title }) => (
                <SkillsInfo key={title} icon={icon} title={title} />
              ))}
            </div>
          </div>

          <div className="border-sub flex basis-1/3 flex-col items-center justify-center rounded-2xl border-1 bg-white">
            <p className="m-2 text-xl font-bold md:text-4xl">Back-end</p>
            <div className="flex flex-row flex-wrap xl:flex-col">
              {backEndSkills.map(({ icon, title }) => (
                <SkillsInfo key={title} icon={icon} title={title} />
              ))}
            </div>
          </div>

          <div className="border-sub flex basis-1/3 flex-col items-center justify-center rounded-2xl border-1 bg-white">
            <p className="m-2 text-xl font-bold md:text-4xl">Tools</p>
            <div className="flex flex-row flex-wrap xl:flex-col">
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
