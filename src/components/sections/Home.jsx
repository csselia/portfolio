import { RevealOnScroll } from "../RevealOnScroll";

export const Home = ()=>{
    return <section id="home" className="min-h-screen flex items-center justify-center relative">

<RevealOnScroll>
        <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-7 
        bg-gradient-to-r from-violet-600 to-pink-500 bg-clip-text text-transparent
        leading-tight">Hei! Jeg heter Cecilia</h1>

        <p className="text-grey-400 text-lg mb-8 mx-auto"> 
            UX-fokusert full-stack utvikler. Kreativ designentusiast.  
        </p>

            <div className="flex justify-center space-x-4">
            <a href="#projects" className="bg-[#d65f33] text-white py-3 px-6 rounded font-medium 
            transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">Se på prosjekter</a>

             <a href="#contact" className="border-pink-500/50 text-[#f08614] py-3 px-6 rounded font-medium transition-all
             duration-200
            hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(219,121,85,0.5)] hover:bg-pink-500/10">Kontakt meg</a>

        </div>

        </div>
</RevealOnScroll>
    </section>
}