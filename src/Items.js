"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Items {
    constructor(id, task, complete = false //default parameta (값 초기화)
    ) {
        this.id = id;
        this.task = task;
        this.complete = complete;
        this.id = id;
        this.task = task;
        this.complete = complete;
    }
    printDetails() {
        console.log(`${this.id}\t${this.task}\t${this.complete ? "\t(complete)" : ""}`);
    }
}
const Item = new Items(1, "뭐요", true);
Item.printDetails();
//타스는 가변인자를 통한 함수호출이 불가능하다.
exports.default = Items;
//# sourceMappingURL=Items.js.map