import { useCalculatorContext } from "../CalculatorContext";
import { CalculatorAction } from "./CalculatorActions";
import CalculatorButton from "./CalculatorButton";

function ActionButton({ value }: { value: CalculatorAction }) {
    const {
        currentValue,
        oldValue,
        currentAction,
        setCurrentValue,
        setOldValue,
        setCurrentAction
    } = useCalculatorContext();

    function onActionClick(): void {
        const input = currentValue ?? oldValue;

        // Обработка CLEAR
        if (value === CalculatorAction.Clear) {
            setCurrentValue(0);
            setOldValue(0);
            setCurrentAction(null);
            return;
        }

        // Обработка односторонних операций
        if (value === CalculatorAction.Reciprocal && input !== 0) {
            setCurrentValue(1 / input);
            return;
        }

        if (value === CalculatorAction.Square) {
            setCurrentValue(input * input);
            return;
        }

        if (value === CalculatorAction.Sqrt) {
            setCurrentValue(Math.sqrt(input));
            return;
        }

        // Обработка Equals
        if (value === CalculatorAction.Equals && currentAction && currentValue != null) {
            let result = oldValue;

            switch (currentAction) {
                case CalculatorAction.Add:
                    result = oldValue + currentValue;
                    break;
                case CalculatorAction.Subtract:
                    result = oldValue - currentValue;
                    break;
                case CalculatorAction.Multiply:
                    result = oldValue * currentValue;
                    break;
                case CalculatorAction.Divide:
                    if (currentValue === 0) {
                        alert("Деление на ноль невозможно");
                        return;
                    }
                    result = oldValue / currentValue;
                    break;
            }

            setCurrentValue(result);
            setOldValue(result);
            setCurrentAction(null);
            return;
        }

        // Если есть текущая операция и новое значение — выполнить промежуточный результат
        if (
            currentAction &&
            currentValue != null &&
            (value === CalculatorAction.Add ||
                value === CalculatorAction.Subtract ||
                value === CalculatorAction.Multiply ||
                value === CalculatorAction.Divide)
        ) {
            let result = oldValue;

            switch (currentAction) {
                case CalculatorAction.Add:
                    result = oldValue + currentValue;
                    break;
                case CalculatorAction.Subtract:
                    result = oldValue - currentValue;
                    break;
                case CalculatorAction.Multiply:
                    result = oldValue * currentValue;
                    break;
                case CalculatorAction.Divide:
                    if (currentValue === 0) {
                        alert("Деление на ноль невозможно");
                        return;
                    }
                    result = oldValue / currentValue;
                    break;
            }

            setOldValue(result);
            setCurrentValue(null);
            setCurrentAction(value);
            return;
        }

        // Начало новой операции
        if (
            value === CalculatorAction.Add ||
            value === CalculatorAction.Subtract ||
            value === CalculatorAction.Multiply ||
            value === CalculatorAction.Divide
        ) {
            setOldValue(input);
            setCurrentValue(null);
            setCurrentAction(value);
        }
    }

    return <CalculatorButton onClick={onActionClick} title={value} />;
}

export default ActionButton;
