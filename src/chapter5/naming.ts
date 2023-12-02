//모호한 네이밍을 주의해야한다.
//대표적인 예로 data, info, thing, item과 같은 네이밍은 별로 좋은 네이밍이 아니다.
//예제를 통해 살펴보자. 다음과 같은 인터페이스가 있다고 치자.

interface Product {
  id: number;
  name: string;
  cost: number;
  blame: boolean;
}

//뭔가 이상하다... id까지는 고유의 값이니 그렇다고 치더라도 name과 cost, blame은 애매하다.
//name이 정확히 무슨 이름인지를 알려주면 좋을것이며, cost는 좀 더 일반적인 표현인 price가 좋겠다!
//마지막으로 blame보다는 isReported(신고가 되었는가)라는 변수명이 더 자연스럽겠다.

interface Product {
  id: number;
  productName: string;
  price: number;
  isReported: boolean;
}

//이제야 좀 깔끔하다!
