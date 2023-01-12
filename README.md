# uncapped-lib.js

uncapped-lib.js is a JavaScript library designed to cleanly and easily push the number limit much farther than its default value.


## Quick Start
* Step 1: Add the following to your html header:
```
<script src="https://raw.githubusercontent.com/snowStorrm/uncapped-lib.js/master/src/uncapped-lib.js"></script>
```
* Step 2: That's it!


## Using Uncapped Numbers

uncapped-lib.js uses classes to define its numbers. To create an uncapped number, do the following:
```
let myNewNumber = new number(decimal, exponent);
```
This will create a new variable in scientific notation. The decimal and exponent are optional and will default to 0 when left unset.
Now, in this example I'll leave the decimal and exponent as 0, so our new uncapped number variable is equal to 0.0 x 10^0, or just 0.

uncapped-lib.js currently supports the 4 basic math operators between ONLY uncapped numbers (this will be fixed in the future).
```
numAdd(number-1, number-2);
```
Returns a new uncapped number equal to the sum of its two inputs.
```
numSub(number-1, number-2);
```
Returns a new uncapped number equal to number-1 minus number-2.
```
numMult(number-1, number-2);
```
Returns a new uncapped number equal to the product of its two inputs.
```
numDiv(number-1, number-2);
```
Returns a new uncapped number equal to number-1 divided by number-2.

uncapped-lib.js also supports comparing two uncapped numbers.
```
compare(OPERATOR, number-1, number-2);
```
Returns true or false depending on the OPERATOR variable input.
Accepted operators:
- `GREATER_THAN`: tests if number-1 is greater than number-2.
- `GREATER_EQUAL`: tests if number-1 is greater than or equal to number-2.
- `LESS_THAN`: tests if number-1 is less than number-2.
- `LESS_EQUAL`: tests if number-1 is less than or equal to number-2.
- `EQUAL`: tests if number-1 is equal to number-2.


