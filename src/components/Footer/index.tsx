import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.container}>
            <ul className={styles.container__firstList}>
                <li>Inicio</li>
                <li>Sobre</li>
                <li>Tecnologias</li>
                <li>Projetos</li>
                <li>Contato</li>
            </ul>
            <p>Desenvolvido por Jean Fagundes</p>
        </footer>
    );
}
