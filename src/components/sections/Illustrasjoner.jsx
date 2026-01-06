import pfp from '../../assets/pfp.webp';

import { RevealOnScroll } from "../RevealOnScroll";

export const About = ()=>{

    const frontendSkills = ["HTML", "CSS", "React", "Javascript", "TailwindCSS", "UX-design"];

    const backendSkills = ["Java", "Python", "SQL", "Kotlin"];

    const otherSkills = ["Linux", "Github", "Visual Studio Code"];

    const creativeSkills = ["Photoshop", "Adobe Premiere Pro", "Figma"];


    return <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-violet-600 to-pink-500
            bg-clip-text text-transparent
            text-center">Om meg</h2>


            <img src={pfp} alt="profilbilde" className="w-32 rounded-full mx-auto hover:-translate-y-1 transition"/>

     
        {/*Når det hovres løftes elementet litt opp, -y 1 flytter elementet litt opp, transition all styrer at alt skal animeres*/}
            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
        
                <p className="text-gray-300 mb-6">
                    Mitt navn er Cecilia og jeg har lang erfaring fra apotekbransjen der jeg har opparbeidet meg god erfaring innen kundeservice. Tok initiativ til 
                    designarbeid for apoteket i fritiden, og det ble etterhvert inkludert i stillingsansvaret. Under pandemien fikk 
                    jeg jobbe som skribent og designer på fulltid, og erfaringen styrket min interesse for feltet. Da jeg senere 
                    gikk tilbake til apotekarbeid, innså jeg at det var design jeg virkelig ønsket å satse på. 
                </p>
                <br/>
                <p>
                    Er nå 3.årsstudent i informasjonsteknologi på Oslomet og jobber deltid i apotek. 
                    Søker etter jobber der jeg kan utfolde meg i skjæringspunktet
                    mellom utvikling og design. 
                </p>

                <h3 className="font-bold mb-8 mt-8 text-[#fec588]">Utvalgte IT-kunnskaper:</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((tech, key)=>(
                                <span 
                                key = {key}
                                className="bg-blue-500/10 text-[#e73aa7] hover:text-[#fec588] py-1 px-3 rounded-full text-sm
                                hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246, 0.2)] transition">
                                    {tech}
                                </span>
                            )
                            
                            )}
                        </div>
                    </div>

                
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Backend</h3>
                        <div className="flex flex-wrap gap-2">
                            {backendSkills.map((tech, key)=>(
                                <span 
                                key = {key}
                                className="bg-blue-500/10 text-[#e73aa7] hover:text-[#fec588] py-1 px-3 rounded-full text-sm
                                hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246, 0.2)] transition">
                                    {tech}
                                </span>
                            )
                            
                            )}
                        </div>
                    </div>


                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Verktøy og systemer</h3>
                        <div className="flex flex-wrap gap-2">
                            {otherSkills.map((tech, key)=>(
                                <span 
                                key = {key}
                                className="bg-blue-500/10 text-[#e73aa7] hover:text-[#fec588] py-1 px-3 rounded-full text-sm
                                hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246, 0.2)] transition">
                                    {tech}
                                </span>
                            )
                            
                            )}
                        </div>
                    </div>

                    
                     <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Designverktøy</h3>
                        <div className="flex flex-wrap gap-2">
                            {creativeSkills.map((tech, key)=>(
                                <span 
                                key = {key}
                                className="bg-blue-500/10 text-[#e73aa7] hover:text-[#fec588] py-1 px-3 rounded-full text-sm
                                hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246, 0.2)] transition">
                                    {tech}
                                </span>
                            )
                            
                            )}
                        </div>
                    </div>


                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-[#fec588]">Utdanning</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                   
                   <li><strong>Bachelor i Informasjonsteknologi</strong>
                   <span class="block text-gray-500">2023 - </span>
                    </li>
                    <li><strong>Bachelor i Farmasi</strong>
                   <span class="block text-gray-500">2011 - 2014</span>
                    </li>
                </ul>
                </div>

                
                    <div className="p-6 rounded-xl border border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-[#fec588]">Nøkkelkvalifikasjoner</h3>
                <ul className="text-gray-300 space-y-2">
                   
                   <li>Flere års erfaring med kundeveiledning.</li>
                    <li>Kreativ og løsningsorientert.</li>
                    <li>Samarbeider bra i team, men jobber også strukturert og selvstendig.</li>
                       <li>Liker å ta initiativ og sette idéer ut i praksis</li>

                </ul>
                </div>

                  
               
                           



                     </div>
                
                     <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8"></div>
                  <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4 text-[#fec588]">Arbeidserfaring</h3>
    
                    <div className="space-y-4 text-gray-300">
                        <div className="border border-white/50 m-3 p-2">
                            <h4 className="font-semibold">Ditt Apotek Strømmen/ApotekForDeg</h4>
                                  <span class="block text-[#e73aa7]">Apotektekniker</span>
                                 <span class="block text-gray-500">Jan 2024 - d.d</span>
                                 <p class="text-pink-200">Håndtering av resept & ordre</p>
                        </div>

                        
                            <div className="border border-white/50 m-3 p-2">
                            <h4 className="font-semibold">ApotekForDeg</h4>
                                  <span class="block text-[#e73aa7]">Skribent og illustratør</span>
                                 <span class="block text-gray-500">Mar 2020 - Apr 2021</span>
                                   <p class="text-pink-200">Utarbeidet tekst og illustrasjoner</p>
                        </div>


                            
                            <div className="border border-white/50 m-3 p-2">
                            <h4 className="font-semibold">Innovacare AS</h4>
                                  <span class="block text-[#e73aa7]">Designer</span>
                                 <span class="block text-gray-500">Apr 2017 - Feb 2021</span>
                                   <p class="text-pink-200">Grafisk design for nettside og trykkmateriell.
                                   </p>
                        </div>

                        
                        
                            <div className="border border-white/50 m-3 p-2">
                            <h4 className="font-semibold">Ditt Apotek Paleet</h4>
                                  <span class="block text-[#e73aa7]">Apotektekniker</span>
                                 <span class="block text-gray-500">Sep 2018 - Des 2023</span>
                                   <p class="text-pink-200">Resepthåndtering og kundeveiledning. Kampanjeansvarlig.</p>
                        </div>
                        
                        
                            <div className="border border-white/50 m-3 p-2">
                            <h4 className="font-semibold">Ditt Apotek Paleet</h4>
                                  <span class="block text-[#e73aa7]">Reseptarfarmasøyt</span>
                                 <span class="block text-gray-500">Jan 2017 - Sep 2018</span>
                                    <p class="text-pink-200">Resepthåndtering og kundeveiledning. Kampanjeansvarlig.</p>
                        </div>

                          
                            <div className="border border-white/50 m-3 p-2">
                            <h4 className="font-semibold">Apotek 1 Arkaden</h4>
                                  <span class="block text-[#e73aa7]">Reseptarfarmasøyt</span>
                                 <span class="block text-gray-500">Sep 2016 - Jan 2017</span>
                                <p class="text-pink-200">Ekspedisjon av resept og kontroll.</p>
                        </div>
                        
                          
                            <div className="border border-white/50 m-3 p-2">
                            <h4 className="font-semibold">Apotek 1 Oslo City</h4>
                                  <span class="block text-[#e73aa7]">Reseptarfarmasøyt</span>
                                 <span class="block text-gray-500">Aug 2014 - Sep 2016</span>
                                 <p class="text-pink-200">Utlånt til Apotek 1 Arkaden & Apotek 1 Paleet</p>
                                 
                        </div>

                        
                         
                            <div className="border border-white/50 m-3 p-2">
                            <h4 className="font-semibold">Apotek 1 Bjerke</h4>
                                  <span class="block text-[#e73aa7]">Apotekmedarbeider - tilkalling</span>
                                 <span class="block text-gray-500">Des 2013 - Jun 2014</span>
                                <p class="text-pink-200">Reseptekspedisjon og varemottak</p>
                                 
                        </div>

                           
                            <div className="border border-white/50 m-3 p-2">
                            <h4 className="font-semibold">Oslo Tours AS</h4>
                                  <span class="block text-[#e73aa7]">Billettselger</span>
                                 <span class="block text-gray-500">Jun 2008 - Aug 2008</span>
                                    <p class="text-pink-200">Salg av billetter for sightseeingbuss</p>
                        </div>

                   
                   </div>


            </div>



        </div>
        </RevealOnScroll>
    </section>
}