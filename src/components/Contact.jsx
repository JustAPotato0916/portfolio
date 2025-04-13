import SectionTitle from './SectionTitle.jsx';
import { LiaArrowAltCircleRight } from 'react-icons/lia';
import { MdOutlineEmail, MdOutlineWhatsapp } from 'react-icons/md';
import { RiDiscordFill } from 'react-icons/ri';

const cardInformation = [
  {
    icon: <MdOutlineEmail className="size-12 md:size-16" />,
    title: 'Email',
    description: 'JustAPotato0916@gmail.com',
    href: 'mailto:JustAPotato0916@gmail.com',
  },
  {
    icon: <MdOutlineWhatsapp className="size-12 md:size-16" />,
    title: 'Whatsapp',
    description: '+886 905-883-182',
    href: 'tel:+886-905-883-182',
  },
  {
    icon: <RiDiscordFill className="size-12 md:size-16" />,
    title: 'Discord',
    description: 'potato9330',
    href: 'https://discord.com/users/610389423044952064',
  },
];

const Card = ({ icon, title, description, href }) => {
  return (
    <div className="border-sub flex h-fit w-full flex-none flex-col items-center justify-center gap-2 rounded-4xl border-2 bg-white py-4 md:basis-1/3 md:py-12 xl:py-24">
      {icon}
      <p className="text-xl font-bold md:text-3xl">{title}</p>
      <p className="text-sub text-lg text-nowrap">{description}</p>

      {href && (
        <div className="text-dark mt-2 flex cursor-pointer flex-row items-center hover:text-black md:mt-5">
          <a
            href={href}
            className="text-lg font-bold md:text-xl xl:text-lg"
            target="_blank"
          >
            聯繫我
          </a>
          <LiaArrowAltCircleRight className="mt-0.5 size-5 md:size-6" />
        </div>
      )}
    </div>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section overflow-y-hidden">
      <SectionTitle title="聯繫資訊" subtitle="如何聯繫我" />
      <div className="mt-24 flex size-full flex-col items-center justify-center md:mt-12">
        <div className="flex size-full flex-col items-center justify-center gap-6 px-12 md:flex-row md:gap-12 md:px-24 xl:px-36 2xl:gap-24">
          {cardInformation.map(({ icon, title, description, href }) => (
            <Card
              key={title}
              icon={icon}
              title={title}
              description={description}
              href={href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Contact;
