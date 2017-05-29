window.addEventListener('load', main)

function main() {
    const groups = []
    RealNamesGroups.forEach(realNamesGroup => {
	groups.push(constructGroup(realNamesGroup))
    })
    const radioGroup = document.getElementById("how-many-names")
    radioGroup.getValue = function() {
	return this.querySelector("input[name='how-many']:checked").value
	
    }
    radioGroup.addEventListener("change", setGenerateButtonText)

    const unsortButton = document.getElementById("unsort-button")
    const alphabeticallyButton = document.getElementById("alphabetically-button")
    const lengthButton = document.getElementById("length-button")

    unsortButton.addEventListener("click", function() {
	displayNames(listOfGenerated.names)
    } )
    alphabeticallyButton.addEventListener("click", function() {
	displayNames(listOfGenerated.names.slice(0).sort((a,b) => {if (a < b) return -1; else return 1}) )
    } )
    lengthButton.addEventListener("click", function () {
	displayNames(sortByLengthUp(listOfGenerated.names))
    })
    
    const generateButton = document.getElementById("generate-button")
    setGenerateButtonText()
    
    const input = new Input(groups)

    const inputSection = document.getElementById("input-section")

    // inputSection.appendChild(input.uiElement)
    inputSection.insertBefore(input.uiElement, inputSection.childNodes[6])

    const listOfGenerated = document.getElementById("list-of-generated")
    listOfGenerated.names = []
    
    input.uiElement.addEventListener("change", function(event) {
	input.onChanging(event)
	// console.log("CHANGE!", input.pickedNameSets)
    })

    generateButton.addEventListener("click", generate)

    
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
	listOfGenerated.names = generator.generate(radioGroup.getValue())
	displayNames(listOfGenerated.names)

    }

    function setGenerateButtonText() {
	generateButton.textContent = "Generate (" + radioGroup.getValue() + ")"
    }

    function displayNames(names) {
	while (listOfGenerated.hasChildNodes()) {
	    listOfGenerated.removeChild(listOfGenerated.lastChild);
	}
	names.forEach(name => {
	    listOfGenerated.appendChild(generateElement("li", {textNode: name}))
	})
    }
}
