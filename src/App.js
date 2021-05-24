import React from "react";
import "./assets/css/App.css";

//importamos el componentes


import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";


function HolaMundo() {
  

  return 
}

function App() {

  return (
    <div>
      <header>
      <Header />
      </header>
      <section>
      <Home/>
      </section>
      <footer>
      <Footer />
      </footer>
      
    </div>
  );
}

export default App;
