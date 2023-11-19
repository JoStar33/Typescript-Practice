//infer를 통해 조건부 타입중 undefined, null인지 아닌지에 따라 타입을 따로 적용시키게 할 수 있다.

interface ButtonData {
  label: string;
  value: number;
}

interface Props<T> {
  items: T[];
}

const wantedFunction = <T>({ items }: Props<T extends infer T ? T : ButtonData>) => {
  console.log(items);
};

type UpdateData = 'A' extends infer R ? R : never;
