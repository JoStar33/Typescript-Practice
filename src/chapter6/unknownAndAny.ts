const any: any = 0;
//아래에 모든 케이스를 any의 경우 사용가능하다.
const numberAnyValue = any;
any.map((element) => {});

//unknown타입의 경우 any보다 안정적이다.
const unknown: unknown = 0;
//이경우 에러발생
// const numberValue: number = unknown;

//이경우에도 에러발생
// unknown.map((element) => {});
