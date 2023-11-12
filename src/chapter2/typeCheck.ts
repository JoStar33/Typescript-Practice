interface Square {
  width: number;
}

interface Rectangle extends Square {
  height: number;
}

type Shape = Square | Rectangle;

const calculateArea = (shape: Shape) => {
  // 런타임 에러 발생
  // if (shape instanceof Rectangle) {
  //   return shape.width * shape.height
  // }
  
  //타입체크를 위해선 아래와 같이 작성해야함.
  if ('height' in shape) {
    return shape.width * shape.height;
  }
};




// 타입스크립트의 타입시스템은 항상 열려있음
// 때문에 아래와 같은 당황스러운 결과를 개발자가 마주하기도함.
interface Vector3D {
  x: number;
  y: number;
  z: number;
}

const calculateLength1 = (v: Vector3D) => {
  let length = 0;
  for (const axis of Object.keys(v)) {
    const coord = v[axis]; // >> 타입이 any로 반환됨.
    length += Math.abs(coord);
  }
  return length;
}

// 이유는 아래와 같음. 
const vec3D = { x: 3, y: 4, z: 1, address: 'hihi' };
calculateLength1(vec3D); // 정상 NaN을 반환.