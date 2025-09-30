
import { RevealOnScroll } from "../RevealOnScroll"
import afd_1 from '../../assets/afd_1.webp';
import afd_2 from '../../assets/afd_2.webp';
import afd_3 from '../../assets/afd_3.webp';
import afd_4 from '../../assets/afd_4.webp';
import afd_5 from '../../assets/afd_5.webp';
import afd_6 from '../../assets/afd_6.webp';
import afd_7 from '../../assets/afd_7.webp';
import afd_8 from '../../assets/afd_8.webp';
import afd_9 from '../../assets/afd_9.webp';
import afd_10 from '../../assets/afd_10.webp';
import afd_11 from '../../assets/afd_11.webp';
import afd_12 from '../../assets/afd_12.webp';
import afd_13 from '../../assets/afd_13.webp';
import afd_14 from '../../assets/afd_14.webp';
import afd_15 from '../../assets/afd_15.webp';

export const Projects = ()=>{
    return <section id="projects" className="min-h-screen
    flex items-center justify-center py-20">

        <RevealOnScroll>

        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r  from-violet-600 to-pink-500
            bg-clip-text text-transparent
            text-center">Mine prosjekter</h2>
            
    
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              

                  <div className="p-6 rounded-xl border border-white hover:-translate-y-1
                hover:shadow-[0_2px_8px_rgba(59,130,2246, 0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2">Nettside for S7vende hårstudio</h3>
                    <p className="text-gray-400 mb-4">Praktisk IT-prosjekt (Vår 2025) utført sammen med medstudentene 
                        <a href="https://www.linkedin.com/in/fridavhaf/" className="text-[#e73aa7] hover:text-[#fec588]"> Frida</a> og 
                        <a href="https://www.linkedin.com/in/sapphire-g-7295a5292/" className="text-[#e73aa7] hover:text-[#fec588]"> Sapphire.</a>
                        <p>Utviklet en nettside for en nyetablert frisørsalong,</p>
                        <a href="https://syvendeharstudio.no/"  className="text-[#e73aa7] hover:text-[#fec588]">S7vende hårstudio</a>
                        
                        <div className="grid grid-cols-1 mt-7 gap-6">
                        <img src={afd_14} alt="profilbilde" className="w-400 rounded-2xl mx-auto hover:-translate-y-1 transition"></img>
                        </div>
                    </p>
                    
                    
           
                <div className="p-6">
                    {["HTML", "CSS", "Javascript"].map((tech, key)=>(
                            <span 
                                    key = {key}
                                    className="bg-blue-500/10 text-[#e73aa7] hover:text-[#fec588] py-1 px-3 rounded-full text-sm
                                    hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246, 0.2)] transition">
                                        {tech}
                                    </span>
                    ))}
                </div>
             </div>

                   <div className="p-6 rounded-xl border border-white hover:-translate-y-1
                hover:shadow-[0_2px_8px_rgba(59,130,2246, 0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2">Android applikasjon</h3>
                    <p className="text-gray-400 mb-4">Regnespill for barn i første klasse. Vil lenke til koden på Github etter sensur. 
                    </p>
                     <div className="grid grid-cols-1 mt-7 gap-6">
                        <img src={afd_15} alt="profilbilde" className="w-50 rounded-2xl mx-auto hover:-translate-y-1 transition"></img>
                        </div>
           
                <div className="p-6">
                    {["Kotlin", "Jetpack Compose"].map((tech, key)=>(
                            <span 
                                    key = {key}
                                    className="bg-blue-500/10 text-[#e73aa7] hover:text-[#fec588] py-1 px-3 rounded-full text-sm
                                    hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246, 0.2)] transition">
                                        {tech}
                                    </span>
                    ))}
                </div>
                  
             </div>


                  <div className="p-6 rounded-xl border border-white hover:-translate-y-1
                hover:shadow-[0_2px_8px_rgba(59,130,2246, 0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2">Utvalg av noen illustrasjoner for Apotek For Deg</h3>
                    <p className="text-gray-400 mb-4">Utarbeidet illustrasjoner som skulle virke tiltalende, informative og formidle positivitet. 
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                        <img src={afd_1} alt="profilbilde" className="w-400 rounded-2xl mx-auto hover:-translate-y-1 transition"></img>
                        <img src={afd_3} alt="profilbilde" className="w-400 rounded-2xl mx-auto hover:-translate-y-1 transition"></img>
                           <img src={afd_2} alt="profilbilde" className="w-400 rounded-2xl mx-auto hover:-translate-y-1 transition"></img>
                              <img src={afd_4} alt="profilbilde" className="w-400 rounded-2xl mx-auto hover:-translate-y-1 transition"></img>
                                <img src={afd_5} alt="profilbilde" className="w-400 rounded-2xl mx-auto hover:-translate-y-1 transition"></img>
                                <img src={afd_7} alt="profilbilde" className="w-400 rounded-2xl mx-auto hover:-translate-y-1 transition"></img>
                                <img src={afd_6} alt="profilbilde" className="w-400 rounded-2xl mx-auto hover:-translate-y-1 transition"></img>
                                <img src={afd_11} alt="profilbilde" className="w-400 rounded-2xl mx-auto hover:-translate-y-1 transition"></img>
                                <img src={afd_12} alt="profilbilde" className="w-400 rounded-2xl mx-auto hover:-translate-y-1 transition"></img>
                            
                        </div>


                        <div className="grid grid-cols-2 mt-7 gap-6">
                        <img src={afd_8} alt="profilbilde" className="w-400 rounded-2xl mx-auto hover:-translate-y-1 transition"></img>
                        <img src={afd_9} alt="profilbilde" className="w-400 rounded-2xl mx-auto hover:-translate-y-1 transition"></img>
                        <img src={afd_10} alt="profilbilde" className="w-400 rounded-2xl mx-auto hover:-translate-y-1 transition"></img>
                          <img src={afd_13} alt="profilbilde" className="w-400 rounded-2xl mx-auto hover:-translate-y-1 transition"></img>
                     
 
                        </div>

                <div className="p-6">
                    {["Illustrasjon"].map((tech, key)=>(
                            <span 
                                    key = {key}
                                    className="bg-blue-500/10 text-[#e73aa7] hover:text-[#fec588] py-1 px-3 rounded-full text-sm
                                    hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246, 0.2)] transition">
                                        {tech}
                                    </span>
                    ))}
                </div>
             </div>

            </div>

        </div>
</RevealOnScroll>
    </section>
}