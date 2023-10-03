import styles from './TechStack.module.scss';
import react from 'assets/react-js-icon.svg';
import node from 'assets/node-js-icon.svg';
import typescript from 'assets/typescript.svg';
import sass from 'assets/sass-icon.svg';
import mysql from 'assets/mysql-icon.svg';
import vscode from 'assets/visual-studio-code-icon.svg';
import git from 'assets/git-icon.svg';
import postman from 'assets/postman-icon.svg';

export default function TechStack() {
    return (
        <div className={styles.container}>
            <div className={styles.container__title}>
                <h2>Tecnologias que tenho usado</h2>
                <p>Tecnologias que eu tenho trabalhado recentemente</p>
            </div>
            <div className={styles.container__flexBox}>
                <img src={react} />
                <img src={node} />
                <img src={typescript} />
                <img src={sass} />
                <img src={mysql} />
                <img src={vscode} />
                <img src={git} />
                <img src={postman} />
            </div>
        </div>
    );
}
