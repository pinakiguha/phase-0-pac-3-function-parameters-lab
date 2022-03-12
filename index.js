// function introduction
// let name = "Harry";
// console.log("Hi, my name is +${name}")

// let introductionwithlanguage = "javascript"
// console.log("Hi,my name is ("name") and I am learning to program in "introductionwithlanguage"")

function introduction(name) {
  return  `Hi, my name is ${name}.`
}

function introductionWithLanguage(name, language) {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

function introductionWithLanguageOptional(name="user", language="JavaScript") {
  console.log(`Hello, ${name}`)
  console.log(`Hello, ${language}`)
  return `Hi, my name is ${name} and I am learning to program in ${language}.`
}




