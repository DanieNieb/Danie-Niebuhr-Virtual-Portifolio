import styles from './ProjectsStyles.module.css';
import encryptionP from '../../assets/Encryption.png';
import FixIt from '../../assets/FixIt.png';
import networkApp from '../../assets/Network app.jpg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">University Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={encryptionP}
          link="https://github.com/DanieNieb/Encryption-Project"
          h3="Cyber Security Project"
          p="Encrypt and Decrypt App"
        />
        <ProjectCard
          src={FixIt}
          link="https://github.com/r-swrt-GB/fix-it"
          h3="Fix It Workshop"
          p="Inventory and Sales management App"
        />
        <ProjectCard
          src={networkApp}
          link="https://github.com/r-swrt-GB/cmpg-315-group-5"
          h3="Network Project"
          p="Setup a network and Messaging App"
        />
      </div>
    </section>
  );
}

export default Projects;
