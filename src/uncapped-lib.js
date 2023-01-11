// Copyright (c) 2023 Ryan Zucker
// Licensed under the MIT License

let GREATER_THAN = 1;
let GREATER_EQUAL = 2;
let LESS_THAN = 3;
let LESS_EQUAL = 4;
let EQUAL = 5;
class number {
    constructor(dec, exp) {
        this.decimal = dec || 0.0;
        this.exp = exp || 0;
    }
    display() {
        return this.decimal.toFixed(3) + ' * 10^' + this.exp;
    }
}
function scaleNumToTarget(num, target) {
    let diff = (num.exp - target);
    return new number(num.decimal * Math.pow(10, diff), target);
}
function correctNum(num) {
    let negative = false;
    if (num.decimal < 0) {
        num.decimal *= -1;
        negative = true;
    }
    while (num.decimal >= 10.0) {
        num.decimal = num.decimal / 10.0;
        num.exp = num.exp + 1.0;
    }
    while (num.decimal < 1.0) {
        num.decimal = num.decimal * 10;
        num.exp = num.exp - 1.0;
    }
    if (negative) {
        num.decimal *= -1;
    }
    return num;
}
function numAdd(num1, num2) {
    let scaledAdd = scaleNumToTarget(num1, num2.exp);
    let added = num2.decimal + scaledAdd.decimal;
    return correctNum(new number(added, num2.exp));
}
function numMult(num1, num2) {
    let newDecimal = num1.decimal * num2.decimal;
    let newExp = num1.exp + num2.exp;
    return correctNum(new number(newDecimal, newExp));
}
function numDiv(num1, num2) {
    let newDecimal = num1.decimal / num2.decimal;
    let newExp = num1.exp - num2.exp;
    return correctNum(new number(newDecimal, newExp));
}
function numSub(num1, num2) {
    num2.decimal *= -1.0;
    let subtracted = numAdd(num1, num2);
    return subtracted;
}
function compare(operator, num1, num2) {
    let output;
    switch (operator || 0) {
        case 1:
            output = ((num1.decimal > num2.decimal && num1.exp == num2.exp) || (num1.exp > num2.exp));
            break;
        case 2:
            output = ((num1.decimal >= num2.decimal && num1.exp == num2.exp) || (num1.exp > num2.exp));
            break;
        case 3:
            output = ((num1.decimal < num2.decimal && num1.exp == num2.exp) || (num1.exp < num2.exp));
            break;
        case 4:
            output = ((num1.decimal <= num2.decimal && num1.exp == num2.exp) || (num1.exp < num2.exp));
            break;
        case 5:
            output = (num1.decimal == num2.decimal && num1.exp == num2.exp);
            break;
        default:
            throw new Error('Invalid operator selected!');
    }
    return output;
}
