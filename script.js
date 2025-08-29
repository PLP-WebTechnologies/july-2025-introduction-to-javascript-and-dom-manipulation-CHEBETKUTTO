// Variables and Data Types
let name = "Linda Chebet Kutto"; // String
let age = 25; // Number
let isStudent = true; // Boolean
let hobbies = ["reading", "paintng", "coding"]; // Array
let address = {
  // Object
  street: "123 Main St",
  city: "Nairobi",
  country: "Kenya",
};

// Functions
function greet(userName) {
  return `Hello, I'm ${userName}!`;
}
console.log(greet(name));
console.log(`I am ${age} years old.`);
console.log(`I live in ${address.city}, ${address.country}.`);
console.log(`My hobbies include: ${hobbies.join(", ")}.`);
console.log(`Am I a student? ${isStudent}`);

// Control Structures
if (age < 18) {
  console.log("You are a minor.");
} else {
  console.log("You are an adult.");
}
for (let i = 0; i < hobbies.length; i++) {
  console.log(`Hobby ${i + 1}: ${hobbies[i]}`);
}
