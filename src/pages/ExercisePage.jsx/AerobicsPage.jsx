import React from "react";
import Navbar from "../../component/Navbar";
import { Aerobics } from "../../component/ExerciseContent/Aerobics";

export const AerobicsPage = () => {
    return (
        <>
            <Navbar />
            <h1>AerobicsPage</h1>
            <Aerobics />
        </>
    );
};
