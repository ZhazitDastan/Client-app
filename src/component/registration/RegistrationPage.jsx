import styles from "../registration/styles/registrationPage.module.css";
import {Link} from "react-router-dom";
import Logo from "../../assets/logo.png";
import mainBillboard from "../../assets/main_LOGO.png";
import mainSDU from "../../assets/main_SDU.png";
import mainAmazon from "../../assets/main_amazon.png";
import { useState } from "react";
import React from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationPage = () =>{

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        // surname: '',
        email: '',
        username: '',
        password: '',
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData(prevState => ({
            ...prevState, [name]:  value,
        }));
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        try {
            const res = await fetch("http://localhost:8080/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });
            if (res.ok) {
                alert("Success");
                navigate("/login");
            } else {
                console.error('HTTP Error:', res.status); 
                alert("Signup failed: " + (await res.text()));
            }
        } catch (error) {
            console.error('Network or other error:', error); 
            alert("Signup failed: " + error.message);
        }
    }

    return (
        <>
            <main>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <div className={styles.login}>
                            <img src={mainBillboard} alt="logo"/>
                            <form className={styles.loginForm} onSubmit={handleSubmit} >
                                {/* <div> */}
                                    <input className={styles.inputWithIcon1} type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" autoComplete="off"/>
                                    {/* <input className={styles.inputWithIcon1} type="text" name="surname" value={formData.surname} onChange={handleChange} placeholder="Surname"/> */}
                                {/* </div> */}
                                <input className={styles.inputWithIcon1} type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" autoComplete="off"/>
                                <input className={styles.inputWithIcon1} type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username"autoComplete="off"/>
                                <input className={styles.inputWithIcon2} type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" autoComplete="off"/>
                                <button className={`${styles.btn} ${styles.btn1}`} type="submit">sign up</button>
                                <div className={styles.content2} style={{marginTop:'15px'}}>
                                    <p style={{display:'inline', color:'#fff', marginRight: '10px'}}>Have an account?</p>
                                    <Link className={styles.link} to="/login">Sign in</Link>
                                </div>
                            </form>
                        </div>

                        <div className={styles.login}>
                            <img src={mainSDU} alt="SDU"/>
                            <img src={mainAmazon} alt="AMAZON"/>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export {RegistrationPage}