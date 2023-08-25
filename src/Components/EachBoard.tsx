import { Droppable } from "react-beautiful-dnd";
import DraggableCard from "./DraggableCard";
import { Area, Board, Form, Title } from "./Style";
import { useForm } from "react-hook-form";
import { ITodo, toDoState } from "../atoms";
import { useRecoilState, useSetRecoilState } from "recoil";

interface IBoardProps {
  toDos: ITodo[];
  boardId: string;
}

interface IForm {
  toDo: string;
}

const EachBoard = ({ toDos, boardId }: IBoardProps) => {
  const setToDostate = useSetRecoilState(toDoState);
  const { register, setValue, handleSubmit } = useForm<IForm>();
  const onValidHanlder = ({ toDo }: IForm) => {
    const newToDo = {
      id: Date.now(),
      text: toDo,
    };
    setToDostate((allBoards) => {
      return {
        ...allBoards,
        [boardId]: [...allBoards[boardId], newToDo],
      };
    });
    setValue("toDo", "");
  };
  return (
    <Board>
      <Title>{boardId}</Title>
      <Form onSubmit={handleSubmit(onValidHanlder)}>
        <input {...register("toDo", { required: true })} type="text" placeholder={`Add task on ${boardId}`}></input>
      </Form>
      <Droppable droppableId={boardId}>
        {(provided, snapshot) => (
          <Area
            isDraggingOver={snapshot.isDraggingOver}
            isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {toDos.map((toDosItem, index) => (
              <DraggableCard key={toDosItem.id} index={index} toDoId={toDosItem.id} toDoText={toDosItem.text} />
            ))}
            {/* dragHandleProps를 별도로 지정해서 그 위치에서한 그래그 활성화 할 수 있음 
         <Draggable draggableId="second" index={1}>
          {(provided) => (
            <Card ref={provided.innerRef} {...provided.draggableProps}>
              <span {...provided.dragHandleProps}>ㅁ</span>
              hi
            </Card>
          )}
        </Draggable> */}
            {provided.placeholder}
          </Area>
        )}
      </Droppable>
    </Board>
  );
};
export default EachBoard;
