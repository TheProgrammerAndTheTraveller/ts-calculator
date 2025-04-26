import NumberButton from "./NumberButton";
import "./Calculator.css";
import { CalculatorAction } from "./CalculatorActions";
import ActionButton from "./ActionButton";
import CalculatorInput from "./CalculatorInput";

function Calculator() {
    return (
        <>
        <CalculatorInput></CalculatorInput>
        <div className="calculator-grid">
            <ActionButton value={CalculatorAction.Reciprocal} />
            <ActionButton value={CalculatorAction.Square} />
            <ActionButton value={CalculatorAction.Sqrt} />
            <ActionButton value={CalculatorAction.Divide} />
            <NumberButton value={7}></NumberButton>
            <NumberButton value={8}></NumberButton>
            <NumberButton value={9}></NumberButton>
            <ActionButton value={CalculatorAction.Multiply} />
            <NumberButton value={4}></NumberButton>
            <NumberButton value={5}></NumberButton>
            <NumberButton value={6}></NumberButton>
            <ActionButton value={CalculatorAction.Subtract} />
            <NumberButton value={1}></NumberButton>
            <NumberButton value={2}></NumberButton>
            <NumberButton value={3}></NumberButton>
            <ActionButton value={CalculatorAction.Add} />
            <NumberButton value={0}></NumberButton>
            <ActionButton value={CalculatorAction.Clear} />
            <ActionButton value={CalculatorAction.Comma} />
            <ActionButton value={CalculatorAction.Equals} />
        </div>
        </>
    )
}

export default Calculator;