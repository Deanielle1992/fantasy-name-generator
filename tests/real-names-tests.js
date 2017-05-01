console.log("REAL NAMES TESTS")
{
    let result = RealNamesGroups[0].nameSets[3].names[0]
    let expected = "Bądzsława"
    if (result == expected) {
	console.log("OK, " + result + " == " + expected)
    }
    else {
	console.log("FAIL, " + result + " == " + expected)
    }
}
{
    let result = RealNamesGroups[0].label
    let expected = "The First Group"
    if (result == expected) {
	console.log("OK, " + result + " == " + expected)
    }
    else {
	console.log("FAIL, " + result + " == " + expected)
    }
}
{
    let result = RealNamesGroups[0].nameSets[0].label
    let expected = "Celtic male"
    if (result == expected) {
	console.log("OK, " + result + " == " + expected)
    }
    else {
	console.log("FAIL, " + result + " == " + expected)
    }
}
{
    let result = RealNamesGroups[0].nameSets[0].column
    let expected = "left"
    if (result == expected) {
	console.log("OK, " + result + " == " + expected)
    }
    else {
	console.log("FAIL, " + result + " == " + expected)
    }
}
console.log("///////////////////////////////////////")
