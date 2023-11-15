//타입과 인터페이스 둘다 너무 비슷해보인다. 그래서 실제로 둘다 쓸수있는 상황에선 둘다 써도 상관없다.

//!!!참고: 타입과 인터페이스에 I나 T를 붙이는건 C#에서 비롯된 관례다. 현재는 지양해야하는 스타일임.

//인터페이스는 타입을 확장하지만 유니온은 안된다.

//또한 인터페이스는 보강이 가능함.
interface IState {
  name: string;
  capital: string;
}

interface IState {
  population: number;
}

//이런게 된다구.
const wyoming: IState = {
  name: '',
  capital: '',
  population: 1,
}

type TKey = 'K' | 'O';

//에러 발생. 아래와 같은 연출은 타입에서만 가능
// interface IKeyTest {
//   [key in TKey]: string;
// }

//타입은 다음과 같이 key를 좀 더 유연하게 사용할 수 있음.
type IKeyTest = {
  [key in TKey]: string;
};
