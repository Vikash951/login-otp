import { useState } from "react";

const ToDoList = () =>{

    const [inputVal  , setInputVal] = useState("");
    const [tasks , setTasks] = useState([]);

    const handleAdd = () => {
        if(inputVal.trim() === "")return;
        setTasks([...tasks , inputVal]);
        setInputVal("");
        
    }

    const handleDelete = (indexToDelete) =>{
        setTasks(tasks.filter((task , index) => index !== indexToDelete));
    }

    return (
        <div>
            <div>
                <input type="text" value = {inputVal} className="border border-black m-2 p-2 rounded-md" onChange={(e) => setInputVal(e.target.value)} />
                <button className="bg-green-600 p-2 m-2 rounded-md" onClick={handleAdd}>Add</button>
            </div>
            <ul>
                {
                    tasks.map((task , index) => <li key = {index} className="m-2 p-4">{task}{" "}<button className="bg-red-600 rounded-md text-white p-1" onClick={() => handleDelete(index)}>Delete</button></li>)
                }
            </ul>
            
        </div>
    )
}

export default ToDoList;