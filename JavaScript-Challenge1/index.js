// ...........JS-1-a............
var myName = "Md.Ashikur Rahman Showrov";
console.log(myName.length);

// ...........JS-1-b............
let myArray = [3,4,9,"a","ant","nure",[4,5,9]];
console.log(myArray.length);

// ...........JS-1-c............
var myName = "Nure Siddiq";
console.log(myName.indexOf("e"));

/*...........JS-1-d............*/
let myNumber = "30";
console.log(Number(myNumber) + 40);

/*...........JS-1-e............*/
var myName = "nURe SiDDiQ";
console.log(myName.toUpperCase());

/*...........JS-1-f............*/
var myName = "nURe SiDDiQ";
console.log(myName.toLowerCase());

/*...........JS-1-g............*/
var myAge = "30";
console.log(typeof(myAge));

/*...........JS-1-h............*/
let firstName = "Nure";
let lastName = "Siddiq";
let fullName = firstName.concat(" ",lastName);
console.log(fullName);

/*...........JS-1-i............*/
let todayDate = new Date();

let month = todayDate.getMonth();
let dateOfMonth = todayDate.getDate();
let year = todayDate.getFullYear();

let Months=["January","February","March","April","May","June","July",
            "August","September","October","November","December"];

console.log(Months[month]+" "+dateOfMonth+", "+year);

/*...........JS-1-j............*/
var myAge=30;
console.log("I'm "+30+" years old");