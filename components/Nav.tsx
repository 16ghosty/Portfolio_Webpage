import React from 'react';

interface NavLink {
  name: string;
  id: string;
}

interface NavProps {
  links: NavLink[];
  activeId: string;
}

const Nav: React.FC<NavProps> = ({ links, activeId }) => {
  return (
    <nav className="hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {links.map((link) => (
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
                  ${activeId === link.id ? 'w-16 bg-white' : ''}
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
  );
};

export default Nav;
