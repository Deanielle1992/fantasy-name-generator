function generateNameSetGUI(nameSetLabel) {
    const element = generateElement("div", {class: "group-box__item"})
    element.appendChild(generateElement("input", {type: "checkbox", class: "group-box__checkbox"}))
    element.appendChild(generateElement("div", {textNode: nameSetLabel,class: "group-box__label"}))
    return element
}

class NameSet {
    constructor(names, namesLabel, splitters, filters) {
        this._names = names
	this._label = namesLabel
	this._splitters = splitters
	this._filters = filters
	this._uiElement = generateNameSetGUI(namesLabel)
	this._uiElement.childNodes[0].ownerNameSet = this
    }
    
    get names() {
	return this._names
    }
    get uiElement() {
	return this._uiElement
    }
    get label() {
	return this._label
    }
    get picked() {
	return this.uiElement.childNodes[0].checked
    }

    get splitters() {
	return this._splitters
    }
    get filters() {
	return this._filters
    }


}
