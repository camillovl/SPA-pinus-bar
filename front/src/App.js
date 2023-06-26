import React from "react";
import Navbar from "./Components/navbar";
import '@fortawesome/fontawesome-free/css/all.min.css';


import { Outlet } from "react-router-dom";


const App = () => {
  return (
      <main>    
        <Navbar />    
        <Outlet />        
      </main>
  )
}

export default App;