
const numberBtn = document.querySelectorAll('.numbersBtn');
const operatorBtn = document.querySelectorAll('.operatorBtn');
const resultBtn = document.querySelector('.resultBtn');
const clearBtn = document.querySelector('.clearBtn');
const backspaceBtn = document.querySelector('.backspaceBtn');
const outputScreen = document.querySelector('.output');

setInterval(()=>{
    const target = document.querySelector('body');
    target.classList.toggle('light_theme');
},30000)


class Calculator {
    constructor(outputScreen, inputtext) {
        this.outputScreen = outputScreen
        this.inputtext = inputtext;
    }
    inputValue(number) {
        if (number === '.' && this.outputScreen.innerHTML !== '') {
            if (this.outputScreen.innerHTML.includes('+')) {
                const index = this.getIndexOfOP('+');
                const data = this.getRgihtOP(index);
                if (!data.includes('.')) {
                    this.outputScreen.innerHTML = this.outputScreen.innerHTML + "" + number;
                }
            }
            if (this.outputScreen.innerHTML.includes('-')) {
                const index = this.getIndexOfOP('-');
                const data = this.getRgihtOP(index);
                if (!data.includes('.')) {
                    this.outputScreen.innerHTML = this.outputScreen.innerHTML + "" + number;
                }
            }
            if (this.outputScreen.innerHTML.includes('*')) {
                const index = this.getIndexOfOP('*');
                const data = this.getRgihtOP(index);
                if (!data.includes('.')) {
                    this.outputScreen.innerHTML = this.outputScreen.innerHTML + "" + number;
                }
            }
            if (this.outputScreen.innerHTML.includes('÷')) {
                const index = this.getIndexOfOP('÷');
                const data = this.getRgihtOP(index);
                if (!data.includes('.')) {
                    this.outputScreen.innerHTML = this.outputScreen.innerHTML + "" + number;
                }
            }
        }
        if (number === '0' && this.outputScreen.innerHTML === '') {
            this.inputtext = '';
            return;
        }
        if (number === '.' && this.outputScreen.innerHTML === '') {
            this.inputtext = '';
            return;
        }
        (this.outputScreen.innerHTML.includes('.') && number === ".") ? this.inputtext = this.outputScreen.innerHTML + "" : this.inputtext = this.outputScreen.innerHTML + "" + number;
    }
    showInScreen() {
        this.outputScreen.innerHTML = this.inputtext;
    }
    clearScreen() {
        this.outputScreen.innerHTML = '';
    }
    backSpace() {
        // console.log(this.outputScreen.innerHTML.slice(0,-1))
        this.outputScreen.innerHTML = this.outputScreen.innerHTML.slice(0, -1);
    }
    operation(op) {

        if (this.outputScreen.innerHTML.includes('+') || this.outputScreen.innerHTML.includes('-') || this.outputScreen.innerHTML.includes('*') || this.outputScreen.innerHTML.includes('÷')) {
            // if already the operator is selected the return
            return;
        } else if (this.outputScreen.innerHTML === "") {
            // if no operands mention then return
            return;
        } else {
            // console.log(this.outputScreen.innerHTML.includes(op))
            switch (op) {
                case '+': this.outputScreen.innerHTML = this.outputScreen.innerHTML + "" + op + ""; return;
                case '-': this.outputScreen.innerHTML = this.outputScreen.innerHTML + "" + op + ""; return;
                case '*': this.outputScreen.innerHTML = this.outputScreen.innerHTML + "" + op + ""; return;
                case '÷': this.outputScreen.innerHTML = this.outputScreen.innerHTML + "" + op + ""; return;
                default: return;
            }
        }
    }
    getIndexOfOP(op) {
        return this.outputScreen.innerHTML.indexOf(op);
    }
    getLeftOP(v) {
        return this.outputScreen.innerHTML.slice(0, v);
    }
    getRgihtOP(v) {
        return this.outputScreen.innerHTML.slice(v + 1);
    }
    getOutput(operator) {
        const index = this.getIndexOfOP(operator);
        const leftOperand = this.getLeftOP(index);
        const rightOperand = this.getRgihtOP(index);
        switch (operator) {
            case '+': return (+leftOperand) + (+rightOperand);
            case '-': return (+leftOperand) - (+rightOperand)
            case '*': return (+leftOperand) * (+rightOperand)
            case '÷': return (+leftOperand) / (+rightOperand)
            default: return
        }
    }

    compute() {
        if (this.outputScreen.innerHTML.includes('+')) {
            this.outputScreen.innerHTML = this.getOutput('+');
        }
        else if (this.outputScreen.innerHTML.includes('-')) {
            this.outputScreen.innerHTML = this.getOutput('-');
        }
        else if (this.outputScreen.innerHTML.includes('*')) {
            this.outputScreen.innerHTML = this.getOutput('*');
        }
        else if (this.outputScreen.innerHTML.includes('÷')) {
            this.outputScreen.innerHTML = this.getOutput('÷');
        }
    }

}





// created new instance on class
const calculator = new Calculator(outputScreen, "");

// adding a clicked Number & showing In screen output
numberBtn.forEach(btn => btn.addEventListener('click', () => {
    calculator.inputValue(btn.innerHTML)
    calculator.showInScreen();
}))

// clearing all screen data 
clearBtn.addEventListener('click', () => calculator.clearScreen());

// deleting a element one by one
backspaceBtn.addEventListener('click', () => calculator.backSpace());

// performing the operations 
operatorBtn.forEach(op => op.addEventListener('click', () => calculator.operation(op.innerHTML)));

// click to compute res
resultBtn.addEventListener('click', () => calculator.compute());