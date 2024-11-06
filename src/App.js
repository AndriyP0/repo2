import React, { useRef } from "react";
import Header from "./Layout/Header";
import HomePage from "./pages/HomePage";
import AboutUsSection from "./pages/AboutUsSection";
import Catalog from "./pages/Catalog";
import Price from "./pages/Price";
import Footer from "./Layout/Footer";
import Reviews from "./pages/Reviews";

function App() {
    const homeRef = useRef(null);
    const servicesRef = useRef(null);
    const contactsRef = useRef(null);
    const priceRef= useRef(null);
    const reviewsRef= useRef(null);
    return (
        <div className="App">

            <Header homeRef={homeRef} servicesRef={servicesRef} contactsRef={contactsRef}  />

            <div ref={homeRef}>
                <HomePage />
            </div>

            <AboutUsSection priceRef={priceRef} reviewsRef={reviewsRef} />

            <div ref={servicesRef}>
                <Catalog />
            </div>

            <div ref={priceRef}>
                <Price />
            </div>
<div ref={reviewsRef} >
    <Reviews />
</div>
            <div ref={contactsRef}>
                <Footer  />
            </div>

        </div>
    );
}

export default App;
