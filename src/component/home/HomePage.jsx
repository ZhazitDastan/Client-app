import styles from './styles/homePage.module.css'
import {Link} from "react-router-dom";
import Logo from "/src/assets/logo.png"
import HomeLogo from "/src/assets/main_LOGO.png"
import Header from '../header/Header.jsx';
import Footer from '../footer/Footer.jsx';

const HomePage = () =>{
    
    return (
        <>
            <Header />
           
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
            
            <Footer />
        </>
    )
}

export {HomePage}