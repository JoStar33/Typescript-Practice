type TUpdateData<R> = R extends (infer T)[] ? T : string;

const aValue: TUpdateData<"A"> = "sdfas";

type FuntionType<T> = T extends (...args: infer U) => infer R ? [U, R] : string;

const add = (a: number, b: number) => {
  return a + b;
};

const testValue = 123;

type NewFuntionType = FuntionType<typeof add>; //[[a: number, b: number], number]

type NewFuntionType2 = FuntionType<typeof testValue>; //string

type TReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;

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

type PromiseType<T> = T extends Promise<infer U> ? U : never;

const testPromise: PromiseType<Promise<number>> = 3; // number
