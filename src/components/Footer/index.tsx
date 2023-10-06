import styles from './Footer.module.scss';
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai';

export default function Footer() {
    return (
        <footer className={styles.container}>
            <div className={styles.container__flexbox}>
                <div className={styles.container__contact}>
                    <ul className={styles.container__firstList}>
                        <li>
                            <p>11 95440-6674</p>
                        </li>
                        <li>
                            <p>jean-cabral@hotmail.com</p>
                        </li>
                    </ul>
                    <ul className={styles.container__socialMidia}>
                        <li>
                            <AiFillGithub size={30} />
                        </li>
                        <li>
                            <AiFillLinkedin size={30} />
                        </li>
                        <li>
                            <AiOutlineInstagram size={30} />
                        </li>
                    </ul>
                </div>

                <div className={styles.container__flexBoxFooter}>
                    <ul className={styles.container__secondList}>
                        <li>Inicio</li>
                        <li>Sobre</li>
                        <li>Tecnologias</li>
                        <li>Projetos</li>
                        <li>Contato</li>
                    </ul>
                    <p>Desenvolvido por Jean Fagundes</p>
                </div>
            </div>
        </footer>
    );
}
