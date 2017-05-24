window.addEventListener('load', main)

function main() {
    const groups = []
    RealNamesGroups.forEach(realNamesGroup => {
	groups.push(constructGroup(realNamesGroup))
    })
    let howMany = 1
    const wantACouple = document.getElementById("want-a-couple")
    const wantMore = document.getElementById("want-more")
    setHowMany()
					      
    const generateButton = document.getElementById("generate-button")
    setGenerateButtonText()
    
    const input = new Input(groups)

    const inputSection = document.getElementById("input-section")

    // inputSection.appendChild(input.uiElement)
    inputSection.insertBefore(input.uiElement, inputSection.childNodes[6])
    const listOfSelected = new ListOfSelected(input.pickedNameSetsLabels)

    const listOfGenerated = document.getElementById("list-of-generated")
    
    input.uiElement.addEventListener("change", function(event) {
	input.onChanging(event)
	listOfSelected.update(input.pickedNameSetsLabels)
	// console.log("CHANGE!", input.pickedNameSets)
    })

    generateButton.addEventListener("click", generate)

    document.getElementById("how-many-names").addEventListener("change", setGenerateButtonText)
    
    function constructNameSet(rawObject) {
	return new NameSet(rawObject.names, rawObject.label, rawObject.splitters, rawObject.filters)
    }

    function constructGroup(rawObject) {
	const lefts = []
	const rights = []
	rawObject.nameSets.forEach(nameSet => {
	    if (nameSet.column == "left") {
		lefts.push(constructNameSet(nameSet))
	    }
	    else {
		rights.push(constructNameSet(nameSet))
	    }
	})
	return new Group(rawObject.label, lefts, rights)
    }

    function generate() {
	const generator = new Generator(Array.from(input.pickedNameSets))
	while (listOfGenerated.hasChildNodes()) {
	    listOfGenerated.removeChild(listOfGenerated.lastChild);
	}
	
	generator.generate(howMany).forEach(name => {
	    listOfGenerated.appendChild(generateElement("li", {textNode: name}))
	})
    }

    function setHowMany() {
	if (wantMore.checked) {
	    howMany = wantMore.value
	}
	else {
	    howMany = wantACouple.value
	}
    }

    function setGenerateButtonText() {
	setHowMany()
	generateButton.textContent = "Generate (" + howMany  + ")"
    }
}
