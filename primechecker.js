"use strict"
var prompt = require("prompt");
var PRIME_NUMBER_MESSAGE = " is a prime number";
var NOT_PRIME_NUMBER_MESSAGE = " is not a prime number";
var PrimeCherker = function(number) {
    this.mIsPrime = false;
    this.mInputNumber = 0;
    if (typeof number !== "undefined") {
        this.exec(number);
    }
};
PrimeCherker.isPrime = function(number) {
    var isPrime = true;
    if (number < 2) return isPrime;
    for (var factor = 2; factor * factor <= number; factor++) {
     if (number % factor == 0) {
            isPrime = false;
            break;
        }
    } // End of for loop

    return isPrime;
};
PrimeCherker.prototype = {
    setNumber: function(number) {
        this.mInputNumber = number;
    }
    getNumber: function() {
        return this.mInputNumber;
    }
    toString: function() {
        var message = "";
        return (
            this.mInputNumber +
            (this.mIsPrime ? PRIME_NUMBER_MESSAGE : NOT_PRIME_NUMBER_MESSAGE)
        );
    }
    isPrime: function() {
        return PrimeCherker.isPrime(this.mInputNumber);
    }
    exec: function(number = 0) {
        var isPrime = false;

        try {
            if (typeof number === "undefined") {
                throw "No valid input provided.";
            }
            if (isNaN(number)) {
                throw `${number} is not a valid number.`;
            }

            if(typeof(number, 'Number') && !!(number % 1)){
                throw `${number} is not a valid integer number.`;
            }
            this.setNumber(number);
        } catch (e) {
            console.log("PLEASE ENTER VALID INPUT: " + e);
            return;
        }
        isPrime = PrimeCherker.isPrime(number);
        console.log("PRINTING RESULT USING PrimeChecker STATIC isPrime FUNCTION");
        if (isPrime) {
            console.log(number + PRIME_NUMBER_MESSAGE);
        } else {
            console.log(number + NOT_PRIME_NUMBER_MESSAGE);
        }
        me = this.isPrime();
        console.log("PRINTING RESULT USING PrimeChecker INSTANCE FUNCTION");
        if (isPrime) {
            console.log(this.mInputNumber + PRIME_NUMBER_MESSAGE);
        } else {
            console.log(this.mInputNumber + NOT_PRIME_NUMBER_MESSAGE);
        }
        return;
    }
};
(function() {
    prompt.start();
    prompt.get(["input number"], function(err, result) {
       
        var primeChecker = new PrimeCherker(result["input number"]);
    });
})();