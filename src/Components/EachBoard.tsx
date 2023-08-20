import { Droppable } from "react-beautiful-dnd";
import DraggableCard from "./DraggableCard";
import { Area, Board, Title } from "./Style";

interface IBoardProps {
  toDos: string[];
  boardId: string;
}

const EachBoard = ({ toDos, boardId }: IBoardProps) => {
  return (
    <Board>
      <Title>{boardId}</Title>
      <Droppable droppableId={boardId}>
        {(provided) => (
          <Area ref={provided.innerRef} {...provided.droppableProps}>
            {toDos.map((toDosItem, index) => (
              <DraggableCard key={toDosItem} index={index} toDosItem={toDosItem} />
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
