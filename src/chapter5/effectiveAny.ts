//any가 나쁜건 맞지만, any를 효과적으로 쓰는건 중요하다.
//가령 예를 들어보자.
//아래 코드같이 작성할 경우, 리턴타입이 무조건 any로 반환된다. 이 경우, any로 선언된 변수를 사용할때 sideEffect가 발생할 요지가 있다.
//따라서 이렇게 어쩔수없이 any를 사용해야하는 경우는 타입단언을 사용하자
const expressionReturn = () => {
  return {};
};

const progressBar = (x: number) => {};

const f1 = () => {
  const x: any = expressionReturn();
  progressBar(x);
  const x1 = expressionReturn();
  progressBar(x1 as any);
  // return x; << type이 무조건 any. 즉 f1 함수는 any.
}

//네스티드 오브젝트를 구축하는 상황에서도 any를 효율적으로 사용할 수 있는데, 가령 특정부분에서 타입체크로 인해 any를 사용해야한다면
//오브젝트 전체를 as any로 작성할 필요는 없다.

interface Config {
  x: number;
  y: number;
  configInfo: {
    title: string;
    value: string;
  }
}

//이것보단
const config: Config = {
  x: 0,
  y: 0,
  configInfo: {
    title: "hello",
  } 
} as any

//이런 형태로.
const config2: Config = {
  x: 0,
  y: 0,
  configInfo: {
    title: "hello",
  } as any
}