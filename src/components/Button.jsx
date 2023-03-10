import { useContext } from "react"
import CalculatorContext from "../context/CalculatorContext"


export default function Button({btn}) {

  const {
    handleInput,
    lightOrDark,
  } = useContext(CalculatorContext)

  return (
    <button 
      onClick={handleInput} 
      type="button" 
      value={btn.value}
      className={lightOrDark ? "darkTheme" : ""}
    >{btn.value}</button>
  )
}

