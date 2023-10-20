import { useLocation, useParams } from 'react-router-dom';
import styles from './ProjectDetails.module.scss';
import { Carousel } from 'react-responsive-carousel';
import { dataBank } from './dataBank';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
export default function ProjectDetail() {
    const { id } = useParams();
    const location = useLocation();

    // console.log(title);
    const { title, description } = location.state;

    const descriptionHTML = { __html: description };

    return (
        <div className={styles.container}>
            <h2>{title}</h2>
            <p dangerouslySetInnerHTML={descriptionHTML}></p>

            <div className={styles.container__carousel}>
                <Carousel
                    className={styles.container__carousel1}
                    showArrows={true}
                    showStatus={true}
                    showIndicators={true}
                    infiniteLoop={true}
                    showThumbs={true}>
                    {dataBank.map((project) => {
                        return (
                            <div key={project.id}>
                                <img src={project.imageUrl} alt="" />
                            </div>
                        );
                    })}
                </Carousel>
            </div>
        </div>
    );
}
