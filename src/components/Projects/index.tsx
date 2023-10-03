import Card from './Card';
import styles from './Projects.module.scss';
import react from 'assets/react-js-icon.svg';

export default function Projects() {
    return (
        <div className={styles.container}>
            <h2>Projetos</h2>
            <Card
                title={'Bank'}
                imageUrl={react}
                description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
            />
        </div>
    );
}
