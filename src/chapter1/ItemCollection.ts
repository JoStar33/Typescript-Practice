import Items from "./Items";

class ItemCollection {
  private nextId: number = 1;
  constructor(public userName: string, public items: Items[] = []) {
    
  } 
  getTodoById(id: number): Items | undefined { //리턴되는 타입이 Items이거나 혹은 undefined이거나 라는 표현.
    //? 왜 근데 굳이 위에처럼 정의해야함? >> find가 안되는 경우도 생각을 해야하기 때문입니다.
    return this.items.find(item => item.id === id);
  }

  addTodo(task: string) : number { //아이템추가
    while(this.getTodoById(this.nextId)) {
      this.nextId++;
    }
    this.items.push(new Items(this.nextId, task));
    return this.nextId;
  }
  markComplete(id: number, complete: boolean) { //아이템상태를 변경해주는 함수
    const todoItem = this.getTodoById(id);
    if(todoItem) {
      todoItem.complete = complete;
    }
  }
}

export default ItemCollection;