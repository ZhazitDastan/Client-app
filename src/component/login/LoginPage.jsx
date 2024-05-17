import styles from "./styles/login.module.css";
import {Link, useLocation, useNavigate} from "react-router-dom";
import mainSDU from "../../assets/main_SDU.png"
import mainAmazon from "../../assets/main_amazon.png"
import mainBillboard from "../../assets/main_LOGO.png"
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useToasts } from "react-toast-notifications";

const LoginPage = () =>{

    const navigate = useNavigate();
    const location = useLocation();
    const {addToast} = useToasts();

    const [formData, setFormData] = useState({
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
        localStorage.clear();
        try {
            const res = await fetch("http://localhost:8080/auth/signin",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(formData)
            })
            if(res.ok) {
                const token = await res.text()
                localStorage.setItem("token", token)
                const decodedToken = jwtDecode(token)
                localStorage.setItem("role", decodedToken.role)
                navigate("/billboard")
                addToast("Welcome", {appearance:"success"})
            }
            else {
                console.error('HTTP Error:', res.status);
                addToast("Sign in error", {appearance:"error"})
                // alert("Signup failed: " + (await res.text()));
            }
        }
        catch (error) {
            console.error('Network or other error:', error); 
            // alert("Signup failed: " + error.message);
            addToast("Sign in error", {appearance:"error"})
        }
    }

    return(
        <>
            <main>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <div className={styles.login}>
                            <img src={mainBillboard} alt="logo"/>
                            <form className={styles.loginForm} onSubmit={handleSubmit}>
                                <input className={styles.inputWithIcon1} onChange={handleChange} type="text" name="username" value={formData.username} placeholder="Username" autoComplete="off"/>
                                <input className={styles.inputWithIcon2} onChange={handleChange} type="password" name="password" value={formData.password} placeholder="Password" autoComplete="off"/>
                                <button className={`${styles.btn} ${styles.btn1}`} type="submit">sign in</button>
                                <div className={styles.content} style={{marginTop:'15px'}}>
                                    <Link className={styles.link}>Forgot password?</Link>
                                    <Link className={styles.link} to="/registration">Sign Up</Link>
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

export {LoginPage}