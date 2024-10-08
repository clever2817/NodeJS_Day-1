/// Spread Operator

// let poorCountry = ["Bangladesh", "Srilanka"];

// let richCountry = ["America", "Canada", "Italy"];

// richCountry = ["America", "Canada", "Italy", ...poorCountry];

// console.log(richCountry);

/// Array Push and Unshift

// let poorCountry = ["Bangladesh", "Srilanka"];

// let richCountry = ["America", "Canada", "Italy"];

// poorCountry.push(richCountry);

// richCountry.unshift(poorCountry);

// console.log(richCountry);

// console.log(poorCountry);

/// REST Parameter

function summation(...numbers) {
  let sum = 0;

  for (let num of numbers) {
    sum += num;
  }

  console.log(sum);
}

summation(1, 2, 3, 4, 5);
