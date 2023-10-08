import About from 'components/About';
import Projects from 'components/Projects';
import TechStack from 'components/TechStackModule';
import styles from './Home.module.scss';

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.container__about}>
                <About />
            </div>
            <div className={styles.container__techStack}>
                <TechStack option={'home'} />
            </div>
            <div className={styles.conainer__projects}>
                <Projects />
            </div>
        </div>
    );
}
