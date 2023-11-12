class Items {
  constructor(
    public id : number, 
    public task : string, 
    public complete : boolean = false //default parameta (값 초기화)
  ) {
    this.id = id;
    this.task = task;
    this.complete = complete;
  }
  printDetails(): void {
    console.log(`${this.id}\t${this.task}\t${this.complete ? "\t(complete)" : ""}`);
  }
}

const Item = new Items(1, "뭐요", true);
Item.printDetails();
//타스는 가변인자를 통한 함수호출이 불가능하다.


export default Items;