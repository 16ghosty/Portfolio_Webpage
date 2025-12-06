import React from 'react';
import type { ContactInfo } from '../types';
import { MailIcon, LinkedInIcon, GithubIcon, PhoneIcon } from './icons';

interface NavLink {
  name: string;
  id: string;
}
interface HeaderProps {
  contact: ContactInfo;
  navLinks: NavLink[];
  activeId: string;
}

const SocialLink: React.FC<{ href: string; children: React.ReactNode; text: string; bgColor: string }> = ({ href, children, text, bgColor }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`group flex items-center gap-2 ${bgColor} text-nb-black font-bold px-4 py-2 border-3 border-nb-black shadow-brutal hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all`}
  >
    {children}
    <span className="hidden sm:inline">{text}</span>
  </a>
);

const Header: React.FC<HeaderProps> = ({ contact, navLinks, activeId }) => {
  return (
    <div>
      <div className="bg-nb-blue border-4 border-nb-black shadow-brutal-lg p-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-nb-black">{contact.name}</h1>
        <h2 className="mt-3 text-lg font-bold text-nb-black sm:text-xl border-t-2 border-nb-black pt-3">{contact.title}</h2>
        <p className="mt-4 leading-relaxed text-nb-black">{contact.summary}</p>
      </div>

      <nav className="hidden lg:block mt-8" aria-label="In-page jump links">
        <ul className="space-y-2">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`block font-bold text-lg px-4 py-3 border-3 border-nb-black transition-all ${activeId === link.id
                    ? 'bg-nb-yellow shadow-brutal translate-x-1 translate-y-1'
                    : 'bg-white hover:bg-nb-green shadow-brutal hover:shadow-none hover:translate-x-1 hover:translate-y-1'
                  }`}
              >
                → {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <SocialLink href={`mailto:${contact.email}`} text="Email" bgColor="bg-nb-pink">
          <MailIcon className="w-5 h-5" />
        </SocialLink>
        <SocialLink href={contact.linkedin} text="LinkedIn" bgColor="bg-nb-blue">
          <LinkedInIcon className="w-5 h-5" />
        </SocialLink>
        <SocialLink href={contact.github} text="GitHub" bgColor="bg-nb-purple">
          <GithubIcon className="w-5 h-5" />
        </SocialLink>
        <div className="flex items-center gap-2 bg-nb-orange text-nb-black font-bold px-4 py-2 border-3 border-nb-black shadow-brutal">
          <PhoneIcon className="w-5 h-5" />
          <span className="hidden sm:inline">{contact.phone}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;