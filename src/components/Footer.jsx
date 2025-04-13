import React from 'react';
import { FaSquareGithub } from 'react-icons/fa6';
import { MdOutlineEmail } from 'react-icons/md';
import { RiDiscordFill } from 'react-icons/ri';

const Footer = () => {
  return (
    <footer className="border-sub relative h-[50dvh] w-screen overflow-x-hidden border-t-1 bg-white">
      <div className="flex size-full items-center justify-center">
        <div className="flex size-full flex-col items-center justify-center gap-12">
          <p className="text-5xl font-bold">Eric</p>

          <div className="text-sub flex flex-row gap-8 text-2xl font-bold">
            <a href="/#about" className="hover:text-black">
              About
            </a>
            <a href="/#skills" className="hover:text-black">
              Skills
            </a>
            <a href="/#projects" className="hover:text-black">
              Projects
            </a>
          </div>

          <div className="text-sub flex flex-row gap-6">
            <a
              href="https://github.com/JustAPotato0916"
              className="hover:text-black"
              target="_blank"
            >
              <FaSquareGithub className="h-10 w-10" />
            </a>
            <a
              href="mailto:JustAPotato0916@gmail.com"
              className="hover:text-black"
              target="_blank"
            >
              <MdOutlineEmail className="h-10 w-10" />
            </a>
            <a
              href="https://discord.com/users/610389423044952064"
              className="hover:text-black"
              target="_blank"
            >
              <RiDiscordFill className="h-10 w-10" />
            </a>
          </div>

          <p className="text-dark mt-12 text-sm font-bold md:text-lg">
            Copyright © 2025 JustAPotato0916. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
