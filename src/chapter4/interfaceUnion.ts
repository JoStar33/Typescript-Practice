//인터페이스를 정의할때 아래와 같이 정의한다면, 문제가 생긴다.
//일단 아래 설계에서 개발자가 원하는건 layout과 paint의 타입이 서로 일치하길 바란다고 가정해보자.
interface FillLayout {
  name: string;
  width: number;
  height: number;
};

interface LineLayout {
  name: string;
  lineWidth: number;
  lineHeight: number;
};

interface PointLayout {
  name: string;
  pointWidth: number;
  pointHeight: number;
};

interface Layer {
  layout: FillLayout | LineLayout | PointLayout;
  paint: FillLayout | LineLayout | PointLayout;
};
//문제점이 뭔지 보이는가? 바로 FillLayout, LineLayout 이런 식으로 타입을 다르게 정의가능한
//현 상태를 볼 수 있다.

//따라서 타입을 계층으로 분리할 필요가 있다.

interface FillLayer {
  layout: FillLayout;
  paint: FillLayout;
}

interface PointLayer {
  layout: PointLayout;
  paint: PointLayout;
}

interface LineLayer {
  layout: LineLayout;
  paint: LineLayout;
}

type NewLayer = FillLayer | PointLayer | LineLayer;
