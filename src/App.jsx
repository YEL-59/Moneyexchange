
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Help from './Pages/Help/Help';
import HelpDetail from './Pages/Help/HelpDetail/helpDetail';
import AboutUs from './Pages/AboutUs/AboutUs';
import Contact_Us from './Pages/Contact_Us/Contact_Us';


const App = () => {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<Help />} />
        <Route path="/helpdetails" element={<HelpDetail />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="contactus" element={<Contact_Us/>}/>
      </Routes>

    </>
  )
}

export default App