function generateGroupGUI(groupLabel) {
    const element = generateElement("section", {class: "group-box"})
    const header = generateElement("div", {textNode: groupLabel, class: "group-box__header"})
    const body = generateElement("div", {class: "group-box__body"})
    element.appendChild(header)
    element.appendChild(body)
    const left = generateElement("div", {class: "group-box__column"})
    const right = generateElement("div", {class: "group-box__column"})
    body.appendChild(left)
    body.appendChild(right)
    return element
}

class Group {
    constructor(groupLabel, lefts, rights) {       
	this._label = groupLabel
	this._lefts = lefts
	this._rights = rights
	this._uiElement = generateGroupGUI(groupLabel)
	this.addNamesetElements()
	this._nameSets = lefts.concat(rights)
    }
 
    get uiElement() {
	return this._uiElement
    }
    get label() {
	return this._label
    }
    get nameSets() {
	return this._nameSets
    }

    addNamesetElements() {
	this._lefts.forEach( nameset => {
	    this.uiElement.childNodes[1].childNodes[0].appendChild(nameset.uiElement)
	})
	this._rights.forEach( nameset => {
	    this.uiElement.childNodes[1].childNodes[1].appendChild(nameset.uiElement)
	})

    }
    
}
