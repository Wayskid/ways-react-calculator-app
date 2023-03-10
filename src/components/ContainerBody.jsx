import Calculator from "./Calculator";
import NavBar from "./NavBar";
import { useContext } from "react";
import CalculatorContext from "../context/CalculatorContext";

export default function ContainerBody() {

  const {
    lightOrDark,
} = useContext(CalculatorContext) 

  return (
    <div className= {`containerBody ${lightOrDark ? "darkTheme" : ""}`}>
        <div className="calcBody">
          <NavBar />
          <Calculator />
        </div>
    </div>
  )
}
