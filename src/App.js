import React, { createContext } from "react";
import Componenta from "./Componenta";


const FirstName = createContext();
const LastName = createContext();




function App() {
    return(
      <>
        <FirstName.Provider value={"Yash Kumar"}>
          <LastName.Provider value={" Mishra"}>
          <Componenta/>
          </LastName.Provider>
        </FirstName.Provider>
      </>
    );
};

export default App;
export {FirstName,LastName};
