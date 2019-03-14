/**
 * spread/rest
 */

function getAddress(person) {
  let { address, age, hobbies, ...rest } = person;
  return ['defaultHobby', ...hobbies];
}

let person = {
  age: "20",
  hobbies: ["singing", "dancing", "laughing"],
  name: "AAA",
  address: {
    city: "xyz",
    street: "123"
  }
};

console.log(getAddress(person));
