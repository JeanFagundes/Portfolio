import styles from './Header.module.scss';
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai';

export default function Header() {
    return (
        <header className={styles.container}>
            <ul className={styles.container__firstList}>
                <li>Inicio</li>
                <li>Sobre</li>
                <li>Tecnologias</li>
                <li>Projetos</li>
                <li>Contato</li>
                <li>
                    <AiFillGithub />
                </li>
                <li>
                    <AiFillLinkedin />
                </li>
                <li>
                    <AiOutlineInstagram />
                </li>
            </ul>
        </header>
    );
}
