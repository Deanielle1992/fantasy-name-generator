class ListOfSelected {
    constructor(labels) {
	this._uiElement = document.getElementById("list-of-selected")
	this.update(labels)
    }
    
    update(labels) {
	while (this._uiElement.hasChildNodes()) {
	    this._uiElement.removeChild(this._uiElement.lastChild);
	}
	labels.forEach(label => {
	    this._uiElement.appendChild(generateElement("li", {textNode: label}))
	})
	if (this._uiElement.childNodes.length == 0) {
	    this._uiElement.appendChild(generateElement("li", {textNode: "none"}))
	}
	
    }
}
