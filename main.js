window.addEventListener('load', main)

function main() {
    const groups = []

    RealNamesGroups.forEach(realNamesGroup => {
	groups.push(constructGroup(realNamesGroup))
    })

    const input = new Input(groups)

    const inputSection = document.getElementById("input-section")

    inputSection.appendChild(input.uiElement)

    const listOfSelected = new ListOfSelected(input.pickedNameSetsLabels)

    const listOfGenerated = document.getElementById("list-of-generated")
    
    input.uiElement.addEventListener("change", function(event) {
	input.onChanging(event)
	listOfSelected.update(input.pickedNameSetsLabels)
	console.log("CHANGE!", input.pickedNameSets)
    })

    document.getElementById("generate-button").addEventListener("click", generate)
    
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
	
	generator.generate(30).forEach(name => {
	    listOfGenerated.appendChild(generateElement("li", {textNode: name}))
	})
    }
}
