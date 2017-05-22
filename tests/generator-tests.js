console.log("GENERATOR TESTS")
// constructor create: nameSets
// method: generate(howMany)


const nameSets = [RealNamesGroups[1].nameSets[0],
		  RealNamesGroups[2].nameSets[0],
		  RealNamesGroups[2].nameSets[1],
		  RealNamesGroups[3].nameSets[0],
		  RealNamesGroups[3].nameSets[1]
		 ]

let generator = new Generator(nameSets)


console.log(generator.generate(30))
