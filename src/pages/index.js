import React from "react";
import Header from "../../components/Header";
import Featured from "../../components/Featured";
import NewArrival from "../../components/NewArrival";
import Footer from "../../components/Footer";

export default function Homepage() {
    return (
        <div>
            <Header />
            <Featured />
            <NewArrival />
            <Footer />
        </div>
    );
}