import wts from './wts.png'

const galleryResolver = require.context('./gallery', false, /.*\.jpg/)

export const gallery = galleryResolver
  .keys()
  .map(src => galleryResolver(src).default)

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
      src: wts,
      name: 'Internship @ Microsoft',
      description:
        'Greatly improved user experience on OneDrive Mobile by creating zero term query features.',
      chips: ['Android', 'Qt', 'Java', 'Kotlin']
    },
    {
      src: wts,
      name: 'Internship @ SAP',
      description:
        'Improving and reimagining UI development for SAP Analytics Cloud. Creating highly requested customer features.',
      chips: ['SAPUI5', 'Webpack', 'Javascript', 'Jasmine', 'HTML/CSS']
    },
    {
      src: wts,
      name: 'StormHacks Website',
      description:
        'Lead development of the StormHacks website for over 1000 applicants and 10 sponsors to view',
      chips: ['React', 'JavaScript', 'HTML/CSS']
    },
    {
      src: wts,
      name: 'Pac Macro',
      description:
        'Created a memorable experience for new university students by building Pac Macro, an augmented reality Pac Man game played on a 6 block by 6 block grid in downtown Vancouver',
      chips: ['React', 'Javascript', 'Nodejs', 'React Native', 'HTML/CSS']
    }
  ]
}

export const { projects } = data

export const selectedProjects = [projects[0], projects[1], projects[2]]

export default data
