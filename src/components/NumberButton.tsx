import CalculatorButton from "./CalculatorButton";
import { useCalculatorContext } from "../CalculatorContext";
function NumberButton({ value }: { value: number }) {

    const {currentValue, setCurrentValue} = useCalculatorContext();

    function onNumberClick(): void {
        const calculatorValue = currentValue ?? 0;
        const sign = Math.sign(calculatorValue) | 1;
        setCurrentValue((Math.abs(calculatorValue) * 10 + value) * sign);
    }

    return (
        <CalculatorButton onClick={onNumberClick} title={value.toString()}></CalculatorButton>
    );
  }
  export default NumberButton;
  
  //внутри кнопки использовать usecontext, получаешь его и в нем 