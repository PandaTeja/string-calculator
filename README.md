# string-calculator TDD

This project is a simple string calculator implemented using **Test Driven Development (TDD)**. The calculator can handle a string of comma-separated numbers, support custom delimiters, handle new lines between numbers, and throw an exception for negative numbers.

## Features

- Handle an empty string and return 0.
- Handle a single number and return the number itself.
- Handle multiple numbers and return their sum.
- Support new lines as delimiters.
- Support custom delimiters.
- Throw an exception if any negative number is included in the input.

## Getting Started

Follow the instructions below to clone the repository, install dependencies, and run the tests.

### Prerequisites

Ensure you have **Node.js** and **npm** installed on your machine. You can download Node.js from [here](https://nodejs.org/).

### Installation

1. **Clone the repository**

   Use the following command to clone this repository:

   ```bash
   git clone https://github.com/PandaTeja/string-calculator.git

2.cd string-calculator

3.npm install

4.npm test

const { add } = require('./src/StringCalculator');

console.log(add("")); // Output: 0
console.log(add("1")); // Output: 1
console.log(add("1,2")); // Output: 3
console.log(add("1\n2,3")); // Output: 6
console.log(add("//;\n1;2")); // Output: 3

Contact Details:
Name - Panda Eswara Teja
Email - eswartejapanda@gmail.com

