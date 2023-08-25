import { Draggable } from "react-beautiful-dnd";
import { Card, TrashButton } from "./Style";
import React from "react";

interface IDraggableProps {
  toDoId: number;
  toDoText: string;
  index: number;
}

const DraggableCard = ({ toDoId, toDoText, index }: IDraggableProps) => {
  const onTrashButtonHandler = () => {
    console.log();
  };
  return (
    <Draggable draggableId={toDoId + ""} index={index} key={toDoId}>
      {(provided, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          {toDoText}
          {<TrashButton onClick={onTrashButtonHandler}>🧻</TrashButton>}
        </Card>
      )}
    </Draggable>
  );
};

export default React.memo(DraggableCard);
