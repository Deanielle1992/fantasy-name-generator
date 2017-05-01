function fairRound(number) {
    if (number - Math.floor(number) == 0.5) {
	return parseInt(number) + Math.round(Math.random())
    }
    else {
	return Math.round(number)
    }
}

function getMedian(...args) {
    return args.slice().sort()[fairRound((args.length-1)/2)]
}

function sum(...values) {
   return values.reduce(function (a, b) {
      return a + b
   }, 0)
}
