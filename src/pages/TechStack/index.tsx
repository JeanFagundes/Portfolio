import styles from './TechStack.module.scss';
import TechStackModule from 'components/TechStackModule';

export default function TechStack() {
    return (
        <div className={styles.container}>
            <div className={styles.container__moduleTechStack}>
                <TechStackModule option={'technologie'} />
            </div>
            <div className={styles.container__technologiesText}>
                <h2>Tecnologias em Foco</h2>
                <p>
                    Tenho uma sólida experiência no desenvolvimento full-stack de
                    aplicações web, com um foco especial em tecnologias modernas que
                    impulsionam o desempenho e a eficiência. Durante minha carreira,
                    trabalhei extensivamente com React, Node.js e TypeScript para criar
                    aplicativos web robustos e escaláveis. <br />
                    <br /> Utilizando o React, construí interfaces de usuário dinâmicas e
                    responsivas que proporcionam uma experiência de usuário excepcional.
                    Minha familiaridade com o Node.js permitiu-me desenvolver servidores
                    eficientes e escaláveis, além de APIs RESTful de alto desempenho.{' '}
                    <br />
                    <br /> Além disso, sou um entusiasta do TypeScript, aproveitando seu
                    sistema de tipos estáticos para garantir a segurança e a
                    manutenibilidade do código em todos os projetos. O uso do Sass me
                    permitiu criar estilos elegantes e modularizados, facilitando a
                    manutenção e a personalização dos estilos de aplicativos. <br />
                    <br /> Na área de testes e documentação, sou proficiente no uso do
                    Postman para testar APIs. E minha experiência com bancos de dados
                    inclui o gerenciamento e a otimização de bancos de dados MySQL,
                    garantindo que os aplicativos tenham acesso a dados rápidos e
                    confiáveis. <br />
                    <br />
                    No geral, minha abordagem de desenvolvimento é focada na entrega de
                    soluções de alta qualidade, mantendo um código limpo e bem
                    documentado. Estou constantemente atualizando minhas habilidades para
                    acompanhar as últimas tendências e tecnologias no mundo do
                    desenvolvimento web, e estou ansioso para aplicar minha experiência em
                    projetos futuros.
                </p>
            </div>
        </div>
    );
}
