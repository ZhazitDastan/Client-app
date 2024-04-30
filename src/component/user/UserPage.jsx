import styles from "../buyNow/styles/buyNowPage.module.css";
import {Link} from "react-router-dom";
import Footer from '../footer/Footer.jsx';
import Header from '../header/Header.jsx';
import { useEffect, useState } from "react";

const SelectBillboardPage = () =>{
    
    const [username, setUsername] = useState("")
    const [item, setItem] = useState("")

    useEffect(() => {
        setItem(localStorage.getItem("token"))
        fetchContent()
    }, [])

    async function fetchContent() {
        const res =  await fetch("http://localhost:8080/secured/user",{
            method:"POST",
            headers:{"Content-Type":"application/json", "Authorization" : "Bearer " + localStorage.getItem("token")},
            body:JSON.stringify(formData)
        })
        console.log("Form was submitted")
        if(res.ok) {
            const json = await res.text()
            setUsername(json)
        }
    }

    return (
        <>
            <Header />

            <main className={styles.container}>
                <div className={styles.content}>
                    {
                        item !== null ?
                        <p>Signed in as {username}</p> :
                        <p>UNAUTHORIZED</p>
                    }
               </div>
            </main>

            <Footer />
        </>
    )
}

export {SelectBillboardPage}