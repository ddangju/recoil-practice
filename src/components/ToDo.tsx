import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  Categories,
  IToDo,
  localStorageState,
  toDoState,
} from '../store/atoms';

function ToDo(props: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  // const toDo = useRecoilValue(toDoState);
  const toDo = useRecoilValue(localStorageState);
  const setLocalStorageList = useSetRecoilState(localStorageState);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === props.id);
      const newToDo = {
        text: props.text,
        id: props.id,
        category: event.currentTarget.name as IToDo['category'],
      };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  const onTodoDelete = () => {
    const newToDo = toDo.filter((todo) => todo.id !== props.id);
    setLocalStorageList(newToDo);
  };

  return (
    <>
      <li>{props.text}</li>
      <button onClick={onTodoDelete}>delete</button>
      {props.category !== Categories.DOING && (
        <button name={Categories.DOING} onClick={onClick}>
          Doing
        </button>
      )}
      {props.category !== Categories.TO_DO && (
        <button name={Categories.TO_DO} onClick={onClick}>
          To Do
        </button>
      )}
      {props.category !== Categories.DONE && (
        <button name={Categories.DONE} onClick={onClick}>
          Done
        </button>
      )}
    </>
  );
}
export default ToDo;

////setToDos의 순서
///1.oldToDos의 값들을 인자로 받는다.
//2.findIndex를 통해 toDo의 id와 props의 id를 찾는다
///3. todo는 값이 담긴 배열, props.id는 찾으려는 id값이다

///잘못 생각한 점
///1.클릭을 하면 event.target.id로 바꾸려는 요소를 변경하려고함
//2. 클릭을 하면 event.target.id로 바꾸려는 요소의text를 넣으려고함
//3 . setToDos내부에서 상태를 아래와 같이 직접 변경하면 안됨
// setToDos((oldToDos) => {

//   const targetIndex = oldToDos.findIndex((toDo) => toDo.id === props.id);
///  let updated = [...oldToDos]
///  updated[targetIndex] = {바꿀내용}
///  return updated
/////////////////////////////
//   oldToDos[targetIndex] = {
//     text: props.text,
//     id: props.id,
//     category: "DOING",
//   };

//   return oldToDos;
// });

/// 다시 생각해야 하는 문제
///1.배열의 전체 값을 atoms에 관리하고 있으며 그 값을 가져온다
///2. 클릭할 때 props로 넘어오는 id값을 지정하여 추출한다.
///3. 배열의 id값들과 넘어오는 id값을 findIndex메서드를 사용하여 비교하여 특정 값을 추출한다.

// setToDos((oldToDos) => {
//   const updatedToDos = oldToDos.map((todo) => {
//     if (todo.id === props.id) {
//       return {
//         ...todo,
//         category: "DOING",
//       };
//     }
//     return todo;
//   });

//   return updatedToDos;
// });

//4. 삭제기능
// button을 클릭하면 event인자를 받아 toDo와 비교하려고 했지만 사실 해당 컴포넌트는
// 특정 props의id값을 가지고 있었다.
// 그렇기에 filter함수를 활용하여 props의 id값과 toDo의 배열을 비교하여 **같은 값이 아닌 값**만 return한다
// 즉, 같은 값이면 새로운 배열에 포함하지 않는 것이다
// 변수 newToDo에 return한 값은 setToDos에 업데이트 해준다.
// 그렇게 화면에는 delete버튼을 클릭하면 삭제되는 것을 확인할 수 있따.
