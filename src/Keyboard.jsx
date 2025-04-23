import { useState } from "react";

const keys = ["A" , "B" , "C" , "D" , "E" , "F" , "G" , "H","E" , "F" , "G" , "H" , "I" , "J" , "K" , "L" , "M" , "N" , "O" , "P" , "Q" 
    ,"R" , "S" , "T" , "U" , "V" , "W" , "X" , "Y" , "Z" , "Backspace" , "Space" 
]

const Keyboard = () => {

    const [inputVal , setInputVal] = useState("");

    const handleClick = (key) =>{
        if(key === "Space"){
            setInputVal(prev => prev + " ");
        }
        else if(key === "Backspace"){
            setInputVal(prev => prev.slice(0 , -1));
        }
        else{
            setInputVal(prev => prev + key);
        }
    }

    const handleDelete = () =>{
        setInputVal('');
    }
    return (
        <div className="mt-20">
            <input value = {inputVal} className="border border-black p-2 mx-96 mb-5 w-80" readOnly/>
            <div>
                {
                    keys.map((keyb , index) => <button onClick={() => handleClick(keyb)} className="border border-black m-2 p-2" key = {index}>{keyb}</button>)
                }
            </div>
            <button className="bg-red-800 text-white p-2 m-2 justify-center " onClick = {handleDelete}>Delete</button>
        </div>
    )
}

export default Keyboard;