import styles from "../buyNow/styles/buyNowPage.module.css";
import {Link} from "react-router-dom";
import Footer from '../footer/Footer.jsx';
import Header from '../header/Header.jsx';

const SelectBillboardPage = () =>{
    return (
        <>
            <Header />

            <main className={styles.container}>
                <div className={styles.content}>
                    
               </div>
            </main>

            <Footer />
        </>
    )
}

export {SelectBillboardPage}