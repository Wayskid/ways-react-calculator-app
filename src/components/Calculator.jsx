import { useContext } from "react";
import CalculatorContext from "../context/CalculatorContext";
import Button from "./Button";
import {RiHistoryFill} from "react-icons/ri"
import {BsTrash3} from "react-icons/bs"

export default function Calculator() {

    const {
        numberBtns,
        lightOrDark,
        inputVal,
        handleEquation,
        handleClearAll,
        handleClear,
        showHistory,
        historyShown,
        historyVals,
        clearHistory
    } = useContext(CalculatorContext) 

    const buttonMapped = numberBtns.map(btn=>{
        return <Button 
            key= {btn.id}
            btn={btn}
        />
    })


  return (
    <form className={lightOrDark ? "darkTheme" : ""}>
        <button 
            className= "historyBtn" 
            onClick={showHistory} 
            type="button"
        >
            <RiHistoryFill className={lightOrDark ? "fontColor" : ""} />
        </button>
        <input 
            type="text" 
            className="screen"
            value={inputVal}
            readOnly
        />
        <button
            className={lightOrDark ? "boxShadow" : ""} 
            onClick={handleClearAll}
            type="button"
            >CE</button>
        <button
            className={lightOrDark ? "boxShadow" : ""}
            onClick={handleClear}
            type="button"
        >C</button>
        {buttonMapped}
        <button 
            className={lightOrDark ? "boxShadow" : ""}
            onClick={handleEquation}
        >=</button>
        <div className={`historyBody ${historyShown && "showHistoryBody"} ${lightOrDark ? "darkTheme" : ""}`} >
            <div className="historyValsDiv">
                { historyVals.length ?
                    historyVals.map((historyVal, index)=>{
                        return <p key={index} className="historyVals">
                            <span>{historyVal.qstn} = </span>
                            <span>{historyVal.ans}</span>
                
                        </p>
                    }) : <p>There's no history yet</p>
                }
            </div>
            { historyVals.length > 0 && <button                 
                type="button" 
                className="clrHistory" 
                onClick={clearHistory}
            >
                <BsTrash3 className={lightOrDark ? "fontColor" : ""}/>
            </button> }
        </div>
    </form>
  )
}
