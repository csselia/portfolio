import "./App.css";
import { useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";


// isLoaded er en variabel, en boolean, true eller false. I begynnelsen false
// Bruker setIsLoaded for å oppdatere verdien
// når isLoaded ikke er true er opacity 0
// når isLoaded er true blir opacity 100, og hovedinnholdet blir synlig

// Navbar og MobileMenu får menuOpen som props, slik at de kan åpne og lukke menyen



import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)


return(
<>
    {!isLoaded && <LoadingScreen onComplete={()=>setIsLoaded(true)}/>}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>

    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Home/>
    <About/>
    <Projects/>
    <Contact/>


  



      </div>
      
      
      </>
);
}
 

export default App
