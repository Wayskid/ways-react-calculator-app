import ContainerBody from "./components/ContainerBody";
import { CalculatorProvider } from "./context/CalculatorContext";


export default function App() {
  return (
      <CalculatorProvider>
        <ContainerBody />
      </CalculatorProvider>
  )
}
