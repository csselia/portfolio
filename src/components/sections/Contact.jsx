import { RevealOnScroll } from "../RevealOnScroll";


export const Contact = () =>{
    return(<section id="contact" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>    

            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-violet-600 to-pink-500
            bg-clip-text text-transparent
            text-center">Send meg en melding :)</h2>

             <div className="max-w-3xl mx-auto px-4">

         <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
        
                   <ul className="list-inside text-gray-300 space-y-2">
                   
                   <li className="mb-6"><strong>Email:</strong>
                   <p>ceciliasprosjekter@gmail.com</p>
                    </li>
                    <li><a href="https://www.linkedin.com/in/cecilia-d-274a7a1aa?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BHByIfEeqQeieTHjQNvq9pA%3D%3D" className="font-bold">LinkedIn</a>
                    </li>
                      <li><a href="https://github.com/csselia" className="font-bold">Github</a>
                    </li>
                </ul>

            </div>
            </div>
        


        </RevealOnScroll>
    </section>

    )



}