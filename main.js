import { linkedList } from "./LinkedList.js";

const list = new linkedList();

list.append("dog");
console.log(list)
list.append("cat");
console.log(list)
list.append("parrot");
console.log(list)
list.append("hamster");
console.log(list)
list.append("snake");
console.log(list)
list.append("turtle");
console.log(list)

console.log(list.toString());

console.log(list.at(3))