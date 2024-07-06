type TUpdateData<R> = R extends (infer T)[] ? T : string;

const aValue: TUpdateData<"A"> = "sdfas";

type FuntionType<T> = T extends (...args: infer U) => infer R ? [U, R] : string;

const add = (a: number, b: number) => {
  return a + b;
};

const testValue = 123;

type NewFuntionType = FuntionType<typeof add>; //[[a: number, b: number], number]

type NewFuntionType2 = FuntionType<typeof testValue>; //string
