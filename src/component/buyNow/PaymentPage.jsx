import { useEffect, useState } from "react";
import styles from "../buyNow/styles/buyNowPage.module.css";
import {Link, useLocation, useNavigate} from "react-router-dom";
import { useToasts } from "react-toast-notifications";

const PaymentPage = () =>{

    const navigate = useNavigate();
    const {addToast} = useToasts();

    const [paymentDetails, setPaymentDetails] = useState({
        cardNumber: '',
        cardHolder: '',
        expiryMonth: '',
        expiryYear: '',
        cvv: ''
    });

    const handleChange = (e) => {
        setPaymentDetails({
            ...paymentDetails,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(paymentDetails);
        addToast('Payment processed!', {appearance:"success"}); 
        navigate("/");
    };

    return (
        <>
            <main className={styles.container}>
                <div className={styles.mainContent}>
                    <div className={styles.box}>
                        <p className={styles.mainText}>Enter Payment Details</p>
                    </div>
                    <div className={styles.insertDataContainer}>
                        <form onSubmit={handleSubmit}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="cardNumber">Card Number:</label>
                                    <input type="text" id="cardNumber" name="cardNumber" value={paymentDetails.cardNumber} onChange={handleChange} required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="cardHolder">Card Holder:</label>
                                    <input type="text" id="cardHolder" name="cardHolder" value={paymentDetails.cardHolder} onChange={handleChange} required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="expiryMonth">Expiry Month:</label>
                                    <input type="text" id="expiryMonth" name="expiryMonth" value={paymentDetails.expiryMonth} onChange={handleChange} required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="expiryYear">Expiry Year:</label>
                                    <input type="text" id="expiryYear" name="expiryYear" value={paymentDetails.expiryYear} onChange={handleChange} required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="cvv">CVV:</label>
                                    <input type="password" id="cvv" name="cvv" value={paymentDetails.cvv} onChange={handleChange} required />
                                </div>
                                <button type="submit" className={styles.submitButton}>Submit Payment</button>
                        </form>
                    </div>
                </div>
            </main>
        </>
    )
}

export {PaymentPage}