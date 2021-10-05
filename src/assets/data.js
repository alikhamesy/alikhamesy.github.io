import wts from './wts.png'
import stormhacks from './stormhacks.png'
import onedrive from './onedrive.png'
import sap from './sap.svg'
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

export const gallery = galleryPhotos.map(photo => ({
  thumb: galleryResolver(`./${photo}-thumb.jpg`).default,
  highRes: galleryResolver(`./${photo}.jpg`).default
}))

const data = {
  gallery,
  projects: [
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
      src: stormhacks,
      name: 'StormHacks Website',
      description:
        'Lead development of the StormHacks website for over 1000 applicants and 10 sponsors to view.',
      chips: ['React', 'JavaScript', 'HTML/CSS']
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
    },
    {
      src: analyzer,
      name: 'GitLab Analyzer',
      description:
        'Revolutionized marking software projects with GitLab Analyzer that provides an analyzed score as well as allowing markers to make notes and ignore meta files.',
      chips: ['Java', 'Spring Boot', 'TypeScript', 'React', 'MaterialUI']
    },
    {
      src: git,
      name: 'parse-diff',
      description:
        'Contributed to the open source JS tool parse-diff with 300,000 weekly downloads on NPM which can parse git diffs for easier manipulation and displaying.',
      chips: ['Javascript', 'Nodejs', 'Babel']
    }
  ]
}

export const { projects } = data

export const selectedProjects = [
  projects[0],
  projects[1],
  projects[2],
  projects[3]
]

export default data
