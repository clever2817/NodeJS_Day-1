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

// function summation(...numbers) {
//   let sum = 0;

//   for (let num of numbers) {
//     sum += num;
//   }

//   console.log(sum);
// }

// summation(1, 2, 3, 4, 5);

/// Dynamic Function

// let name = function (myName) {
//   return myName;
// };

// console.log(name("Abir"));

/// NodeJS Sever Creation

let http = require("http");

let server = http.createServer(function (req, res) {
  if (req.url == "/") {
    res.end("Home Page");
  }

  if (req.url == "/about") {
    res.end("About Page");
  }

  if (req.url == "/contact") {
    res.end("Contact Page");
  }

  if (req.url == "/profile") {
    res.end("Profile Page");
  }
});

server.listen(7070, function () {
  console.log("Server Running on Port 7070...");
});
