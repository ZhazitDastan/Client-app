import { Wrapper } from "@googlemaps/react-wrapper";
import { useRef, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import styles from "../buyNow/styles/buyNowPage.module.css";
import { Link } from "react-router-dom";

const AdvancedMap = () => {
    return (
        <Wrapper apiKey="AIzaSyBiBkosez2A599m81c58e5OtXa6Kmrz8iw" version="beta" libraries={["marker"]}>
            <main className={styles.container}>
                <div className={styles.content} style={{marginTop: '70px'}}>
                    <MyMap />
                    <BillboardList billboards={billboardData} />
                </div>
            </main>
        </Wrapper>
    )
}

const mapOptions = {
    mapId: '8e696c11cd80e4ab',
    center: {lat: 43.239095, lng: 76.878642},
    zoom: 12,
    disableDefaultUI: true,
}

function MyMap() {
    const [map, setMap] = useState("");
    const ref = useRef();

    useEffect(() => {
        setMap(new window.google.maps.Map(ref.current, mapOptions));
    }, []);

    return (
        <>
            <div ref={ref} id="map" style={{ height: '1000px', width: '100%' }}/>
            {map && <Billboard map={map} />}
        </>
    )
}

const billboardData = {
    Akkent: {
        name: "Akkent",
        status: "Available",
        position: {lat: 43.240023, lng: 76.813539},
    },
    TolebiUtegenBatyr: {
        name: "Tole-bi Utegen-Batyr",
        status: "Available",
        position: {lat: 43.244813, lng: 76.852554},
    },
    MomyshulyShalyapina: {
        name: "Momyshuly Shalyapina",
        status: "Unusable",
        position: {lat: 43.209403, lng: 76.842526},
    },
    ZhandosovaAltynsarin: {
        name: "Zhandosova Altynsarin",
        status: "Unusable",
        position: {lat: 43.217185, lng: 76.875727},
    },
    TolebiNazarbayev: {
        name: "Tole-bi Nazarbayev",
        status: "Available",
        position: {lat: 43.254958, lng: 76.946580},
    },
};

function BillboardList({ billboards }){

    return (
        <div className={styles.billboardList}>
            {Object.entries(billboards).map(([key, billboard]) => (
                <div key={key} className={styles.listItem}>
                    <div className={styles.items}>
                        <h2 className={styles.itemTitle}>{billboard.name}</h2>
                        <div className={styles.itemStatus}>{billboard.status}</div>
                    </div>
                    <div>
                        {billboard.status === "Unusable" ? (
                            <span className={styles.unusableText}>Unusable</span>
                        ) : (
                            <Link to="/map/buynow">
                                <button className={styles.mainBtn}>BUY NOW</button>
                            </Link>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
};

function Billboard({map}) {
    const [data, setData] = useState(billboardData);
    const [highlight, setHighlight] = useState();

    return(
        <>
            {Object.entries(data).map(([key, billboard]) => (
                <Marker5 key={key} map={map} position={billboard.position}>
                    <div className={`${styles.marker} ${styles[billboard.status.toLowerCase()]} ${styles[highlight===key ? "highlight" : ""]}`}
                        onMouseEnter={() => setHighlight(key)}
                        onMouseLeave={() => setHighlight(null)}>
                        <h2>{billboard.status}</h2>
                        <div className={styles.billboardName}>{billboard.name}</div>
                    </div>
                </Marker5>           
            ))}
        </>
    )
};

function Marker5({map, children, position}) {
    const markerRef = useRef();
    const rootRef = useRef();   

    useEffect(() => {
        if(!rootRef.current){
            const container = document.createElement("div");
            rootRef.current = createRoot(container);

            markerRef.current = new google.maps.marker.AdvancedMarkerView({
                position,
                content: container,
            })
        }
    }, []);

    useEffect(() => {
        rootRef.current.render(children);
        markerRef.current.position = position;
        markerRef.current.map = map;
    }, [map, position, children])
};

export default AdvancedMap;