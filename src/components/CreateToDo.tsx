import { useForm } from 'react-hook-form';
import { useSetRecoilState, useRecoilValue, useRecoilState } from 'recoil';
import { categoryState, localStorageState, toDoState } from '../store/atoms';

interface IForm {
  toDo: string;
}

function CreateToDo() {
  // const [localStorageList, setLocalStorageList] =
  //   useRecoilState(localStorageState);
  const setLocalStorageList = useSetRecoilState(localStorageState);
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    // setToDos((oldToDos) => [
    //   { text: toDo, id: Date.now(), category: category as any },
    //   ...oldToDos,
    // ]);
    setLocalStorageList((oldToDos) => [
      { text: toDo, id: Date.now(), category: category },
      ...oldToDos,
    ]);
    setValue('toDo', '');
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register('toDo', {
          required: 'Please write a To Do',
        })}
        placeholder="Write a to do"
      />
      <button>Add</button>
    </form>
  );
}

export default CreateToDo;
