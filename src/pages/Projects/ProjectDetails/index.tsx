import { useLocation } from 'react-router-dom';
import styles from './ProjectDetails.module.scss';
import { Carousel } from 'react-responsive-carousel';
import { dataBank, movieTheater } from './dataBank';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { QRCodeSVG } from 'qrcode.react';

interface props {
    id: number;
    imageUrl: string;
}
export default function ProjectDetail() {
    const location = useLocation();

    // console.log(title);
    const { title, description, page } = location.state;

    const descriptionHTML = { __html: description };

    let gallery: props[] = [];

    if (title === 'Lou Bank') {
        gallery = dataBank;
    } else if (title === 'Movie Theater') {
        gallery = movieTheater;
    }
    return (
        <div className={styles.container}>
            <div className={styles.container__apresentation}>
                <h2>{title}</h2>
                <p dangerouslySetInnerHTML={descriptionHTML}></p>
            </div>
            {page && (
                <div className={styles.container__qrCodeContainer}>
                    <p>
                        Está aplicação foi criada para aplicativo mobile, para acessar a
                        aplicação escaneie o QR Code.
                    </p>
                    <QRCodeSVG value={page} size={200}>
                        ola
                    </QRCodeSVG>
                </div>
            )}

            <div className={styles.container__carouselBackground}>
                <div className={styles.container__carousel}>
                    <Carousel
                        className={styles.container__carousel1}
                        showArrows={true}
                        showStatus={true}
                        showIndicators={true}
                        infiniteLoop={true}
                        showThumbs={true}
                        useKeyboardArrows={true}>
                        {gallery.map((project) => {
                            return (
                                <div
                                    key={project.id}
                                    className={styles.container__photos}>
                                    <img src={project.imageUrl} alt="" />
                                </div>
                            );
                        })}
                    </Carousel>
                </div>
            </div>
        </div>
    );
}
