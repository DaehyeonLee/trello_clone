import { styled } from "styled-components";
import { ITodo } from "../atoms";

export const Card = styled.div<{ isDragging: boolean }>`
  display: flex;
  justify-content: space-between;
  padding: 10px 10px;
  margin-bottom: 5px;
  border-radius: 5px;
  background-color: ${(props) => (props.isDragging ? "tomato" : props.theme.cardColor)};
  box-shadow: ${(props) => (props.isDragging ? "0px 2px 5px rgba(0,0,0,0.1)" : "none")};
`;

export const Wrapper = styled.div`
  display: flex;
  max-width: 680px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Boards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  gap: 10px;
`;

export const Board = styled.div`
  padding: 20px 10px;
  padding-top: 30px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  height: 40px;
  /* margin-bottom: 10px; */
  font-size: 18px;
`;

interface IArea {
  isDraggingFromThis: boolean;
  isDraggingOver: boolean;
}

export const Area = styled.div<IArea>`
  background-color: ${(props) => (props.isDraggingOver ? "pink" : props.isDraggingFromThis ? "red" : "blue")};
  flex-grow: 1;
  transition: background-color 0.3s ease-in-out;
`;

export const Form = styled.form`
  width: 100%;
  input {
    width: 100%;
  }
`;

export const TrashButton = styled.button`
  background-color: white;
  border: none;
`;
