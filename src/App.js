import logo from './logo.svg';
import './App.css';
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AboutCompany from "./components/About_Company/AboutCompany";
import Service from "./components/Services/Service";
import Portfolio from "./components/Portfolio/Portfolio";
import Gallery from "./components/Gallery/Gallery";
import MajorClints from "./components/Major_Clints/MajorClints";
import Blogs from "./components/Blogs/Blogs";
import Contacts from "./components/Contact/Contacts";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Header/>
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
                    <Route path="/portfolio" element={<Portfolio/>}/>
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
                    <Route path="/contact" element={<Contacts/>}/>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </div>
    );
}

export default App;
