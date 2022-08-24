"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Items_1 = require("./src/Items");
const data_1 = require("./src/data");
/*
console.log(`Items\n`);
for(let i = 0; i < data.length; i++) {
  let Item = new Items(data[i].id, data[i].task, data[i].complete);
  Item.printDetails();
}
*/
const sampleTodos = data_1.data.map(item => new Items_1.default(item.id, item.task));
console.log(sampleTodos);
//# sourceMappingURL=index.js.map