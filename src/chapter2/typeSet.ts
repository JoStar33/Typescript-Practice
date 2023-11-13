// 타입스크립트는 집합이라고 생각하자.
//1. never는 공집합이다. never타입을 가지고있다면 어떠한 값도 할당할 수 없다.
//2. unit타입이라고도 불리는 리터럴 타입.
type A = 'A'; type B = 'B'; // 이와 같은 타입을 지칭함.
//3. union타입. 여러개로 묶을 수 있는 타입이다.
type AB = 'A' | 'B';
type ABC = 'A' | 'B' | 'C';
// 따라서 아래와 같은 형태는 가능할거다?
let ab: AB;
const a: A = 'A'
ab = a;

const abTest: AB = 'A';
const abcTest: ABC = abTest;

//타입의 타입확장은 아래와 같이 진행한다.
type Person = {
  name: string;
  age: number;
}

type Lifespan = {
  birth: Date;
  death: Date;
}

type PerLife = Person & Lifespan;

const newPerson: PerLife = {
  name: 'hihi',
  age: 123,
  birth: new Date(),
  death: new Date()
};

//인터페이스의 타입확장은 아래와 같이 진행한다.
interface Vector1D {
  x: number;
}

interface Vector2D extends Vector1D {
  y: number;
}

//타입스크립트에서는 집합스러운 사고를 하는게 중요함.
const numNewArr = [1, 2, 3, 4];
type NumNewThreeArr = [number, number, number];
//const kNum: NumNewThreeArr = numNewArr;
// 여기서 kNum이 numNewArr의 부분집합이므로 할당이 불가능해진다.


const vec2: Vector2D = {
  x: 3,
  y: 2,
}

const vec1: Vector1D = vec2;

/*********************** 정리하면 아래와 같다. **********************/
//1. never: 공집합
//2. 리터럴 타입: 원소가 1개인 집합
//3. 값이 T에 할당 가능: 같이 T의 원소
//4. T1이 T2에 할당 가능: T1이 T2의 부분집합
//5. T1이 T2를 상속: T1이 T2의 부분집합
//6. T1 | T2: T1과 T2의 합집합
//7. T1 & T2: T1과 T2의 교집합



//다소 어려웠던 부분.
//위에 조건에서 4, 5번이 인터페이스에서 왜 성립되는지가 의문이였다. 인터페이스 제일 밑에 부모는 자식들이 가지고있는 타입들을 가지고있지 않음에도 
//벤 다이어그램상으로 최상단에 위치해있다. 왜 그런지 생각해보니 extends를 한다는 의미자체가 부모에게 물려받는다는걸 의미하니 최상단에 위치하며
//4, 5번의 조건을 모두 충족한다. 실제로 부모가 존재하지 않는 타입을 가진 자식객체에게 부모타입을 가진 객체를 할당하면 정상적으로 할당이 된다.

//조금 더 쉽게 풀어 쓴 예시가 있어서 이를 통해 이해를 도왔다.
//새와 고래는 모두 동물이다. 즉, 동물이라는 타입에 속한다.
//근데 동물이라는 타입은 심장을 가지고있다는 변수를 가지고있네?
//그치만 동물이라는 타입엔 날개가 있다, 수영을 한다라는 변수는 없다.
//오...!!! 이해완료!
