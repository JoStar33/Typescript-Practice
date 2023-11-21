//타입스크립트는 타입추론을 알아서 해준다.
//따라서 불필요한 타입선언은 코드를 장황하고 보기싫게 만든다.
//한마디로 아래와 같이 변수를 선언할 필요가 없는거다.

let con2: number = 1; //X
let con3 = 3; //O

//타입스크립트는 우리가 예상하는것 이상으로 타입추론을 잘한다.
const axis: string = 'x'; //Type은 스트링
const axis1 = 'y';   // Type은 x

//따라서 개발자가 타입스크립트를 신뢰할 필요가 좀 있다!!!
//그러나 객체나 매개변수같은 경우, any로 추론되기에 타입선언을 해줄 필요가 있겠다.