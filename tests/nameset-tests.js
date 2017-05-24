console.log("NAMESET TESTS")
// constructor create: actual_names, nameset_name, splitters, filters
// getter: picked
// getter: names
// getter: label
// getter: uiElement

{
    let names = ["Agata", "Beata", "Celina", "Dorota", "Ewelina", "GraÄšĹşyna", "Halina", "Iwona", "Jagoda", "Katarzyna", "Monika", "Natalia", "Patrycja", "Renata", "Sylwia"]
    let namesLabel = "Polish Female"
    let groupLabel = "Slavic names"
    let splitters
    let filters
    let subject = new NameSet(names, namesLabel, splitters, filters)
    let testName

    {
	testName = "is instance of NameSet"
	let result = subject instanceof NameSet
	let expected = true
	if (result == expected) {
	    console.log("OK, " + testName + "; " + result + " == " + expected)
	}
	else {
	    console.log("FAIL, " + testName + "; " + result + " == " + expected)
	}
    }

    {
	testName = "can return names as an array"
	let result = subject.names instanceof Array
	let expected = true
	if (result == expected) {
	    console.log("OK, " + testName + "; " + result + " == " + expected)
	}
	else {
	    console.log("FAIL, " + testName + "; " + result + " == " + expected)
	}
    }
    
    {
	testName = "can return names as an array with the proper length"
	let result = subject.names.length
	let expected = names.length
	if (result == expected) {
	    console.log("OK, " + testName + "; " + result + " == " + expected)
	}
	else {
	    console.log("FAIL, " + testName + "; " + result + " == " + expected)
	}
    }
    
    {
	testName = "can return ui element"
	let result = subject.uiElement.innerHTML
	let expected = generateNameSetGUI(namesLabel).innerHTML
	if (result == expected) {
	    console.log("OK, " + testName + "; " + result + " == " + expected)
	}
	else {
	    console.log("FAIL, " + testName + "; " + result + " == " + expected)
	}
    }

    {
	testName = "can return label"
	let result = subject.label
	let expected = namesLabel
	if (result == expected) {
	    console.log("OK, " + testName + "; " + result + " == " + expected)
	}
	else {
	    console.log("FAIL, " + testName + "; " + result + " == " + expected)
	}
    }

    {
	testName = "can return picked false"
	let result = subject.picked
	let expected = false
	if (result === expected) {
	    console.log("OK, " + testName + "; " + result + " == " + expected)
	}
	else {
	    console.log("FAIL, " + testName + "; " + result + " == " + expected)
	}
    }

    unitTest(
	"the first child has property which is an instance of NameSet",
	subject.uiElement.childNodes[0].ownerNameSet instanceof NameSet,
	true
    )
   
}

  ///////// test element //////////////
 ///////// test element //////////////
///////// test element //////////////

{
    let label = "Test element"
    let result = generateNameSetGUI(label)
    let testName

    // the element should be like this:
    //
    // <div class="group-box__item">
    // 	<input type="checkbox" class="group-box__checkbox"></input>
    // 	<div class="group-box__label">Ul xdties mxdfxdi</div>
    // </div>

    testName = "the element is div"
    if ( result.tagName == "DIV" ) {
	console.log("OK - " + testName)
    }
    else {
	console.log("Failed - " + testName)
    }

    testName = "the element has two children"
    if ( result.childNodes.length == 2 ) {
	console.log("OK - " + testName)
    }
    else {
	console.log("Failed - " + testName)
    }
    
    testName = "the first child is input"
    if ( result.childNodes[0].tagName == "INPUT" ) {
	console.log("OK - " + testName)
    }
    else {
	console.log("Failed - " + testName)
    }

    testName = "the second child is label"
    if ( result.childNodes[1].tagName == "LABEL" ) {
	console.log("OK - " + testName)
    }
    else {
	console.log("Failed - " + testName)
    }
    
    testName = "the first child has no children"
    if ( result.childNodes[0].childNodes.length == 0 ) {
	console.log("OK - " + testName)
    }
    else {
	console.log("Failed - " + testName)
    }
    
    testName = "the second child has one children"
    if ( result.childNodes[1].childNodes.length == 1 ) {
	console.log("OK - " + testName)
    }
    else {
	console.log("Failed - " + testName)
    }

    testName = "the second child child is a text node"
    if ( result.childNodes[1].childNodes[0].nodeType == Node.TEXT_NODE ) {
	console.log("OK - " + testName)
    }
    else {
	console.log("Failed - " + testName)
    }

    testName = "the text node has the proper content"
    if ( result.childNodes[1].textContent == label ) {
	console.log("OK - " + testName)
    }
    else {
	console.log("Failed - " + testName)
    }

    testName = "the first child has type checkbox"
    if ( result.childNodes[0].getAttribute("type") == "checkbox" ) {
	console.log("OK - " + testName)
    }
    else {
	console.log("Failed - " + testName)
    }

     
}
console.log("///////////////////////////////////////")
