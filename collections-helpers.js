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

function sortByLengthUp(array) {
    return array.slice().sort((a, b) => a.length - b.length )
}

function removeFromArray(array, element) {
    const index = array.indexOf(element);
    
    if (index !== -1) {
        array.splice(index, 1);
    }
}

function flatten(ary) {
    var ret = [];
    for(var i = 0; i < ary.length; i++) {
        if(Array.isArray(ary[i])) {
            ret = ret.concat(flatten(ary[i]));
        } else {
            ret.push(ary[i]);
        }
    }
    return ret;
}
