import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Danie Profile Foto.jpeg';
import themeIcon from '../../assets/sun.svg';
import gitHubIcon from '../../assets/github-light.svg';
import linkedInIcon from '../../assets/linkedin-light.svg';
import CV from '../../assets/Daniel Wilhelm Niebuhr CV.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggle } = useTheme();
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
          src={themeIcon}
          alt="Color mode icon"
        />
      </div>
      <div className={styles.info}>
        {' '}
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
            <img src={linkedInIcon} alt="Github icon" />
          </a>
        </span>
        <p>
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
