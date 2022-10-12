import { createContext, useEffect, useState } from "react";

const CalculatorContext = createContext()

export function CalculatorProvider({children}){

    // Light or Dark mode
    const [lightOrDark, setLightOrDark] = useState(JSON.parse(localStorage.getItem("theme")) || false);

    const lightDarkStyle = {
        backgroundColor: "#000814",
        boxShadow: "0px 0px 2px 1px grey"
    };

    const lightDarkButtonStyle = {
        backgroundColor: "#000814",
        color: "white",
        boxShadow: "0px 0px 2px 1px grey"
    };

    const specialBtnStyle = {
        boxShadow: "0px 0px 2px 1px grey"
    };

    function handleTheme() {
        setLightOrDark(!lightOrDark);
    }

    //local storage
    useEffect(()=>{
      localStorage.setItem("theme", JSON.stringify(lightOrDark))
    }, [lightOrDark])

    //Buttons 
    const [ numberBtns, setNumberBtns ] = useState([
      {
        id: 1, value: "/"
      },{
        id: 2, value: "*"
      },{
        id: 3, value: "7"
      },{
        id: 4, value: "8"
      },{
        id: 5, value: "9"
      },{
        id: 6, value: "-"
      },{
        id: 7, value: "4"
      },{
        id: 8, value: "5"
      },{
        id: 9, value: "6"
      },{
        id: 10, value: "+"
      },{
        id: 11, value: "1"
      },{
        id: 12, value: "2"
      },{
        id: 13, value: "3"
      },{
        id: 14, value: "0"
      },{
        id: 15, value: "00"
      },{
        id: 16, value: "."
      }
    ])

    //Input to screen
    const [ inputVal, setInputVal ] = useState("")

    function handleInput(e){
      setInputVal(prevVal=>{
        return prevVal += e.target.value
      })
    }

    //Equal btn
    function handleEquation(e) {
      e.preventDefault()
      setInputVal(eval(inputVal))
    }

    //ClearAll btn
    function handleClearAll() {
      setInputVal("")
    }

    //Clear btn
    function handleClear() {
      setInputVal(inputVal.toString().slice(0, -1))
    }



    return (
        <CalculatorContext.Provider value={{
          numberBtns,
          lightOrDark,
          lightDarkStyle,
          lightDarkButtonStyle,
          handleTheme,
          specialBtnStyle,
          handleInput,
          inputVal,
          handleEquation,
          handleClearAll,
          handleClear,
        }}>
            {children}
        </CalculatorContext.Provider>
    )
}

export default CalculatorContext;