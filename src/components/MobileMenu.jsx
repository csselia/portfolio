import { useEffect } from "react"

/*
fixed top, left full, dekker hele skjermen
transition duration, smooth åpne og lukke animasjon
menuOpen, true, fullskjerm, synlig klikkbar
menuOpen, false, ingen høyde, usynlig, ikke klikkbar
*/

export const MobileMenu = ({menuOpen, setMenuOpen}) =>{


    return (
        <div className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.95)] z-40 flex flex-col items-center justify-center
        transition-all duration-300 ease-in-out

        ${menuOpen ? "h-screen opacity-100 pointer-events-auto": "h-0 opacity-0 pointer-events-none"}
        `}>


        <button onClick={()=> setMenuOpen(false)} className="absolute top-1 right-2 text-white text-6xl focus:outline-none cursor-pointer"
            aria-label="Close Menu">
            &times;
        </button>


           <div className="flex flex-col items-center">
            <a href="#home" onClick={()=>setMenuOpen(false)}
            className={`text-2xl font-semibold text-white hover:text-[#e73aa7] my-4 transform transition-transform duration-300
            ${menuOpen 
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5" }
            `}>Hjem</a>


            <a href="#about" onClick={()=>setMenuOpen(false)}
            className={`text-2xl font-semibold text-white hover:text-[#e73aa7] my-4 transform transition-transform duration-300
            ${menuOpen 
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5" } 
            `} >Om</a>

            <a href="#projects" onClick={()=>setMenuOpen(false)}
            className={`text-2xl font-semibold text-white hover:text-[#e73aa7] my-4 transform transition-transform duration-300
            ${menuOpen 
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5" } 
            `}>Prosjekter</a>

            <a href="#contact" onClick={()=>setMenuOpen(false)}
            className={`text-2xl font-semibold text-white hover:text-[#e73aa7] my-4 transform transition-transform duration-300
            ${menuOpen 
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5" } 
            `}>Kontakt</a>
            
            </div>

        </div>

    );

}