export const AboutMe = {
  name: 'Arkadiusz Niewiadomy',
  pseudonym: 'codeforge11',
  links: [
    { label: 'github',   value: 'github.com/codeforge11' },
    { label: 'contact email',    value: 'codeforge11+contact@gmail.com' },
    // { label: 'linkedin', value: 'linkedin.com/in/' }, in the future
  ],
}

export const favTech = [
  {
    name: 'Go/Golang',
    reason: 'My primary language for building fast, scalable backend systems and the one I use for desktop applications.',
    color: '#00ACD7',
    icon: 'GO',
  },
  {
    name: 'Docker',
    reason: 'A tool that allows me to run multiple services on my server without having to worry about dependency issues.',
    color: '#2496ED',
    icon: 'DK',
  },
  {
    name: 'Gin',
    reason: 'My favorite framework for creating reliable and efficient web services.',
    color: '#00A896',
    icon: 'GIN',
  },
  {
    name: 'Qt',
    reason: 'Qt wins my heart because of its simplicity and excellent cross-platform support.',
    color: '#41CD52',
    icon: 'QT',
  },
  {
    name: 'React',
    reason: 'React allows me to create beautiful websites.',
    color: '#03e9b7',
    icon: 'React',
  },
]

export const myTech = [
//Oses
  { name: 'Fedora',    cat: 'Operating systems', level: 4 },
  { name: 'Pop!_OS',   cat: 'Operating systems', level: 3 },
  { name: 'Arch',      cat: 'Operating systems', level: 3 },
  { name: 'Debian',    cat: 'Operating systems', level: 3 },
  { name: 'Ubuntu',    cat: 'Operating systems', level: 3 },
  { name: 'Alpine',    cat: 'Operating systems', level: 1 },
  { name: 'Windows 11', cat: 'Operating systems', level: 5 },
  { name: 'CachyOS',   cat: 'Operating systems', level: 3 },
  { name: 'FreeBSD',   cat: 'Operating systems', level: 2 },

//Languages
  { name: 'JavaScript',  cat: 'Languages', level: 3 },
  { name: 'Go',          cat: 'Languages', level: 4 },
  { name: 'Python',      cat: 'Languages', level: 3 },
  { name: 'C++',         cat: 'Languages', level: 3 },
  { name: 'SQL',         cat: 'Languages', level: 5 },
  { name: 'CSS',  cat: 'Languages', level: 3 },
  { name: 'HTML', cat: 'Languages', level: 4 },
  { name: 'C#',   cat: 'Languages', level: 1 },
  { name: 'Ruby', cat: 'Languages', level: 1 },
  { name: 'PHP',  cat: 'Languages', level: 2 },
  {name: 'Rust',cat:'Languages',level:1},

//Libs and frameworks
  { name: 'React',       cat: 'Libraries & Frameworks', level: 3 },
  { name: 'Svelte',      cat: 'Libraries & Frameworks', level: 2 },

//LLms
  { name: 'ChatGPT',       cat: 'LLM Technologies', level: 5 },
  { name: 'Google Gemini', cat: 'LLM Technologies', level: 5 },
  { name: 'Claude',        cat: 'LLM Technologies', level: 5 },
  { name: 'LM Studio',     cat: 'LLM Technologies', level: 5 },
  { name: 'GitHub Copilot',cat: 'LLM Technologies', level: 5 },
  { name: 'DeepSeek',      cat: 'LLM Technologies', level: 5 },

//Ide
  { name: 'VS Code',         cat: 'IDE', level: 5 },
  { name: 'Neovim',          cat: 'IDE', level: 2 },
  { name: 'JetBrains IDEs', cat: 'IDE', level: 4 },
  { name: 'Visual Studio',   cat: 'IDE', level: 4 },
  { name: 'Arduino IDE',     cat: 'IDE', level: 4 },

//Tools
  { name: 'Docker',      cat: 'Tools',    level: 4 },
  { name: 'Git',         cat: 'Tools',    level: 4 },
  { name: 'zoxide',      cat: 'Tools',    level: 4 },
  { name: 'Figma',       cat: 'Tools',    level: 3 },
  { name: 'Arduino',        cat: 'Tools', level: 4 },
]

export const MyCertificates = [{
    name: 'Introduction to JavaScript Programming',
    issuer: 'Securitum / HexArcana — trainer: Gynvael Coldwind',
    date: '17–26 Mar 2026',
    id: 'CPE/ECE: 8 pts · Duration: 8h',
    badge: 'JS',
    color: '#a855f7',
  },
]

export const Projects = [
  {
    name: 'SQLMason',
    desc: 'Simple and easy-to-use database management tool.',
    tags: ['Go', 'QT'],
    url:'https://github.com/codeforge11/SQLMason',
  },
  {
    name: 'CactuDash',
    desc: 'Minimalistic and highly optimized dashboard for efficient server management, including Docker and Docker Compose. ',
    tags: ['GO','GIN','JS'],
    url:'https://github.com/codeforge11/CactuDash',
  },
  {
    name: 'betterLogs',
    desc: 'Lightweight and high-performance logging GO library designed for simplicity. It provides an intuitive way to generate logs and manage automated archiving with minimal resource overhead.',
    tags: ['GO'],
    url:'https://github.com/codeforge11/betterLogs',
  }
]

export const Categories = ['Languages','Libraries & Frameworks', 'LLM Technologies','IDE','Tools','Operating systems']

export const NavSection = [
  { id: 'AboutMe',        label: 'AboutMe' },
  { id: 'Favourites',    label: 'Favourites' },
  { id: 'technologies', label: 'Technologies' },
  { id: 'certificates', label: 'My certificates' },
  { id: 'Projects',     label: 'Projects' },
]