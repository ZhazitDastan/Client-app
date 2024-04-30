import styles from "../buyNow/styles/buyNowPage.module.css";
import {Link} from "react-router-dom";
import Footer from '../footer/Footer.jsx';
import Header from '../header/Header.jsx';

const BuyNowPage = () =>{
    return (
        <>
            <Header />

            <main className={styles.container}>
               <div className={styles.content}>
                <div className={styles.box}>
                    <p className={styles.mainText}>price packages</p>
                </div>
                <div className={styles.content1}>
                    <div className={styles.box1}>
                        <h2 className={`${styles.allText} ${styles.self1}`}> BULLETIN </h2>
                        <h2 className={`${styles.allText} ${styles.self1}`}> BILLBOARD </h2>
                        <div className={styles.line}></div>
                        <p>Type: Bulletin</p>
                        <p>Usage: Expressways</p>
                        <p>Located: Highways</p>
                        <span className={styles.price}>750$</span>
                        <div>
                        <Link to={"#"}>
                            <button className={styles.btn} type={"button"}> BUY NOW</button>
                        </Link>
                        </div>
                    </div>
                    <div className={styles.box1}>
                        <h2 className={`${styles.allText} ${styles.self2}`}> MOBILE </h2>
                        <h2 className={`${styles.allText} ${styles.self2}`}> BILLBOARD </h2>
                        <div className={styles.line}></div>
                        <p>Type: Mobile</p>
                        <p>Usage: on Wheels</p>
                        <p>Located: Changes</p>
                        <span className={styles.price}>3600$</span>
                        <div>
                            <Link to={"#"}>
                                <button className={styles.btn}  type={"button"}> BUY NOW</button>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.box1}>
                        <h2 className={`${styles.allText} ${styles.self3}`}> DIGITAL </h2>
                        <h2 className={`${styles.allText} ${styles.self3}`}> BILLBOARD </h2>
                        <div className={styles.line}></div>
                        <p>Type: Digital</p>
                        <p>Usage: In internet</p>
                        <p>Located: Web</p>
                        <span className={styles.price}>1200$</span>
                        <div>
                            <Link to={"#"}>
                                <button className={styles.btn} type={"button"}> BUY NOW</button>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.box1}>
                        <h2 className={`${styles.allText} ${styles.self4}`}> 3D </h2>
                        <h2 className={`${styles.allText} ${styles.self4}`}> BILLBOARD </h2>
                        <div className={styles.line}></div>
                        <p>Type: 3d</p>
                        <p>Usage: everywhere</p>
                        <p>Located: Center</p>

                        <div className={styles.priceBox}>
                            <span className={styles.price}>5000$</span>
                        </div>
                        
                    
                        <div>
                            <Link to={"#"}>
                                <button className={styles.btn} type={"button"}> BUY NOW</button>
                            </Link>
                        </div>
                    </div>
                </div>
               </div>
            </main>

            <Footer />
        </>
    )
}

export {BuyNowPage}