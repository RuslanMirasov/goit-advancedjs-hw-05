import { concatenation } from "./concatenation.js";
function greet(person) {
    return `Hello, ${concatenation(person.firstName, person.lastName)}`;
}
const button = document.querySelector("[data-greet]");
button === null || button === void 0 ? void 0 : button.addEventListener("click", () => {
    const user = { firstName: "Ruslan", lastName: "Mirasov" };
    const message = greet(user);
    alert(message);
});
//# sourceMappingURL=index.js.map