class Filter {
    constructor() {
	this._vetoed = false
	this._changed = false
	this._filterName = "unnamed filter"
    }    
    
    get vetoed() {
	return this._vetoed
    }

    get changed() {
	return this._changed
    }

    filter(name) {
	return this.afterFilter(this.onFilter(this.beforeFilter(name)))
    }    

    beforeFilter(name) {
	this._changed = false
	this._oldName = name
	return name
    }

    onFilter(name) {
	if (name == false) {
	    return false
	}
    }

    afterFilter(name) {
	if (name != this._oldName) {
	    this._changed = true
	}
	console.log(this._filterName + ": " + " " + this._oldName + " --> " + name )
	return name
    }
    
    afterSuccess() {
	this._vetoed = false
	this._changed = false
    }

    afterFail() {
	this._vetoed = false
	this._changed = false
    }

    _veto() {
	this._vetoed = true
	return false
    }

}



class ConsonantsPatternsFilter extends Filter {
    constructor(names) {
	super()
	this._filterName = "consonants patterns"
	this._consonants = CONSONANTS
	this._regex = new RegExp("[" + this._consonants.join("|") + "]+", "ig")
	
	this._allowedGroups = []
	names.forEach(name => {
	    let groups = name.match(this._regex)
	    if (groups) {
		this._allowedGroups = this._allowedGroups.concat(groups)
	    }
	})
	this._allowedGroups = uniqueArray(this._allowedGroups)
	console.log("ALLOWED GROUPS: ", this._allowedGroups)
    }

    onFilter(name) {
	if (super.onFilter(name) == false) {
	    return this._veto()
	}
	let groups = name.match(this._regex)
	console.log("GROUPS: ", groups)
	let isOk = true
	groups.forEach(group => {
	    if (!this._allowedGroups.includes(group)) {
		isOk = false
	    }
	})
	if (isOk) {
	    return name
	}
	else {
	    return this._veto()
	}

    }

}


class VowelsPatternsFilter extends Filter {
    constructor(names) {
	super()
	this._filterName = "vowels patterns"
	this._vowels = [
	    "a","o","i","e","u","y",
	    "ó","ę","ą",
	    "æ","á","à","ă","ắ",
	    "â","ǎ","ä","ã","ȧ",
	    "ā","ȃ","å",
	    "é","è","ê","ě","ë",
	    "ẽ","ė","ē",
	    "ə",
	    "í","ì","î","ï","ĩ",
	    "İ","į","ī",
	    "ò","ô","ö","ő","õ",
	    "ø","ǫ","ō","ơ","œ",    
	    "ú","ù","ŭ","û","ů",
	    "ü","ű","ũ","ų","ū",
	    "ư",
	    "ý","ỳ","ÿ",
	]
	this._regex = new RegExp("[" + this._vowels.join("|") + "]+", "ig")
	
	this._allowedGroups = []
	names.forEach(name => {
	    let groups = name.match(this._regex)
	    if (groups) {
		this._allowedGroups = this._allowedGroups.concat(groups)
	    }
	})
	this._allowedGroups = uniqueArray(this._allowedGroups)
	console.log("ALLOWED GROUPS: ", this._allowedGroups)
    }

    onFilter(name) {
	super.onFilter(name)
	let groups = name.match(this._regex)
	console.log("GROUPS: ", groups)
	let isOk = true
	groups.forEach(group => {
	    if (!this._allowedGroups.includes(group)) {
		isOk = false
	    }
	})
	if (isOk) {
	    return name
	}
	else {
	    return this._veto()
	}

    }

}


class RepeatedLettersFilter extends Filter {
    constructor(names) {
	super()
	this._filterName = "repeating letters"
	this._allowedRepeats = []
	this._repeatsPattern = /(.)\1+|(.)/ig
	names.forEach(name => {
	    let repeats = name.match(this._repeatsPattern)
	    if (repeats) {
		this._allowedRepeats = this._allowedRepeats.concat(repeats)
	    }
	})
	this._allowedRepeats = uniqueArray(this._allowedRepeats)
    }

    onFilter(name) {
	super.onFilter(name)
	let parts = name.match(this._repeatsPattern)
	const cutAndCheck = (part) => {
	    if (part.length > 1) {
		if (!this._allowedRepeats.includes(part.toLowerCase())) {
		    part = part.slice(0,-1)
		    return cutAndCheck(part)
		}
		else {
		    return part
		}    
	    }
	    else {
		return part
	    }
	}
	return parts.map(cutAndCheck).join("")
    }

}


class UniquenessFilter extends Filter {
    constructor(names) {
	super()
	this._filterName = "uniquennes"
	this._toAvoid = names.slice()
    }

    onFilter(name) {
	super.onFilter()
	if (this._toAvoid.includes(name)) {
	    return this._veto()
	}
	else {
	    return name
	}
    }

    afterSuccess() {
	super.afterSuccess()
	console.log("AFTER SUCCESS ", this._oldName )
	this._toAvoid.push(this._oldName)
    }
    
}


class NameLengthFilter extends Filter {
    constructor(names) {
	super()
	this._filterName = "length filter"
	const sortedNames = sortByLengthDown(names)
	const all = names.length
	const ANOMALY_RATIO = 0.05
	
	this._min = sortedNames[sortedNames.length - 1].length
	this._max = sortedNames[0].length
	while (sortedNames.filter(name => {return name.length <= this._min}).length / all <= ANOMALY_RATIO) {
	    this._min++
	}
	while (sortedNames.filter(name => {return name.length >= this._max}).length / all <= ANOMALY_RATIO) {
	    this._max--
	}
    }

    onFilter(name) {
	super.onFilter(name)	
	if (name.length >= this._min && name.length <= this._max) {
	    return name
	}
	else {
	    return this._veto()
	}
    }
}



class Generator {
    constructor(names, theCase, ...splitters) {
	this._names = names
	this._case = theCase
	this._splitters = splitters
	this._filters = []
    }

    addFilter(Filter) {
	this._filters.push(new Filter(this._names))
    }


    
    _filtered(name, triesLimit) {
	let tries = 0
	let generatedName = name

	const success = () => {
	    this._filters.forEach(filter => {
	    	filter.afterSuccess()
	    })
	}

	const fail = () => {
	    this._filters.forEach(filter => {
	    	filter.afterFail()
	    })
	}

	const isVetoed = () => {
	    let vetos = []
	    this._filters.forEach(filter => {
	    	vetos.push(filter.vetoed)
	    })
	    if (vetos.includes(true)) {
		return true
	    }
	    else {
		return false
	    }
	}

	const isChanged = () => {
	    let changes = []
	    this._filters.forEach(filter => {
	    	changes.push(filter.changed)
	    })
	    if (changes.includes(true)) {
		return true
	    }
	    else {
		return false
	    }
	}

	const filterRound = () => {
	    this._filters.forEach(filter => {
	    	generatedName = filter.filter(generatedName)
	    })	    	    
	}
	
	do {
	    tries++
	    filterRound()
	} while (tries < triesLimit && !isVetoed() && isChanged())
	if (generatedName) {
	    success()
	}
	else {
	    fail()
	}
	return generatedName
    }
    
    generate(amount) {
	const generated = []
	let currentSplitter
	let currentFirstPart
	let currentMiddlePart
	let currentLastPart
	let generatedName
	let vetos
	let changes
	let allTriesCountDown = amount * 3
	const filtersTriesLimit = 3
	do {
	    allTriesCountDown--
	    currentSplitter = randomElement(this._splitters)
	    currentFirstPart = currentSplitter.getFirstPart(randomElement(this._names))
	    currentMiddlePart = currentSplitter.getMiddlePart(randomElement(this._names))
	    currentLastPart = currentSplitter.getLastPart(randomElement(this._names))
	    generatedName = currentFirstPart + currentMiddlePart + currentLastPart


	    generatedName = this._filtered(generatedName, filtersTriesLimit)

	    if (this._case == "capitalized" && generatedName != false) {
		generatedName = generatedName.charAt(0).toUpperCase() + generatedName.slice(1)
	    }

	    
	    if (generatedName != false) {
		generated.push(generatedName)
	    }
	    
	} while (generated.length < amount && allTriesCountDown > 0)

	return generated.sort((a,b) => {if (a < b) return -1; else return 1}) 
    }


}
