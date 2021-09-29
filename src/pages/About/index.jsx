import Break from '../../components/Break'

import styles from './About.module.scss'

import profile from '../../assets/profile.jpg'
import Image from '../../components/Image'
import OrgCard from '../../components/OrgCard'

import sap from '../../assets/sap.svg'
import surge from '../../assets/surge.svg'
import stormhacks from '../../assets/stormhacks.svg'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.splash}>
        <Image src={profile} className={styles.profile} alt='Image of Ali' />
        <div className={styles.intro}>
          <Break />
          <div className={styles.title}>My Story</div>
          <div className={styles.text}>
            I am currently a fourth year computer science student at Simon
            Fraser University. Since grade eleven in highschool, I have been
            drawn to computer science and programming. I’ve always been
            extremely curious about the world and how different aspects of it
            work, everything small and large from our solar system to the logic
            behind street lights or metro trains. I started with a simple web
            based chess game and fell in love with programming from the very
            beginning. The urge for knowing how things worked quickly developed
            a new curiosity for how things could be improved.
            {'\n'}
            University taught me a lot about the fundamentals of computer
            science, like data structures, algorithms and common technologies. I
            excelled in my computer science courses on data structures,
            algorithms, system architecture, operating systems and user
            interface design, all of which I found very interesting. Overall
            university has broadened my horizons, greatly improved my
            theoretical knowledge and made me a very quick learner with respect
            to any technology.
            {/* {'\n'}
            In balance to courses, I also have two very valuable internships
            working as a software engineer at Microsoft. These internships
            grounded in my theoretical course knowledge with modern applications
            using Azure cloud services with Docker containers, managing devops
            with both GitHub and Azure DevOps all while working in and leading a
            team as a scrum champion. Through internships and my role as an
            executive in the technology and career based club SFU Surge I have
            become very skilled in front end development, especially in React. */}
          </div>
        </div>
      </div>
      <Break />
      <div className={styles.activity}>
        <div className={styles.title}>What I'm up to.</div>
        <div className={styles.text}>
          <OrgCard
            src={sap}
            name='SAP'
            description='Currently an iXp Software Developer Intern working on SAP Analytics Cloud'
          />
          <OrgCard
            src={surge}
            name='SFU Surge'
            description='One of the original founders of SFU Surge, Head of Finances and Development. Surge is a blah blah TODO'
          />
          <OrgCard
            src={stormhacks}
            name='Stormhacks'
            description="Running SFU's largest hackathon as head of finances and technical development. Setting up websites, domains, discord servers and custom written discord bots."
          />
        </div>
      </div>
    </div>
  )
}

export default About
