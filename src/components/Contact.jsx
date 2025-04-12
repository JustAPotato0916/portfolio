import SectionTitle from './SectionTitle.jsx';
import { LiaArrowAltCircleRight } from 'react-icons/lia';
import { MdOutlineEmail, MdOutlineWhatsapp } from 'react-icons/md';
import { RiDiscordFill } from 'react-icons/ri';

const cardInformation = [
  {
    icon: <MdOutlineEmail className="h-16 w-16" />,
    title: 'Email',
    description: 'JustAPotato0916@gmail.com',
    href: 'mailto:JustAPotato0916@gmail.com',
  },
  {
    icon: <MdOutlineWhatsapp className="h-16 w-16" />,
    title: 'Whatsapp',
    description: '+886 905-883-182',
    href: 'tel:+886-905-883-182',
  },
  {
    icon: <RiDiscordFill className="h-16 w-16" />,
    title: 'Discord',
    description: 'potato9330',
    href: 'https://discord.com/users/610389423044952064',
  },
];

const Card = ({ icon, title, description, href }) => {
  return (
    <div className="border-sub flex flex-1 flex-col items-center justify-center gap-2 rounded-4xl border-2 bg-white p-24">
      {icon}
      <p className="text-3xl font-bold">{title}</p>
      {description && (
        <p className="text-sub text-lg text-nowrap">{description}</p>
      )}
      {href && (
        <div className="text-sub mt-5 flex cursor-pointer flex-row items-center gap-1 hover:text-black">
          <a href={href} className="text-lg font-bold" target="_blank">
            聯繫我
          </a>
          <LiaArrowAltCircleRight className="mt-0.5 h-6 w-6" />
        </div>
      )}
    </div>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section overflow-y-hidden">
      <SectionTitle title="聯繫資訊" subtitle="如何聯繫我" />
      <div className="flex size-full flex-col items-center justify-center">
        <div className="flex w-4/5 flex-row justify-center gap-24">
          {cardInformation.map(({ icon, title, description, href }) => (
            <Card
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
