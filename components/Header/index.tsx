import styles from "./style.module.css";

type Props = {
    BackGroundColorContainer: string;
};

const Header = ({ BackGroundColorContainer }: Props) => {
    return (
        <div
            className={styles.container}
            style={{ backgroundColor: BackGroundColorContainer }}
        >
            <div className={styles.header}>
                <div className={styles.logo}>Gothan Link Board</div>
                <div className={styles.user}></div>
            </div>
        </div>
    );
};

export default Header;
