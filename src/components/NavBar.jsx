import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { useContext } from "react";
import CalculatorContext from "../context/CalculatorContext";

export default function NavBar() {

    const {
        handleTheme,
        lightOrDark
    } = useContext(CalculatorContext)

  return (
    <nav>
        <h1>WaysCalc</h1>
        <div className="theme">
            <FontAwesomeIcon icon={faSun} />
            <div className="divInput">
                <input 
                    type="checkbox" 
                    className="themeCheck" 
                    onChange={handleTheme} 
                    checked={lightOrDark}
                />
                <div className="inputDiv"></div>
            </div>
            <FontAwesomeIcon icon={faMoon} />
        </div>
    </nav>
  )
}
