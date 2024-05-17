import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './styles/additional.module.css';

const NavigationBar = () => {
    const location = useLocation();

    const routes = [
        { path: '/buynow', name: 'Select Billboard' },
        { path: '/buynow/packages', name: 'Price Packages' },
        { path: '/buynow/insert', name: 'Insert Data' },
        { path: '/buynow/payment', name: 'Payment' },
    ];

    
    const currentRouteIndex = routes.findIndex(route => route.path === location.pathname);

  
    if (currentRouteIndex === -1) return null;

    return (
        <div className={styles.navigationBar}>
            {routes.slice(0, currentRouteIndex + 1).map(route => (
                <span key={route.path}>
                    <Link to={route.path}>{route.name}</Link>
                    {route.path !== location.pathname && ' > '}
                </span>
            ))}
        </div>
    );
};

export default NavigationBar;