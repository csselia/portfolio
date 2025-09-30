import { useState, useEffect } from "react";




/* Loading-Screen fungerer som et overlay som vises før appen er ferdig lastet inn
const fullText er teksten på skjermen. 
Loading bar under. 
useState brukes for å lage dynamiske verdier, teksten som skal skrives ut
text holder den nåværende verdien av teksten som vises på skjermen
fullText er det som skal stå på skjermen tilslutt
når setText kalles på, og settext passes med fullText, vil React rendere komponenten med den nye verdien
Hver gang intervallet kjører, tas en delstreng fra fullText og setter det som ny text
React renderer, og det vises en og en bokstav på skjermen

useEffect er hook i React, "når dette skjer, gjør dette"

 setText(fullText.substring(0,index)
 Fra posisjon 0 til index (ikke inkludert index)
 Fortsetter til hele fullText er vist
 setText oppdaterer state i React

setInterval kjører koden for hver 100ms
Må ha setTimeOut ellers kjører den for alltid.
Fjerner intervallet

[OnComplete] er dependency til useEffect. 
Kjører når komponenten mountes, og på nytt hvis onComplete endres
*/


export const LoadingScreen = ({onComplete}) => {

    const[text, setText] = useState("")
    const fullText = "Henter <Portfolio />";
    
    useEffect(()=>{
        let index = 0;
        const interval = setInterval(()=>{
            setText(fullText.substring(0,index));
            index++;

            if(index > fullText.length){
                clearInterval(interval)

                setTimeout(()=>{
                    onComplete();
                }, 1000);
            }
        },100);
        return () => clearInterval(interval);
    },[onComplete]);


    // fixed inset, dekker hele viewport, z-50 ligger øverst over alt annet, sentrer alt 
    // Så kommer teksten med typewriter effekt
    // Så kommer baren, width 200 px, høyde 2 px, farge, avrundende hjørner, relative, slik at den blå lysstripen kan være inni denne, 
    // overflow hidden så alt utenfor denne rammen blir gjemt
    // fyllstripen til baren, setter bredden til 40% av foreldreelementet, 
    // høyden til 100% av foreldreelementet, setter skygge på den, også en custom animate-loading-bar, se i index.css
    return (
        <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
            <div className="mb-4 text-4xl font-mono font-bold">
                {text}<span>|</span>
                </div> 

                <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">

                    <div className="w-[40%] h-full bg-[#e73aa7] shadow-[0_0_15px_#3b82f6] animate-loading-bar">
                        {""}

                    </div>
                </div>
        </div>
    );
};