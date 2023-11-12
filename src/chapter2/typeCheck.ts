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
