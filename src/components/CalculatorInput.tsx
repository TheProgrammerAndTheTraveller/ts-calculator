import { useContext } from "react";
import { useCalculatorContext } from "../CalculatorContext";

function CalculatorInput(){
    const context = useCalculatorContext()
    return (
    <div>
        {context.currentValue ?? context.oldValue}
    </div>
)

}

export default CalculatorInput;