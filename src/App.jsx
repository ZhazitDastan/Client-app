import './App.css'
import {Routes, Route, Link} from "react-router-dom";
import {HomePage} from './component/home/HomePage.jsx'
import {LoginPage} from './component/login/LoginPage.jsx';
import {BillboardPage} from './component/billboard/BillboardPage.jsx';
import {BuyNowPage} from './component/buyNow/BuyNowPage.jsx';
import {RegistrationPage} from './component/registration/RegistrationPage.jsx';
import {NotFoundPage} from './component/notFound/NotFoundPage.jsx';
import {InfoPage} from './component/info/InfoPage.jsx'
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
        
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/info" element={<InfoPage />}/>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/registration" element={<RegistrationPage />}/>
            <Route path="/buynow" element={<BuyNowPage />}/>
            <Route path="/billboard" element={<BillboardPage />}/>
            <Route path="*" element={<NotFoundPage />}/>
        </Routes>
        
    </>
  )
}

export default App
