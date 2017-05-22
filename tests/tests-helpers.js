function unitTest(testName, result, expected) {
    if (result === expected) {
	console.log("OK, " + testName + "; " + result + " == " + expected)
    }
    else {
	console.log("FAIL, " + testName + "; " + result + " == " + expected)
    }
}

class Possibilities {
    constructor (...values) {
        this._values = values
	this._message = ""
    }
    get values() {
	return this._values
    }
    toString() {
	this._message = ""
	function printValue(value, index, array) {
	    if (index + 1 == array.length) {
		this._message = this._message + value
	    }
	    else {
		this._message = this._message + value + " or "
	    }
	}
        this._values.forEach(printValue, this)
	return this._message
    }
} 

const testLog = (testedFunction, args, expect) => {
    const result = testedFunction.apply(null, args)
    let expected = expect
    let messagePart1

    // primitives
    if (typeof expected === "string" ||
	typeof expected === "number" ||
	typeof expected === "boolean") {
	if (result === expected) {
	    messagePart1 = ". "
	}
	else {
	    messagePart1 = "F "
	}
    }
    // array
    else if (expected instanceof Array) {
	if (result.toString() === expected.toString()) {
	    messagePart1 = ". "
	}
	else {
	    messagePart1 = "F "
	}
    }
    else if (expected instanceof Possibilities) {
	let values = expected.values
	expected = expected.toString()
	if (values.includes(result)) {
	    messagePart1 = ". "
	}
	else {
	    messagePart1 = "F "
	}
	
    }
    else {
	messagePart1 = "ERROR, UNKNOWN EXPECTED TYPE "
    }
    
    const messagePart2 = "test of " + testedFunction.name + " " + args  + "; expected: " + expected + "; is: " + result
    console.log(messagePart1 + messagePart2)
}
