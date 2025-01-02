import './App.css';
import Home from "./components/Home/Home";
import AboutCompany from "./components/About_Company/AboutCompany";
import Service from "./components/Services/Service";
import Gallery from "./components/Gallery/Gallery";
import MajorClints from "./components/Major_Clints/MajorClints";
import Blogs from "./components/Blogs/Blogs";
import Contacts from "./components/Contact/Contacts";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AdminDashboard from "./components/AdminPanel/AdminDashboard";
import Login from "./components/AdminPanel/Authentication/Login";
import Registration from "./components/AdminPanel/Authentication/Registration";

function App() {

    return (
        <div className="App">

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
                <Routes>
                    <Route path="/about-company" element={<AboutCompany/>}/>
                </Routes>
                <Routes>
                    <Route path="/services" element={<Service/>}/>
                </Routes>
                <Routes>
                    <Route path="/gallery" element={<Gallery/>}/>
                </Routes>
                <Routes>
                    <Route path="/major-clints" element={<MajorClints/>}/>
                </Routes>
                <Routes>
                    <Route path="/blogs" element={<Blogs/>}/>
                </Routes>
                <Routes>
                    <Route path="/contact-us" element={<Contacts/>}/>
                </Routes>


                <Routes>
                    <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
                </Routes>
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
                <Routes>
                    <Route path="/register" element={<Registration/>}/>
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;

