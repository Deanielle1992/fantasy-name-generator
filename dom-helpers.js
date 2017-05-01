function generateElement(tagName, attributes={}) {
  let element = document.createElement(tagName)
  if (Object.keys(attributes).length>0) {
    let keys = Object.keys(attributes)
    keys.forEach( item => {
      if (item != "textNode") {
          element.setAttribute(item, attributes[item])
      }
    })
      if (attributes.textNode != undefined) {
      let textNode = document.createTextNode(attributes["textNode"])
      element.appendChild(textNode)
    }
  }
  return element
}

function randomElement(array) {
    return array[Math.floor((Math.random() * array.length))]
}
