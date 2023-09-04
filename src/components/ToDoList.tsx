import {
  toDoState,
  toDoSelector,
  categoryState,
  Categories,
  localStorageState,
} from "../store/atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  //✅state값을 가져올때
  // const toDos = useRecoilValue(toDoState);
  // ✅selector에서 변형되는 값들을 가져올때
  // const [todo, doing, done] = useRecoilValue(toDoSelector);
  // ✅state, setState 사용할때
  const [category, setCategory] = useRecoilState(categoryState);
  const toDoLocalStorage = useRecoilValue(localStorageState);
  const toDos = useRecoilValue(toDoSelector);

  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as Categories);
  };
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>todo</option>
        <option value={Categories.DOING}>doing</option>
        <option value={Categories.DONE}>done</option>
      </select>
      <CreateToDo></CreateToDo>
      {toDoLocalStorage?.map((toDo) => {
        return <ToDo key={toDo.id} {...toDo} />;
      })}
    </div>
  );
}

export default ToDoList;

/* 
<ul>
        {todo.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
      <h2>Doing</h2>
      <ul>
        {doing.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
      <h2>Done</h2>
      <ul>
        {done.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr /> */

/* <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul> */
