import { Decimal } from "decimal.js";
const num1: Decimal = new Decimal(1);
const num2: Decimal = new Decimal("0.8");
console.log(`${1 - 0.8}`);
console.log(`using decimal.js : ${num1.minus(num2)}`);
