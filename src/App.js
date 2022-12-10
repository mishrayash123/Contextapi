import React, { createContext } from "react";
import Componenta from "./Componenta";


const FirstName = createContext();




function App() {
    return(
      <>
        <FirstName.Provider value={"Yash"}>
        <Componenta/>
        </FirstName.Provider>
      </>
    );
};

export default App;
export {FirstName};
