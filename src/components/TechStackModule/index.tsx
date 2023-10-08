import styles from './TechStack.module.scss';
import react from 'assets/react-js-icon.svg';
import node from 'assets/node-js-icon.svg';
import typescript from 'assets/typescript.svg';
import sass from 'assets/sass-icon.svg';
import mysql from 'assets/mysql-icon.svg';
import vscode from 'assets/visual-studio-code-icon.svg';
import git from 'assets/git-icon.svg';
import postman from 'assets/postman-icon.svg';

interface props {
    option: 'home' | 'technologie';
}
export default function TechStackModule({ option = 'home' }: props) {
    const styleOption =
        option === 'home' ? styles.container__home : styles.container__technologie;

    const object = {
        title: '',
        flexBox: '',
    };

    if (option === 'home') {
        object.title = styles.container__home__title;
        object.flexBox = styles.container__home__flexBox;
    } else {
        object.title = styles.container__technologie__title;
        object.flexBox = styles.container__technologie__flexBox;
    }
    return (
        <div className={styleOption}>
            <div className={object.title}>
                <h2>Tecnologias em Foco</h2>
                <p>Tecnologias que eu tenho trabalhado recentemente</p>
            </div>
            <div className={object.flexBox}>
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
