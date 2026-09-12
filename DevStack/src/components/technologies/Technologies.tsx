// import React from 'react';
import { use } from "react";
import type { Itechnology } from "../../types/technologyType"

interface TechProps{
    technologyPromise: Promise<Itechnology[]>
}

const Technologies = ({technologyPromise}:TechProps) => {

    const technologies = use(technologyPromise);
    console.log(technologies);

    return (
        <div>
            
        </div>
    );
};

export default Technologies;