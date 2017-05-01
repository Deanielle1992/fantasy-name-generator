let splitter1 = new Splitter(VOWELS, true, "after")

let splitter2 = new Splitter(VOWELS, true, "before")

let titleSplitter1 = new Splitter([" ", "the ", "of ", "for ", "in ", "an ", "and ", "a ", "or ", "from " ], true, "after")

let titleSplitter2 = new Splitter([" ", " the", " of", " for", " in", " an", " and", " a", " or", " from" ], true, "before")

const oldPolishFemale = RealNamesGroups[0].nameSets[3].names


// let generator = new Generator(table.withAllTags("polish", "adults", "female"), "capitalized", splitter1, splitter2)
// let generator = new Generator(table.withAllTags("angels"), "capitalized", splitter1, splitter2)
// let generator = new Generator(table.withAllTags("celtic", "adults", "female"), "capitalized", splitter1, splitter2)
let generator = new Generator(oldPolishFemale, "capitalized", splitter1, splitter2)
generator.addFilter(RepeatedLettersFilter)
generator.addFilter(VowelsPatternsFilter)
generator.addFilter(ConsonantsPatternsFilter)
generator.addFilter(NameLengthFilter)
generator.addFilter(UniquenessFilter)

console.log(generator.generate(40))

// generator = new Generator(RealNames.fantasyTitles() , "capitalized", titleSplitter1, titleSplitter2)
// generator.addFilter(RepeatedLettersFilter)
// generator.addFilter(VowelsPatternsFilter)
// generator.addFilter(ConsonantsPatternsFilter)
// generator.addFilter(NameLengthFilter)
// generator.addFilter(UniquenessFilter)

// console.log(generator.generate(50))


