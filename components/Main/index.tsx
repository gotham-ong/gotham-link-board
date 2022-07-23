import styles from './style.module.css'

type Props = {
    title: string;
    subtitle: string;
}

const Main = ({title, subtitle}: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>{title}</div>
            <p className={styles.subtitle}>{subtitle}</p>

        </div>
    )
}

export default Main;
