import { useState} from "react"

import { 
  AboutMe,
  NavSection
} from '../data'


function NavbarDot({ active }) {
  return(
   <span className={`navDot${active ? ' active' : ''}`} />
  )
}

function Navbar({ active }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="header">
        <span className="mono headerBrand">
          <h1>{AboutMe.pseudonym}</h1>
        </span>

        {/* Desktop links */}
        <div className="navLinks">
          {NavSection.map(s => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`navLink${active === s.id ? ' active' : ''}`}
              onClick={() => setOpen(false)}
            >
              <NavbarDot active={active === s.id} />
              <span className="navLinkLabel">{s.label}</span>
            </a>
          ))}
        </div>
      </header>
      
      {/* Mobile menu overlay */}
      <div
        className={`mobileMenu${open ? ' open' : ''}`}
      >
        <div className="mobileMenuInner">
          {NavSection.map(s => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`mobileNav${active === s.id ? ' active' : ''}`}
              onClick={() => setOpen(false)}
            >
              <NavbarDot active={active === s.id} />
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}

export default Navbar