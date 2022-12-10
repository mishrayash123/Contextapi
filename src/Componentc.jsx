import React from "react";
import {FirstName} from "./App"

const Componentc = () => {
    return (<>
        <FirstName.Consumer> {
            (finame) => {
                return <h1>My Name Is {finame}</h1>;
            }
        }</FirstName.Consumer>
    </>);
};

export default Componentc;
