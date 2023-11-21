//Record는 키타입에 유연성을 제공하는 제네릭 타입이다.
type Vec3DD = Record<'x' | 'y' | 'z', number>;

const vec3DD: Vec3DD = {
  x: 1,
  y: 1,
  z: 1,
}

//그러나 가능하다면 인터페이스, Record, 매핑된 타입같은 인덱스 시그니처보단 정확한 타입을 쓰는편이 좋다.
interface NewInter { // <<<< 이런거 하지마시라구요!!!
  [key: string]: number;
}