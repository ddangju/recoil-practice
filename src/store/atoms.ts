import { atom } from "recoil";

export const isDarkAtom = atom<boolean | undefined>({
  ///required
  key: "isDark",
  ///할당하고 싶은 default값 설정
  default: true,
});
//셀렉터기능
//1.이미 선언한 아톰을 구독하고 값이 변할때 셀렉터에 할당된 함수가 실행된다.
//2. 서버와 통신하여 res값을 global state로 가질 수 있다.
