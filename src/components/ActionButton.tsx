import { useCalculatorContext } from "../CalculatorContext";
import { CalculatorAction } from "./CalculatorActions";
import CalculatorButton from "./CalculatorButton";

function ActionButton({ value }: { value: CalculatorAction }) {
    const context = useCalculatorContext()

    function onActionClick(): void {
        const oldValue = context.oldValue;
        const currentValue = context.currentValue ?? context.oldValue;
        if (context.currentAction) {
            let result: number = 0;

            switch (value) {
                case CalculatorAction.Add:
                    result = currentValue + oldValue;
                    break;
                case CalculatorAction.Subtract:
                    break;
                case CalculatorAction.Multiply:
                    break;
                case CalculatorAction.Divide:
                    break;
                case CalculatorAction.Clear:
                    break;
                case CalculatorAction.Equals:
                    break;
                case CalculatorAction.Comma:
                    break;
                case CalculatorAction.Reciprocal:
                    break;
                case CalculatorAction.Square:
                    break;
                case CalculatorAction.Sqrt:
                    break;
            }
            context.setOldValue(result);
            context.setCurrentValue(null)
            return;
        }

        if (context.currentAction === CalculatorAction.Equals)
            return;

        context.setCurrentAction(value)
        context.setOldValue(currentValue)
        context.setCurrentValue(null)
    }

    return <CalculatorButton onClick={onActionClick} title={value} />
}
export default ActionButton;
//при нажатии на кнопку если текущий action null тогда надо записать то что в кнопке в action а текущее число из контекста которое там есть записать в предыдущее значение
//иначе выполнить действие в кнопке в зависимости от enum и результат записать в текущее значение