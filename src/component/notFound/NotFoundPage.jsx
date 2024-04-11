import styles from './styles/notFoundPage.module.css';
import ErrorPNG from '/src/assets/error-404.png'
import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <body className={styles.error}>
            <div className={styles.notFound}>
                <div className={styles.errorImage}>
                <img src={ErrorPNG} alt=""/>
                </div>
                <h1 className={styles.errorText}>PAGE NOT FOUND !!!</h1>
                <Link to="/">
                    <button  className={styles.errorBtn}>Back To Home</button>
                </Link>
            </div>
        </body>
    )
}

export {NotFoundPage}