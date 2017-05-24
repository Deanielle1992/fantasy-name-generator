function generateInputGUI() {
    const element = generateElement("section", {class: "group-container"})
    return element
}

class Input {
    constructor(groups) {
	this._groups = groups
	this._uiElement = generateInputGUI()
	this.addGroupElements()
	this._pickedNameSets = new Set([])
    }
    
    get uiElement() {
	return this._uiElement
    }

    get pickedNameSets() {
	return this._pickedNameSets
    }

    get pickedNameSetsLabels() {
	const labels = []
	this._pickedNameSets.forEach(nameSet => {
	    labels.push(nameSet.label)
	})
	return labels
    }
    
    addGroupElements() {
	let groupIndex
	let nameSetIndex
	this._groups.forEach( (group, groupIndex) => {
	    this.uiElement.appendChild(group.uiElement)
	    group.nameSets.forEach( (nameSet, nameSetIndex) => {
		let id = "nameset-" + groupIndex.toString() + "-"  + nameSetIndex.toString()
		nameSet.uiElement.childNodes[0].id = id
		nameSet.uiElement.childNodes[1].setAttribute("for", id)
	    })
	})
    }

    onChanging(event) {
	const changedNameSet = event.target.ownerNameSet
	const newValue = event.target.checked
	if (event.target.ownerNameSet) {
	    if (newValue === false) {
		this._pickedNameSets.delete(changedNameSet)
	    }
	    else if (newValue === true) {
		this._pickedNameSets.add(changedNameSet)
	    }
	}
    }
    
}
