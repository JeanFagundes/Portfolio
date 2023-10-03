import styles from './Card.module.scss';

interface Props {
    title: string;
    imageUrl: string;
    description: string;
}

export default function Card({ title, imageUrl, description }: Props) {
    return (
        <div className={styles.container}>
            <div className={styles.container__image}>
                <img src={imageUrl} alt="" />
            </div>

            <div className={styles.container__cardContent}>
                <div className={styles.container__title}>
                    <h2>{title}</h2>
                </div>
                <div className={styles.container__description}>
                    <p>{description}</p>
                </div>
            </div>

            <div className={styles.container__btn}>
                <div>
                    <p>
                        <a href="">Ver mais</a>
                    </p>
                </div>
                <div>
                    <p>
                        <a href="">View Code</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
