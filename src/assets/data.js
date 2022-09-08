import wts from './wts.png'
import stormhacks from './stormhacks.png'
import onedrive from './onedrive.png'
import sap from './sap.svg'
import google from './google.svg'
import pacmacro from './pacmacro.svg'
import git from './parse.svg'
import polar from './polar.png'
import analyzer from './analyzer.png'

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
  header: `Hi I’m Ali, a Google Software Engineer working on Google Photos based out of Mountain View.`,
  subHeader: `I've previously interned at Microsoft & SAP, motivated and more curious everyday.`,
  work: 'Selected Work',
  lookingForWork: false,
  workTogether: 'Want to Work Together?',
  lookingFor:
    'Currently looking for software developer positions at companies who want to revolutionize and innovate for tomorrow.'
}

export const PROJECTS = {
  title: `All the projects I've worked on.`,
  list: [
    {
      src: google,
      href: 'https://www.google.com/photos/about/',
      name: 'Software Engineer @ Google',
      description:
        "Making Google Photos truly a home for all photos by improving it's stability and efficiency.",
      chips: ['Android', 'Java']
    },
    {
      src: wts,
      href: 'https://marketplace.visualstudio.com/items?itemName=WASTeamAccount.WebTemplateStudio-dev-nightly',
      name: 'Internship @ Microsoft',
      description:
        'Reduced overhead in creating full stack web apps by creating Web Template Studio with 70,000+ downloads.',
      chips: ['React', 'Typescript', 'Redux', 'Vue', 'HTML/CSS']
    },
    {
      src: onedrive,
      href: 'https://www.microsoft.com/en-ca/microsoft-365/onedrive/online-cloud-storage',
      name: 'Internship @ Microsoft',
      description:
        'Greatly improved user experience on OneDrive Mobile by creating zero term query features.',
      chips: ['Android', 'Qt', 'Java', 'Kotlin']
    },
    {
      src: sap,
      href: 'https://www.sap.com/products/cloud-analytics.html',
      name: 'Internship @ SAP',
      description:
        'Improving and reimagining UI development for SAP Analytics Cloud. Creating highly requested customer features.',
      chips: ['SAPUI5', 'Webpack', 'Javascript', 'Jasmine', 'HTML/CSS']
    },
    {
      src: git,
      href: 'https://github.com/sergeyt/parse-diff',
      name: 'parse-diff',
      description:
        'Contributed to the open source JS tool parse-diff with 300,000 weekly downloads on NPM which can parse git diffs for easier manipulation and displaying.',
      chips: ['Javascript', 'Nodejs', 'Babel']
    },
    {
      src: stormhacks,
      href: 'https://stormhacks.com',
      name: 'StormHacks Website',
      description:
        'Lead development of the StormHacks website for over 1,000 applicants and 10 sponsor organizations to view.',
      chips: ['React', 'JavaScript', 'HTML/CSS']
    },
    {
      src: analyzer,
      name: 'GitLab Analyzer',
      href: 'https://github.com/alikhamesy/gitlab-analyzer',
      description:
        'Revolutionized marking software projects with GitLab Analyzer that provides an analyzed score as well as allowing markers to make notes and ignore meta files.',
      chips: ['Java', 'Spring Boot', 'TypeScript', 'React', 'MaterialUI']
    },
    {
      src: pacmacro,
      name: 'Pac Macro',
      href: 'https://github.com/pacmacro',
      description:
        'Created a memorable experience for new university students by building Pac Macro, an augmented reality Pac Man game played on a 6 block by 6 block grid in downtown Vancouver.',
      chips: ['React', 'Javascript', 'Nodejs', 'React Native', 'HTML/CSS']
    },
    {
      src: polar,
      name: 'Polar Plunge',
      href: 'https://github.com/alikhamesy/game-jam-20',
      description:
        'Won the audience choice award by creating Polar Plunge, a top down game where the player, a blue whale, attempts to keep a group of baby polar bears on a sheet of ice while pushing them back to the glacier.',
      chips: ['Hackathon Winner', 'C#', 'Unity']
    }
  ]
}

export const STORY = {
  title: 'My Story',
  body: `Curiosity has been the driving force of my interests for all my life, and curiosity was the reason I originally got into computer science. I started with simple web development wanting to know how the internet worked. My first project was building chess with HTML, CSS, and Javascript in grade 11. From that project I know that CS is a good path and so I chose it for my degree. From there I got an internship in Microsoft which introduced me to React and proper software development. While my work has made me experienced in all things front end, my education with lots of low level courses like networking, embedded systems or operating systems has kept me well trained with C and Python as well. The more I’ve learned the more curious I’ve gotten, always passionate to keep exploring and expanding my knowledge of the field.`,
  activity: `What I'm up to.`
}

export const COMPANIES = [
  {
    src: google,
    name: 'Google',
    description:
      'Currently a Software Engineer working on Google Photos Android.'
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
