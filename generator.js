
class Generator {
    constructor(nameSets) {
	this._nameSets = nameSets
	this._splitters = new Set()
	this._filters = new Set()
	this._names = []
	this._nameSets.forEach(nameSet => {
	    console.log("NAMESET:", nameSet)
	    nameSet.splitters.forEach(splitter => {
		this._splitters.add(splitter)
	    })
	    nameSet.filters.forEach(filter => {
		this._filters.add(filter)
	    })  
	    nameSet.names.forEach(name => {
		this._names.push(name)
	    })
	})
	this._splitters = Array.from(this._splitters)
	this._filters = Array.from(this._filters)
	this._filters = this._filters.map(filter => new filter(this._names))
	    
	console.log(this._splitters)
	console.log(this._filters)
	console.log(this._names)
	
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
	    
	    if (generatedName != false) {
		generated.push(generatedName)
	    }
	    
	} while (generated.length < amount && allTriesCountDown > 0)

	return generated.sort((a,b) => {if (a < b) return -1; else return 1}) 
    }


}
