import { useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai';

export default function Header() {
    const navigate = useNavigate();

    const handleClickNavigate = (route: string) => {
        navigate(route);
    };

    return (
        <header className={styles.container}>
            <ul className={styles.container__firstList}>
                <li onClick={() => handleClickNavigate('/')}>Inicio</li>
                <li onClick={() => handleClickNavigate('/about')}>Sobre</li>
                <li onClick={() => handleClickNavigate('/tech')}>Tecnologias</li>
                <li onClick={() => handleClickNavigate('/projects')}>Projetos</li>
                <li onClick={() => handleClickNavigate('/contact')}>Contato</li>
                <li>
                    <a href="https://github.com/JeanFagundes">
                        <AiFillGithub />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/jean-fagundes-31488910b/">
                        <AiFillLinkedin />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/jeanfagundes96/?hl=pt-br">
                        <AiOutlineInstagram />
                    </a>
                </li>
            </ul>
        </header>
    );
}
