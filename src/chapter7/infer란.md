## infer란?

U 가 추론 가능한 타입이면 참, 아니면 거짓

조건부 타입과 썼을경우 좋은 효과를 가져올 수 있음.

아래는 리턴타입의 실제 형태이고, infer를 통해 구현된걸 확인가능.

```typescript
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

function data() {
  return {
    name: "were",
    age: 23,
  };
}

// 추론가능한 타입 data
const test: TReturnType<typeof data> = {
  name: "sdfd",
  age: 23,
};

```

infer는 타입을 추론가능하게 해주는대에 큰 의미가 있다. 아래타입으로 다시한번 이해를 도와보자

프로미스의 리턴되는 타입을 활용하고 싶을경우, 아래와 같이 infer를 활용해서 프로미스 제네릭에 작성된 타입을 사용할 수 있도록 만들어준다.
```typescript
type PromiseType<T> = T extends Promise<infer U> ? U : never;

const testPromise: PromiseType<Promise<number>> = 3; // number
```