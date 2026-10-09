import styles from "./Header.module.css";
import logo from "../../assets/logo.png";

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={logo} alt="Logo Melodía Online" />
                <h1>Melodía Online</h1>
            </div>
        </header>
    );
}

export default Header;