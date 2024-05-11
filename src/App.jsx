import './App.css'
import {Routes, Route, Link} from "react-router-dom";
import {HomePage} from './component/home/HomePage.jsx'
import {LoginPage} from './component/login/LoginPage.jsx';
import {BillboardPage} from './component/billboard/BillboardPage.jsx';
import {PricePackagesPage} from './component/buyNow/PricePackagesPage.jsx';
import {RegistrationPage} from './component/registration/RegistrationPage.jsx';
import {NotFoundPage} from './component/notFound/NotFoundPage.jsx';
import {InfoPage} from './component/info/InfoPage.jsx';
import SelectBillboardPage from './component/buyNow/SelectBillboardPage.jsx';
import {UserPage} from './component/user/UserPage.jsx';
import {ScrollToTop} from './component/additionalFunctions/ScrollToTop.jsx';
import {Header} from './component/header/Header.jsx';
import {Footer} from './component/footer/Footer.jsx';
import { ToastProvider } from 'react-toast-notifications';
import { InsertDataPage } from './component/buyNow/InsertDataPage.jsx';

function App() {
    
  return (
    <>
        {/*<header>*/}
        {/*    <Link to="/">info</Link>*/}
        {/*    <Link to="/login">login</Link>*/}
        {/*    <Link to="/registraion">registration</Link>*/}
        {/*    <Link to="/buynow">buy now</Link>*/}
        {/*    <Link to="/billboard">billboard</Link>*/}
        {/*</header>*/}
        <ScrollToTop /> 
        <Header />
        <ToastProvider placement="top-center">
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/info" element={<InfoPage />}/>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/registration" element={<RegistrationPage />}/>
            <Route path="/buynow" element={<SelectBillboardPage />}/>
            <Route path="/buynow/packages" element={<PricePackagesPage />}/>
            <Route path="/buynow/insert" element={<InsertDataPage />}/>
            <Route path="/billboard" element={<BillboardPage />}/>
            <Route path="/my" element={<UserPage />}/>
            <Route path="*" element={<NotFoundPage />}/>
        </Routes>
        </ToastProvider>
        <Footer />
    </>
  )
}

export default App
