import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/footer.module.css';
import SDU_Logo from "../../assets/footer_SDU.png";
import Amazon from "../../assets/footer_Amazon.png";

const Footer = () => {
    return (
        <footer className={styles.homeFooter}>
            <div className={styles.footerContainer}>
                <div className={styles.footerContent}>
                    <div className={styles.footerTxtContent}>
                        <div className={styles.footerTxt}>
                            <ul>
                                <li className={styles.footerTag}>SOCIAL-MEDIA</li>
                                <Link className={styles.linkDec} to="#">
                                    <li className={styles.footerLink}>Instagram</li>
                                </Link>
                                <Link className={styles.linkDec} to="#">
                                    <li className={styles.footerLink}>Telegram</li>
                                </Link>
                                <Link className={styles.linkDec} to="#">
                                    <li className={styles.footerLink}>Meta</li>
                                </Link>
                            </ul>
                        </div>

                        <div className={styles.footerTxt}>
                            <ul>
                                <li className={styles.footerTag}>MAIN PAGE</li>
                                <Link className={styles.linkDec} to="/info">
                                    <li className={styles.footerLink}>INFO</li>
                                </Link>
                                <Link className={styles.linkDec} to="/billboard">
                                    <li className={styles.footerLink}>BILLBOARD</li>
                                </Link>
                                <Link className={styles.linkDec} to="/buynow">
                                    <li className={styles.footerLink}>BUY NOW</li>
                                </Link>
                            </ul>
                        </div>
                        <div className={styles.footerTxt}>
                            <p className={styles.footerTag}>ABOUT US</p>
                            <p className={styles.footerLink}>Seitkhan Bekseit</p>
                            <p className={styles.footerLink}>Billboard©</p>
                            <p className={styles.footerLink}>Est 2023 | All right reserved</p>
                        </div>

                        <div className={styles.footerTxt}>
                            <div className={styles.footerTxt1}></div>
                        </div>

                        <div className={styles.footerTxt}>
                            <img className={styles.footerImg} src={SDU_Logo} alt="SDU"/>
                            <img className={styles.footerImg} src={Amazon} alt="amazon"/>
                        </div>

                    </div>
                </div>
            </div>
            </footer>
    );
};

export {Footer};