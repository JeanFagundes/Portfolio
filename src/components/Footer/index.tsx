import { useNavigate } from 'react-router-dom';
import styles from './Footer.module.scss';
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai';

export default function Footer() {
    const navigate = useNavigate();

    const handleClickNavigate = (route: string) => {
        navigate(route);
    };
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
                            <a href="https://github.com/JeanFagundes">
                                <AiFillGithub size={30} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/jean-fagundes-31488910b/">
                                <AiFillLinkedin size={30} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/jeanfagundes96/?hl=pt-br">
                                <AiOutlineInstagram size={30} />
                            </a>
                        </li>
                    </ul>
                </div>

                <div className={styles.container__flexBoxFooter}>
                    <ul className={styles.container__secondList}>
                        <li onClick={() => handleClickNavigate('/')}>Inicio</li>
                        <li onClick={() => handleClickNavigate('/about')}>Sobre</li>
                        <li onClick={() => handleClickNavigate('/tech')}>Tecnologias</li>
                        <li onClick={() => handleClickNavigate('/projects')}>Projetos</li>
                        <li onClick={() => handleClickNavigate('/contact')}>Contato</li>
                    </ul>
                    <p>Desenvolvido por Jean Fagundes</p>
                </div>
            </div>
        </footer>
    );
}
