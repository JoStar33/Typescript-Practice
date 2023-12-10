//다음과 같이 any와 조건부 타입을 조합하여 코드를 작성할 수 있다. any이지만 구체적인 타입이 정의되는걸 볼 수 있을 것이다.
function uselessNumber<T extends number | string>(x: T): T extends string ? string : number;
function uselessNumber(x: any) { return x + x };


function wiredFuntion(x: string | number) {
  return uselessNumber(x);
};

wiredFuntion('x');
wiredFuntion(12);
