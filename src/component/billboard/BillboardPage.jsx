import styles from "./styles/billboardPage.module.css";
import {Link} from "react-router-dom";
import Main1 from "../../assets/billboard1.png";
import Main2 from "../../assets/billboard2.png";
import mainSDU from "../../assets/main_SDU.png"
import SDU from "../../assets/main_LOGO.png"
import Footer from '../footer/Footer.jsx';
import Header from '../header/Header.jsx';

const BillboardPage = () =>{ 
    return (
        <>
            <Header />

            <div className={styles.homeContainer}>
                <div className={styles.homeTxTPosition}>
                    <p className={styles.homeText}> BIllBOARD </p>
                </div>
                <div className={styles.getStarted}>
                    <Link to="/login">
                        <button className={`${styles.pngBtn} ${styles.PNGbtn}`}>Get Started</button>
                    </Link>
                    <p className={styles.homeTxt}> Here you can information about our project.</p>
                </div>
            </div>

            <main className={styles.main}>
                <div className={styles.mainContent}>
                    <img src={Main1} alt="main"/>
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
                </div>

                <div className={styles.mainCenter}>
                    <div>
                        <p className={styles.Tag}>INFO</p>
                        <p className={styles.MainTxt}>We are a company that</p>
                        <p className={styles.MainTxt}>receive people our </p>
                        <p className={styles.MainTxt}>billboard</p>
                        <p className={styles.MainTxt2}>Basic of our project is make a billboard<br/> accessible to
                            simple user.</p>
                        <Link to="/buynow">
                            <button className={styles.mainBtn}>LEARN MORE</button>
                        </Link>
                    </div>
                    <img src={Main2} alt=""/>
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
                        <div className={styles.mainSpace}></div>
                        <img src={mainSDU} alt="SDU"/>
                    </div>
                </div>                
            </main>

            <Footer />
        </>
)
}

export {BillboardPage}