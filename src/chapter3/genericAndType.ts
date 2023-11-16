interface State {
  userId: string;
  pageTitle: string;
}

//Pick을 통해 객체타입내에 특정 속성만 추출해서 타입으로 사용하는게 가능하다.
type TopNavState = Pick<State, 'userId'>;


//다음과 같이 간단하게 중복을 활용하는것도 가능.
interface SaveAction {
  type: 'save';
}

interface LoadAction {
  type: 'load';
}

type Action = SaveAction | LoadAction;

type ActionType = Action['type'] // save | load

//이미 작성된 객체의 타입을 하나하나 작성하는건 무척 번거로운 일이다.
//이때는 typeof를 활용하여 타입을 추출하는게 좋다.

//또한 함수의 반환되는 타입을 활용할때는 ReturnType을 활용하자.


//제네릭을 잘 활용하는것도 아주 중요하다. 이는 내가 추후에 올릴 블로그에 "회사코드 개선경험"을 작성할때 더 부각될텐데,
//타입을 반복하기보단 제네릭을 사용하여 타입들간에 매핑을 하는 편이 좋다. 이땐 extends를 사용하면 된다.
//음... 조금 더 정확하고 자세히 설명하자면 제네릭은 특정 클래스, 함수, 컴포넌트에 어떤 타입이 들어와야할지 애매할때 쓰는듯하다.
//그래서 범용적으로 사용되는 컴포넌트가 있을때 그 컴포넌트를 위한 제네릭을 선언하는 경우가 있을것이다.