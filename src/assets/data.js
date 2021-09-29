import wts from './wts.png'

const galleryResolver = require.context('./gallery', false, /.*\.jpg/)

export const gallery = galleryResolver
  .keys()
  .map(src => galleryResolver.resolve(src))

const data = {
  gallery,
  projects: [
    {
      src: wts,
      name: 'Internship @ Microsoft',
      description:
        'Reduced overhead in creating full stack web apps by creating Web Template Studio.',
      chips: ['React', 'Typescript', 'Redux', 'Vue', 'html/css']
    },
    {
      src: wts,
      name: 'Internship @ Microsoft',
      description:
        'Reduced overhead in creating full stack web apps by creating Web Template Studio.'
    },
    {
      src: wts,
      name: 'Internship @ Microsoft',
      description:
        'Reduced overhead in creating full stack web apps by creating Web Template Studio.'
    },
    {
      src: wts,
      name: 'Internship @ Microsoft',
      description:
        'Reduced overhead in creating full stack web apps by creating Web Template Studio.'
    },
    {
      src: wts,
      name: 'Internship @ Microsoft',
      description:
        'Reduced overhead in creating full stack web apps by creating Web Template Studio.'
    }
  ]
}

export const { projects } = data

export const selectedProjects = [projects[0], projects[1], projects[2]]

export default data
