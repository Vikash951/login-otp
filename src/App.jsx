import { useState , useRef , useEffect } from "react";

const INPUT_OTP_BOX = 6;

function App() {
  const [inputArray, setInputArray] = useState(new Array(INPUT_OTP_BOX).fill(""));
  const refArr = useRef([]);

  const handleOnChange = (value , index) => {
     if(isNaN(value))return;

     const newValue = value.trim();
     const newArr = [...inputArray];
     newArr[index] = newValue.slice(-1);
     setInputArray(newArr);
     newValue && refArr.current[index+1]?.focus();
  }

  const handleOnKeyDown = (e , index) =>{
    //console.log(e);
    if(!e.target.value && e.key === "Backspace"){
      refArr.current[index - 1]?.focus();
    }
  }

  useEffect(() =>{
    refArr.current[0]?.focus();
  } , []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl mb-4">Validate OTP</h1>
      <div className="flex">
        {inputArray.map((input, index) => (
          <input
            className="border border-black h-10 w-10 m-2 text-center rounded-md"
            key={index}
            type="text"
            maxLength={1}
            ref = {(input) => (refArr.current[index] = input)}
            onChange = {((e) => handleOnChange(e.target.value , index))}
            onKeyDown = {(e) => handleOnKeyDown(e , index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
