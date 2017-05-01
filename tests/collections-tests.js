console.log("HELPERS TESTS")

testLog(uniqueArray, [ [1,1,2,3,4,4,5,6,7,"fd","3"] ], [1,2,3,4,5,6,7,"fd","3"])
testLog(sum, [ 1,2,3,4 ], 10)

{
    let result = RealNamesGroups[0].nameSets[3].names[0]
    let expected = "B±dzs³awa"
    if (result == expected) {
	console.log("OK, " + result + " == " + expected)
    }
    else {
	console.log("FAIL, " + result + " == " + expected)
    }
}

console.log("///////////////////////////////////////")

