import styles from "../buyNow/styles/buyNowPage.module.css";
import {Link, useLocation, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import { useToasts } from "react-toast-notifications";
import AkkentBillboard from "../../assets/billboardImages/AkkentBillboard.png";
import ToleBiBillboard from "../../assets/billboardImages/ToleBiBillboard.png";
import ShalyapinaBillboard from "../../assets/billboardImages/ShalyapinaBillboard.png";
import ZhandosovaBillboard from "../../assets/billboardImages/ZhandosovaBillboard.png";
import NazarbayevBillboard from "../../assets/billboardImages/NazarbayevBillboard.png";

const InsertDataPage = () =>{
    
    const navigate = useNavigate();
    const { addToast } = useToasts();
    const location = useLocation();
    const selectedBillboard = location.state[0];
    const selectedPricePackage = location.state[1];

    useEffect(() => {
        if(localStorage.getItem("role") !== "USER"){
            addToast("Please first log in", {appearance:"error"})
            navigate("/login")
        }
    }, [])

    const imageMap = {
        AkkentBillboard: AkkentBillboard,
        ToleBiBillboard: ToleBiBillboard,
        ShalyapinaBillboard: ShalyapinaBillboard,
        ZhandosovaBillboard: ZhandosovaBillboard,
        NazarbayevBillboard: NazarbayevBillboard
    };

    return (
        <>
            <main className={styles.container}>
                <div className={styles.mainContent}>
                    <div className={styles.box}>
                        <p className={styles.mainText}>insert your data</p>
                    </div>
                    <img
                        src={imageMap[selectedBillboard.name]}
                        alt={`Marker Image ${selectedBillboard.name}`}
                        style={{ width: "1000px", height: "400px", objectFit: "cover", borderRadius: "20px", marginTop: "60px"}}
                    />
                    <div className={styles.insertDataContainer}>
                        <div className={styles.insertDataContent}>
                            <div className={styles.insertDataLocation}>
                                <div className={styles.purples}>{selectedBillboard.location}</div>
                            </div>
                            <div className={styles.insertDataText}>{selectedBillboard.description}</div>
                            <div className={styles.insertDataPrice}>
                                <div className={styles.insertDataPriceInfo}>{selectedPricePackage.name} PACKAGE</div>
                                <div className={styles.insertDataPriceInfo}>${selectedPricePackage.price}</div>
                            </div>
                        </div>
                        <div className={styles.verticalLine}></div>
                        <div className={styles.insertDataContent}>
                            <div className={styles.grays}>Location</div>
                        </div>
                    </div>
               </div>
            </main>
        </>
    )
}

export {InsertDataPage};