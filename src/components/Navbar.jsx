import { useEffect } from "react"


/* navbaren er fixed, ligger alltid øverst uansett hvor man scroller
z-40 slik at den alltid ligger over alt annet
bg-[rgba(10,10,10,0.8)] backdrop-blur-lg, mørk bakgrunn med litt blur og litt gjennomsiktig
Sier at hamburgerikonet bare skal være tilgjenglig for små skjermer. På medium screens og opp er den gjemt



*/


export const Navbar = ({menuOpen, setMenuOpen}) =>{

    useEffect(()=>{  {/* Hvis menyen er åpen skal ikonet være skjult. Sjekker hver gang verdien endrer seg*/}
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]
);

    return <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b 
    border-white/10 shadow-lg">

    <div className="max-w-5xl mx-auto px-4">

        <div className="flex justify-between items-center h-16">

            <a href="#home" className="font-mono text-xl font-bold text-white hover:text-[#9d3ae4]">CSSELIA</a> {/*Logo skal være her*/}

        {
            !menuOpen && (<div className="w-20 h-10 relative cursor-pointer z-40 md:hidden text-4xl" 
            onClick={()=>setMenuOpen(!menuOpen)}>
            &#9776; {/*Hamburger icon*/}

        </div>)
        }
        

        <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-[#e73aa7] transition-colors">Hjem</a>
            <a href="#about" className="text-gray-300 hover:text-[#e73aa7]  transition-colors">Om</a> 
            <a href="#projects" className="text-gray-300 hover:text-[#e73aa7]  transition-colors">Prosjekter</a>
            <a href="#contact" className="text-gray-300 hover:text-[#e73aa7]  transition-colors">Kontakt</a> 

        </div>

        </div>


    </div>



    </nav>
}