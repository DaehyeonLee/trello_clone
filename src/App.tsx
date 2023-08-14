import { Children } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const App = () => {
  const onDragEndHandler = () => {};
  return (
    <DragDropContext onDragEnd={onDragEndHandler}>
      <div>
        <Droppable droppableId="one">
          {(provided) => (
            <ul ref={provided.innerRef} {...provided.droppableProps}>
              <Draggable draggableId="first" index={0}>
                {(provided) => (
                  <li ref={provided.innerRef} {...provided.draggableProps}>
                    <span {...provided.dragHandleProps}>ㅁ</span>
                    Hello
                  </li>
                )}
              </Draggable>
              <Draggable draggableId="second" index={1}>
                {(provided) => (
                  <li ref={provided.innerRef} {...provided.draggableProps}>
                    <span {...provided.dragHandleProps}>ㅁ</span>
                    hi
                  </li>
                )}
              </Draggable>
            </ul>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};
export default App;
