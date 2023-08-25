import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { toDoState } from "./atoms";
import { useRecoilState } from "recoil";
import { Boards, Board, Wrapper } from "./Components/Style";
import EachBoard from "./Components/EachBoard";
import { useEffect } from "react";

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
        //1-1. copy object in array
        const copytaskObj = copyToDos[source.index];
        // 2. delete item on source.index
        copyToDos.splice(source.index, 1);
        // 3. put back the item on the destination.index
        copyToDos.splice(destination?.index, 0, copytaskObj);
        return {
          ...current,
          [source.droppableId]: copyToDos,
        };
      });
    }
    if (destination.droppableId !== source.droppableId) {
      //cross board movement
      //   if(destination.droppableId ? setToDos((boards)=>{return ...boards }) : setToDos((boards)=>{return boards}))
      setToDos((allBoards) => {
        //1. copy array
        const sourceBoardCopy = [...allBoards[source.droppableId]];
        const destinationBoardCopy = [...allBoards[destination.droppableId]];
        //1-1. copy object in array
        const copytaskObj = sourceBoardCopy[source.index];
        // 2. delete item on source.index
        sourceBoardCopy.splice(source.index, 1);
        // 3. put back the item on the destination.index
        destinationBoardCopy.splice(destination?.index, 0, copytaskObj);
        console.log("추가");
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
