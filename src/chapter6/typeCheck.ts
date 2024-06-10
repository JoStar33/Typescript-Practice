// 간혹가다가 객체가 특정 인터페이스가 맞는지를 확인해야하는 경우가 존재함.
// 이때 아래와 같은 코드를 통해 체크가 가능하다!
// 중요한점은 is에 대해서 이해해야한다는 거다.
// 타입스크립트의 is는 뭘까?
// 사용자 정의 타입가드를 위한 서술연산자

// 말이 길었다. 이제 진짜 써보자.

// A라는 인터페이스와 B라는 인터페이스가 있다. 우리는 A인터페이스 타입을 가지고 있는 객체만 사용하고 싶다고 가정해보자.

interface A {
  name: string;
  label: string;
}

interface B {
  name: string;
  value: string;
}

const isA = (object: A | B): object is A => "label" in object;
// 짜잔! 이제 이 함수는 object라는 매개변수의 타입이 A인지를 검출할것이다.
// 원리는 단순한데, 오브젝트가 label 프로퍼티를 가지고있나 없나를 통해 검출한다.

// 진짜써보자.
const aObject: A = {
  name: "a오브젝트",
  label: "a오브젝트의 라벨",
};

const bObject: B = {
  name: "b오브젝트",
  value: "b오브젝트의 벨류",
};

const showLabelWhenObjectIsA = (object: A | B) => {
  if (!isA(object)) return;
  // 와우!!! 마우스를 올려보면 object의 타입은 A가 돼있다.
  console.log(object.label);
};

showLabelWhenObjectIsA(aObject);
// a오브젝트의 라벨
showLabelWhenObjectIsA(bObject);
// 어떤것도 출력되지않음.
