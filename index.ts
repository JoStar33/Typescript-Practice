import Items from "./src/Items";
import ItemCollection from "./src/ItemCollection";
import {data} from "./src/data";

/*
console.log(`Items\n`);
for(let i = 0; i < data.length; i++) {
  let Item = new Items(data[i].id, data[i].task, data[i].complete);
  Item.printDetails();
}
*/
const sampleTodos : Items [] = data.map(
  item => new Items(item.id, item.task)
)
console.log(sampleTodos);