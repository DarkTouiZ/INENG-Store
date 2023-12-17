import React from "react";
import Navbar from "../../components/Navbar";
import Featured from "../../components/Featured";
import NewArrival from "../../components/NewArrival";
import Footer from "../../components/Footer";

export default function Homepage() {
    return (
        <div>
            <Navbar />
            <Featured />
            <NewArrival />
            <Footer />
        </div>
    );
}