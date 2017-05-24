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
	this._groups.forEach( group => {
	    this.uiElement.appendChild(group.uiElement)
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
