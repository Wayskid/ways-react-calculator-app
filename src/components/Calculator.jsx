import { useContext } from "react";
import CalculatorContext from "../context/CalculatorContext";
import Button from "./Button";

export default function Calculator() {

    const {
        numberBtns,
        lightOrDark,
        lightDarkStyle,
        lightDarkButtonStyle,
        specialBtnStyle,
        inputVal,
        handleEquation,
        handleClearAll,
        handleClear
    } = useContext(CalculatorContext) 

    const buttonMapped = numberBtns.map(btn=>{
        return <Button 
            key= {btn.id}
            btn={btn}
        />
    })


  return (
    <form style={lightOrDark ? lightDarkStyle : {}}>
        <input 
            type="text" 
            className="screen"
            value={inputVal}
            readOnly
        />
        <button
            style={lightOrDark ? specialBtnStyle : {}} 
            onClick={handleClearAll}
            type="button"
            >CE</button>
        <button
            style={lightOrDark ? specialBtnStyle : {}} 
            onClick={handleClear}
            type="button"
        >C</button>
        {buttonMapped}
        <button 
            style={lightOrDark ? specialBtnStyle : {}}
            onClick={handleEquation}
        >=</button>
    </form>
  )
}
