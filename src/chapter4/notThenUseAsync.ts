//1. 콜백보단 코드를 작성하기 쉽다.
//2. 콜백보단 타입추론이 쉽다.


//이러지 말자구
const _cache: {[url: string]: string} = {};
function fetchWithCache(url: string, callback: (text: string) => void) {
  if (url in _cache) {
    callback(_cache[url]);
  }
}


//이렇게 하자구
async function fetchWithCache2(url: string) {
  if (url in _cache) {
    return _cache[url];
  }
  const response = await fetch(url);
  const text = await response.text();
  _cache[url] = text;
  return text;
}