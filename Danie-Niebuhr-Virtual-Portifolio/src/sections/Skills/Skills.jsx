import styles from './SkillsStyles.modules.css';
import checkMark from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1>Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMark} skill="Java" />
      </div>
    </section>
  );
}

export default Skills;
