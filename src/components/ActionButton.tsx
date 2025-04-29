import { useCalculatorContext } from "../CalculatorContext";
import { CalculatorAction } from "./CalculatorActions";
import CalculatorButton from "./CalculatorButton";

function ActionButton({ value }: { value: CalculatorAction }) {
    const context = useCalculatorContext()

    function onActionClick(): void {
        const { oldValue, currentValue, currentAction, setOldValue, setCurrentValue, setCurrentAction } = context;
    
        const input = currentValue ?? oldValue;
    
        
        if (currentAction && currentValue != null) {
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
                default:
                    return; 
            }
    
            setOldValue(result);        
            setCurrentValue(null);      
            setCurrentAction(value);    
            return;
        }
    
        
        setOldValue(input);
        setCurrentValue(null);
        setCurrentAction(value);
    }

    return <CalculatorButton onClick={onActionClick} title={value} />
}
export default ActionButton;
//при нажатии на кнопку если текущий action null тогда надо записать то что в кнопке в action а текущее число из контекста которое там есть записать в предыдущее значение
//иначе выполнить действие в кнопке в зависимости от enum и результат записать в текущее значение