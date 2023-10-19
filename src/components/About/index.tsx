import styles from './About.module.scss';
import foto from 'assets/Foto.png';

export default function About() {
    return (
        <div className={styles.container}>
            <div className={styles.container__flexbox}>
                <p>
                    Ola, <br />
                    Meu nome é <br />
                    <p className={styles.container__name}>Jean Fagundes</p>
                    Sou desenvolvedor Full-Stack Web
                </p>
                <img src={foto} alt="" />
            </div>
        </div>
    );
}
