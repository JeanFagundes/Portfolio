import { useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai';
import { useState } from 'react';

export default function Header() {
    const [showOptions, setShowOptions] = useState(false);
    const navigate = useNavigate();

    const handleClickNavigate = (route: string) => {
        navigate(route);
        setShowOptions(false);
    };

    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };

    if (showOptions) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }

    return (
        <header className={styles.container}>
            <nav>
                <div onClick={toggleOptions} className={styles.container__mobileMenu}>
                    <div className={styles.container__one}></div>
                    <div className={styles.container__two}></div>
                    <div className={styles.container__three}></div>
                </div>
                <ul
                    className={`${styles.container__firstList} ${
                        showOptions
                            ? `${styles.container__firstList__active}`
                            : `${styles.container__firstList__inactive}`
                    }`}>
                    <li onClick={() => handleClickNavigate('/')}>Inicio</li>
                    <li onClick={() => handleClickNavigate('/about')}>Sobre</li>
                    <li onClick={() => handleClickNavigate('/tech')}>Tecnologias</li>
                    <li onClick={() => handleClickNavigate('/projects')}>Projetos</li>
                    <li onClick={() => handleClickNavigate('/contact')}>Contato</li>
                    <li className={styles.container__socialMedia}>
                        <a href="https://github.com/JeanFagundes">
                            <AiFillGithub />
                        </a>
                    </li>
                    <li className={styles.container__socialMedia}>
                        <a href="https://www.linkedin.com/in/jean-fagundes-31488910b/">
                            <AiFillLinkedin />
                        </a>
                    </li>
                    <li className={styles.container__socialMedia}>
                        <a href="https://www.instagram.com/jeanfagundes96/?hl=pt-br">
                            <AiOutlineInstagram />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
