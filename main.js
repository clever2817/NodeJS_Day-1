/// Spread Operator

// let poorCountry = ["Bangladesh", "Srilanka"];

// let richCountry = ["America", "Canada", "Italy"];

// richCountry = ["America", "Canada", "Italy", ...poorCountry];

// console.log(richCountry);

/// Array Push and Unshift

let poorCountry = ["Bangladesh", "Srilanka"];

let richCountry = ["America", "Canada", "Italy"];

poorCountry.push(richCountry);

richCountry.unshift(poorCountry);

console.log(richCountry);

console.log(poorCountry);
