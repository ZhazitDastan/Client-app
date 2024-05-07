import styles from "../buyNow/styles/buyNowPage.module.css";
import {Link, Navigate, useLocation} from "react-router-dom";

const PricePackagesPage = () =>{
    // const location = useLocation();
    // const selectedBillboard = location.state ? location.state.selectedBillboard : null;

    // if (!selectedBillboard) {
    //     // Option 1: Redirect to a default page or
    //     // Option 2: Display a message or handle the lack of data appropriately
    //     return <Navigate to="/" />; // Redirect to homepage or a specific route
    //     // return <div>No billboard selected.</div>; // or show a message
    //   }

    return (
        <>
            <main className={styles.container}>
               <div className={styles.content}>
                <div className={styles.box}>
                    <p className={styles.mainText}>price packages</p>
                </div>
                <div className={styles.content1}>
                    <div className={styles.box1}>
                        <h2 className={`${styles.allText} ${styles.self1}`}> WEEKLY </h2>
                        <h2 className={`${styles.allText} ${styles.self1}`}> PACKAGE </h2>
                        <div className={styles.line}></div>
                        <p className={styles.paragraphStyle}>Benefit: Perfect for short-term campaigns or events. Immediate exposure to high traffic areas.</p>
                        {/* <p>Usage: Expressways</p>
                        <p>Located: Highways</p> */}
                        <div className={styles.priceBox}>
                            <span className={styles.price}>500$</span>
                        </div>
                        <div>
                        <Link to={"#"}>
                            <button className={styles.button85} type={"button"}> BUY NOW</button>
                        </Link>
                        </div>
                    </div>
                    <div className={styles.box1}>
                        <h2 className={`${styles.allText} ${styles.self2}`}> MONTHLY </h2>
                        <h2 className={`${styles.allText} ${styles.self2}`}> PACKAGE </h2>
                        <div className={styles.line}></div>
                        <p className={styles.paragraphStyle}>Benefit: Extended visibility for your brand. Ideal for sustained campaigns or product launches.</p>
                        
                        <div className={styles.priceBox}>
                            <span className={styles.price}>1500$</span>
                        </div>

                        <div>
                            <Link to={"#"}>
                                <button className={styles.button85}  type={"button"}> BUY NOW</button>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.box1}>
                        <h2 className={`${styles.allText} ${styles.self3}`}> 3-MONTH </h2>
                        <h2 className={`${styles.allText} ${styles.self3}`}> PACKAGE </h2>
                        <div className={styles.line}></div>
                        <p className={styles.paragraphStyle}>Benefit: Cost-effective option for longer campaigns. Covers multiple seasons for maximum impact.</p>
                        
                        <div className={styles.priceBox}>
                            <span className={styles.price}>4000$</span>
                        </div>

                        <div>
                            <Link to={"#"}>
                                <button className={styles.button85} type={"button"}> BUY NOW</button>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.box1}>
                        <h2 className={`${styles.allText} ${styles.self4}`}> YEARLY </h2>
                        <h2 className={`${styles.allText} ${styles.self4}`}> PACKAGE </h2>
                        <div className={styles.line}></div>
                        <p className={styles.paragraphStyle}>Benefit:Comprehensive coverage for a full year. Ensures consistent brand presence and visibility.</p>
                        
                        <div className={styles.priceBox}>
                            <span className={styles.price}>12000$</span>
                        </div>
                                            
                        <div>
                            <Link to={"#"}>
                                <button className={styles.button85} type={"button"}> BUY NOW</button>
                            </Link>
                        </div>
                    </div>
                </div>
               </div>
            </main>
        </>
    )
}

export {PricePackagesPage}