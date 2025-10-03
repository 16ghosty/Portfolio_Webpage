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

const SocialLink: React.FC<{ href: string; children: React.ReactNode; text: string; }> = ({ href, children, text }) => (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="group flex items-center gap-3 text-slate-400 hover:text-teal-400 transition-colors"
    >
      {children}
      <span className="hidden sm:inline group-hover:underline">{text}</span>
    </a>
);

const Header: React.FC<HeaderProps> = ({ contact, navLinks, activeId }) => {
  return (
    <div>
      <div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white">{contact.name}</h1>
        <h2 className="mt-3 text-lg font-medium text-teal-400 sm:text-xl">{contact.title}</h2>
        <p className="mt-4 max-w-xs leading-normal text-slate-400">{contact.summary}</p>
      </div>

      <nav className="hidden lg:block mt-16" aria-label="In-page jump links">
        <ul className="w-max">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a 
                href={`#${link.id}`}
                className="group flex items-center py-3"
              >
                <span 
                  className={`
                    nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all 
                    group-hover:w-16 group-hover:bg-slate-200 
                    group-focus-visible:w-16 group-focus-visible:bg-slate-200
                    ${activeId === link.id ? 'w-16 bg-gradient-to-r from-teal-400 to-cyan-400' : ''}
                  `}
                ></span>
                <span 
                  className={`
                    nav-text text-xs font-bold uppercase tracking-widest text-slate-500 
                    group-hover:text-slate-200 
                    group-focus-visible:text-slate-200
                    ${activeId === link.id ? 'text-white' : ''}
                  `}
                >
                  {link.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6 text-sm">
        <SocialLink href={`mailto:${contact.email}`} text={contact.email}>
          <MailIcon className="w-5 h-5" />
        </SocialLink>
        <SocialLink href={contact.linkedin} text="LinkedIn">
          <LinkedInIcon className="w-5 h-5" />
        </SocialLink>
        <SocialLink href={contact.github} text="GitHub">
          <GithubIcon className="w-5 h-5" />
        </SocialLink>
        <div className="group flex items-center gap-3 text-slate-400">
          <PhoneIcon className="w-5 h-5" />
          <span className="hidden sm:inline">{contact.phone}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;