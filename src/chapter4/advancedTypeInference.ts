const calcCoord = (coord: [number, number]) => {};

const coord = [10, 20];

//calcCoord(coord); //에러 발생!!! number[]를 [number, number]에 할당할 수 없습니다.



//그럼 해결책은? 다음과 같이 읽기 전용으로 만들고 넣어야함...! 아니면 coord2에 대한
//타입을 명시하여 집어넣어줘도 됨.
const calcCoord2 = (coord: Readonly<[number, number]>) => {};

const coord2 = [10, 20] as const;

calcCoord2(coord2);