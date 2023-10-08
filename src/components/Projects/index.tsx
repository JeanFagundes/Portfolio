import Card from './Card';
import styles from './Projects.module.scss';
import react from 'assets/react-js-icon.svg';

export default function ProjectsModule() {
    const projects = [
        {
            id: 1,
            title: 'Lou Bank',
            imageUrl: react,
            description:
                'Para construir este banco digital, utilizei um conjunto robusto de tecnologias e práticas modernas de desenvolvimento. O frontend foi desenvolvido com React e TypeScript, aproveitando a produtividade e a segurança proporcionadas por essas tecnologias. Além disso, adotei práticas de padronização de código com ESLint e Prettier para garantir a qualidade e a consistência do código-fonte. <br /><br />                Para gerenciar dados do usuário, integrei o Firebase, aproveitando o Firebase Authentication para autenticação segura e o Firestore para armazenar e recuperar dados de forma eficiente. Essa integração permitiu a criação de uma experiência de usuário fluida e em tempo real.<br /><br />                A estilização do aplicativo foi realizada com o uso do Sass, permitindo a criação de estilos elegantes e personalizados que se adaptam perfeitamente a dispositivos móveis. Além disso, o projeto se beneficia do uso do React Router para navegação suave entre páginas e do React Icons para adicionar ícones atraentes e funcionais.',
        },
        {
            id: 2,
            title: 'Movie Theater',
            imageUrl: react,
            description:
                'Com base na API do TMDB (The Movie Database), o aplicativo permite aos usuários explorar uma vasta coleção de filmes, obter informações detalhadas sobre suas produções favoritas e descobrir novos títulos para assistir. A integração com o TMDB proporciona acesso a dados atualizados e confiáveis sobre filmes de todas as épocas e gêneros. <br /><br /> A escolha de tecnologias como React e TypeScript garante uma interface de usuário interativa e responsiva, enquanto o Sass possibilita a criação de designs visualmente atraentes e personalizáveis. A comunicação com a API é feita de forma eficiente através do Axios, garantindo tempos de carregamento rápidos e uma experiência suave.<br /><br /> Além disso, meu compromisso com a qualidade do código é evidente no uso do ESLint e do Prettier, que mantêm o código limpo, organizado e livre de erros. O projeto é uma expressão do meu amor pelo cinema e meu desejo de criar soluções que aprimorem a maneira como desfrutamos de filmes.',
        },
        {
            id: 3,
            title: 'Automações',
            imageUrl: react,
            description:
                'Esse projeto é uma aplicação de automação projetada para simplificar tarefas que costumavam ser executadas manualmente. Utilizando Node.js, Selenium, csv-parser e Electron, criei uma ferramenta que permite importar listas de tarefas a partir de arquivos CSV e executá-las de forma eficiente.A automação oferece uma maneira rápida e confiável de realizar tarefas repetitivas, economizando tempo e minimizando erros. Esta aplicação é uma demonstração direta de como a tecnologia pode ser usada para aprimorar a eficiência e facilitar o trabalho diário.',
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
