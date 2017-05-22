function intersection(setA, setB) {
    return new Set([...setA].filter(x => setB.has(x)))
}

function uniqueArray(array) {
    function isItFirstOccurrence(element, index, array) {
	return index == array.indexOf(element)
    }
    return array.slice().filter(isItFirstOccurrence)
}

function sortByLengthDown(array) {
    return array.slice().sort((a, b) => b.length - a.length )
}

function removeFromArray(array, element) {
    const index = array.indexOf(element);
    
    if (index !== -1) {
        array.splice(index, 1);
    }
}
