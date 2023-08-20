import { Children } from "react";
import { DragDropContext, Draggable, DropResult, Droppable } from "react-beautiful-dnd";
import { toDoState } from "./atoms";
import { useRecoilState } from "recoil";
import { Boards, Board, Wrapper } from "./Components/Style";
import DraggableCard from "./Components/DraggableCard";
import EachBoard from "./Components/EachBoard";

// const toDos = ["a", "b", "c", "d", "e", "f"];

const App = () => {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEndHandler = (info: DropResult) => {
    console.log(info);
    const { destination, draggableId, source } = info;
    if (!destination) return;
    if (destination?.droppableId === source.droppableId) {
      //same board movement
      setToDos((current) => {
        //1. copy array
        const copyToDos = [...current[source.droppableId]];
        // 2. delete item on source.index
        copyToDos.splice(source.index, 1);
        // 3. put back the item on the destination.index
        copyToDos.splice(destination?.index, 0, draggableId);
        return {
          ...current,
          [source.droppableId]: copyToDos,
        };
      });
    }
    if (destination.droppableId !== source.droppableId) {
      //cross board movement
      setToDos((allBoards) => {
        //1. copy array
        const sourceBoardCopy = [...allBoards[source.droppableId]];
        const destinationBoardCopy = [...allBoards[destination.droppableId]];
        // 2. delete item on source.index
        sourceBoardCopy.splice(source.index, 1);
        // 3. put back the item on the destination.index
        destinationBoardCopy.splice(destination?.index, 0, draggableId);
        return {
          ...allBoards,
          [source.droppableId]: sourceBoardCopy,
          [destination.droppableId]: destinationBoardCopy,
        };
      });
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEndHandler}>
      <Wrapper>
        <Boards>
          {Object.keys(toDos).map((boardId) => (
            <EachBoard boardId={boardId} key={boardId} toDos={toDos[boardId]} />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
};
export default App;
