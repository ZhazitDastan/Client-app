import styles from './styles/homePage.module.css'
import {Link} from "react-router-dom";
import HomeLogo from "/src/assets/main_LOGO.png"

const HomePage = () =>{
    
    return (
        <>
            <div className={styles.homeContainer}>
                <div className={styles.homeTxTPosition}>
                    <p className={styles.homeText}> HOME </p>
                </div>
                <div className={styles.getStarted}>
                    <Link to="/login">
                        <button className={`${styles.pngBtn} ${styles.PNGbtn}`}>Get Started</button>
                    </Link>
                    <p className={styles.homeTxt}> Here you can information about our project.</p>
                </div>
            </div>
           
            <main className={styles.homeMain}>
                <div className={styles.sectionMain}>
                    <div className={styles.contentWrapper}>
                        <div className={styles.textWrapper}>
                            <p className={styles.Tag}>INFO</p>
                            <p className={styles.MainTxt}>We are a company that receives<br/> people on our
                                billboard</p>
                            <p className={styles.MainTxt2}>The basic idea of our project is to make billboards
                                accessible to simple users.</p>
                            <Link to="/info">
                                <button className={styles.mainBtn}>LEARN MORE</button>
                            </Link>
                        </div>
                        <div className={styles.space}></div>
                        <div className={styles.textWrapper}>
                            <p className={styles.Tag}>JOIN OUR TEAM</p>
                            <p className={styles.MainTxt}>Buy now</p>
                            <p className={styles.MainTxt2}>Choose one of our products and enjoy.</p>
                            <Link to="/buynow">
                                <button className={styles.mainBtn}>BUY NOW</button>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.imageWrapper}>
                        <img className={styles.homeLogo} src={HomeLogo} alt="logo"/>
                    </div>
                </div>
            </main>
        </>
    )
}

export {HomePage}