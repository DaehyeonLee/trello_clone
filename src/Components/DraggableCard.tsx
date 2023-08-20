import { Draggable } from "react-beautiful-dnd";
import { Card } from "./Style";
import React from "react";

interface IDraggableProps {
  toDosItem: string;
  index: number;
}

const DraggableCard = ({ toDosItem, index }: IDraggableProps) => {
  return (
    <Draggable draggableId={toDosItem} index={index} key={toDosItem}>
      {(provided) => (
        <Card ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
          {toDosItem}
        </Card>
      )}
    </Draggable>
  );
};

export default React.memo(DraggableCard);
