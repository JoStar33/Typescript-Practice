"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Items_1 = require("./Items");
class ItemCollection {
    constructor(userName, items = []) {
        this.userName = userName;
        this.items = items;
        this.nextId = 1;
    }
    getTodoById(id) {
        //? 왜 근데 굳이 위에처럼 정의해야함? >> find가 안되는 경우도 생각을 해야하기 때문입니다.
        return this.items.find(item => item.id === id);
    }
    addTodo(task) {
        while (this.getTodoById(this.nextId)) {
            this.nextId++;
        }
        this.items.push(new Items_1.default(this.nextId, task));
        return this.nextId;
    }
    markComplete(id, complete) {
        const todoItem = this.getTodoById(id);
        if (todoItem) {
            todoItem.complete = complete;
        }
    }
}
exports.default = ItemCollection;
//# sourceMappingURL=ItemCollection.js.map