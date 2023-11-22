let a = 'a'; //이경우, type이 스트링
//참 모호함... type 'a'일수도 있는거고 정말 스트링을 원하는걸수도 있잖아.
//이런경우는 const를 써주는게 좋다.
const b = 'b'; //이경우, type이 'b'

//그러나 객체나 배열은 어찌할 도리가 없음.
//이때에는 as const를 활용해서 타입을 넓히자
const typeArr = [1, 2, 3] as const;




//타입을 넓혀봤으니까 이제 좁혀볼까? 좁히는건 많이해서 알거다.
const fetchNewData = (data?: number) => {
  if (!data) return;
  //data는 numberType
  console.log(data);
};

const fetchNewData2 = (data?: number) => {
  if (data) {
    //data는 numberType
    console.log(data);
  };
};

const containChecker = (value: string | string[]) => {
  if (Array.isArray(value)) {
    //value는 스트링
    return value.find(element => 'hello'.includes(element));
  }
}