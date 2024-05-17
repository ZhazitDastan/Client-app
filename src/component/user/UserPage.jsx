import styles from "./styles/userPage.module.css";
import { useEffect, useState } from "react";

const UserPage = () => {
    const [userData, setUserData] = useState({
        username: "",
        email: "",
    });
    const [token, setToken] = useState("");
    const [photoUrl, setPhotoUrl] = useState("");
    const [showDeleteIcon, setShowDeleteIcon] = useState(false); 

    useEffect(() => {
        const token = localStorage.getItem("token");
        setToken(token);
        if (token) {
            fetchUserData();
        }
    }, []);

    async function fetchUserData() {
        try {
            const res = await fetch("http://localhost:8080/api/v1/users", {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token
                }
            });
            if (res.ok) {
                const json = await res.json();
                setUserData({
                    username: json.username,
                    email: json.email,
                });
                if (json.photoUrl) {
                    setPhotoUrl(json.photoUrl);
                }
            } else {
                console.error("Failed to fetch user data");
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setPhotoUrl(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handlePhotoDelete = () => {
        setPhotoUrl("");
    };

    return (
        <>
            {token && (
                <main className={styles.container}>
                    <div className={styles.content}>
                        <div className={styles.userInfo}>
                            <div
                                className={styles.photoContainer}
                                style={{backgroundImage: `url(${photoUrl})`}}
                                onMouseEnter={() => setShowDeleteIcon(!!photoUrl)} 
                                onMouseLeave={() => setShowDeleteIcon(false)} 
                                onClick={() => document.getElementById('photoInput').click()}
                            >
                                <input type="file" onChange={handleFileChange} className={styles.photoInput} id="photoInput" />
                                {!photoUrl && <span className={styles.uploadText}>Upload Photo</span>}
                                {showDeleteIcon && (
                                    <span className={styles.closeButton} onClick={handlePhotoDelete}>
                                        &#10006;
                                    </span>
                                )}
                            </div>
                            <p className={styles.text}> Username: {userData.username}</p>
                            <p className={styles.text}> Email: {userData.email}</p>
                        </div>
                    </div>
                </main>
            )}
        </>
    );
};

export  {UserPage};
