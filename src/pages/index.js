import React from "react";
import Navbar from "@/components/layout/Navbar";
import Featured from "@/components/home/Featured";
import NewArrival from "@/components/home/NewArrival";
import Footer from "@/components/layout/Footer";

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
