import { atom, selector } from "recoil";

export enum Categories {
  TO_DO = "TO_DO",
  DOING = "DOING",
  DONE = "DONE",
}
export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}

//사용자가 현재 선택한 카테고리에 대한 state
///select state
export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});

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
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});

const localStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }: any) => {
    // != 비교 연산자는 null과 가튼 FALSTY한 값인지 비교
    if (localStorage.setLocal !== null) {
      const savedValue = localStorage.getItem(key);
      savedValue && setSelf(JSON.parse(savedValue));
    }
    onSet((newValue: IToDo[], _: any, isReset: boolean) => {
      localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export const localStorageState = atom<IToDo[]>({
  key: "toDoList",
  default: [],
  effects: [localStorageEffect("toDoList")],
});
