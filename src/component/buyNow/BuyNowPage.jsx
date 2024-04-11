import styles from "../buyNow/styles/buyNowPage.module.css";
import {Link} from "react-router-dom";
import Logo from "../../assets/logo.png";

const BuyNowPage = () =>{
    return (
        <>
            <body>
    
            <header>
                <div className={styles.bar}>
                    <div>
                        <Link to="/">
                            <img src={Logo} alt="Logo"/>
                        </Link>
                    </div>
                    <nav>
                        <ul className={styles.navBar}>
                            <li>
                                <Link className={styles.homeLink} to="/info">Info</Link>
                            </li>
                            <li>
                                <Link className={styles.homeLink} to="/billboard">Billboard</Link>
                            </li>
                            <li>
                                <Link className={styles.homeLink} to="/buynow">Buy now</Link>
                            </li>
                        </ul>
                    </nav>

                    <div className={styles.homeLeft}>

                        <svg className={styles.HomeRightBtn} width="22" height="24" viewBox="0 0 22 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.8889 14.4C17.4637 14.4001 18.9776 14.9971 20.1151 16.0664C21.2525 17.1357 21.9255 18.5949 21.9939 20.1396L22 20.4V21.6C22.0002 22.2055 21.7673 22.7887 21.3479 23.2327C20.9286 23.6766 20.3539 23.9486 19.7389 23.994L19.5556 24H2.44444C1.82774 24.0002 1.23375 23.7715 0.781552 23.3598C0.329353 22.9481 0.0523641 22.3838 0.00611125 21.78L0 21.6V20.4C9.09853e-05 18.8538 0.608107 17.3674 1.69725 16.2507C2.7864 15.1339 4.27258 14.4731 5.84589 14.406L6.11111 14.4H15.8889ZM11 0C12.6208 0 14.1752 0.632141 15.3212 1.75736C16.4673 2.88258 17.1111 4.4087 17.1111 6C17.1111 7.5913 16.4673 9.11742 15.3212 10.2426C14.1752 11.3679 12.6208 12 11 12C9.37923 12 7.82485 11.3679 6.67879 10.2426C5.53274 9.11742 4.88889 7.5913 4.88889 6C4.88889 4.4087 5.53274 2.88258 6.67879 1.75736C7.82485 0.632141 9.37923 0 11 0Z"
                                fill="white"/>
                        </svg>

                        <Link className={styles.HomeRightBtn} to="/login">
                            <button className={`${styles.homeBTN} ${styles.fBtn}`}>sign out</button>
                        </Link>


                    </div>
                </div>
            </header>

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
            </body>
        </>
    )
}

export {BuyNowPage}