console.log("GROUP TESTS")
// constructor create: label, lefts, rights
// getter: label
// getter: uiElement
// getter: nameSets

{
    let polishFemale = new NameSet(["Beata", "Celina", "Dorota", "Ewelina"], "Polish Female", [], [])
    let czechFemale = new NameSet(["Jana", "Petra", "Dobrava", "Blanka"], "Czech Female", [], [])
    let polishMale = new NameSet(["Boleslaw", "Cezary", "Dominik", "Emil"], "Polish Male", [], [])
    let czechMale = new NameSet(["Jan", "Jaromir", "Daniel"], "Czech Male", [], [])
    let groupLabel = "Slavic names"
    let lefts = [polishMale, czechMale]
    let rights = [polishFemale, czechFemale]
    
    let subject = new Group(groupLabel, lefts, rights)
    let testName

    unitTest(
	"is instance of Group",
	subject instanceof Group,
	true
    )
    unitTest(
	"can return label",
	subject.label,
	groupLabel
    )

    unitTest(	"can return nameSets as Array",
	subject.nameSets instanceof Array, true    )

    unitTest(	"nameSets has proper length",
	subject.nameSets.length, lefts.length + rights.length    )
    
    unitTest(
    	"the left column has as many children as left nemesets",
	subject.uiElement.childNodes[1].childNodes[0].childNodes.length,
    	lefts.length
    )

    unitTest(
    	"the right column has as many children as right nemesets",
	subject.uiElement.childNodes[1].childNodes[1].childNodes.length,
    	rights.length
    )
    
}

  ///////// test element //////////////
 ///////// test element //////////////
///////// test element //////////////

{
    let groupLabel = "Slavic names"
    let result = generateGroupGUI(groupLabel)
    
    // <section class="group-box">
    //   <div class="group-box__header">Ultres group</div>
    //   <div class="group-box__body">
    
    //     <div class="group-box__column">
    //           <div class="group-box__item">
    // 	       <input type="checkbox" class="group-box__checkbox"></input>
    // 	       <div class="group-box__label">Uldfgdftric mi</div>
    //           </div>
    //           <div class="group-box__item">
    // 	       <input type="checkbox" class="group-box__checkbox"></input>
    // 	       <div class="group-box__label">Uixcxvxcies mfgxd dfi</div>
    //           </div>
    //     </div>
    
    //     <div class="group-box__column">
    //           <div class="group-box__item">
    // 	       <input type="checkbox" class="group-box__checkbox"></input>
    // 	       <div class="group-box__label">Ulc xd ies mi</div>
    //           </div>
    //           <div class="group-box__item">
    // 	       <input type="checkbox" class="group-box__checkbox"></input>
    // 	       <div class="group-box__label">Ult xdfies mi</div>
    //           </div>
    //     </div>
    
    //   </div>
    // </section>

    unitTest(	"the element is section",
	result.tagName,	"SECTION"    )

    unitTest(	"the element has two children",
	result.childNodes.length, 2    )

    unitTest(	"the first child is div",
	result.childNodes[0].tagName,	"DIV"    )

    unitTest(	"the second child is div",
	result.childNodes[1].tagName,	"DIV"    )

    unitTest(   "the first child hac no children",
	result.childNodes[0].childNodes.length, 1    )

    unitTest(	"the second child has two children",
	result.childNodes[1].childNodes.length,	2    )

    unitTest(	"the first child child node is a text node",
	result.childNodes[0].childNodes[0].nodeType, Node.TEXT_NODE    )

    unitTest(  	"the text node has the proper content",
    	result.childNodes[0].textContent, groupLabel    )

    unitTest(  	"the first child of the second child is div",
	result.childNodes[1].childNodes[0].tagName, "DIV"    )

    unitTest(  	"the second child of the second child is div",
	result.childNodes[1].childNodes[1].tagName, "DIV"    )
    
}
console.log("///////////////////////////////////////")
