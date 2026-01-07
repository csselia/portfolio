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
                   <p>cecilia.26.di@gmail.com</p>
                    </li>
                      <li><a href="https://github.com/csselia" className="font-bold">Github: https://github.com/csselia</a>
                    </li>
                </ul>

            </div>
            </div>
        


        </RevealOnScroll>
    </section>

    )



}