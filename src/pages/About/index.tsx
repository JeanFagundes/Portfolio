import styles from './About.module.scss';

export default function About() {
    const workObject = [
        {
            id: 1,
            cargo: 'Analista de suporte - Universo Online',
            periodo: 'out de 2021 - atualmente',
            description:
                'Minha função como Analista de Suporte no UOL se concentrava na otimização da eficiência operacional. Isso envolveu a criação de automações usando JavaScript e Selenium para eliminar tarefas repetitivas que anteriormente eram executadas manualmente. Além disso, desenvolvi scripts Shell personalizados para homologação de equipamentos e implementei melhorias de processos que reduziram significativamente nosso tempo médio de resolução.',
        },
        {
            id: 2,
            cargo: 'Desenvolvedor Freelancer',
            periodo: 'jun de 2022 - atualmente',
            description:
                'Como Desenvolvedor Freelancer, trabalhei em projetos de desenvolvimento web sob demanda. Isso me permitiu adaptar minhas habilidades para atender às necessidades específicas dos clientes e cumprir prazos estipulados. Trabalhar de forma independente me proporcionou uma visão única do mundo dos negócios e reforçou minha habilidade de comunicação e gestão de projetos.',
            projects: [
                {
                    id: 1,
                    title: 'Projeto 1: Criação de landing page para venda de cursos',
                    description:
                        'Para este projeto, fui responsável pela concepção e desenvolvimento de uma landing page responsiva para promover cursos. Minha abordagem se concentrou em criar um design atraente e responsivo, juntamente com conteúdo persuasivo, para maximizar as conversões. O resultado foi uma landing page que atraiu a atenção do público-alvo, apresentou os cursos de forma clara e eficaz, e aumentou significativamente as taxas de conversão.',
                },
                {
                    id: 2,
                    title: 'Projeto 2: Desenvolvimento de Chatbot para automatização de atendimento',
                    description:
                        'Neste projeto, desenvolvi um chatbot personalizado para automatizar o agendamento de serviços em uma barbearia, que anteriormente era realizado manualmente. O chatbot foi projetado para simplificar o processo de reserva, oferecendo aos clientes uma maneira conveniente de marcar horários.                    Como resultado, o sistema de agendamento agora opera de forma autônoma, eliminando a necessidade de monitoramento manual por parte dos clientes. Isso não apenas melhorou a eficiência operacional da barbearia, mas também aprimorou a experiência do cliente, resultando em feedback positivo e economia significativa de tempo para ambos os clientes e equipe.',
                },
            ],
        },
    ];

    const formationObject = {
        id: 1,
        title: 'Análise e Desenvolvimento de Sistemas',
        academy: 'Senac - Santo Amaro',
        period: '2020 - 2023',
        description:
            'Minha formação acadêmica inclui o curso de Análise e Desenvolvimento de Sistemas pelo Senac, concluído com sucesso em 2023. Durante o curso, adquiri conhecimentos sólidos em desenvolvimento de software, arquitetura de sistemas e boas práticas de programação. Essa base educacional tem sido fundamental para minha carreira como desenvolvedor full-stack web e me ajudou a enfrentar desafios técnicos de maneira eficaz.',
    };

    return (
        <div className={styles.container}>
            <div className={styles.container__aboutMe}>
                <h1>Sobre mim</h1>
                <p>
                    Olá! Me chamo Jean Fagundes, sou desenvolvedor full-stack web com
                    expertise em React, Sass, Node e TypeScript. Com 2 anos de
                    experiência, tenho uma sólida habilidade em criar interfaces de
                    usuário responsivas e servidores escaláveis. Estou sempre em busca de
                    desafios emocionantes e oportunidades de colaboração. Vamos trabalhar
                    juntos para transformar ideias em realidade.
                </p>
            </div>

            <div className={styles.container__workExperience}>
                <h1>Experiência de trabalho</h1>
                {workObject.map((item) => (
                    <div key={item.id} className={styles.container__jobRole}>
                        <div>
                            <h2>{item.cargo}</h2>
                            <p>{item.periodo}</p>
                        </div>
                        <p className={styles.container__description}>
                            {item.description}
                        </p>
                        {item.projects &&
                            item.projects.map((project) => (
                                <div
                                    key={project.id}
                                    className={styles.container__projects}>
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                </div>
                            ))}
                    </div>
                ))}
            </div>

            <div className={styles.container__formation}>
                <h1>Formação</h1>
                <div>
                    <h2>{formationObject.title}</h2>
                    <p>{formationObject.academy}</p>
                    <p>{formationObject.period}</p>
                </div>
                <p>{formationObject.description}</p>
            </div>
        </div>
    );
}
