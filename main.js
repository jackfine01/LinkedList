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

console.log("the list: " + list.toString());

console.log("the list at index[3]: " + list.at(3))
console.log("the list contains dog: " + list.contains('dog'))
console.log("the list contains zebra: " + list.contains('zebra'))