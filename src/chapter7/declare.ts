// 다음과 같이 postMessage를 정의해둠. 이후 window을 통해 접근가능.
declare interface Window {
  jsToWebviewSocialChannel?: {
    postMessage: (
      message: any,
      targetOrigin?: string,
      transfer?: any[]
    ) => void;
  };
}

window.jsToWebviewSocialChannel?.postMessage("메시지 전달");

// 그러나, 이는 좋은 방법은 아님. 걍 d.ts파일 만들고 거기서 Window 인터페이스를 관리하는게 나음.
