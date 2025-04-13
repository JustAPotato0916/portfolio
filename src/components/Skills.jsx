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
    icon: <SiJavascript className="mt-1 size-4 md:size-6" />,
    title: 'JavaScript',
  },
  {
    icon: <SiTypescript className="mt-1 size-4 md:size-6" />,
    title: 'TypeScript',
  },
  { icon: <SiReact className="mt-1 size-4 md:size-6" />, title: 'React' },
  {
    icon: <SiBootstrap className="mt-1 size-4 md:size-6" />,
    title: 'Bootstrap',
  },
  {
    icon: <SiTailwindcss className="mt-1 size-4 md:size-6" />,
    title: 'Tailwind' + ' CSS',
  },
  {
    icon: <SiShadcnui className="mt-1 size-4 md:size-6" />,
    title: 'Shadcn-UI',
  },
];
const backEndSkills = [
  { icon: <SiNodedotjs className="mt-1 size-4 md:size-6" />, title: 'Node.js' },
  { icon: <SiFastify className="mt-1 size-4 md:size-6" />, title: 'Fastify' },
  { icon: <SiNestjs className="mt-1 size-4 md:size-6" />, title: 'NestJS' },
  { icon: <SiMysql className="mt-1 size-4 md:size-6" />, title: 'MySQL' },
  { icon: <SiMongodb className="mt-1 size-4 md:size-6" />, title: 'MongoDB' },
  {
    icon: <IoLogoFirebase className="mt-1 size-4 md:size-6" />,
    title: 'Firebase',
  },
];

const tools = [
  {
    icon: <SiGithub className="mt-1 size-4 md:size-6" />,
    title: 'Git /' + ' Github',
  },
  { icon: <SiJira className="mt-1 size-4 md:size-6" />, title: 'Jira' },
  {
    icon: <BiLogoVisualStudio className="mt-1 size-4 md:size-6" />,
    title: 'Visual' + ' Studio Code',
  },
  { icon: <SiWebstorm className="mt-1 size-4 md:size-6" />, title: 'WebStorm' },
  { icon: <SiPostman className="mt-1 size-4 md:size-6" />, title: 'Postman' },
  { icon: <SiDocker className="mt-1 size-4 md:size-6" />, title: 'Docker' },
];

const SkillsInfo = ({ icon, title }) => {
  return (
    <div className="mb-5 flex basis-1/3 flex-row items-center justify-center gap-x-4 xl:basis-1">
      <div className="flex w-full flex-row items-center justify-center gap-2">
        {icon ? (
          icon
        ) : (
          <RiVerifiedBadgeLine className="mt-1 size-4 md:size-6" />
        )}
        <p className="text-sm font-bold md:text-2xl">{title}</p>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="section overflow-y-hidden">
      <SectionTitle title="技能與工具" subtitle="核心技能與工具展示" />
      <div className="mt-20 flex size-full items-center justify-center md:mt-12">
        <div className="flex w-full flex-col justify-center gap-4 p-4 md:gap-12 md:p-12 xl:flex-row xl:gap-24 xl:p-24">
          <div className="border-sub flex basis-1/3 flex-col items-center justify-center rounded-2xl border-1 bg-white">
            <p className="m-4 text-2xl font-bold md:text-4xl">Front-end</p>
            <div className="flex flex-row flex-wrap items-center justify-center xl:flex-col">
              {frontEndSkills.map(({ icon, title }) => (
                <SkillsInfo key={title} icon={icon} title={title} />
              ))}
            </div>
          </div>

          <div className="border-sub flex basis-1/3 flex-col items-center justify-center rounded-2xl border-1 bg-white">
            <p className="m-4 text-2xl font-bold md:text-4xl">Back-end</p>
            <div className="flex flex-row flex-wrap items-center justify-center xl:flex-col">
              {backEndSkills.map(({ icon, title }) => (
                <SkillsInfo key={title} icon={icon} title={title} />
              ))}
            </div>
          </div>

          <div className="border-sub flex basis-1/3 flex-col items-center justify-center rounded-2xl border-1 bg-white">
            <p className="m-4 text-2xl font-bold md:text-4xl">Tools</p>
            <div className="flex flex-row flex-wrap items-center justify-center xl:flex-col">
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
