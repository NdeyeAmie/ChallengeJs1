function typeChecker (variable) {
    if (variable === null) {
        return "null"; 
    } else if (Array.isArray(variable)) {
        return "array";
    } else {
        return typeof variable; 
    }
    // return typeof variable;
}

console.log(typeChecker("Bonjour"));          
console.log(typeChecker(42));                
console.log(typeChecker(true));               
console.log(typeChecker(null));               
console.log(typeChecker(undefined));       
console.log(typeChecker([1, 2, 3]));       
console.log(typeChecker({ nom: "Alice" }));  