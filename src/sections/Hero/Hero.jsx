import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Danie Profile Foto.jpeg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import gitHubIconL from '../../assets/github-light.svg';
import gitHubIconD from '../../assets/github-dark.svg';
import linkedInIconL from '../../assets/linkedin-light.svg';
import linkedInIconD from '../../assets/linkedin-dark.svg';
import CV from '../../../public/Daniel Wilhelm Niebuhr CV.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const ThemeIcon = theme === 'light' ? sun : moon;
  const gitHubIcon = theme === 'light' ? gitHubIconL : gitHubIconD;
  const linkedInIcon = theme === 'light' ? linkedInIconL : linkedInIconD;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Danie Niebuhr"
        />
        <img
          className={styles.colorMode}
          src={ThemeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Danie
          <br />
          Niebuhr
        </h1>
        <h2>University Student</h2>
        <span>
          <a href="https://github.com/DanieNieb" target="_blank">
            <img src={gitHubIcon} alt="Github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/danie-niebuhr-a30b10320/"
            target="_blank"
          >
            <img src={linkedInIcon} alt="LinkedIn icon" />
          </a>
        </span>
        <p className={styles.description}>
          I'm a passionate programmer and currently in my third and final year
          of a BSc in Information Technology at North West University.
        </p>
        <a href={CV}>
          <button className="hover" download>
            CV
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
