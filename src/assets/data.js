import wts from './wts.png'
import stormhacks from './stormhacks.png'
import onedrive from './onedrive.png'
import sap from './sap.svg'
import pacmacro from './pacmacro.svg'
import git from './parse.svg'
import polar from './polar.png'
import analyzer from './analyzer.png'
import surge from './surge.svg'

const galleryResolver = require.context('./gallery', false, /.*\.jpg/)
const galleryPhotos = [
  'lambo',
  'buildings',
  'mars',
  'tokyo-neighborhood',
  'tokyo-skyline',
  'tokyo-temple',
  'tokyo-tower',
  'sunset',
  'waterfall',
  'observatory'
]

export const GALLERY = {
  title: 'In my spare time I like to take random pictures, here are a few.',
  sources: galleryPhotos.map(photo => ({
    thumb: galleryResolver(`./${photo}-thumb.jpg`).default,
    highRes: galleryResolver(`./${photo}.jpg`).default
  }))
}

export const FOOTER = {
  message: 'I made this website alone using React, Scss, and GitHub Actions.'
}

export const LINKS = {
  email: { display: 'Email', href: 'mailto:alikhamesy0@gmail.com' },
  github: { display: 'GitHub', href: 'https://github.com/alikhamesy' },
  resume: { display: 'Resume', href: '/Ali Khamesy Resume.pdf' },
  linkedin: {
    display: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ali-khamesy/'
  }
}

export const HOME = {
  header: `Hi I’m Ali, a 4th Year Computer Science Student based out of Vancouver who’s interested in Software Development.`,
  subHeader: `Previously interned at Microsoft & SAP maybe there are more things you want to say here.`,
  work: 'Selected Work',
  workTogether: 'Want to Work Together?',
  lookingFor:
    'Currently looking for software developer positions at companies who want to revolutionize and innovate for tomorrow.'
}

export const PROJECTS = {
  title: `All the projects I've worked on.`,
  list: [
    {
      src: wts,
      name: 'Internship @ Microsoft',
      description:
        'Reduced overhead in creating full stack web apps by creating Web Template Studio.',
      chips: ['React', 'Typescript', 'Redux', 'Vue', 'HTML/CSS']
    },
    {
      src: onedrive,
      name: 'Internship @ Microsoft',
      description:
        'Greatly improved user experience on OneDrive Mobile by creating zero term query features.',
      chips: ['Android', 'Qt', 'Java', 'Kotlin']
    },
    {
      src: sap,
      name: 'Internship @ SAP',
      description:
        'Improving and reimagining UI development for SAP Analytics Cloud. Creating highly requested customer features.',
      chips: ['SAPUI5', 'Webpack', 'Javascript', 'Jasmine', 'HTML/CSS']
    },
    {
      src: git,
      name: 'parse-diff',
      description:
        'Contributed to the open source JS tool parse-diff with 300,000 weekly downloads on NPM which can parse git diffs for easier manipulation and displaying.',
      chips: ['Javascript', 'Nodejs', 'Babel']
    },
    {
      src: stormhacks,
      name: 'StormHacks Website',
      description:
        'Lead development of the StormHacks website for over 1000 applicants and 10 sponsors to view.',
      chips: ['React', 'JavaScript', 'HTML/CSS']
    },
    {
      src: analyzer,
      name: 'GitLab Analyzer',
      description:
        'Revolutionized marking software projects with GitLab Analyzer that provides an analyzed score as well as allowing markers to make notes and ignore meta files.',
      chips: ['Java', 'Spring Boot', 'TypeScript', 'React', 'MaterialUI']
    },
    {
      src: pacmacro,
      name: 'Pac Macro',
      description:
        'Created a memorable experience for new university students by building Pac Macro, an augmented reality Pac Man game played on a 6 block by 6 block grid in downtown Vancouver.',
      chips: ['React', 'Javascript', 'Nodejs', 'React Native', 'HTML/CSS']
    },
    {
      src: polar,
      name: 'Polar Plunge',
      description:
        'Won the audience choice award by creating Polar Plunge, a top down game where the player, a blue whale, attempts to keep a group of baby polar bears on a sheet of ice while pushing them back to the glacier.',
      chips: ['Hackathon Winner', 'C#', 'Unity']
    }
  ]
}

export const STORY = {
  title: 'My Story',
  body: `I am currently a fourth year computer science student at Simon
  Fraser University. Since grade eleven in highschool, I have been
  drawn to computer science and programming. I’ve always been
  extremely curious about the world and how different aspects of it
  work, everything small and large from our solar system to the logic
  behind street lights or metro trains. I started with a simple web
  based chess game and fell in love with programming from the very
  beginning. The urge for knowing how things worked quickly developed
  a new curiosity for how things could be improved.`,
  activity: `What I'm up to.`
}

export const COMPANIES = [
  {
    src: sap,
    name: 'SAP',
    description:
      'Currently an iXp Software Developer Intern working on SAP Analytics Cloud.'
  },
  {
    src: surge,
    name: 'SFU Surge',
    description:
      'One of the original founders of SFU Surge, Head of Finances and Development. Surge is a blah blah TODO'
  },
  {
    src: stormhacks,
    name: 'Stormhacks',
    description:
      "Running SFU's largest hackathon as head of finances and technical development. Setting up websites, domains, discord servers and custom written discord bots."
  }
]

const data = {
  FOOTER,
  LINKS
}

export const selectedProjects = [
  PROJECTS.list[0],
  PROJECTS.list[1],
  PROJECTS.list[2],
  PROJECTS.list[3]
]

export default data
