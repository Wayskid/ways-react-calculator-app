import Calculator from "./Calculator";
import NavBar from "./NavBar";
import { useContext } from "react";
import CalculatorContext from "../context/CalculatorContext";

export default function ContainerBody() {

  const {
    lightOrDark,
    lightDarkStyle,
} = useContext(CalculatorContext) 

  return (
    <div className="containerBody" style={lightOrDark ? lightDarkStyle : {}}>
        <div className="calcBody">
          <NavBar />
          <Calculator />
        </div>
    </div>
  )
}
