function buildRegexToSplit(separators, caseless=true, where="after") {
    let sortedSeparators = sortByLengthDown(separators)
    let orPart = "("
    let norPart = "("
    let modPart = "ig"
    let oneChar = false
    if (!caseless) {
	modPart = "g"
    }
    sortedSeparators.forEach(separator => {
	if (separator.length > 1) {
	    orPart += separator + "|"
	    norPart += "^" + separator + "|"
	}
	else {
	    if (!oneChar) {
		oneChar = true
		orPart += "[" + separator
		norPart += "[" + "^" + separator
	    }
	    else {
		orPart += separator
		norPart += separator
	    }
	}
    })
    if (oneChar) {
	orPart += "])"
	norPart += "])"
    }
    else {
	orPart = orPart.slice(0, -1)
	orPart += ")"
	norPart = norPart.slice(0, -1)
	norPart += ")"
    }
    if (where == "after") {
	return new RegExp(norPart + "{0,}" + orPart + "{0,}", modPart)
    }
    else if (where == "before") {
	return new RegExp(orPart + "{0,}" + norPart + "{0,}", modPart)
    }
    else if (where == "instead") {
	return new RegExp(norPart, modPart)
    }
    else {
	throw "unknown split method as an argument!"
    }
}
