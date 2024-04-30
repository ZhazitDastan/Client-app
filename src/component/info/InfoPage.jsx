import styles from "./styles/infoPage.module.css";
import {Link} from "react-router-dom";
import Logo from "../../assets/logo.png";
import SDU_Logo from "../../assets/footer_SDU.png";
import Amazon from "../../assets/footer_Amazon.png";
import Info1 from "../../assets/info1.png"
import mainSDU from "../../assets/main_SDU.png"
import SDU from "../../assets/main_LOGO.png";
import Header from '../header/Header.jsx';
import Footer from '../footer/Footer.jsx';

const InfoPage = () => {
    return (
        <>
            <Header />

            <main className={styles.main}>
                <div className={styles.mainContent}>
                    <img src={Info1} alt="main"/>
                    <div>
                        <p className={styles.Tag}>INFO</p>
                        <p className={styles.MainTxt}>PRODUCTS</p>
                        <p className={styles.MainTxt2}>Our product are high quality works.</p>
                        <Link to="/buynow">
                            <button className={styles.mainBtn}>BUY NOW</button>
                        </Link>
                        <div className={styles.mainSpace}></div>
                        <div>
                            <p className={styles.Tag}>INFO</p>
                            <p className={styles.MainTxt}>BASE</p>
                            <p className={styles.MainTxt2}>We were founded in 2023 as a team of smart
                                and<br/> talented programmers fro SDU.</p>
                            <Link to="/info">
                                <button className={styles.mainBtn}>LEARN MORE</button>
                            </Link>
                        </div>
                    </div>
                    <img src={mainSDU} alt="mainSdu"/>
                </div>

                <div className={styles.mainCenter}>
                    <div>
                        <p className={styles.Tag}>JOIN OUR TEAM</p>
                        <p className={styles.MainTxt}>Buy now</p>
                        <p className={styles.MainTxt2}>Chose one of our product and enjoy</p>
                        <Link to="/buynow">
                            <button className={styles.mainBtn}>BUY NOW</button>
                        </Link>
                    </div>
                    <div className={styles.rightPng}>
                        <img src={SDU} alt="SDU"/>
                    </div>
                </div>


            </main>


            <Footer />
        </>

    )
}

export {InfoPage}