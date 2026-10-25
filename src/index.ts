import { concatenation } from "./concatenation.js";

type Person = {
  firstName: string;
  lastName: string;
};

function greet(person: Person): string {
  return `Hello, ${concatenation(person.firstName, person.lastName)}`;
}

const button = document.querySelector("[data-greet]");

button?.addEventListener("click", () => {
  const user: Person = { firstName: "Ruslan", lastName: "Mirasov" };
  const message = greet(user);
  alert(message);
});
