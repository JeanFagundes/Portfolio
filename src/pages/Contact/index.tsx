import styles from './Contact.module.scss';

export default function Contact() {
    return (
        <div className={styles.container}>
            <h1>
                Para marcar uma conversa, pode entrar em contato comigo pelo email ou
                Whatsapp
            </h1>
            <p>Jean-cabral@hotmail.com</p>
            <p>11 95440-6674</p>
        </div>
    );
}
