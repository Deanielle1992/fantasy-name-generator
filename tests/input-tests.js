console.log("INPUT TESTS")
// constructor create: groups
// getter: uiElement
// getter: pickedNameSets
// eventHandler: update picked nameSets
{
    let polishFemale = new NameSet(["Beata", "Celina", "Dorota", "Ewelina"], "Polish Female", [], [])
    let czechFemale = new NameSet(["Jana", "Petra", "Dobrava", "Blanka"], "Czech Female", [], [])
    let polishMale = new NameSet(["Boleslaw", "Cezary", "Dominik", "Emil"], "Polish Male", [], [])
    let czechMale = new NameSet(["Jan", "Jaromir", "Daniel"], "Czech Male", [], [])
    let groupLabel = "Slavic names"
    let lefts = [polishMale, czechMale]
    let rights = [polishFemale, czechFemale]
    
    let firstGroup = new Group(groupLabel, lefts, rights)

    let celticFemale = new NameSet(["Dallas", "Damhnait", "Deirdre", "Derry", "Devin","Duana", "Dubhain", "Echna"], "Celtic Female", [], [])
    let celticMale = new NameSet(["Bran","Brendan","Breanainn","Cathal","Cedric","Frang","Gabhran","Gair","Gavin"], "Celtic Male", [], [])
    groupLabel = "Celtic names"
    lefts = [celticMale]
    rights = [celticFemale]
    
    let secondGroup = new Group(groupLabel, lefts, rights)

    let groups = [firstGroup, secondGroup]
    let subject = new Input(groups)
    let testName

    unitTest(
	"is instance of Input",
	subject instanceof Input,
	true
    )
    
    unitTest(	"can return uiElement that is section",
	subject.uiElement.tagName,
	"SECTION"
    )

    
    unitTest(
	"can return pickedNameSets as a Set",
    	subject.pickedNameSets instanceof Set,
	true
    )

   unitTest(
	"can return pickedNameSetsLabels as Array",
    	subject.pickedNameSetsLabels instanceof Array,
	true
    )
    
    
    unitTest(
    	"the number of children of uiElement is the same as groups length",
    	subject.uiElement.childNodes.length,
    	groups.length
    )

    { // clicking test
	let subject = new Input(groups)

	unitTest(
	    "at first nothing is picked",
    	    subject.pickedNameSets.size,
	    0
	)
	// DAMN, I don't know how to fire events programmatically
	// groups[0].nameSets[0].uiElement.getElementsByTagName("input")[0].change()

	// unitTest(
	//     "after clicking the first checkbox it should return an array with one element",
    	//     subject.pickedNameSets.length,
	//     1
	// )
	// unitTest(
    	//     "the right column has as many children as right nemesets",
    	//     subject.uiElement.childNodes[1].childNodes[1].childNodes.length,
    	//     rights.length
	// )
    }
}

  ///////// test element //////////////
 ///////// test element //////////////
///////// test element //////////////

{
    let result = generateInputGUI()
    
        // <section class="l-section-container l-section-container--input" id="groups-root">
	// </section>

    unitTest(	"the element is section",
	result.tagName,	"SECTION"    )

    unitTest(	"the element has no children",
	result.childNodes.length, 0    )

    
}
console.log("///////////////////////////////////////")
