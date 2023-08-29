import { atom, selector } from "recoil";
export interface IToDo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

///selector는 STATE를 파생할 수 있다
//atom의 output을 변형시키는 도구
//get은 atom을 받을 수 있다
//state를 바꾸지 않고 output을 결정한다
export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    let toDo = toDos.filter((toDo) => toDo.category === "TO_DO");
    let doing = toDos.filter((toDo) => toDo.category === "DOING");
    let done = toDos.filter((toDo) => toDo.category === "DONE");
    return [toDo, doing, done];
  },
});
