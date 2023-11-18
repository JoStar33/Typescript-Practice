//1. Partial
//저번 시간에도 설명했듯이 타입스크립트에서는 집합적인 사고를 가지는게 중요하다.
//Partial은 제네릭에 입력한 타입에 대한 하위집합을 형성하는거다. 좀 더 구체적으로는
//타입내에 모든 프로퍼티를 선택적으로 만든다.

interface Person {
  name: string;
  age: number;
}

type NewPerson = Partial<Person>;

const kanye: NewPerson = {};



//2. Required
//Partial과 반대다. 모든 값을 필수값으로 설정할 수 있다. 즉 부모집합을 형성하는거라고 볼 수 있겠다.
interface Person2 {
  name?: string;
  age?: number;
}

type NewPerson2 = Required<Person2>;

const kanye2: NewPerson2 = {
  name: 'jj',
  age: 2,
};



//3. Readonly
//타입내에 모든값을 읽기전용 값으로 바꿀 수 있다. 이번에 공부를 하며 가장 필요성을 많이 느낀 유틸리티 타입.
//생각보다 readonly 처리해야할 인터페이스가 많았던것 같아서 이를 적극 활용해서 리팩토링 해야겠다고 생각이 들었다.
interface Book {
  title: string;
}

const jejuBook: Readonly<Book> = {
  title: 'jeju',
}

// jejuBook.title = 'kiki'; << 다음과 같이 재할당이 불가능해진다.




//4. Record
//type으로 정의된 constants값들을 키로, 특정 타입을 value로 새로운 타입을 반환하는 유틸리티 타입이다.
//한마디로 굳이 아래와 같이 타입을 만들 필요가 없다는 소리다.
//type Data = 'data1' | 'data2' | 'data3';
/*
  interface Button {
    label: string;
    value: string;
  }
  type DataObject = {
    [key in Data]: Button;
  }

  난리도 아니다...
  But
*/


//Record를 사용하면 아래와 같이 편하게 사용가능.
type Data = 'data1' | 'data2' | 'data3';

interface Button {
  label: string;
  value: string;
}

const buttonObject: Record<Data, Button> = {
  data1: {
    label: 'data1',
    value: 'data1',
  },
  data2: {
    label: 'data1',
    value: 'data1',
  },
  data3: {
    label: 'data1',
    value: 'data1',
  },
}




//5. Pick
//객체 타입에 특정 키들만 선택해서 새로운 타입을 구성할 수 있다.
const newPerson3: Pick<Person, 'name'> = {
  name: 'james'
}




//6. Omit
//객체 타입에 특정 키들만 제거해서 새로운 타입을 구성할 수 있다.
const newPerson4: Omit<Person, 'name'> = {
  age: 23
}




//7. Exclude
//유니온 타입에 특정 값을 제거하고 새로운 유니온 타입을 구성할 수 있다.
type ABC = 'A' | 'B' | 'C';
type NewABC = Exclude<ABC, 'C'>;

// 에러발생! 없는 타입. const data: NewABC = 'C'; 



//8. NonNullable
//null, undefined요소를 제거하고 새로운 타입을 구성한다.
interface Line {
  width?: number;
  height?: number;
}

// 에러발생!
// const line: NonNullable<Line> = {
//   width: null,
//   height: null,
// }
