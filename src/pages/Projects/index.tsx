import ProjectsModule from 'components/Projects';
import styles from './Projects.module.scss';

export default function Projects() {
    return (
        <div className={styles.container}>
            <ProjectsModule />
        </div>
    );
}
