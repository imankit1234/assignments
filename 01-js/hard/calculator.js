class Calculator {
  constructor() {
    this.result = 0;
  }

  add(num) {
    this.result += num;
  }

  subtract(num) {
    this.result -= num;
  }

  multiply(num) {
    this.result *= num;
  }

  divide(num) {
    if (num === 0) {
      throw new Error("Cannot divide by zero");
    }
    this.result /= num;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    const cleanedExpression = expression.replace(/\s+/g, '');
    const numbers = cleanedExpression.match(/(\d+(\.\d+)?)|(-\d+(\.\d+)?)|(\+\d+(\.\d+)?)|(\*\d+(\.\d+)?)|(-\d+(\.\d+)?)|(\(\d+(\.\d+)?\))|\/\d+(\.\d+)?/g);

    if (!numbers) {
      throw new Error("Invalid expression");
    }

    const operators = cleanedExpression.replace(/\d+(\.\d+)?/g, '').split('').filter(char => char.trim() !== '');

    numbers.forEach((token, index) => {
      if (token.startsWith('(')) {
        this.calculate(token.slice(1, -1));
      } else if (token.startsWith('+')) {
        this.add(parseFloat(token.slice(1)));
      } else if (token.startsWith('-')) {
        this.subtract(parseFloat(token.slice(1)));
      } else if (token.startsWith('*')) {
        this.multiply(parseFloat(token.slice(1)));
      } else if (token.startsWith('/')) {
        this.divide(parseFloat(token.slice(1)));
      } else {
        this.add(parseFloat(token));
      }

      if (operators[index] === '-') {
        // Handle subtraction
        this.subtract(parseFloat(numbers[index + 1]));
      } else if (operators[index] === '*') {
        // Handle multiplication
        this.multiply(parseFloat(numbers[index + 1]));
      } else if (operators[index] === '/') {
        // Handle division
        this.divide(parseFloat(numbers[index + 1]));
      }
    });
  }
}

module.exports = Calculator;