const Calculator = { // a const variable that will contain 4 keys and keyvalues
    Display_Value: '0', //the value that is actively beeing displayed on our calc
    First_Operand: null, //the first operand
    Wait_Second_Operand: false, // a bool to check if we have a second operand waiting
    operator: null, // where we store the operator
};

function Input_Digit(digit) { // pass in the digit the user has selected
    const {Display_Value, Wait_Second_Operand} = Calculator; // instantiate const within scope
    if (Wait_Second_Operand === true) { // do we have a second operand, if so,
        Calculator.Display_Value = digit; // set the display to the new operand
        Calculator.Wait_Second_Operand = false; // set it to false since we have process the new digit
    } else { // if first operand then set the out of scope Calculator to display digit,
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
        // ternary operator to see whether we need to tack the digit onto the end or replace the zero with the digit
    }
}

function Input_Decimal(dot) {
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) { // check to see if there isnt already a decimal
        Calculator.Display_Value += dot; // concatenate dot onto the end
    }
}

function Handle_Operator(Next_Operator) { 
    const {First_Operand, Display_Value, operator} = Calculator;
    const Value_of_Input = parseFloat(Display_Value); //use parseFloat to grab a float of the displayed value since it is a string
    if (operator && Calculator.Wait_Second_Operand) { // is the operator 'null'? and is our Wait value false? no? then go ahead and set our new operator
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) { // no operand yet? throw the parsed float into the first operand
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) { // all else fails, and operator isnt null? make call to perform calculation arrow methods to get result
        const Value_Now = First_Operand || 0;
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        result = Number(result).toFixed(9);// shrink the decimal to the ninth place just in case
        result = (result * 1).toString();
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = { //where we will do the simple operations after we have all the info we need
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};

function Calculator_Reset() { //a simple reset
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

function Update_Display() { // change the value of the .calculator-screen class to our value wihtin calculator
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display(); // run Update_Display() on load of webpage

const keys = document.querySelector('.calculator-keys'); // a const that contains all the different keys that are classed
keys.addEventListener('click', (event) => { // listen for 'click' events of our keys
    const { target } = event; // handle the event within target

    if (!target.matches('button')) { //not a 'button'? exit the function
        return;
    }
    if (target.classList.contains('operator')) { // did we click an operator
        Handle_Operator(target.value); // pass in whatever operator that was selected
        Update_Display(); //work the operator then update the display
        return;
    }
    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('all-clear')) { // was ac pressed? reset calc
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
})