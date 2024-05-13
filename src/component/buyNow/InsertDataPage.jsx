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
    const [chosenDate, setChosenDate] = useState('');

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

    const [image, setImage] = useState(null);

    const handleChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleDateChange = (event) => {
        setChosenDate(event.target.value);
    };

    const addYear = () => {
        if (chosenDate) {
          const dateObj = new Date(chosenDate);
          dateObj.setFullYear(dateObj.getFullYear() + 1);
          const newDate = dateObj.toISOString().split('T')[0];
          return newDate;
        }
        return '';
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
                            <div style={{marginBottom:'10px'}} className={styles.insertDataPriceInfo}>Choose date for billboard display</div>
                            <div className={styles.chooseDateContainer}> 
                                <div className={styles.insertDataDate}>
                                <input type="date" id="datePicker" name="datePicker" value={chosenDate} onChange={handleDateChange}/>
                                </div>
                                <div className={styles.startEndDateContainer}>
                                    <div className={styles.startDate}><div className={styles.startEndDate}>Start date: </div> {chosenDate && <p className={styles.startDateText}>{chosenDate}</p>} </div>
                                    <div className={styles.startDate}><div className={styles.startEndDate}>End date: </div> {chosenDate && <p className={styles.startDateText}>{addYear()}</p>} </div>
                                </div>
                            </div>
                            <input type="file" onChange={handleChange} />
                            {image && <img src={image} alt="Uploaded" style={{ maxWidth: '100px' }} />}
                        </div>
                    </div>
                    <Link to={"/buynow/payment"}>
                        <button className={styles.buttonFinal} style={{ marginTop: '15px'}}>BUY NOW</button>
                    </Link>
               </div>
            </main>
        </>
    )
}

export {InsertDataPage};