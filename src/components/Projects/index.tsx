import Card from './Card';
import styles from './Projects.module.scss';
import react from 'assets/react-js-icon.svg';

export default function Projects() {
    const projects = [
        {
            id: 1,
            title: 'Bank',
            imageUrl: react,
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 2,
            title: 'Movie',
            imageUrl: react,
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 3,
            title: 'Automations',
            imageUrl: react,
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
    ];

    return (
        <div className={styles.container}>
            <h2 className={styles.container__title}>Projetos</h2>
            <p className={styles.container__subTitle}>Alguns projetos que construi</p>
            <div className={styles.container__card}>
                {projects.map((project) => (
                    <div key={project.id}>
                        <Card
                            title={project.title}
                            imageUrl={project.imageUrl}
                            description={project.description}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
