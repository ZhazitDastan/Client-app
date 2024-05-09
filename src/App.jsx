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
// test 
import {Testing} from "./component/test/testing.jsx";
// import Map1 from './component/buyNow/Map1.jsx';
// import AdvancedMap from './component/buyNow/AdvancedMap.jsx';

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
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/info" element={<InfoPage />}/>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/registration" element={<RegistrationPage />}/>
            <Route path="/buynow" element={<SelectBillboardPage />}/>
            <Route path="/buynow/packages" element={<PricePackagesPage />}/>
            <Route path="/billboard" element={<BillboardPage />}/>
            <Route path="/my" element={<UserPage />}/>
            <Route path="/test" element={<Testing />}/>
            {/* <Route path="/map1" element={<Map1 />}/>
            <Route path="/map" element={<AdvancedMap />}/> */}
            <Route path="*" element={<NotFoundPage />}/>
        </Routes>
        <Footer />
    </>
  )
}

export default App
