//타입스크립트에서는 함수 문장과 함수 표현식을 다르게 인식한다.
//타입스크립트에서는 함수 표현식을 사용하는게 좋음. 함수의 매개변수부터 반환값까지 전체를 함수 타입으로 선언하여 재사용 가능.
type BinaryFn = (a: number, b: number) => number;
const add: BinaryFn = (a, b) => a + b;
const sub: BinaryFn = (a, b) => a - b;
const mul: BinaryFn = (a, b) => a * b;
const div: BinaryFn = (a, b) => a / b;



//함수의 매개변수와 타입 선언을 하는 것보단, 함수 표현식 전체 타입을 정의하는것이 코드도 간결하며 안전함.