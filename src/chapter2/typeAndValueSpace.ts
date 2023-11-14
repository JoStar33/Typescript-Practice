//아래와 같이 값과 타입공간을 구분하기란 쉽지않음
type T1 = 'string';
type T2 = 123;
const v1 = 'string';
const v2 = 123;

//참고로 이를 자바스크립트로 치환할땐 v1, v2밖에 안남음!

//값에 관점에서는 typeof가 자바스크립트의 typeof를 반환하지만 타입공간에서는 값을 읽고나서 타입을 반환한다.



//클래스가 타입으로 쓰일땐 형태가 사용되는 반면 값으로 쓰일땐 생성자가 사용된다.
//재밌는점은 클래스가 자바스크립트에서는 실제 함수로 구현되기때문에 값의 공간에서 typeof를 사용하면 function이 나온다.
//반대로 타입공간에서는 클래스명이 반환된다.


//인덱스 위치에는 유니온 타입과 기본형 타입을 포함한 어떠한 타입이든 사용할 수 있음.
//아래와 같이 Person1객체가 있고 Person객체의 값이 string이라면 string이 타입이 된다.
class Person1 {
  first = 'name';
}

type PersonEl = Person1['first']; //string
type Tuple = [string, number, Date];
type TupleEl = Tuple[number]; //string | number | Date 반환.

//값에서의 &와 |는 AND와 OR이지만 타입에서는 인터섹션과 유니온이라는 사실.
//값에서의 const는 새 변수를 선언하나 as const는 리터럴 또는 리터럴 표현식의 추론된 타입을 바꿈.