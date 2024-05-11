import { useEffect, useState } from "react";
import styles from "../buyNow/styles/buyNowPage.module.css";
import {Link, useLocation, useNavigate} from "react-router-dom";
import { useToasts } from "react-toast-notifications";

const PricePackagesPage = () =>{
    const {addToast} = useToasts();
    const navigate = useNavigate();
    const location = useLocation();
    const selectedBillboard = location.state;

    const [pricePackages, setPricePackages] = useState([]);
    const [billboardPricePackage, setBillboardPricePackage] = useState([]);

    useEffect(() => {
        if(localStorage.getItem("role") !== "USER"){
            addToast("Please first log in", {appearance:"error"});
            navigate("/login");
        }
    }, []);

    useEffect(() => {
        fetch("http://localhost:8080/api/v1/price_packages/all_price_package", {
            method:'GET',
            headers:{"Content-Type":"application/json"}
        })
        .then(response => response.json())
        .then(data => setPricePackages(data))
        .catch(error => console.error('Error fetching price packages', error));
    }, []);

    const handleClick = () => {

    }

    return (
        <>
            <main className={styles.container}>
               <div className={styles.content}>
                <div className={styles.box}>
                    <p className={styles.mainText}>price packages</p>
                </div>
                <div className={styles.content1}>
                {pricePackages.map((pricePackage, index) => (
                    <div className={styles.box1} key={pricePackage.id}>
                        <h2 className={`${styles.allText} ${styles[`self${index+1}`]}`}>{pricePackage.name}</h2>
                        <h2 className={`${styles.allText} ${styles[`self${index+1}`]}`}> PACKAGE </h2>
                        <div className={styles.line}></div>
                        <p className={styles.paragraphStyle}>{pricePackage.description}</p>
                        <div className={styles.priceBox}>
                            <span className={styles.price}>{pricePackage.price}$</span>
                        </div>
                        <div>
                        <Link to={"/buynow/insert"} state={[selectedBillboard, pricePackage]}>
                            <button className={styles.button85} type={"button"} onClick={handleClick}> BUY NOW</button>
                        </Link>
                        </div>
                    </div>
                ))}
                </div>
               </div>
            </main>
        </>
    )
}

export {PricePackagesPage}